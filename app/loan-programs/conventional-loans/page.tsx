import SectionBackdrop from '@/components/SectionBackdrop'
import { teamReference } from '@/lib/siteIdentity'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'
import ProgramReviews from '@/components/ProgramReviews'

export const metadata: Metadata = {
  title: 'Colorado Conventional Home Loans',
  description:
    'Compare fixed and adjustable conventional mortgages in Colorado with Jamie Becker. Learn how your down payment affects mortgage insurance and cash to close.',
  alternates: { canonical: '/loan-programs/conventional-loans' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Conventional Mortgage Loans',
  description: 'Private-lender mortgages with fixed or adjustable rates and several down payment options.',
  provider: { '@type': 'Person', name: 'Jamie Becker', identifier: 'NMLS #794730' },
  areaServed: 'Colorado',
  url: 'https://www.thebeckerteam.com/loan-programs/conventional-loans',
}

const highlights = [
  {
    title: 'Low Down Payment Entry',
    body: 'Eligible buyers may be able to put 3% down on a one-unit primary home. The loan program determines whether income limits or first-time buyer requirements apply.',
  },
  {
    title: 'Compare Rates and Fees',
    body: 'Credit, down payment, loan term and any discount points you pay can all affect the rate you’re quoted.',
  },
  {
    title: 'Flexible Loan Terms',
    body: 'Choose from a range of repayment periods and loan structures to match your financial goals and monthly budget.',
  },
  {
    title: 'No Government Insurance Required',
    body: 'Private mortgage insurance generally applies when you put down less than 20%. We can compare the monthly costs and cash needed at different down payments.',
  },
]

const fitProfiles = [
  { label: 'First-time homebuyers', body: 'Low down payment options make it a practical entry point for buyers stepping into homeownership.' },
  { label: 'Buyers with strong credit', body: 'A strong credit history may help you qualify for a lower rate. Compare the rate with the fees each lender charges.' },
  { label: 'Move-up and repeat buyers', body: 'If you’re selling one home and buying another, compare what you can put down with the cash you want to keep for the move.' },
  { label: '20% down buyers avoiding PMI', body: 'Putting down 20% generally lets you avoid private mortgage insurance. Ask us to compare that with keeping more of your savings for other expenses.' },
]

const faqs = [
  {
    q: 'What is a conventional loan?',
    a: 'A conventional loan is a mortgage from a private lender without insurance or a guarantee from a federal housing agency. You can use one to buy a home or refinance. We’ll review your income, debts, credit history and down payment to see which loan terms fit your budget.',
  },
  {
    q: 'What credit score do I need?',
    a: 'There’s no single credit score that covers every conventional loan. Some conventional loans use an automated review that considers your credit history and the rest of your application without a single score cutoff. Individual lenders and programs can set minimums. We can review your credit alongside your income, debts and available down payment.',
  },
  {
    q: 'How much down payment is required?',
    a: 'Some conventional programs allow as little as 3% down on a one-unit home you’ll live in. Depending on the program, income limits or first-time buyer rules may apply. We can compare the monthly payment and mortgage insurance at different down payments so you can decide how much cash to keep.',
  },
  {
    q: 'Do I need mortgage insurance?',
    a: 'With less than 20% down, private mortgage insurance is typically required. On most covered loans, you can request cancellation at 80% of the original home value if you meet the conditions. Automatic termination generally occurs when the balance is scheduled to reach 78% and payments are current.',
  },
  {
    q: 'What is the difference between conventional and FHA?',
    a: 'FHA loans carry government mortgage insurance and usually have both an upfront premium and a monthly insurance charge. With a conventional loan, private mortgage insurance generally applies when you put less than 20% down. Ask us to compare cash due at closing, monthly payments and how long the insurance lasts.',
  },
  {
    q: 'Can I use a conventional loan for an investment property?',
    a: 'Yes. A conventional loan can finance a rental property. Tell us whether you plan to live in any part of the home, how many units it has and whether tenants are already there. Those details help us check the down payment, how rental income can count and how much cash you need in reserve.',
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
    { '@type': 'ListItem', position: 3, name: 'Conventional Loans', item: 'https://www.thebeckerteam.com/loan-programs/conventional-loans' },
  ],
}

const loanJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LoanOrCredit',
  name: 'Conventional Loans',
  description: 'Colorado mortgage broker Jamie Becker helps buyers compare fixed and adjustable rates, lender fees and down payment options for a conventional home loan.',
  url: 'https://www.thebeckerteam.com/loan-programs/conventional-loans',
  provider: teamReference,
  areaServed: { '@type': 'State', name: 'Colorado' },
}

export default function ConventionalLoansPage() {
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
        className="relative isolate bg-[#1F2E2A] py-14 md:py-24 px-6 text-center text-white"
      >
        <SectionBackdrop src="/images/conv-hero.jpg" shade={0.6} position="center 40%" hero />
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Conventional Loans
        </h1>
        <p className="text-white/80 max-w-xl mx-auto text-lg mb-8">
          Compare fixed and adjustable rates and see how your down payment affects the cost of a conventional home loan.
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
          Fixed or adjustable rates&nbsp;&bull;&nbsp;Flexible repayment terms&nbsp;&bull;&nbsp;Low down payment options
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
            Conventional loans come from private lenders without federal mortgage insurance or a federal loan guarantee. You can compare fixed and adjustable rates and different down payments. Private mortgage insurance usually applies when you put down less than 20%.
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
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ textAlign: 'left', fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
                >
                  {h.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who It's Right For (solid dark green, no photo — shorter page) ── */}
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
            Conventional loans work well across a wide range of borrowers — but they reward strong credit and financial preparation the most.
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
                  Jamie has spent 21 years in mortgages and has helped borrowers use conventional loans to buy a first home, move to another home or finance an investment property.
                </p>
                <p>
                  We’ll show you the monthly payment, cash due at closing and any mortgage insurance so you can compare conventional loans with your other options.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-bronze-ink"
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
                sizes="(min-width: 768px) 420px, calc(100vw - 3rem)"
              />
            </div>
          </div>
          <ProgramReviews reviewers={['Emily Drennan', 'lala7499']} />
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
            All loans subject to credit approval, income verification and program availability. Rates, terms and down payment requirements vary by borrower profile and lender guidelines.
          </p>
        </div>
        <div className="max-w-5xl mx-auto mt-10 flex justify-between items-center">
          <Link
            href="/loan-programs/asset-qualifier-loans"
            className="inline-flex items-center gap-2 font-semibold"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            <ChevronLeft size={18} /> Asset Qualifier Loans
          </Link>
          <Link
            href="/loan-programs/fha-loans"
            className="inline-flex items-center gap-2 font-semibold"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            FHA Loans <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      {/* ── Mountain CTA ── */}
      <section
        className="relative isolate bg-[#1F2E2A] py-24 md:py-36 px-6 text-white text-center"
      >
        <SectionBackdrop src="/images/cta-mountain.jpg" shade={0.55} />
        <h2
          data-reveal="fade"
          className="-mx-2 mb-5 text-4xl font-bold sm:mx-0 md:text-5xl lg:text-6xl"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Compare Your Conventional Loan Options
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Tell us what you plan to buy or refinance. We’ll compare how the down payment, rate and fees affect your monthly payment and cash at closing.
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
