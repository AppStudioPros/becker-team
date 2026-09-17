'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { X, Send, ChevronDown } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

// ── 4-Node Orb (Becker colors) ──────────────────────────────────────────────

type Node = { x: number; y: number; vx: number; vy: number; baseR: number; pulsePhase: number }

const CENTER = 16
const INNER_RADIUS = 16

function initialNodes(): Node[] {
  return [
    { x: 6,  y: 10, vx: 5.8,  vy: -4.9, baseR: 2.8, pulsePhase: 0 },
    { x: 26, y: 8,  vx: -5.2, vy:  5.5, baseR: 3.0, pulsePhase: 0.4 },
    { x: 24, y: 26, vx: -5.6, vy: -4.7, baseR: 2.6, pulsePhase: 0.8 },
    { x: 8,  y: 24, vx:  5.0, vy:  4.8, baseR: 2.9, pulsePhase: 1.2 },
  ]
}

function NodeOrb({ className }: { className?: string }) {
  const [nodes, setNodes] = useState<Node[]>(initialNodes)
  const rafRef = useRef<number | null>(null)
  const lastTsRef = useRef<number | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

    const step = (ts: number) => {
      const last = lastTsRef.current ?? ts
      const dt = Math.min(0.05, (ts - last) / 1000)
      lastTsRef.current = ts

      setNodes(prev => prev.map(n => {
        let { x, y, vx, vy } = n
        x += vx * dt
        y += vy * dt
        const dx = x - CENTER, dy = y - CENTER
        const dist = Math.sqrt(dx * dx + dy * dy)
        const maxDist = INNER_RADIUS - n.baseR
        if (dist > maxDist) {
          const nx = dx / dist, ny = dy / dist
          const dot = vx * nx + vy * ny
          vx -= 2 * dot * nx
          vy -= 2 * dot * ny
          x = CENTER + nx * maxDist
          y = CENTER + ny * maxDist
        }
        return { ...n, x, y, vx, vy, pulsePhase: (n.pulsePhase + dt / 1.6) % 1 }
      }))

      rafRef.current = window.requestAnimationFrame(step)
    }

    rafRef.current = window.requestAnimationFrame(step)
    return () => { if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current) }
  }, [])

  // Connect nodes in a ring: 0-1, 1-2, 2-3, 3-0, plus diagonals 0-2, 1-3
  const lines: [number, number][] = [[0,1],[1,2],[2,3],[3,0],[0,2],[1,3]]

  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="becker-node-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f5ecd8" stopOpacity="0.7" />
          <stop offset="60%" stopColor="#f5ecd8" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#f5ecd8" stopOpacity="0" />
        </radialGradient>
      </defs>

      {lines.map(([a, b], i) => (
        <line key={i}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          stroke="rgba(200,151,43,0.6)"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
      ))}

      {nodes.map((n, i) => {
        const sine = Math.sin(n.pulsePhase * Math.PI * 2)
        const r = n.baseR + sine * 0.7
        return (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={r * 2.4} fill="url(#becker-node-glow)" />
            <circle cx={n.x} cy={n.y} r={Math.max(1.4, r)} fill="#f5ecd8" opacity={0.85 + sine * 0.15} />
          </g>
        )
      })}
    </svg>
  )
}

// ── Chat Message Types ───────────────────────────────────────────────────────

type Message = { role: 'user' | 'assistant'; content: string }

const STARTERS = [
  "What loan programs do you offer?",
  "How does the VA loan work?",
  "How do I get pre-approved?",
  "What makes The Becker Team different?",
]

// ── Main Widget ──────────────────────────────────────────────────────────────

