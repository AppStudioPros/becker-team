import { beckerTeam } from '@/lib/siteIdentity'
import type { Metadata } from 'next'
import { jamieLicensedStates } from '@/lib/jamieLicenses'
import Link from 'next/link'
import Image from 'next/image'
import FaqAccordion from '@/components/FaqAccordion'
import SectionBackdrop from '@/components/SectionBackdrop'
import ZillowReviews from '@/components/ZillowReviews'
import GoogleReviews from '@/components/GoogleReviews'

export const metadata: Metadata = {
  title: { absolute: 'Jamie Becker, Denver Mortgage Broker | The Becker Team' },
  alternates: { canonical: '/' },
  description:
    'Work with Jamie Becker, a Colorado mortgage broker, to compare home loans for your first purchase, next home, or self-employed income.',
}

const homeFaqs = [
  {
    q: 'Should I get pre-approved before I start looking at homes?',
    a: 'If you’re ready to tour homes, it’s a good time to talk about pre-approval. We’ll review your income, savings and debts and talk through a monthly payment you’re comfortable with. A pre-approval letter can help you make an offer. Your lender will still need to approve the loan and the property.',
  },
  {
    q: 'How much cash will I need at closing?',
    a: 'Look for “Estimated Cash to Close” on the first page of your Loan Estimate. It accounts for your down payment and closing costs, along with any earnest money you’ve already paid and credits listed on the estimate. We can walk through the numbers with you before closing day.',
  },
  {
    q: 'Can I get a mortgage if I’m self-employed?',
    a: 'Yes. If you work for yourself, we’ll ask how you get paid. Some loans use tax returns to document your income, and some let you use personal or business bank statements. We’ll explain the options and which records the lender may need.',
  },
]

const loanProgramCells = [
  { title: 'Asset Qualifier Loans',     tagline: 'See how eligible assets can help you qualify',                          href: '/loan-programs/asset-qualifier-loans' },
  { title: 'Home Mortgage Accelerator',      tagline: 'See whether your cash flow could help you pay off your mortgage sooner', href: '/loan-programs/mortgage-accelerator' },
  { title: 'Conventional Loans',        tagline: 'Compare fixed and adjustable rates for your home purchase',       href: '/loan-programs/conventional-loans' },
  { title: 'FHA Loans',                 tagline: 'FHA-insured home loans with flexible credit requirements',                      href: '/loan-programs/fha-loans' },
  { title: 'VA Loans',                  tagline: 'Low or no down payment for eligible veterans and service members',        href: '/loan-programs/va-loans' },
  { title: 'Jumbo Loans',               tagline: 'Financing above your county’s conforming loan limit',                      href: '/loan-programs/jumbo-loans' },
  { title: 'Self-Employed Loans',       tagline: 'Mortgage options for business owners and independent workers',             href: '/loan-programs/self-employed-loans' },
  { title: 'Which Loan Fits?',      tagline: "Tell me about your plans, and I’ll help you compare your options.",              href: '/contact' },
]

