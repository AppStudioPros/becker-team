import SectionBackdrop from '@/components/SectionBackdrop'
import { teamReference } from '@/lib/siteIdentity'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'
import ProgramReviews from '@/components/ProgramReviews'

export const metadata: Metadata = {
  title: 'Colorado Bank Statement Mortgages',
  description:
    'Explore how bank statement mortgages can work for self-employed Colorado buyers and which income records a lender may ask you to provide.',
  alternates: { canonical: '/loan-programs/self-employed-loans' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Self Employed Mortgage Loans',
  description: 'Flexible mortgage qualification for self-employed borrowers using alternative documentation.',
  provider: { '@type': 'Person', name: 'Jamie Becker', identifier: 'NMLS #794730' },
  areaServed: 'Colorado',
  url: 'https://www.thebeckerteam.com/loan-programs/self-employed-loans',
}

const highlights = [
  {
    title: 'One-Year Tax Return Option',
    body: 'Some borrowers can qualify using one year of tax returns. We’ll check the lender’s requirements for your business history, income and supporting records.',
  },
  {
    title: 'Alternative Documentation Accepted',
    body: 'Depending on the loan, a lender may review a 12-month profit and loss statement or 12 or 24 months of bank statements. We can help you choose the records that best document your business income.',
  },
  {
    title: 'Flexible Debt-to-Income Calculations',
    body: 'We can compare how different programs count eligible income and expenses using the records you have.',
  },
  {
    title: 'Broad Property and Loan Range',
    body: 'Available for primary residences, second homes and investment properties. Loan amounts up to $3 million with down payment options starting at 10% for qualified borrowers.',
  },
]

const qualPaths = [
  {
    title: 'Tax Return Program',
    body: 'Some loans accept one year of returns from eligible borrowers. The lender also reviews your business history and how consistently you earn that income.',
  },
  {
    title: 'P&L Statement Option',
    body: 'Use a 12-month rolling Profit & Loss statement prepared by your CPA or accountant to demonstrate your business income.',
  },
  {
    title: 'Bank Statement Program',
    body: 'The lender may review 12 or 24 months of personal or business bank statements and use eligible deposits to calculate qualifying income.',
  },
  {
    title: 'Asset Qualifier Option',
    body: 'If you have substantial savings or investments, we can also review our Asset Qualifier. It uses the eligible balance left after closing.',
  },
]

const fitProfiles = [
  { label: 'Freelancers and independent contractors', body: 'If clients pay you directly, ask which records you can use to show what you earn.' },
  { label: 'Small business owners', body: 'Whether you\'re a sole proprietor or run a growing operation, your business cash flow can count toward qualification.' },
  { label: 'Entrepreneurs with newer businesses', body: 'We’ll look at when you started your business, your prior work and which income records you have.' },
  { label: 'High earners with complex tax returns', body: 'If your tax strategy minimizes income on paper, alternative documentation lets us look at the full financial picture.' },
]

const faqs = [
  {
    q: 'Do I need two years of self-employment history?',
    a: 'The length of time you’ve worked for yourself and the number of tax returns you need are separate questions. A lender may accept one year of returns for an eligible borrower and still ask for a longer business history. Tell us when the business started and what work you did before.',
  },
  {
    q: 'What documentation can I use instead of W-2s?',
    a: 'Start with how you pay yourself. If you have tax returns that reflect your income, we can review those first. If customer payments go into your business account, a lender may consider bank statements or a profit and loss statement. We’ll help you identify which documents fit your business and the loan.',
  },
  {
    q: 'What is the P&L Statement Option?',
    a: 'A profit and loss statement shows what your business earned and what it spent. Some programs accept a statement covering the most recent 12 months, prepared by a qualified accountant. Before you pay to have one prepared, we’ll check who the lender accepts and what supporting records it wants.',
  },
  {
    q: 'What is the Bank Statement Program?',
    a: 'A bank statement loan uses qualifying deposits to help document income from your business. The lender may ask for 12 or 24 months of personal or business statements and review business expenses. Moving money between your own accounts doesn’t create new income, so be ready to explain transfers and unusual deposits.',
  },
  {
    q: 'Can I use these programs for investment properties?',
    a: 'Some self-employed loan programs can finance a rental property. Tell us whether you’ll live there, whether it already has tenants and which records show your income. The property’s use and the lender’s requirements affect how much you can borrow, the down payment and how much money you’ll need left after closing.',
  },
  {
    q: 'What loan amounts are available?',
    a: 'We offer self-employed loan options up to $3 million, with down payments starting at 10% for qualifying borrowers. The largest loan and smallest down payment may apply to different programs. Share the purchase price, down payment and how you document income so we can check the combination that fits your purchase.',
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
    { '@type': 'ListItem', position: 3, name: 'Self-Employed Loans', item: 'https://www.thebeckerteam.com/loan-programs/self-employed-loans' },
  ],
}

const loanJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LoanOrCredit',
  name: 'Self-Employed Loans',
  description: 'Mortgage loans for self-employed borrowers using bank statements or alternative income documentation. Colorado. NMLS #794730.',
  url: 'https://www.thebeckerteam.com/loan-programs/self-employed-loans',
  provider: teamReference,
  areaServed: { '@type': 'State', name: 'Colorado' },
}

