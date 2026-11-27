import SectionBackdrop from '@/components/SectionBackdrop'
import { teamReference } from '@/lib/siteIdentity'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'VA Home Loans in Colorado Springs',
  description:
    'Buying near Fort Carson or Peterson Space Force Base? Compare VA home loan rates and fees with Jamie Becker and see how VA eligibility and occupancy work.',
  alternates: { canonical: 'https://www.thebeckerteam.com/colorado-springs-va-loans' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'The Becker Team — VA Loans Colorado Springs',
  description: 'VA mortgage specialist serving veterans and service members in Colorado Springs, Fort Carson, Peterson SFB, Schriever SFB, and USAFA.',
  url: 'https://www.thebeckerteam.com/colorado-springs-va-loans',
  provider: teamReference,
  areaServed: [
    { '@type': 'City', name: 'Colorado Springs' },
    { '@type': 'AdministrativeArea', name: 'Fort Carson' },
    { '@type': 'AdministrativeArea', name: 'Peterson Space Force Base' },
    { '@type': 'AdministrativeArea', name: 'Schriever Space Force Base' },
    { '@type': 'AdministrativeArea', name: 'United States Air Force Academy' },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thebeckerteam.com' },
    { '@type': 'ListItem', position: 2, name: 'VA Loans Colorado Springs', item: 'https://www.thebeckerteam.com/colorado-springs-va-loans' },
  ],
}

const vaBenefits = [
  { title: 'Low or No Down Payment', body: 'Eligible borrowers with full entitlement can often purchase without a down payment if the appraisal supports the purchase price.' },
  { title: 'No Private Mortgage Insurance', body: 'VA purchase loans have no monthly private mortgage insurance. A one-time funding fee may apply, depending on your exemption status.' },
  { title: 'Compare VA Loan Rates', body: 'Each lender sets its own rate and fees. We’ll help you compare what you would pay at closing and each month.' },
  { title: 'Flexible Credit Requirements', body: 'VA sets no minimum credit score. Your lender reviews your credit history and income and may have its own credit score requirement.' },
  { title: 'Reusable Benefit', body: 'If you have used your benefit before, your Certificate of Eligibility helps the lender determine what entitlement is still available for another home.' },
  { title: 'No Prepayment Penalty', body: 'A VA-backed purchase loan has no early payoff penalty. If you send extra money, ask your servicer how to apply it directly to principal.' },
]

