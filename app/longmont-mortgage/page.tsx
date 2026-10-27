import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Longmont CO Mortgage Broker | Home Loans Longmont Colorado | The Becker Team',
  description:
    'Longmont CO mortgage broker Jamie Becker (NMLS #794730). CHFA, FHA, conventional, and VA loans for Longmont, Firestone, Frederick, Mead, and Berthoud. First-time buyer specialists. Fast pre-approvals.',
  alternates: { canonical: 'https://www.thebeckerteam.com/longmont-mortgage' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'The Becker Team — Longmont Colorado Mortgage Broker',
  description: 'Local mortgage lender serving Longmont, Firestone, Frederick, Mead, and Berthoud on the northern Front Range.',
  url: 'https://www.thebeckerteam.com/longmont-mortgage',
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
    { '@type': 'City', name: 'Longmont' },
    { '@type': 'City', name: 'Firestone' },
    { '@type': 'City', name: 'Frederick' },
    { '@type': 'City', name: 'Mead' },
    { '@type': 'City', name: 'Berthoud' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '250', bestRating: '5' },
  founder: { '@type': 'Person', name: 'Jamie Becker', identifier: 'NMLS #794730' },
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
  { label: 'CHFA Loans', desc: 'Colorado Housing and Finance Authority programs pair with FHA and conventional loans to provide down payment assistance for Longmont first-time buyers.', href: '/chfa-loan-colorado' },
  { label: 'FHA Loans', desc: '3.5% down and flexible credit requirements. One of the most popular loan types for first-time buyers in Longmont, Firestone, and Frederick.', href: '/loan-programs/fha-loans' },
  { label: 'Conventional Loans', desc: 'Competitive rates for Longmont buyers with good credit. Works for everything from townhomes to single-family homes in established neighborhoods.', href: '/loan-programs/conventional-loans' },
  { label: 'VA Loans', desc: 'Zero down payment for eligible veterans and service members. No PMI. Available throughout Longmont and the northern Front Range.', href: '/loan-programs/va-loans' },
  { label: 'USDA Loans', desc: 'Some rural areas near Mead and Berthoud qualify for USDA financing with zero down. Jamie can check eligibility for your specific property address.', href: '/loan-programs/conventional-loans' },
  { label: 'Self-Employed Loans', desc: 'Bank statement programs for Longmont tech freelancers, healthcare professionals, and business owners with non-traditional income.', href: '/loan-programs/self-employed-loans' },
]

const faqs = [
  {
    q: 'Why are buyers choosing Longmont over Boulder?',
    a: 'Boulder\'s median home price has pushed well above $800,000 for single-family homes, putting it out of reach for most first-time and middle-income buyers. Longmont sits about 15 miles north on US 287 with a median closer to $480,000-$530,000 in 2026. Many Boulder-area tech and healthcare workers commute from Longmont because the cost difference is significant. The city has also grown its own employer base with companies like Digital Globe and Seagate having major operations nearby.',
  },
  {
    q: 'What mortgage programs are best for Longmont first-time buyers?',
    a: 'FHA loans are popular in Longmont because of the lower down payment (3.5%) and more forgiving credit requirements. CHFA programs can layer on top of FHA to provide additional down payment assistance and potentially reduce closing costs. For buyers who have better credit and 5% or more saved, conventional loans can offer lower long-term costs by avoiding FHA mortgage insurance premiums long-term.',
  },
  {
    q: 'Do you serve Firestone, Frederick, and Mead?',
    a: 'Yes. The Becker Team serves all of the northern Front Range including Longmont, Firestone, Frederick, Mead, and Berthoud. These communities south and west of Longmont have seen strong growth from buyers priced out of Boulder and Denver suburbs.',
  },
  {
    q: 'Are there USDA loan options near Longmont?',
    a: 'Some properties in the rural areas surrounding Longmont, particularly near Mead and parts of Berthoud, may qualify for USDA Rural Development loans with zero down payment. Eligibility is property-specific. Jamie can check USDA eligibility for your target address as part of your pre-approval process.',
  },
  {
    q: 'What are current mortgage rates in Longmont, CO?',
    a: 'Mortgage rates change daily based on market conditions. As a broker, Jamie shops your file across multiple wholesale lenders to find the most competitive rate for your credit profile and loan type. Reach out for a current personalized rate quote.',
  },
  {
    q: 'How long does it take to close a home loan in Longmont?',
    a: 'The Becker Team targets 10-day closings on qualifying purchases. In Longmont\'s competitive market, especially for well-priced homes near good schools and the downtown core, a fast pre-approval and quick close can make your offer stand out.',
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
          Home loans for Longmont, Firestone, Frederick, Mead, and Berthoud. Boulder-area affordability. First-time buyer specialists. CHFA, FHA, VA, and conventional.
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
          <span>✦ CHFA and FHA Specialists</span>
          <span>✦ Same-Day Pre-Approvals</span>
          <span>✦ 21+ Years Experience</span>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            The Smart Alternative to Boulder
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            Longmont has become one of the fastest-growing cities on the northern Front Range for a simple reason: it is significantly more affordable than Boulder while still offering quick access to Boulder jobs and culture. Buyers priced out of Boulder find that Longmont gives them a real house, a real yard, and often better schools, for a fraction of the price. The median home price sits around $480,000-$530,000 in 2026, and the city has been building out its own tech and healthcare employer base. Jamie Becker (NMLS #794730) has 21+ years of experience helping first-time buyers and move-up buyers find the right loan in markets like this, with deep knowledge of CHFA programs that can help reduce the upfront cost of getting into a home.
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
              { title: 'CHFA Expertise', body: 'Colorado Housing and Finance Authority programs can significantly reduce what first-time buyers need upfront. Jamie is a CHFA-approved lender who can identify which programs you qualify for and layer them with FHA or conventional loans.' },
              { title: 'First-Time Buyer Focus', body: 'Longmont attracts a lot of first-time buyers from Boulder and the Denver metro. Jamie walks you through the process clearly, no jargon, no pressure. Just straight answers about what you qualify for and what it will cost.' },
              { title: 'Multiple Lender Options', body: 'As a broker, Jamie shops your loan across wholesale lenders. That means better rates and more flexibility. Especially valuable when you are trying to stretch a down payment in a market like Longmont.' },
              { title: 'Fast Pre-Approvals', body: 'Same-day pre-approval letters and 10-day close targets. Longmont\'s most affordable homes move quickly. Having your pre-approval ready before you start looking puts you in a strong position.' },
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
