import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Mortgage Loan Programs | The Becker Team Colorado',
  description:
    'VA, FHA, conventional, jumbo, self-employed, asset qualifier, and Mortgage Accelerator loans in Colorado and beyond. Jamie Becker, NMLS #794730.',
}

// Program cards in display order (images fixed, titles/hrefs assigned per Kelsi 2026-09-07)
const programCells = [
  { title: 'Home Mortgage Accelerator', href: '/loan-programs/mortgage-accelerator',  image: '/images/squarespace/lp-conventional.jpg' },
  { title: 'Asset Qualifier Loans',     href: '/loan-programs/asset-qualifier-loans', image: '/images/squarespace/lp-self-employed.jpg' },
  { title: 'Conventional Loans',        href: '/loan-programs/conventional-loans',    image: '/images/squarespace/lp-asset-qualifier.jpg' },
  { title: 'FHA Loans',                 href: '/loan-programs/fha-loans',             image: '/images/squarespace/lp-mortgage-accelerator.jpg' },
  { title: 'VA Loans',                  href: '/loan-programs/va-loans',              image: '/images/squarespace/lp-va.jpg' },
  { title: 'Jumbo Loans',               href: '/loan-programs/jumbo-loans',           image: '/images/squarespace/lp-fha.jpg' },
  { title: 'Self Employed Loans',       href: '/loan-programs/self-employed-loans',   image: '/images/squarespace/lp-jumbo.jpg' },
]

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Mortgage Loan Programs — The Becker Team',
  description: 'Full range of mortgage loan programs offered by Jamie Becker, NMLS #794730, in Colorado.',
  url: 'https://www.thebeckerteam.com/loan-programs',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home Mortgage Accelerator', url: 'https://www.thebeckerteam.com/loan-programs/mortgage-accelerator' },
    { '@type': 'ListItem', position: 2, name: 'Asset Qualifier Loans', url: 'https://www.thebeckerteam.com/loan-programs/asset-qualifier-loans' },
    { '@type': 'ListItem', position: 3, name: 'Conventional Loans', url: 'https://www.thebeckerteam.com/loan-programs/conventional-loans' },
    { '@type': 'ListItem', position: 4, name: 'FHA Loans', url: 'https://www.thebeckerteam.com/loan-programs/fha-loans' },
    { '@type': 'ListItem', position: 5, name: 'VA Loans', url: 'https://www.thebeckerteam.com/loan-programs/va-loans' },
    { '@type': 'ListItem', position: 6, name: 'Jumbo Loans', url: 'https://www.thebeckerteam.com/loan-programs/jumbo-loans' },
    { '@type': 'ListItem', position: 7, name: 'Self Employed Loans', url: 'https://www.thebeckerteam.com/loan-programs/self-employed-loans' },
  ],
}

export default function LoanProgramsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      {/* ── Header ── */}
      <section
        className="relative py-12 md:py-20 px-6 text-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,35,25,0.65), rgba(20,35,25,0.65)), url("/images/loan-programs-hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#1F2E2A',
        }}
      >
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Loan Programs
        </h1>
        <p className="text-white/80 max-w-xl mx-auto text-lg">
          Flexible mortgage solutions for every borrower profile — from conventional to non-QM.
        </p>
      </section>

      {/* ── Grid ── */}
      <section style={{ backgroundColor: '#1F2E2A' }} className="pt-10 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* First 6 programs: 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {programCells.slice(0, 6).map((cell, i) => (
              <Link
                key={cell.title}
                href={cell.href}
                data-reveal="scale"
                data-delay={i * 80}
                className="relative block overflow-hidden group rounded"
                style={{ aspectRatio: '4/3' }}
              >
                <Image
                  src={cell.image}
                  alt={cell.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/55 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <span
                    className="text-xl md:text-2xl font-semibold text-center leading-snug underline-offset-4 transition-all group-hover:underline group-hover:decoration-[#B98942]"
                    style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#F5EFE6' }}
                  >
                    {cell.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          {/* Last program: centered */}
          <div className="flex justify-center">
            {programCells.slice(6).map((cell, i) => (
              <Link
                key={cell.title}
                href={cell.href}
                data-reveal="scale"
                data-delay={480 + i * 80}
                className="relative block overflow-hidden group rounded w-full md:w-1/3"
                style={{ aspectRatio: '4/3' }}
              >
                <Image
                  src={cell.image}
                  alt={cell.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/55 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <span
                    className="text-xl md:text-2xl font-semibold text-center leading-snug underline-offset-4 transition-all group-hover:underline group-hover:decoration-[#B98942]"
                    style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#F5EFE6' }}
                  >
                    {cell.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Not Sure section ── */}
      <section className="py-16 md:py-24 px-6 text-center" style={{ backgroundColor: '#F5EFE6' }}>
        <h2
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5 max-w-2xl mx-auto leading-tight"
          style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
        >
          Not Sure Which Program is Right for You?
        </h2>
        <p className="text-lg max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: '#4a5e53' }}>
          Let&apos;s discuss your unique situation and find the perfect loan solution
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://2179191.my1003app.com/794730/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
            style={{ backgroundColor: '#1F2E2A', color: '#F5EFE6', border: '2px solid #1F2E2A' }}
          >
            Get Pre-Approved
          </a>
          <Link
            href="/contact"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
            style={{ backgroundColor: 'transparent', color: '#1F2E2A', border: '2px solid #1F2E2A' }}
          >
            Contact Us
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
