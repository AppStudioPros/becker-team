import { createClient } from '@supabase/supabase-js'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

function getServiceClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  )
}

async function getCurrentUserProfile() {
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll: () => cookieStore.getAll() } }
  )
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const admin = getServiceClient()
  const { data } = await admin
    .from('becker_admin_profiles')
    .select('id, role')
    .eq('id', user.id)
    .single()

  return data ?? null
}

// GET — list users (super_admin sees all; admin sees all except super_admin)
export async function GET() {
  const profile = await getCurrentUserProfile()
  if (!profile) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  if (!['admin', 'super_admin'].includes(profile.role)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const supabase = getServiceClient()

  const { data: profiles, error } = await supabase
    .from('becker_admin_profiles')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const { data: authData } = await supabase.auth.admin.listUsers({ perPage: 100 })
  const authUsers = authData?.users ?? []
  const authMap = new Map(authUsers.map(u => [u.id, {
    confirmed_at: u.email_confirmed_at ?? null,
    last_sign_in_at: u.last_sign_in_at ?? null,
  }]))

  const allUsers = (profiles ?? []).map(p => ({
    id: p.id,
    email: p.email,
    display_name: p.display_name,
    role: p.role,
    created_at: p.created_at,
    confirmed_at: authMap.get(p.id)?.confirmed_at ?? null,
    last_sign_in_at: authMap.get(p.id)?.last_sign_in_at ?? null,
  }))

  // Non-super-admins cannot see super_admin accounts
  const visible = profile.role === 'super_admin'
    ? allUsers
    : allUsers.filter(u => u.role !== 'super_admin')

  return NextResponse.json({ users: visible })
}

// DELETE — remove user (cannot delete a super_admin)
export async function DELETE(req: NextRequest) {
  const profile = await getCurrentUserProfile()
  if (!profile) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  if (!['admin', 'super_admin'].includes(profile.role)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const { userId } = await req.json()
  if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 })

  const supabase = getServiceClient()

  // Block deletion of super_admin accounts
  const { data: target } = await supabase
    .from('becker_admin_profiles')
    .select('role')
    .eq('id', userId)
    .single()

  if (target?.role === 'super_admin') {
    return NextResponse.json({ error: 'Cannot remove a super admin.' }, { status: 403 })
  }

  const { error } = await supabase.auth.admin.deleteUser(userId)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ success: true })
}
