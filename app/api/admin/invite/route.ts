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
      redirectTo: `${siteUrl}/admin/accept-invite`,
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

  // Send beautiful branded invite email via Resend (mail.thebeckerteam.com)
  const html = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
    <body style="margin:0;padding:0;background:#f5ecd8;font-family:Georgia,serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5ecd8;padding:40px 16px;">
        <tr><td align="center">
          <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

            <!-- Header -->
            <tr>
              <td style="background:#1c3023;border-radius:12px 12px 0 0;padding:36px 40px;text-align:center;">
                <p style="margin:0 0 6px;color:rgba(245,236,216,0.6);font-size:11px;letter-spacing:0.15em;text-transform:uppercase;">You're invited</p>
                <h1 style="margin:0;color:#f5ecd8;font-size:26px;font-weight:700;letter-spacing:0.02em;">The Becker Team</h1>
                <p style="margin:8px 0 0;color:rgba(245,236,216,0.55);font-size:13px;">Blog Management Admin</p>
              </td>
            </tr>

            <!-- Divider accent -->
            <tr>
              <td style="background:#c9a96e;height:3px;"></td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="background:#fff;padding:40px 40px 32px;border-left:1px solid #ede4cc;border-right:1px solid #ede4cc;">
                <p style="margin:0 0 20px;font-size:16px;color:#2d2d2d;line-height:1.75;">Hi there,</p>
                <p style="margin:0 0 28px;font-size:15px;color:#444;line-height:1.8;">
                  You've been given access to manage <strong style="color:#1c3023;">The Becker Team</strong> blog. Click the button below to set your password and activate your account.
                </p>

                <!-- CTA Button -->
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" style="padding:8px 0 32px;">
                      <a href="${inviteUrl}"
                        style="display:inline-block;background:#1c3023;color:#f5ecd8;font-family:Georgia,serif;font-size:15px;font-weight:700;letter-spacing:0.04em;padding:16px 44px;border-radius:6px;text-decoration:none;">
                        Set My Password
                      </a>
                    </td>
                  </tr>
                </table>

                <!-- Divider -->
                <hr style="border:none;border-top:1px solid #ede4cc;margin:0 0 24px;" />

                <p style="margin:0;font-size:12px;color:#aaa;line-height:1.7;text-align:center;">
                  This link expires in <strong>24 hours</strong>.<br>
                  If you weren't expecting this invite, you can safely ignore this email.
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f5ecd8;border:1px solid #ede4cc;border-top:none;border-radius:0 0 12px 12px;padding:20px 40px;text-align:center;">
                <p style="margin:0;font-size:11px;color:#b0a090;letter-spacing:0.05em;">
                  The Becker Team &nbsp;&bull;&nbsp; Xpert Home Lending &nbsp;&bull;&nbsp; NMLS #794730
                </p>
                <p style="margin:6px 0 0;font-size:11px;">
                  <a href="https://thebeckerteam.com" style="color:#c9a96e;text-decoration:none;">thebeckerteam.com</a>
                </p>
              </td>
            </tr>

          </table>
        </td></tr>
      </table>
    </body>
    </html>
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
