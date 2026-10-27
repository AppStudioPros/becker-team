import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Down Payment Assistance Colorado | Colorado First-Time Buyer Programs | The Becker Team',
  description:
    'Complete guide to Colorado down payment assistance programs: CHFA, Metro DPA, Denver HOAP, and more. Grants, second loans, and income limits for 2026. Jamie Becker NMLS #794730.',
  alternates: { canonical: 'https://www.thebeckerteam.com/down-payment-assistance-colorado' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'The Becker Team — Down Payment Assistance Colorado',
  description: 'Colorado down payment assistance programs including CHFA, Metro DPA, Denver HOAP, and statewide options for first-time and qualifying buyers.',
  url: 'https://www.thebeckerteam.com/down-payment-assistance-colorado',
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
    { '@type': 'ListItem', position: 2, name: 'Down Payment Assistance Colorado', item: 'https://www.thebeckerteam.com/down-payment-assistance-colorado' },
  ],
}

const benefits = [
  { title: 'CHFA (Statewide)', body: 'Colorado Housing and Finance Authority offers up to 4% of the first loan amount as a 0% interest second mortgage. No monthly payments. Available statewide to buyers who meet income and purchase price limits. Pairs with FHA, VA, and conventional first mortgages.' },
  { title: 'Metro DPA (Denver Metro)', body: 'Metro Mortgage Assistance Plus provides down payment assistance to buyers in the Denver metro area through select lender programs. Amounts and terms vary by lender and program year. Can combine with conventional and FHA loans.' },
  { title: 'City of Denver HOAP', body: 'The Denver Homeownership Assistance Program (HOAP) offers financial assistance to Denver residents purchasing their first home within city limits. Amounts and availability change yearly based on funding. Income-limited and targeted to Denver city buyers.' },
  { title: 'Elevation Community Land Trust', body: 'Elevation CLT provides permanently affordable homeownership opportunities in the Denver metro by retaining land ownership while the buyer owns the home. This reduces purchase prices significantly and provides long-term affordability protections.' },
  { title: 'Combining DPA with Loan Types', body: 'Many DPA programs work alongside FHA, VA, USDA, and conventional first mortgages. Combining a CHFA second mortgage with an FHA first mortgage is one of the most common structures in Colorado. Jamie will identify which combinations are available for your situation.' },
  { title: 'Grant vs. Second Loan Programs', body: 'Some DPA programs provide a true grant (money that never needs to be repaid). Others provide a second mortgage with deferred payments. Understanding the structure matters for your long-term costs. Jamie explains the real difference and recommends accordingly.' },
]

const faqs = [
  {
    q: 'What down payment assistance programs exist in Colorado?',
    a: 'Colorado has several DPA programs at different levels. CHFA (statewide) is the most widely used, providing up to 4% as a 0% interest second mortgage. Metro DPA covers the Denver metro area with similar structures through select lenders. The City of Denver has its own HOAP program for Denver residents. Elevation Community Land Trust offers a different approach through shared equity. There are also occasional county-specific and municipal programs. Jamie stays current on all active programs and will match you with every option you qualify for.',
  },
  {
    q: 'Can I combine down payment assistance with an FHA loan?',
    a: 'Yes. This is one of the most common loan structures in Colorado. An FHA first mortgage requires 3.5% down, and CHFA or Metro DPA can cover that entire amount plus some or all of your closing costs. The result is that many buyers close with very little out-of-pocket cash. The key is that the DPA program must be compatible with the FHA loan, which CHFA and most Metro DPA programs are.',
  },
  {
    q: 'Is down payment assistance a grant or a loan?',
    a: 'It depends on the program. CHFA provides a second mortgage with 0% interest and no monthly payments. It is technically a loan, repayable when you sell, refinance, or pay off the first mortgage. Some Metro DPA programs are structured as forgivable loans, meaning the balance can be forgiven after a period of time (often 3-5 years) if you stay in the home. A few programs, particularly at the municipal level, offer true grants that never need repayment. Jamie will explain the structure of each program you qualify for.',
  },
  {
    q: 'What income limits apply to DPA programs in Colorado?',
    a: 'Income limits vary by program and county. CHFA limits are typically around $137,000-$150,000 for the Denver metro in 2026, adjusted by county and household size. Metro DPA and Denver HOAP have their own limits that may be lower or higher depending on the program year. Many buyers who assume they earn too much are surprised to find they qualify. Jamie checks all applicable limits during your pre-approval consultation.',
  },
  {
    q: 'Can I use down payment assistance if I have owned a home before?',
    a: 'For most programs, yes, if you have not owned a home in the past 3 years. CHFA defines a "first-time buyer" as someone who has not had ownership interest in a primary residence in the past 3 years. If you have been renting for that period after previously owning, you qualify. Some programs also waive the 3-year requirement for purchases in targeted census tracts or for veterans.',
  },
  {
    q: 'How do I know which DPA program is best for my situation?',
    a: 'The right program depends on your income, purchase price, location, credit score, and the type of first mortgage you qualify for. CHFA is available statewide and works well for most buyers. Metro DPA can sometimes provide better terms in the Denver metro. Denver HOAP is limited to city of Denver purchases. Jamie will run the numbers on every program you qualify for and recommend the one (or combination) that gives you the best overall terms.',
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

export default function DownPaymentAssistancePage() {
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
          Down Payment Assistance Colorado
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80 leading-relaxed">
          CHFA, Metro DPA, Denver HOAP, and more. Colorado has real programs that help buyers close with less cash out of pocket. Find out what you qualify for.
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
          <span>✦ CHFA Approved Lender</span>
          <span>✦ Multiple DPA Programs</span>
          <span>✦ Grants and Second Loans</span>
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
            Colorado Has More DPA Options Than Most Buyers Realize
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            The down payment is the biggest obstacle for most first-time buyers in Colorado. Coming up with $15,000-$25,000 in cash while paying rent is a math problem that does not work for many families. But Colorado has some of the strongest down payment assistance programs in the country, and many buyers who qualify never learn about them because their bank does not offer them. CHFA alone provides up to 4% of the loan amount as a 0% interest second mortgage with no monthly payments. Metro DPA, Denver HOAP, and community land trust programs add more options in specific areas. Jamie Becker (NMLS #794730) is a CHFA-approved lender who knows every active DPA program in the state. Instead of just telling you what you qualify for at one bank, Jamie checks every program, models the numbers, and recommends the best combination for your situation.
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
            Colorado DPA Programs
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
            Down Payment Assistance FAQ
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
          Stop Saving. Start Buying.
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Find out which down payment assistance programs you qualify for. Pre-approval takes less than a day.
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
