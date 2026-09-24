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
  if (!user) return false

  const admin = getServiceClient()
  const { data } = await admin
    .from('becker_admin_profiles')
    .select('id')
    .eq('id', user.id)
    .single()

  return !!data
}

async function sendBeckerEmail(to: string, subject: string, html: string) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'The Becker Team <noreply@mail.thebeckerteam.com>',
      to,
      subject,
      html,
    }),
  })
  if (!res.ok) console.error('Resend error:', await res.text())
}

// POST /api/admin/users/[id] — actions: resend_invite | reset_password
export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { action, email } = await req.json()
  const { id } = await params
  const supabase = getServiceClient()
  const siteUrl = 'https://thebeckerteam.com'

  if (action === 'resend_invite') {
    const { data: linkData, error } = await supabase.auth.admin.generateLink({
      type: 'invite',
      email,
      options: { redirectTo: `${siteUrl}/admin/auth/callback?next=/admin/accept-invite` },
    })
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    await sendBeckerEmail(email, "You've been invited to The Becker Team admin", `
      <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto;">
        <div style="background: #1c3023; padding: 24px 32px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: #f5ecd8; font-size: 18px; margin: 0;">The Becker Team</h1>
        </div>
        <div style="background: #fafaf8; padding: 28px 32px; border: 1px solid #ede4cc; border-top: none; border-radius: 0 0 8px 8px;">
          <p style="color: #333; font-size: 15px; line-height: 1.7;">Your invite link has been resent. Click below to set your password.</p>
          <div style="text-align: center; margin: 24px 0;">
            <a href="${linkData.properties.action_link}" style="background: #1c3023; color: #f5ecd8; padding: 12px 32px; border-radius: 6px; text-decoration: none; font-weight: 700;">Accept Invite</a>
          </div>
          <p style="font-size: 12px; color: #999; text-align: center;">This link expires in 24 hours.</p>
        </div>
      </div>
    `)

    return NextResponse.json({ success: true })
  }

  if (action === 'reset_password') {
    const { data: linkData, error } = await supabase.auth.admin.generateLink({
      type: 'recovery',
      email,
      options: { redirectTo: `${siteUrl}/admin/auth/callback?next=/admin/accept-invite` },
    })
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    await sendBeckerEmail(email, 'Reset your Becker Team admin password', `
      <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto;">
        <div style="background: #1c3023; padding: 24px 32px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: #f5ecd8; font-size: 18px; margin: 0;">The Becker Team</h1>
        </div>
        <div style="background: #fafaf8; padding: 28px 32px; border: 1px solid #ede4cc; border-top: none; border-radius: 0 0 8px 8px;">
          <p style="color: #333; font-size: 15px; line-height: 1.7;">Click below to reset your admin password.</p>
          <div style="text-align: center; margin: 24px 0;">
            <a href="${linkData.properties.action_link}" style="background: #1c3023; color: #f5ecd8; padding: 12px 32px; border-radius: 6px; text-decoration: none; font-weight: 700;">Reset Password</a>
          </div>
          <p style="font-size: 12px; color: #999; text-align: center;">This link expires in 24 hours.</p>
        </div>
      </div>
    `)

    return NextResponse.json({ success: true })
  }

  return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
}
