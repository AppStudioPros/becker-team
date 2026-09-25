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

function beckerEmailHtml(actionUrl: string, ctaLabel: string, bodyText: string) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5ecd8;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5ecd8;padding:40px 16px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">
        <tr>
          <td style="background:#1c3023;border-radius:12px 12px 0 0;padding:36px 40px;text-align:center;">
            <p style="margin:0 0 6px;color:rgba(245,236,216,0.6);font-size:11px;letter-spacing:0.15em;text-transform:uppercase;">Blog Admin</p>
            <h1 style="margin:0;color:#f5ecd8;font-size:26px;font-weight:700;">The Becker Team</h1>
          </td>
        </tr>
        <tr><td style="background:#c9a96e;height:3px;"></td></tr>
        <tr>
          <td style="background:#fff;padding:40px 40px 32px;border-left:1px solid #ede4cc;border-right:1px solid #ede4cc;">
            <p style="margin:0 0 28px;font-size:15px;color:#444;line-height:1.8;">${bodyText}</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td align="center" style="padding:0 0 32px;">
                  <a href="${actionUrl}" style="display:inline-block;background:#1c3023;color:#f5ecd8;font-family:Georgia,serif;font-size:15px;font-weight:700;letter-spacing:0.04em;padding:16px 44px;border-radius:6px;text-decoration:none;">${ctaLabel}</a>
                </td>
              </tr>
            </table>
            <hr style="border:none;border-top:1px solid #ede4cc;margin:0 0 24px;" />
            <p style="margin:0;font-size:12px;color:#aaa;text-align:center;line-height:1.7;">
              This link expires in <strong>24 hours</strong>.<br>
              If you weren't expecting this email, you can safely ignore it.
            </p>
          </td>
        </tr>
        <tr>
          <td style="background:#f5ecd8;border:1px solid #ede4cc;border-top:none;border-radius:0 0 12px 12px;padding:20px 40px;text-align:center;">
            <p style="margin:0;font-size:11px;color:#b0a090;">The Becker Team &nbsp;&bull;&nbsp; Xpert Home Lending &nbsp;&bull;&nbsp; NMLS #794730</p>
            <p style="margin:6px 0 0;font-size:11px;"><a href="https://thebeckerteam.com" style="color:#c9a96e;text-decoration:none;">thebeckerteam.com</a></p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
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
      options: { redirectTo: `${siteUrl}/admin/accept-invite` },
    })
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    await sendBeckerEmail(email, "You've been invited to The Becker Team admin", beckerEmailHtml(
      linkData.properties.action_link,
      'Set My Password',
      "Your invite has been resent. Click the button below to set your password and activate your account."
    ))

    return NextResponse.json({ success: true })
  }

  if (action === 'reset_password') {
    const { data: linkData, error } = await supabase.auth.admin.generateLink({
      type: 'recovery',
      email,
      options: { redirectTo: `${siteUrl}/admin/accept-invite` },
    })
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    await sendBeckerEmail(email, 'Reset your Becker Team admin password', beckerEmailHtml(
      linkData.properties.action_link,
      'Reset My Password',
      "We received a request to reset your admin password. Click the button below to choose a new one."
    ))

    return NextResponse.json({ success: true })
  }

  return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
}
