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

function row(label: string, value: string) {
  return `<tr><td style="padding:8px 12px;font-weight:600;color:#1F2E2A;white-space:nowrap;">${label}</td><td style="padding:8px 12px;color:#333;">${escapeHtml(value || '—').replace(/\r?\n/g, '<br />')}</td></tr>`
}

const optionalFields = [
  ['savings', 'Savings / Rainy-Day Funds'],
  ['monthlyIncome', 'Monthly Net Income (checking)'],
  ['mortgageBalance', 'Mortgage Balance & Rate (refi)'],
  ['mortgageLength', 'How Long Had Mortgage'],
  ['monthsIntoMortgage', 'Months/Years Into Mortgage (refi)'],
  ['taxesInsurance', 'Property Taxes & Insurance'],
  ['autoPayments', 'Auto Payments'],
  ['studentLoans', 'Student Loan Payments'],
  ['creditCards', 'Credit Cards / Household Expenses'],
  ['otherExpenses', 'Other Monthly Expenses'],
  ['secondHome', 'Second-Home Payment'],
  ['yearsToRetirement', 'Years Until Retirement'],
  ['anythingElse', 'Anything Else'],
] as const

export async function POST(req: Request) {
  const body: unknown = await req.json().catch(() => null)

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json({ ok: false, error: 'Invalid form submission' }, { status: 400 })
  }

  const input = body as Record<string, unknown>
  const firstName = readText(input.firstName)
  const lastName = readText(input.lastName)
  const email = readText(input.email)
  const phone = readText(input.phone)
  const purchaseOrRefi = readText(input.purchaseOrRefi)
  const submissionKey = req.headers.get('Idempotency-Key')
  const details = optionalFields.map(([field, label]) => ({
    label,
    value: readText(input[field]),
    limit: field === 'anythingElse' ? 3000 : 300,
  }))

  if (
    !firstName || firstName.length > 120 ||
    !lastName || lastName.length > 120 ||
    email.length > 254 || !emailPattern.test(email) ||
    phone.length > 80 ||
    (purchaseOrRefi !== 'Purchase' && purchaseOrRefi !== 'Refinance') ||
    (submissionKey !== null && !submissionKeyPattern.test(submissionKey)) ||
    details.some(({ value, limit }) => value.length > limit)
  ) {
    return NextResponse.json({ ok: false, error: 'Check the form entries' }, { status: 400 })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY ?? '')
    const { data, error } = await resend.emails.send({
      from: 'Becker Team Site <noreply@webdesignpros365.com>',
      to: ['Jamie@thebeckerteam.com'],
      replyTo: email,
      subject: `Strategy Review Request from ${firstName} ${lastName}`.replace(/[\r\n]+/g, ' '),
      html: `
        <h2 style="font-family:Georgia,serif;color:#1F2E2A;margin-bottom:16px;">New Strategy Review Submission</h2>
        <table style="width:100%;border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">
          ${row('First Name', firstName)}
          ${row('Last Name', lastName)}
          ${row('Email', email)}
          ${row('Phone', phone)}
          ${row('Newsletter Opt-in', input.newsletter === true ? 'Yes' : 'No')}
          ${row('Purchase or Refinance', purchaseOrRefi)}
          ${details.map(({ label, value }) => row(label, value)).join('\n')}
        </table>
        <p style="margin-top:20px;font-size:12px;color:#666;">Submitted via thebeckerteam.com strategy review form.</p>
      `,
    }, submissionKey ? { idempotencyKey: `website-strategy-review/${submissionKey}` } : undefined)

    if (error || !data?.id) {
      console.error('Strategy review email rejected:', error?.name ?? 'No email ID returned')
      return NextResponse.json({ ok: false, error: 'Email not accepted' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Strategy review email failed:', error instanceof Error ? error.name : 'Unknown error')
    return NextResponse.json({ ok: false, error: 'Email failed' }, { status: 500 })
  }
}
