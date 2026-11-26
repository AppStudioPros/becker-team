import { teamReference } from '@/lib/siteIdentity'
import type { Metadata } from 'next'
import Link from 'next/link'
import { dollars, oneUnitLimits } from '@/lib/conformingLimits'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'VA Home Loans for Denver Veterans',
  description:
    'Explore VA purchase loans in Denver, including Certificate of Eligibility requirements, funding fee exemptions, condos and down payment options.',
  alternates: { canonical: 'https://www.thebeckerteam.com/va-loans-denver' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'The Becker Team — VA Loans Denver',
  description: 'VA mortgage specialist serving veterans and active-duty service members in the Denver metro area.',
  url: 'https://www.thebeckerteam.com/va-loans-denver',
  provider: teamReference,
  areaServed: [
    { '@type': 'City', name: 'Denver' },
    { '@type': 'City', name: 'Aurora' },
    { '@type': 'City', name: 'Lakewood' },
    { '@type': 'City', name: 'Arvada' },
    { '@type': 'City', name: 'Westminster' },
    { '@type': 'City', name: 'Centennial' },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thebeckerteam.com' },
    { '@type': 'ListItem', position: 2, name: 'VA Loans Denver', item: 'https://www.thebeckerteam.com/va-loans-denver' },
  ],
}

const benefits = [
  { title: 'Buying with No Down Payment', body: 'With full entitlement, eligible buyers can often finance a home up to its appraised value without a down payment. If the agreed price is higher, you may need cash for the difference.' },
  { title: 'No Private Mortgage Insurance', body: 'VA loans have no monthly private mortgage insurance. Compare the funding fee, closing costs and monthly payment with your conventional loan estimate.' },
  { title: 'Compare VA Loan Rates', body: 'VA guarantees part of the loan. Each lender sets its rate and fees. Compare written estimates for the same purchase price, loan amount and term.' },
  { title: 'Credit and Income Review', body: 'VA sets no minimum credit score. Lenders may set their own minimum and must assess credit history, income and your ability to repay.' },
  { title: 'Using a Previous VA Benefit', body: 'If you already used a VA loan, your Certificate of Eligibility shows the entitlement available for another purchase. Ask about restoring entitlement if you sold the home and repaid the prior loan.' },
  { title: 'VA Funding Fee Exemptions', body: 'Veterans receiving VA compensation for a service-connected disability are among those exempt. Have your lender confirm your status before including the fee in your closing costs.' },
]

const faqs = [
  {
    q: 'Can I use a VA loan in Denver\'s competitive market?',
    a: 'Yes. A lender can review your Certificate of Eligibility, income and credit before you make an offer. Share the proposed closing date so your lender can check the appraisal schedule and remaining underwriting steps.',
  },
  {
    q: 'What is the VA loan limit in Denver?',
    a: `For borrowers with full entitlement, VA does not set a county loan limit. Your lender still reviews what you can afford. With remaining entitlement, the county limit is part of the guaranty calculation. Denver County’s 2026 one-unit limit is ${dollars.format(oneUnitLimits.Denver[2026])}. We can review your Certificate of Eligibility and whether a down payment is needed.`,
  },
  {
    q: 'How do I compete with conventional buyers using a VA loan?',
    a: 'Ask for a pre-approval based on your documents. If you are buying a condo, check the project’s VA approval early. Your lender can explain the financing timeline to your agent before you set the deadlines in your offer.',
  },
  {
    q: 'Is there PMI on a VA loan in Denver?',
    a: 'No. VA purchase loans have no monthly private mortgage insurance. A one-time funding fee may apply unless you qualify for an exemption. Your Loan Estimate shows the other costs due at closing.',
  },
  {
    q: 'Who is eligible for a VA loan in the Denver metro?',
    a: 'The same VA rules apply nationwide. Eligibility depends on when, how long and in what capacity you served, including qualifying Guard or Reserve service. Some surviving spouses qualify under separate rules. VA issues the Certificate of Eligibility, and the lender reviews credit, income and occupancy.',
  },
  {
    q: 'Can I use a VA loan to buy a condo in Denver?',
    a: 'The condo must be in a VA-approved project. Give the lender the project name and address before you make an offer. If approval is pending or needs to be requested, ask what that means for your closing date.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function VaLoansDenverPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section
        className="relative py-28 md:py-40 px-6 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}
      >
        <p className="text-sm uppercase tracking-widest font-semibold mb-4 text-white/70">Denver, Colorado</p>
        <h1
          className="text-4xl md:text-6xl font-bold mb-6"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          VA Loans for Denver Veterans
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80 leading-relaxed">
          Buying a primary home in the Denver metro? Check your VA entitlement, compare lender offers and see whether you can buy with no down payment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://2179191.my1003app.com/794730/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-12 py-5 rounded btn-hover"
            style={{ backgroundColor: '#1F2E2A', color: '#F5EFE6', border: '2px solid #F5EFE6' }}
          >
            Get Pre-Approved
          </a>
          <Link
            href="/contact"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-12 py-5 rounded btn-hover"
            style={{ backgroundColor: 'transparent', color: '#F5EFE6', border: '2px solid #F5EFE6' }}
          >
            Talk to Jamie
          </Link>
        </div>
      </section>

      <section className="bg-white py-5 px-6 border-b border-stone-200">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-semibold" style={{ color: '#1F2E2A' }}>
          <span>✦ Low or No Down Payment</span>
          <span>✦ No Private Mortgage Insurance</span>
          <span>✦ Competitive VA Rates</span>
          <span>✦ Buckley SFB · Fitzsimons Veterans</span>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            data-reveal
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            Buying a Home Near Buckley Space Force Base
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            If you are relocating to Buckley Space Force Base in Aurora, bring your orders and expected move-in date when you compare Denver-area homes. Your lender can check occupancy timing, your available entitlement and whether you will need cash for an appraisal gap. For a condo, ask about VA project approval before you agree to a closing date.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            data-reveal
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            VA Loan Benefits for Denver Buyers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-xl p-6 border border-stone-200">
                <div className="flex gap-3">
                  <Check size={20} className="mt-0.5 flex-shrink-0" style={{ color: '#1F2E2A' }} />
                  <div>
                    <p className="font-bold mb-1" style={{ color: '#1F2E2A', fontFamily: '"Playfair Display", Georgia, serif' }}>{b.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#4a5e53' }}>{b.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            data-reveal
            className="text-3xl md:text-5xl font-bold text-center mb-10"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            VA Loan FAQ — Denver Metro
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section
        className="relative py-24 md:py-36 px-6 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}
      >
        <h2
          data-reveal="fade"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          You Earned This Benefit
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          The VA loan is one of the strongest home financing tools available. Let Jamie put it to work for you in Denver.
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
            href="/loan-programs/va-loans"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
            style={{ backgroundColor: 'transparent', color: '#F5EFE6', border: '2px solid #F5EFE6' }}
          >
            Learn About VA Loans
          </Link>
        </div>
        <p className="mt-8 text-xs text-white/50">Jamie Becker NMLS #794730 | Xpert Home Lending NMLS #2179191 | 201 Columbine St Suite 300, Denver CO 80206</p>
      </section>
    </>
  )
}
