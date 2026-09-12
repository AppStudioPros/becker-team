import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'


export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? '')
  const data = await req.json()
  const { firstName, lastName, email } = data

  if (!firstName || !email) {
    return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
  }

  const row = (label: string, value: string) =>
    `<tr><td style="padding:8px 12px;font-weight:600;color:#1F2E2A;white-space:nowrap;">${label}</td><td style="padding:8px 12px;color:#333;">${value || '—'}</td></tr>`

  try {
    await resend.emails.send({
      from: 'Becker Team Site <noreply@webdesignpros365.com>',
      to: ['Jamie@thebeckerteam.com'],
      replyTo: email,
      subject: `Strategy Review Request from ${firstName} ${lastName}`,
      html: `
        <h2 style="font-family:Georgia,serif;color:#1F2E2A;margin-bottom:16px;">New Strategy Review Submission</h2>
        <table style="width:100%;border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">
          ${row('First Name', firstName)}
          ${row('Last Name', lastName)}
          ${row('Email', `<a href="mailto:${email}">${email}</a>`)}
          ${row('Phone', data.phone)}
          ${row('Newsletter Opt-in', data.newsletter ? 'Yes' : 'No')}
          ${row('Purchase or Refinance', data.purchaseOrRefi)}
          ${row('Savings / Rainy-Day Funds', data.savings)}
          ${row('Monthly Net Income (checking)', data.monthlyIncome)}
          ${row('Mortgage Balance & Rate (refi)', data.mortgageBalance)}
          ${row('How Long Had Mortgage', data.mortgageLength)}
          ${row('Months/Years Into Mortgage (refi)', data.monthsIntoMortgage)}
          ${row('Property Taxes & Insurance', data.taxesInsurance)}
          ${row('Auto Payments', data.autoPayments)}
          ${row('Student Loan Payments', data.studentLoans)}
          ${row('Credit Cards / Household Expenses', data.creditCards)}
          ${row('Other Monthly Expenses', data.otherExpenses)}
          ${row('Second-Home Payment', data.secondHome)}
          ${row('Years Until Retirement', data.yearsToRetirement)}
          ${row('Anything Else', data.anythingElse)}
        </table>
        <p style="margin-top:20px;font-size:12px;color:#999;">Submitted via thebeckerteam.com strategy review form.</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Email failed' }, { status: 500 })
  }
}
