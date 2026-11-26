import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Colorado Down Payment Assistance for Homebuyers',
  description:
    'Explore Colorado down payment assistance, including CHFA grants, deferred second mortgages and Denver metroDPA. Compare cash at closing and repayment terms.',
  alternates: { canonical: 'https://www.thebeckerteam.com/down-payment-assistance-colorado' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'The Becker Team — Down Payment Assistance Colorado',
  description: 'Colorado down payment assistance guidance on CHFA, metroDPA, participating lenders and shared-equity options.',
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
  { title: 'CHFA (Statewide)', body: 'With an eligible CHFA first mortgage, the standard grant can provide up to 3% of the first mortgage and the standard deferred second loan up to 4%. Both have a $25,000 cap. Assistance carries a higher first mortgage rate.' },
  { title: 'metroDPA (Denver Area)', body: 'In participating communities, buyers can apply through a metroDPA-approved lender for a 30-year fixed-rate first mortgage. Assistance is a 0% deferred second loan, due if you pay off the first mortgage through sale or refinance, stop occupying the home as your principal residence, or reach the 30-year term.' },
  { title: 'City and County Programs', body: 'Local programs can have their own service boundaries, application windows and funding limits. Check the property address and ask the program administrator whether it is accepting applications before you count on assistance.' },
  { title: 'Elevation Community Land Trust', body: 'With a community land trust, you buy the home and lease the land. The ground lease sets resale terms that help keep the home affordable for the next buyer.' },
  { title: 'Using Assistance with a First Mortgage', body: 'Ask which first mortgages the assistance program permits. A participating lender can show your required contribution, how much assistance you can use and any closing costs you still need to pay.' },
  { title: 'Grant or Deferred Loan?', body: 'CHFA’s standard grant requires no repayment. A deferred second mortgage remains a debt. Ask what would trigger repayment if you move, sell or refinance.' },
]

const faqs = [
  {
    q: 'What down payment assistance programs exist in Colorado?',
    a: 'CHFA offers assistance with eligible first mortgages statewide. Denver’s metroDPA serves participating communities. Local housing agencies may offer other programs. Check the administrator for your address, its funding status and the participating lender requirement.',
  },
  {
    q: 'Can I combine down payment assistance with an FHA loan?',
    a: 'Some programs allow this. For example, an eligible FHA purchase mortgage can pair with CHFA SmartStep Plus. Ask the participating lender to verify the required borrower contribution and the cash you would still owe after assistance.',
  },
  {
    q: 'Is down payment assistance a grant or a loan?',
    a: 'CHFA offers both. Its standard grant requires no repayment. Its standard deferred second mortgage becomes payable when you sell, refinance, pay off the first mortgage or stop using the home as your primary residence. Denver’s metroDPA also uses a repayable deferred second loan with a 30-year term.',
  },
  {
    q: 'What income limits apply to DPA programs in Colorado?',
    a: 'The limit depends on the program. For example, CHFA SmartStep uses qualifying income while FirstStep uses gross annual income and accounts for household size and targeted areas. Local programs set their own limits. Confirm the program name, county and address with a participating lender.',
  },
  {
    q: 'Can I use down payment assistance if I have owned a home before?',
    a: 'Some programs accept repeat buyers, including CHFA SmartStep and metroDPA. Others require first-time buyer status or a qualifying exception. The lender also checks the property and the requirements of the first mortgage.',
  },
  {
    q: 'How do I know which DPA program is best for my situation?',
    a: 'Compare written estimates for the same home with and without assistance. Look at the cash needed at closing, the first mortgage rate and monthly payment, and what you would owe if you sold or refinanced.',
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
          Compare CHFA and metroDPA options for your address, including the money you could use at closing and when repayment is due.
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
          <span>✦ Colorado Homebuyer Assistance</span>
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
            Which Programs Cover Your Address?
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            A Denver mailing address alone does not determine which local programs cover the home. Start with the city or county where the property is located, then ask a participating lender to compare assistance with an unassisted loan. Use both the upfront savings and the ongoing payment to decide what fits your budget.
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
          Share the property address and your purchase budget to discuss assistance options.
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
