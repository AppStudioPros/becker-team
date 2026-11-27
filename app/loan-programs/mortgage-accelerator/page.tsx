import SectionBackdrop from '@/components/SectionBackdrop'
import { teamReference } from '@/lib/siteIdentity'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Check, ChevronRight } from 'lucide-react'
import StrategyReviewModal from '@/components/StrategyReviewModal'
import FaqAccordion from '@/components/FaqAccordion'
import ProgramReviews from '@/components/ProgramReviews'

export const metadata: Metadata = {
  title: 'Home Mortgage Accelerator Strategy',
  description:
    'See how depositing income and paying expenses can affect your mortgage balance. We’ll help you decide if the Accelerator fits your cash flow.',
  alternates: { canonical: '/loan-programs/mortgage-accelerator' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Home Mortgage Accelerator Strategy',
  description: 'A cash-flow-driven mortgage strategy for homeowners with strong monthly net deposits.',
  provider: { '@type': 'Person', name: 'Jamie Becker', identifier: 'NMLS #794730' },
  areaServed: 'Colorado',
  url: 'https://www.thebeckerteam.com/loan-programs/mortgage-accelerator',
}

const reasons = [
  {
    title: 'Pay down before retirement',
    body: 'If retirement is 7 to 10 years away, we can estimate what you’d still owe on your current mortgage and compare ways to pay it down.',
  },
  {
    title: 'See how deposits and withdrawals affect interest',
    body: 'We can compare how your deposit and withdrawal dates would affect the balance and interest you pay.',
  },
  {
    title: 'Plan for months with higher expenses',
    body: 'Look at how much you’d need to draw for an unexpected expense and how that would change your balance and payoff estimate.',
  },
  {
    title: 'See the math first',
    body: 'We compare the interest, payments and remaining balance using the same household budget.',
  },
]

const strongFit = [
  'You can count on regular deposits during the month.',
  'You usually have money left after paying your bills.',
  'You can track when income arrives and bills are due.',
  'You want to compare a faster payoff path before retirement.',
  'You want to compare how a purchase or refinance would fit your monthly budget.',
  'You advise a client who regularly has money left after bills and wants to compare ways to pay down their mortgage.',
]

const faqs = [
  {
    q: 'What exactly is the Home Mortgage Accelerator?',
    a: 'The Accelerator uses a home equity line of credit. You deposit income into the line to lower the balance, then draw from it to pay bills. The dates and amounts affect the interest charged. The money you can leave there after paying expenses is what helps bring the balance down over time.',
  },
  {
    q: 'Who is this a good fit for?',
    a: 'It can fit someone who regularly has money left after bills and can leave that money against the balance. Look at several months, including the ones with car repairs, travel or tax payments. If you often need to draw the money back out, the projected payoff can change considerably.',
  },
  {
    q: 'Can this work for a purchase or just a refinance?',
    a: 'We can review it for a purchase or a refinance. For a purchase, we compare the proposed line with a mortgage for the same home. For a refinance, we start with the rate, balance and time left on your current mortgage so the comparison includes what you’d give up and any new closing costs.',
  },
  {
    q: 'How can I estimate my payoff date?',
    a: 'Start with your balance, the rate and fees on the proposed line, and the dates money would go in and come out. We compare that schedule with paying the same extra cash toward a standard mortgage. We can also show how a higher rate or a month with less income affects the estimate.',
  },
  {
    q: 'Will you recommend this even if it does not fit?',
    a: 'No. If you need predictable payments, have little left over most months or would rather keep your savings separate, tell us. We’ll walk through what happens if you keep your current loan and put extra toward principal when you can. That gives you a comparison based on your own budget.',
  },
  {
    q: 'What information do I need to get started?',
    a: 'Bring your latest mortgage statement if you own a home, or the purchase price and planned down payment if you’re buying. A few months of take-home pay, bills and savings activity will help us see the timing. Include big expenses you expect and how much emergency cash you want to keep available.',
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
    { '@type': 'ListItem', position: 3, name: 'Home Mortgage Accelerator', item: 'https://www.thebeckerteam.com/loan-programs/mortgage-accelerator' },
  ],
}

const loanJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LoanOrCredit',
  name: 'Home Mortgage Accelerator',
  description: 'A strategy using a home equity line of credit. Payoff timing and interest depend on the balance, rate, fees and when you deposit or withdraw money.',
  url: 'https://www.thebeckerteam.com/loan-programs/mortgage-accelerator',
  provider: teamReference,
  areaServed: { '@type': 'State', name: 'Colorado' },
}

