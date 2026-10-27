import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Centennial CO Mortgage Lender | Home Loans Centennial Colorado | The Becker Team',
  description:
    'Centennial CO mortgage lender Jamie Becker (NMLS #794730). Conventional, jumbo, and VA loans for Centennial, Greenwood Village, Parker, Lone Tree, and Highlands Ranch. South Denver tech corridor specialists.',
  alternates: { canonical: 'https://www.thebeckerteam.com/centennial-mortgage' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'The Becker Team — Centennial Colorado Mortgage Lender',
  description: 'Local mortgage lender serving Centennial, Greenwood Village, Parker, Lone Tree, and Highlands Ranch in Arapahoe County.',
  url: 'https://www.thebeckerteam.com/centennial-mortgage',
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
    { '@type': 'City', name: 'Centennial' },
    { '@type': 'City', name: 'Greenwood Village' },
    { '@type': 'City', name: 'Parker' },
    { '@type': 'City', name: 'Lone Tree' },
    { '@type': 'City', name: 'Highlands Ranch' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '250', bestRating: '5' },
  founder: { '@type': 'Person', name: 'Jamie Becker', identifier: 'NMLS #794730' },
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
  { label: 'Conventional Loans', desc: 'The standard choice for most Centennial, Parker, and Highlands Ranch buyers. Competitive rates and flexible terms for purchase and refinance.', href: '/loan-programs/conventional-loans' },
  { label: 'Jumbo Loans', desc: 'Greenwood Village and Lone Tree homes regularly exceed conforming limits. Competitive jumbo programs with flexible underwriting for the south tech corridor.', href: '/loan-programs/jumbo-loans' },
  { label: 'VA Loans', desc: 'Zero down for eligible veterans and active-duty service members throughout the south Denver metro. No PMI. Buckley SFB veterans welcome.', href: '/loan-programs/va-loans' },
  { label: 'Self-Employed Loans', desc: 'Bank statement programs for Centennial and Greenwood Village professionals, business owners, and executives with non-W-2 income.', href: '/loan-programs/self-employed-loans' },
  { label: 'Asset Qualifier Loans', desc: 'Qualify using investment accounts and liquid assets instead of pay stubs. A strong fit for high-net-worth buyers in Greenwood Village and Parker.', href: '/loan-programs/asset-qualifier-loans' },
  { label: 'FHA Loans', desc: '3.5% down and flexible credit. Less common in Centennial\'s higher price ranges but a solid option for entry-level purchases in Parker and outer communities.', href: '/loan-programs/fha-loans' },
]

const faqs = [
  {
    q: 'What is the housing market like in Centennial, CO?',
    a: 'Centennial is Arapahoe County\'s largest city and one of the south metro\'s most sought-after addresses. Great school districts, easy I-25 access, and a mature community feel draw families who are willing to pay for quality. Median home prices run $550,000-$650,000 in 2026, with Greenwood Village and Lone Tree pushing higher. This is a move-up buyer market more than a first-time buyer market, and the income and credit profiles here are typically strong.',
  },
  {
    q: 'Do you serve Parker, Lone Tree, and Highlands Ranch?',
    a: 'Yes. The Becker Team serves all of the south Denver metro including Centennial, Greenwood Village, Parker, Lone Tree, and Highlands Ranch. These communities sit along the I-25 south tech corridor and share similar buyer profiles: established families, tech professionals, and executives who want the best schools and community infrastructure the metro offers.',
  },
  {
    q: 'Are jumbo loans common in the Centennial area?',
    a: 'Yes, particularly in Greenwood Village, parts of Lone Tree, and higher-end Centennial neighborhoods. The 2026 conforming loan limit in Colorado is $806,500 for most counties. Homes above that price in Arapahoe County require jumbo financing. Jamie has access to competitive jumbo programs through multiple wholesale lenders, typically with better pricing than what a single bank can offer.',
  },
  {
    q: 'What about the I-25 south tech corridor?',
    a: 'The stretch of I-25 from Centennial through Lone Tree and Castle Rock has become a secondary tech and financial services hub for the Denver metro. Companies in finance, healthcare, and technology have significant offices along this corridor, which draws high-income buyers who want to minimize commute time. That concentration of corporate employers means more buyers with complex income: RSUs, bonuses, deferred compensation. Jamie has programs designed for exactly those situations.',
  },
  {
    q: 'What are current mortgage rates in Centennial, CO?',
    a: 'Rates change daily and depend on your credit profile, loan amount, and loan type. As a broker, Jamie shops your loan across multiple wholesale lenders to find the most competitive rate. At Centennial price points, small rate differences can mean significant monthly savings. Contact the team for a current quote.',
  },
  {
    q: 'How fast can I close in the Centennial area?',
    a: 'The Becker Team targets 10-day closings on qualifying purchases. Centennial and Parker have competitive markets, especially in the $500k-$700k range where family buyers are most active. A strong pre-approval and fast close capability makes your offer more competitive.',
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
          <span>✦ Same-Day Pre-Approvals</span>
          <span>✦ 21+ Years Experience</span>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            South Denver's Premier Family Market
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            Centennial consistently ranks among the best cities in Colorado for families, and the data backs that up. Cherry Creek School District, low crime, and well-maintained community infrastructure draw buyers who are making a long-term investment, not just a transaction. Median home prices run $550,000-$650,000 in 2026, with Greenwood Village pushing well above that. The I-25 south tech and financial services corridor has added a significant population of high-income professionals whose income is often anything but simple: RSUs, bonuses, deferred comp, and equity participation. Jamie Becker (NMLS #794730) has 21+ years navigating exactly these situations, with access to programs that make sense for the buyer profile this area attracts.
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
              { title: 'Complex Income Expertise', body: 'The south tech corridor buyer often has RSUs, quarterly bonuses, or deferred compensation. Standard bank underwriting can flag these as complicated. Jamie has the programs and the experience to document and qualify non-standard income correctly.' },
              { title: 'Jumbo Loan Access', body: 'Greenwood Village and Lone Tree push beyond conforming limits regularly. Jamie shops your jumbo loan across wholesale lenders for better pricing and fewer restrictions than single-bank jumbo products.' },
              { title: 'Multiple Lender Options', body: 'One application, multiple lender quotes. As a broker, Jamie finds the best fit for your credit profile and property type. At Centennial price points, small rate differences are worth real money.' },
              { title: 'Fast Closings', body: 'Same-day pre-approvals and 10-day close targets. Centennial and Parker\'s family market can be competitive when desirable homes near top schools hit the market. Be ready before you find the one.' },
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
