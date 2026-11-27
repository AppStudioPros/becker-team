import { teamReference } from '@/lib/siteIdentity'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Englewood, CO Mortgage Broker and Home Loans',
  description:
    'Compare financing for an Englewood condo or house. See when the county loan limit makes a jumbo mortgage worth considering.',
  alternates: { canonical: 'https://www.thebeckerteam.com/englewood-mortgage' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'The Becker Team — Englewood Colorado Mortgage Broker',
  description: 'Local mortgage broker serving Englewood, Sheridan, Cherry Hills Village, Greenwood Village, and Centennial.',
  url: 'https://www.thebeckerteam.com/englewood-mortgage',
  provider: teamReference,
  areaServed: [
    { '@type': 'City', name: 'Englewood' },
    { '@type': 'City', name: 'Sheridan' },
    { '@type': 'City', name: 'Cherry Hills Village' },
    { '@type': 'City', name: 'Greenwood Village' },
    { '@type': 'City', name: 'Centennial' },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thebeckerteam.com' },
    { '@type': 'ListItem', position: 2, name: 'Englewood Mortgage', item: 'https://www.thebeckerteam.com/englewood-mortgage' },
  ],
}

const programs = [
  { label: 'FHA Loans', desc: 'Eligible Englewood and Sheridan buyers can compare an FHA loan with a conventional loan, including how the mortgage insurance affects the monthly payment.', href: '/loan-programs/fha-loans' },
  { label: 'Conventional Loans', desc: 'The most common loan type in Englewood. Works well across the full range from starter condos to luxury single-family homes in Cherry Hills Village.', href: '/loan-programs/conventional-loans' },
  { label: 'VA Loans', desc: 'Eligible Englewood buyers may qualify with no down payment and no monthly mortgage insurance.', href: '/loan-programs/va-loans' },
  { label: 'Jumbo Loans', desc: 'For a home in Cherry Hills Village or Greenwood Village, compare jumbo options if your expected mortgage exceeds the county limit.', href: '/loan-programs/jumbo-loans' },
  { label: 'Self-Employed Loans', desc: 'Bank statement programs for Englewood business owners, freelancers, and contractors who prefer alternatives to W-2 income documentation.', href: '/loan-programs/self-employed-loans' },
  { label: 'Asset Qualifier Loans', desc: 'Qualify using liquid assets and investment accounts — a strong fit for Cherry Hills and Greenwood Village buyers with substantial net worth.', href: '/loan-programs/asset-qualifier-loans' },
]

// City sales for the three months ending October 2026: https://www.redfin.com/city/6382/CO/Englewood/housing-market
const marketPrice = 'From August through October 2026, the median sale price across all home types in Englewood was $524,635.'

const faqs = [
  {
    q: 'What is the median home price in Englewood?',
    a: `${marketPrice} If you’re looking at a condo, compare recent condo sales in the same building or neighborhood.`,
  },
  {
    q: 'Do you serve Cherry Hills Village and Greenwood Village?',
    a: 'Yes. The Becker Team covers all of the south Denver metro. Cherry Hills Village and Greenwood Village are high-end markets where jumbo loans are common and the buyer pool typically has complex income situations. Jamie has programs for both ends of the Englewood area market.',
  },
  {
    q: 'What are the best mortgage programs for Englewood first-time buyers?',
    a: 'FHA loans are the most common choice for Englewood first-time buyers because of the 3.5% down requirement and more flexible credit guidelines. CHFA programs can pair with FHA to provide additional down payment assistance. For buyers with stronger credit and at least 3-5% down, conventional loans often make sense too. Jamie can walk you through the numbers on both.',
  },
  {
    q: 'How does light rail access affect buying in Englewood?',
    a: 'If you plan to commute by rail, check the walk or bus ride from the home to Englewood Station. Compare the schedule for your work hours and include parking or transit costs in your budget.',
  },
  {
    q: 'What are current mortgage rates in Englewood, CO?',
    a: 'Your rate can change with the market and depends on your credit profile, loan type and down payment. Jamie can compare current quotes from multiple wholesale lenders.',
  },
  {
    q: 'How fast can I close on a home in Englewood?',
    a: 'The lender needs time to review the loan and property and complete any required appraisal. Title work also affects the schedule. Jamie can review those steps with you before you commit to a closing date.',
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

export default function EnglewoodMortgagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative py-28 md:py-40 px-6 text-white text-center" style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}>
        <p className="text-sm uppercase tracking-widest font-semibold mb-4 text-white/70">Englewood, Colorado</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Englewood Mortgage Broker
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80 leading-relaxed">
          Buying in Englewood, Sheridan, Cherry Hills Village, Greenwood Village or Centennial? Compare FHA, conventional, VA and jumbo mortgages with Jamie Becker.
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
          <span>✦ South Denver Metro Lender</span>
          <span>✦ FHA, Conventional, Jumbo</span>
          <span>✦ Purchase Pre-Approval</span>
          <span>✦ 21+ Years Experience</span>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Buying a Condo or House in Englewood
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            {marketPrice} Two homes at the same price can have different monthly costs. For a condo, check the association dues and what they cover. For a detached house, get an insurance quote for the property and leave room in your budget for upkeep. You can also <Link href="/littleton-mortgage" className="font-semibold underline underline-offset-4">compare buying a home in Littleton</Link> if you’re looking farther south.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Englewood Mortgage Programs
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
            Why Englewood Buyers Choose The Becker Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Full Range Coverage', body: 'If you’re considering an Englewood condo, we can check the building’s eligibility. For a home in Cherry Hills Village, we can check whether the amount you need to borrow calls for a jumbo loan.' },
              { title: 'First-Time Buyer Guidance', body: 'Englewood is a popular entry point into the south Denver market. Jamie helps first-time buyers understand FHA, CHFA assistance, and conventional options so they start strong.' },
              { title: 'Multiple Lender Options', body: 'Jamie compares loan terms from multiple wholesale lenders. A condo and a Cherry Hills single-family home may call for different options.' },
              { title: 'Closing Date Planning', body: 'Jamie can review your proposed closing date and explain what the title company and lender still need before signing.' },
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
            Englewood Mortgage FAQ
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="relative py-24 md:py-36 px-6 text-white text-center" style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}>
        <h2 data-reveal="fade" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Ready to Buy in Englewood?
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