export default function ChatWidget() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  if (pathname?.startsWith('/admin')) return null
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [chatEnded, setChatEnded] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  function clearChat() {
    setMessages([])
    setChatEnded(false)
  }

  async function sendMessage(text: string) {
    if (!text.trim() || loading || chatEnded) return
    const userMsg: Message = { role: 'user', content: text.trim() }
    const next = [...messages, userMsg]
    setMessages(next)
    setInput('')
    setTimeout(() => inputRef.current?.focus(), 50)
    setLoading(true)

    // Add empty assistant message to stream into
    setMessages(prev => [...prev, { role: 'assistant', content: '' }])

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })

      if (!res.ok || !res.body) {
        setMessages(prev => {
          const updated = [...prev]
          updated[updated.length - 1] = { role: 'assistant', content: "Something went wrong. You can reach Jamie at (720) 492-3335!" }
          return updated
        })
        setLoading(false)
    setTimeout(() => inputRef.current?.focus(), 10)
        return
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let fullText = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value, { stream: true })
        const lines = chunk.split('\n')
        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          const raw = line.slice(6)
          if (raw === '[DONE]') break
          try {
            const parsed = JSON.parse(raw)
            if (parsed.text) {
              fullText += parsed.text
              const cleaned = fullText.replace('[CHAT_ENDED]', '').trim()
              setMessages(prev => {
                const updated = [...prev]
                updated[updated.length - 1] = { role: 'assistant', content: cleaned }
                return updated
              })
              if (fullText.includes('[CHAT_ENDED]')) {
                setChatEnded(true)
              }
            }
          } catch { /* skip malformed */ }
        }
      }
    } catch {
      setMessages(prev => {
        const updated = [...prev]
        updated[updated.length - 1] = { role: 'assistant', content: "Something went wrong. You can reach Jamie at (720) 492-3335!" }
        return updated
      })
    }
    setLoading(false)
    setTimeout(() => inputRef.current?.focus(), 10)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat panel */}
      {open && (
        <div
          className="flex flex-col rounded-2xl shadow-2xl overflow-hidden"
          style={{ width: '340px', height: '480px', backgroundColor: '#fff', border: '1px solid #ede4cc' }}
        >
          {/* Header */}
          <div className="shrink-0" style={{ backgroundColor: '#1c3023' }}>
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(245,236,216,0.15)' }}>
                  <NodeOrb className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-none">Becker Team</p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(245,236,216,0.6)' }}>Ask us anything</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {messages.length > 0 && (
                  <button
                    onClick={clearChat}
                    className="text-xs px-2.5 py-1 rounded transition-colors hover:bg-white/10"
                    style={{ color: 'rgba(245,236,216,0.6)' }}
                  >
                    Clear
                  </button>
                )}
                <button onClick={() => setOpen(false)} className="p-1 rounded hover:bg-white/10 transition-colors">
                  <ChevronDown size={18} color="rgba(245,236,216,0.8)" />
                </button>
              </div>
            </div>
            {/* Call Now bar */}
            <a
              href="tel:7204923335"
              className="flex items-center justify-center gap-2 py-2 text-xs font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#c8972b', color: '#fff' }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 10.5 19.79 19.79 0 0 1 1.61 2 2 2 0 0 1 3.6 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call Now — (720) 492-3335
            </a>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3" style={{ backgroundColor: '#fafaf8' }}>
            {messages.length === 0 && (
              <div>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#555' }}>
                  Hey there! I'm here to answer questions about our loan programs, the team, and how we can help you get into a home. What's on your mind?
                </p>
                <div className="flex flex-col gap-2">
                  {STARTERS.map(s => (
                    <button
                      key={s}
                      onClick={() => sendMessage(s)}
                      className="text-left text-xs px-3 py-2.5 rounded-lg border transition-colors hover:bg-amber-50"
                      style={{ borderColor: '#ede4cc', color: '#1c3023' }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div
                  className="px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed max-w-[85%]"
                  style={m.role === 'user'
                    ? { backgroundColor: '#1c3023', color: '#fff', borderBottomRightRadius: '4px' }
                    : { backgroundColor: '#fff', color: '#333', border: '1px solid #ede4cc', borderBottomLeftRadius: '4px' }
                  }
                >
                  {m.role === 'user' ? m.content : (
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                        strong: ({ children }) => <strong className="font-semibold" style={{ color: '#1c3023' }}>{children}</strong>,
                        ul: ({ children }) => <ul className="mt-1 mb-2 space-y-1 pl-3">{children}</ul>,
                        li: ({ children }) => <li className="flex gap-1.5"><span style={{ color: '#c8972b' }}>•</span><span>{children}</span></li>,
                        a: ({ children, href }) => <a href={href} className="underline" style={{ color: '#1c3023' }}>{children}</a>,
                      }}
                    >
                      {m.content}
                    </ReactMarkdown>
                  )}
                </div>
                {m.role === 'assistant' && i === messages.length - 1 && (
                  <a
                    href="/contact"
                    className="mt-2 text-xs font-semibold px-3 py-1.5 rounded-lg transition-opacity hover:opacity-90"
                    style={{ backgroundColor: '#1c3023', color: '#f5ecd8' }}
                  >
                    Schedule a Free Call →
                  </a>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="px-4 py-3 rounded-2xl text-sm" style={{ backgroundColor: '#fff', border: '1px solid #ede4cc', borderBottomLeftRadius: '4px' }}>
                  <div className="flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ backgroundColor: '#1c3023', animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ backgroundColor: '#1c3023', animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ backgroundColor: '#1c3023', animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-3 border-t shrink-0" style={{ borderColor: '#ede4cc', backgroundColor: '#fff' }}>
            {chatEnded ? (
              <div className="text-center">
                <p className="text-xs mb-2" style={{ color: '#aaa' }}>This chat session has ended.</p>
                <button
                  onClick={clearChat}
                  className="text-xs font-semibold px-4 py-2 rounded-lg"
                  style={{ backgroundColor: '#1c3023', color: '#f5ecd8' }}
                >
                  Start a New Chat
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); sendMessage(input) }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  disabled={loading}
                  className="flex-1 text-sm px-3 py-2.5 rounded-lg border outline-none disabled:opacity-50"
                  style={{ borderColor: '#ede4cc', color: '#1c3023' }}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 disabled:opacity-40 transition-opacity"
                  style={{ backgroundColor: '#1c3023' }}
                >
                  <Send size={14} color="#f5ecd8" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Floating orb button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
        style={{ backgroundColor: '#1c3023' }}
        aria-label="Chat with us"
      >
        {open ? (
          <X size={22} color="#f5ecd8" />
        ) : (
          <NodeOrb className="w-9 h-9" />
        )}
        {/* Slow glow */}
        {!open && (
          <span className="absolute inset-0 rounded-full" style={{ animation: 'becker-glow 3s ease-in-out infinite' }} />
        )}
      </button>
    </div>
  )
}
