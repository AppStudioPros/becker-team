import { teamReference } from '@/lib/siteIdentity'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Westminster, CO Mortgage Broker and Home Loans',
  description:
    'Buying in Westminster? See how the county loan limit, your down payment and the type of home you choose can affect your loan options.',
  alternates: { canonical: 'https://www.thebeckerteam.com/westminster-mortgage' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'The Becker Team — Westminster Colorado Mortgage Broker',
  description: 'Local mortgage broker serving Westminster, Broomfield, Thornton, and the Denver-Boulder corridor.',
  url: 'https://www.thebeckerteam.com/westminster-mortgage',
  provider: teamReference,
  areaServed: [
    { '@type': 'City', name: 'Westminster' },
    { '@type': 'City', name: 'Broomfield' },
    { '@type': 'City', name: 'Thornton' },
    { '@type': 'City', name: 'Northglenn' },
    { '@type': 'City', name: 'Federal Heights' },
    { '@type': 'City', name: 'Commerce City' },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thebeckerteam.com' },
    { '@type': 'ListItem', position: 2, name: 'Westminster Mortgage', item: 'https://www.thebeckerteam.com/westminster-mortgage' },
  ],
}

const programs = [
  { label: 'Conventional Loans', desc: "Compare conventional loan options for a home in Westminster or Broomfield, including how your down payment changes monthly costs.", href: '/loan-programs/conventional-loans' },
  { label: 'FHA Loans', desc: "3.5% down and flexible credit — a great fit for Thornton and Westminster first-time buyers entering the market.", href: '/loan-programs/fha-loans' },
  { label: 'VA Loans', desc: "Eligible veterans and service members in the north Denver metro may qualify with no down payment.", href: '/loan-programs/va-loans' },
  { label: 'Jumbo Loans', desc: "For a Westminster home, compare the loan amount after your down payment with the limit for the county where the property sits.", href: '/loan-programs/jumbo-loans' },
  { label: 'Self-Employed Loans', desc: "Bank statement programs for Westminster tech workers, contractors, and business owners who prefer alternatives to traditional income documentation.", href: '/loan-programs/self-employed-loans' },
  { label: 'Asset Qualifier Loans', desc: "Ask whether eligible cash and investments can help you qualify if your income is hard to document.", href: '/loan-programs/asset-qualifier-loans' },
]

