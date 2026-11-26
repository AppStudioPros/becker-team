import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Colorado Mortgage FAQ',
  description:
    'Answers to the most common mortgage questions — down payments, credit scores, VA loans, FHA loans, closing timelines, and more. Jamie Becker, NMLS #794730, Denver CO.',
  alternates: { canonical: 'https://www.thebeckerteam.com/faq' },
}

const faqs = [
  {
    category: 'Colorado Market',
    items: [
      { q: 'What is the CHFA loan program in Colorado?', a: 'The Colorado Housing and Finance Authority offers first mortgages through participating lenders. Eligible buyers may pair a CHFA first mortgage with a down payment assistance grant or a second mortgage. Income limits and first-time buyer rules vary by program, and homebuyer education is required.' },
      { q: 'Does The Becker Team offer VA loans in Colorado Springs?', a: "Absolutely. Colorado Springs has one of the largest military concentrations in the country — Fort Carson, Peterson SFB, Schriever AFB, and the Air Force Academy. VA loans are a specialty at The Becker Team. Eligible veterans, active-duty service members, and surviving spouses can purchase with no down payment in many cases and no monthly mortgage insurance. Each lender sets its own rate and fees. Jamie works with military clients at all Colorado installations and statewide." },
      { q: 'Can I get a jumbo loan for a mountain property in Vail, Aspen, or Boulder?', a: "Yes. The Becker Team specializes in jumbo loans for Colorado's mountain resort markets. Vail, Aspen, Breckenridge, Boulder, and Summit County all qualify. Mountain resort properties sometimes require specialty financing including non-warrantable condo programs — Jamie has experience navigating all of it." },
      { q: 'Do you offer mortgages for self-employed borrowers in Colorado?', a: "Yes. The Bank Statement Mortgage Program lets self-employed buyers, business owners, and freelancers qualify using 12-24 months of bank statements instead of tax returns. P&L and asset depletion options are also available — ideal for Colorado's large population of remote workers and tech entrepreneurs." },
      { q: 'What Colorado cities does The Becker Team serve?', a: "The Becker Team is based in Denver and serves all of Colorado — including Denver, Aurora, Lakewood, Littleton, Colorado Springs, Boulder, Fort Collins, Vail, Aspen, Breckenridge, Steamboat Springs, Summit County, and the Western Slope. Jamie can work remotely with clients anywhere in the state." },
    ],
  },
  {
    category: 'Getting Started',
    items: [
      { q: 'How do I know how much home I can afford?', a: 'Start by deciding what monthly payment and cash at closing fit your budget. Jamie can review your income, debts, assets and credit to estimate a purchase range.' },
      { q: 'What is the difference between pre-qualification and pre-approval?', a: 'Pre-qualification is a quick estimate based on self-reported information. Pre-approval is a verified review of your financials with a formal credit pull — sellers take pre-approvals more seriously.' },
      { q: 'How long does the mortgage process take?', a: 'Your closing date depends on when your lender approves the loan, whether the home needs an appraisal, and when the title work is complete. Tell us the date you’re considering and we’ll walk you through what needs to happen before then. For most home purchases, you also need to receive your Closing Disclosure at least three business days before signing.' },
      { q: 'Do I need to sell my current home before buying a new one?', a: 'Not necessarily. Bridge loans, contingent offers, or properly timed closings can allow you to buy before you sell. We help structure the right solution for your situation.' },
    ],
  },
  {
    category: 'Down Payments & Credit',
    items: [
      { q: 'How much of a down payment do I need?', a: 'It depends on the loan type. Eligible VA buyers can often purchase with no down payment. FHA purchase loans may allow 3.5% down with a qualifying credit score of at least 580. Some conventional programs allow 3% down on a one-unit primary home. Jumbo loans typically require 10-20%.' },
      { q: 'What credit score do I need to buy a home?', a: 'It depends on the program and lender. FHA may allow 3.5% down with a qualifying score of 580 or higher. CHFA generally requires a 620 mid-credit score, with possible exceptions for borrowers who have no score. VA sets no minimum score, though individual lenders may set one.' },
      { q: 'Can I buy a home with bad credit?', a: 'Some programs may work with lower scores. Under FHA rules, buyers with a qualifying score of 500 to 579 may be eligible with at least 10% down. Lenders can set higher minimums and also review your finances and credit history.' },
      { q: 'Can down payment funds come from a gift?', a: 'Yes — gift funds from family members are acceptable on most loan programs including FHA and conventional loans. VA loans also allow gift funds. Proper documentation of the gift is required.' },
    ],
  },
  {
    category: 'Loan Programs',
    items: [
      { q: 'What is a VA loan and who qualifies?', a: 'The Department of Veterans Affairs backs these loans for eligible veterans, active-duty service members and surviving spouses. Eligible buyers may qualify with no down payment and no monthly mortgage insurance. A VA funding fee may apply.' },
      { q: 'What is an FHA loan?', a: 'An FHA loan is a mortgage insured by the Federal Housing Administration. Buyers may qualify with as little as 3.5% down and a qualifying credit score of at least 580. FHA loans require mortgage insurance.' },
      { q: 'What is a jumbo loan?', a: 'A jumbo loan exceeds the conforming loan limit for the property’s county, number of units and applicable year. Compare the amount you plan to borrow after the down payment with the FHFA county limit.' },
      { q: 'What is an asset qualifier loan?', a: 'This loan uses the eligible assets you have left after closing to help you qualify. Our benchmark is 125% of the loan amount. This can help buyers with substantial savings or investments, including retirees and buyers with complex tax returns.' },
      { q: 'I am self-employed — can I still get a mortgage?', a: 'Absolutely. We specialize in self-employed borrowers. Bank statement loans use 12-24 months of deposits instead of tax returns to determine qualifying income — a strong option when write-offs reduce taxable income on paper.' },
      { q: 'What is the Mortgage Accelerator program?', a: 'The Accelerator uses a line of credit secured by your home for everyday banking. Deposits reduce the balance and withdrawals increase it. Paying down the balance faster depends on how much extra cash you can leave after bills and interest. Compare both loans using the same amount of money before deciding.' },
    ],
  },
  {
    category: 'Rates & Costs',
    items: [
      { q: 'How are mortgage rates determined?', a: 'Rates are influenced by the broader bond market, the Federal Reserve\'s policy decisions, the loan program, your credit score, down payment, loan term, and property type. Rates change daily.' },
      { q: 'Should I lock my rate?', a: 'Rate locks protect you from rate increases during processing. We advise on timing based on current market conditions and your closing timeline. Lock periods typically range from 30-60 days.' },
      { q: 'What are closing costs?', a: 'Closing costs can include lender fees, an appraisal and title services. Your Loan Estimate also shows prepaid items, such as homeowners insurance, and estimates how much cash you’ll need at closing.' },
      { q: 'Can closing costs be rolled into the loan?', a: 'In some cases yes — seller concessions, lender credits, or certain loan structures allow closing costs to be covered without cash at closing. This trades a slightly higher rate for reduced upfront costs.' },
    ],
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.flatMap(cat =>
    cat.items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    }))
  ),
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thebeckerteam.com' },
    { '@type': 'ListItem', position: 2, name: 'Mortgage FAQ', item: 'https://www.thebeckerteam.com/faq' },
  ],
}

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section
        className="py-16 px-6 text-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,35,25,0.75), rgba(20,35,25,0.75)), url("/images/squarespace/hero-mountain.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#C4A35A' }}>
          Mortgage Questions, Answered
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Frequently Asked Questions
        </h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
          Everything you need to know about the mortgage process, loan programs, and working with The Becker Team.
        </p>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        {faqs.map(cat => (
          <div key={cat.category} className="mb-12">
            <h2
              className="text-2xl font-bold mb-6 pb-3"
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                color: '#1F2E2A',
                borderBottom: '2px solid #B98942',
              }}
            >
              {cat.category}
            </h2>
            <div className="space-y-6">
              {cat.items.map(item => (
                <div key={item.q} className="border-b border-gray-100 pb-6">
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2E2A' }}>
                    {item.q}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div
          className="mt-12 p-8 text-center rounded"
          style={{ backgroundColor: '#1F2E2A' }}
        >
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
            Still Have Questions?
          </h2>
          <p className="text-gray-300 mb-6">
            Every mortgage situation is unique. Let&apos;s talk through yours directly.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 font-bold text-sm uppercase tracking-widest rounded"
            style={{ backgroundColor: '#B98942', color: '#fff' }}
          >
            Talk to Jamie
          </Link>
        </div>
      </section>
    </>
  )
}
