import { teamReference } from '@/lib/siteIdentity'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Colorado CHFA Loans and Down Payment Assistance',
  description:
    'Compare Colorado Housing and Finance Authority home loans, income limits, grants and deferred second mortgages with Jamie Becker, NMLS #794730.',
  alternates: { canonical: 'https://www.thebeckerteam.com/chfa-loan-colorado' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'The Becker Team — CHFA Loan Colorado',
  description: 'Colorado mortgage guidance on CHFA income limits, first mortgages and down payment assistance.',
  url: 'https://www.thebeckerteam.com/chfa-loan-colorado',
  provider: teamReference,
  areaServed: [{ '@type': 'State', name: 'Colorado' }],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thebeckerteam.com' },
    { '@type': 'ListItem', position: 2, name: 'CHFA Loan Colorado', item: 'https://www.thebeckerteam.com/chfa-loan-colorado' },
  ],
}

const benefits = [
  { title: 'Down Payment and Closing Costs', body: 'With an eligible first mortgage, the standard CHFA grant can cover up to 3% of the first mortgage and the deferred second loan up to 4%. Each is capped at $25,000.' },
  { title: 'Compare the Interest Rate', body: 'CHFA charges a higher first mortgage rate when you use its assistance. Ask for both quotes and compare your monthly payment with the cash you would save at closing.' },
  { title: 'Eligible First Mortgages', body: 'SmartStep Plus can pair assistance with an eligible FHA, VA or USDA purchase mortgage. CHFA also has conventional options. The participating lender checks which program fits your application.' },
  { title: 'Buying in Colorado', body: 'The home must be your primary residence. Income limits depend on the program. Some programs also limit the purchase price for your county.' },
  { title: 'Options for Repeat Buyers', body: 'Some CHFA programs accept repeat buyers. FirstStep generally requires first-time buyer status, with exceptions for qualified veterans and homes in designated targeted areas.' },
  { title: 'Homebuyer Education', body: 'CHFA requires approved homebuyer education before closing. You can take the course online or in person through a participating housing counseling agency.' },
]

const faqs = [
  {
    q: 'What is a CHFA loan?',
    a: 'A CHFA participating lender originates the mortgage under a Colorado Housing and Finance Authority program. Some first mortgages can be paired with a grant or a deferred second mortgage to help cover down payment and closing costs.',
  },
  {
    q: 'Who qualifies for CHFA in Colorado?',
    a: 'You must plan to use the home as your primary residence and meet the requirements of the specific program and first mortgage. A participating lender reviews credit, income, your required contribution, applicable purchase price limits and homebuyer education.',
  },
  {
    q: 'What are the income limits for CHFA in 2026?',
    a: 'Under the November 2, 2026 schedule, Denver County FirstStep has a $144,000 gross annual income limit for a one- or two-person household outside a targeted area, and a purchase price limit of $832,750. SmartStep uses a $178,920 qualifying-income limit regardless of household size. Your program, county and address determine which limits apply.',
  },
  {
    q: 'How much down payment assistance does CHFA provide?',
    a: 'On a $400,000 first mortgage, the standard grant can provide up to $12,000 with no repayment. The standard 0% deferred second mortgage can provide up to $16,000, with no monthly payments. Each option has a $25,000 cap. The second loan becomes due upon sale, refinance, first mortgage payoff or when the home stops being your primary residence.',
  },
  {
    q: 'Does CHFA work with FHA and VA loans?',
    a: 'Yes. SmartStep Plus includes eligible FHA and VA purchase loans. For a VA loan, the lender must also verify VA entitlement and occupancy. Ask a participating lender for an estimate showing the first mortgage rate, assistance amount and cash due at closing.',
  },
  {
    q: 'Do I need to be a first-time buyer to use CHFA?',
    a: 'It depends on the program. SmartStep can serve repeat buyers. FirstStep generally requires that you have had no ownership interest in a principal residence in the previous three years. Qualified veterans and buyers in designated targeted areas may qualify for exceptions.',
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

export default function ChfaLoanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section
        className="relative py-28 md:py-40 px-6 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}
      >
        <p className="text-sm uppercase tracking-widest font-semibold mb-4 text-white/70">Colorado Statewide</p>
        <h1
          className="text-4xl md:text-6xl font-bold mb-6"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          CHFA Loans in Colorado
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80 leading-relaxed">
          Compare Colorado Housing and Finance Authority grants and deferred loans, including what you pay at closing and what you may owe when you sell.
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
          <span>✦ Down Payment Assistance</span>
          <span>✦ Grant and Loan Options</span>
          <span>✦ FHA, VA, and Conventional</span>
          <span>✦ 21+ Years Experience</span>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            data-reveal
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            How Much Cash Will You Need at Closing?
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            Start with the cash you have for the down payment and closing costs. A CHFA participating lender can quote the same purchase with and without assistance so you can compare the rate, payment and cash needed. You can also compare <Link href="/down-payment-assistance-colorado" className="underline decoration-[#B98942] underline-offset-4">other Colorado down payment assistance programs</Link> for the address you plan to buy.
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
            CHFA Program Benefits
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
            CHFA Loan FAQ
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
          Let CHFA Help You Get Home
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Talk through your purchase price, savings and questions about CHFA assistance.
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
          <a
            href="tel:7204923335"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
            style={{ backgroundColor: 'transparent', color: '#F5EFE6', border: '2px solid #F5EFE6' }}
          >
            Call Us: (720) 492-3335
          </a>
        </div>
        <p className="mt-8 text-xs text-white/50">Jamie Becker NMLS #794730 | Xpert Home Lending NMLS #2179191 | 201 Columbine St Suite 300, Denver CO 80206</p>
      </section>
    </>
  )
}
