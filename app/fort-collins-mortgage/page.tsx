import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Fort Collins Mortgage Broker | Home Loans Fort Collins CO | The Becker Team',
  description:
    'Local Fort Collins mortgage broker Jamie Becker (NMLS #794730) offers conventional, FHA, VA, jumbo, and specialty loans. Fast pre-approvals, competitive rates, personal service. Serving Fort Collins, Loveland, Greeley, Windsor, and Northern Colorado.',
  alternates: { canonical: 'https://www.thebeckerteam.com/fort-collins-mortgage' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'The Becker Team — Fort Collins Mortgage Broker',
  description: 'Local mortgage lender serving Fort Collins, Loveland, Greeley, Windsor, and Northern Colorado.',
  url: 'https://www.thebeckerteam.com/fort-collins-mortgage',
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
    { '@type': 'City', name: 'Fort Collins' },
    { '@type': 'City', name: 'Loveland' },
    { '@type': 'City', name: 'Greeley' },
    { '@type': 'City', name: 'Windsor' },
    { '@type': 'City', name: 'Timnath' },
    { '@type': 'City', name: 'Wellington' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '250', bestRating: '5' },
  founder: { '@type': 'Person', name: 'Jamie Becker', identifier: 'NMLS #794730' },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thebeckerteam.com' },
    { '@type': 'ListItem', position: 2, name: 'Fort Collins Mortgage', item: 'https://www.thebeckerteam.com/fort-collins-mortgage' },
  ],
}

const programs = [
  { label: 'Conventional Loans', desc: '3-5% down with competitive rates — the standard choice for most Fort Collins buyers.', href: '/loan-programs/conventional-loans' },
  { label: 'FHA Loans', desc: 'Great for first-time buyers and CSU graduates entering the Fort Collins market. 3.5% down, flexible credit.', href: '/loan-programs/fha-loans' },
  { label: 'VA Loans', desc: 'Zero down for eligible veterans and active-duty service members in Northern Colorado.', href: '/loan-programs/va-loans' },
  { label: 'Jumbo Loans', desc: 'Financing above conforming limits for higher-value Fort Collins and Northern Colorado properties.', href: '/loan-programs/jumbo-loans' },
  { label: 'Self-Employed / Bank Statement', desc: 'Built for Fort Collins entrepreneurs, tech professionals, and small business owners who prefer not to use tax returns.', href: '/loan-programs/self-employed-loans' },
  { label: 'Asset Qualifier Loans', desc: 'Qualify using investment accounts and liquid assets instead of traditional income documentation.', href: '/loan-programs/asset-qualifier-loans' },
]

const faqs = [
  { q: 'Is Fort Collins a good place to buy a home?', a: "Fort Collins consistently ranks among the best places to live in the U.S. With a thriving tech and biotech sector, Colorado State University, a strong outdoor lifestyle, and a stable housing market, it's a smart long-term investment. The Northern Colorado market has seen steady appreciation with strong demand from young professionals and families relocating from Denver." },
  { q: 'What are mortgage rates in Fort Collins, CO?', a: 'Mortgage rates in Fort Collins track the national market daily and vary based on your credit score, loan type, down payment, and loan term. As a broker, Jamie shops your loan across multiple lenders to find the most competitive rate for your situation. Contact the team for a personalized rate quote.' },
  { q: 'Do you offer VA loans in Fort Collins?', a: 'Yes. VA loans are available for eligible veterans, active-duty service members, and surviving spouses throughout Northern Colorado. Zero down payment, no PMI, and competitive rates. Jamie can walk you through the Certificate of Eligibility process and get you pre-approved quickly.' },
  { q: 'Can I get a mortgage in Fort Collins if I am self-employed?', a: 'Absolutely. Many Fort Collins professionals run their own businesses or work as consultants in the tech and biotech industries. Jamie specializes in bank statement loans and asset qualifier programs designed for borrowers who cannot show traditional W-2 income.' },
  { q: 'How fast can I close on a home in Fort Collins?', a: "The Becker Team targets 10-day closings on straightforward purchases. In Fort Collins's competitive market, a fast close and a strong pre-approval letter can be the difference between winning and losing an offer." },
  { q: 'Do you serve Loveland and Greeley as well?', a: 'Yes. The Becker Team serves all of Northern Colorado — Fort Collins, Loveland, Greeley, Windsor, Timnath, Wellington, and surrounding communities. Colorado licensing covers the full state.' },
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

export default function FortCollinsMortgagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative py-28 md:py-40 px-6 text-white text-center" style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}>
        <p className="text-sm uppercase tracking-widest font-semibold mb-4 text-white/70">Fort Collins, Colorado</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Fort Collins Mortgage Broker
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80 leading-relaxed">
          Personal service, competitive rates, and every loan program you need — from a lender who knows Northern Colorado.
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

      {/* Feature bar */}
      <section className="bg-white py-5 px-6 border-b border-stone-200">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-semibold" style={{ color: '#1F2E2A' }}>
          <span>✦ Northern Colorado Lender</span>
          <span>✦ Fort Collins Home Loans</span>
          <span>✦ Same-Day Pre-Approvals</span>
          <span>✦ 21+ Years Experience</span>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Northern Colorado's Mortgage Expert
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            Fort Collins is one of the fastest-growing housing markets in Colorado — and one of the most competitive. Jamie Becker (NMLS #794730) has spent over two decades helping buyers, professionals, veterans, and first-timers across Northern Colorado get the right loan at the right rate. As a broker rather than a bank, Jamie shops your file across multiple wholesale lenders, which means more options and better pricing than going to a single institution. Whether you're buying near CSU, relocating for a tech job, or upsizing into a Timnath or Windsor home, you deal directly with Jamie from start to close.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Fort Collins Mortgage Programs
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

      {/* Why local */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Why Work With a Mortgage Broker in Fort Collins?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Access to Multiple Lenders', body: "As a broker, Jamie isn't limited to one bank's products. Your loan is shopped to multiple wholesale lenders, which typically means better rates and more flexibility." },
              { title: 'Fast Pre-Approvals', body: "Fort Collins's market moves quickly. Same-day pre-approval letters give you a genuine competitive edge when making an offer in a multiple-offer situation." },
              { title: 'Specialty Programs Available', body: "Whether you're a CSU researcher, a tech contractor, or a remote worker, specialty programs exist for borrowers who don't fit the standard mold. Jamie knows which ones apply to you." },
              { title: 'Direct Access, Personal Service', body: "No call centers, no handoffs. Jamie handles your loan from application through closing and is reachable throughout the process." },
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

      {/* FAQ */}
      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 data-reveal className="text-3xl md:text-5xl font-bold text-center mb-10" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}>
            Fort Collins Mortgage FAQ
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-36 px-6 text-white text-center" style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}>
        <h2 data-reveal="fade" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Ready to Buy in Fort Collins?
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Get pre-approved today and be ready to move in Northern Colorado's competitive market.
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
