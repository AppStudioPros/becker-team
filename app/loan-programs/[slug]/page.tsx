import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { loanPrograms, getLoanProgram } from '@/lib/loanPrograms'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return loanPrograms.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const program = getLoanProgram(slug)
  if (!program) return {}
  return {
    title: `${program.title} | The Becker Team`,
    description: program.tagline + ' Jamie Becker, Colorado mortgage broker, NMLS #794730.',
  }
}

const selfEmployedKeyFeatures = [
  {
    title: 'Tax Return Program',
    desc: 'Use 2 years of personal and business tax returns. Best for borrowers with consistent income and straightforward write-offs.',
  },
  {
    title: 'P&L Statement Option',
    desc: 'A CPA-prepared profit and loss statement can substitute for tax returns. Ideal when returns don\'t reflect current business performance.',
  },
  {
    title: 'Bank Statement Program',
    desc: '12 or 24 months of personal or business bank statements used to calculate income. Great for borrowers whose deposits reflect true cash flow.',
  },
  {
    title: 'Asset Depletion Option',
    desc: 'Divide eligible assets over a set period to establish qualifying income. Useful for asset-rich borrowers with minimal documented income.',
  },
]

export default async function LoanProgramPage({ params }: Props) {
  const { slug } = await params
  const program = getLoanProgram(slug)
  if (!program) notFound()

  const isSelfEmployed = slug === 'self-employed-loans'
  const isMortgageAccelerator = slug === 'mortgage-accelerator'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: program.title,
    description: program.tagline,
    provider: {
      '@type': 'Person',
      name: 'Jamie Becker',
      identifier: 'NMLS #794730',
    },
    areaServed: 'Colorado',
    url: `https://www.thebeckerteam.com/loan-programs/${slug}`,
    mainEntityOfPage: {
      '@type': 'FAQPage',
      mainEntity: program.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section
        className="relative py-14 md:py-24 px-6 text-center text-white"
        style={{
          backgroundImage: isMortgageAccelerator
            ? 'linear-gradient(rgba(20,35,25,0.6), rgba(20,35,25,0.6)), url("/images/mortgage-accelerator-hero.jpg")'
            : 'linear-gradient(rgba(20,35,25,0.6), rgba(20,35,25,0.6)), url("/images/squarespace/jamie-ranch-0001_websize.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: isMortgageAccelerator ? 'center 55%' : 'center',
          backgroundColor: '#1F2E2A',
        }}
      >
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          {program.shortTitle}
        </h1>
        <p className="text-white/80 max-w-xl mx-auto text-lg mb-8">{program.heroSubtitle}</p>
        {isMortgageAccelerator && (
          <a
            href="https://2179191.my1003app.com/794730/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
            style={{ backgroundColor: '#1F2E2A', color: '#F5EFE6', border: '2px solid #F5EFE6' }}
          >
            Get Pre-Approved
          </a>
        )}
      </section>

      {/* ── Mortgage Accelerator feature bar ── */}
      {isMortgageAccelerator && (
        <section className="bg-white py-7 px-6 border-b border-[#ede4cc]">
          <p
            className="text-center text-lg md:text-2xl leading-relaxed"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            Built for strong cash flow&nbsp;&bull;&nbsp;Purchase or refinance&nbsp;&bull;&nbsp;Strategy-led review with The Becker Team
          </p>
        </section>
      )}

      {/* ── Content ── */}
      <section style={{ backgroundColor: '#F5EFE6' }} className="py-12 md:py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-gray-600 mb-6 italic">{program.tagline}</p>
          <div className="divider" />
          <h2
            className="text-3xl font-bold text-center mb-8 mt-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            About This Program
          </h2>
          <div className="prose-becker">
            {program.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* ── Key Features (Self-Employed only) ── */}
          {isSelfEmployed && (
            <div className="mt-14">
              <h2
                className="text-3xl font-bold text-center mb-8"
                style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
              >
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selfEmployedKeyFeatures.map((feat) => (
                  <div
                    key={feat.title}
                    className="rounded p-6"
                    style={{ backgroundColor: '#1F2E2A' }}
                  >
                    <h3
                      className="text-lg font-bold mb-3"
                      style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#F5EFE6' }}
                    >
                      {feat.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#d4c9a8' }}>
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="https://2179191.my1003app.com/794730/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
              style={{ backgroundColor: '#1F2E2A', color: '#F5EFE6', border: '2px solid #1F2E2A' }}
            >
              Get Pre-Approved
            </a>
          </div>

          <div className="divider mt-12" />

          {/* FAQ */}
          <h2
            className="text-2xl font-bold text-center mt-8 mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-6">
            {program.faqs.map((faq) => (
              <div key={faq.q} className="border-b border-[#ede4cc] pb-6">
                <h3
                  className="font-semibold mb-2 text-lg"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
                >
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nav to other programs ── */}
      <section style={{ backgroundColor: '#1F2E2A' }} className="py-12 px-6 text-center">
        <p className="text-white/80 text-sm mb-4">Explore other programs</p>
        <div className="flex flex-wrap justify-center gap-3">
          {loanPrograms
            .filter((p) => p.slug !== slug)
            .slice(0, 4)
            .map((p) => (
              <Link
                key={p.slug}
                href={`/loan-programs/${p.slug}`}
                className="text-sm px-5 py-2 rounded border border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                {p.shortTitle}
              </Link>
            ))}
          <Link
            href="/loan-programs"
            className="text-sm px-5 py-2 rounded border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            All Programs
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative py-24 md:py-36 px-6 text-white text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,35,25,0.55), rgba(20,35,25,0.55)), url("/images/cta-mountain.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#1F2E2A',
        }}
      >
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Ready to get started?
        </h2>
        <p className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Let&apos;s discuss your unique situation and find the perfect loan for you
        </p>
        <a
          href="https://2179191.my1003app.com/794730/register"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
          style={{ backgroundColor: '#1F2E2A', color: '#F5EFE6', border: '2px solid #F5EFE6' }}
        >
          Get Pre-Approved Now
        </a>
      </section>
    </>
  )
}