const serviceAreaJsonLd = {
  '@context': 'https://schema.org',
  ...beckerTeam,
  description: 'Denver mortgage broker Jamie Becker (Individual NMLS #794730) specializes in VA, FHA, conventional, jumbo, self-employed and asset qualifier loans.',
  areaServed: [
    { '@type': 'City', name: 'Denver', containedInPlace: { '@type': 'State', name: 'Colorado' } },
    { '@type': 'City', name: 'Boulder', containedInPlace: { '@type': 'State', name: 'Colorado' } },
    { '@type': 'City', name: 'Fort Collins', containedInPlace: { '@type': 'State', name: 'Colorado' } },
    { '@type': 'City', name: 'Colorado Springs', containedInPlace: { '@type': 'State', name: 'Colorado' } },
    { '@type': 'City', name: 'Aurora', containedInPlace: { '@type': 'State', name: 'Colorado' } },
    { '@type': 'City', name: 'Lakewood', containedInPlace: { '@type': 'State', name: 'Colorado' } },
    { '@type': 'City', name: 'Arvada', containedInPlace: { '@type': 'State', name: 'Colorado' } },
    { '@type': 'City', name: 'Pueblo', containedInPlace: { '@type': 'State', name: 'Colorado' } },
    ...jamieLicensedStates.map(name => ({ '@type': 'State', name })),
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Mortgage Loan Programs',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'LoanOrCredit', name: 'VA Loans' } },
      { '@type': 'Offer', itemOffered: { '@type': 'LoanOrCredit', name: 'FHA Loans' } },
      { '@type': 'Offer', itemOffered: { '@type': 'LoanOrCredit', name: 'Conventional Loans' } },
      { '@type': 'Offer', itemOffered: { '@type': 'LoanOrCredit', name: 'Jumbo Loans' } },
      { '@type': 'Offer', itemOffered: { '@type': 'LoanOrCredit', name: 'Self-Employed Loans' } },
      { '@type': 'Offer', itemOffered: { '@type': 'LoanOrCredit', name: 'Asset Qualifier Loans' } },
      { '@type': 'Offer', itemOffered: { '@type': 'LoanOrCredit', name: 'Mortgage Accelerator' } },
    ],
  },
}

const speakableJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: 'https://www.thebeckerteam.com',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', 'p'],
  },
}


