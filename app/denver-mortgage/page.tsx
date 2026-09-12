import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Denver Mortgage Broker | Local Mortgage Lender Denver CO | The Becker Team',
  description:
    'Local Denver mortgage broker Jamie Becker (NMLS #794730) offers conventional, FHA, VA, jumbo, and specialty loans. Best mortgage rates in Denver. Fast pre-approvals, personal service. Serving Denver, Aurora, Lakewood, Littleton, and the Front Range.',
  alternates: { canonical: 'https://www.thebeckerteam.com/denver-mortgage' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'The Becker Team — Denver Mortgage Broker',
  description: 'Local mortgage lender serving Denver, Aurora, Lakewood, Littleton, and the Colorado Front Range.',
  url: 'https://www.thebeckerteam.com/denver-mortgage',
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
  areaServed: [
    { '@type': 'City', name: 'Denver' },
    { '@type': 'City', name: 'Aurora' },
    { '@type': 'City', name: 'Lakewood' },
    { '@type': 'City', name: 'Littleton' },
    { '@type': 'City', name: 'Centennial' },
    { '@type': 'City', name: 'Englewood' },
  ],
  founder: { '@type': 'Person', name: 'Jamie Becker', identifier: 'NMLS #794730' },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thebeckerteam.com' },
    { '@type': 'ListItem', position: 2, name: 'Denver Mortgage', item: 'https://www.thebeckerteam.com/denver-mortgage' },
  ],
}

const programs = [
  { label: 'Conventional Loans', desc: '3-5% down, 30-year fixed or adjustable rate — the most common loan for Denver buyers.', href: '/loan-programs/conventional-loans' },
  { label: 'FHA Loans', desc: 'Government-backed with flexible credit requirements and 3.5% down — great for first-time Denver buyers.', href: '/loan-programs/fha-loans' },
  { label: 'VA Loans', desc: 'Zero down for eligible veterans and service members. No PMI required.', href: '/loan-programs/va-loans' },
  { label: 'Jumbo Loans', desc: 'Financing above conforming limits for Denver luxury and high-value properties.', href: '/loan-programs/jumbo-loans' },
  { label: 'Self-Employed / Bank Statement', desc: 'Qualify using bank statements instead of tax returns — built for Denver entrepreneurs and remote workers.', href: '/loan-programs/self-employed-loans' },
  { label: 'Asset Qualifier Loans', desc: 'Qualify using your investment accounts, not your income — no employment required.', href: '/loan-programs/asset-qualifier-loans' },
]

const faqs = [
  { q: 'What is the best mortgage lender in Denver?', a: 'The best Denver mortgage lender is one who knows the local market, offers competitive rates, and gives you personal service — not a call center. Jamie Becker at The Becker Team has been serving Denver buyers for over 20 years, offering conventional, FHA, VA, jumbo, and specialty loan programs with same-day pre-approvals.' },
  { q: 'What are current mortgage rates in Denver, CO?', a: 'Mortgage rates in Denver change daily based on market conditions. Your actual rate depends on your credit score, loan type, down payment, and loan term. Contact Jamie for a current rate quote tailored to your specific situation — rates are available for conventional, FHA, VA, and jumbo loans.' },
  { q: 'How much do I need for a down payment in Denver?', a: 'Denver down payments vary by loan type. FHA loans start at 3.5%. Conventional loans can be as low as 3-5% for first-time buyers. VA loans require zero down for eligible veterans. Jumbo loans typically require 10-20%. Given Denver\'s price points, CHFA down payment assistance is also available for qualifying buyers.' },
  { q: 'What is the CHFA program and can I use it in Denver?', a: 'CHFA (Colorado Housing and Finance Authority) offers below-market rate loans and down payment assistance to qualifying first-time buyers and some repeat buyers throughout Colorado, including Denver. Income and purchase price limits apply. Jamie can tell you quickly if you qualify.' },
  { q: 'How long does a mortgage take to close in Denver?', a: 'The Becker Team can close most straightforward purchases in 10-21 days. Complex files or specialty programs may take 21-30 days. In Denver\'s competitive market, a fast, reliable close matters — Jamie\'s pre-approval letters carry weight with local sellers.' },
  { q: 'Do you serve the entire Denver metro?', a: 'Yes. The Becker Team serves all of Denver and the surrounding metro — including Aurora, Lakewood, Littleton, Centennial, Englewood, Highlands Ranch, Parker, Castle Rock, Broomfield, and Westminster. As a local lender, Jamie knows the neighborhoods and can move quickly.' },
]

