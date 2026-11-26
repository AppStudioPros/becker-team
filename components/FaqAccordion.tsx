'use client'

import { useId, useState } from 'react'

interface FaqItem {
  q: string
  a: string
}

interface Props {
  items: FaqItem[]
}

function FaqItem({ faq, isOpen, onToggle }: { faq: FaqItem; isOpen: boolean; onToggle: () => void }) {
  const answerId = useId()

  return (
    <div style={{ borderTop: '1px solid #ded6c4' }}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left py-5 gap-6 group"
      >
        <span
          className="text-base md:text-lg font-semibold transition-colors duration-200"
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            color: isOpen ? '#B98942' : '#1F2E2A',
          }}
        >
          {faq.q}
        </span>
        <span
          aria-hidden="true"
          className="shrink-0 text-2xl leading-none transition-transform duration-300"
          style={{ color: '#B98942', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </button>
      <div
        id={answerId}
        aria-hidden={!isOpen}
        style={{
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          overflow: 'hidden',
          transition: 'grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div className="min-h-0 overflow-hidden pr-10">
          <p className="pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</p>
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
          key={i}
          faq={faq}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  )
}
