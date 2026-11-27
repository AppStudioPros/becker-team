import { teamReference } from '@/lib/siteIdentity'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'
import { dollars, oneUnitLimits } from '@/lib/conformingLimits'

export const metadata: Metadata = {
  title: 'Broomfield, CO Mortgage Broker and Home Loans',
  description:
    'Compare Broomfield mortgage options with Jamie Becker. Review the county loan limit and how lenders may treat stock compensation or contract income.',
  alternates: { canonical: 'https://www.thebeckerteam.com/broomfield-mortgage' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'The Becker Team — Broomfield Colorado Mortgage Broker',
  description: 'Local mortgage broker serving Broomfield, Westminster, Thornton, Superior, and Louisville in the Denver-Boulder tech corridor.',
  url: 'https://www.thebeckerteam.com/broomfield-mortgage',
  provider: teamReference,
  areaServed: [
    { '@type': 'City', name: 'Broomfield' },
    { '@type': 'City', name: 'Westminster' },
    { '@type': 'City', name: 'Thornton' },
    { '@type': 'City', name: 'Superior' },
    { '@type': 'City', name: 'Louisville' },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thebeckerteam.com' },
    { '@type': 'ListItem', position: 2, name: 'Broomfield Mortgage', item: 'https://www.thebeckerteam.com/broomfield-mortgage' },
  ],
}

const programs = [
  { label: 'Conventional Loans', desc: 'Compare a conventional mortgage for a Broomfield or Superior home. Ask how your down payment affects the payment, mortgage insurance and cash due at closing.', href: '/loan-programs/conventional-loans' },
  { label: 'Jumbo Loans', desc: 'Explore jumbo financing when the amount you plan to borrow exceeds the conforming loan limit for your property.', href: '/loan-programs/jumbo-loans' },
  { label: 'FHA Loans', desc: '3.5% down and flexible credit requirements for Thornton and Broomfield first-time buyers stepping into the market.', href: '/loan-programs/fha-loans' },
  { label: 'VA Loans', desc: 'Eligible Broomfield buyers may qualify with no down payment and no monthly mortgage insurance.', href: '/loan-programs/va-loans' },
  { label: 'Self-Employed Loans', desc: 'Bank statement programs for contractors, consultants, and tech professionals whose income does not fit the standard W-2 mold.', href: '/loan-programs/self-employed-loans' },
  { label: 'Asset Qualifier Loans', desc: 'Qualify using investment accounts and liquid assets instead of income documentation. A strong fit for Broomfield executives and retirees.', href: '/loan-programs/asset-qualifier-loans' },
]

// October 2026 Colorado Association of REALTORS® Local Market Update for Broomfield County.
// https://car-co.stats.showingtime.com/docs/lmu/x/BroomfieldCounty?src=map
const faqs = [
  {
    q: 'What is the housing market like in Broomfield, CO?',
    a: 'In October 2026, the median sale price in Broomfield County was $700,000 for single-family homes and $475,000 for condos and townhomes. When you compare the two, include HOA dues, taxes and insurance alongside the mortgage payment.',
  },
  {
    q: 'Which home loans should I compare in Broomfield?',
    a: `Start with how much you expect to borrow. For a one-unit home in Broomfield County, the conforming loan limit is ${dollars.format(oneUnitLimits.Broomfield[2026])} for both 2026 and 2027. If you earn bonuses, stock compensation or contract income, we can review which records the lender will need.`,
  },
  {
    q: 'Do you serve Superior and Louisville?',
    a: 'Yes. The Becker Team serves all communities along the US 36 corridor including Broomfield, Westminster, Thornton, Superior, and Louisville. Share the exact property address so we can check which county’s loan limit applies.',
  },
  {
    q: 'How does being a mortgage broker help Broomfield buyers?',
    a: 'Jamie can compare options from several wholesale lenders. That gives you written terms to compare for your loan amount, property and income.',
  },
  {
    q: 'What are current mortgage rates in Broomfield, CO?',
    a: 'Rates change with the market and depend on your credit score, loan amount, down payment and loan type. Jamie can compare quotes from multiple lenders and explain the fees and cash to close.',
  },
  {
    q: 'How fast can I close a home loan in Broomfield?',
    a: 'Closing depends on the loan, any required appraisal and title work. Tell Jamie the date you’re considering so he can review what needs to be ready first.',
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

export default function BroomfieldMortgagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative py-28 md:py-40 px-6 text-white text-center" style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}>
        <p className="text-sm uppercase tracking-widest font-semibold mb-4 text-white/70">Broomfield, Colorado</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Broomfield Mortgage Broker
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80 leading-relaxed">
          Compare home loans for Broomfield, Westminster, Superior, Louisville and the US 36 corridor with Jamie Becker.
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
          <span>✦ Broomfield City-County Lender</span>
          <span>✦ US 36 Tech Corridor Specialist</span>
          <span>✦ Purchase Pre-Approval</span>
          <span>✦ 21+ Years Experience</span>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Broomfield: Where Denver Meets Boulder
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            Broomfield is both a city and a county along US 36. If your home search also includes neighboring <Link href="/westminster-mortgage" className="font-semibold underline underline-offset-4">Westminster</Link>, check which county each property is in before comparing loan limits. If you plan to use equity from a home sale for your next down payment, we can compare the amount you expect to borrow with the county loan limit. For buyers with stock compensation or contract income, we can also review what the lender will count toward that purchase. Jamie Becker (NMLS #794730) can go over the documents lenders ask for before you apply.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Broomfield Mortgage Programs
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
            Why Broomfield Buyers Choose The Becker Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Tech Income Expertise', body: 'If stock awards or bonuses will help you qualify, bring your vesting schedule or pay records. We can review how the lender treats each part of your income.' },
              { title: 'Multiple Lender Access', body: 'We can compare quotes from wholesale lenders using the same loan amount and term, so you can see the rate, lender fees and cash due at closing for each option.' },
              { title: 'Jumbo Loan Specialists', body: 'On a $1 million Broomfield purchase, a $150,000 down payment leaves an $850,000 mortgage, below the 2026 and 2027 one-unit limit. Putting $100,000 down leaves a $900,000 mortgage, above it.' },
              { title: 'Pre-Approval Before You Shop', body: 'Bring your income documents and details about any bonuses or equity compensation. Jamie can walk you through what the lender needs to review.' },
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
            Broomfield Mortgage FAQ
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="relative py-24 md:py-36 px-6 text-white text-center" style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}>
        <h2 data-reveal="fade" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Ready to Buy in Broomfield?
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Get pre-approved today and move with confidence in the US 36 corridor.
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
