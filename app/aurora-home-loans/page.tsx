import { teamReference } from '@/lib/siteIdentity'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Aurora, CO Mortgage Broker and Home Loans',
  description:
    'Compare Aurora home loans with Jamie Becker, including VA options for eligible buyers near Buckley and financing for first-time buyers.',
  alternates: { canonical: 'https://www.thebeckerteam.com/aurora-home-loans' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'The Becker Team — Aurora Colorado Mortgage Broker',
  description: 'Local mortgage broker serving Aurora, Centennial, Parker, and the Denver metro east corridor.',
  url: 'https://www.thebeckerteam.com/aurora-home-loans',
  provider: teamReference,
  areaServed: [
    { '@type': 'City', name: 'Aurora' },
    { '@type': 'City', name: 'Centennial' },
    { '@type': 'City', name: 'Parker' },
    { '@type': 'City', name: 'Englewood' },
    { '@type': 'City', name: 'Foxfield' },
    { '@type': 'City', name: 'Lone Tree' },
  ],
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
  { label: 'VA Loans', desc: "Eligible veterans, service members and surviving spouses near Buckley Space Force Base may qualify with no down payment.", href: '/loan-programs/va-loans' },
  { label: 'FHA Loans', desc: "Popular with Aurora first-time buyers. 3.5% down, flexible credit standards, and access to Colorado's large FHA loan limits.", href: '/loan-programs/fha-loans' },
  { label: 'Conventional Loans', desc: "Compare conventional loans for an Aurora home, including the effect of your down payment on mortgage insurance and the monthly payment.", href: '/loan-programs/conventional-loans' },
  { label: 'Jumbo Loans', desc: 'Financing above conforming limits for higher-value Centennial, Parker, and Aurora properties.', href: '/loan-programs/jumbo-loans' },
  { label: 'Self-Employed Loans', desc: 'Aurora business owners and self-employed buyers can explore loans that use eligible bank deposits to document income.', href: '/loan-programs/self-employed-loans' },
  { label: 'Asset Qualifier Loans', desc: 'Qualify using liquid assets and investment accounts instead of traditional income documentation.', href: '/loan-programs/asset-qualifier-loans' },
]

const faqs = [
  { q: 'How can I compare the cost of two homes in Aurora?', a: 'Start with the property taxes for each address, an insurance quote and any association dues. Then compare the estimated monthly payments using the same loan term and down payment. That will give you a more useful comparison than the listing prices alone.' },
  { q: 'Are VA loans available in Aurora, CO?', a: 'Yes. Eligible veterans, active-duty service members and surviving spouses in Aurora may qualify for a VA-backed loan with no down payment and no monthly mortgage insurance. A funding fee may apply.' },
  // City-level sales: https://www.redfin.com/city/30839/CO/Aurora/housing-market
  { q: 'What is the median home price in Aurora, CO?', a: 'From August through October 2026, the median sale price across all home types in Aurora was $449,687. If you’re comparing neighborhoods, look at recent sales of the same type of home in each one.' },
  { q: 'Do you offer FHA loans in Aurora?', a: 'Yes. FHA may allow a smaller down payment for eligible buyers. Share the address and how much you need to borrow so we can check the FHA limit for that county and compare the cash due at closing.' },
  { q: 'How fast can I close on an Aurora home?', a: 'The timing depends on underwriting, any required appraisal and title work. If the seller has a specific date in mind, Jamie can walk you through what needs to happen before you agree to it.' },
  { q: 'Do you serve Centennial and Parker?', a: 'Yes. We serve Aurora, Centennial, Parker, Lone Tree, Englewood, Foxfield and nearby communities.' },
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
          Compare VA, FHA, conventional and specialty loans with a mortgage broker who works with Aurora buyers.
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
          <span>✦ Purchase Pre-Approval</span>
          <span>✦ 21+ Years Experience</span>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Serving Aurora and the Denver Metro East
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            If you’re buying near Buckley Space Force Base, we can help you compare a VA loan with a conventional mortgage. Bring the listing price and the amount you want to put down. Jamie Becker (NMLS #794730) can show you the estimated cash due at closing and the monthly payment for each option.
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
              { title: 'VA Loan Expertise', body: "If you’re using a VA loan in Aurora, ask Jamie how to get your Certificate of Eligibility, whether you might be exempt from the funding fee and what to expect from the VA appraisal." },
              { title: 'Multiple Lender Options', body: 'Jamie compares loan options from multiple wholesale lenders and explains the rate, fees and cash due at closing.' },
              { title: 'First-Time Buyer Programs', body: "Aurora offers some of the most accessible entry-level pricing in the Denver metro. FHA loans, CHFA assistance programs, and conventional 3% down options are all available for qualifying buyers." },
              { title: 'Direct Access to Jamie', body: 'Jamie reviews your financing with you and explains what the lender still needs before closing.' },
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
          Start your pre-approval or talk through your home purchase with Jamie.
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
