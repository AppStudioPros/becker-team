import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Englewood CO Mortgage Lender | Home Loans Englewood Colorado | The Becker Team',
  description:
    'Englewood CO mortgage lender Jamie Becker (NMLS #794730). FHA, conventional, VA, and jumbo loans for Englewood, Sheridan, Cherry Hills Village, Greenwood Village, and Centennial. Fast pre-approvals.',
  alternates: { canonical: 'https://www.thebeckerteam.com/englewood-mortgage' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'The Becker Team — Englewood Colorado Mortgage Lender',
  description: 'Local mortgage lender serving Englewood, Sheridan, Cherry Hills Village, Greenwood Village, and Centennial.',
  url: 'https://www.thebeckerteam.com/englewood-mortgage',
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
    { '@type': 'City', name: 'Englewood' },
    { '@type': 'City', name: 'Sheridan' },
    { '@type': 'City', name: 'Cherry Hills Village' },
    { '@type': 'City', name: 'Greenwood Village' },
    { '@type': 'City', name: 'Centennial' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '250', bestRating: '5' },
  founder: { '@type': 'Person', name: 'Jamie Becker', identifier: 'NMLS #794730' },
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
  { label: 'FHA Loans', desc: '3.5% down and flexible credit requirements make FHA a great entry point for Englewood and Sheridan first-time buyers. Strong demand in this market.', href: '/loan-programs/fha-loans' },
  { label: 'Conventional Loans', desc: 'The most common loan type in Englewood. Works well across the full range from starter condos to luxury single-family homes in Cherry Hills Village.', href: '/loan-programs/conventional-loans' },
  { label: 'VA Loans', desc: 'Zero down for eligible veterans and active-duty service members. No PMI. Available throughout Englewood and the south Denver metro.', href: '/loan-programs/va-loans' },
  { label: 'Jumbo Loans', desc: 'Cherry Hills Village and Greenwood Village luxury homes regularly exceed conforming limits. Competitive jumbo programs with flexible underwriting.', href: '/loan-programs/jumbo-loans' },
  { label: 'Self-Employed Loans', desc: 'Bank statement programs for Englewood business owners, freelancers, and contractors who prefer alternatives to W-2 income documentation.', href: '/loan-programs/self-employed-loans' },
  { label: 'Asset Qualifier Loans', desc: 'Qualify using liquid assets and investment accounts — a strong fit for Cherry Hills and Greenwood Village buyers with substantial net worth.', href: '/loan-programs/asset-qualifier-loans' },
]

const faqs = [
  {
    q: 'What is the housing market like in Englewood, CO?',
    a: 'Englewood sits just south of Denver with light rail access and a diverse range of housing. You can find starter condos in the $300s, townhomes in the $400s, and larger single-family homes approaching $600k. The community has been revitalizing with new development along South Broadway. It draws a mix of first-time buyers, young professionals, and move-up buyers who want south metro proximity without Cherry Hills prices.',
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
    a: 'Englewood has strong RTD light rail access via the C and D lines, connecting residents to downtown Denver and the Tech Center. Neighborhoods near the light rail tend to have stronger resale values and attract buyers who commute or do not want to depend on I-25 traffic daily.',
  },
  {
    q: 'What are current mortgage rates in Englewood, CO?',
    a: 'Rates move daily and depend on your credit profile, loan type, and down payment. As a broker, Jamie shops across multiple wholesale lenders to find the most competitive rate for your situation. Contact the team for a current personalized rate quote.',
  },
  {
    q: 'How fast can I close on a home in Englewood?',
    a: 'The Becker Team targets 10-day closings on qualifying purchases. In Englewood\'s active market, a fast close and strong pre-approval can set your offer apart from other buyers, especially in the more competitive price ranges near light rail and schools.',
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
          Englewood Mortgage Lender
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80 leading-relaxed">
          Home loans for Englewood, Sheridan, Cherry Hills Village, Greenwood Village, and Centennial. FHA, conventional, VA, and jumbo. Personal service from an experienced local lender.
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
          <span>✦ Same-Day Pre-Approvals</span>
          <span>✦ 21+ Years Experience</span>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            South Denver's Most Diverse Housing Market
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            Englewood is one of the south metro's most flexible markets for buyers. The housing stock runs from entry-level condos to established single-family neighborhoods to luxury estates in neighboring Cherry Hills Village, all within a few miles of each other. Light rail access makes Englewood a practical choice for commuters who want to avoid I-25, and ongoing development along South Broadway has brought new restaurants, retail, and attention from buyers who want an urban feel without downtown Denver prices. Median home prices sit around $450,000-$500,000 in 2026, making this an attainable market for a wide range of buyers. Jamie Becker (NMLS #794730) has 21+ years of experience helping buyers across all price points in the south metro find the right loan.
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
              { title: 'Full Range Coverage', body: 'Whether you are buying a starter condo in Englewood or a luxury estate in Cherry Hills Village, Jamie has the right loan program. Not every lender covers both ends of the market well.' },
              { title: 'First-Time Buyer Guidance', body: 'Englewood is a popular entry point into the south Denver market. Jamie helps first-time buyers understand FHA, CHFA assistance, and conventional options so they start strong.' },
              { title: 'Multiple Lender Options', body: 'As a broker, Jamie shops your file across wholesale lenders. That means better rates and more flexibility than a single bank — important when you are comparing a $320k condo and a $1.2M Cherry Hills home.' },
              { title: 'Fast Closings', body: 'Same-day pre-approvals and 10-day close targets. Englewood moves fast when a well-priced home hits the market. Having a strong lender behind you matters.' },
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
