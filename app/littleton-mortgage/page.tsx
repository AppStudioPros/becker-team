import { teamReference } from '@/lib/siteIdentity'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Littleton, CO Mortgage Broker and Home Loans',
  description:
    'Littleton CO mortgage broker Jamie Becker (NMLS #794730). Conventional, FHA, VA, jumbo, and specialty loans for Littleton buyers. Serving Littleton, Highlands Ranch, Lone Tree, Castle Rock, and the south Denver metro.',
  alternates: { canonical: 'https://www.thebeckerteam.com/littleton-mortgage' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'The Becker Team — Littleton Colorado Mortgage Broker',
  description: 'Local mortgage lender serving Littleton, Highlands Ranch, Lone Tree, Castle Rock, and the south Denver suburbs.',
  url: 'https://www.thebeckerteam.com/littleton-mortgage',
  provider: teamReference,
  areaServed: [
    { '@type': 'City', name: 'Littleton' },
    { '@type': 'City', name: 'Highlands Ranch' },
    { '@type': 'City', name: 'Lone Tree' },
    { '@type': 'City', name: 'Castle Rock' },
    { '@type': 'City', name: 'Englewood' },
    { '@type': 'City', name: 'Centennial' },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thebeckerteam.com' },
    { '@type': 'ListItem', position: 2, name: 'Littleton Mortgage', item: 'https://www.thebeckerteam.com/littleton-mortgage' },
  ],
}

const programs = [
  { label: 'Conventional Loans', desc: "Compare conventional mortgage options for your next Littleton or Highlands Ranch home, including how much cash you can keep after closing.", href: '/loan-programs/conventional-loans' },
  { label: 'Jumbo Loans', desc: "Look at jumbo financing for a Lone Tree or Highlands Ranch property if the mortgage amount exceeds its county loan limit.", href: '/loan-programs/jumbo-loans' },
  { label: 'VA Loans', desc: "Zero down for eligible veterans and service members throughout the south Denver metro.", href: '/loan-programs/va-loans' },
  { label: 'FHA Loans', desc: "For first-time buyers entering the Littleton and Englewood market with limited down payment funds or flexible credit requirements.", href: '/loan-programs/fha-loans' },
  { label: 'Self-Employed Loans', desc: "Bank statement programs for Littleton and Castle Rock business owners. No tax returns required — qualify on actual cash flow.", href: '/loan-programs/self-employed-loans' },
  { label: 'Asset Qualifier Loans', desc: "Qualify using investment accounts and liquid assets — a strong fit for Lone Tree and Highlands Ranch buyers with significant net worth.", href: '/loan-programs/asset-qualifier-loans' },
]

const faqs = [
  { q: 'Is Littleton CO a good place to buy a home?', a: "Littleton is one of the most established and family-friendly communities in the Denver metro. Downtown Littleton has a genuine walkable character, and neighborhoods like Highlands Ranch, Columbine, and South Platte Park hold value consistently. It's a suburb with real long-term staying power, especially for families prioritizing school districts and quality of life." },
  { q: 'What are typical home prices in Littleton, CO?', a: "Littleton home prices vary widely depending on the neighborhood — from entry-level condos near the light rail to $800K+ Highlands Ranch and Lone Tree properties. Prices shift with the broader market. Contact Jamie for a current pre-approval range based on your budget and the specific area you're targeting." },
  { q: 'Do you offer jumbo loans in Highlands Ranch and Lone Tree?', a: "Yes. Let us know the address, price and down payment you are considering. We can check the one-unit limit for that county and explain how jumbo lenders would review the loan and your cash reserves." },
  { q: 'When should I get pre-approved for a Littleton mortgage?', a: 'Start before you make an offer. Jamie can review your documents and let you know when a pre-approval letter may be ready. Share any offer deadline when you get in touch.' },
  { q: 'What is the mortgage process like for Littleton buyers?', a: 'Start with pre-approval before you make an offer. After you go under contract, the lender reviews the loan and property, coordinates any required appraisal and works with the title company to prepare for closing.' },
  { q: 'Do you serve Castle Rock and Centennial?', a: 'Yes. The Becker Team serves all of the south Denver corridor — Littleton, Highlands Ranch, Lone Tree, Castle Rock, Centennial, Englewood, and surrounding communities.' },
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

export default function LittletonMortgagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative py-28 md:py-40 px-6 text-white text-center" style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}>
        <p className="text-sm uppercase tracking-widest font-semibold mb-4 text-white/70">Littleton, Colorado</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Littleton Mortgage Broker
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80 leading-relaxed">
          Compare home loans for Littleton, Highlands Ranch, Lone Tree and the south Denver metro with Jamie Becker.
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
          <span>✦ South Denver Mortgage Lender</span>
          <span>✦ Highlands Ranch Home Loans</span>
          <span>✦ Purchase Pre-Approval</span>
          <span>✦ 21+ Years Experience</span>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            The South Metro&apos;s Mortgage Expert
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            The Littleton and Highlands Ranch market draws families who want top-rated schools, established neighborhoods, and access to both Denver and the mountains. It also tends to attract buyers with more complex financial profiles — business owners, dual-income professionals, and move-up buyers with existing equity to work with. Jamie Becker (NMLS #794730) has been helping buyers navigate this market for over 21 years, with programs that go well beyond standard bank products. As a broker, Jamie works with multiple wholesale lenders to find the right rate and structure for your specific situation.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Littleton Mortgage Programs
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
            Why Littleton Buyers Choose The Becker Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Jumbo and High-Balance Programs', body: "If you are selling one home to buy another, we can show how applying more of the sale proceeds to your down payment would change the loan amount and financing options." },
              { title: 'Broker Access to Multiple Lenders', body: 'Jamie can compare different lenders’ rates and fees for the same loan amount and term.' },
              { title: 'Specialty Programs for Complex Situations', body: "Business owners, high-net-worth buyers, and borrowers with non-traditional income have more options than most people realize. Jamie specializes in finding the right program for the situation." },
              { title: 'Closing Date Planning', body: 'Share the seller’s closing date before you sign. Jamie can review the proposed date against the loan and any appraisal or title work still needed.' },
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
            Littleton Mortgage FAQ
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="relative py-24 md:py-36 px-6 text-white text-center" style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}>
        <h2 data-reveal="fade" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Ready to Buy in Littleton?
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Get pre-approved today and move fast in the south Denver market.
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
