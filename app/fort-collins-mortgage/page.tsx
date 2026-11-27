import { teamReference } from '@/lib/siteIdentity'
import type { Metadata } from 'next'
import Link from 'next/link'
import LocalMortgageGuide from '@/components/LocalMortgageGuide'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Fort Collins, CO Mortgage Broker',
  description:
    'Buying in Fort Collins? Compare local sale prices, Larimer County loan limits, and financing for a house, townhome or condo with Jamie Becker.',
  alternates: { canonical: 'https://www.thebeckerteam.com/fort-collins-mortgage' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'The Becker Team — Fort Collins Mortgage Broker',
  description: 'Local mortgage lender serving Fort Collins, Loveland, Greeley, Windsor, and Northern Colorado.',
  url: 'https://www.thebeckerteam.com/fort-collins-mortgage',
  provider: teamReference,
  areaServed: [
    { '@type': 'City', name: 'Fort Collins' },
    { '@type': 'City', name: 'Loveland' },
    { '@type': 'City', name: 'Greeley' },
    { '@type': 'City', name: 'Windsor' },
    { '@type': 'City', name: 'Timnath' },
    { '@type': 'City', name: 'Wellington' },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thebeckerteam.com' },
    { '@type': 'ListItem', position: 2, name: 'Fort Collins Mortgage', item: 'https://www.thebeckerteam.com/fort-collins-mortgage' },
  ],
}

const programs = [
  { label: 'Conventional Loans', desc: 'Compare conventional loans for a Fort Collins home and see how a larger or smaller down payment affects monthly costs.', href: '/loan-programs/conventional-loans' },
  { label: 'FHA Loans', desc: 'Great for first-time buyers and CSU graduates entering the Fort Collins market. 3.5% down, flexible credit.', href: '/loan-programs/fha-loans' },
  { label: 'VA Loans', desc: 'Eligible veterans and service members in Northern Colorado may qualify with no down payment.', href: '/loan-programs/va-loans' },
  { label: 'Jumbo Loans', desc: 'Financing above conforming limits for higher-value Fort Collins and Northern Colorado properties.', href: '/loan-programs/jumbo-loans' },
  { label: 'Self-Employed / Bank Statement', desc: 'Built for Fort Collins entrepreneurs, tech professionals, and small business owners who prefer not to use tax returns.', href: '/loan-programs/self-employed-loans' },
  { label: 'Asset Qualifier Loans', desc: 'Qualify using investment accounts and liquid assets instead of traditional income documentation.', href: '/loan-programs/asset-qualifier-loans' },
]

const faqs = [
  { q: 'How do I compare a Fort Collins condo with a house?', a: 'Start with the full monthly payment for each home. For a condo, include HOA dues and check what insurance and maintenance the association pays for. For a detached house, budget for those costs yourself. We can compare both payments using the same down payment and loan term.' },
  { q: 'What are mortgage rates in Fort Collins, CO?', a: 'Rates change with the market and depend on the loan type, credit profile, down payment and term. Jamie can compare current quotes from multiple lenders for the same loan amount and term.' },
  { q: 'Do you offer VA loans in Fort Collins?', a: 'Yes. We can help eligible veterans, service members and surviving spouses in northern Colorado review their VA loan options. Start with your Certificate of Eligibility so we can check your entitlement and discuss down payment requirements for the home you want.' },
  { q: 'Can I get a mortgage in Fort Collins if I am self-employed?', a: 'Absolutely. Many Fort Collins professionals run their own businesses or work as consultants in the tech and biotech industries. Jamie specializes in bank statement loans and asset qualifier programs designed for borrowers who cannot show traditional W-2 income.' },
  { q: 'How fast can I close on a home in Fort Collins?', a: 'Closing depends on underwriting, any required appraisal and title work. If your Fort Collins offer has a proposed closing date, Jamie can review whether it fits the loan and the property.' },
  { q: 'Do you serve Loveland and Greeley as well?', a: 'Yes. The Becker Team serves all of Northern Colorado — Fort Collins, Loveland, Greeley, Windsor, Timnath, Wellington, and surrounding communities. Colorado licensing covers the full state.' },
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

export default function FortCollinsMortgagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative py-28 md:py-40 px-6 text-white text-center" style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}>
        <p className="text-sm uppercase tracking-widest font-semibold mb-4 text-white/70">Fort Collins, Colorado</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Fort Collins Mortgage Broker
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80 leading-relaxed">
          Compare home loans for a Fort Collins house, townhome or condo with Jamie Becker.
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

      {/* Feature bar */}
      <section className="bg-white py-5 px-6 border-b border-stone-200">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-semibold" style={{ color: '#1F2E2A' }}>
          <span>✦ Northern Colorado Lender</span>
          <span>✦ Fort Collins Home Loans</span>
          <span>✦ Purchase Pre-Approval</span>
          <span>✦ 21+ Years Experience</span>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Northern Colorado&apos;s Mortgage Expert
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            Whether you’re looking near CSU, moving closer to work, or comparing a Fort Collins address with a home in Timnath or Windsor, bring us the listings. We can compare the loan amount, property taxes, insurance and any HOA dues for each home so you can see what fits your budget.
          </p>
        </div>
      </section>

      <LocalMortgageGuide city="fort-collins" />

      {/* Programs */}
      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Fort Collins Mortgage Programs
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

      {/* Why local */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Why Work With a Mortgage Broker in Fort Collins?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Access to Multiple Lenders', body: 'Jamie compares rates and fees from multiple wholesale lenders and walks you through the written estimates.' },
              { title: 'Pre-Approval Before You Shop', body: 'Review the payment, down payment and cash to close before you make an offer. Jamie can also tell you which documents the lender needs.' },
              { title: 'Specialty Programs Available', body: "Whether you're a CSU researcher, a tech contractor, or a remote worker, specialty programs exist for borrowers who don't fit the standard mold. Jamie knows which ones apply to you." },
              { title: 'Direct Access, Personal Service', body: "No call centers, no handoffs. Jamie handles your loan from application through closing and is reachable throughout the process." },
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
          <h2 data-reveal className="text-3xl md:text-5xl font-bold text-center mb-10" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Fort Collins Mortgage FAQ
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-36 px-6 text-white text-center" style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}>
        <h2 data-reveal="fade" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Ready to Buy in Fort Collins?
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Get pre-approved today and be ready to move in Northern Colorado&apos;s competitive market.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://2179191.my1003app.com/794730/register" target="_blank" rel="noopener noreferrer"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
            style={{ backgroundColor: '#1c3023', color: '#F5EFE6', border: '2px solid #F5EFE6' }}>
            Get Pre-Approved
          </a>
          <Link href="/contact"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
            style={{ backgroundColor: 'transparent', color: '#F5EFE6', border: '2px solid #F5EFE6' }}>
            Talk to Jamie
          </Link>
        </div>
        <p className="mt-8 text-xs text-white/50">Jamie Becker NMLS #794730 | Xpert Home Lending NMLS #2179191 | 201 Columbine St Suite 300, Denver CO 80206</p>
      </section>
    </>
  )
}
