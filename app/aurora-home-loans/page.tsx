import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Aurora CO Mortgage Broker | Home Loans Aurora Colorado | The Becker Team',
  description:
    'Aurora CO mortgage broker Jamie Becker (NMLS #794730) offers VA, FHA, conventional, jumbo, and specialty loans. Serving Aurora, Centennial, Parker, and the Denver metro. Fast pre-approvals, competitive rates, personal service.',
  alternates: { canonical: 'https://www.thebeckerteam.com/aurora-home-loans' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'The Becker Team — Aurora Colorado Mortgage Broker',
  description: 'Local mortgage lender serving Aurora, Centennial, Parker, and the Denver metro east corridor.',
  url: 'https://www.thebeckerteam.com/aurora-home-loans',
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
    { '@type': 'City', name: 'Aurora' },
    { '@type': 'City', name: 'Centennial' },
    { '@type': 'City', name: 'Parker' },
    { '@type': 'City', name: 'Englewood' },
    { '@type': 'City', name: 'Foxfield' },
    { '@type': 'City', name: 'Lone Tree' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '250', bestRating: '5' },
  founder: { '@type': 'Person', name: 'Jamie Becker', identifier: 'NMLS #794730' },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thebeckerteam.com' },
    { '@type': 'ListItem', position: 2, name: 'Aurora Home Loans', item: 'https://www.thebeckerteam.com/aurora-home-loans' },
  ],
}

const programs = [
  { label: 'VA Loans', desc: "Zero down for eligible veterans, active-duty members, and surviving spouses — Aurora has a large military community near Buckley Space Force Base, and VA loans are one of Jamie's specialties.", href: '/loan-programs/va-loans' },
  { label: 'FHA Loans', desc: "Popular with Aurora first-time buyers. 3.5% down, flexible credit standards, and access to Colorado's large FHA loan limits.", href: '/loan-programs/fha-loans' },
  { label: 'Conventional Loans', desc: "Standard conforming loans with competitive rates — the most common choice for Aurora move-up buyers and families.", href: '/loan-programs/conventional-loans' },
  { label: 'Jumbo Loans', desc: 'Financing above conforming limits for higher-value Centennial, Parker, and Aurora properties.', href: '/loan-programs/jumbo-loans' },
  { label: 'Self-Employed Loans', desc: 'Bank statement programs for Aurora small business owners and self-employed professionals. No tax returns required.', href: '/loan-programs/self-employed-loans' },
  { label: 'Asset Qualifier Loans', desc: 'Qualify using liquid assets and investment accounts instead of traditional income documentation.', href: '/loan-programs/asset-qualifier-loans' },
]

const faqs = [
  { q: 'Is Aurora CO a good place to buy a home?', a: "Aurora is one of Colorado's fastest-growing cities and consistently offers more affordable entry points than central Denver while still being close to major employment centers, DIA, and the Denver metro. The city has strong long-term fundamentals — diverse neighborhoods, improving infrastructure, and steady demand from military families, healthcare workers, and young professionals." },
  { q: 'Are VA loans available in Aurora, CO?', a: "Yes. Aurora is home to a large military community, particularly near Buckley Space Force Base. VA loans are one of Jamie's areas of deep expertise — zero down payment, no PMI, and competitive rates for eligible veterans, active-duty members, and surviving spouses. Same-day pre-approvals are available." },
  { q: 'What is the median home price in Aurora, CO?', a: "Aurora's median home prices are generally lower than central Denver, making it one of the more accessible entry points into the Denver metro. Exact pricing changes with the market — contact Jamie for current data and a pre-approval range based on your budget." },
  { q: 'Do you offer FHA loans in Aurora?', a: 'Yes. FHA loans are a strong option for Aurora first-time buyers with limited down payment funds or credit scores in the 580+ range. Colorado FHA loan limits accommodate a wide range of Aurora home prices.' },
  { q: 'How fast can I close on an Aurora home?', a: 'The Becker Team targets 10-day closings on qualifying purchases. In Aurora, where competition can be strong near light rail corridors and established neighborhoods, a fast close and a solid pre-approval give you a real edge.' },
  { q: 'Do you serve Centennial and Parker?', a: 'Yes. The Becker Team serves all of the Denver metro south and east — Aurora, Centennial, Parker, Lone Tree, Englewood, Foxfield, and surrounding communities.' },
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

export default function AuroraHomeLoansPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative py-28 md:py-40 px-6 text-white text-center" style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}>
        <p className="text-sm uppercase tracking-widest font-semibold mb-4 text-white/70">Aurora, Colorado</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Aurora Mortgage Broker
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80 leading-relaxed">
          VA loans, FHA, conventional, and specialty programs for Aurora buyers — with fast pre-approvals and personal service from a lender who knows the market.
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
          <span>✦ VA Loan Specialist</span>
          <span>✦ Aurora CO Home Loans</span>
          <span>✦ Same-Day Pre-Approvals</span>
          <span>✦ 21+ Years Experience</span>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Serving Aurora and the Denver Metro East
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            Aurora is one of Colorado's most dynamic cities — large, diverse, and offering some of the best value in the Denver metro. Jamie Becker (NMLS #794730) has worked with Aurora buyers across every price range and loan type for more than 20 years. The military community near Buckley Space Force Base makes Aurora one of the strongest VA loan markets in Colorado, and that's an area where Jamie has deep expertise. Whether you're a veteran using your benefit for the first time, a growing family looking for more space east of Denver, or an investor building a portfolio, the right loan structure makes a real difference.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Aurora Home Loan Programs
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
            Why Aurora Buyers Choose The Becker Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'VA Loan Expertise', body: "Aurora's military community is one of Colorado's largest. Jamie has helped hundreds of veterans use their VA benefit and understands the nuances of the COE process, funding fee exemptions, and VA appraisals." },
              { title: 'Broker Access — Not One Bank', body: "Being a broker means Jamie shops your loan across multiple wholesale lenders. Aurora buyers typically see better rates and more flexibility than going directly to a single bank." },
              { title: 'First-Time Buyer Programs', body: "Aurora offers some of the most accessible entry-level pricing in the Denver metro. FHA loans, CHFA assistance programs, and conventional 3% down options are all available for qualifying buyers." },
              { title: 'Personal Service, Fast Close', body: "No call centers. Jamie knows your name and your file. Most straightforward purchases close in 10 days — an important edge in Aurora's competitive neighborhoods." },
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
            Aurora Mortgage FAQ
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="relative py-24 md:py-36 px-6 text-white text-center" style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}>
        <h2 data-reveal="fade" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Ready to Buy in Aurora?
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Get pre-approved today. Jamie picks up the phone.
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
