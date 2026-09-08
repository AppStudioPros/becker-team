import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Conventional Loans | The Becker Team',
  description:
    'Conventional home loans from private lenders with flexible terms and competitive rates. As low as 3-5% down. Jamie Becker, NMLS #794730.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Conventional Mortgage Loans',
  description: 'Mortgage loans from private lenders with flexible terms and competitive rates.',
  provider: { '@type': 'Person', name: 'Jamie Becker', identifier: 'NMLS #794730' },
  areaServed: 'Colorado',
  url: 'https://www.thebeckerteam.com/loan-programs/conventional-loans',
}

const highlights = [
  {
    title: 'Low Down Payment Entry',
    body: 'Down payments as low as 3-5% make conventional loans accessible for first-time buyers and those who prefer to keep more cash in reserve.',
  },
  {
    title: 'Rates Based on Your Creditworthiness',
    body: 'Competitive interest rates determined by your credit profile — borrowers with strong credit typically access the most favorable terms.',
  },
  {
    title: 'Flexible Loan Terms',
    body: 'Choose from a range of repayment periods and loan structures to match your financial goals and monthly budget.',
  },
  {
    title: 'No Government Insurance Required',
    body: 'With 20% down, no private mortgage insurance is required — giving strong-credit buyers a cleaner, lower-cost path to homeownership.',
  },
]

const fitProfiles = [
  { label: 'First-time homebuyers', body: 'Low down payment options make it a practical entry point for buyers stepping into homeownership.' },
  { label: 'Buyers with strong credit', body: 'Good credit translates directly into more competitive rates and better long-term cost.' },
  { label: 'Move-up and repeat buyers', body: 'Flexible terms and no government overlays make conventional a clean fit for experienced buyers.' },
  { label: '20% down buyers avoiding PMI', body: 'Put down 20% and skip mortgage insurance entirely — keeping monthly costs as low as possible.' },
]

const faqs = [
  {
    q: 'What is a conventional loan?',
    a: 'A conventional loan is a mortgage not insured or guaranteed by a government agency such as the FHA or VA. It is originated and serviced by a private lender, with terms based on the borrower\'s credit profile and financials.',
  },
  {
    q: 'What credit score do I need?',
    a: 'Most conventional loans require a minimum credit score around 620, though stronger credit scores unlock better rates and terms.',
  },
  {
    q: 'How much down payment is required?',
    a: 'Down payments can be as low as 3-5%. However, putting down 20% eliminates the requirement for private mortgage insurance.',
  },
  {
    q: 'Do I need mortgage insurance?',
    a: 'If your down payment is less than 20%, private mortgage insurance (PMI) is typically required. It can be removed once you reach 20% equity in the home.',
  },
  {
    q: 'What is the difference between conventional and FHA?',
    a: 'Conventional loans are not government-backed and typically require stronger credit. FHA loans are government-insured and allow lower credit scores, but require mortgage insurance for the life of the loan in most cases.',
  },
  {
    q: 'Can I use a conventional loan for an investment property?',
    a: 'Yes. Conventional loans can be used for primary residences, second homes, and investment properties, subject to down payment and reserve requirements.',
  },
]

export default function ConventionalLoansPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section
        className="relative py-14 md:py-24 px-6 text-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,35,25,0.6), rgba(20,35,25,0.6)), url("/images/conv-hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundColor: '#1F2E2A',
        }}
      >
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Conventional Loans
        </h1>
        <p className="text-white/80 max-w-xl mx-auto text-lg mb-8">
          Mortgage loans from private lenders with flexible terms, competitive rates and down payments as low as 3-5%.
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
          Flexible terms and repayment options&nbsp;&bull;&nbsp;Competitive rates based on creditworthiness&nbsp;&bull;&nbsp;As low as 3-5% down
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
            Conventional loans are the most widely used mortgage option in the country — and for good reason. Without government backing comes more flexibility, cleaner underwriting for qualified borrowers, and the ability to avoid mortgage insurance entirely with the right down payment. They are the straightforward path for buyers who meet the credit and income benchmarks.
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
                  With 21 years in the mortgage business, Jamie has guided borrowers through conventional loans at every price point — first purchases, move-up homes, investment properties and everything in between.
                </p>
                <p>
                  The goal is always the same: match the right structure to the right borrower, explain it clearly, and move efficiently. A conventional loan is often the cleanest path — and our team knows how to keep it that way.
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
          The Straightforward Path to Homeownership
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          If you meet the credit and income benchmarks, a conventional loan is often the cleanest and most cost-effective option. Let us show you what it looks like for your situation.
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
