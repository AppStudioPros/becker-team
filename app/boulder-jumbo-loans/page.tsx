import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Jumbo Loans Boulder CO | Jumbo Mortgage Vail, Aspen, Breckenridge | The Becker Team',
  description:
    'Best jumbo mortgage rates in Boulder, Aspen, Vail, Breckenridge, and Colorado mountain resort towns. Second home, luxury property, and investment jumbo financing. Jamie Becker NMLS #794730.',
  alternates: { canonical: 'https://www.thebeckerteam.com/boulder-jumbo-loans' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'The Becker Team — Jumbo Loans Colorado',
  description: 'Jumbo mortgage specialist serving Boulder, Aspen, Vail, Breckenridge, Summit County, and Colorado\'s luxury and mountain resort markets.',
  url: 'https://www.thebeckerteam.com/boulder-jumbo-loans',
  telephone: '(720) 492-3335',
  email: 'Jamie@thebeckerteam.com',
  areaServed: [
    { '@type': 'City', name: 'Boulder' },
    { '@type': 'City', name: 'Vail' },
    { '@type': 'City', name: 'Aspen' },
    { '@type': 'City', name: 'Breckenridge' },
    { '@type': 'City', name: 'Steamboat Springs' },
    { '@type': 'AdministrativeArea', name: 'Summit County' },
    { '@type': 'AdministrativeArea', name: 'Eagle County' },
    { '@type': 'AdministrativeArea', name: 'Pitkin County' },
  ],
  founder: { '@type': 'Person', name: 'Jamie Becker', identifier: 'NMLS #794730' },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thebeckerteam.com' },
    { '@type': 'ListItem', position: 2, name: 'Boulder Jumbo Loans', item: 'https://www.thebeckerteam.com/boulder-jumbo-loans' },
  ],
}

const programs = [
  { title: 'Primary Residence Jumbo', body: 'Purchase or refinance your primary home above conforming limits. Competitive rates, strong underwriting, and multiple term options.' },
  { title: 'Second Home & Vacation Property', body: 'Finance a ski chalet in Vail, a mountain retreat in Aspen, or a summer home in Summit County — second home jumbo programs available.' },
  { title: 'Investment Property Jumbo', body: 'Expand your portfolio with investment property jumbo financing. Ideal for rental properties in high-demand Colorado resort and tech corridors.' },
  { title: 'Non-Warrantable Condo Financing', body: 'Many Colorado mountain resort condos don\'t meet conventional or conforming guidelines. We have specialty programs for non-warrantable condo purchases in resort buildings.' },
  { title: 'Jumbo ARM Programs', body: 'Adjustable-rate jumbo loans can offer lower initial rates — a strategic fit for buyers who plan to sell or refinance within 5-7 years.' },
  { title: 'Asset Qualifier / High Net Worth', body: 'Qualify based on investment accounts and assets rather than traditional income — useful for buyers with complex or non-standard financial profiles.' },
]

const faqs = [
  { q: 'What counts as a jumbo loan in Colorado?', a: 'A jumbo loan exceeds the conforming loan limits set by Fannie Mae and Freddie Mac. In most Colorado counties, the 2024 conforming limit is $766,550. In high-cost areas (like Eagle County/Vail and some Boulder and Denver zip codes), the limit is higher. Any loan above the applicable limit for your county is a jumbo loan.' },
  { q: 'What are current jumbo mortgage rates in Colorado?', a: 'Jumbo rates are competitive and change daily with the market. Historically, jumbo rates are close to — and sometimes lower than — conforming rates, depending on the lender and loan profile. Contact Jamie for a current quote based on your property type, down payment, and credit profile.' },
  { q: 'How much down payment do I need for a jumbo loan?', a: 'Most jumbo loans require 10-20% down. Some programs allow 10% down for well-qualified borrowers with strong credit and reserves. Investment property and second home jumbo loans typically require 15-25% down.' },
  { q: 'Can I get a jumbo loan for a condo in Vail or Breckenridge?', a: 'Yes, but resort area condos often fall into the non-warrantable category — meaning they don\'t meet standard Fannie/Freddie condo guidelines due to high investor concentration or resort-hotel features. The Becker Team has access to specialty programs specifically designed for non-warrantable condo financing in mountain resort buildings.' },
  { q: 'What credit score do I need for a jumbo loan?', a: 'Most jumbo lenders require a minimum credit score of 700-720. Stronger scores (740+) unlock the best rates. Reserves (typically 6-12 months of mortgage payments in liquid assets) are also typically required for jumbo approval.' },
  { q: 'Do you offer jumbo loans for second homes in Colorado?', a: 'Yes. Second home jumbo financing is available for Colorado mountain properties — ski homes, cabins, and resort condos. These typically require 10-20% down and that the property be used personally for a portion of the year (not rented full-time, which would classify it as investment property).' },
]

