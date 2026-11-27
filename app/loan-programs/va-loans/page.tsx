import SectionBackdrop from '@/components/SectionBackdrop'
import { teamReference } from '@/lib/siteIdentity'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'
import ProgramReviews from '@/components/ProgramReviews'

export const metadata: Metadata = {
  title: 'Colorado VA Home Loans',
  description:
    'Explore Colorado VA purchase loans with Jamie Becker, NMLS #794730. Learn how service, entitlement, appraised value and funding fees affect your options.',
  alternates: { canonical: '/loan-programs/va-loans' },
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
    title: 'Low or No Down Payment',
    body: 'Eligible borrowers with full entitlement can often buy without a down payment when the price is within the home’s appraised value.',
  },
  {
    title: 'No Private Mortgage Insurance',
    body: 'VA purchase loans do not require monthly private mortgage insurance. If you compare loan offers, include the VA funding fee and any mortgage insurance quoted on the conventional loan.',
  },
  {
    title: 'Compare the Full Loan Cost',
    body: 'Ask for quotes using the same loan amount, term and lock period. Include the funding fee and any mortgage insurance when comparing a VA loan with other options.',
  },
  {
    title: 'VA Funding Fee',
    body: 'A one-time VA funding fee generally applies unless you qualify for an exemption. You can usually pay it at closing or add it to the loan.',
  },
]

const fitProfiles = [
  { label: 'Veterans', body: 'VA considers when and how long you served, your type of service and character of discharge. Qualifying service can include Guard and Reserve duty.' },
  { label: 'Active-duty service members', body: 'Current members of the Armed Forces who meet service length requirements can use their VA benefit while still serving.' },
  { label: 'Eligible surviving spouses', body: 'Certain surviving spouses can qualify based on the veteran’s service or circumstances of death. VA also has specific rules about remarriage.' },
  { label: 'Buyers considering no down payment', body: 'If you qualify without a down payment, remember to budget separately for closing costs and any funding fee you pay upfront.' },
]

const faqs = [
  {
    q: 'Who is eligible for a VA loan?',
    a: 'VA issues a Certificate of Eligibility (COE) based on your dates, type and length of service and, for veterans, character of discharge. National Guard and Reserve members may qualify. Some surviving spouses qualify under separate rules. The lender still checks credit, income and occupancy.',
  },
  {
    q: 'Is there really no down payment required?',
    a: 'Eligible buyers with full entitlement can usually buy with no down payment when the purchase price is within the VA appraised value. If the price exceeds the appraisal or you have only remaining entitlement, a down payment may be needed. Budget separately for closing costs.',
  },
  {
    q: 'What is the VA Funding Fee?',
    a: 'The funding fee is a one-time charge that you can pay at closing or finance. On a purchase it depends on your down payment and prior use of the benefit. Exempt groups include veterans receiving VA disability compensation for a service-connected disability. Ask the lender to verify your exemption.',
  },
  {
    q: 'Can I use my VA benefit more than once?',
    a: 'Yes. If you sold the home you bought with a VA loan and paid that loan in full, you can generally ask VA to restore the entitlement you used. If you still own that home or have an outstanding VA loan, we can check your Certificate of Eligibility to see what entitlement remains.',
  },
  {
    q: 'What types of properties can I buy with a VA loan?',
    a: 'A VA purchase loan can cover a house, a condo in a VA-approved project or a property with up to four units when you plan to live in one. If you’re looking at a condo, give us the project name early so we can check its approval before you make an offer.',
  },
  {
    q: 'Do VA loans have loan limits?',
    a: 'With full entitlement, VA does not set a county loan limit. Your lender still determines what you can borrow based on your finances and the appraisal. With remaining entitlement, the county limit helps determine the available VA guaranty and any down payment.',
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
    { '@type': 'ListItem', position: 3, name: 'VA Loans', item: 'https://www.thebeckerteam.com/loan-programs/va-loans' },
  ],
}

const loanJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LoanOrCredit',
  name: 'VA Loans',
  description: 'VA-backed home loans in Colorado for eligible veterans, service members and surviving spouses. Jamie Becker helps buyers compare lender rates and fees.',
  url: 'https://www.thebeckerteam.com/loan-programs/va-loans',
  provider: teamReference,
  areaServed: { '@type': 'State', name: 'Colorado' },
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
        className="relative isolate bg-[#1F2E2A] py-14 md:py-24 px-6 text-center text-white"
      >
        <SectionBackdrop src="/images/va-hero.jpg" shade={0.6} position="center 40%" hero />
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          VA Loans
        </h1>
        <p className="text-white/80 max-w-xl mx-auto text-lg mb-8">
          A primary-home loan for eligible service members, veterans and surviving spouses, with no monthly mortgage insurance and the possibility of buying with no down payment.
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
          VA-backed purchase loans&nbsp;&bull;&nbsp;Low or no down payment&nbsp;&bull;&nbsp;No private mortgage insurance
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
            Start with your Certificate of Eligibility to see what entitlement is available. Then ask for an estimate using the purchase price, any down payment and your funding fee status. It should show how much cash you need at closing and what you would pay each month.
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
                  If you’re comparing <Link href="/va-loans-denver" className="underline decoration-[#B98942] underline-offset-4">VA loans in Denver</Link>, check condo project approval before making an offer. For a move to Fort Carson, our <Link href="/colorado-springs-va-loans" className="underline decoration-[#B98942] underline-offset-4">Colorado Springs VA loan guide</Link> explains how to discuss PCS orders and your move-in date with your lender.
                </p>
                <p>
                  Jamie Becker brings 21 years of mortgage experience to every file, and our team is committed to making this benefit as clear and easy to use as it should be.
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
          <ProgramReviews reviewers={['missmelissab19', 'user4272651']} />
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
        className="relative isolate bg-[#1F2E2A] py-24 md:py-36 px-6 text-white text-center"
      >
        <SectionBackdrop src="/images/cta-mountain.jpg" shade={0.55} />
        <h2
          data-reveal="fade"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          See What Your VA Loan Benefit Can Cover
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          If you or your spouse served, talk with us about VA eligibility, the funding fee and what you’d need to bring to closing.
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
