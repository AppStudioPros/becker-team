import SectionBackdrop from '@/components/SectionBackdrop'
import { teamReference } from '@/lib/siteIdentity'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'
import ProgramReviews from '@/components/ProgramReviews'

export const metadata: Metadata = {
  title: 'Colorado Asset Qualifier Loans',
  description:
    'Explore asset-based mortgages in Colorado with Jamie Becker. See which accounts we review and how our Asset Qualifier loan differs from an asset depletion loan.',
  alternates: { canonical: '/loan-programs/asset-qualifier-loans' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Asset Qualifier Mortgage Loans',
  description: 'Mortgage qualification using eligible assets rather than traditional income documentation.',
  provider: { '@type': 'Person', name: 'Jamie Becker', identifier: 'NMLS #794730' },
  areaServed: 'Colorado',
  url: 'https://www.thebeckerteam.com/loan-programs/asset-qualifier-loans',
}

const highlights = [
  {
    title: 'Low Down Payment Entry',
    body: 'Eligible buyers may be able to put as little as 10% down. The lender reviews eligible assets without requiring employment verification.',
  },
  {
    title: 'Qualify on Your Balance Sheet',
    body: 'We compare your eligible assets after closing with a benchmark of 125% of your loan amount. You can qualify without W-2s or tax returns.',
  },
  {
    title: 'No DTI. No Collateralization.',
    body: 'There is no debt-to-income calculation and your assets are never pledged or collateralized to secure the loan.',
  },
  {
    title: 'An Option for Retirees and Investors',
    body: 'This can help retirees, investors and other buyers whose tax returns don’t show the savings or investments they can access.',
  },
]

const fitProfiles = [
  { label: 'High-net-worth borrowers', body: 'This can be an option if you have substantial savings or investments and limited taxable income.' },
  { label: 'Complex tax-return scenarios', body: 'Ask whether your eligible assets can be used if your tax returns are difficult to use for a conventional loan.' },
  { label: 'Retired borrowers', body: 'Especially useful when the client has substantial investments but limited conventional income.' },
  { label: 'Buyers keeping assets after closing', body: 'We look at what you’ll still have available after the down payment and closing costs.' },
]

const steps = [
  { n: 1, body: 'Tell us what you want to finance, what it costs and when you plan to close.' },
  { n: 2, body: 'We’ll review your accounts and check which available funds the lender can count.' },
  { n: 3, body: 'We’ll compare the amount left in your accounts after closing with the benchmark for the loan you want.' },
  { n: 4, body: 'If the program looks like a fit, we’ll tell you which statements and other documents the lender needs to review.' },
]

const faqs = [
  {
    q: 'What is an Asset Qualifier loan?',
    a: 'Our Asset Qualifier is an asset-based mortgage for buyers who can document enough eligible funds after closing. We review the accounts you own, what you can access and how much you’ll use for the purchase. That can help if your pay stubs or tax returns tell only part of your financial story.',
  },
  {
    q: 'Which account statements do I need, and how many months should I gather?',
    a: 'Start with recent bank, brokerage or retirement statements that show your name, account balances and any limits on withdrawals. The purchase example on this page used four months of portfolio statements. We’ll confirm how much history the lender needs for your accounts and which pages to include before you gather them.',
  },
  {
    q: 'Who tends to be a strong fit?',
    a: 'A retiree with substantial savings and a modest monthly pension is one example. If you’re buying a home in Colorado, we can look at what will remain in your accounts after the down payment and closing costs. That helps us see whether qualifying on assets makes sense for your purchase.',
  },
  {
    q: 'How much in assets do I need?',
    a: 'Our benchmark is 125% of the loan amount in eligible assets left after closing. For an $800,000 loan, that works out to $1 million. The money you spend on your down payment and closing costs comes out first, so we’ll check what portion of your remaining balances can count.',
  },
  {
    q: 'What credit score do I need?',
    a: 'The credit requirement depends on the lender and the loan terms. Having enough assets after closing covers one part of the review. Share the loan amount, your planned down payment and your credit history, and we can check the applicable minimum before you make an offer.',
  },
  {
    q: 'Is an Asset Qualifier loan the same as an asset depletion loan?',
    a: 'They use different calculations. Our Asset Qualifier looks at how much eligible money you’ll have left after closing and compares that balance with your loan amount. An asset depletion or asset utilization loan calculates monthly qualifying income from eligible assets. The lender’s rules determine which balances count and how they’re treated.',
  },
  {
    q: 'How fast can this close?',
    a: 'A closing date depends on when the lender can verify your accounts, review the property and finish underwriting. If you have a date in mind, share it when we first talk. We’ll check which documents you already have and what still needs to happen before you commit to a date in your offer.',
  },
  {
    q: 'Can this be used for a refinance?',
    a: 'We generally discuss the Asset Qualifier with buyers. If you already own your home, tell us what you owe, the rate on your current loan and what you want to accomplish by refinancing. We can review your accounts and check which refinance options are available for your situation.',
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
    { '@type': 'ListItem', position: 3, name: 'Asset Qualifier Loans', item: 'https://www.thebeckerteam.com/loan-programs/asset-qualifier-loans' },
  ],
}

const loanJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LoanOrCredit',
  name: 'Asset Qualifier Loans',
  description: 'Asset-based mortgage qualification for borrowers with significant assets but non-traditional income. Colorado. NMLS #794730.',
  url: 'https://www.thebeckerteam.com/loan-programs/asset-qualifier-loans',
  provider: teamReference,
  areaServed: { '@type': 'State', name: 'Colorado' },
}

