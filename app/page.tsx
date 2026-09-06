import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Jamie Becker | Colorado Mortgage Broker | The Becker Team',
  description:
    'Jamie Becker is a Colorado mortgage broker with 21+ years of experience helping advisors, agents, and households solve mortgage problems traditional underwriting cannot. NMLS #794730.',
}

const loanProgramCells = [
  { title: 'Home Mortgage Accelerator', href: '/loan-programs/mortgage-accelerator' },
  { title: 'Asset Qualifier Loans', href: '/loan-programs/asset-qualifier-loans' },
  { title: 'Conventional Loans', href: '/loan-programs/conventional-loans' },
  { title: 'FHA Loans', href: '/loan-programs/fha-loans' },
  { title: 'VA Loans', href: '/loan-programs/va-loans' },
  { title: 'Jumbo Loans', href: '/loan-programs/jumbo-loans' },
  { title: 'Self Employed Loans', href: '/loan-programs/self-employed-loans' },
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
            'linear-gradient(rgba(28,48,35,0.55), rgba(28,48,35,0.55)), url("/images/squarespace/jamie-ranch-0001_websize.jpg")',
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
          style={{ backgroundColor: '#c8960c', color: '#fff' }}
        >
          Close Your Loan in as Fast as 10 Days
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://2179191.my1003app.com/794730/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-10 py-4 transition-colors"
            style={{ backgroundColor: '#f5ecd8', color: '#1c3023' }}
          >
            Get Pre-Approved
          </a>
          <Link
            href="/contact"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-10 py-4 border-2 transition-colors hover:bg-white/10"
            style={{ borderColor: '#c8960c', color: '#fff' }}
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* ── Quick Access Cards ── */}
      <section className="py-0 px-0">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {[
            {
              img: '/images/squarespace/ChatGPT_Image_Jun_12__2026__06_13_09_PM.png',
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
              img: '/images/squarespace/iStock-2223890766.jpg',
              label: 'Interest Rates',
              href: '/mortgage-interest-rates',
              external: false,
            },
          ].map((card) => (
            <div key={card.label} className="relative group overflow-hidden" style={{ height: '300px' }}>
              <Image
                src={card.img}
                alt={card.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Dark overlay */}
              <div
                className="absolute inset-0"
                style={{ backgroundColor: 'rgba(20,35,25,0.55)' }}
              />
              {/* Label */}
              {card.external ? (
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span
                    className="text-white uppercase tracking-widest text-sm font-bold border-b-2 pb-1"
                    style={{ borderColor: '#c8960c' }}
                  >
                    {card.label}
                  </span>
                </a>
              ) : (
                <Link
                  href={card.href}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span
                    className="text-white uppercase tracking-widest text-sm font-bold border-b-2 pb-1"
                    style={{ borderColor: '#c8960c' }}
                  >
                    {card.label}
                  </span>
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
        <div className="max-w-5xl mx-auto">
          {/* Rows 1 & 2: 3 columns each */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {loanProgramCells.slice(0, 6).map((cell) => (
              <Link
                key={cell.title}
                href={cell.href}
                className="block px-8 py-10 text-center transition-all hover:opacity-90 rounded"
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
          {/* Row 3: 1 cell centered */}
          <div className="flex justify-center">
            <Link
              href={loanProgramCells[6].href}
              className="block px-8 py-10 text-center transition-all hover:opacity-90 rounded w-full md:w-1/3"
              style={{ backgroundColor: '#2a3f2e' }}
            >
              <span
                className="text-base font-semibold uppercase tracking-wide"
                style={{ color: '#f5ecd8' }}
              >
                {loanProgramCells[6].title}
              </span>
            </Link>
          </div>
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
        {/* Google Reviews embed goes here */}
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
            'linear-gradient(rgba(20,35,25,0.65), rgba(20,35,25,0.65)), url("/images/squarespace/jamie-ranch-0098_websize.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#1c3023',
        }}
      >
        <h2
          className="text-5xl md:text-6xl font-bold mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Time Is Money in Real Estate
        </h2>
        <p className="uppercase tracking-widest text-sm mb-6 text-white/80">
          Fast Closings — As Little as 10 Days
        </p>
        <p className="max-w-lg mx-auto text-white/90 mb-10 leading-relaxed">
          Our streamlined process and expert team ensure you never miss a deadline. From application
          to keys in hand — faster than any bank.
        </p>
        <Link
          href="/home-loan-process-guide"
          className="inline-block uppercase tracking-widest text-sm font-semibold px-16 py-5 transition-colors"
          style={{ backgroundColor: '#1c3023', color: '#f5ecd8', border: '2px solid #f5ecd8' }}
        >
          Our Process
        </Link>
      </section>
    </>
  )
}
