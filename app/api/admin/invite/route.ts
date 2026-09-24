import { NextRequest, NextResponse } from 'next/server'
import { createClient as createSupabaseClient } from '@supabase/supabase-js'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

function getServiceClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  )
}

async function getAuthenticatedUser() {
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll: () => cookieStore.getAll() } }
  )
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export async function POST(req: NextRequest) {
  const user = await getAuthenticatedUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { email } = await req.json()
  if (!email) return NextResponse.json({ error: 'Email is required' }, { status: 400 })

  const supabase = getServiceClient()
  const siteUrl = 'https://thebeckerteam.com'

  // Use generateLink so WE send the email — not Supabase
  const { data: linkData, error: linkError } = await supabase.auth.admin.generateLink({
    type: 'invite',
    email,
    options: {
      redirectTo: `${siteUrl}/admin/auth/callback?next=/admin/accept-invite`,
    },
  })

  if (linkError) return NextResponse.json({ error: linkError.message }, { status: 400 })

  const userId = linkData.user.id
  const inviteUrl = linkData.properties.action_link

  // Upsert profile row
  await supabase.from('becker_admin_profiles').upsert({
    id: userId,
    email,
    display_name: null,
    role: 'user',
  }, { onConflict: 'id' })

  // Send branded invite email via Resend (mail.thebeckerteam.com)
  const html = `
    <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #1c3023;">
      <div style="background: #1c3023; padding: 28px 32px; border-radius: 8px 8px 0 0; text-align: center;">
        <h1 style="color: #f5ecd8; font-size: 20px; font-weight: 700; margin: 0;">The Becker Team</h1>
        <p style="color: rgba(245,236,216,0.7); font-size: 12px; margin: 6px 0 0;">Blog Admin Access</p>
      </div>
      <div style="background: #fafaf8; padding: 32px; border: 1px solid #ede4cc; border-top: none; border-radius: 0 0 8px 8px;">
        <p style="font-size: 15px; color: #333; line-height: 1.7; margin-bottom: 24px;">
          You've been invited to manage The Becker Team blog. Click the button below to set your password and get started.
        </p>
        <div style="text-align: center; margin: 28px 0;">
          <a href="${inviteUrl}" style="display: inline-block; background: #1c3023; color: #f5ecd8; font-weight: 700; font-size: 15px; padding: 14px 36px; border-radius: 6px; text-decoration: none;">
            Accept Invite
          </a>
        </div>
        <p style="font-size: 12px; color: #999; text-align: center; margin-top: 24px;">
          This link expires in 24 hours. If you didn't expect this invite, you can safely ignore this email.
        </p>
        <hr style="border: none; border-top: 1px solid #ede4cc; margin: 20px 0;" />
        <p style="font-size: 12px; color: #999; text-align: center; margin: 0;">
          The Becker Team &bull; Xpert Home Lending &bull; thebeckerteam.com
        </p>
      </div>
    </div>
  `

  const resendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'The Becker Team <noreply@mail.thebeckerteam.com>',
      to: email,
      subject: "You've been invited to The Becker Team admin",
      html,
    }),
  })

  if (!resendRes.ok) {
    console.error('Resend error:', await resendRes.text())
  }

  return NextResponse.json({ success: true })
}