export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreaJsonLd) }} />

      {/* ── Hero ── */}
      <section
        className="relative isolate py-16 md:py-32 flex flex-col items-center justify-center text-center text-white px-6"
        style={{ backgroundColor: '#1F2E2A' }}
      >
        <SectionBackdrop src="/images/squarespace/hero-mountain.jpg" shade={0.65} hero />
        <h1
          className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Your Colorado Mortgage Expert
        </h1>
        <p
          className="text-lg md:text-xl max-w-2xl mb-8 text-white/90 leading-relaxed"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          <span className="mb-3 block">I’m Jamie Becker, a Denver mortgage broker with The Becker Team.</span>{' '}
          We help buyers, homeowners, and their advisors compare loan options, including ones
          that can work when your income or finances are hard to document.
        </p>

        {/* Closing timeline */}
        <a
          href="#fast-closings"
          className="gold-cta inline-block px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-10"
          style={{ backgroundColor: '#B98942' }}
        >
          How fast can I close?
        </a>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://2179191.my1003app.com/794730/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded btn-hover"
            style={{ backgroundColor: '#F5EFE6', color: '#1F2E2A' }}
          >
            Get Pre-Approved
          </a>
          <Link
            href="/contact"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded border-2 btn-hover"
            style={{ borderColor: '#B98942', color: '#fff' }}
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* ── Quick Access Cards ── */}
      <section style={{ backgroundColor: '#F5EFE6' }} className="py-14 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6" data-reveal="fade">
          {[
            {
              img: '/images/squarespace/quick-preapproved.jpg',
              label: 'Get Pre-Approved',
              href: 'https://2179191.my1003app.com/794730/register',
              external: true,
            },
            {
              img: '/images/squarespace/iStock-2239089166.jpg',
              label: 'Mortgage Calculator',
              href: '/mortgage-calculator',
              external: false,
            },
            {
              img: '/images/squarespace/quick-rates.jpg',
              label: 'Interest Rates',
              href: '/mortgage-interest-rates',
              external: false,
            },
          ].map((card) => {
            const inner = (
              <div className="relative group overflow-hidden rounded" style={{ height: '220px' }}>
                <Image
                  src={card.img}
                  alt=""
                  fill
                  sizes="(min-width: 1328px) 416px, (min-width: 768px) 33vw, calc(100vw - 3rem)"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(20,35,25,0.38)' }} />
                {/* Label + center-expanding underline */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="relative text-white uppercase tracking-widest text-base font-bold">
                    {card.label}
                    {/* Underline: hidden by default, expands from center on hover */}
                    <span
                      className="absolute bottom-0 left-1/2 right-1/2 h-[2px] transition-all duration-300 group-hover:left-0 group-hover:right-0"
                      style={{ backgroundColor: 'white' }}
                    />
                  </span>
                </div>
              </div>
            );
            return card.external ? (
              <a key={card.label} href={card.href} target="_blank" rel="noopener noreferrer">
                {inner}
              </a>
            ) : (
              <Link key={card.label} href={card.href}>
                {inner}
              </Link>
            );
          })}
        </div>
      </section>

      <ZillowReviews />

      {/* ── Loan Programs ── */}
      <section style={{ backgroundColor: '#F5EFE6' }} className="py-20 px-6">
        <h2
          data-reveal
          className="text-3xl md:text-5xl lg:text-6xl text-center mb-12"
          style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
        >
          Loan Programs
        </h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {loanProgramCells.map((cell, i) => (
            <Link
              key={cell.title}
              href={cell.href}
              data-reveal
              data-delay={i * 60}
              className="group block px-10 py-8 rounded transition-all card-hover-dark"
              style={{
                backgroundColor: 'rgba(31,46,42,0.88)',
                border: '1px solid rgba(31,46,42,0.5)',
              }}
            >
              <h3
                className="text-xl font-bold uppercase tracking-wide underline mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#F5EFE6' }}
              >
                {cell.title}
              </h3>
              <p className="text-sm text-center md:text-left" style={{ color: 'rgba(245,239,230,0.7)' }}>
                {cell.tagline}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Fast Closings ── */}
      <section
        id="fast-closings"
        className="relative isolate scroll-mt-24 py-16 md:py-28 px-6 text-white text-center"
        style={{ backgroundColor: '#1F2E2A' }}
      >
        <SectionBackdrop src="/images/squarespace/fast-closings-bg.jpg" shade={0.65} />
        <h2
          data-reveal="fade"
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Fast Closings
        </h2>
        <p className="uppercase tracking-widest text-sm mb-6 text-white/80">
          Before you make an offer
        </p>
        <p className="max-w-lg mx-auto text-white/90 mb-10 leading-relaxed">
          Tell us when you’d like to close. We’ll review your loan paperwork and help you plan for title work and any required appraisal, so you can put a realistic date in your offer.
        </p>
        <Link
          href="/home-loan-process-guide"
          className="inline-block uppercase tracking-widest text-sm font-semibold px-16 py-5 rounded btn-hover"
          style={{ backgroundColor: '#1F2E2A', color: '#F5EFE6', border: '2px solid #F5EFE6' }}
        >
          Our Process
        </Link>
      </section>

      <GoogleReviews />

      <section id="mortgage-faq" aria-labelledby="mortgage-faq-heading" style={{ backgroundColor: '#F5EFE6' }} className="scroll-mt-24 py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            id="mortgage-faq-heading"
            data-reveal
            className="text-3xl md:text-5xl font-bold text-center mb-10"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            Frequently Asked Questions
          </h2>
          <FaqAccordion items={homeFaqs} />
          <div className="text-center">
            <Link
              href="/faq"
              className="mt-8 inline-block rounded px-10 py-4 text-sm font-semibold uppercase tracking-widest btn-hover"
              style={{ backgroundColor: '#1F2E2A', color: '#F5EFE6' }}
            >
              View the Full Mortgage FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section
        className="relative isolate py-24 md:py-36 px-6 text-white text-center"
        style={{ backgroundColor: '#1F2E2A' }}
      >
        <SectionBackdrop src="/images/cta-mountain.jpg" shade={0.55} />
        <h2
          data-reveal="fade"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Ready to get started?
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Tell us what you’re planning. We’ll help you compare loan options and costs.
        </p>
        <a
          data-reveal="scale"
          data-delay="300"
          href="https://2179191.my1003app.com/794730/register"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
          style={{ backgroundColor: '#1F2E2A', color: '#F5EFE6', border: '2px solid #F5EFE6' }}
        >
          Get Pre-Approved Now
        </a>
      </section>
    </>
  )
}