export default function MortgageAcceleratorPage() {
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
        <SectionBackdrop src="/images/mortgage-accelerator-hero.jpg" shade={0.6} position="center 55%" hero />
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Home Mortgage Accelerator
        </h1>
        <p className="text-white/80 max-w-xl mx-auto text-lg mb-8">
          Compare using a home equity line to pay down your mortgage with paying extra on a standard loan.
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

      {/* ── Feature bar ── */}
      <section className="bg-white py-7 px-6 border-b border-[#ede4cc]">
        <p
          className="text-center text-lg md:text-2xl leading-relaxed"
          style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
        >
          Built for strong cash flow&nbsp;&bull;&nbsp;Purchase or refinance&nbsp;&bull;&nbsp;Strategy-led review with The Becker Team
        </p>
      </section>

      {/* ── What This Strategy Does + Why It Matters ── */}
      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            data-reveal
            className="text-3xl md:text-5xl font-bold mb-5 text-center"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            What This Strategy Does — and Why It Matters
          </h2>
          <p className="prose-becker mb-12 text-gray-700 leading-relaxed max-w-3xl text-center mx-auto">
            With the Home Mortgage Accelerator, you deposit income into a home equity line and draw from it to pay bills. We can compare how that would work for your household with paying extra principal on a standard mortgage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                data-reveal
                data-delay={i * 80}
                className="rounded bg-white p-8 card-hover"
                style={{ border: '2px solid #1F2E2A' }}
              >
                <h3
                  className="strategy-reason-title text-lg font-semibold mb-3"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
                >
                  {r.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Is This Right For You? (unified section, image overlay) ── */}
      <section
        className="relative isolate bg-[#1F2E2A] py-16 md:py-24 px-6"
      >
        <SectionBackdrop src="/images/ma-coins-houses.jpg" shade={0.88} />
        <div className="max-w-5xl mx-auto">
          <h2
            data-reveal
            className="text-3xl md:text-5xl font-bold text-white mb-4 text-center"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Is This Strategy Right for You?
          </h2>
          <p className="text-white/70 text-sm leading-relaxed mb-12 max-w-2xl text-center mx-auto">
            We look at what you owe, how much you have left after expenses and how often you might need to borrow again. That helps us compare the strategy with your other options.
          </p>

          <div className="flex flex-col md:flex-row gap-12 md:gap-20">
            {/* Left: who fits */}
            <div className="flex-1">
              <p className="text-white/50 uppercase tracking-widest text-xs mb-6">You tend to be a strong fit if:</p>
              <div className="flex flex-col gap-4">
                {strongFit.map((item, i) => (
                  <div key={i} data-reveal data-delay={i * 70} className="flex items-start gap-4">
                    <div className="shrink-0 mt-1 rounded-full p-1" style={{ backgroundColor: '#B98942' }}>
                      <Check size={12} color="#fff" strokeWidth={3} />
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: what we review to find out */}
            <div className="flex-1">
              <p className="text-white/50 uppercase tracking-widest text-xs mb-6">Here is what we actually review:</p>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Current mortgage balance and rate, how far into the mortgage you are, monthly net income deposited, property taxes and insurance, auto payments, student loans, credit card and household spending, any other monthly obligations, and available savings or rainy-day reserves.
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                You do not need perfect numbers to start. A realistic snapshot is enough for an initial review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Strategy Review CTA ── */}
      <section
        className="py-16 md:py-20 px-6 text-center text-white"
        style={{ backgroundColor: '#1F2E2A' }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            data-reveal="fade"
            className="text-3xl md:text-5xl font-bold mb-5"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            See Whether Your Numbers Fit The Strategy
          </h2>
          <p data-reveal="fade" data-delay="100" className="text-white/80 mb-10 text-lg leading-relaxed">
            Answer a few quick questions and our team will review your cash flow, mortgage and goals
            to tell you whether this strategy is worth exploring.
          </p>
          <StrategyReviewModal>
            <span
              className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
              style={{ backgroundColor: '#1F2E2A', color: '#F5EFE6', border: '2px solid #F5EFE6' }}
            >
              Submit for a Strategy Review
            </span>
          </StrategyReviewModal>
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

      {/* ── Payoff example ── */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            data-reveal
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            Compare Payoff Options on a $425,000 Mortgage
          </h2>
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-6">
            One Month of Interest and Principal
          </p>
          <div className="prose-becker text-left mb-10">
            <p>
              We’ll show you how much of a payment goes to interest and how much pays down your home.
              See what changes when you put the same $8,500 toward the Accelerator and a traditional
              mortgage, and how paying every two weeks compares with paying extra principal.
            </p>
          </div>
          <Link
            href="/loan-programs/mortgage-accelerator/guide"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
            style={{ backgroundColor: '#1F2E2A', color: '#F5EFE6' }}
          >
            Read the Home Mortgage Accelerator Guide
          </Link>
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
            {/* Left: cream card */}
            <div className="flex-1 flex flex-col justify-between p-10 md:p-12" style={{ backgroundColor: '#F5EFE6' }}>
              <div className="prose-becker mb-10">
                <p>
                  Jamie Becker brings 21 years of mortgage experience, a financial advisory background
                  and experience owning real estate. He can help you compare how each loan would work
                  with your regular income, bills and savings.
                </p>
                <p>
                  We’ll compare the costs and how the payoff estimate changes if your income or expenses change.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-bronze-ink"
              >
                Learn More About Jamie <ChevronRight size={16} />
              </Link>
            </div>
            {/* Right: photo */}
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
          <ProgramReviews reviewers={['user4272651', '4belle1rose5']} />
        </div>
      </section>

      {/* ── Important Program Notes + Page Nav ── */}
      <section style={{ backgroundColor: '#F5EFE6' }} className="py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-xl font-bold mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            What affects your results?
          </h2>
          <p className="text-sm leading-relaxed italic" style={{ color: '#4a5e53' }}>
            This strategy is not a guarantee of savings, interest reduction or payoff timeline. Results vary
            based on borrower behavior, deposits, withdrawals, timing, rate, loan structure, program
            availability and lending guidelines.
          </p>
        </div>
        {/* Page navigation */}
        <div className="max-w-5xl mx-auto mt-10 flex justify-end">
          <Link
            href="/loan-programs/asset-qualifier-loans"
            className="inline-flex items-center gap-2 font-semibold"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            Asset Qualifier Loans <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section
        className="relative isolate bg-[#1F2E2A] py-24 md:py-36 px-6 text-white text-center"
      >
        <SectionBackdrop src="/images/cta-mountain.jpg" shade={0.55} />
        <h2
          data-reveal="fade"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Start with the Numbers. End with a Strategy.
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          If you want more than a generic refinance conversation, start with your scenario. The Becker Team
          can help you see whether this approach deserves a serious look.
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
