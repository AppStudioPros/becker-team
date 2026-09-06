import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Jamie Becker | Colorado Mortgage Broker | The Becker Team',
  description:
    'Jamie Becker is a Colorado mortgage broker with 21+ years of experience helping advisors, agents, and households solve mortgage problems traditional underwriting cannot. NMLS #794730.',
}

const loanCards = [
  {
    title: 'Asset Qualifier Loans',
    desc: 'Qualify with assets, not income — flexible alternative lending',
    href: '/loan-programs/asset-qualifier-loans',
  },
  {
    title: 'Mortgage Accelerator',
    desc: 'Accelerate mortgage payoff before retirement',
    href: '/loan-programs/mortgage-accelerator',
  },
  {
    title: 'Conventional Loans',
    desc: 'Mortgage loans from private lenders with as little as 3-5% down',
    href: '/loan-programs/conventional-loans',
  },
  {
    title: 'FHA Loans',
    desc: 'Insured by FHA with down payments as low as 3.5%',
    href: '/loan-programs/fha-loans',
  },
  {
    title: 'VA Loans',
    desc: 'No down payment loans for eligible veterans and service members',
    href: '/loan-programs/va-loans',
  },
  {
    title: 'Jumbo Loans',
    desc: 'Loans exceeding conforming limits for luxury and high-cost homes',
    href: '/loan-programs/jumbo-loans',
  },
  {
    title: 'Self Employed Loans',
    desc: 'We make it easier for business owners and entrepreneurs.',
    href: '/loan-programs/self-employed-loans',
  },
  {
    title: "Not Sure? I Can Help",
    desc: "Not sure what you can apply for? I can help, let's chat.",
    href: '/contact',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'The Becker Team',
  url: 'https://www.thebeckerteam.com',
  telephone: '(720) 492-3335',
  email: 'Jamie@thebeckerteam.com',
  description:
    'Colorado mortgage broker specializing in VA, FHA, jumbo, self-employed, and non-QM loan programs. 21+ years of experience. NMLS #794730.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Braselton',
    addressRegion: 'GA',
    postalCode: '30517',
    streetAddress: '100 Highpoint Park Way, Suite 202',
  },
  areaServed: ['Colorado', 'California', 'Texas', 'Florida', 'Idaho', 'Indiana', 'Louisiana', 'Michigan'],
  employee: {
    '@type': 'Person',
    name: 'Jamie Becker',
    jobTitle: 'Mortgage Broker',
    identifier: 'NMLS #794730',
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section
        className="relative min-h-[85vh] flex flex-col items-center justify-center text-center text-white px-6"
        style={{
          backgroundImage:
            'linear-gradient(rgba(28,48,35,0.55), rgba(28,48,35,0.55)), url("/images/hero-mountains.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#1c3023',
        }}
      >
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Your Mortgage Expert
        </h1>
        <p
          className="text-lg md:text-xl italic max-w-xl mb-10 text-white/90 leading-relaxed"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          We are dedicated to helping advisors, agents &amp; households solve mortgage problems
          that traditional underwriting can&apos;t&hellip;
        </p>
        <Link
          href="/contact"
          className="bg-black text-white uppercase tracking-widest text-sm font-semibold px-16 py-5 hover:bg-gray-900 transition-colors"
        >
          Close Your Loan in as Fast as 10 Days
        </Link>
      </section>

      {/* ── Quick Access Cards ── */}
      <section style={{ backgroundColor: '#f5ecd8' }} className="py-14 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              img: '/images/quick-preapprove.jpg',
              label: 'Get Pre-Approved',
              href: 'https://2179191.my1003app.com/794730/register',
              external: true,
            },
            {
              img: '/images/quick-calculator.jpg',
              label: 'Mortgage Calculator',
              href: '/mortgage-calculator',
              external: false,
            },
            {
              img: '/images/quick-rates.jpg',
              label: 'Interest Rates',
              href: '/mortgage-interest-rates',
              external: false,
            },
          ].map((card) => (
            <div key={card.label} className="flex flex-col">
              <div
                className="h-52 bg-gray-300"
                style={{
                  backgroundImage: `url("${card.img}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              {card.external ? (
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white text-center uppercase tracking-widest text-sm font-semibold py-5 hover:bg-gray-900 transition-colors"
                >
                  {card.label}
                </a>
              ) : (
                <Link
                  href={card.href}
                  className="bg-black text-white text-center uppercase tracking-widest text-sm font-semibold py-5 hover:bg-gray-900 transition-colors"
                >
                  {card.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Loan Programs ── */}
      <section style={{ backgroundColor: '#1c3023' }} className="py-20 px-6">
        <h2
          className="text-5xl md:text-6xl text-white text-center mb-14"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Loan Programs
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {loanCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="block rounded border transition-all hover:shadow-lg"
              style={{ backgroundColor: '#f5ecd8', borderColor: '#ede4cc' }}
            >
              <div className="px-10 py-10">
                <h3
                  className="text-lg font-bold uppercase underline underline-offset-4 mb-3 text-center"
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    color: '#1c3023',
                  }}
                >
                  {card.title}
                </h3>
                <p className="text-sm text-center" style={{ color: '#4a5e53' }}>
                  {card.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Google Reviews ── */}
      <section className="bg-white py-16 px-6">
        <h2
          className="text-2xl font-semibold text-center mb-10"
          style={{ color: '#1c3023' }}
        >
          What Our Customers Say
        </h2>
        {/* Google Reviews embed — place your widget script here */}
        <div className="max-w-5xl mx-auto text-center text-gray-400 border border-dashed border-gray-300 py-16 rounded">
          <p className="text-sm">Google Reviews widget — add embed script here</p>
          <p className="text-xs mt-2">5.0 ★★★★★ &nbsp; 232 reviews on Google</p>
        </div>
      </section>

      {/* ── Fast Closings ── */}
      <section
        className="relative py-28 px-6 text-white text-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(20,35,25,0.65), rgba(20,35,25,0.65)), url("/images/fast-closings-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#1c3023',
        }}
      >
        <h2
          className="text-5xl md:text-6xl font-bold mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Fast Closings
        </h2>
        <p className="uppercase tracking-widest text-sm mb-6 text-white/80">
          Time is Money in Real Estate
        </p>
        <p className="max-w-lg mx-auto text-white/90 mb-10 leading-relaxed">
          Close your loan in as little as 10 days. Our streamlined process and expert team ensure you
          never miss a deadline.
        </p>
        <Link
          href="/home-loan-process-guide"
          className="inline-block bg-black text-white uppercase tracking-widest text-sm font-semibold px-16 py-5 hover:bg-gray-900 transition-colors"
        >
          Our Process
        </Link>
      </section>

      {/* ── Ready to Get Started? ── */}
      <section
        className="relative py-28 px-6 text-white text-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(20,35,25,0.60), rgba(20,35,25,0.60)), url("/images/cta-mountain.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#1c3023',
        }}
      >
        <h2
          className="text-5xl md:text-6xl font-bold mb-5"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Ready to get started?
        </h2>
        <p className="text-lg text-white/90 mb-10">
          Let&apos;s discuss your unique situation and find the perfect loan for you
        </p>
        <a
          href="https://2179191.my1003app.com/794730/register"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white uppercase tracking-widest text-sm font-semibold px-16 py-5 hover:bg-gray-900 transition-colors"
        >
          Get Pre-Approved Now
        </a>
      </section>
    </>
  )
}