export default function DenverMortgagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section
        className="relative py-28 md:py-40 px-6 text-white text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,35,25,0.60), rgba(20,35,25,0.60)), url("/images/cta-mountain.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundColor: '#1F2E2A',
        }}
      >
        <p className="text-sm uppercase tracking-widest font-semibold mb-4 text-white/70">Denver, Colorado</p>
        <h1
          className="text-4xl md:text-6xl font-bold mb-6"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Local Denver Mortgage Broker
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80 leading-relaxed">
          Best mortgage rates in Denver. Personal service, fast pre-approvals, and every loan program you need — from a lender who knows this market.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://2179191.my1003app.com/794730/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-12 py-5 rounded btn-hover"
            style={{ backgroundColor: '#1F2E2A', color: '#F5EFE6', border: '2px solid #F5EFE6' }}
          >
            Get Pre-Approved
          </a>
          <Link
            href="/contact"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-12 py-5 rounded btn-hover"
            style={{ backgroundColor: 'transparent', color: '#F5EFE6', border: '2px solid #F5EFE6' }}
          >
            Talk to Jamie
          </Link>
        </div>
      </section>

      {/* Feature bar */}
      <section className="bg-white py-5 px-6 border-b border-stone-200">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-semibold" style={{ color: '#1F2E2A' }}>
          <span>✦ Local Denver Lender</span>
          <span>✦ Best Mortgage Rates Colorado</span>
          <span>✦ Mortgage Broker Near Me</span>
          <span>✦ Same-Day Pre-Approvals</span>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            data-reveal
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            Denver's Local Mortgage Expert
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            Jamie Becker (NMLS #794730) has been helping Denver buyers, homeowners, and investors navigate one of the country's most competitive housing markets for over 20 years. As a local mortgage broker — not a national chain — Jamie shops your loan across multiple wholesale lenders to find the best rate and program for your situation. Whether you're buying your first home in Aurora, moving up in Lakewood, or investing in the Denver metro, you get direct access to an expert who picks up the phone.
          </p>
        </div>
      </section>

      {/* Loan programs */}
      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            data-reveal
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            Denver Mortgage Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((p) => (
              <Link
                key={p.label}
                href={p.href}
                className="block bg-white rounded-xl p-6 border border-stone-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-0.5 flex-shrink-0" style={{ color: '#1F2E2A' }} />
                  <div>
                    <p className="font-bold mb-1" style={{ color: '#1F2E2A', fontFamily: '"Playfair Display", Georgia, serif' }}>{p.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#4a5e53' }}>{p.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why local matters */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            data-reveal
            className="text-3xl md:text-4xl font-bold text-center mb-10"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            Why Choose a Local Denver Mortgage Broker?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'We Know the Denver Market', body: "Denver's neighborhoods, price points, and competitive dynamics are all familiar territory. We've helped buyers win in multiple-offer situations across the metro for two decades." },
              { title: 'Multiple Lender Options', body: "As a broker — not a bank — we shop your loan to multiple wholesale lenders. That means better rates and more flexibility than going to a single institution." },
              { title: 'Fast, Reliable Pre-Approvals', body: "In Denver's competitive market, a strong pre-approval matters. We issue same-day pre-approval letters that sellers trust." },
              { title: 'You Deal With Jamie, Not a Queue', body: "No handoffs to processors or call centers. Jamie handles your loan personally from application to closing." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <Check size={22} className="flex-shrink-0 mt-1" style={{ color: '#1F2E2A' }} />
                <div>
                  <p className="font-bold mb-1" style={{ color: '#1F2E2A' }}>{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#4a5e53' }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            data-reveal
            className="text-3xl md:text-5xl font-bold text-center mb-10"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            Denver Mortgage FAQ
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* Mountain CTA */}
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
          data-reveal="fade"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Ready to Buy in Denver?
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Get pre-approved today and move fast in Denver's market. Jamie picks up the phone.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://2179191.my1003app.com/794730/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
            style={{ backgroundColor: '#1F2E2A', color: '#F5EFE6', border: '2px solid #F5EFE6' }}
          >
            Get Pre-Approved
          </a>
          <Link
            href="/contact"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
            style={{ backgroundColor: 'transparent', color: '#F5EFE6', border: '2px solid #F5EFE6' }}
          >
            Talk to Jamie
          </Link>
        </div>
        <p className="mt-8 text-xs text-white/50">Jamie Becker NMLS #794730 | Xpert Home Lending NMLS #2179191 | 201 Columbine St Suite 300, Denver CO 80206</p>
      </section>
    </>
  )
}
