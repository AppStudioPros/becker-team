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

async function isAuthenticated() {
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll: () => cookieStore.getAll() } }
  )
  const { data: { user } } = await supabase.auth.getUser()
  return !!user
}

// GET — list all users from profiles table enriched with confirmed status
export async function GET() {
  if (!(await isAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const supabase = getServiceClient()

  // Get profiles
  const { data: profiles, error } = await supabase
    .from('becker_admin_profiles')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  // Get auth users to check confirmed_at
  const { data: authData } = await supabase.auth.admin.listUsers({ perPage: 100 })
  const authUsers = authData?.users ?? []
  const authMap = new Map(authUsers.map(u => [u.id, {
    confirmed_at: u.email_confirmed_at ?? null,
    last_sign_in_at: u.last_sign_in_at ?? null,
  }]))

  const enriched = (profiles ?? []).map(p => ({
    id: p.id,
    email: p.email,
    display_name: p.display_name,
    role: p.role,
    created_at: p.created_at,
    confirmed_at: authMap.get(p.id)?.confirmed_at ?? null,
    last_sign_in_at: authMap.get(p.id)?.last_sign_in_at ?? null,
  }))

  return NextResponse.json({ users: enriched })
}

// DELETE — remove user from auth AND profiles
export async function DELETE(req: NextRequest) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { userId } = await req.json()
  if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 })

  const supabase = getServiceClient()
  // Profile row deletes via CASCADE when auth user is deleted
  const { error } = await supabase.auth.admin.deleteUser(userId)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ success: true })
}