export default function BoulderJumboPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section
        className="relative py-28 md:py-40 px-6 text-white text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,35,25,0.60), rgba(20,35,25,0.60)), url("/images/boulder-hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundColor: '#1F2E2A',
        }}
      >
        <p className="text-sm uppercase tracking-widest font-semibold mb-4 text-white/70">Boulder · Vail · Aspen · Breckenridge · Summit County</p>
        <h1
          className="text-4xl md:text-6xl font-bold mb-6"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Jumbo Loans for Colorado's Luxury Market
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80 leading-relaxed">
          Best jumbo mortgage rates in Boulder, Vail, Aspen, Breckenridge, and Summit County. Primary residences, second homes, and non-warrantable resort condos.
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

      {/* Feature bar */}
      <section className="bg-white py-5 px-6 border-b border-stone-200">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-semibold" style={{ color: '#1F2E2A' }}>
          <span>✦ Best Jumbo Mortgage Rates Colorado</span>
          <span>✦ Second Home Financing</span>
          <span>✦ Non-Warrantable Condos</span>
          <span>✦ Mountain Resort Markets</span>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            data-reveal
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            Colorado's Mountain Markets Require a Different Kind of Lender
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            Boulder's tech corridor, Aspen's luxury market, Vail's ski chalets, and Summit County's resort condos all share one thing: most properties require jumbo financing, and many require specialty programs that standard lenders can't handle. Jamie Becker (NMLS #794730) has deep experience in Colorado's high-value markets — including non-warrantable condo financing, second-home programs, and high-net-worth lending solutions. Whether you're buying a primary residence in Boulder or a ski property in Breckenridge, we have the programs and wholesale relationships to get it done.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            data-reveal
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            Jumbo Loan Programs Available
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-6 border border-stone-200">
                <div className="flex gap-3">
                  <Check size={20} className="mt-0.5 flex-shrink-0" style={{ color: '#1F2E2A' }} />
                  <div>
                    <p className="font-bold mb-1" style={{ color: '#1F2E2A', fontFamily: '"Playfair Display", Georgia, serif' }}>{p.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#4a5e53' }}>{p.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            data-reveal
            className="text-3xl md:text-5xl font-bold text-center mb-10"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            Jumbo Loan FAQ — Colorado
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* Mountain CTA */}
      <section
        className="relative py-24 md:py-36 px-6 text-white text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,35,25,0.55), rgba(20,35,25,0.55)), url("/images/cta-mountain.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#1F2E2A',
        }}
      >
        <h2
          data-reveal="fade"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          The Mountain Property You Want Is Within Reach
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Jumbo financing for Colorado's most sought-after markets. Let's talk through your numbers.
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
          <Link
            href="/loan-programs/jumbo-loans"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
            style={{ backgroundColor: 'transparent', color: '#F5EFE6', border: '2px solid #F5EFE6' }}
          >
            Learn About Jumbo Loans
          </Link>
        </div>
        <p className="mt-8 text-xs text-white/50">Jamie Becker NMLS #794730 | Xpert Home Lending NMLS #2179191 | 201 Columbine St Suite 300, Denver CO 80206</p>
      </section>
    </>
  )
}
