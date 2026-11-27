import { teamReference } from '@/lib/siteIdentity'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Loveland, CO Mortgage Broker and Home Loans',
  description:
    'Compare home loans and upfront costs for a purchase in Loveland, Berthoud or nearby communities with Colorado mortgage broker Jamie Becker.',
  alternates: { canonical: 'https://www.thebeckerteam.com/loveland-mortgage' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'The Becker Team — Loveland Colorado Mortgage Lender',
  description: 'Local mortgage lender serving Loveland, Berthoud, Johnstown, Milliken, and Windsor in northern Colorado.',
  url: 'https://www.thebeckerteam.com/loveland-mortgage',
  provider: teamReference,
  areaServed: [
    { '@type': 'City', name: 'Loveland' },
    { '@type': 'City', name: 'Berthoud' },
    { '@type': 'City', name: 'Johnstown' },
    { '@type': 'City', name: 'Milliken' },
    { '@type': 'City', name: 'Windsor' },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thebeckerteam.com' },
    { '@type': 'ListItem', position: 2, name: 'Loveland Mortgage', item: 'https://www.thebeckerteam.com/loveland-mortgage' },
  ],
}

const programs = [
  { label: 'Conventional Loans', desc: 'Compare conventional mortgage terms for a home in Loveland or the surrounding communities. Jamie can explain how the loan amount and upfront costs affect your payment.', href: '/loan-programs/conventional-loans' },
  { label: 'FHA Loans', desc: '3.5% down and flexible credit requirements. Popular with first-time buyers in Loveland and the surrounding area who are stepping into homeownership.', href: '/loan-programs/fha-loans' },
  { label: 'VA Loans', desc: 'Eligible Loveland buyers may qualify with no down payment and no monthly mortgage insurance.', href: '/loan-programs/va-loans' },
  { label: 'USDA Loans', desc: 'An eligible rural address and household income may make a no-down-payment USDA loan possible.', href: '/contact' },
  { label: 'CHFA Loans', desc: 'Colorado Housing and Finance Authority programs provide down payment assistance for first-time buyers in Loveland and Larimer County.', href: '/chfa-loan-colorado' },
  { label: 'Self-Employed Loans', desc: 'Bank statement programs for Loveland small business owners, artists, and contractors with non-traditional income documentation.', href: '/loan-programs/self-employed-loans' },
]

// City sales for the three months ending October 2026: https://www.redfin.com/city/11858/CO/Loveland/housing-market
const marketPrice = 'From August through October 2026, the median sale price across all home types in Loveland was $485,726.'

const faqs = [
  {
    q: 'What is the median home price in Loveland?',
    a: `${marketPrice} A rural property outside city limits can have a different price and different financing options.`,
  },
  {
    q: 'Do you serve Windsor, Johnstown, and Milliken?',
    a: 'Yes. The Becker Team serves all of Larimer and Weld counties including Loveland, Windsor, Johnstown, Milliken, and Berthoud.',
  },
  {
    q: 'Are there USDA loan options near Loveland?',
    a: 'Some homes outside Loveland may qualify for a USDA Rural Development loan. No down payment may be possible if the address is in an eligible area, your household meets the income limit and you plan to live there as your primary home. Check the exact address before you make an offer.',
  },
  {
    q: 'What mortgage programs are good for Loveland retirees?',
    a: 'We can review how you receive retirement income and which documents a lender may accept. If you have savings or investments, we can also look at the eligible assets you’ll have left after closing under our Asset Qualifier program.',
  },
  {
    q: 'What are current mortgage rates in Loveland, CO?',
    a: 'Rates change with the market and depend on your credit profile, loan type and down payment. Jamie can help you compare current quotes and their fees.',
  },
  {
    q: 'How long does it take to close on a home in Loveland?',
    a: 'The loan, any required appraisal and title work affect your closing date. If you’re buying in Loveland or a nearby town, tell Jamie the date on the offer so you can check the timing together.',
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

export default function LovelandMortgagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative py-28 md:py-40 px-6 text-white text-center" style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}>
        <p className="text-sm uppercase tracking-widest font-semibold mb-4 text-white/70">Loveland, Colorado</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Loveland Mortgage Lender
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80 leading-relaxed">
          Explore home loans in Loveland, Berthoud, Johnstown, Milliken and Windsor. We can help you check whether the home you’re considering qualifies for rural financing.
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
          <span>✦ Northern Colorado Lender</span>
          <span>✦ USDA and VA Specialists</span>
          <span>✦ Purchase Pre-Approval</span>
          <span>✦ 21+ Years Experience</span>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Budgeting for a Loveland Home
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            {marketPrice} If you’re also looking outside Loveland, share the address with us. We can check rural loan eligibility for that property and compare the cash you would need at closing with other financing options.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Loveland Mortgage Programs
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
            Why Loveland Buyers Choose The Becker Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'USDA Eligibility Check', body: 'If you’re looking near Milliken, Johnstown or Berthoud, check the exact property address. We can also discuss the program’s household income limit and how the loan compares with your other options.' },
              { title: 'Retiree Programs', body: 'Loveland draws a lot of retirees who have significant assets but limited current income. Asset qualifier programs let you qualify using investment and retirement accounts. This is not a niche product, it is exactly what these programs were built for.' },
              { title: 'Multiple Lender Options', body: 'Jamie compares rates, fees and loan terms from multiple wholesale lenders. You work directly with Jamie throughout the process.' },
              { title: 'Northern Colorado Expertise', body: 'Jamie has worked with buyers throughout northern Colorado and understands the market dynamics in Loveland, Windsor, and the surrounding communities. Local knowledge matters when you are navigating property types and price points unique to the region.' },
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
            Loveland Mortgage FAQ
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="relative py-24 md:py-36 px-6 text-white text-center" style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}>
        <h2 data-reveal="fade" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Ready to Buy in Loveland?
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Get pre-approved today and start your search in northern Colorado.
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
