import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Broomfield CO Mortgage Broker | Home Loans Broomfield Colorado | The Becker Team',
  description:
    'Broomfield CO mortgage broker Jamie Becker (NMLS #794730). Conventional, FHA, VA, and jumbo loans for Broomfield, Westminster, Superior, and Louisville. Tech corridor specialists. Fast pre-approvals.',
  alternates: { canonical: 'https://www.thebeckerteam.com/broomfield-mortgage' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'The Becker Team — Broomfield Colorado Mortgage Broker',
  description: 'Local mortgage lender serving Broomfield, Westminster, Thornton, Superior, and Louisville in the Denver-Boulder tech corridor.',
  url: 'https://www.thebeckerteam.com/broomfield-mortgage',
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
    { '@type': 'City', name: 'Broomfield' },
    { '@type': 'City', name: 'Westminster' },
    { '@type': 'City', name: 'Thornton' },
    { '@type': 'City', name: 'Superior' },
    { '@type': 'City', name: 'Louisville' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '250', bestRating: '5' },
  founder: { '@type': 'Person', name: 'Jamie Becker', identifier: 'NMLS #794730' },
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
  { label: 'Conventional Loans', desc: 'The go-to choice for most Broomfield and Superior buyers. Competitive rates, flexible terms, and no upfront mortgage insurance with 20% down.', href: '/loan-programs/conventional-loans' },
  { label: 'Jumbo Loans', desc: 'Broomfield home prices regularly exceed conforming limits. Jumbo loans with competitive rates and flexible underwriting for higher-value purchases.', href: '/loan-programs/jumbo-loans' },
  { label: 'FHA Loans', desc: '3.5% down and flexible credit requirements for Thornton and Broomfield first-time buyers stepping into the market.', href: '/loan-programs/fha-loans' },
  { label: 'VA Loans', desc: 'Zero down for eligible veterans and active-duty service members. No PMI ever. Available throughout Broomfield and the north metro.', href: '/loan-programs/va-loans' },
  { label: 'Self-Employed Loans', desc: 'Bank statement programs for contractors, consultants, and tech professionals whose income does not fit the standard W-2 mold.', href: '/loan-programs/self-employed-loans' },
  { label: 'Asset Qualifier Loans', desc: 'Qualify using investment accounts and liquid assets instead of income documentation. A strong fit for Broomfield executives and retirees.', href: '/loan-programs/asset-qualifier-loans' },
]

const faqs = [
  {
    q: 'What is the housing market like in Broomfield, CO?',
    a: 'Broomfield is one of the few cities in the country that is also its own county. It sits directly on US 36 between Denver and Boulder, which has made it a hub for corporate campuses — Oracle, DISH Network, and Ball Aerospace all have major operations here. Home prices reflect that demand: the median sits around $550,000-$600,000 in 2026, with higher-end homes and new builds pushing into jumbo territory. It is a competitive market with strong long-term fundamentals.',
  },
  {
    q: 'What mortgage programs are most popular in Broomfield?',
    a: 'Conventional loans dominate in Broomfield because most buyers have strong credit and at least 10-20% down from equity in a previous home. Jumbo loans come up frequently given the price point. For tech workers with equity compensation, contractor income, or RSUs, Jamie has specialty programs that handle non-standard income structures that standard bank underwriting struggles with.',
  },
  {
    q: 'Do you serve Superior and Louisville?',
    a: 'Yes. The Becker Team serves all communities along the US 36 corridor including Broomfield, Westminster, Thornton, Superior, and Louisville. Superior has seen significant rebuilding and growth since 2021 and has become a strong market for buyers who want Boulder proximity at a more accessible price point.',
  },
  {
    q: 'How does being a mortgage broker help Broomfield buyers?',
    a: 'As a broker, Jamie shops your loan across multiple wholesale lenders instead of offering you one bank\'s products. That typically means better rates and more loan options, especially important in Broomfield where jumbo loans and non-standard income situations are common. One application, multiple lender quotes.',
  },
  {
    q: 'What are current mortgage rates in Broomfield, CO?',
    a: 'Rates change daily and depend on your credit score, loan amount, down payment, and loan type. Jamie will pull real-time quotes from multiple lenders to find the most competitive rate for your specific scenario. Contact the team for a personalized rate quote.',
  },
  {
    q: 'How fast can I close a home loan in Broomfield?',
    a: 'The Becker Team targets 10-day closings on qualifying purchases. In competitive Broomfield neighborhoods near US 36 and the tech campuses, a fast close and clean pre-approval make a meaningful difference when multiple offers are common.',
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
          Home loans for Broomfield, Westminster, Superior, Louisville, and the US 36 tech corridor. Competitive rates, personal service, fast closings.
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
          <span>✦ Same-Day Pre-Approvals</span>
          <span>✦ 21+ Years Experience</span>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Broomfield: Where Denver Meets Boulder
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            Broomfield is unique in Colorado. It is both a city and its own county, sitting squarely on the US 36 corridor between Denver and Boulder. That positioning has made it a magnet for corporate campuses: Oracle, DISH Network, and Ball Aerospace all have major operations here, and dozens of smaller tech and biotech firms have followed. The result is a high-income buyer pool with complex income situations, strong demand for move-up homes, and a median price around $550,000-$600,000 in 2026. Jamie Becker (NMLS #794730) has 21+ years of experience navigating exactly this kind of market, with programs designed for tech professionals, executives, contractors, and first-time buyers alike.
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
              { title: 'Tech Income Expertise', body: 'RSUs, bonuses, contractor pay, and equity compensation are common in Broomfield. Jamie has programs built for these income structures that most bank loan officers cannot handle.' },
              { title: 'Multiple Lender Access', body: 'As a broker, Jamie shops your loan across wholesale lenders. That means better pricing and more product options than any single bank can offer, especially important on jumbo and non-QM loans.' },
              { title: 'Jumbo Loan Specialists', body: 'Many Broomfield homes exceed conforming limits. Jamie has access to competitive jumbo programs for buyers purchasing in the $700k+ range without the rigid requirements of a single-bank jumbo product.' },
              { title: 'Fast Pre-Approvals', body: 'Same-day pre-approval letters and 10-day closing targets. Broomfield is a competitive market, and sellers take notice when your offer comes with a strong, fast lender behind it.' },
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