export default function SelfEmployedLoansPage() {
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
        <SectionBackdrop src="/images/se-hero.jpg" shade={0.6} position="center 35%" hero />
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Self-Employed Loans
        </h1>
        <p className="text-white/80 max-w-xl mx-auto text-lg mb-8">
          Jamie Becker helps self-employed Colorado homebuyers explore bank statement mortgages through The Becker Team at Xpert Home Lending. Depending on the program, you may be able to document your income with personal or business bank statements.
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
          One year of tax returns for eligible borrowers&nbsp;&bull;&nbsp;Alternative documentation options&nbsp;&bull;&nbsp;Options without W-2s
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
            If your business expenses reduce the income shown on your tax returns, we can help you compare other ways to qualify. Depending on the loan, lenders may review eligible deposits on your bank statements, a profit and loss statement, or assets you’ll have left after closing.
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

      {/* ── Four Qualification Paths ── */}
      <section style={{ backgroundColor: '#1F2E2A' }} className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            data-reveal
            className="text-3xl md:text-5xl font-bold text-white mb-4 text-center"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Four Ways to Qualify
          </h2>
          <p className="text-white/70 text-sm leading-relaxed mb-12 max-w-2xl text-center mx-auto">
            Compare <Link href="/self-employed-mortgage-colorado" className="underline underline-offset-4">Colorado mortgage options for self-employed buyers</Link> to see how each approach documents your income. We’ll help you choose which records to gather.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {qualPaths.map((q, i) => (
              <div
                key={q.title}
                data-reveal
                data-delay={i * 80}
                className="rounded p-8 card-hover-dark"
                style={{ backgroundColor: 'rgba(245,239,230,0.07)', border: '1px solid rgba(245,239,230,0.2)' }}
              >
                <h3
                  className="text-lg font-semibold mb-3 text-white"
                  style={{ textAlign: 'left', fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {q.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">{q.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who It's Right For ── */}
      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            data-reveal
            className="text-3xl md:text-5xl font-bold mb-4 text-center"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            Who This Tends to Fit Best
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-12 max-w-2xl text-center mx-auto">
            Whether you work for yourself or own a business, we can review which records show your income.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {fitProfiles.map((p, i) => (
              <div
                key={p.label}
                data-reveal
                data-delay={i * 80}
                className="flex items-start gap-4 rounded bg-white p-6 card-hover"
                style={{ border: '2px solid #1F2E2A' }}
              >
                <div className="shrink-0 mt-1 rounded-full p-1" style={{ backgroundColor: '#B98942' }}>
                  <Check size={12} color="#fff" strokeWidth={3} />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
                    {p.label}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-6">
        <div className="max-w-3xl mx-auto text-[#1F2E2A]">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            What to gather for a bank statement mortgage
          </h2>
          <ul className="list-disc pl-6 space-y-2 mb-5">
            <li>Personal or business bank statements covering 12 or 24 months, depending on the program.</li>
            <li>Your business name, ownership percentage, and when you started working for yourself.</li>
            <li>Basic details about the home you plan to buy and the funds available for a down payment.</li>
          </ul>
          <p className="mb-4">
            For example, a self-employed contractor whose customer payments go into a business checking account could start by gathering those statements. Jamie can help identify which deposits the lender may count and what other documents it may ask for.
          </p>
          <Link href="/blog/bank-statement-loans-colorado" className="font-semibold underline underline-offset-4">
            Read the Colorado bank statement loan guide
          </Link>
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
                  Jamie Becker brings 21 years of mortgage experience and a financial advisory background. If you’re self-employed, he can review how you’re paid and what documents you have.
                </p>
                <p>
                  We’ll explain how lenders may count your income and what you’d need to provide before you choose a loan.
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
          <ProgramReviews reviewers={['lala7499', '4belle1rose5']} />
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
            All loans subject to credit approval, income and asset verification, and program availability. Documentation requirements, loan amounts and terms vary by program and borrower profile. Responsible lending guidelines apply.
          </p>
        </div>
        <div className="max-w-5xl mx-auto mt-10 flex justify-start items-center">
          <Link
            href="/loan-programs/jumbo-loans"
            className="inline-flex items-center gap-2 font-semibold"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            <ChevronLeft size={18} /> Jumbo Loans
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
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Compare Loans for Self-Employed Borrowers
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          If traditional lenders have said no because of how your income looks on paper, there may be another path. Let The Becker Team take a look at your full financial picture.
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
