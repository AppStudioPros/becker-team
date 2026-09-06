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

export default async function LoanProgramPage({ params }: Props) {
  const { slug } = await params
  const program = getLoanProgram(slug)
  if (!program) notFound()

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
        className="relative py-24 px-6 text-center text-white"
        style={{
          backgroundImage:
            'linear-gradient(rgba(20,35,25,0.6), rgba(20,35,25,0.6)), url("/images/loan-hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#1c3023',
        }}
      >
        <h1
          className="text-5xl md:text-6xl font-bold mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          {program.shortTitle}
        </h1>
        <p className="text-white/80 max-w-xl mx-auto text-lg">{program.heroSubtitle}</p>
      </section>

      {/* ── Content ── */}
      <section style={{ backgroundColor: '#f5ecd8' }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-gray-600 mb-6 italic">{program.tagline}</p>
          <div className="divider" />
          <h2
            className="text-3xl font-bold text-center mb-8 mt-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1c3023' }}
          >
            About This Program
          </h2>
          <div className="prose-becker">
            {program.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="https://2179191.my1003app.com/794730/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white uppercase tracking-widest text-sm font-semibold px-14 py-5 hover:bg-gray-900 transition-colors"
            >
              Get Pre-Approved
            </a>
          </div>

          <div className="divider mt-12" />

          {/* FAQ */}
          <h2
            className="text-2xl font-bold text-center mt-8 mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1c3023' }}
          >
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-6">
            {program.faqs.map((faq) => (
              <div key={faq.q} className="border-b border-[#ede4cc] pb-6">
                <h3
                  className="font-semibold mb-2 text-lg"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1c3023' }}
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
      <section style={{ backgroundColor: '#1c3023' }} className="py-12 px-6 text-center">
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
    </>
  )
}
