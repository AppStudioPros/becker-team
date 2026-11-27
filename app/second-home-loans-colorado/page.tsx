import { teamReference } from '@/lib/siteIdentity'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Colorado Second Home and Vacation Home Loans',
  description:
    'Compare financing for Colorado cabins, ski condos and vacation homes with Jamie Becker. See how personal use, rental plans and the property affect your loan.',
  alternates: { canonical: 'https://www.thebeckerteam.com/second-home-loans-colorado' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'The Becker Team — Second Home Loans Colorado',
  description: 'Second home and vacation property mortgage financing for Colorado mountain cabins, ski condos, and lake houses.',
  url: 'https://www.thebeckerteam.com/second-home-loans-colorado',
  provider: teamReference,
  areaServed: [
    { '@type': 'State', name: 'Colorado' },
    { '@type': 'AdministrativeArea', name: 'Summit County' },
    { '@type': 'AdministrativeArea', name: 'Grand County' },
    { '@type': 'AdministrativeArea', name: 'Eagle County' },
    { '@type': 'AdministrativeArea', name: 'Larimer County' },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thebeckerteam.com' },
    { '@type': 'ListItem', position: 2, name: 'Second Home Loans Colorado', item: 'https://www.thebeckerteam.com/second-home-loans-colorado' },
  ],
}

const benefits = [
  { title: '10% Minimum Down Payment', body: 'Second home loans typically require just 10% down, lower than investment property minimums. This makes vacation property ownership more accessible for buyers who have equity in their primary residence.' },
  { title: 'How Occupancy Affects Pricing', body: 'Tell us how you will use the home. A home you visit for part of the year and a property you buy to rent out can have different pricing and down payment requirements.' },
  { title: 'Conventional and Jumbo Options', body: 'We can compare the amount you plan to borrow with the conforming loan limit for that county and explain when a jumbo second-home mortgage applies.' },
  { title: 'Non-Warrantable Condo Solutions', body: 'For a resort condo, share any rental agreement and HOA documents. Hotel services or limits on your personal use can affect whether a particular lender will finance the unit.' },
  { title: 'Personal Use and Rental Rules', body: 'Before counting on occasional rental income, check the town’s rules and the HOA covenants. Tell us how you plan to occupy the home so we can review the loan requirements.' },
  { title: 'Multiple Lender Access', body: 'As a broker, Jamie shops your second home loan across wholesale lenders. Second home programs vary more than primary residence products, so having access to multiple lenders matters.' },
]

const faqs = [
  {
    q: 'What is the minimum down payment for a second home in Colorado?',
    a: 'Most second home loan programs require a minimum of 10% down. Some buyers choose to put down more to lower the monthly payment or get a better rate, but 10% is the standard floor. For jumbo second home purchases (above the conforming limit), some programs may require 15-20% depending on the loan amount and property type.',
  },
  {
    q: 'How is a second home loan different from a primary residence mortgage?',
    a: 'Tell the lender how much of the year you will use the home, whether a management company controls bookings and whether you plan to count rent toward the payment. Those details affect which loans apply. Your credit, down payment and existing mortgage also factor into the review.',
  },
  {
    q: 'Can I rent out my Colorado second home on Airbnb or VRBO?',
    a: 'It depends on the property, loan program, local license rules and HOA covenants. For a Fannie Mae second-home loan, you must personally occupy the home during part of the year, retain control over occupancy and qualify without the rental income. If rentals are essential to your budget, we can review investment-property options.',
  },
  {
    q: 'What areas in Colorado qualify for second home financing?',
    a: 'The property needs to be a reasonable distance from your primary residence and in a location that functions as a vacation or recreational destination. Most Colorado mountain properties qualify: Summit County (Breckenridge, Keystone, Dillon), Grand County (Grand Lake, Winter Park), Eagle County (Vail, Beaver Creek), Larimer County (Estes Park), Routt County (Steamboat), Pitkin County (Aspen), and Gunnison County (Crested Butte). Jamie can confirm eligibility for your specific property location.',
  },
  {
    q: 'Can I finance a second home if I still have a mortgage on my primary residence?',
    a: 'Yes. Most second home buyers still have a primary mortgage. The lender will consider both payments when calculating your debt-to-income ratio. Many Colorado buyers use equity from their primary home appreciation to fund the down payment on a second property, either through savings or through a home equity line of credit.',
  },
  {
    q: 'What credit score do I need for a second home loan?',
    a: 'Credit requirements depend on the loan program and lender. Share the price, intended use and planned down payment with us. We can check the credit and cash reserve requirements for a second-home mortgage at that loan amount.',
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

export default function SecondHomeLoansPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section
        className="relative py-28 md:py-40 px-6 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}
      >
        <p className="text-sm uppercase tracking-widest font-semibold mb-4 text-white/70">Colorado Vacation Properties</p>
        <h1
          className="text-4xl md:text-6xl font-bold mb-6"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Second Home Loans Colorado
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80 leading-relaxed">
          Compare financing for a Colorado cabin, ski condo or lake house. We’ll look at how you plan to use it and what you want to borrow.
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
          <span>✦ 10% Down Payment Options</span>
          <span>✦ Ski Town Condo Specialists</span>
          <span>✦ Part-Time Rental Allowed</span>
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
            Colorado Is Built for Second Homes
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            Whether it is a ski condo in Breckenridge, a cabin near Grand Lake, a retreat outside Estes Park, or a family place in Steamboat, Colorado draws second home buyers from across the country. The financing is different from buying your primary home. Your plans for personal use and rentals can affect which loans are available. If you plan to use a ski condo yourself and rent it between visits, our <Link href="/service-areas/breckenridge#condo-financing" className="font-semibold underline underline-offset-4">Breckenridge condo financing guide</Link> explains what to check in the rental agreement before you make an offer. Jamie Becker (NMLS #794730) has 21+ years of experience helping buyers structure second home purchases correctly, with access to multiple lenders who specialize in vacation and resort property financing.
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
            Second Home Loan Benefits
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
            Second Home Loan FAQ
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
          Ready for Your Colorado Getaway?
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Get pre-approved for a second home loan and start searching for your mountain retreat.
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
