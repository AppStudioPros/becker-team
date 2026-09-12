import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Best VA Mortgage Rates Colorado | VA Loans Colorado Springs | The Becker Team',
  description:
    'VA home loans for veterans, active-duty service members and eligible surviving spouses. No down payment, no PMI, competitive rates. Jamie Becker, NMLS #794730.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'VA Mortgage Loans',
  description: 'Exclusive home loan benefit for veterans, active-duty service members and eligible surviving spouses.',
  provider: { '@type': 'Person', name: 'Jamie Becker', identifier: 'NMLS #794730' },
  areaServed: 'Colorado',
  url: 'https://www.thebeckerteam.com/loan-programs/va-loans',
}

const highlights = [
  {
    title: 'No Down Payment Required',
    body: 'Eligible borrowers can purchase a home with zero down — one of the most significant financial benefits available to veterans and active-duty service members.',
  },
  {
    title: 'No Private Mortgage Insurance',
    body: 'VA loans do not require PMI, regardless of down payment. That eliminates a monthly cost that conventional borrowers without 20% equity must carry.',
  },
  {
    title: 'Competitive Rates and Flexible Terms',
    body: 'VA-backed loans typically offer competitive interest rates and flexible credit and income guidelines compared to conventional financing.',
  },
  {
    title: 'VA Funding Fee in Place of Insurance',
    body: 'Instead of monthly PMI, most VA borrowers pay a one-time funding fee at closing. It can often be rolled into the loan — and some veterans are exempt entirely.',
  },
]

const fitProfiles = [
  { label: 'Veterans', body: 'Honorably discharged veterans who meet minimum service requirements are eligible for this benefit.' },
  { label: 'Active-duty service members', body: 'Current members of the Armed Forces who meet service length requirements can use their VA benefit while still serving.' },
  { label: 'Eligible surviving spouses', body: 'Unremarried surviving spouses of veterans who died in service or from a service-connected disability may qualify.' },
  { label: 'Buyers who want to maximize purchasing power', body: 'Zero down payment means more capital preserved — a meaningful advantage for buyers who qualify.' },
]

const faqs = [
  {
    q: 'Who is eligible for a VA loan?',
    a: 'Veterans, active-duty service members and eligible surviving spouses who meet minimum service requirements may qualify. Eligibility is confirmed through a Certificate of Eligibility (COE) from the VA.',
  },
  {
    q: 'Is there really no down payment required?',
    a: 'In most cases, yes. Eligible VA borrowers can purchase a primary residence with zero down payment, subject to the loan amount and lender guidelines.',
  },
  {
    q: 'What is the VA Funding Fee?',
    a: 'The funding fee is a one-time charge paid at closing in lieu of mortgage insurance. The amount varies based on your down payment, loan type and whether it is your first VA loan use. Some veterans — including those with service-connected disabilities — are exempt.',
  },
  {
    q: 'Can I use my VA benefit more than once?',
    a: 'Yes. VA loan entitlement can be restored and reused. If you have paid off a previous VA loan and sold the property, you may be able to restore your full entitlement.',
  },
  {
    q: 'What types of properties can I buy with a VA loan?',
    a: 'VA loans are for primary residences only. This includes single-family homes, eligible condos, and multi-unit properties up to four units if the borrower occupies one unit.',
  },
  {
    q: 'Do VA loans have loan limits?',
    a: 'For borrowers with full entitlement, there is no VA loan limit. For borrowers with reduced entitlement, limits may apply. Your lender can confirm how entitlement affects your specific scenario.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Who is eligible for a VA loan?', acceptedAnswer: { '@type': 'Answer', text: 'Veterans, active-duty service members and eligible surviving spouses who meet minimum service requirements may qualify. Eligibility is confirmed through a Certificate of Eligibility (COE) from the VA.' } },
    { '@type': 'Question', name: 'Is there really no down payment required?', acceptedAnswer: { '@type': 'Answer', text: 'In most cases, yes. Eligible VA borrowers can purchase a primary residence with zero down payment, subject to the loan amount and lender guidelines.' } },
    { '@type': 'Question', name: 'What is the VA Funding Fee?', acceptedAnswer: { '@type': 'Answer', text: 'The funding fee is a one-time charge paid at closing in lieu of mortgage insurance. The amount varies based on your down payment, loan type and whether it is your first VA loan use. Some veterans — including those with service-connected disabilities — are exempt.' } },
    { '@type': 'Question', name: 'Can I use my VA benefit more than once?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. VA loan entitlement can be restored and reused. If you have paid off a previous VA loan and sold the property, you may be able to restore your full entitlement.' } },
    { '@type': 'Question', name: 'What types of properties can I buy with a VA loan?', acceptedAnswer: { '@type': 'Answer', text: 'VA loans are for primary residences only. This includes single-family homes, eligible condos, and multi-unit properties up to four units if the borrower occupies one unit.' } },
    { '@type': 'Question', name: 'Do VA loans have loan limits?', acceptedAnswer: { '@type': 'Answer', text: 'For borrowers with full entitlement, there is no VA loan limit. For borrowers with reduced entitlement, limits may apply. Your lender can confirm how entitlement affects your specific scenario.' } }
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thebeckerteam.com' },
    { '@type': 'ListItem', position: 2, name: 'Loan Programs', item: 'https://www.thebeckerteam.com/loan-programs' },
    { '@type': 'ListItem', position: 3, name: 'VA Loans', item: 'https://www.thebeckerteam.com/loan-programs/va-loans' },
  ],
}

const loanJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LoanOrCredit',
  name: 'VA Loans',
  description: 'Best VA mortgage rates in Colorado for veterans, active-duty service members, and eligible surviving spouses. Serving Colorado Springs, Fort Carson, Peterson SFB, Denver, and statewide. No down payment required. Jamie Becker NMLS #794730.',
  url: 'https://www.thebeckerteam.com/loan-programs/va-loans',
  provider: {
    '@type': 'FinancialService',
    name: 'The Becker Team - Xpert Home Lending',
    url: 'https://www.thebeckerteam.com',
    telephone: '(720) 492-3335',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '201 Columbine Street, Suite 300',
      addressLocality: 'Denver',
      addressRegion: 'CO',
      postalCode: '80206',
      addressCountry: 'US',
    },
  },
  areaServed: [
    { '@type': 'State', name: 'Colorado' },
    { '@type': 'State', name: 'Georgia' },
    { '@type': 'State', name: 'Oregon' },
  ],
}

export default function VaLoansPage() {
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
        className="relative py-14 md:py-24 px-6 text-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,35,25,0.6), rgba(20,35,25,0.6)), url("/images/va-hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundColor: '#1F2E2A',
        }}
      >
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          VA Loans
        </h1>
        <p className="text-white/80 max-w-xl mx-auto text-lg mb-8">
          An exclusive home loan benefit for veterans, active-duty service members and eligible surviving spouses — with no down payment and no PMI.
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
          Exclusive benefit for veterans&nbsp;&bull;&nbsp;No down payment required&nbsp;&bull;&nbsp;No private mortgage insurance
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
            The VA loan benefit exists because of service. It is one of the most powerful mortgage options available — no down payment, no private mortgage insurance, and competitive rates backed by the Department of Veterans Affairs. For eligible borrowers, it can meaningfully change what homeownership looks like financially.
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
            Who This Benefit Is For
          </h2>
          <p className="text-white/70 text-sm leading-relaxed mb-12 max-w-2xl text-center mx-auto">
            VA loan eligibility is tied to military service. If you or your spouse served, this benefit may be waiting to be used.
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
                  VA loans have their own rules, timelines and documentation requirements. Working with a lender who understands the process makes a difference — especially for first-time VA buyers navigating the Certificate of Eligibility and funding fee for the first time.
                </p>
                <p>
                  Jamie Becker brings 21 years of mortgage experience to every file, and our team is committed to making this benefit as clear and easy to use as it should be.
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
            VA loan eligibility and approval are subject to Certificate of Eligibility verification, lender guidelines, credit review and property requirements. Funding fee amounts and exemptions vary. Terms and program availability subject to change.
          </p>
        </div>
        <div className="max-w-5xl mx-auto mt-10 flex justify-between items-center">
          <Link
            href="/loan-programs/fha-loans"
            className="inline-flex items-center gap-2 font-semibold"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            <ChevronLeft size={18} /> FHA Loans
          </Link>
          <Link
            href="/loan-programs/jumbo-loans"
            className="inline-flex items-center gap-2 font-semibold"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            Jumbo Loans <ChevronRight size={18} />
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
          You Earned This Benefit. Let&apos;s Use It.
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          If you or your spouse served, a VA loan may be one of the most powerful financial tools available to you. Let The Becker Team walk you through exactly what you qualify for.
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
