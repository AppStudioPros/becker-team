import type { Metadata } from 'next'
import Link from 'next/link'
import { loanPrograms } from '@/lib/loanPrograms'

export const metadata: Metadata = {
  title: 'Mortgage Loan Programs | The Becker Team Colorado',
  description:
    'VA, FHA, conventional, jumbo, self-employed, asset qualifier, and Mortgage Accelerator loans in Colorado and beyond. Jamie Becker, NMLS #794730.',
}

const allCards = [
  ...loanPrograms.map((p) => ({
    title: p.shortTitle,
    desc: p.tagline,
    href: `/loan-programs/${p.slug}`,
  })),
  {
    title: "Not Sure? I Can Help",
    desc: "Not sure what you can apply for? I can help, let's chat.",
    href: '/contact',
  },
]

export default function LoanProgramsPage() {
  return (
    <>
      {/* ── Header ── */}
      <section style={{ backgroundColor: '#1c3023' }} className="py-20 px-6 text-center text-white">
        <h1
          className="text-5xl md:text-6xl font-bold"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Loan Programs
        </h1>
      </section>

      {/* ── Grid ── */}
      <section style={{ backgroundColor: '#1c3023' }} className="pb-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {allCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="block rounded border transition-all hover:shadow-lg"
              style={{ backgroundColor: '#f5ecd8', borderColor: '#ede4cc' }}
            >
              <div className="px-10 py-12 text-center">
                <h2
                  className="text-lg font-bold uppercase underline underline-offset-4 mb-3"
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    color: '#1c3023',
                  }}
                >
                  {card.title}
                </h2>
                <p className="text-sm" style={{ color: '#4a5e53' }}>
                  {card.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
