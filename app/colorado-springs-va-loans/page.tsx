import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'VA Loans Colorado Springs | Best VA Mortgage Rates CO | The Becker Team',
  description:
    'VA home loans for veterans and active-duty service members at Fort Carson, Peterson SFB, Schriever AFB, and USAFA. Zero down payment, no PMI, best VA mortgage rates in Colorado Springs. Jamie Becker NMLS #794730.',
  alternates: { canonical: 'https://www.thebeckerteam.com/colorado-springs-va-loans' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'The Becker Team — VA Loans Colorado Springs',
  description: 'VA mortgage specialist serving veterans and service members in Colorado Springs, Fort Carson, Peterson SFB, Schriever AFB, and USAFA.',
  url: 'https://www.thebeckerteam.com/colorado-springs-va-loans',
  telephone: '(720) 492-3335',
  email: 'Jamie@thebeckerteam.com',
  areaServed: [
    { '@type': 'City', name: 'Colorado Springs' },
    { '@type': 'AdministrativeArea', name: 'Fort Carson' },
    { '@type': 'AdministrativeArea', name: 'Peterson Space Force Base' },
    { '@type': 'AdministrativeArea', name: 'Schriever Space Force Base' },
    { '@type': 'AdministrativeArea', name: 'United States Air Force Academy' },
  ],
  founder: { '@type': 'Person', name: 'Jamie Becker', identifier: 'NMLS #794730' },
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
  { title: 'Zero Down Payment', body: 'Eligible veterans can purchase a home with no down payment — preserving cash for moving, furnishing, or emergency reserves.' },
  { title: 'No Private Mortgage Insurance', body: 'VA loans have no PMI requirement regardless of down payment amount — a significant monthly savings over conventional loans.' },
  { title: 'Competitive Interest Rates', body: 'VA loans typically carry some of the lowest interest rates available because the government guaranty reduces lender risk.' },
  { title: 'Flexible Credit Requirements', body: 'VA loans are often more forgiving on credit history than conventional programs — important for service members transitioning out.' },
  { title: 'Reusable Benefit', body: 'Your VA entitlement can be used multiple times. Many Colorado Springs veterans have used their VA loan benefit for 2-3 homes over their career.' },
  { title: 'No Prepayment Penalty', body: 'Pay off your loan early without penalty — helpful if you receive BAH allowances or want to build equity faster.' },
]

const faqs = [
  { q: 'Who is eligible for a VA loan in Colorado Springs?', a: 'VA loan eligibility requires meeting service requirements: 90 days active duty during wartime, 181 days during peacetime, 6 years in the Guard/Reserves, or being a surviving spouse of a service member who died in the line of duty. Most active-duty members at Fort Carson, Peterson SFB, Schriever AFB, and USAFA qualify.' },
  { q: 'Do I need a down payment for a VA loan?', a: 'No. Eligible veterans and service members can purchase a home with zero down payment using a VA loan. There are no PMI requirements. The only upfront cost unique to VA loans is the funding fee, which can be financed into the loan and is waived for veterans with service-connected disabilities.' },
  { q: 'What is the VA funding fee?', a: 'The VA funding fee is a one-time fee paid to the VA at closing. It ranges from 1.25% to 3.3% of the loan amount depending on your down payment and whether it\'s your first VA loan use. It can be financed into the loan. Veterans with service-connected disabilities rated 10% or higher are exempt.' },
  { q: 'Can I use a VA loan to buy in Colorado Springs while stationed elsewhere?', a: 'Yes. You can use your VA loan benefit to purchase in Colorado Springs even if you\'re currently stationed at another installation — many veterans choose this ahead of PCS orders or to establish a home base in the Springs.' },
  { q: 'What are current VA mortgage rates in Colorado Springs?', a: 'VA rates change daily. Because the VA guaranty reduces lender risk, VA rates are typically among the lowest available. Contact Jamie for a current quote — we work with multiple wholesale lenders to find the most competitive VA rate for your situation and credit profile.' },
  { q: 'Can I use my VA loan benefit more than once?', a: 'Yes. Your VA entitlement is reusable. If you\'ve paid off a previous VA loan or sold the home, your entitlement is typically restored. Many Colorado Springs veterans have used their VA benefit for multiple homes throughout their careers.' },
]

export default function ColoradoSpringsVaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section
        className="relative py-28 md:py-40 px-6 text-white text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,35,25,0.60), rgba(20,35,25,0.60)), url("/images/va-hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundColor: '#1F2E2A',
        }}
      >
        <p className="text-sm uppercase tracking-widest font-semibold mb-4 text-white/70">Colorado Springs, Colorado</p>
        <h1
          className="text-4xl md:text-6xl font-bold mb-6"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          VA Loans for Colorado Springs Veterans
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80 leading-relaxed">
          Zero down. No PMI. Best VA mortgage rates in Colorado. Serving Fort Carson, Peterson SFB, Schriever AFB, USAFA, and veterans statewide.
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
          <span>✦ Zero Down Payment</span>
          <span>✦ No Private Mortgage Insurance</span>
          <span>✦ Competitive VA Mortgage Rates</span>
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
            Colorado Springs is home to one of the largest concentrations of military installations in the United States — Fort Carson, Peterson Space Force Base, Schriever Space Force Base, and the United States Air Force Academy. That means VA loans are a critical part of the local housing market, and the best lenders here understand them deeply. Jamie Becker (NMLS #794730) has worked with active-duty members, veterans, and military families throughout El Paso County and statewide. The VA loan benefit is one of the most powerful tools available — and most users never fully use it.
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
        </div>
      </section>

      {/* Mountain CTA */}
      <section
        className="relative py-24 md:py-36 px-6 text-white text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,35,25,0.55), rgba(20,35,25,0.55)), url("/images/va-hero.jpg")',
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
          You Earned This Benefit
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          The VA loan is one of the strongest home financing tools available. Let's put it to work for you in Colorado Springs.
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
