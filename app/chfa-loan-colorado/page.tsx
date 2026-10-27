import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'CHFA Loan Colorado | Down Payment Assistance Colorado | The Becker Team',
  description:
    'CHFA loan programs in Colorado. Down payment assistance, income limits, purchase price limits for 2026. Colorado Housing and Finance Authority approved lender. Jamie Becker NMLS #794730.',
  alternates: { canonical: 'https://www.thebeckerteam.com/chfa-loan-colorado' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'The Becker Team — CHFA Loan Colorado',
  description: 'CHFA-approved lender offering Colorado Housing and Finance Authority down payment assistance programs statewide.',
  url: 'https://www.thebeckerteam.com/chfa-loan-colorado',
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
  areaServed: [{ '@type': 'State', name: 'Colorado' }],
  founder: { '@type': 'Person', name: 'Jamie Becker', identifier: 'NMLS #794730' },
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
  { title: 'Down Payment Assistance', body: 'CHFA provides a second mortgage (up to 4% of the first loan amount) that covers your down payment and closing costs. This second loan has a 0% interest rate and no monthly payments required during the life of the loan.' },
  { title: 'Below-Market Interest Rates', body: 'CHFA first mortgage rates are typically competitive with or below standard market rates. Combined with the down payment assistance, the total cost of homeownership drops significantly for qualifying buyers.' },
  { title: 'Works with FHA, VA, and Conventional', body: 'CHFA assistance pairs with FHA, VA, and conventional first mortgages. Jamie will determine which underlying loan type gives you the best overall terms based on your credit, income, and purchase price.' },
  { title: 'Available Statewide', body: 'CHFA is not limited to any one city or county. Buyers across Colorado, from Denver and Boulder to Grand Junction and Pueblo, can access CHFA programs as long as they meet income and purchase price requirements.' },
  { title: 'No First-Time Buyer Requirement', body: 'Despite common belief, CHFA does not require you to be a first-time buyer. If you have not owned a home in the past 3 years, or if you are purchasing in a targeted area, you may qualify even as a repeat buyer.' },
  { title: 'Required Homebuyer Education', body: 'CHFA requires completion of a homebuyer education course before closing. These courses are available online and typically take 4-8 hours. Jamie will connect you with approved providers early in the process so it does not delay your closing.' },
]

const faqs = [
  {
    q: 'What is a CHFA loan?',
    a: 'CHFA stands for Colorado Housing and Finance Authority. It is a state agency that provides affordable mortgage financing and down payment assistance to Colorado homebuyers. CHFA does not lend directly. Instead, it works through approved lenders like The Becker Team. The program typically includes a competitive-rate first mortgage plus a second mortgage that provides down payment and closing cost assistance.',
  },
  {
    q: 'Who qualifies for CHFA in Colorado?',
    a: 'CHFA has three main qualification criteria: (1) your household income must be below the program limits for your county; (2) the purchase price must be below the maximum for your county; and (3) the property must be your primary residence. You also need a minimum credit score (typically 620-640 depending on the program), and you must complete a homebuyer education course. The income limits are higher than many buyers expect, especially in Denver and Boulder counties.',
  },
  {
    q: 'What are the income limits for CHFA in 2026?',
    a: 'CHFA income limits vary by county and are adjusted annually. In 2026, the limits for the Denver metro area are approximately $137,000-$150,000 for a household, depending on the specific county and program. Boulder County limits are similar. Less expensive counties have lower limits. These are household limits, meaning all adult income in the home counts. Jamie can check current limits for your specific county and household size during your pre-approval consultation.',
  },
  {
    q: 'How much down payment assistance does CHFA provide?',
    a: 'CHFA\'s down payment assistance typically comes as a second mortgage of up to 4% of the first loan amount. On a $400,000 purchase, that is up to $16,000 toward your down payment and closing costs. This second loan carries a 0% interest rate and requires no monthly payments. It is due when you sell, refinance, or pay off the first mortgage. For many buyers, this assistance is the difference between buying now and waiting years to save enough.',
  },
  {
    q: 'Does CHFA work with FHA and VA loans?',
    a: 'Yes. CHFA down payment assistance can pair with FHA, VA, and conventional first mortgages. For most buyers with credit scores between 620-680, FHA with CHFA assistance is the strongest combination. For buyers with stronger credit (700+), conventional with CHFA can result in lower total costs because you avoid FHA\'s upfront mortgage insurance premium. VA-eligible buyers can also use CHFA assistance to cover closing costs. Jamie will model all options and recommend the best combination for your situation.',
  },
  {
    q: 'Do I need to be a first-time buyer to use CHFA?',
    a: 'No. While CHFA is popular with first-time buyers, the program does not strictly require it. If you have not owned a home in the past 3 years, you qualify. If you are purchasing in a CHFA "targeted area" (certain census tracts with higher need), the 3-year requirement may be waived. Jamie can check whether your situation and target purchase area meet CHFA eligibility.',
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
          Colorado Housing and Finance Authority down payment assistance programs. Up to 4% toward your down payment and closing costs. Competitive rates. Available statewide.
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
          <span>✦ Up to 4% Down Payment Assistance</span>
          <span>✦ CHFA Approved Lender</span>
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
            Down Payment Is the Biggest Barrier. CHFA Helps Remove It.
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            For most Colorado buyers, especially first-time buyers, the biggest obstacle to homeownership is not the monthly payment. It is the down payment and closing costs. Coming up with $15,000-$25,000 in cash while also paying rent and managing daily expenses feels impossible for many families. That is exactly what CHFA was designed to address. The Colorado Housing and Finance Authority provides up to 4% of your loan amount as a 0% interest second mortgage, covering your down payment and much of your closing costs. No monthly payments on the second loan. Combined with an FHA or conventional first mortgage, CHFA can put homeownership within reach years sooner than saving alone. Jamie Becker (NMLS #794730) is a CHFA-approved lender with 21+ years of experience helping Colorado buyers access these programs and close successfully.
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
          Find out if you qualify for CHFA down payment assistance. Pre-approval takes less than a day.
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
