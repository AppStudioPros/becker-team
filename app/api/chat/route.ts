import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are Jamie's friendly assistant on The Becker Team website (thebeckerteam.com). 

You help visitors with questions about The Becker Team's mortgage services — but only information that's on the website. Keep every response short: 2-4 sentences max. Be warm and conversational, like a real person at a front desk.

What you can help with:
- Loan programs: VA Loans, FHA Loans, Conventional, Jumbo, Mortgage Accelerator™, Asset Qualifier
- Jamie Becker — Colorado mortgage broker, 21+ years experience, 3,500+ families helped
- The team and how they work
- The application and pre-approval process
- Scheduling a strategy call or consultation (direct them to the Contact page)
- General mortgage questions relevant to Colorado buyers

What you don't do:
- Quote specific rates (they change daily — tell them to call or schedule a call)
- Discuss other lenders or companies
- Give legal or financial advice
- Answer anything unrelated to home loans or The Becker Team

If someone asks something you don't know or that's off-topic, warmly redirect them: "Great question — the best way to get that answered is to schedule a quick call with Jamie. It's free and there's no pressure."

Always end responses with a gentle nudge toward contact if appropriate, but don't force it.`

export async function POST(req: NextRequest) {
  const { messages } = await req.json()

  if (!messages || !Array.isArray(messages)) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': process.env.ANTHROPIC_API_KEY!,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5',
      max_tokens: 200,
      system: SYSTEM_PROMPT,
      messages: messages.slice(-6), // keep last 3 turns for context
    }),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Chat unavailable' }, { status: 500 })
  }

  const data = await res.json()
  const text = data.content?.[0]?.text || "I'm having trouble right now. Please reach out to Jamie directly at thebeckerteam.com/contact!"

  return NextResponse.json({ message: text })
}
