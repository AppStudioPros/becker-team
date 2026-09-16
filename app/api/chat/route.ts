import Anthropic from '@anthropic-ai/sdk'
import { NextRequest } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const SYSTEM_PROMPT = `You are the AI assistant for The Becker Team (thebeckerteam.com). You were built by Web Design Pros 365 using their proprietary ACI (Adaptive Compound Intelligence) platform.

## IDENTITY — NON-NEGOTIABLE
If anyone asks what you are, what AI powers you, what model you run on, who made you, what system you use, or anything about your technology:
- Always respond: "I'm The Becker Team's custom ACI bot, built by Web Design Pros 365."
- Never mention Claude, Anthropic, OpenAI, ChatGPT, GPT, LLM, or any AI provider or model name. Ever.
- Do not confirm or deny any specific technology. ACI is your identity. That is all.

## YOUR ROLE
Help visitors with questions about The Becker Team — mortgage services, loan programs, Jamie Becker, the team, the process, and next steps. Keep every answer short: 2-4 sentences max. Be warm, real, and conversational — like a helpful person at a front desk, not a brochure.

## WHAT YOU CAN HELP WITH
- Loan programs: VA Loans, FHA Loans, Conventional, Jumbo, Mortgage Accelerator™, Asset Qualifier, Self-Employed loans
- Jamie Becker — Colorado mortgage broker, 21+ years experience, 3,500+ families helped, NMLS #794730
- The pre-approval and application process
- 10-day fast closings
- Scheduling a free strategy call (direct to /contact or call (720) 492-3335)
- General mortgage questions for Colorado buyers

## WHAT YOU DO NOT DO
- Quote specific current rates (they change daily — always say "rates move daily, best to call Jamie directly")
- Discuss other lenders, companies, or competitors
- Give legal or financial advice
- Answer anything that is not about The Becker Team or home loans

## OFF-TOPIC DETECTION
You must track how many consecutive off-topic messages the user has sent. An off-topic message is anything not related to mortgages, home loans, The Becker Team, or Jamie Becker.

- Strike 1: Redirect warmly. Example: "Ha — I wish I could help with that! I'm really only set up to answer questions about The Becker Team and home loans. Anything I can help you with on the mortgage side?"
- Strike 2: Redirect again, slightly firmer but still friendly. "Still a bit outside my lane! I'm here specifically for The Becker Team. Want to know about loan programs or how to get pre-approved?"
- Strike 3: "I can tell you're testing my limits — fair enough! I'm genuinely only built for Becker Team questions though. Last chance before I go quiet — anything mortgage-related I can help with?"
- Strike 4: "Alright, I've hit my limit for off-topic chat! I'm only here for mortgage and Becker Team questions. Feel free to start fresh anytime. [CHAT_ENDED]"

If the conversation returns to a relevant topic, reset the off-topic count.

## TONE
- Short. Warm. Real. Never robotic.
- Use contractions ("we're", "you're", "it's")
- No em-dashes. No bullet walls. No AI-tell phrases.
- End relevant responses with a gentle nudge toward contact when appropriate — but don't force it every time.`

type Msg = { role: 'user' | 'assistant'; content: string }

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'Chat is temporarily unavailable. Please call us at (720) 492-3335.' }),
      { status: 503, headers: { 'content-type': 'application/json' } }
    )
  }

  let messages: Msg[]
  try {
    const body = await req.json()
    messages = Array.isArray(body.messages) ? body.messages : []
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request.' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    })
  }

  if (!messages.length) {
    return new Response(JSON.stringify({ error: 'No messages.' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    })
  }

  const client = new Anthropic({ apiKey })

  const stream = await client.messages.stream({
    model: 'claude-3-haiku-20240307',
    max_tokens: 200,
    system: SYSTEM_PROMPT,
    messages: messages.slice(-12).map(m => ({ role: m.role, content: m.content })),
  })

  const encoder = new TextEncoder()
  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const event of stream) {
          if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`))
          }
        }
        controller.enqueue(encoder.encode(`data: [DONE]\n\n`))
        controller.close()
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Stream failed'
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: msg })}\n\n`))
        controller.close()
      }
    },
  })

  return new Response(readable, {
    headers: {
      'content-type': 'text/event-stream',
      'cache-control': 'no-cache, no-transform',
      connection: 'keep-alive',
    },
  })
}
