import { teamReference } from '@/lib/siteIdentity'
import type { Metadata } from 'next'
import Link from 'next/link'
import { dollars, oneUnitLimits } from '@/lib/conformingLimits'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Colorado Mountain Home Loans for Ski Towns',
  description:
    'Compare financing for a Colorado cabin, ski condo or second home. Learn how county loan limits, HOA rules and rental plans can affect your options.',
  alternates: { canonical: 'https://www.thebeckerteam.com/mountain-home-loans' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'The Becker Team — Mountain Home Loans Colorado',
  description: 'Jumbo loans, second home financing, and non-warrantable condo programs for Colorado ski towns and mountain communities.',
  url: 'https://www.thebeckerteam.com/mountain-home-loans',
  provider: teamReference,
  areaServed: [
    { '@type': 'City', name: 'Vail' },
    { '@type': 'City', name: 'Aspen' },
    { '@type': 'City', name: 'Breckenridge' },
    { '@type': 'City', name: 'Steamboat Springs' },
    { '@type': 'City', name: 'Telluride' },
    { '@type': 'City', name: 'Crested Butte' },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thebeckerteam.com' },
    { '@type': 'ListItem', position: 2, name: 'Mountain Home Loans', item: 'https://www.thebeckerteam.com/mountain-home-loans' },
  ],
}

const benefits = [
  { title: 'Jumbo Loan Programs', body: 'Compare the amount you plan to borrow with the specific county limit. Vail is in Eagle County, Aspen is in Pitkin County, and Breckenridge and Silverthorne are in Summit County.' },
  { title: 'Second Home Financing', body: 'Tell us when you plan to use the home and whether anyone else will control bookings. The lender reviews occupancy, and the town and HOA each have their own rental rules.' },
  { title: 'Non-Warrantable Condo Programs', body: 'For a ski condo, we can review the HOA documents and any rental agreements. Hotel-style services and restrictions on owner use can affect which lenders will consider the building.' },
  { title: 'Investment Property Loans', body: 'If you plan to use the property mainly as a rental, tell us upfront. We can compare investment-property loan options and check how the planned rental use affects the financing.' },
  { title: 'Flexible Income Documentation', body: 'Many mountain property buyers are business owners, retirees, or investors with complex income. Bank statement loans and asset qualifier programs are available when W-2 documentation does not tell the full story.' },
  { title: 'Pre-Approval Before You Shop', body: 'Talk through your budget and how you plan to use the home. If you’re looking at a resort condo, Jamie can explain what the lender will need to review about the building.' },
]

const faqs = [
  {
    q: 'Can I get a mortgage on a ski town condo in Colorado?',
    a: 'Yes, depending on the building and your plans. Send us the listing and any agreements governing owner use, rental management and front-desk services. We can review the project before you commit to a loan or assume rental income will cover your payment.',
  },
  {
    q: 'What is a non-warrantable condo and why does it matter?',
    a: 'The building may be ineligible for standard condo financing because of its condition or operation. For example, a mandatory rental pool or unresolved critical repairs can affect eligibility. Send us the project name, association documents and any management agreement so we can identify the available options.',
  },
  {
    q: 'What is the difference between a second home loan and an investment property loan?',
    a: 'A second home is for your own use during part of the year. For a standard conventional second-home loan, plan to control when you can stay in the home and qualify without its rent. If your plan depends on rental income, we can evaluate investment-property financing.',
  },
  {
    q: 'What are jumbo loan requirements in Colorado mountain towns?',
    a: 'Jumbo lenders set their own credit, down payment and reserve requirements. The loan amount, property type and how you plan to use the home can change those requirements. Give us the price and planned down payment so we can compare what lenders would ask you to document.',
  },
  {
    q: 'Can I rent out my mountain home on Airbnb if I finance it as a second home?',
    a: 'Check the rules for the exact address and the HOA’s rental policy before advertising. Personal use, a rental management contract and whether you need rent to qualify all affect the financing review. A municipal license does not establish eligibility for a second-home mortgage.',
  },
  {
    q: 'Do Eagle County and Pitkin County have higher conforming loan limits?',
    a: `For one-unit homes, the 2026 limit is ${dollars.format(oneUnitLimits.Eagle[2026])} in Eagle County and ${dollars.format(oneUnitLimits.Pitkin[2026])} in Pitkin County. The published 2027 limits are ${dollars.format(oneUnitLimits.Eagle[2027])} and ${dollars.format(oneUnitLimits.Pitkin[2027])}, respectively. Compare the limit with your loan amount after your down payment.`,
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

export default function MountainHomeLoansPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section
        className="relative py-28 md:py-40 px-6 text-white text-center"
        style={{ backgroundColor: '#1F2E2A', background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}
      >
        <p className="text-sm uppercase tracking-widest font-semibold mb-4 text-white/70">Colorado Mountain Communities</p>
        <h1
          className="text-4xl md:text-6xl font-bold mb-6"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Mountain Home Loans Colorado
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80 leading-relaxed">
          Jumbo loans, second home financing, and non-warrantable condo programs for Vail, Aspen, Breckenridge, Steamboat, Telluride, and Crested Butte.
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
          <span>✦ Jumbo Loan Specialists</span>
          <span>✦ Non-Warrantable Condo Programs</span>
          <span>✦ Second Home Financing</span>
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
            Mountain Properties Need a Lender Who Knows Them
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            A Vail condo with a management agreement can raise different questions from a detached house in Silverthorne. Start with the town, the county where the home sits, and the amount you plan to borrow. Our <Link href="/loan-programs/jumbo-loans#county-loan-limits" className="font-semibold underline">Colorado county loan limits</Link> and local guides to <Link href="/service-areas/vail#local-buying-guide" className="font-semibold underline">Vail</Link>, <Link href="/service-areas/breckenridge#local-buying-guide" className="font-semibold underline">Breckenridge</Link> and <Link href="/service-areas/silverthorne#local-buying-guide" className="font-semibold underline">Silverthorne</Link> can help you compare properties. We also cover financing for homes in <Link href="/service-areas/aspen" className="font-semibold underline underline-offset-4">Aspen</Link> and <Link href="/service-areas/leadville" className="font-semibold underline underline-offset-4">Leadville</Link>.
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
            Mountain Loan Programs
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
            Mountain Home Loan FAQ
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
          Ready to Buy Your Mountain Property?
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Get pre-approved for a jumbo or second home loan and move on your Colorado mountain property.
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
