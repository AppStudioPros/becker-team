import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'
import { dollars, fhfaLimitsUrl, oneUnitLimits } from '@/lib/conformingLimits'

export const metadata: Metadata = {
  title: 'Colorado Jumbo Loans and County Loan Limits',
  description:
    'Compare 2026 and 2027 one-unit loan limits in Colorado. See how your county and down payment determine whether to consider jumbo financing with Jamie Becker.',
  alternates: { canonical: '/loan-programs/jumbo-loans' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Jumbo Mortgage Loans',
  description: 'Mortgage financing for loan amounts above the applicable county conforming limit.',
  provider: { '@type': 'Person', name: 'Jamie Becker', identifier: 'NMLS #794730' },
  areaServed: 'Colorado',
  url: 'https://www.thebeckerteam.com/loan-programs/jumbo-loans',
}

const highlights = [
  {
    title: 'Loan Amounts Beyond Conforming Limits',
    body: 'Subtract your down payment from your purchase price. Compare the amount you need to borrow with the limit for the county and number of units.',
  },
  {
    title: 'Fixed or Adjustable Rate Options',
    body: 'Choose from fixed-rate stability or adjustable-rate flexibility depending on your timeline, property and financial strategy.',
  },
  {
    title: 'Built for Luxury and High-Value Properties',
    body: 'A high-priced property can still fit within the conforming loan limit if you put enough down. We can show you how different down payments change your options.',
  },
  {
    title: 'Stricter Credit and Down Payment Standards',
    body: 'Jumbo lenders set their own credit, down payment and reserve requirements. We review those figures with you before you make an offer.',
  },
]

const fitProfiles = [
  { label: 'High-value property buyers', body: 'If your planned mortgage exceeds the local limit, we can compare jumbo options for the amount you need.' },
  { label: 'Buyers in high-cost markets', body: 'A loan that exceeds the limit in one county may fit within the limit in another. Start with the county where the property is located.' },
  { label: 'Borrowers with strong credit and income', body: 'Jumbo underwriting rewards financial strength — clean credit, documented income, and reserves matter here.' },
  { label: 'Buyers weighing fixed vs. adjustable structure', body: 'With multiple rate structures available, we can model which option best fits your hold timeline and cash flow.' },
]

const faqs = [
  {
    q: 'What makes a loan a jumbo loan?',
    a: 'A jumbo loan exceeds the conforming loan limit for the county, number of units and applicable year. A mortgage exactly at the limit is still within the size limit. Credit, income and property requirements are reviewed separately.',
  },
  {
    q: 'What credit score do I need for a jumbo loan?',
    a: 'Jumbo lenders set their own credit requirements. We can check which options fit your credit profile, the amount you want to borrow and how you plan to use the property.',
  },
  {
    q: 'How much down payment is required?',
    a: 'The down payment depends on the lender, loan amount and whether you are buying a primary home, second home or investment property. We can compare how much you would need at closing and how much the lender requires you to keep in reserve.',
  },
  {
    q: 'Are jumbo loans fixed or adjustable rate?',
    a: 'Both options are available. Fixed-rate jumbo loans provide payment stability over the life of the loan. Adjustable-rate jumbo loans may offer a lower initial rate for borrowers with a defined hold timeline.',
  },
  {
    q: 'Do jumbo loans require mortgage insurance?',
    a: 'Mortgage insurance requirements vary by lender and loan structure. Ask for a payment estimate that shows any mortgage insurance and a breakdown of the cash you would need at closing.',
  },
  {
    q: 'Can jumbo loans be used for second homes or investment properties?',
    a: 'Yes, jumbo financing can apply to second homes and investment properties in many cases, subject to higher down payment and reserve requirements.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thebeckerteam.com' },
    { '@type': 'ListItem', position: 2, name: 'Loan Programs', item: 'https://www.thebeckerteam.com/loan-programs' },
    { '@type': 'ListItem', position: 3, name: 'Jumbo Loans', item: 'https://www.thebeckerteam.com/loan-programs/jumbo-loans' },
  ],
}

const loanJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LoanOrCredit',
  name: 'Jumbo Loans',
  description: 'Colorado jumbo mortgages for primary residences, second homes and investment properties. Compare one-unit conforming limits by county with Jamie Becker, NMLS #794730.',
  url: 'https://www.thebeckerteam.com/loan-programs/jumbo-loans',
  provider: {
    '@type': 'FinancialService',
    name: 'The Becker Team - Xpert Home Lending',
    url: 'https://www.thebeckerteam.com',
    telephone: '(720) 492-3335',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '201 Columbine Street, Suite 300',
      addressLocality: 'Denver',
      addressRegion: 'CO',
      postalCode: '80206',
      addressCountry: 'US',
    },
  },
  areaServed: [
    { '@type': 'State', name: 'Colorado' },
    { '@type': 'State', name: 'Georgia' },
    { '@type': 'State', name: 'Oregon' },
  ],
}

