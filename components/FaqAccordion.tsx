'use client'

import { useId, useState } from 'react'
import Link from 'next/link'

interface FaqItem {
  q: string
  a: string
  link?: { href: string; label: string }
}

interface Props {
  items: FaqItem[]
}

function FaqItem({ faq, isOpen, onToggle }: { faq: FaqItem; isOpen: boolean; onToggle: () => void }) {
  const answerId = useId()

  return (
    <div style={{ borderTop: '1px solid #ded6c4' }}>
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={answerId}
          onClick={onToggle}
          className="w-full flex items-center justify-between text-left py-5 gap-6 group font-sans"
        >
          <span
            className="faq-question text-base md:text-lg font-semibold transition-colors duration-200"
            style={{
              fontFamily: 'var(--faq-question-font, "Playfair Display", Georgia, serif)',
              color: isOpen ? 'var(--color-bronze-ink)' : '#1F2E2A',
            }}
          >
            {faq.q}
          </span>
          <span
            aria-hidden="true"
            className="shrink-0 text-2xl leading-none transition-transform duration-300"
            style={{ color: 'var(--color-bronze-ink)', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
          >
            +
          </span>
        </button>
      </h3>
      <div
        id={answerId}
        aria-hidden={!isOpen}
        inert={!isOpen}
        style={{
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          overflow: 'hidden',
          transition: 'grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div className="min-h-0 overflow-hidden pr-10">
          <div className="faq-answer pb-5 text-sm text-gray-600 leading-relaxed">
            <p>{faq.a}</p>
            {faq.link && (
              <Link href={faq.link.href} className="mt-2 inline-block font-semibold text-forest underline underline-offset-4">
                {faq.link.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FaqAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col" style={{ borderBottom: '1px solid #ded6c4' }}>
      {items.map((faq, i) => (
        <FaqItem
          key={faq.q}
          faq={faq}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  )
}
