import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Jumbo Loans | The Becker Team',
  description:
    'Jumbo mortgage loans for luxury homes and high-cost properties exceeding conforming loan limits. Fixed and adjustable options available. Jamie Becker, NMLS #794730.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Jumbo Mortgage Loans',
  description: 'Financing for luxury homes and properties in high-cost areas that exceed conforming loan limits.',
  provider: { '@type': 'Person', name: 'Jamie Becker', identifier: 'NMLS #794730' },
  areaServed: 'Colorado',
  url: 'https://www.thebeckerteam.com/loan-programs/jumbo-loans',
}

const highlights = [
  {
    title: 'Loan Amounts Beyond Conforming Limits',
    body: 'Jumbo loans start at $806,501 and can range into the several millions — financing properties that fall outside what Fannie Mae and Freddie Mac will guarantee.',
  },
  {
    title: 'Fixed or Adjustable Rate Options',
    body: 'Choose from fixed-rate stability or adjustable-rate flexibility depending on your timeline, property and financial strategy.',
  },
  {
    title: 'Built for Luxury and High-Value Properties',
    body: 'In markets where home prices regularly exceed conforming limits, jumbo loans are simply the practical path to financing the property you want.',
  },
  {
    title: 'Stricter Credit and Down Payment Standards',
    body: 'Jumbo loans typically require stronger credit, higher income documentation and a larger down payment — but for qualified borrowers, they open access to properties that conventional financing cannot touch.',
  },
]

const fitProfiles = [
  { label: 'High-value property buyers', body: 'If the home you want exceeds the conforming loan limit, a jumbo loan is typically the path forward.' },
  { label: 'Buyers in high-cost markets', body: 'In areas where median home prices regularly exceed $800K, jumbo financing is often the standard, not the exception.' },
  { label: 'Borrowers with strong credit and income', body: 'Jumbo underwriting rewards financial strength — clean credit, documented income, and reserves matter here.' },
  { label: 'Buyers weighing fixed vs. adjustable structure', body: 'With multiple rate structures available, we can model which option best fits your hold timeline and cash flow.' },
]

const faqs = [
  {
    q: 'What makes a loan a jumbo loan?',
    a: 'A jumbo loan is any mortgage that exceeds the conforming loan limits set by the Federal Housing Finance Agency (FHFA). In most areas, that threshold is $806,500 for 2024.',
  },
  {
    q: 'What credit score do I need for a jumbo loan?',
    a: 'Jumbo lenders typically require a minimum credit score of 700 or higher, though requirements vary by lender and loan size. Stronger credit generally means better terms.',
  },
  {
    q: 'How much down payment is required?',
    a: 'Down payment requirements for jumbo loans are typically higher than conventional — often 10-20% or more, depending on the loan amount and lender guidelines.',
  },
  {
    q: 'Are jumbo loans fixed or adjustable rate?',
    a: 'Both options are available. Fixed-rate jumbo loans provide payment stability over the life of the loan. Adjustable-rate jumbo loans may offer a lower initial rate for borrowers with a defined hold timeline.',
  },
  {
    q: 'Do jumbo loans require mortgage insurance?',
    a: 'Jumbo loans are not government-backed, so they do not follow standard PMI rules. Reserve requirements and down payment minimums vary by lender and loan program.',
  },
  {
    q: 'Can jumbo loans be used for second homes or investment properties?',
    a: 'Yes, jumbo financing can apply to second homes and investment properties in many cases, subject to higher down payment and reserve requirements.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What makes a loan a jumbo loan?', acceptedAnswer: { '@type': 'Answer', text: 'A jumbo loan is any mortgage that exceeds the conforming loan limits set by the Federal Housing Finance Agency (FHFA). In most areas, that threshold is $806,500 for 2024.' } },
    { '@type': 'Question', name: 'What credit score do I need for a jumbo loan?', acceptedAnswer: { '@type': 'Answer', text: 'Jumbo lenders typically require a minimum credit score of 700 or higher, though requirements vary by lender and loan size. Stronger credit generally means better terms.' } },
    { '@type': 'Question', name: 'How much down payment is required?', acceptedAnswer: { '@type': 'Answer', text: 'Down payment requirements for jumbo loans are typically higher than conventional — often 10-20% or more, depending on the loan amount and lender guidelines.' } },
    { '@type': 'Question', name: 'Are jumbo loans fixed or adjustable rate?', acceptedAnswer: { '@type': 'Answer', text: 'Both options are available. Fixed-rate jumbo loans provide payment stability over the life of the loan. Adjustable-rate jumbo loans may offer a lower initial rate for borrowers with a defined hold timeline.' } },
    { '@type': 'Question', name: 'Do jumbo loans require mortgage insurance?', acceptedAnswer: { '@type': 'Answer', text: 'Jumbo loans are not government-backed, so they do not follow standard PMI rules. Reserve requirements and down payment minimums vary by lender and loan program.' } },
    { '@type': 'Question', name: 'Can jumbo loans be used for second homes or investment properties?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, jumbo financing can apply to second homes and investment properties in many cases, subject to higher down payment and reserve requirements.' } }
  ],
}

export default function JumboLoansPage() {
  return (
    <>
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
          Financing for luxury homes and properties in high-cost areas that exceed conventional loan limits.
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
          Loans starting at $806,501&nbsp;&bull;&nbsp;Fixed and adjustable rate options&nbsp;&bull;&nbsp;Financing for luxury and high-value properties
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
            When a property's price exceeds the conforming loan limits set by Fannie Mae and Freddie Mac, conventional financing stops being an option. Jumbo loans fill that gap — providing access to larger loan amounts for qualified borrowers purchasing luxury homes, high-value properties, or homes in markets where prices simply run higher.
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