export default function JumboLoansPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(loanJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section
        className="relative py-14 md:py-24 px-6 text-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,35,25,0.6), rgba(20,35,25,0.6)), url("/images/jumbo-hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundColor: '#1F2E2A',
        }}
      >
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Jumbo Loans
        </h1>
        <p className="text-white/80 max-w-xl mx-auto text-lg mb-8">
          Compare financing for a Colorado purchase when the amount you want to borrow exceeds your county’s conforming loan limit.
        </p>
        <a
          href="https://2179191.my1003app.com/794730/register"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
          style={{ backgroundColor: '#1F2E2A', color: '#F5EFE6', border: '2px solid #F5EFE6' }}
        >
          Get Pre-Approved
        </a>
      </section>

      {/* ── Feature Bar ── */}
      <section className="bg-white py-7 px-6 border-b border-[#ede4cc]">
        <p
          className="text-center text-lg md:text-2xl leading-relaxed"
          style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
        >
          <a href="#county-loan-limits" className="underline decoration-[#B98942] underline-offset-4">Find your county’s jumbo loan threshold</a>
        </p>
      </section>

      {/* ── What This Program Does ── */}
      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            data-reveal
            className="text-3xl md:text-5xl font-bold mb-5 text-center"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            How do I know if I need a jumbo loan?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-12 max-w-3xl text-center mx-auto">
            Start with the amount you plan to borrow. On a $1 million home in Denver County, a $150,000 down payment leaves an $850,000 mortgage. That falls within the county’s $862,500 one-unit limit for 2026. With $125,000 down on the same home, the mortgage would be $875,000, which exceeds the limit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                data-reveal
                data-delay={i * 80}
                className="rounded bg-white p-8 card-hover"
                style={{ border: '2px solid #1F2E2A' }}
              >
                <h4
                  className="text-lg font-semibold mb-3"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
                >
                  {h.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="county-loan-limits" aria-labelledby="county-limits-heading" className="scroll-mt-24 bg-white px-6 py-14 text-[#1F2E2A] md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 id="county-limits-heading" className="mb-4 text-center text-3xl font-bold md:text-4xl">Where does jumbo financing start in Colorado?</h2>
          <p className="mb-6 text-center leading-relaxed">These are the maximum conforming loan amounts for a one-unit property, including a single condo. A mortgage above the amount shown is jumbo. Buying a duplex, triplex or fourplex? <a href={fhfaLimitsUrl} className="font-semibold underline underline-offset-4">Check the limit for the number of units in your property</a>.</p>
          <div className="overflow-x-auto rounded border border-[#d4c9b5]">
            <table className="w-full text-left text-sm sm:text-base">
              <caption className="sr-only">Maximum one-unit conforming loan amounts by county for 2026 and 2027</caption>
              <thead className="bg-[#1F2E2A] text-white">
                <tr>
                  <th scope="col" className="px-3 py-3 sm:px-5">Location</th>
                  <th scope="col" className="px-3 py-3 sm:px-5">2026</th>
                  <th scope="col" className="px-3 py-3 sm:px-5">2027</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(oneUnitLimits).map(([area, limits]) => (
                  <tr key={area} className="border-t border-[#ded4be] even:bg-[#F5EFE6]">
                    <th scope="row" className="px-3 py-3 font-medium sm:px-5">{area === 'U.S. baseline' ? area : area + ' County'}</th>
                    <td className="whitespace-nowrap px-3 py-3 sm:px-5">{dollars.format(limits[2026])}</td>
                    <td className="whitespace-nowrap px-3 py-3 sm:px-5">{dollars.format(limits[2027])}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <nav aria-label="Local Colorado buying guides" className="mt-8 border-t border-[#ded4be] pt-5 text-center">
            <p className="mb-3 font-semibold">Explore local home prices and buying guides</p>
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-semibold underline underline-offset-4">
              <li><Link href="/denver-mortgage#local-buying-guide">Denver</Link></li>
              <li><Link href="/service-areas/boulder#local-buying-guide">Boulder</Link></li>
              <li><Link href="/service-areas/breckenridge#local-buying-guide">Breckenridge</Link></li>
              <li><Link href="/service-areas/silverthorne#local-buying-guide">Silverthorne</Link></li>
              <li><Link href="/service-areas/vail#local-buying-guide">Vail</Link></li>
              <li><Link href="/fort-collins-mortgage#local-buying-guide">Fort Collins</Link></li>
            </ul>
          </nav>
        </div>
      </section>

      {/* ── Who It's Right For ── */}
      <section style={{ backgroundColor: '#1F2E2A' }} className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            data-reveal
            className="text-3xl md:text-5xl font-bold text-white mb-4 text-center"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Who This Tends to Fit Best
          </h2>
          <p className="text-white/70 text-sm leading-relaxed mb-12 max-w-2xl text-center mx-auto">
            Jumbo loans reward financial strength. Qualified borrowers get access to financing that conventional programs simply can&apos;t provide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {fitProfiles.map((p, i) => (
              <div
                key={p.label}
                data-reveal
                data-delay={i * 80}
                className="flex items-start gap-4 rounded p-6 card-hover-dark"
                style={{ backgroundColor: 'rgba(245,239,230,0.07)', border: '1px solid rgba(245,239,230,0.12)' }}
              >
                <div className="shrink-0 mt-1 rounded-full p-1" style={{ backgroundColor: '#B98942' }}>
                  <Check size={12} color="#fff" strokeWidth={3} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
                    {p.label}
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            data-reveal
            className="text-3xl md:text-5xl font-bold text-center mb-10"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            Frequently Asked Questions
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ── Why Work with Jamie ── */}
      <section id="why-work-with-jamie" className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            data-reveal
            className="text-3xl md:text-5xl font-bold text-center mb-10"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            Why Work with Jamie Becker
          </h2>
          <div className="flex flex-col md:flex-row gap-0 rounded overflow-hidden">
            <div className="flex-1 flex flex-col justify-between p-10 md:p-12" style={{ backgroundColor: '#F5EFE6' }}>
              <div className="prose-becker mb-10">
                <p>
                  Jumbo purchases are high-stakes transactions. The property is larger, the loan is larger, and the margin for error is smaller. Jamie Becker brings 21 years of mortgage experience — including complex, high-value files — and the financial advisory background to match loan structure with long-term strategy.
                </p>
                <p>
                  Whether you are choosing between fixed and adjustable rates or navigating stricter documentation requirements, our team will make the process clear from the first conversation.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest"
                style={{ color: '#B98942' }}
              >
                Learn More About Jamie <ChevronRight size={16} />
              </Link>
            </div>
            <div className="shrink-0 w-full md:w-[420px] min-h-[400px] relative">
              <Image
                src="/images/jamie-becker-barn.jpg"
                alt="Jamie Becker, Colorado mortgage broker"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 55%' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Program Notes + Nav ── */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-xl font-bold mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            Important Program Notes
          </h2>
          <p className="text-sm leading-relaxed italic" style={{ color: '#4a5e53' }}>
            Jumbo loan approval is subject to credit review, income and asset verification, appraisal, and lender guidelines. Down payment requirements, rate structures and eligibility vary by loan amount and borrower profile.
          </p>
        </div>
        <div className="max-w-5xl mx-auto mt-10 flex justify-between items-center">
          <Link
            href="/loan-programs/va-loans"
            className="inline-flex items-center gap-2 font-semibold"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            <ChevronLeft size={18} /> VA Loans
          </Link>
          <Link
            href="/loan-programs/self-employed-loans"
            className="inline-flex items-center gap-2 font-semibold"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            Self Employed Loans <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      {/* ── Mountain CTA ── */}
      <section
        className="relative py-24 md:py-36 px-6 text-white text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,35,25,0.55), rgba(20,35,25,0.55)), url("/images/cta-mountain.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#1F2E2A',
        }}
      >
        <h2
          data-reveal="fade"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Financing That Matches Your Property
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          If the property you want exceeds conventional loan limits, let&apos;s talk through what jumbo financing looks like for your situation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://2179191.my1003app.com/794730/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
            style={{ backgroundColor: '#1F2E2A', color: '#F5EFE6', border: '2px solid #F5EFE6' }}
          >
            Get Pre-Approved
          </a>
          <Link
            href="/contact"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
            style={{ backgroundColor: 'transparent', color: '#F5EFE6', border: '2px solid #F5EFE6' }}
          >
            Send Us Your Scenario
          </Link>
        </div>
      </section>
    </>
  )
}