const faqs = [
  { q: 'Who is eligible for a VA loan in Colorado Springs?', a: 'VA considers your dates, length and type of service. Active-duty members, veterans and some Guard or Reserve members can qualify. Certain surviving spouses qualify under separate rules. Request a Certificate of Eligibility to establish your VA benefit. Your lender also reviews income, credit and occupancy.' },
  { q: 'Do I need a down payment for a VA loan?', a: 'With full entitlement, eligible buyers can generally buy with no down payment if the price is within the VA appraised value. An appraisal gap or remaining entitlement may require cash. VA purchase loans have no monthly mortgage insurance, but closing costs and a funding fee may apply.' },
  { q: 'What is the VA funding fee?', a: 'For a VA-backed purchase, the one-time funding fee ranges from 1.25% to 3.3% of the loan amount unless you qualify for an exemption. The fee depends on your down payment and prior use of the benefit. You can pay it at closing or finance it. Veterans receiving VA compensation for a service-connected disability are among those exempt.' },
  {
    q: 'Can I use a VA loan to buy near Fort Carson before I transfer there?',
    a: 'You may be able to buy a home near Fort Carson before a permanent change of station (PCS). You need a VA Certificate of Eligibility, and you must meet VA and lender requirements, including the rules for moving into the home as your primary residence. Share your orders and expected move-in date with your lender so they can review the timing before you set a closing date.',
  },
  {
    q: 'How soon do I need to move in after closing on a VA loan near Fort Carson?',
    a: 'The VA generally expects you to move in within 60 days of closing. A later move-in date may qualify if you can give a specific date and identify the event that will let you move in, such as reporting to Fort Carson. If you are on active duty and cannot move in on time, your spouse or dependent child may be able to meet the occupancy requirement.',
  },
  {
    q: 'How do I get a VA Certificate of Eligibility while stationed at Fort Carson?',
    a: 'You can request a Certificate of Eligibility (COE) online through VA.gov or ask your lender to request it. If you are on active duty, the VA asks for a statement of service signed by your commander, adjutant, or personnel officer. The COE confirms eligibility for the VA home loan benefit. Your lender still reviews your credit, income, and other loan requirements.',
  },
  { q: 'What are current VA mortgage rates in Colorado Springs?', a: 'VA lenders set their own rates, and pricing can change daily. Ask Jamie for quotes for the same loan amount and term so you can compare the interest rate, APR and upfront lender fees.' },
  { q: 'Can I use my VA loan benefit more than once?', a: 'Yes. You can request restoration of entitlement after selling the property and repaying the VA loan in full. Other restoration rules may apply. If you keep the property, ask the lender to check the entitlement available on your Certificate of Eligibility.' },
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

export default function ColoradoSpringsVaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section
        className="relative isolate bg-[#1F2E2A] py-28 md:py-40 px-6 text-white text-center"
      >
        <SectionBackdrop src="/images/va-hero.jpg" shade={0.6} position="center 40%" hero />
        <p className="text-sm uppercase tracking-widest font-semibold mb-4 text-white/70">Colorado Springs, Colorado</p>
        <h1
          className="text-4xl md:text-6xl font-bold mb-6"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          VA Loans for Colorado Springs Veterans
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80 leading-relaxed">
          Buying near Fort Carson or Peterson Space Force Base? We’ll help you compare VA loan offers and work through your move-in date if you have orders to relocate.
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

      {/* Feature bar */}
      <section className="bg-white py-5 px-6 border-b border-stone-200">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-semibold" style={{ color: '#1F2E2A' }}>
          <span>✦ Low or No Down Payment</span>
          <span>✦ No Private Mortgage Insurance</span>
          <span>✦ Compare VA Loan Options</span>
          <span>✦ Fort Carson · Peterson SFB · USAFA</span>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            data-reveal
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            Colorado Springs Is Military Country
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            If you’re buying near Fort Carson, Peterson Space Force Base, Schriever Space Force Base or the U.S. Air Force Academy, Jamie Becker (NMLS #794730) can help you compare VA loan options. We work with active-duty service members, veterans and military families across El Paso County and Colorado. If you’ve used a VA loan before, tell us so we can review your remaining entitlement and the cash you would need to close.
          </p>
        </div>
      </section>

      {/* Benefits grid */}
      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            data-reveal
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            VA Loan Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vaBenefits.map((b) => (
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

      {/* FAQ */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            data-reveal
            className="text-3xl md:text-5xl font-bold text-center mb-10"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            VA Loan FAQ — Colorado Springs
          </h2>
          <FaqAccordion items={faqs} />
          <div className="mt-6 text-sm text-gray-600">
            <p className="font-semibold">Official VA home loan guidance</p>
            <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
              <li><a className="underline" href="https://www.va.gov/housing-assistance/home-loans/loan-types/purchase-loan/">VA purchase loans</a></li>
              <li><a className="underline" href="https://www.va.gov/housing-assistance/home-loans/how-to-request-coe/">Request a Certificate of Eligibility</a></li>
              <li><a className="underline" href="https://department.va.gov/wp-content/uploads/2026/09/2026-Federal-Benefits-for-Veterans-Dependents-and-Survivors_web.pdf?v=429#page=59">VA occupancy requirements (PDF, page 59)</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mountain CTA */}
      <section
        className="relative isolate bg-[#1F2E2A] py-24 md:py-36 px-6 text-white text-center"
      >
        <SectionBackdrop src="/images/va-hero.jpg" shade={0.55} />
        <h2
          data-reveal="fade"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          You Earned This Benefit
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          The VA loan is one of the strongest home financing tools available. Let&apos;s put it to work for you in Colorado Springs.
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
