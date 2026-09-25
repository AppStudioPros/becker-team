import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Westminster CO Mortgage Broker | Home Loans Westminster Colorado | The Becker Team',
  description:
    'Westminster CO mortgage broker Jamie Becker (NMLS #794730). Conventional, FHA, VA, jumbo, and specialty loans for Westminster buyers. Serving Westminster, Broomfield, Thornton, and the Denver-Boulder corridor. Fast pre-approvals.',
  alternates: { canonical: 'https://www.thebeckerteam.com/westminster-mortgage' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'The Becker Team — Westminster Colorado Mortgage Broker',
  description: 'Local mortgage lender serving Westminster, Broomfield, Thornton, and the Denver-Boulder corridor.',
  url: 'https://www.thebeckerteam.com/westminster-mortgage',
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
    { '@type': 'City', name: 'Westminster' },
    { '@type': 'City', name: 'Broomfield' },
    { '@type': 'City', name: 'Thornton' },
    { '@type': 'City', name: 'Northglenn' },
    { '@type': 'City', name: 'Federal Heights' },
    { '@type': 'City', name: 'Commerce City' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '250', bestRating: '5' },
  founder: { '@type': 'Person', name: 'Jamie Becker', identifier: 'NMLS #794730' },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thebeckerteam.com' },
    { '@type': 'ListItem', position: 2, name: 'Westminster Mortgage', item: 'https://www.thebeckerteam.com/westminster-mortgage' },
  ],
}

const programs = [
  { label: 'Conventional Loans', desc: "Competitive rates and flexible terms for Westminster and Broomfield buyers. The standard choice for most move-up buyers in the Denver-Boulder corridor.", href: '/loan-programs/conventional-loans' },
  { label: 'FHA Loans', desc: "3.5% down and flexible credit — a great fit for Thornton and Westminster first-time buyers entering the market.", href: '/loan-programs/fha-loans' },
  { label: 'VA Loans', desc: "Zero down for eligible veterans and active-duty service members throughout the north Denver metro.", href: '/loan-programs/va-loans' },
  { label: 'Jumbo Loans', desc: "Broomfield and high-end Westminster properties sometimes exceed conforming limits. Jumbo loans with competitive rates and flexible underwriting.", href: '/loan-programs/jumbo-loans' },
  { label: 'Self-Employed Loans', desc: "Bank statement programs for Westminster tech workers, contractors, and business owners who prefer alternatives to traditional income documentation.", href: '/loan-programs/self-employed-loans' },
  { label: 'Asset Qualifier Loans', desc: "Qualify using liquid assets and investment accounts — ideal for buyers with substantial net worth and non-traditional income.", href: '/loan-programs/asset-qualifier-loans' },
]

const faqs = [
  { q: 'Is Westminster CO a good place to buy a home?', a: "Westminster sits in one of the most strategically positioned corridors in Colorado — halfway between Denver and Boulder, with access to both employment centers and a lower price point than either city. The US 36 tech corridor runs directly through Westminster and Broomfield, which has driven strong demand from tech and biotech professionals who want more space without sacrificing commute access. It's a solid long-term market." },
  { q: 'What are current mortgage rates in Westminster, CO?', a: 'Westminster mortgage rates track the national market daily and vary based on your credit profile, loan type, and down payment. As a broker, Jamie shops your loan across multiple lenders and can typically match or beat single-bank pricing. Contact the team for a current personalized rate quote.' },
  { q: 'Do you offer VA loans in Westminster and Thornton?', a: 'Yes. VA loans are available for eligible veterans, active-duty service members, and surviving spouses throughout the north Denver metro including Westminster, Thornton, and Northglenn. Zero down payment, no PMI required.' },
  { q: 'Can tech workers in Broomfield qualify for special mortgage programs?', a: "Many Broomfield and Westminster tech workers are W-2 employees who qualify easily for conventional loans. But if you're a contractor, work on equity compensation, or have variable bonus income, those income structures can create complications. Jamie has programs for non-standard income situations and can often find solutions that standard bank underwriting won't accommodate." },
  { q: 'How long does it take to close a mortgage in Westminster, CO?', a: "The Becker Team targets 10-day closings on straightforward purchases. In Westminster's competitive market near top schools and the US 36 corridor, a fast close and a strong pre-approval can make your offer significantly more attractive to sellers." },
  { q: 'Do you serve Broomfield, Thornton, and Northglenn?', a: 'Yes. The Becker Team serves all of the north Denver metro — Westminster, Broomfield, Thornton, Northglenn, Federal Heights, Commerce City, and surrounding communities.' },
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

export default function WestminsterMortgagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative py-28 md:py-40 px-6 text-white text-center" style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}>
        <p className="text-sm uppercase tracking-widest font-semibold mb-4 text-white/70">Westminster, Colorado</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Westminster Mortgage Broker
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80 leading-relaxed">
          Home loans for Westminster, Broomfield, Thornton, and the Denver-Boulder corridor — competitive rates, personal service, fast closings.
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
          <span>✦ Denver-Boulder Corridor Lender</span>
          <span>✦ Westminster Home Loans</span>
          <span>✦ Same-Day Pre-Approvals</span>
          <span>✦ 21+ Years Experience</span>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            The Denver-Boulder Corridor's Mortgage Expert
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            Westminster and Broomfield attract buyers who want the best of both worlds — Denver employment access and Boulder proximity, without paying Boulder prices. The US 36 tech corridor has made this one of the fastest-growing employment areas in Colorado, which means more buyers with tech compensation structures, equity, and non-standard income. Jamie Becker (NMLS #794730) has 21+ years of experience helping buyers across the Denver metro, with specialty programs designed for exactly those situations. As a broker, Jamie shops your loan across multiple lenders to find the right rate and terms — not just the one product a single bank can offer.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Westminster Mortgage Programs
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
            Why Westminster Buyers Choose The Becker Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Tech Corridor Expertise', body: "Westminster and Broomfield attract buyers with RSUs, bonuses, and contract income. Standard banks often struggle with non-W-2 income structures — Jamie has the programs to handle them." },
              { title: 'Multiple Lender Access', body: "As a broker, Jamie shops your loan across wholesale lenders. That typically means better rates and more product options than going to a single bank, especially at higher loan amounts." },
              { title: 'First-Time Buyer Programs', body: "Thornton and parts of Westminster offer entry-level pricing that's accessible with FHA loans and CHFA assistance programs. Jamie can identify which programs you qualify for quickly." },
              { title: 'Fast Pre-Approvals and Closings', body: "Same-day pre-approval letters and 10-day closings on qualifying purchases. In Westminster's competitive neighborhoods near US 36, speed matters as much as rate." },
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
            Westminster Mortgage FAQ
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="relative py-24 md:py-36 px-6 text-white text-center" style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}>
        <h2 data-reveal="fade" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Ready to Buy in Westminster?
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Get pre-approved today and move with confidence in the Denver-Boulder corridor.
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