const faqs = [
  { q: 'What costs should I compare when shopping in Westminster?', a: "If you’re comparing listings along US 36, look at the payment, property taxes, insurance and any HOA dues for each address. A lower asking price can still come with higher monthly costs." },
  { q: 'What are current mortgage rates in Westminster, CO?', a: 'Your rate depends on your loan amount, credit, down payment and the terms you choose. We can compare quotes for the same lock period and show how much you would pay upfront for each rate.' },
  { q: 'Do you offer VA loans in Westminster and Thornton?', a: 'Yes. VA loans are available for eligible veterans, active-duty service members, and surviving spouses throughout the north Denver metro including Westminster, Thornton, and Northglenn. Eligible buyers can often purchase without a down payment or monthly mortgage insurance. A funding fee may apply.' },
  { q: 'Can tech workers in Broomfield qualify for special mortgage programs?', a: "Possibly. If you’re a contractor or some of your pay comes from stock or bonuses, show Jamie how you’re paid and which records you have. We can check what lenders may count before you set a purchase budget." },
  { q: 'How long does it take to close a mortgage in Westminster, CO?', a: 'The timing depends on underwriting, any required appraisal and title work. Share the seller’s proposed date with Jamie so you can plan for those steps before you sign.' },
  { q: 'Do you serve Broomfield, Thornton, and Northglenn?', a: 'Yes. The Becker Team serves all of the north Denver metro — Westminster, Broomfield, Thornton, Northglenn, Federal Heights, Commerce City, and surrounding communities.' },
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

export default function WestminsterMortgagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative py-28 md:py-40 px-6 text-white text-center" style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}>
        <p className="text-sm uppercase tracking-widest font-semibold mb-4 text-white/70">Westminster, Colorado</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Westminster Mortgage Broker
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80 leading-relaxed">
          Compare home loans for Westminster, Broomfield, Thornton and the Denver-Boulder corridor with Jamie Becker.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://2179191.my1003app.com/794730/register" target="_blank" rel="noopener noreferrer"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-12 py-5 rounded btn-hover"
            style={{ backgroundColor: '#1c3023', color: '#F5EFE6', border: '2px solid #F5EFE6' }}>
            Get Pre-Approved
          </a>
          <Link href="/contact"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-12 py-5 rounded btn-hover"
            style={{ backgroundColor: 'transparent', color: '#F5EFE6', border: '2px solid #F5EFE6' }}>
            Talk to Jamie
          </Link>
        </div>
      </section>

      <section className="bg-white py-5 px-6 border-b border-stone-200">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-semibold" style={{ color: '#1F2E2A' }}>
          <span>✦ Denver-Boulder Corridor Mortgage Broker</span>
          <span>✦ Westminster Home Loans</span>
          <span>✦ Purchase Pre-Approval</span>
          <span>✦ 21+ Years Experience</span>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            The Denver-Boulder Corridor&apos;s Mortgage Expert
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            If your pay includes stock or bonuses, ask which income the lender can use before you set a purchase budget. Jamie Becker (NMLS #794730) can help you review the records you have, compare lenders and see how much cash you would need to buy in Westminster or Broomfield.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Westminster Mortgage Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((p) => (
              <Link key={p.label} href={p.href} className="block bg-white rounded-xl p-6 border border-stone-200 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-0.5 flex-shrink-0" style={{ color: '#1F2E2A' }} />
                  <div>
                    <p className="font-bold mb-1" style={{ color: '#1F2E2A', fontFamily: '"Playfair Display", Georgia, serif' }}>{p.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#4a5e53' }}>{p.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Why Westminster Buyers Choose The Becker Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Tech Corridor Expertise', body: "If you earn bonuses, stock compensation or contract income, we can help you identify the pay history and records a lender will review." },
              { title: 'Multiple Lender Access', body: 'Jamie compares rates, lender fees and loan terms from multiple wholesale lenders, including options for higher loan amounts.' },
              { title: 'First-Time Buyer Programs', body: "If you’re buying your first home in Westminster or Thornton, look at how an FHA loan or down payment assistance would change the cash you need at closing. Eligibility varies by program." },
              { title: 'Pre-Approval and Closing', body: 'Jamie can review the documents needed for pre-approval and check a proposed closing date when you’re ready to make an offer.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <Check size={22} className="flex-shrink-0 mt-1" style={{ color: '#1F2E2A' }} />
                <div>
                  <p className="font-bold mb-1" style={{ color: '#1F2E2A' }}>{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#4a5e53' }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 data-reveal className="text-3xl md:text-5xl font-bold text-center mb-10" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Westminster Mortgage FAQ
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="relative py-24 md:py-36 px-6 text-white text-center" style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}>
        <h2 data-reveal="fade" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Ready to Buy in Westminster?
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Start your pre-approval or ask what to budget for a home between Denver and Boulder.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://2179191.my1003app.com/794730/register" target="_blank" rel="noopener noreferrer"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
            style={{ backgroundColor: '#1c3023', color: '#F5EFE6', border: '2px solid #F5EFE6' }}>
            Get Pre-Approved
          </a>
          <Link href="/contact"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
            style={{ backgroundColor: 'transparent', color: '#F5EFE6', border: '2px solid #F5EFE6' }}>
            Talk to Jamie
          </Link>
        </div>
        <p className="mt-8 text-xs text-white/50">Jamie Becker NMLS #794730 | Xpert Home Lending NMLS #2179191 | 201 Columbine St Suite 300, Denver CO 80206</p>
      </section>
    </>
  )
}
