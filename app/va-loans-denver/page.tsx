import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'VA Loans Denver CO | Denver Veterans Home Loans | The Becker Team',
  description:
    'VA home loans for Denver metro veterans, active-duty service members, and surviving spouses. Zero down, no PMI. Buckley SFB, Fitzsimons veterans. Jamie Becker NMLS #794730.',
  alternates: { canonical: 'https://www.thebeckerteam.com/va-loans-denver' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'The Becker Team — VA Loans Denver',
  description: 'VA mortgage specialist serving veterans and active-duty service members in the Denver metro area.',
  url: 'https://www.thebeckerteam.com/va-loans-denver',
  telephone: '(720) 492-3335',
  email: 'Jamie@thebeckerteam.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '201 Columbine Street, Suite 300',
    addressLocality: 'Denver',
    addressRegion: 'CO',
    postalCode: '80206',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Denver' },
    { '@type': 'City', name: 'Aurora' },
    { '@type': 'City', name: 'Lakewood' },
    { '@type': 'City', name: 'Arvada' },
    { '@type': 'City', name: 'Westminster' },
    { '@type': 'City', name: 'Centennial' },
  ],
  founder: { '@type': 'Person', name: 'Jamie Becker', identifier: 'NMLS #794730' },
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
  { title: 'Zero Down Payment', body: 'VA loans require no down payment. In a metro where the median home price approaches $600,000, that saves Denver veterans $30,000-$60,000 in upfront cash versus a conventional loan.' },
  { title: 'No Private Mortgage Insurance', body: 'VA loans have no PMI at any down payment level. On a $550,000 purchase, that is roughly $200-$400 per month in savings compared to a conventional loan with less than 20% down.' },
  { title: 'Competitive Interest Rates', body: 'VA loans consistently carry some of the lowest rates available because the VA guaranty reduces lender risk. Jamie shops your VA loan across multiple wholesale lenders to find the best available rate.' },
  { title: 'Flexible Credit Guidelines', body: 'VA loans are more flexible on credit history than conventional programs. If you have had credit challenges during or after service, VA financing may still be available.' },
  { title: 'Reusable Benefit', body: 'Your VA entitlement can be used more than once. Many Denver veterans have used their benefit for 2-3 homes as they moved, upgraded, or relocated within the metro.' },
  { title: 'VA Funding Fee Exemptions', body: 'Veterans with a service-connected disability rated 10% or higher are exempt from the VA funding fee. This saves 1.25-3.3% of the loan amount at closing.' },
]

const faqs = [
  {
    q: 'Can I use a VA loan in Denver\'s competitive market?',
    a: 'Yes, and you should. The old perception that VA loans are slow or that sellers avoid VA offers is outdated. With The Becker Team, VA buyers get same-day pre-approval letters and 10-day close timelines. A clean VA pre-approval backed by a fast, experienced lender is competitive with any conventional offer. The key is having a lender who processes VA loans efficiently and communicates clearly with listing agents.',
  },
  {
    q: 'What is the VA loan limit in Denver?',
    a: 'For veterans with full entitlement (no active VA loan currently outstanding), there is effectively no VA loan limit. You can borrow above the conforming limit without a down payment. For veterans with reduced entitlement (you currently have an active VA loan or have not fully restored your entitlement from a previous use), county loan limits apply. Denver County\'s limit is $806,500 for 2026. Jamie will check your entitlement status and let you know exactly where you stand.',
  },
  {
    q: 'How do I compete with conventional buyers using a VA loan?',
    a: 'Three things make VA offers competitive in Denver: (1) a pre-approval letter from a lender with a strong VA track record, not just a generic pre-qualification; (2) a fast close timeline, The Becker Team targets 10 days; and (3) clear communication from your lender to the listing agent about the strength of your file. Many listing agents have outdated concerns about VA appraisals and timelines. A proactive lender resolves those concerns before they become objections.',
  },
  {
    q: 'Is there PMI on a VA loan in Denver?',
    a: 'No. VA loans never have Private Mortgage Insurance (PMI), regardless of your down payment amount. This is one of the strongest financial benefits of VA financing. On a $550,000 Denver home with zero down, skipping PMI saves roughly $200-$400 per month compared to a conventional loan without 20% down.',
  },
  {
    q: 'Who is eligible for a VA loan in the Denver metro?',
    a: 'VA loan eligibility requires minimum service time: 90 days active duty during wartime, 181 days during peacetime, 6 years in the Guard or Reserves, or being the surviving spouse of a service member who died in the line of duty. Many Denver-area veterans served at Buckley Space Force Base in Aurora, the former Fitzsimons Army Medical Center campus, or transitioned after service at installations nationwide. If you have a DD-214 or are currently serving, Jamie can verify your eligibility quickly.',
  },
  {
    q: 'Can I use a VA loan to buy a condo in Denver?',
    a: 'Yes, as long as the condo complex is VA-approved or can be approved. Many Denver metro condo complexes are already on the VA approved list. If yours is not, Jamie can help initiate the approval process. VA condo approval requires that the complex meet certain standards around owner occupancy, financial health, and insurance. It adds some steps but is usually workable.',
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
          Zero down. No PMI. Competitive rates for Denver metro veterans, active-duty service members, and surviving spouses. Buckley SFB, Fitzsimons, and veterans statewide.
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
          <span>✦ Zero Down Payment</span>
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
            Denver Has One of the Largest Veteran Populations in the West
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            The Denver metro is home to Buckley Space Force Base in Aurora, the former Fitzsimons Army Medical Center campus, and the VA Eastern Colorado Healthcare System. Thousands of veterans and active-duty members live and work throughout the metro, from Aurora and Centennial to Lakewood and Westminster. The VA loan is one of the most powerful mortgage products available: zero down payment, no PMI, and rates that are typically lower than conventional loans. But using it effectively in Denver's competitive market requires a lender who knows how to process VA loans quickly and position VA buyers to win. Jamie Becker (NMLS #794730) has 21+ years of experience working with military buyers across Colorado, with the speed and programs to make your VA offer as competitive as any conventional one.
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
