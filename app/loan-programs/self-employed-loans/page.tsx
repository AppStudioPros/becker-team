import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Self Employed Loans | The Becker Team',
  description:
    'Mortgage loans for self-employed borrowers, business owners and entrepreneurs. Qualify with 1 year of tax returns, bank statements, or a P&L — no W-2 required. Jamie Becker, NMLS #794730.',
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
    title: 'Qualify with Just One Year of Tax Returns',
    body: 'Instead of the standard 2-year requirement, self-employed borrowers may qualify using just one year of personal or business tax returns — ideal for newer businesses or those with improving income trends.',
  },
  {
    title: 'Alternative Documentation Accepted',
    body: 'No W-2? No problem. Qualifying options include 12-month rolling P&L statements, 12-24 months of bank statements, and asset depletion — so your income picture doesn\'t have to fit a conventional mold.',
  },
  {
    title: 'Flexible Debt-to-Income Calculations',
    body: 'We use calculations that reflect your actual cash flow and business reality — not just what shows up on a simplified tax return.',
  },
  {
    title: 'Broad Property and Loan Range',
    body: 'Available for primary residences, second homes and investment properties. Loan amounts up to $3 million with down payment options starting at 10% for qualified borrowers.',
  },
]

const qualPaths = [
  {
    title: 'Tax Return Program',
    body: 'Qualify with just one year of personal or business tax returns — perfect for newer businesses or those with improving income trends.',
  },
  {
    title: 'P&L Statement Option',
    body: 'Use a 12-month rolling Profit & Loss statement prepared by your CPA or accountant to demonstrate your business income.',
  },
  {
    title: 'Bank Statement Program',
    body: 'Qualify using 12-24 months of business or personal bank statements to show your actual cash flow and deposits.',
  },
  {
    title: 'Asset Depletion Option',
    body: 'Combine with our asset depletion program if you have substantial assets but variable income.',
  },
]

const fitProfiles = [
  { label: 'Freelancers and independent contractors', body: 'Your income is real — it just doesn\'t come with a W-2. We have qualification paths built around how you actually earn.' },
  { label: 'Small business owners', body: 'Whether you\'re a sole proprietor or run a growing operation, your business cash flow can count toward qualification.' },
  { label: 'Entrepreneurs with newer businesses', body: 'One year of tax returns instead of two means you don\'t have to wait as long to qualify.' },
  { label: 'High earners with complex tax returns', body: 'If your tax strategy minimizes income on paper, alternative documentation lets us look at the full financial picture.' },
]

const faqs = [
  {
    q: 'Do I need two years of self-employment history?',
    a: 'Not always. Our programs allow qualification with as little as one year of tax returns for borrowers who meet other qualifying criteria.',
  },
  {
    q: 'What documentation can I use instead of W-2s?',
    a: 'Depending on the program, you may qualify using one year of tax returns, a 12-month rolling P&L statement, 12-24 months of bank statements, or asset depletion calculations.',
  },
  {
    q: 'What is the P&L Statement Option?',
    a: 'A CPA or licensed accountant prepares a 12-month Profit & Loss statement that documents your business income. This can be used in place of tax returns to qualify.',
  },
  {
    q: 'What is the Bank Statement Program?',
    a: 'Instead of tax returns, we use 12-24 months of personal or business bank statements to calculate average monthly income based on actual deposits.',
  },
  {
    q: 'Can I use these programs for investment properties?',
    a: 'Yes. Self-employed loan programs are available for primary residences, second homes and investment properties, subject to program-specific down payment and reserve requirements.',
  },
  {
    q: 'What loan amounts are available?',
    a: 'Loan amounts up to $3 million are available through our self-employed programs, with down payment options starting at 10% for qualified borrowers.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Do I need two years of self-employment history?', acceptedAnswer: { '@type': 'Answer', text: 'Not always. Our programs allow qualification with as little as one year of tax returns for borrowers who meet other qualifying criteria.' } },
    { '@type': 'Question', name: 'What documentation can I use instead of W-2s?', acceptedAnswer: { '@type': 'Answer', text: 'Depending on the program, you may qualify using one year of tax returns, a 12-month rolling P&L statement, 12-24 months of bank statements, or asset depletion calculations.' } },
    { '@type': 'Question', name: 'What is the P&L Statement Option?', acceptedAnswer: { '@type': 'Answer', text: 'A CPA or licensed accountant prepares a 12-month Profit & Loss statement that documents your business income. This can be used in place of tax returns to qualify.' } },
    { '@type': 'Question', name: 'What is the Bank Statement Program?', acceptedAnswer: { '@type': 'Answer', text: 'Instead of tax returns, we use 12-24 months of personal or business bank statements to calculate average monthly income based on actual deposits.' } },
    { '@type': 'Question', name: 'Can I use these programs for investment properties?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Self-employed loan programs are available for primary residences, second homes and investment properties, subject to program-specific down payment and reserve requirements.' } },
    { '@type': 'Question', name: 'What loan amounts are available?', acceptedAnswer: { '@type': 'Answer', text: 'Loan amounts up to $3 million are available through our self-employed programs, with down payment options starting at 10% for qualified borrowers.' } }
  ],
}

export default function SelfEmployedLoansPage() {
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
          backgroundImage: 'linear-gradient(rgba(20,35,25,0.6), rgba(20,35,25,0.6)), url("/images/se-hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          backgroundColor: '#1F2E2A',
        }}
      >
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Self Employed Loans
        </h1>
        <p className="text-white/80 max-w-xl mx-auto text-lg mb-8">
          Mortgage options built for business owners and entrepreneurs — qualify with one year of tax returns, bank statements, or a P&L. No W-2 required.
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
          Qualify with 1 year of tax returns&nbsp;&bull;&nbsp;Alternative documentation accepted&nbsp;&bull;&nbsp;No W-2 required
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
            Self-employed borrowers often face an unfair disadvantage: their tax returns understate income on paper because a smart tax strategy is doing its job. Conventional lenders see that and say no. This program looks at the actual financial picture — through tax returns, bank statements, P&L statements, or assets — and finds a qualification path that reflects what you actually earn.
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
            Most self-employed borrowers can qualify through one of these four documentation paths. Our team reviews your situation and determines which fits best.
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
                <h4
                  className="text-lg font-semibold mb-3 text-white"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {q.title}
                </h4>
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
            If your income is real but your paperwork makes it hard to prove, this program was designed for you.
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
                  Self-employed files are more complex than standard W-2 loans — and they require a lender who understands the difference between what a tax return shows and what a borrower actually earns. Jamie Becker brings 21 years of mortgage experience and a financial advisory background to every file.
                </p>
                <p>
                  He knows how to read the full financial picture, select the right qualification path, and explain the process clearly. For self-employed borrowers, that combination makes a real difference.
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
          Your Income Is Real. Let&apos;s Prove It.
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
