import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Jamie Becker | Colorado Mortgage Broker | The Becker Team',
  description:
    'Jamie Becker is a Colorado mortgage broker with 21+ years of experience helping advisors, agents, and households solve mortgage problems traditional underwriting cannot. NMLS #794730.',
}

const loanProgramCells = [
  { title: 'Asset Qualifier Loans',     tagline: 'Qualify with assets, not income — flexible alternative lending',       href: '/loan-programs/asset-qualifier-loans' },
  { title: 'Mortgage Accelerator',      tagline: 'Accelerate mortgage payoff before retirement',                          href: '/loan-programs/mortgage-accelerator' },
  { title: 'Conventional Loans',        tagline: 'Mortgage loans from private lenders with as little as 3-5% down',       href: '/loan-programs/conventional-loans' },
  { title: 'FHA Loans',                 tagline: 'Insured by FHA with down payments as low as 3.5%',                      href: '/loan-programs/fha-loans' },
  { title: 'VA Loans',                  tagline: 'No down payment loans for eligible veterans and service members',        href: '/loan-programs/va-loans' },
  { title: 'Jumbo Loans',               tagline: 'Loans exceeding conforming limits for luxury and high-cost homes',       href: '/loan-programs/jumbo-loans' },
  { title: 'Self Employed Loans',       tagline: 'We make it easier for business owners and entrepreneurs',                href: '/loan-programs/self-employed-loans' },
  { title: 'Not Sure, I Can Help',      tagline: "Not sure what you can apply for? I can help, let's chat.",              href: '/contact' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'The Becker Team',
  url: 'https://www.thebeckerteam.com',
  telephone: '(470) 660-5693',
  email: 'Jamie@thebeckerteam.com',
  description:
    'Colorado mortgage broker specializing in VA, FHA, jumbo, self-employed, and non-QM loan programs. 21+ years of experience. NMLS #794730.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Denver',
    addressRegion: 'CO',
    postalCode: '80206',
    streetAddress: '201 Columbine Street, Suite 300',
  },
  areaServed: ['Colorado', 'California', 'Texas', 'Florida', 'Idaho', 'Indiana', 'Louisiana', 'Michigan'],
  employee: {
    '@type': 'Person',
    name: 'Jamie Becker',
    jobTitle: 'Mortgage Broker',
    identifier: 'NMLS #794730',
  },
}

const ratingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'The Becker Team — Xpert Home Lending',
  url: 'https://www.thebeckerteam.com',
  telephone: '(720) 492-3335',
  email: 'Jamie@thebeckerteam.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '201 Columbine Street, Suite 300',
    addressLocality: 'Denver',
    addressRegion: 'CO',
    postalCode: '80206',
    addressCountry: 'US',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '50',
    bestRating: '5',
    worstRating: '1',
  },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section
        className="relative py-16 md:py-32 flex flex-col items-center justify-center text-center text-white px-6"
        style={{
          backgroundImage:
            'linear-gradient(rgba(20,35,25,0.65), rgba(20,35,25,0.65)), url("/images/squarespace/hero-mountain.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#1F2E2A',
        }}
      >
        <h1
          className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Your Mortgage Expert
        </h1>
        <p
          className="text-lg md:text-xl max-w-2xl mb-8 text-white/90 leading-relaxed"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          We are dedicated to helping advisors, agents &amp; households solve mortgage problems
          that traditional underwriting can&apos;t. Let&apos;s find the right solution for your
          client or personal needs.
        </p>

        {/* Badge */}
        <div
          className="inline-block px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-10"
          style={{ backgroundColor: '#B98942', color: '#fff' }}
        >
          Close Your Loan in as Fast as 10 Days
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://2179191.my1003app.com/794730/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded btn-hover"
            style={{ backgroundColor: '#F5EFE6', color: '#1F2E2A' }}
          >
            Get Pre-Approved
          </a>
          <Link
            href="/contact"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded border-2 btn-hover"
            style={{ borderColor: '#B98942', color: '#fff' }}
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* ── Quick Access Cards ── */}
      <section style={{ backgroundColor: '#F5EFE6' }} className="py-14 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6" data-reveal="fade">
          {[
            {
              img: '/images/squarespace/quick-preapproved.png',
              label: 'Get Pre-Approved',
              href: 'https://2179191.my1003app.com/794730/register',
              external: true,
            },
            {
              img: '/images/squarespace/iStock-2239089166.jpg',
              label: 'Mortgage Calculator',
              href: '/mortgage-calculator',
              external: false,
            },
            {
              img: '/images/squarespace/quick-rates.jpg',
              label: 'Interest Rates',
              href: '/mortgage-interest-rates',
              external: false,
            },
          ].map((card) => {
            const inner = (
              <div className="relative group overflow-hidden rounded" style={{ height: '220px' }}>
                <Image
                  src={card.img}
                  alt={card.label}
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(20,35,25,0.38)' }} />
                {/* Label + center-expanding underline */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="relative text-white uppercase tracking-widest text-base font-bold">
                    {card.label}
                    {/* Underline: hidden by default, expands from center on hover */}
                    <span
                      className="absolute bottom-0 left-1/2 right-1/2 h-[2px] transition-all duration-300 group-hover:left-0 group-hover:right-0"
                      style={{ backgroundColor: 'white' }}
                    />
                  </span>
                </div>
              </div>
            );
            return card.external ? (
              <a key={card.label} href={card.href} target="_blank" rel="noopener noreferrer">
                {inner}
              </a>
            ) : (
              <Link key={card.label} href={card.href}>
                {inner}
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── Loan Programs ── */}
      <section style={{ backgroundColor: '#F5EFE6' }} className="py-20 px-6">
        <h2
          data-reveal
          className="text-3xl md:text-5xl lg:text-6xl text-center mb-12"
          style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
        >
          Loan Programs
        </h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {loanProgramCells.map((cell, i) => (
            <Link
              key={cell.title}
              href={cell.href}
              data-reveal
              data-delay={i * 60}
              className="group block px-10 py-8 rounded transition-all card-hover-dark"
              style={{
                backgroundColor: 'rgba(31,46,42,0.88)',
                border: '1px solid rgba(31,46,42,0.5)',
              }}
            >
              <h3
                className="text-xl font-bold uppercase tracking-wide underline mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#F5EFE6' }}
              >
                {cell.title}
              </h3>
              <p className="text-sm text-center md:text-left" style={{ color: 'rgba(245,239,230,0.7)' }}>
                {cell.tagline}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Fast Closings ── */}
      <section
        className="relative py-16 md:py-28 px-6 text-white text-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(20,35,25,0.65), rgba(20,35,25,0.65)), url("/images/squarespace/fast-closings-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#1F2E2A',
        }}
      >
        <h2
          data-reveal="fade"
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Fast Closings
        </h2>
        <p className="uppercase tracking-widest text-sm mb-6 text-white/80">
          Time Is Money in Real Estate
        </p>
        <p className="max-w-lg mx-auto text-white/90 mb-10 leading-relaxed">
          Close your loan in as little as 10 days. Our streamlined process and expert team ensure you never miss a deadline.
        </p>
        <Link
          href="/home-loan-process-guide"
          className="inline-block uppercase tracking-widest text-sm font-semibold px-16 py-5 rounded btn-hover"
          style={{ backgroundColor: '#1F2E2A', color: '#F5EFE6', border: '2px solid #F5EFE6' }}
        >
          Our Process
        </Link>
      </section>

      {/* ── Google Reviews ── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />
          <div
            className="elfsight-app-7e2ddd0a-d3c6-4a82-b7dc-ad36c6bb28be"
            data-elfsight-app-lazy
          />
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section
        className="relative py-24 md:py-36 px-6 text-white text-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(20,35,25,0.55), rgba(20,35,25,0.55)), url("/images/cta-mountain.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#1F2E2A',
        }}
      >
        <h2
          data-reveal="fade"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Ready to get started?
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Let&apos;s discuss your unique situation and find the perfect loan for you
        </p>
        <a
          data-reveal="scale"
          data-delay="300"
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
