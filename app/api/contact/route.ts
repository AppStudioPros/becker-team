import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const emailPattern = /^[^\s@,;<>]+@[^\s@,;<>]+$/
const submissionKeyPattern = /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/i

function readText(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function escapeHtml(value: string) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}

export async function POST(req: Request) {
  const body: unknown = await req.json().catch(() => null)
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json({ success: false }, { status: 400 })
  }

  const input = body as Record<string, unknown>
  const firstName = readText(input.firstName)
  const lastName = readText(input.lastName)
  const email = readText(input.email)
  const phone = readText(input.phone)
  const interest = readText(input.interest)
  const message = readText(input.message)
  const submissionKey = req.headers.get('Idempotency-Key')

  if (!firstName || !lastName || !emailPattern.test(email) ||
    (submissionKey && !submissionKeyPattern.test(submissionKey))) {
    return NextResponse.json({ success: false }, { status: 400 })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY ?? '')
    const { data, error } = await resend.emails.send({
      from: 'Becker Team Website <noreply@mail.thebeckerteam.com>',
      to: ['Jamie@thebeckerteam.com'],
      replyTo: email,
      subject: `New Inquiry from ${firstName} ${lastName}`.replace(/[\r\n]+/g, ' '),
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
        <p><strong>Interest:</strong> ${escapeHtml(interest || 'Not specified')}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\r?\n/g, '<br />')}</p>
      `,
    }, submissionKey ? { idempotencyKey: `website-contact/${submissionKey}` } : undefined)

    if (error || !data?.id) {
      console.error('Contact form email rejected:', error?.name ?? 'No email ID returned')
      return NextResponse.json({ success: false }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form email failed:', error instanceof Error ? error.name : 'Unknown error')
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
