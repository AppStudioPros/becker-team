import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Check, ChevronRight } from 'lucide-react'
import StrategyReviewModal from '@/components/StrategyReviewModal'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Home Mortgage Accelerator Strategy | The Becker Team',
  description:
    'A cash-flow-driven mortgage strategy for homeowners with strong monthly net deposits. Use your cash flow intentionally to pay down your mortgage faster. Jamie Becker, NMLS #794730.',
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
    body: 'If you are 7 to 10 years from retirement, we can help you model whether your current mortgage path is still the best one, and change gears if needed.',
  },
  {
    title: 'Make monthly cash flow work harder',
    body: 'Instead of only focusing on rate, our team helps you see how deposits, spending, and structure affect the full cost of the loan over time.',
  },
  {
    title: 'Keep flexibility',
    body: 'This is designed for borrowers who want a more active payoff approach without feeling locked into a one-note plan.',
  },
  {
    title: 'See the math first',
    body: 'We review the numbers and compare scenarios so you can decide based on clarity, not concepts.',
  },
]

const strongFit = [
  'You consistently deposit meaningful net income each month.',
  'You usually maintain positive monthly cash flow.',
  'You prefer a strategy conversation over a generic mortgage quote.',
  'You want to compare a faster payoff path before retirement.',
  'You want to model a purchase or refinance through the lens of cash flow.',
  'You are a financial advisor or real estate professional with a cash-flow-strong client who needs someone who can review the numbers strategically and give a direct answer on whether this structure fits.',
]

const faqs = [
  {
    q: 'What exactly is the Home Mortgage Accelerator?',
    a: 'It is a cash-flow-driven mortgage strategy designed for borrowers with strong monthly net deposits. The goal is to use your actual financial flow more intentionally than a standard set-it-and-forget-it mortgage.',
  },
  {
    q: 'Who is this a good fit for?',
    a: 'It tends to fit best for borrowers with strong, consistent net cash flow, disciplined spending habits and a serious interest in paying down their mortgage faster.',
  },
  {
    q: 'Can this work for a purchase or just a refinance?',
    a: 'This can be positioned for both purchase and refinance scenarios, depending on the borrower and the opportunity.',
  },
  {
    q: 'Have I seen this advertised as paying off a 30-year mortgage in 5-7 years?',
    a: 'No. That came from one illustrative comparison based on specific assumptions. Your results depend on your numbers, timing and behavior.',
  },
  {
    q: 'Will you recommend this even if it does not fit?',
    a: 'No. If the strategy does not fit your goals or cash-flow profile, our team will tell you that directly.',
  },
  {
    q: 'What information do I need to get started?',
    a: 'A realistic snapshot of your mortgage, monthly deposits, major expenses, available savings and payoff goals.',
  },
]

export default function MortgageAcceleratorPage() {
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
          backgroundImage: 'linear-gradient(rgba(20,35,25,0.6), rgba(20,35,25,0.6)), url("/images/mortgage-accelerator-hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 55%',
          backgroundColor: '#1F2E2A',
        }}
      >
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Home Mortgage Accelerator
        </h1>
        <p className="text-white/80 max-w-xl mx-auto text-lg mb-8">
          A strategic approach to eliminating your mortgage faster and building equity sooner
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
            Most mortgages are passive. You make the payment and let time do the rest. This approach is different — for the right borrower, it uses the way money already moves through your household to attack the mortgage more intentionally. Below are the four reasons disciplined homeowners take it seriously.
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
                <h4
                  className="text-lg font-semibold mb-3"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
                >
                  {r.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Is This Right For You? (unified section, image overlay) ── */}
      <section
        className="py-16 md:py-24 px-6"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,35,25,0.88), rgba(20,35,25,0.88)), url("/images/ma-coins-houses.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#1F2E2A',
        }}
      >
        <div className="max-w-5xl mx-auto">
          <h2
            data-reveal
            className="text-3xl md:text-5xl font-bold text-white mb-4 text-center"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Is This Strategy Right for You?
          </h2>
          <p className="text-white/70 text-sm leading-relaxed mb-12 max-w-2xl text-center mx-auto">
            This works best for a specific type of borrower. Before recommending anything, our team looks at your full financial picture to see whether the structure actually fits — not just whether you qualify.
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
            {/* Left: cream card */}
            <div className="flex-1 flex flex-col justify-between p-10 md:p-12" style={{ backgroundColor: '#F5EFE6' }}>
              <div className="prose-becker mb-10">
                <p>
                  Jamie Becker brings 21 years of mortgage experience, a financial advisory background
                  and hands-on real estate ownership. He approaches this as a broader financial
                  conversation, not just a product sale. The Home Mortgage Accelerator strategy is not
                  about finding the lowest advertised rate, it is about understanding how the right loan
                  structure interacts with the way a financially disciplined household actually operates.
                </p>
                <p>
                  Our goal is simple: help you compare clearly, decide intelligently and move only if
                  the strategy truly makes sense for you.
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
            {/* Right: photo */}
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

      {/* ── See a Real Example ── */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            data-reveal
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            See a Real Home Mortgage Accelerator Example
          </h2>
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-6">
            See How the Strategy Can Change the Numbers
          </p>
          <div className="prose-becker text-left mb-10">
            <p>
              Every homeowner&apos;s situation is different. Rather than relying on theory, we build
              personalized comparisons that show how different mortgage structures can affect interest
              paid, payoff timeline, and monthly cash flow. Below is an example of one modeled
              scenario. It isn&apos;t a promise of results. It&apos;s an illustration of what can happen when
              the right borrower uses the right strategy.
            </p>
          </div>
          <a
            href="/mortgage-accelerator-example.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
            style={{ backgroundColor: '#B98942', color: '#fff' }}
          >
            Review and Download Here
          </a>
        </div>
      </section>

      {/* ── Important Program Notes + Page Nav ── */}
      <section style={{ backgroundColor: '#F5EFE6' }} className="py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-xl font-bold mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            Important Program Notes
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
