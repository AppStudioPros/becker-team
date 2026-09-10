import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Asset Qualifier Loans | The Becker Team',
  description:
    'Qualify for a mortgage using your assets instead of traditional income documentation. Ideal for retirees, investors, and high-net-worth borrowers. Jamie Becker, NMLS #794730.',
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
    body: 'As low as 10% down with no employment verification required. Your assets do the talking — not your pay stubs.',
  },
  {
    title: 'Qualify on Your Balance Sheet',
    body: 'Only need 125% of the loan amount in assets. No income documentation, no W-2s, no tax return requirements.',
  },
  {
    title: 'No DTI. No Collateralization.',
    body: 'There is no debt-to-income calculation and your assets are never pledged or collateralized to secure the loan.',
  },
  {
    title: 'Built for Complex Financial Profiles',
    body: 'Designed for retirees, investors, and clients with tax-optimized returns who are financially strong but look difficult on paper.',
  },
]

const fitProfiles = [
  { label: 'High-net-worth borrowers', body: 'For clients whose assets tell a much stronger story than their taxable income.' },
  { label: 'Complex tax-return scenarios', body: 'A smart fit when traditional documentation becomes the obstacle.' },
  { label: 'Retired borrowers', body: 'Especially useful when the client has substantial investments but limited conventional income.' },
  { label: 'Buyers who value speed and simplicity', body: 'Ideal when eligible assets already support the file and a long underwriting process is unnecessary.' },
]

const steps = [
  { n: 1, body: 'Start with the scenario. Our team reviews the purchase or financing goal, timing and borrower profile.' },
  { n: 2, body: 'Review eligible assets. We look at the asset picture first — not just traditional income paperwork.' },
  { n: 3, body: 'Determine whether the program fits. If the balance sheet and structure line up, we map out next steps clearly.' },
  { n: 4, body: 'Move with streamlined documentation. For qualified borrowers, the process is designed to be simpler and cleaner than conventional underwriting.' },
]

const faqs = [
  {
    q: 'What is an Asset Qualifier loan?',
    a: 'It is a mortgage option that uses eligible assets rather than traditional income documentation for qualification.',
  },
  {
    q: 'What documentation is typically required?',
    a: 'In the current example, the file was qualified with asset statements only. Your exact documentation will depend on the program and your scenario.',
  },
  {
    q: 'Who tends to be a strong fit?',
    a: 'High-net-worth borrowers, retirees, and clients with complex tax returns are often strong fits.',
  },
  {
    q: 'How much in assets do I need?',
    a: 'Current materials highlight 125% of the loan amount in assets as a key benchmark, but exact requirements depend on the borrower and current program guidelines.',
  },
  {
    q: 'How many months of statements are required?',
    a: 'The current example used four months of portfolio statements. Our team will tell you exactly what applies to your situation.',
  },
  {
    q: 'How fast can this close?',
    a: 'Timelines vary, but one current example closed in 3 weeks.',
  },
  {
    q: 'Can this be used for a refinance?',
    a: 'This program is primarily positioned as a purchase-led solution, especially for borrowers who do not fit traditional underwriting well.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is an Asset Qualifier loan?', acceptedAnswer: { '@type': 'Answer', text: 'It is a mortgage option that uses eligible assets rather than traditional income documentation for qualification.' } },
    { '@type': 'Question', name: 'What documentation is typically required?', acceptedAnswer: { '@type': 'Answer', text: 'In the current example, the file was qualified with asset statements only. Your exact documentation will depend on the program and your scenario.' } },
    { '@type': 'Question', name: 'Who tends to be a strong fit?', acceptedAnswer: { '@type': 'Answer', text: 'High-net-worth borrowers, retirees, and clients with complex tax returns are often strong fits.' } },
    { '@type': 'Question', name: 'How much in assets do I need?', acceptedAnswer: { '@type': 'Answer', text: 'Current materials highlight 125% of the loan amount in assets as a key benchmark, but exact requirements depend on the borrower and current program guidelines.' } },
    { '@type': 'Question', name: 'How many months of statements are required?', acceptedAnswer: { '@type': 'Answer', text: 'The current example used four months of portfolio statements. Our team will tell you exactly what applies to your situation.' } },
    { '@type': 'Question', name: 'How fast can this close?', acceptedAnswer: { '@type': 'Answer', text: 'Timelines vary, but one current example closed in 3 weeks.' } },
    { '@type': 'Question', name: 'Can this be used for a refinance?', acceptedAnswer: { '@type': 'Answer', text: 'This program is primarily positioned as a purchase-led solution, especially for borrowers who do not fit traditional underwriting well.' } }
  ],
}