export default function AssetQualifierPage() {
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
        <SectionBackdrop src="/images/aq-hero.jpg" shade={0.6} position="center 40%" hero />
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Qualify with Assets, Not Income
        </h1>
        <p className="text-white/80 max-w-xl mx-auto text-lg mb-8">
          An option for buyers and retirees who have eligible savings or investments and want to use them to qualify for a mortgage.
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
          Asset statements&nbsp;&bull;&nbsp;Funds available after closing&nbsp;&bull;&nbsp;Loan review with The Becker Team
        </p>
      </section>

      {/* ── What This Program Does — Strategic Highlights ── */}
      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            data-reveal
            className="text-3xl md:text-5xl font-bold mb-5 text-center"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            How an Asset-Based Mortgage Works
          </h2>
          <p className="text-gray-700 leading-relaxed mb-12 max-w-3xl text-center mx-auto">
            If you’ve retired or your income varies from year to year, you may have substantial investments and little income on your tax return. An asset depletion loan can use those investments to calculate monthly income. With our Asset Qualifier loan, we look at how much you’ll have left in eligible accounts after closing.
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

      {/* ── Is This Right for You? ── */}
      <section
        className="relative isolate bg-[#1F2E2A] py-16 md:py-24 px-6"
      >
        <SectionBackdrop src="/images/aq-dirt-road.jpg" shade={0.82} />
        <div className="max-w-5xl mx-auto">
          <h2
            data-reveal
            className="text-3xl md:text-5xl font-bold text-white mb-4 text-center"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Is This Program Right for You?
          </h2>
          <p className="text-white/70 text-sm leading-relaxed mb-12 max-w-2xl text-center mx-auto">
            This may be worth comparing if you’ll have substantial savings or investments after you pay your down payment and closing costs.
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

      {/* ── How The Asset Qualifier Review Works ── */}
      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            data-reveal
            className="text-3xl md:text-5xl font-bold mb-5 text-center"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            How The Asset Qualifier Review Works
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-12 max-w-2xl text-center mx-auto">
            If you’re comparing asset utilization loans, two questions are worth asking up front. Which accounts count, and how much of each balance can you use? Here’s how we review your accounts for our Asset Qualifier program.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {steps.map((s, i) => (
              <div
                key={s.n}
                data-reveal
                data-delay={i * 80}
                className="rounded bg-white p-8 flex gap-5 items-start card-hover"
                style={{ border: '2px solid #1F2E2A' }}
              >
                <span
                  className="shrink-0 text-3xl font-bold leading-none"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#B98942' }}
                >
                  {s.n}
                </span>
                <p className="text-sm text-gray-600 leading-relaxed pt-1">{s.body}</p>
              </div>
            ))}
          </div>

          <div id="eligible-assets" className="mx-auto mt-12 max-w-3xl scroll-mt-28 rounded bg-white p-6 text-center md:p-8" style={{ border: '2px solid #1F2E2A' }}>
            <h3 className="mb-3 text-2xl font-bold" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
              Which accounts can I use for an asset-based mortgage?
            </h3>
            <p className="mx-auto mb-5 max-w-xl leading-relaxed text-gray-700">
              We start with the accounts you own and the funds you can access. We typically review three kinds of accounts.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Bank accounts</strong> such as checking, savings and money market accounts.</li>
              <li><strong>Investment accounts</strong> holding stocks, bonds, mutual funds or exchange-traded funds.</li>
              <li><strong>Retirement accounts</strong> such as IRAs and vested 401(k) balances.</li>
            </ul>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-gray-700">
              Your statements help us determine which funds count and how much will still be available after your down payment and closing costs.
            </p>
          </div>
        </div>
      </section>

      {/* ── Real-World Example ── */}
      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            data-reveal
            className="text-3xl md:text-5xl font-bold mb-5 text-center"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            Real-World Example
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-10 text-center max-w-xl mx-auto">
            One buyer financed a $1 million purchase with 20% down. The 125% asset benchmark for the $800,000 loan is $1 million in eligible assets after closing.
          </p>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:grid-rows-3">
            {/* Col 1 — rows 1-3 */}
            <div className="col-start-1 row-start-1 flex flex-col gap-3 rounded bg-white p-3 sm:p-5" style={{ border: '2px solid #1F2E2A' }}>
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#1F2E2A' }}>Purchase Price</p>
              <p className="text-sm text-gray-600">$1,000,000</p>
            </div>
            <div className="col-start-1 row-start-2 flex flex-col gap-3 rounded bg-white p-3 sm:p-5" style={{ border: '2px solid #1F2E2A' }}>
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#1F2E2A' }}>Loan Amount</p>
              <p className="text-sm text-gray-600">$800,000</p>
            </div>
            <div className="col-start-1 row-start-3 flex flex-col gap-3 rounded bg-white p-3 sm:p-5" style={{ border: '2px solid #1F2E2A' }}>
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#1F2E2A' }}>Statements Used</p>
              <p className="text-sm text-gray-600">4 months of portfolio statements</p>
            </div>

            {/* Col 2 — rows 1-3 */}
            <div className="col-start-2 row-start-1 flex flex-col gap-3 rounded bg-white p-3 sm:p-5" style={{ border: '2px solid #1F2E2A' }}>
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#1F2E2A' }}>Down Payment</p>
              <p className="text-sm text-gray-600">20%</p>
            </div>
            <div className="col-start-2 row-start-2 flex flex-col gap-3 rounded bg-white p-3 sm:p-5" style={{ border: '2px solid #1F2E2A' }}>
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#1F2E2A' }}>Asset Benchmark After Closing</p>
              <p className="text-sm text-gray-600">$1,000,000</p>
            </div>
            <div className="col-start-2 row-start-3 flex flex-col gap-3 rounded bg-white p-3 sm:p-5" style={{ border: '2px solid #1F2E2A' }}>
              <p className="text-xs font-semibold uppercase tracking-wide [overflow-wrap:anywhere]" style={{ color: '#1F2E2A' }}>Documentation Used</p>
              <p className="text-sm text-gray-600">Asset statements only</p>
            </div>

            {/* Timeline below the cards on phones, beside them on wider screens */}
            <div
              className="col-span-2 flex flex-col items-center justify-center rounded p-6 text-center sm:col-span-1 sm:col-start-3 sm:row-span-3 sm:row-start-1"
              style={{ backgroundColor: '#B98942' }}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#1F2E2A]">Timeline:</p>
              <p className="mb-2 text-sm text-[#1F2E2A]">Closed in</p>
              <p className="text-white font-bold leading-none" style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '5rem' }}>3</p>
              <p className="text-white font-bold text-3xl leading-tight" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>Weeks</p>
            </div>
          </div>

          <div id="colorado-example" className="mx-auto mt-12 max-w-2xl scroll-mt-28 text-center">
            <h3 className="mb-4 text-2xl font-bold md:text-3xl" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
              Buying a home in Loveland after retirement
            </h3>
            <p className="mb-4 leading-relaxed text-gray-700">
              If you’re retired and shopping in Loveland, how much would you need to keep in your accounts after closing? Consider a $486,000 home, close to the $485,726 median sale price across all home types in Loveland from August through October 2026.
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">
              With 25% down, you’d put <strong>$121,500</strong> toward the purchase and borrow <strong>$364,500</strong>. At 125% of that loan amount, the benchmark is <strong>$455,625</strong> in eligible assets after closing.
            </p>
            <p className="leading-relaxed text-gray-700">
              If you plan to use your investment or retirement accounts, we’d review the balance you can access after paying the down payment and closing costs. The money you spend at closing can’t also count toward the $455,625.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-16 md:py-20 px-6">
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
                  Jamie Becker brings 21 years in mortgages, experience as a financial advisor and firsthand experience owning real estate.
                </p>
                <p>
                  He can help you work out how much cash you’d need to bring to closing and how much would remain in your accounts to qualify.
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
          <ProgramReviews reviewers={['4belle1rose5', 'Dina Mckinley']} />
        </div>
      </section>

      {/* ── Important Program Notes + Nav ── */}
      <section style={{ backgroundColor: '#F5EFE6' }} className="py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-xl font-bold mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            Important Program Notes
          </h2>
          <p className="text-sm leading-relaxed italic" style={{ color: '#4a5e53' }}>
            Loan approval is subject to product availability, borrower profile, current guidelines, lender approval, asset verification, borrower eligibility and underwriting review. Terms, timelines, documentation and eligibility vary by scenario.
          </p>
        </div>
        <div className="max-w-5xl mx-auto mt-10 flex justify-between items-center">
          <Link
            href="/loan-programs/mortgage-accelerator"
            className="inline-flex items-center gap-2 font-semibold"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            <ChevronLeft size={18} /> Home Mortgage Accelerator
          </Link>
          <Link
            href="/loan-programs/conventional-loans"
            className="inline-flex items-center gap-2 font-semibold"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            Conventional Loans <ChevronRight size={18} />
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
          See If Your Assets Can Help You Qualify
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Tell us what you plan to buy and which accounts you’d use. We can review which funds may count.
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
