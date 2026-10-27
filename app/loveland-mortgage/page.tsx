import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Loveland CO Mortgage Lender | Home Loans Loveland Colorado | The Becker Team',
  description:
    'Loveland CO mortgage lender Jamie Becker (NMLS #794730). Conventional, FHA, VA, and USDA loans for Loveland, Berthoud, Johnstown, Milliken, and Windsor. Northern Colorado home loan experts.',
  alternates: { canonical: 'https://www.thebeckerteam.com/loveland-mortgage' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'The Becker Team — Loveland Colorado Mortgage Lender',
  description: 'Local mortgage lender serving Loveland, Berthoud, Johnstown, Milliken, and Windsor in northern Colorado.',
  url: 'https://www.thebeckerteam.com/loveland-mortgage',
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
    { '@type': 'City', name: 'Loveland' },
    { '@type': 'City', name: 'Berthoud' },
    { '@type': 'City', name: 'Johnstown' },
    { '@type': 'City', name: 'Milliken' },
    { '@type': 'City', name: 'Windsor' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '250', bestRating: '5' },
  founder: { '@type': 'Person', name: 'Jamie Becker', identifier: 'NMLS #794730' },
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
  { label: 'Conventional Loans', desc: 'The most common choice for Loveland buyers. Competitive rates and flexible terms whether you are buying in town or in one of the surrounding communities.', href: '/loan-programs/conventional-loans' },
  { label: 'FHA Loans', desc: '3.5% down and flexible credit requirements. Popular with first-time buyers in Loveland and the surrounding area who are stepping into homeownership.', href: '/loan-programs/fha-loans' },
  { label: 'VA Loans', desc: 'Zero down for eligible veterans and active-duty service members. No PMI. Loveland has a strong veteran community and VA loans are a major part of the market.', href: '/loan-programs/va-loans' },
  { label: 'USDA Loans', desc: 'Many properties in rural areas around Johnstown, Milliken, and parts of Berthoud qualify for USDA zero-down financing. Jamie can check property eligibility quickly.', href: '/loan-programs/conventional-loans' },
  { label: 'CHFA Loans', desc: 'Colorado Housing and Finance Authority programs provide down payment assistance for first-time buyers in Loveland and Larimer County.', href: '/chfa-loan-colorado' },
  { label: 'Self-Employed Loans', desc: 'Bank statement programs for Loveland small business owners, artists, and contractors with non-traditional income documentation.', href: '/loan-programs/self-employed-loans' },
]

const faqs = [
  {
    q: 'What is the housing market like in Loveland, CO?',
    a: 'Loveland is one of northern Colorado\'s most livable cities. Known for its arts scene, Loveland is also a gateway to Rocky Mountain National Park and has been drawing retirees, first-time buyers, and remote workers who want more space at a lower price than Fort Collins. The median home price sits around $430,000-$480,000 in 2026, which is meaningfully lower than Fort Collins. Johnstown and Windsor offer even more affordable options, and rural areas outside Milliken and Berthoud can qualify for USDA zero-down loans.',
  },
  {
    q: 'Do you serve Windsor, Johnstown, and Milliken?',
    a: 'Yes. The Becker Team serves all of Larimer and Weld counties including Loveland, Windsor, Johnstown, Milliken, and Berthoud. These communities have grown quickly as buyers move north from the Denver metro seeking more affordable prices and smaller-town feel.',
  },
  {
    q: 'Are there USDA loan options near Loveland?',
    a: 'Yes. Several areas around Milliken, Johnstown, and parts of Berthoud qualify for USDA Rural Development loans with zero down payment. These are income-limited programs, but many Loveland-area buyers who think they earn too much are surprised to find they qualify. Jamie checks property eligibility for free as part of the pre-approval process.',
  },
  {
    q: 'What mortgage programs are good for Loveland retirees?',
    a: 'Retirees often have significant assets but limited W-2 income, which can make qualifying with traditional documentation tricky. Jamie has asset qualifier programs that let you qualify using retirement accounts and investment portfolios rather than pay stubs. These programs are purpose-built for exactly this situation.',
  },
  {
    q: 'What are current mortgage rates in Loveland, CO?',
    a: 'Rates change daily. As a broker, Jamie shops your loan across multiple wholesale lenders to find the most competitive rate for your specific situation, credit profile, and loan type. Contact the team for a current personalized quote.',
  },
  {
    q: 'How long does it take to close on a home in Loveland?',
    a: 'The Becker Team targets 10-day closings on qualifying purchases. Loveland\'s market can be competitive when well-priced homes hit the market, and a fast pre-approval paired with a strong lender puts you in a better position from the start.',
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
          Home loans for Loveland, Berthoud, Johnstown, Milliken, and Windsor. Northern Colorado experts. Conventional, FHA, VA, and USDA programs.
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
          <span>✦ Same-Day Pre-Approvals</span>
          <span>✦ 21+ Years Experience</span>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Northern Colorado's Affordable Alternative
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            Loveland has carved out a strong identity as a place where people actually want to live. The arts scene is real, the mountain access is excellent, and the price point is noticeably lower than Fort Collins just to the north. Median home prices around $430,000-$480,000 in 2026 attract first-time buyers, retirees relocating from higher-cost states, and remote workers who do not need to commute daily. The surrounding communities of Johnstown, Windsor, and Milliken have also grown quickly, with rural areas that can qualify for USDA zero-down financing. Jamie Becker (NMLS #794730) has 21+ years working with Colorado buyers across all loan types, including the rural and small-town markets that bigger lenders often do not understand as well.
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
              { title: 'USDA Eligibility Check', body: 'Many buyers in the Loveland area are surprised to find that rural properties near Milliken, Johnstown, and Berthoud qualify for USDA zero-down loans. Jamie checks property eligibility as part of every pre-approval consultation.' },
              { title: 'Retiree Programs', body: 'Loveland draws a lot of retirees who have significant assets but limited current income. Asset qualifier programs let you qualify using investment and retirement accounts. This is not a niche product, it is exactly what these programs were built for.' },
              { title: 'Multiple Lender Options', body: 'As a broker, Jamie shops your loan across multiple wholesale lenders. Better rates and more program options than any single bank, with one application and one point of contact throughout.' },
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
