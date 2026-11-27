import { teamReference } from '@/lib/siteIdentity'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Longmont, CO Mortgage Broker and Home Loans',
  description:
    'Compare financing for a Longmont townhome or house. See how a down payment affects your costs and explore first-time buyer options.',
  alternates: { canonical: 'https://www.thebeckerteam.com/longmont-mortgage' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'The Becker Team — Longmont Colorado Mortgage Broker',
  description: 'Local mortgage lender serving Longmont, Firestone, Frederick, Mead, and Berthoud on the northern Front Range.',
  url: 'https://www.thebeckerteam.com/longmont-mortgage',
  provider: teamReference,
  areaServed: [
    { '@type': 'City', name: 'Longmont' },
    { '@type': 'City', name: 'Firestone' },
    { '@type': 'City', name: 'Frederick' },
    { '@type': 'City', name: 'Mead' },
    { '@type': 'City', name: 'Berthoud' },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thebeckerteam.com' },
    { '@type': 'ListItem', position: 2, name: 'Longmont Mortgage', item: 'https://www.thebeckerteam.com/longmont-mortgage' },
  ],
}

const programs = [
  { label: 'CHFA Loans', desc: 'Eligible CHFA first mortgages can include a grant or a deferred loan. The program and a participating lender determine eligibility.', href: '/chfa-loan-colorado' },
  { label: 'FHA Loans', desc: '3.5% down and flexible credit requirements. One of the most popular loan types for first-time buyers in Longmont, Firestone, and Frederick.', href: '/loan-programs/fha-loans' },
  { label: 'Conventional Loans', desc: 'Explore conventional financing for a Longmont townhome or single-family home and see how your down payment changes the monthly cost.', href: '/loan-programs/conventional-loans' },
  { label: 'VA Loans', desc: 'Eligible Longmont buyers may qualify with no down payment and no monthly mortgage insurance.', href: '/loan-programs/va-loans' },
  { label: 'USDA Loans', desc: 'An eligible rural address and household income may make a no-down-payment USDA loan possible.', href: '/contact' },
  { label: 'Self-Employed Loans', desc: 'Bank statement programs for Longmont tech freelancers, healthcare professionals, and business owners with non-traditional income.', href: '/loan-programs/self-employed-loans' },
]

// City sales for the three months ending October 2026: https://www.redfin.com/city/30791/CO/Longmont/housing-market
const marketPrice = 'From August through October 2026, the median sale price across all home types in Longmont was $550,862.'

const faqs = [
  {
    q: 'What is the median home price in Longmont?',
    a: `${marketPrice} For a closer comparison, look for recent sales of similar homes on the same side of town.`,
  },
  {
    q: 'What mortgage programs are best for Longmont first-time buyers?',
    a: 'Compare conventional and FHA offers for the same home. If you need help with cash at closing, a CHFA participating lender can check whether the property and your finances qualify for assistance, along with any change to your first mortgage rate.',
  },
  {
    q: 'Do you serve Firestone, Frederick, and Mead?',
    a: 'Yes. We work with buyers in Longmont, Firestone, Frederick, Mead and Berthoud. Send us the address so we can check the county’s loan limits and discuss which financing may fit.',
  },
  {
    q: 'Are there USDA loan options near Longmont?',
    a: 'Some properties outside Longmont may qualify. USDA financing can allow no down payment if the address is in an eligible rural area, your household meets the income limit and you’ll occupy the home as your primary residence. Send us the address to check.',
  },
  {
    q: 'What are current mortgage rates in Longmont, CO?',
    a: 'A rate quote depends on the market, your loan type and your credit profile. Jamie can price the same loan with multiple lenders and show you the points and fees associated with each quote.',
  },
  {
    q: 'How long does it take to close a home loan in Longmont?',
    a: 'Before agreeing to a closing date, ask which items still need review. The appraisal, title report, income documents and any assistance approval can each affect the timeline.',
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

export default function LongmontMortgagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative py-28 md:py-40 px-6 text-white text-center" style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}>
        <p className="text-sm uppercase tracking-widest font-semibold mb-4 text-white/70">Longmont, Colorado</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Longmont Mortgage Broker
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80 leading-relaxed">
          Compare home loans for Longmont, Firestone, Frederick, Mead and Berthoud. We’ll help you estimate the cash you’ll need to buy your first home or move into your next one.
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
          <span>✦ Northern Front Range Lender</span>
          <span>✦ CHFA and FHA Options</span>
          <span>✦ Purchase Pre-Approvals</span>
          <span>✦ 21+ Years Experience</span>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Comparing Homes in Longmont and Boulder
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            {marketPrice} If you’re searching in both Longmont and Boulder, send us a listing from each city. We can use the same down payment for both and show how the loan amount, property taxes and monthly payment compare.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Longmont Mortgage Programs
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
            Why Longmont Buyers Choose The Becker Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Down Payment Assistance', body: 'We can help you compare cash needed with and without assistance. A CHFA participating lender determines eligibility and confirms the terms for your address.' },
              { title: 'First-Time Buyer Focus', body: 'Longmont attracts a lot of first-time buyers from Boulder and the Denver metro. Jamie walks you through the process clearly, no jargon, no pressure. Just straight answers about what you qualify for and what it will cost.' },
              { title: 'Multiple Lender Options', body: 'If you want to keep more cash for moving costs, ask Jamie to compare quotes with and without discount points. You can see how the upfront cost changes your monthly payment.' },
              { title: 'Planning Your Closing', body: 'Bring your target date when you request pre-approval. We can review what documents and lender decisions are still needed before you make an offer.' },
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
            Longmont Mortgage FAQ
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="relative py-24 md:py-36 px-6 text-white text-center" style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}>
        <h2 data-reveal="fade" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Ready to Buy in Longmont?
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Get pre-approved today and start your search on the northern Front Range.
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
