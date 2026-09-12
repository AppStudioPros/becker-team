import { NextResponse } from 'next/server'
import { Resend } from 'resend'
export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY ?? '')
    const { firstName, lastName, email, phone, interest, message } = await req.json()

    await resend.emails.send({
      from: 'Becker Team Website <noreply@mail.thebeckerteam.com>',
      to: ['Jamie@thebeckerteam.com'],
      replyTo: email,
      subject: `New Inquiry from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Interest:</strong> ${interest || 'Not specified'}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
