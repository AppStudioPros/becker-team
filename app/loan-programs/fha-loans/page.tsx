import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'FHA Loans | The Becker Team',
  description:
    'Government-insured FHA loans with as little as 3.5% down and more flexible credit requirements. Great for first-time buyers. Jamie Becker, NMLS #794730.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'FHA Mortgage Loans',
  description: 'Government-insured loans designed for borrowers with lower credit scores or limited down payment savings.',
  provider: { '@type': 'Person', name: 'Jamie Becker', identifier: 'NMLS #794730' },
  areaServed: 'Colorado',
  url: 'https://www.thebeckerteam.com/loan-programs/fha-loans',
}

const highlights = [
  {
    title: 'As Low as 3.5% Down',
    body: 'FHA loans allow down payments as low as 3.5% for borrowers with a qualifying credit score, making homeownership more accessible with less upfront capital.',
  },
  {
    title: 'More Flexible Credit Requirements',
    body: 'FHA loans are available to borrowers with credit scores as low as 580, and sometimes lower with a larger down payment — opening the door for buyers who don\'t yet meet conventional standards.',
  },
  {
    title: 'Government-Insured, Private Lender',
    body: 'The FHA insures the loan — your private lender funds it. That government backing gives lenders more flexibility to approve borrowers who might not qualify conventionally.',
  },
  {
    title: 'Easier Qualification Standards',
    body: 'Debt-to-income ratios and documentation requirements can be more forgiving than conventional loans, making FHA a practical path for borrowers with complex or limited financial histories.',
  },
]

const fitProfiles = [
  { label: 'First-time homebuyers', body: 'Low down payment and flexible credit requirements make FHA the most common path for buyers purchasing their first home.' },
  { label: 'Buyers with lower credit scores', body: 'If your credit is still developing, FHA\'s lower floor makes approval possible while you continue building your profile.' },
  { label: 'Buyers with limited savings', body: 'A 3.5% down payment means more buyers can get into a home without depleting all of their reserves.' },
  { label: 'Borrowers with higher debt-to-income ratios', body: 'FHA underwriting can accommodate DTI ratios that might not pass a conventional review.' },
]

const faqs = [
  {
    q: 'What is an FHA loan?',
    a: 'An FHA loan is a mortgage insured by the Federal Housing Administration. The government backing allows private lenders to offer more flexible terms to borrowers who may not qualify for conventional financing.',
  },
  {
    q: 'What credit score do I need for an FHA loan?',
    a: 'Most FHA lenders require a minimum credit score of 580 for the 3.5% down payment option. Borrowers with scores between 500-579 may still qualify with a 10% down payment, subject to lender requirements.',
  },
  {
    q: 'What is mortgage insurance on an FHA loan?',
    a: 'FHA loans require an upfront mortgage insurance premium (MIP) and an annual MIP paid monthly. Unlike conventional PMI, FHA mortgage insurance typically stays for the life of the loan if your down payment is less than 10%.',
  },
  {
    q: 'Can I use an FHA loan to buy any type of home?',
    a: 'FHA loans are intended for primary residences only. The property must meet FHA minimum property standards, which can affect eligibility for some fixer-uppers or unique property types.',
  },
  {
    q: 'How does FHA differ from conventional?',
    a: 'FHA loans are government-backed with more flexible credit and down payment requirements, but require mortgage insurance for most borrowers. Conventional loans have stricter credit requirements but offer more flexibility once you have 20% equity.',
  },
  {
    q: 'Are there loan limits for FHA loans?',
    a: 'Yes. FHA loan limits vary by county and are updated annually. Our team can confirm current limits for your area and purchase price.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is an FHA loan?', acceptedAnswer: { '@type': 'Answer', text: 'An FHA loan is a mortgage insured by the Federal Housing Administration. The government backing allows private lenders to offer more flexible terms to borrowers who may not qualify for conventional financing.' } },
    { '@type': 'Question', name: 'What credit score do I need for an FHA loan?', acceptedAnswer: { '@type': 'Answer', text: 'Most FHA lenders require a minimum credit score of 580 for the 3.5% down payment option. Borrowers with scores between 500-579 may still qualify with a 10% down payment, subject to lender requirements.' } },
    { '@type': 'Question', name: 'What is mortgage insurance on an FHA loan?', acceptedAnswer: { '@type': 'Answer', text: 'FHA loans require an upfront mortgage insurance premium (MIP) and an annual MIP paid monthly. Unlike conventional PMI, FHA mortgage insurance typically stays for the life of the loan if your down payment is less than 10%.' } },
    { '@type': 'Question', name: 'Can I use an FHA loan to buy any type of home?', acceptedAnswer: { '@type': 'Answer', text: 'FHA loans are intended for primary residences only. The property must meet FHA minimum property standards, which can affect eligibility for some fixer-uppers or unique property types.' } },
    { '@type': 'Question', name: 'How does FHA differ from conventional?', acceptedAnswer: { '@type': 'Answer', text: 'FHA loans are government-backed with more flexible credit and down payment requirements, but require mortgage insurance for most borrowers. Conventional loans have stricter credit requirements but offer more flexibility once you have 20% equity.' } },
    { '@type': 'Question', name: 'Are there loan limits for FHA loans?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. FHA loan limits vary by county and are updated annually. Our team can confirm current limits for your area and purchase price.' } }
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thebeckerteam.com' },
    { '@type': 'ListItem', position: 2, name: 'Loan Programs', item: 'https://www.thebeckerteam.com/loan-programs' },
    { '@type': 'ListItem', position: 3, name: 'FHA Loans', item: 'https://www.thebeckerteam.com/loan-programs/fha-loans' },
  ],
}

const loanJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LoanOrCredit',
  name: 'FHA Loans',
  description: 'FHA-insured mortgage loans with down payments as low as 3.5%. Available in Colorado, Georgia, and Oregon. NMLS #794730.',
  url: 'https://www.thebeckerteam.com/loan-programs/fha-loans',
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

export default function FhaLoansPage() {
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
          backgroundImage: 'linear-gradient(rgba(20,35,25,0.6), rgba(20,35,25,0.6)), url("/images/fha-hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          backgroundColor: '#1F2E2A',
        }}
      >
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          FHA Loans
        </h1>
        <p className="text-white/80 max-w-xl mx-auto text-lg mb-8">
          Government-insured loans designed for borrowers with lower credit scores, limited savings, or a need for more flexible qualification standards.
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
          Government-insured&nbsp;&bull;&nbsp;As low as 3.5% down&nbsp;&bull;&nbsp;More flexible credit requirements
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
            What This Program Does — and Why It Matters
          </h2>
          <p className="text-gray-700 leading-relaxed mb-12 max-w-3xl text-center mx-auto">
            FHA loans exist to make homeownership accessible for buyers who aren't yet positioned for conventional financing. The government backing removes some of the risk for lenders — which translates into more forgiving credit requirements, lower down payments, and a real path to homeownership for buyers who would otherwise be turned away.
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
            FHA is particularly well suited for buyers earlier in their financial journey — where flexibility matters more than the lowest possible rate.
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

      {/* ── Why Work with Jamie ── */}
      <section className="bg-white py-16 md:py-24 px-6">
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
                  First-time buyers and buyers rebuilding their financial profile deserve the same clear, honest guidance as any other client. Jamie Becker brings 21 years of mortgage experience to every conversation — and that includes knowing exactly when an FHA loan is the right move and when a different path makes more sense.
                </p>
                <p>
                  No pressure, no upsell. If FHA is your best option right now, we will make it as clean and straightforward as possible.
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
            FHA loan approval is subject to credit review, income verification, property standards and program availability. Mortgage insurance premiums apply. Terms and limits vary by borrower profile and county.
          </p>
        </div>
        <div className="max-w-5xl mx-auto mt-10 flex justify-between items-center">
          <Link
            href="/loan-programs/conventional-loans"
            className="inline-flex items-center gap-2 font-semibold"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            <ChevronLeft size={18} /> Conventional Loans
          </Link>
          <Link
            href="/loan-programs/va-loans"
            className="inline-flex items-center gap-2 font-semibold"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            VA Loans <ChevronRight size={18} />
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
          A Real Path to Homeownership
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          If your credit or down payment isn't quite where it needs to be for conventional, FHA may be the right move right now. Let's take a look at your numbers together.
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
