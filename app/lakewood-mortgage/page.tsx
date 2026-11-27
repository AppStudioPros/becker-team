import { teamReference } from '@/lib/siteIdentity'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Lakewood, CO Mortgage Broker and Home Loans',
  description:
    'Buying a home in Lakewood? Compare loan options and see how the county loan limit, condo requirements and your down payment affect financing.',
  alternates: { canonical: 'https://www.thebeckerteam.com/lakewood-mortgage' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'The Becker Team — Lakewood Colorado Mortgage Broker',
  description: 'Local mortgage lender serving Lakewood, Wheat Ridge, Golden, Morrison, and west Denver communities.',
  url: 'https://www.thebeckerteam.com/lakewood-mortgage',
  provider: teamReference,
  areaServed: [
    { '@type': 'City', name: 'Lakewood' },
    { '@type': 'City', name: 'Wheat Ridge' },
    { '@type': 'City', name: 'Golden' },
    { '@type': 'City', name: 'Morrison' },
    { '@type': 'City', name: 'Edgewater' },
    { '@type': 'City', name: 'Arvada' },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thebeckerteam.com' },
    { '@type': 'ListItem', position: 2, name: 'Lakewood Mortgage', item: 'https://www.thebeckerteam.com/lakewood-mortgage' },
  ],
}

const programs = [
  { label: 'Conventional Loans', desc: "Explore conventional financing for a detached home, townhome or condo in Lakewood. We can compare down payment options for the property you choose.", href: '/loan-programs/conventional-loans' },
  { label: 'FHA Loans', desc: 'Flexible credit and 3.5% down — a strong option for first-time Lakewood buyers entering the market.', href: '/loan-programs/fha-loans' },
  { label: 'VA Loans', desc: 'Zero down for eligible veterans and service members. Available throughout the west Denver metro.', href: '/loan-programs/va-loans' },
  { label: 'Jumbo Loans', desc: 'Financing above conforming limits for Golden foothills properties and higher-value Lakewood homes near Green Mountain.', href: '/loan-programs/jumbo-loans' },
  { label: 'Self-Employed Loans', desc: 'Bank statement programs for Lakewood business owners and independent professionals who prefer alternatives to tax returns.', href: '/loan-programs/self-employed-loans' },
  { label: 'Mortgage Accelerator', desc: 'A structured program to pay off your mortgage faster — ideal for Lakewood homeowners planning for retirement.', href: '/loan-programs/mortgage-accelerator' },
]

const faqs = [
  { q: 'Is Lakewood CO a good place to buy a home?', a: "Lakewood is one of the most desirable suburbs in the Denver metro — close to the mountains, well-connected by light rail, and more affordable than central Denver for comparable square footage. Green Mountain, Belmar, and the Union corridor have all seen strong demand. Long-term, Lakewood holds value well because of its location between Denver and the foothills." },
  { q: 'What are current mortgage rates in Lakewood, CO?', a: 'Rates change daily. We can compare mortgage quotes for your Lakewood home using the same loan amount and term. Ask about the lock period, points and fees so you can compare what each option would cost.' },
  { q: 'Do you offer jumbo loans for Golden and Green Mountain properties?', a: 'Yes. Start with the amount you plan to borrow after your down payment. We can check the county limit for the address, then compare the terms and reserve requirements for jumbo financing if your loan exceeds it.' },
  { q: 'Can I use a VA loan in Lakewood, CO?', a: 'Yes. Eligible Lakewood buyers may qualify for a VA-backed loan with no down payment and no monthly mortgage insurance. Jamie can help you understand the eligibility and loan requirements.' },
  { q: 'Are there programs for Lakewood condos and townhomes?', a: "Yes, though condo financing has specific eligibility requirements depending on the complex. FHA and VA condo loans require the complex to be on the approved lists. Conventional condo loans have more flexibility. Jamie can quickly determine which programs apply to a specific property before you make an offer." },
  { q: 'Do you serve Wheat Ridge, Golden, and Arvada?', a: 'Yes. The Becker Team serves all of the west Denver metro including Lakewood, Wheat Ridge, Golden, Morrison, Edgewater, Arvada, and surrounding communities.' },
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

export default function LakewoodMortgagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative py-28 md:py-40 px-6 text-white text-center" style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}>
        <p className="text-sm uppercase tracking-widest font-semibold mb-4 text-white/70">Lakewood, Colorado</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Lakewood Mortgage Broker
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80 leading-relaxed">
          Compare home loans for Lakewood, Golden, Wheat Ridge and the west Denver metro with Jamie Becker.
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
          <span>✦ West Denver Mortgage Lender</span>
          <span>✦ Lakewood Home Loans</span>
          <span>✦ Purchase Pre-Approval</span>
          <span>✦ 21+ Years Experience</span>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Your Lakewood Mortgage Expert
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            Lakewood sits at the intersection of Denver convenience and mountain access — and the housing market reflects it. Buyers here want a mortgage partner who can move quickly, knows the west-side neighborhoods, and has the programs to handle everything from a Belmar condo to a Green Mountain single-family home. Jamie Becker (NMLS #794730) has spent 21+ years helping buyers across the Denver metro, including Lakewood, Wheat Ridge, Golden, and Arvada. As a broker, Jamie works with multiple wholesale lenders to compare rates, lender fees and closing costs.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Lakewood Mortgage Programs
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
            Why Lakewood Buyers Work With Jamie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Multiple Lender Options', body: 'Jamie compares options with multiple wholesale lenders and helps you understand which terms apply to the home you’re buying.' },
              { title: 'Foothills and Condo Expertise', body: "From Green Mountain single-family homes to Belmar condos to Golden foothills properties, Jamie knows the different underwriting requirements for each property type." },
              { title: 'Pre-Approval Before You Shop', body: 'Discuss your price range and how much cash you want to set aside. If you plan to buy a condo, Jamie can explain what the lender needs from the association.' },
              { title: 'Direct, Personal Service', body: "No handoffs, no call centers. Jamie handles your file from pre-approval through closing and is reachable throughout the process." },
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
            Lakewood Mortgage FAQ
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="relative py-24 md:py-36 px-6 text-white text-center" style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}>
        <h2 data-reveal="fade" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Ready to Buy in Lakewood?
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Get pre-approved today and be ready to move in the west Denver market.
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
