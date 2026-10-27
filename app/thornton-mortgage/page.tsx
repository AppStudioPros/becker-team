import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Thornton CO Mortgage Broker | Home Loans Thornton Colorado | The Becker Team',
  description:
    'Thornton CO mortgage broker Jamie Becker (NMLS #794730). FHA, conventional, VA, and CHFA loans for Thornton, Northglenn, Commerce City, Brighton, and Henderson. Fast pre-approvals.',
  alternates: { canonical: 'https://www.thebeckerteam.com/thornton-mortgage' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'The Becker Team — Thornton Colorado Mortgage Broker',
  description: 'Local mortgage lender serving Thornton, Northglenn, Commerce City, Brighton, and Henderson in the north Denver metro.',
  url: 'https://www.thebeckerteam.com/thornton-mortgage',
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
    { '@type': 'City', name: 'Thornton' },
    { '@type': 'City', name: 'Northglenn' },
    { '@type': 'City', name: 'Commerce City' },
    { '@type': 'City', name: 'Brighton' },
    { '@type': 'City', name: 'Henderson' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '250', bestRating: '5' },
  founder: { '@type': 'Person', name: 'Jamie Becker', identifier: 'NMLS #794730' },
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
  { label: 'Conventional Loans', desc: 'For Thornton buyers with solid credit and at least 3-5% down. Lower long-term costs than FHA when you can qualify.', href: '/loan-programs/conventional-loans' },
  { label: 'VA Loans', desc: 'Zero down for eligible veterans and active-duty service members. No PMI. Thornton and Brighton have strong veteran communities.', href: '/loan-programs/va-loans' },
  { label: 'New Construction Loans', desc: 'Brighton and Henderson corridors have active new construction. Jamie works with builders and can lock your rate through the construction timeline.', href: '/loan-programs/conventional-loans' },
  { label: 'Self-Employed Loans', desc: 'Bank statement programs for Thornton small business owners and contractors. Non-traditional income documentation accepted.', href: '/loan-programs/self-employed-loans' },
]

const faqs = [
  {
    q: 'What makes Thornton one of Colorado\'s fastest-growing cities?',
    a: 'Thornton has grown rapidly because it offers Denver metro access at prices well below the city itself. The median sits around $430,000-$470,000 in 2026, and you get established neighborhoods, expanding light rail access, and proximity to the Denver metro job market. Brighton and Henderson to the northeast have also grown quickly, with new construction developments drawing buyers who want more square footage for their dollar.',
  },
  {
    q: 'What mortgage programs are most common in Thornton?',
    a: 'FHA loans are very common in Thornton because the price point is accessible and the 3.5% down requirement matches what many first-time buyers have saved. CHFA programs pair well with FHA here to reduce upfront costs further. Conventional loans are the right move when a buyer has good credit and at least 5% down because you avoid FHA\'s upfront mortgage insurance premium and can drop PMI later.',
  },
  {
    q: 'Is light rail expanding in Thornton?',
    a: 'Yes. The North Metro light rail line has expanded through Thornton, connecting residents to downtown Denver and the rest of the RTD system. Neighborhoods near stations tend to hold value well and attract buyers who commute downtown without wanting to pay downtown prices.',
  },
  {
    q: 'Do you serve Brighton and Northglenn?',
    a: 'Yes. The Becker Team serves the full north Denver metro including Thornton, Northglenn, Commerce City, Brighton, and Henderson. Brighton in particular has seen significant new construction activity and Jamie works frequently with buyers purchasing in new communities along the Brighton corridor.',
  },
  {
    q: 'What are current mortgage rates in Thornton, CO?',
    a: 'Rates change daily. As a broker, Jamie shops your loan across multiple wholesale lenders to find the most competitive rate for your credit profile, down payment, and loan type. Reach out for a current personalized rate quote.',
  },
  {
    q: 'How fast can I close a home loan in Thornton?',
    a: 'The Becker Team targets 10-day closings on qualifying purchases. In Thornton\'s competitive price range, a strong pre-approval letter and a fast close timeline can make the difference when multiple buyers are interested in the same home.',
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
          Home loans for Thornton, Northglenn, Commerce City, Brighton, and Henderson. First-time buyer specialists. FHA, CHFA, VA, and conventional.
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
          <span>✦ Same-Day Pre-Approvals</span>
          <span>✦ 21+ Years Experience</span>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Denver Metro Affordability, Without the Denver Price Tag
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            Thornton is one of the fastest-growing cities in Colorado for a practical reason: it gives buyers access to the Denver metro job market and infrastructure at a price point that is still attainable for first-time buyers and working families. Median home prices around $430,000-$470,000 in 2026 put ownership within reach for buyers who would be priced out of Denver proper. The North Metro light rail expansion has made commuting more practical, and the Brighton corridor to the northeast has exploded with new construction for buyers who want more space. Jamie Becker (NMLS #794730) has 21+ years working with first-time buyers across the north Denver metro, with deep knowledge of FHA, CHFA, and conventional programs that work in this market.
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
              { title: 'New Construction Experience', body: 'The Brighton and Henderson corridors are active new construction markets. Jamie works with builders, can often lock your rate during construction, and helps you avoid the pitfalls of builder financing that is not always in your best interest.' },
              { title: 'Multiple Lender Options', body: 'As a broker, Jamie shops across wholesale lenders. Not just one bank\'s products. Better rates and more flexibility, especially important when every dollar of down payment matters.' },
              { title: 'Fast Closings', body: 'Same-day pre-approvals and 10-day close targets. In Thornton\'s $400k-$500k range, homes move quickly when priced right. Having your financing ready before you find the house matters.' },
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
