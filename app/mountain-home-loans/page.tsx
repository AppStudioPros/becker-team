import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Mountain Home Loans Colorado | Vail, Aspen, Breckenridge Mortgage | The Becker Team',
  description:
    'Mountain home loans for Colorado ski towns. Jumbo loans, second home financing, non-warrantable condo programs for Vail, Aspen, Breckenridge, Steamboat, Telluride, and Crested Butte. Jamie Becker NMLS #794730.',
  alternates: { canonical: 'https://www.thebeckerteam.com/mountain-home-loans' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'The Becker Team — Mountain Home Loans Colorado',
  description: 'Jumbo loans, second home financing, and non-warrantable condo programs for Colorado ski towns and mountain communities.',
  url: 'https://www.thebeckerteam.com/mountain-home-loans',
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
    { '@type': 'City', name: 'Vail' },
    { '@type': 'City', name: 'Aspen' },
    { '@type': 'City', name: 'Breckenridge' },
    { '@type': 'City', name: 'Steamboat Springs' },
    { '@type': 'City', name: 'Telluride' },
    { '@type': 'City', name: 'Crested Butte' },
  ],
  founder: { '@type': 'Person', name: 'Jamie Becker', identifier: 'NMLS #794730' },
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
  { title: 'Jumbo Loan Programs', body: 'Vail homes commonly sell for $1.5M-$5M or more. Aspen can easily exceed $10M. Standard conforming limits do not apply here. Jamie has access to multiple jumbo programs with competitive rates and flexible underwriting.' },
  { title: 'Second Home Financing', body: 'Mountain properties purchased as second homes qualify for lower rates than investment properties. Minimum 10% down, and you can still rent the property part-time. Understanding the distinction matters for your rate.' },
  { title: 'Non-Warrantable Condo Programs', body: 'Many ski town condo associations have commercial space, heavy short-term rental concentration, or investor ownership above Fannie/Freddie limits. These are non-warrantable condos, and most banks cannot finance them. Jamie has specific programs that can.' },
  { title: 'Investment Property Loans', body: 'If you plan to rent your mountain home as a primary source of income, it qualifies as investment property. Different loan terms apply. Jamie will help you structure the purchase correctly from the start.' },
  { title: 'Flexible Income Documentation', body: 'Many mountain property buyers are business owners, retirees, or investors with complex income. Bank statement loans and asset qualifier programs are available when W-2 documentation does not tell the full story.' },
  { title: 'Fast Pre-Approvals', body: 'Mountain property markets, especially Breckenridge and Steamboat, can move quickly. Same-day pre-approval letters and focused service mean you can act when the right property comes available.' },
]

const faqs = [
  {
    q: 'Can I get a mortgage on a ski town condo in Colorado?',
    a: 'Yes, but it depends on the condo complex. Standard (warrantable) condos in ski towns can be financed with conventional or jumbo loans. Non-warrantable condos, which are common in resort areas, require specialty programs. Jamie has lenders who work specifically in non-warrantable condo financing, so the answer is often yes even when a bank says no.',
  },
  {
    q: 'What is a non-warrantable condo and why does it matter?',
    a: 'A non-warrantable condo is one that does not meet Fannie Mae or Freddie Mac guidelines. This usually happens when a development has more than 35% investor ownership, includes significant commercial space, or has high short-term rental concentration. These are extremely common in Colorado ski towns. Most conventional lenders cannot finance them, but portfolio lenders and specialty programs can. If you are buying in a resort condo complex, Jamie will check warrantability early in the process.',
  },
  {
    q: 'What is the difference between a second home loan and an investment property loan?',
    a: 'A second home is a property you intend to use personally for part of the year. You can rent it when you are not there, but it should not be managed as a full-time rental business. Second home loans typically require 10% down and carry lower interest rates than investment property loans. An investment property is purchased primarily to generate rental income. It requires at least 15-25% down and has higher rates. Getting this classification right from the start affects your financing and your taxes.',
  },
  {
    q: 'What are jumbo loan requirements in Colorado mountain towns?',
    a: 'Jumbo loans in Colorado mountain markets typically require 10-20% down depending on the loan amount and property type, a credit score of 700+, and documented income or assets sufficient to support the payment. Some programs allow lower down payments on jumbo amounts. Requirements vary by lender, which is why shopping across multiple programs matters. Jamie works with several wholesale lenders who specialize in mountain and resort property jumbo financing.',
  },
  {
    q: 'Can I rent out my mountain home on Airbnb if I finance it as a second home?',
    a: 'Yes, within limits. You can rent a second home when you are not personally using it. The distinction the lender and IRS care about is whether you are using the property yourself for a meaningful portion of the year. If you rent it out 365 days a year and never stay there yourself, it is likely an investment property, not a second home. For part-time personal use with occasional rentals, second home financing typically applies. Jamie will help you understand how to structure this correctly.',
  },
  {
    q: 'Do Eagle County and Pitkin County have higher conforming loan limits?',
    a: 'Yes. Eagle County (Vail area) and several other high-cost Colorado mountain counties have higher conforming loan limits set by the FHFA. In 2026, Eagle County\'s limit is $1,149,825 for a single-family home. Pitkin County (Aspen) has similar elevated limits. However, many mountain properties still exceed even these higher limits, requiring true jumbo financing. Jamie will determine which limit applies to your specific county and purchase price.',
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
            Colorado ski town real estate is a completely different animal from buying a primary residence in the Denver suburbs. Homes in Vail regularly trade between $1.5M and $5M. Aspen properties can go far higher. Breckenridge and Steamboat have seen prices climb sharply as remote work expanded who could buy there. And in nearly every resort condo complex, you will encounter non-warrantable condo issues that most banks cannot handle at all. Jamie Becker (NMLS #794730) has spent 21+ years building relationships with lenders who work specifically in resort markets. That means access to jumbo programs, second home financing, non-warrantable condo solutions, and the experience to know which one fits your situation.
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
