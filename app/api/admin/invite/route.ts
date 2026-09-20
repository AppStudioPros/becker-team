import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { createClient as createSupabaseClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'

function getServiceClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  )
}

async function isAdmin() {
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll: () => cookieStore.getAll() } }
  )
  const { data: { user } } = await supabase.auth.getUser()
  return !!user
}

export async function POST(req: NextRequest) {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { email } = await req.json()
  if (!email || typeof email !== 'string') return NextResponse.json({ error: 'Email is required' }, { status: 400 })

  const supabase = getServiceClient()

  const { data, error } = await supabase.auth.admin.inviteUserByEmail(email, {
    redirectTo: 'https://thebeckerteam.com/admin/accept-invite',
  })

  if (error) {
    const msg = error.message ?? 'Failed to send invite.'
    return NextResponse.json({ error: msg }, { status: 400 })
  }

  // Upsert into profiles table
  await supabase.from('becker_admin_profiles').upsert({
    id: data.user.id,
    email,
    display_name: null,
    role: 'user',
  }, { onConflict: 'id' })

  return NextResponse.json({ success: true })
}
