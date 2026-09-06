import type { Metadata } from 'next'
import Link from 'next/link'
import { loanPrograms } from '@/lib/loanPrograms'

export const metadata: Metadata = {
  title: 'Mortgage Loan Programs | The Becker Team Colorado',
  description:
    'VA, FHA, conventional, jumbo, self-employed, asset qualifier, and Mortgage Accelerator loans in Colorado and beyond. Jamie Becker, NMLS #794730.',
}

const programCells = loanPrograms.map((p) => ({
  title: p.shortTitle,
  href: `/loan-programs/${p.slug}`,
}))

export default function LoanProgramsPage() {
  return (
    <>
      {/* ── Header ── */}
      <section style={{ backgroundColor: '#1c3023' }} className="py-20 px-6 text-center text-white">
        <h1
          className="text-5xl md:text-6xl font-bold mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Loan Programs
        </h1>
        <p className="text-white/80 max-w-xl mx-auto text-lg">
          Flexible mortgage solutions for every borrower profile — from conventional to non-QM.
        </p>
      </section>

      {/* ── Grid ── */}
      <section style={{ backgroundColor: '#1c3023' }} className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* First 6 programs: 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {programCells.slice(0, 6).map((cell) => (
              <Link
                key={cell.title}
                href={cell.href}
                className="block px-8 py-12 text-center rounded transition-all hover:opacity-90"
                style={{ backgroundColor: '#2a3f2e' }}
              >
                <span
                  className="text-base font-semibold uppercase tracking-wide"
                  style={{ color: '#f5ecd8' }}
                >
                  {cell.title}
                </span>
              </Link>
            ))}
          </div>
          {/* Last program: centered */}
          {programCells.slice(6).map((cell) => (
            <div key={cell.title} className="flex justify-center">
              <Link
                href={cell.href}
                className="block px-8 py-12 text-center rounded transition-all hover:opacity-90 w-full md:w-1/3"
                style={{ backgroundColor: '#2a3f2e' }}
              >
                <span
                  className="text-base font-semibold uppercase tracking-wide"
                  style={{ color: '#f5ecd8' }}
                >
                  {cell.title}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: '#f5ecd8' }} className="py-20 px-6 text-center">
        <h2
          className="text-3xl font-bold mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1c3023' }}
        >
          Not Sure Which Program is Right for You?
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10 leading-relaxed">
          Every borrower&apos;s situation is different. Jamie Becker will review your goals and
          finances to find the best path forward.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://2179191.my1003app.com/794730/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-10 py-4 transition-colors hover:opacity-90"
            style={{ backgroundColor: '#1c3023', color: '#fff' }}
          >
            Get Pre-Approved
          </a>
          <Link
            href="/contact"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-10 py-4 border-2 transition-colors hover:bg-[#1c3023]/5"
            style={{ borderColor: '#1c3023', color: '#1c3023' }}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
