import { teamReference } from '@/lib/siteIdentity'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Thornton, CO Mortgage Broker and Home Loans',
  description:
    'Thornton CO mortgage broker Jamie Becker (NMLS #794730). FHA, conventional, VA, and CHFA loans for Thornton, Northglenn, Commerce City, Brighton, and Henderson.',
  alternates: { canonical: 'https://www.thebeckerteam.com/thornton-mortgage' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'The Becker Team — Thornton Colorado Mortgage Broker',
  description: 'Local mortgage lender serving Thornton, Northglenn, Commerce City, Brighton, and Henderson in the north Denver metro.',
  url: 'https://www.thebeckerteam.com/thornton-mortgage',
  provider: teamReference,
  areaServed: [
    { '@type': 'City', name: 'Thornton' },
    { '@type': 'City', name: 'Northglenn' },
    { '@type': 'City', name: 'Commerce City' },
    { '@type': 'City', name: 'Brighton' },
    { '@type': 'City', name: 'Henderson' },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thebeckerteam.com' },
    { '@type': 'ListItem', position: 2, name: 'Thornton Mortgage', item: 'https://www.thebeckerteam.com/thornton-mortgage' },
  ],
}

const programs = [
  { label: 'FHA Loans', desc: '3.5% down and flexible credit. The most popular loan type for Thornton first-time buyers entering the market at this price point.', href: '/loan-programs/fha-loans' },
  { label: 'CHFA Loans', desc: 'Colorado Housing and Finance Authority down payment assistance can help Thornton buyers close with less cash upfront. Pairs with FHA and conventional.', href: '/chfa-loan-colorado' },
  { label: 'Conventional Loans', desc: 'Compare conventional and FHA payments for your Thornton home, including mortgage insurance and closing costs for each option.', href: '/loan-programs/conventional-loans' },
  { label: 'VA Loans', desc: 'Eligible Thornton and Brighton buyers may qualify with no down payment and no monthly mortgage insurance.', href: '/loan-programs/va-loans' },
  { label: 'New Construction Loans', desc: 'Buying a new home in Brighton or Henderson? Ask when you can lock the rate, how long the lock lasts and what an extension costs.', href: '/loan-programs/conventional-loans' },
  { label: 'Self-Employed Loans', desc: 'Bank statement programs for Thornton small business owners and contractors. Non-traditional income documentation accepted.', href: '/loan-programs/self-employed-loans' },
]

// City sales for the three months ending October 2026: https://www.redfin.com/city/30790/CO/Thornton/housing-market
const marketPrice = 'From August through October 2026, the median sale price across all home types in Thornton was $514,142.'

const faqs = [
  {
    q: 'What is the median home price in Thornton?',
    a: `${marketPrice} When you compare listings, look at recent sales of the same type of home in the neighborhood you’re considering.`,
  },
  {
    q: 'How should Thornton buyers compare FHA and conventional loans?',
    a: 'Compare cash needed at closing, the full monthly payment and how long mortgage insurance lasts. Some conventional programs allow 3% down, and eligible FHA buyers may qualify with 3.5% down. A CHFA participating lender can check whether you’re eligible for assistance and how it changes the cost.',
  },
  {
    q: 'Can I commute from Thornton to downtown Denver by train?',
    a: 'Yes. The RTD N Line connects Thornton with Union Station in downtown Denver. If you’re looking near a station, check the route between the home and the platform and the train schedule for your usual commute.',
  },
  {
    q: 'Do you serve Brighton and Northglenn?',
    a: 'Yes. The Becker Team serves the full north Denver metro including Thornton, Northglenn, Commerce City, Brighton, and Henderson. Brighton in particular has seen significant new construction activity and Jamie works frequently with buyers purchasing in new communities along the Brighton corridor.',
  },
  {
    q: 'What are current mortgage rates in Thornton, CO?',
    a: 'Your rate depends on the market, credit profile, down payment and loan type. Jamie can compare current quotes from multiple wholesale lenders.',
  },
  {
    q: 'How fast can I close a home loan in Thornton?',
    a: 'The timeline depends on underwriting, any required appraisal and title work. If you’re buying new construction, also check when the builder expects the home to be ready.',
  },
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

export default function ThorntonMortgagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative py-28 md:py-40 px-6 text-white text-center" style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}>
        <p className="text-sm uppercase tracking-widest font-semibold mb-4 text-white/70">Thornton, Colorado</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Thornton Mortgage Broker
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80 leading-relaxed">
          Buying in Thornton, Northglenn, Commerce City, Brighton or Henderson? We can help you compare down payments and monthly costs for the loans you qualify for.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://2179191.my1003app.com/794730/register" target="_blank" rel="noopener noreferrer"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-12 py-5 rounded btn-hover"
            style={{ backgroundColor: '#1c3023', color: '#F5EFE6', border: '2px solid #F5EFE6' }}>
            Get Pre-Approved
          </a>
          <Link href="/contact"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-12 py-5 rounded btn-hover"
            style={{ backgroundColor: 'transparent', color: '#F5EFE6', border: '2px solid #F5EFE6' }}>
            Talk to Jamie
          </Link>
        </div>
      </section>

      <section className="bg-white py-5 px-6 border-b border-stone-200">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-semibold" style={{ color: '#1F2E2A' }}>
          <span>✦ North Denver Metro Lender</span>
          <span>✦ FHA and CHFA Specialists</span>
          <span>✦ Purchase Pre-Approval</span>
          <span>✦ 21+ Years Experience</span>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Buying a Home in Thornton
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            {marketPrice} We can estimate the payment on a resale home and a new build using the taxes, insurance and association dues for each address. For a new build, ask whether the tax estimate includes the finished home.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Thornton Mortgage Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((p) => (
              <Link key={p.label} href={p.href} className="block bg-white rounded-xl p-6 border border-stone-200 hover:shadow-md transition-shadow">
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

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Why Thornton Buyers Choose The Becker Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'First-Time Buyer Specialists', body: 'Thornton is a primary entry point into the Denver metro for first-time buyers. Jamie walks you through FHA, CHFA, and conventional options in plain language, then recommends what actually makes sense for your situation.' },
              { title: 'New Construction Experience', body: 'When comparing a builder incentive with a separate loan offer, check the lender credit, rate and lock period. We can put the numbers side by side for your planned closing date.' },
              { title: 'Multiple Lender Options', body: 'Jamie can compare rates, lender fees and how much cash you’d need at closing with different wholesale lenders.' },
              { title: 'Closing Date Planning', body: 'Jamie can help you factor underwriting and appraisal into your offer. For a new build, bring the builder’s expected completion date.' },
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

      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 data-reveal className="text-3xl md:text-5xl font-bold text-center mb-10" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Thornton Mortgage FAQ
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="relative py-24 md:py-36 px-6 text-white text-center" style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}>
        <h2 data-reveal="fade" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Ready to Buy in Thornton?
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Get pre-approved today and start your north Denver metro home search.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://2179191.my1003app.com/794730/register" target="_blank" rel="noopener noreferrer"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
            style={{ backgroundColor: '#1c3023', color: '#F5EFE6', border: '2px solid #F5EFE6' }}>
            Get Pre-Approved
          </a>
          <a href="tel:7204923335"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
            style={{ backgroundColor: 'transparent', color: '#F5EFE6', border: '2px solid #F5EFE6' }}>
            Call Us: (720) 492-3335
          </a>
        </div>
        <p className="mt-8 text-xs text-white/50">Jamie Becker NMLS #794730 | Xpert Home Lending NMLS #2179191 | 201 Columbine St Suite 300, Denver CO 80206</p>
      </section>
    </>
  )
}
