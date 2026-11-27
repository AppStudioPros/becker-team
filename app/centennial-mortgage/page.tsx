import { teamReference } from '@/lib/siteIdentity'
import type { Metadata } from 'next'
import Link from 'next/link'
import { dollars, oneUnitLimits } from '@/lib/conformingLimits'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Centennial, CO Mortgage Lender and Home Loans',
  description:
    'Compare conventional and jumbo home loans in Centennial. See how county loan limits, your down payment and income documentation affect your options.',
  alternates: { canonical: 'https://www.thebeckerteam.com/centennial-mortgage' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'The Becker Team — Centennial Colorado Mortgage Lender',
  description: 'Local mortgage lender serving Centennial, Greenwood Village, Parker, Lone Tree, and Highlands Ranch in Arapahoe County.',
  url: 'https://www.thebeckerteam.com/centennial-mortgage',
  provider: teamReference,
  areaServed: [
    { '@type': 'City', name: 'Centennial' },
    { '@type': 'City', name: 'Greenwood Village' },
    { '@type': 'City', name: 'Parker' },
    { '@type': 'City', name: 'Lone Tree' },
    { '@type': 'City', name: 'Highlands Ranch' },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thebeckerteam.com' },
    { '@type': 'ListItem', position: 2, name: 'Centennial Mortgage', item: 'https://www.thebeckerteam.com/centennial-mortgage' },
  ],
}

const programs = [
  { label: 'Conventional Loans', desc: 'Compare conventional loan terms for a purchase or refinance in Centennial, Parker or Highlands Ranch.', href: '/loan-programs/conventional-loans' },
  { label: 'Jumbo Loans', desc: 'For a purchase in Greenwood Village or Lone Tree, compare the amount you need to borrow with the one-unit limit for the county where the home sits.', href: '/loan-programs/jumbo-loans' },
  { label: 'VA Loans', desc: 'Zero down for eligible veterans and active-duty service members throughout the south Denver metro. No PMI. Buckley SFB veterans welcome.', href: '/loan-programs/va-loans' },
  { label: 'Self-Employed Loans', desc: 'Bank statement programs for Centennial and Greenwood Village professionals, business owners, and executives with non-W-2 income.', href: '/loan-programs/self-employed-loans' },
  { label: 'Asset Qualifier Loans', desc: 'Qualify using investment accounts and liquid assets instead of pay stubs. A strong fit for high-net-worth buyers in Greenwood Village and Parker.', href: '/loan-programs/asset-qualifier-loans' },
  { label: 'FHA Loans', desc: '3.5% down and flexible credit. Less common in Centennial\'s higher price ranges but a solid option for entry-level purchases in Parker and outer communities.', href: '/loan-programs/fha-loans' },
]

// City sales for the three months ending October 2026: https://www.redfin.com/city/3327/CO/Centennial/housing-market
const marketPrice = 'From August through October 2026, the median sale price across all home types in Centennial was $619,569.'

const faqs = [
  {
    q: 'What is the median home price in Centennial?',
    a: `${marketPrice} Use recent sales of similar homes in the neighborhood to narrow your search.`,
  },
  {
    q: 'Do you serve Parker, Lone Tree, and Highlands Ranch?',
    a: 'Yes. We help buyers in Centennial, Greenwood Village, Parker, Lone Tree and Highlands Ranch. If you’re comparing two properties, we can estimate the mortgage payment for each address.',
  },
  {
    q: 'Are jumbo loans common in the Centennial area?',
    a: `The 2026 one-unit conforming loan limit in Arapahoe County is ${dollars.format(oneUnitLimits.Arapahoe[2026])}. Subtract the down payment from your purchase price. If the mortgage is above the county limit, we can compare jumbo options.`,
  },
  {
    q: 'Can I use bonuses or stock compensation to qualify?',
    a: 'If part of your pay comes from bonuses or restricted stock, tell us how often you receive it. We can review your pay history and vesting schedule to see which income a lender can count toward a mortgage.',
  },
  {
    q: 'What are current mortgage rates in Centennial, CO?',
    a: 'Rates change with the market and depend on your credit, loan type and down payment. Compare quotes for the same loan amount and term, then check the fees as well as the rate.',
  },
  {
    q: 'How fast can I close in the Centennial area?',
    a: 'Closing depends on underwriting, any required appraisal and title work. Tell Jamie what date the seller has in mind so you can check the steps before you commit.',
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

export default function CentennialMortgagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative py-28 md:py-40 px-6 text-white text-center" style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}>
        <p className="text-sm uppercase tracking-widest font-semibold mb-4 text-white/70">Centennial, Colorado</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Centennial Mortgage Lender
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80 leading-relaxed">
          Home loans for Centennial, Greenwood Village, Parker, Lone Tree, and Highlands Ranch. Conventional, jumbo, and VA. Personal service from an experienced lender.
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
          <span>✦ Arapahoe County Lender</span>
          <span>✦ Jumbo and Conventional Specialists</span>
          <span>✦ Purchase Pre-Approval</span>
          <span>✦ 21+ Years Experience</span>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Buying Your Next Home in Centennial
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            {marketPrice} If you plan to use the proceeds from selling your current home, we can estimate how much you’ll have for a down payment after paying off your mortgage and covering selling costs. That gives you a budget to work with before you make an offer.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Centennial Mortgage Programs
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
            Why Centennial Buyers Choose The Becker Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Complex Income Expertise', body: 'If part of your pay comes from stock awards, quarterly bonuses or deferred compensation, we can identify what documents a lender needs to count it.' },
              { title: 'Jumbo Loan Access', body: 'If your loan amount exceeds the county limit, Jamie can compare jumbo options and explain how much cash each lender wants you to keep after closing.' },
              { title: 'Multiple Lender Options', body: 'Compare the rate and lender fees together. If one offer charges points upfront, Jamie can show how long a lower payment would take to cover that cost.' },
              { title: 'Closing Date Planning', body: 'Bring the seller’s proposed closing date. Jamie will walk through the loan requirements and the time needed to review your documents.' },
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
            Centennial Mortgage FAQ
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="relative py-24 md:py-36 px-6 text-white text-center" style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}>
        <h2 data-reveal="fade" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Ready to Buy in Centennial?
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Get pre-approved today and move with confidence in the south Denver metro.
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
