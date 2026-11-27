import SectionBackdrop from '@/components/SectionBackdrop'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Colorado Mortgage FAQ',
  description:
    'Find answers to Colorado mortgage questions about down payments, credit, VA and FHA loans, and what to expect before closing.',
  alternates: { canonical: 'https://www.thebeckerteam.com/faq' },
}

const faqs = [
  {
    category: 'Colorado Market',
    items: [
      { q: 'What is the CHFA loan program in Colorado?', a: 'The Colorado Housing and Finance Authority offers first mortgages through participating lenders. Eligible buyers may pair a CHFA first mortgage with a down payment assistance grant or a second mortgage. Income limits and first-time buyer rules vary by program, and homebuyer education is required.' },
      { q: 'Does The Becker Team offer VA loans in Colorado Springs?', a: 'Yes. We work with military buyers near Fort Carson, Peterson Space Force Base, Schriever Space Force Base and the Air Force Academy. Eligible veterans, active-duty service members and surviving spouses may qualify with no down payment and no monthly mortgage insurance. We can compare the rate, lender fees and any VA funding fee.' },
      { q: 'Can I get a jumbo loan for a mountain property in Vail, Aspen, or Boulder?', a: 'We can compare jumbo options for homes in these areas. Your loan amount determines whether you’re above the county’s conforming limit. The lender also reviews how you’ll use the home. For a resort condo, check whether a rental agreement restricts when you can stay there.' },
      { q: 'Do you offer mortgages for self-employed borrowers in Colorado?', a: 'Yes. We can review bank statement loans with business owners and freelancers. Some lenders use eligible deposits from 12 or 24 months of bank statements to document income. We can also discuss profit and loss statements or the Asset Qualifier if those options fit your situation.' },
      { q: 'What Colorado cities does The Becker Team serve?', a: "The Becker Team is based in Denver and serves all of Colorado — including Denver, Aurora, Lakewood, Littleton, Colorado Springs, Boulder, Fort Collins, Vail, Aspen, Breckenridge, Steamboat Springs, Summit County, and the Western Slope. Jamie can work remotely with clients anywhere in the state." },
    ],
  },
  {
    category: 'Getting Started',
    items: [
      { q: 'How do I know how much home I can afford?', a: 'Start by deciding what monthly payment and cash at closing fit your budget. Jamie can review your income, debts, assets and credit to estimate a purchase range.' },
      { q: 'What is the difference between pre-qualification and pre-approval?', a: 'Pre-qualification gives you an early borrowing estimate. A pre-approval letter shows what a lender is tentatively willing to lend after reviewing your information. The lender still needs to approve the loan and property. Locking the rate is a separate step.' },
      { q: 'How long does the mortgage process take?', a: 'Your closing date depends on when your lender approves the loan, whether the home needs an appraisal, and when the title work is complete. Tell us the date you’re considering and we’ll walk you through what needs to happen before then. For most home purchases, you also need to receive your Closing Disclosure at least three business days before signing.' },
      { q: 'Do I need to sell my current home before buying a new one?', a: 'Not necessarily. Bridge loans, contingent offers, or properly timed closings can allow you to buy before you sell. We help structure the right solution for your situation.' },
    ],
  },
  {
    category: 'Down Payments & Credit',
    items: [
      { q: 'How much of a down payment do I need?', a: 'It depends on the loan. Eligible VA buyers can often purchase with no down payment. FHA purchase loans may allow 3.5% down with a qualifying credit score of at least 580. Some conventional programs allow 3% down on a one-unit primary home. Jumbo lenders set their own down payment requirements.' },
      { q: 'What credit score do I need to buy a home?', a: 'It depends on the program and lender. FHA may allow 3.5% down with a qualifying score of 580 or higher. CHFA generally requires a 620 mid-credit score, with possible exceptions for borrowers who have no score. VA sets no minimum score, though individual lenders may set one.' },
      { q: 'Can I buy a home with bad credit?', a: 'Some programs may work with lower scores. Under FHA rules, buyers with a qualifying score of 500 to 579 may be eligible with at least 10% down. Lenders can set higher minimums and also review your finances and credit history.' },
      { q: 'Can down payment funds come from a gift?', a: 'Some FHA, conventional and VA loans allow gift funds from an eligible donor. Before anyone sends the money, ask your lender who can give it and what records you’ll need to document the gift.' },
    ],
  },
  {
    category: 'Loan Programs',
    items: [
      { q: 'What is a VA loan and who qualifies?', a: 'The Department of Veterans Affairs backs these loans for eligible veterans, active-duty service members and surviving spouses. Eligible buyers may qualify with no down payment and no monthly mortgage insurance. A VA funding fee may apply.' },
      { q: 'What is an FHA loan?', a: 'An FHA loan is a mortgage insured by the Federal Housing Administration. Buyers may qualify with as little as 3.5% down and a qualifying credit score of at least 580. FHA loans require mortgage insurance.' },
      { q: 'What is a jumbo loan?', a: 'A jumbo loan exceeds the conforming loan limit for the property’s county, number of units and applicable year. Compare the amount you plan to borrow after the down payment with that limit.' },
      { q: 'What is an asset qualifier loan?', a: 'This loan uses the eligible assets you have left after closing to help you qualify. Our benchmark is 125% of the loan amount. This can help buyers with substantial savings or investments, including retirees and buyers with complex tax returns.' },
      { q: 'Can I get a mortgage if I’m self-employed?', a: 'Yes. We can review your tax returns for a conventional loan or explore bank statement loans that count eligible deposits. The right option depends on your business history and the records you have.' },
      { q: 'What is the Mortgage Accelerator program?', guide: '/loan-programs/mortgage-accelerator/guide#worked-example', a: 'The Accelerator uses a line of credit secured by your home for everyday banking. Deposits reduce the balance and withdrawals increase it. Paying down the balance faster depends on how much extra cash you can leave after bills and interest. Compare both loans using the same amount of money before deciding.' },
    ],
  },
  {
    category: 'Rates & Costs',
    items: [
      { q: 'How are mortgage rates determined?', a: 'Rates are influenced by the broader bond market, the Federal Reserve\'s policy decisions, the loan program, your credit score, down payment, loan term, and property type. Rates change daily.' },
      { q: 'Should I lock my rate?', a: 'A rate lock generally protects your quoted rate if you close before it expires and your application stays the same. Check the top of page one of your Loan Estimate to see whether the rate is locked and when it expires. We can help you weigh the timing and cost of the lock.' },
      { q: 'What are closing costs?', a: 'Closing costs can include lender fees, an appraisal and title services. Your Loan Estimate also shows prepaid items, such as homeowners insurance, and estimates how much cash you’ll need at closing.' },
      { q: 'Can closing costs be rolled into the loan?', a: 'Some loans let you add certain costs to your balance. Seller or lender credits can help cover closing costs and are shown separately on your Loan Estimate. A lender credit may come with a higher rate. We can compare how each option affects your cash at closing, payment and total cost.' },
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
        className="relative isolate py-16 px-6 text-center text-white"
      >
        <SectionBackdrop src="/images/squarespace/hero-mountain.jpg" shade={0.75} hero />
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#C4A35A' }}>
          Mortgage Questions, Answered
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Frequently Asked Questions
        </h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
          Get answers about loan options, down payments, credit and what happens before closing.
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
                  {'guide' in item && item.guide && (
                    <Link href={item.guide} className="mt-2 inline-block font-semibold underline underline-offset-4">
                      See the one-month Accelerator payoff example
                    </Link>
                  )}
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
            className="gold-cta inline-block px-8 py-4 font-bold text-sm uppercase tracking-widest rounded"
            style={{ backgroundColor: '#B98942' }}
          >
            Talk to Jamie
          </Link>
        </div>
      </section>
    </>
  )
}
