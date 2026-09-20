import { NextRequest, NextResponse } from 'next/server'
import { createClient as createServerClient } from '@/lib/supabase/server'
import { createClient as createSupabaseClient } from '@supabase/supabase-js'

function createServiceClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  )
}

export async function POST(req: NextRequest) {
  try {
    // Verify caller is authenticated
    const supabase = await createServerClient()
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const { email, resend } = body

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const adminClient = createServiceClient()

    // If resending, delete the existing unconfirmed user first so invite works cleanly
    if (resend) {
      const { data } = await adminClient.auth.admin.listUsers()
      const existing = data?.users?.find(u => u.email === email && !u.email_confirmed_at)
      if (existing) await adminClient.auth.admin.deleteUser(existing.id)
    }

    const { error } = await adminClient.auth.admin.inviteUserByEmail(email, {
      redirectTo: 'https://thebeckerteam.com/admin/accept-invite',
    })

    if (error) {
      console.error('Invite error:', error)
      const msg = error.message?.toLowerCase() ?? ''
      const friendly = msg.includes('already registered') || msg.includes('already been registered')
        ? 'That email is already registered as an admin user.'
        : msg.includes('invalid') || msg.includes('email')
        ? 'Please enter a valid email address.'
        : error.message || 'Failed to send invite — please try again.'
      return NextResponse.json({ error: friendly }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('POST /api/admin/invite error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