export default function AssetQualifierPage() {
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
          backgroundImage: 'linear-gradient(rgba(20,35,25,0.6), rgba(20,35,25,0.6)), url("/images/aq-hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundColor: '#1F2E2A',
        }}
      >
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Qualify with Assets, Not Income
        </h1>
        <p className="text-white/80 max-w-xl mx-auto text-lg mb-8">
          For high-net-worth borrowers, retirees and clients with complex tax returns — a simpler path to financing built around what you actually have.
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
          Minimal paperwork&nbsp;&bull;&nbsp;Built for complex financial profiles&nbsp;&bull;&nbsp;Strategy-led review with The Becker Team
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
            What This Program Does — and Why It Matters
          </h2>
          <p className="text-gray-700 leading-relaxed mb-12 max-w-3xl text-center mx-auto">
            Some borrowers are financially strong but look difficult on paper. A tax return that is highly optimized, a retirement that removed the paycheck, a portfolio that dwarfs the loan request — none of that shows up cleanly in a conventional file. Asset Qualifier starts with the balance sheet and builds from there, removing the documentation burden for the borrowers who need it least.
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

      {/* ── Is This Right for You? ── */}
      <section
        className="py-16 md:py-24 px-6"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,35,25,0.82), rgba(20,35,25,0.82)), url("/images/aq-dirt-road.jpg")',
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
            Is This Program Right for You?
          </h2>
          <p className="text-white/70 text-sm leading-relaxed mb-12 max-w-2xl text-center mx-auto">
            Asset Qualifier is not a universal fit — but for the right borrower, it removes friction that would otherwise block a strong financial profile from moving forward.
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
            No guesswork, no buried requirements. Here is exactly what happens when you start the conversation.
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
                  Jamie Becker brings 21 years in mortgages, experience as a financial advisor and real-world real estate ownership. That combination matters when the file is more about financial structure than standard documentation.
                </p>
                <p>
                  He understands how a balance sheet, tax strategy and real estate goal interact — and he knows how to explain it clearly. For the right borrower, that means less friction, faster clarity and a much better experience from the first conversation forward.
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
            One example from current Asset Qualifier materials shows how clean this process can be for the right borrower.
          </p>

          {/* Grid — explicit placement so equal row heights work */}
          <div className="grid grid-cols-3 grid-rows-3 gap-3">
            {/* Col 1 — rows 1-3 */}
            <div className="col-start-1 row-start-1 rounded bg-white p-5 flex flex-col gap-3" style={{ border: '2px solid #1F2E2A' }}>
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#1F2E2A' }}>Purchase Price</p>
              <p className="text-sm text-gray-600">$1,000,000</p>
            </div>
            <div className="col-start-1 row-start-2 rounded bg-white p-5 flex flex-col gap-3" style={{ border: '2px solid #1F2E2A' }}>
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#1F2E2A' }}>Loan Amount</p>
              <p className="text-sm text-gray-600">$800,000</p>
            </div>
            <div className="col-start-1 row-start-3 rounded bg-white p-5 flex flex-col gap-3" style={{ border: '2px solid #1F2E2A' }}>
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#1F2E2A' }}>Statements Required</p>
              <p className="text-sm text-gray-600">4 months of portfolio statements</p>
            </div>

            {/* Col 2 — rows 1-3 */}
            <div className="col-start-2 row-start-1 rounded bg-white p-5 flex flex-col gap-3" style={{ border: '2px solid #1F2E2A' }}>
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#1F2E2A' }}>Down Payment</p>
              <p className="text-sm text-gray-600">20%</p>
            </div>
            <div className="col-start-2 row-start-2 rounded bg-white p-5 flex flex-col gap-3" style={{ border: '2px solid #1F2E2A' }}>
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#1F2E2A' }}>Required Assets Post-Closing</p>
              <p className="text-sm text-gray-600">$1,008,000 (125% of loan)</p>
            </div>
            <div className="col-start-2 row-start-3 rounded bg-white p-5 flex flex-col gap-3" style={{ border: '2px solid #1F2E2A' }}>
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#1F2E2A' }}>Required Paperwork</p>
              <p className="text-sm text-gray-600">Asset statements only</p>
            </div>

            {/* Col 3 — amber timeline spans all 3 rows */}
            <div
              className="col-start-3 row-start-1 row-span-3 rounded flex flex-col items-center justify-center text-center p-6"
              style={{ backgroundColor: '#B98942' }}
            >
              <p className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-4">Timeline:</p>
              <p className="text-white/80 text-sm mb-2">Closed in</p>
              <p className="text-white font-bold leading-none" style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '5rem' }}>3</p>
              <p className="text-white font-bold text-3xl leading-tight" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>Weeks</p>
            </div>
          </div>

          {/* Bottom note */}
          <div
            className="mt-3 rounded bg-white px-6 py-4 text-center text-sm text-gray-600 italic"
            style={{ border: '2px solid #1F2E2A' }}
          >
            No tax returns, no income documents and no employment information.
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
          Let Your Balance Sheet Tell the Story
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          If your financial picture is strong but your paperwork is messy, The Becker Team can help you review whether Asset Qualifier is the right path.
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
