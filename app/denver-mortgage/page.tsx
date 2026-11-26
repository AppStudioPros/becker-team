import type { Metadata } from 'next'
import Link from 'next/link'
import LocalMortgageGuide from '@/components/LocalMortgageGuide'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Denver Mortgage Broker and Home Loans',
  description:
    'Denver mortgage broker Jamie Becker compares home loans from multiple lenders. See how rates, lender fees and down payments affect your Denver purchase.',
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
  { label: 'Conventional Loans', desc: 'Choose between a fixed or adjustable rate based on your budget and how long you plan to own the home.', href: '/loan-programs/conventional-loans' },
  { label: 'FHA Loans', desc: 'FHA-insured financing for a primary home, with flexible credit and down payment options.', href: '/loan-programs/fha-loans' },
  { label: 'VA Loans', desc: 'Zero down for eligible veterans and service members. No PMI required.', href: '/loan-programs/va-loans' },
  { label: 'Jumbo Loans', desc: 'Financing above conforming limits for Denver luxury and high-value properties.', href: '/loan-programs/jumbo-loans' },
  { label: 'Self-Employed / Bank Statement', desc: 'Qualify using bank statements instead of tax returns — built for Denver entrepreneurs and remote workers.', href: '/loan-programs/self-employed-loans' },
  { label: 'Asset Qualifier Loans', desc: 'Qualify using your investment accounts, not your income — no employment required.', href: '/loan-programs/asset-qualifier-loans' },
]

const faqs = [
  { q: 'How do I compare mortgage lenders in Denver?', a: 'Compare written Loan Estimates for the same loan amount and term. Look at the rate, lender fees and cash you’ll need at closing. We’ll walk you through the differences and talk through the closing date in your offer.' },
  { q: 'What are current mortgage rates in Denver, CO?', a: 'Mortgage rates in Denver change daily based on market conditions. Your actual rate depends on your credit score, loan type, down payment, and loan term. Contact Jamie for a current rate quote tailored to your specific situation — rates are available for conventional, FHA, VA, and jumbo loans.' },
  { q: 'How much do I need for a down payment in Denver?', a: 'Denver down payments vary by loan type. FHA purchase loans may allow 3.5% down with a qualifying credit score of at least 580. Certain conventional programs allow 3% down on a one-unit primary home. Eligible VA buyers can often purchase with no down payment. Jumbo loans typically require 10-20%. Given Denver\'s price points, CHFA down payment assistance is also available for qualifying buyers.' },
  { q: 'What is the CHFA program and can I use it in Denver?', a: 'CHFA (Colorado Housing and Finance Authority) offers mortgage programs and down payment assistance to qualifying buyers in Denver and elsewhere in Colorado. Income and purchase price limits apply. Jamie can tell you quickly if you qualify.' },
  { q: 'How long does a mortgage take to close in Denver?', a: 'If the seller has a closing date in mind, bring it to us before you sign the contract. We’ll check what your lender still needs and how much time to allow for title work and any required appraisal.' },
  { q: 'Do you serve the entire Denver metro?', a: 'Yes. The Becker Team serves all of Denver and the surrounding metro — including Aurora, Lakewood, Littleton, Centennial, Englewood, Highlands Ranch, Parker, Castle Rock, Broomfield, and Westminster. As a local lender, Jamie knows the neighborhoods and can move quickly.' },
]


const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function DenverMortgagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section
        className="relative py-28 md:py-40 px-6 text-white text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,35,25,0.60), rgba(20,35,25,0.60)), url("/images/denver-hero.jpg")',
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
          Buying a home in Denver? We compare mortgage rates and lender fees side by side so you can see what you’ll pay each month and what you’ll need at closing.
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
          <span>✦ Compare Mortgage Rates</span>
          <span>✦ Mortgage Broker Near Me</span>
          <span>✦ Purchase Pre-Approvals</span>
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
            Jamie Becker (NMLS #794730) has been helping Denver buyers, homeowners, and investors navigate one of the country's most competitive housing markets for over 20 years. Jamie compares loan options from multiple wholesale lenders and walks you through the rate, monthly payment and closing costs. Whether you're buying your first home in Aurora, moving up in Lakewood, or investing in the Denver metro, you get direct access to an expert who picks up the phone.
          </p>
        </div>
      </section>

      <LocalMortgageGuide city="denver" />

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
              { title: 'Multiple Lender Options', body: "We can request pricing from more than one wholesale lender. We’ll show you what each lender charges upfront for the rate it quotes." },
              { title: 'Pre-Approval for Your Offer', body: "If you’re preparing an offer, send us the date you plan to submit it. We’ll tell you what we need to review for a pre-approval letter." },
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
