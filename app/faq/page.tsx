import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mortgage FAQ | The Becker Team Colorado',
  description:
    'Answers to the most common mortgage questions — down payments, credit scores, VA loans, FHA loans, closing timelines, and more. Jamie Becker, NMLS #794730, Denver CO.',
  alternates: { canonical: 'https://www.thebeckerteam.com/faq' },
}

const faqs = [
  {
    category: 'Getting Started',
    items: [
      { q: 'How do I know how much home I can afford?', a: 'Start with a pre-qualification call with Jamie. We review your income, debts, assets, and credit to give you a realistic purchase range — usually within 24 hours, at no cost.' },
      { q: 'What is the difference between pre-qualification and pre-approval?', a: 'Pre-qualification is a quick estimate based on self-reported information. Pre-approval is a verified review of your financials with a formal credit pull — sellers take pre-approvals more seriously.' },
      { q: 'How long does the mortgage process take?', a: 'The Becker Team can close in as little as 10 days for straightforward purchases. Complex files or unique loan programs may take 21-30 days. We work fast without cutting corners.' },
      { q: 'Do I need to sell my current home before buying a new one?', a: 'Not necessarily. Bridge loans, contingent offers, or properly timed closings can allow you to buy before you sell. We help structure the right solution for your situation.' },
    ],
  },
  {
    category: 'Down Payments & Credit',
    items: [
      { q: 'How much of a down payment do I need?', a: 'It depends on the loan type. VA loans require zero down payment for eligible veterans. FHA loans start at 3.5%. Conventional loans can be as low as 3-5%. Jumbo loans typically require 10-20%.' },
      { q: 'What credit score do I need to buy a home?', a: 'Most loan programs require a minimum score of 580-620. VA loans are sometimes more flexible. A higher score means better rates. We can review your credit and identify quick ways to improve your score before applying.' },
      { q: 'Can I buy a home with bad credit?', a: 'It depends on how low the score is and the overall picture. FHA loans are more flexible with lower scores. In some cases, taking 3-6 months to build credit before applying saves you significantly on rate and terms.' },
      { q: 'Can down payment funds come from a gift?', a: 'Yes — gift funds from family members are acceptable on most loan programs including FHA and conventional loans. VA loans also allow gift funds. Proper documentation of the gift is required.' },
    ],
  },
  {
    category: 'Loan Programs',
    items: [
      { q: 'What is a VA loan and who qualifies?', a: 'VA loans are mortgage loans backed by the Department of Veterans Affairs for eligible veterans, active-duty service members, and surviving spouses. They require no down payment, no PMI, and typically offer competitive rates.' },
      { q: 'What is an FHA loan?', a: 'FHA loans are government-insured mortgages with down payments as low as 3.5% and more flexible credit requirements than conventional loans. Mortgage insurance is required for the life of the loan in most cases.' },
      { q: 'What is a jumbo loan?', a: 'A jumbo loan exceeds the conforming loan limits set by Fannie Mae and Freddie Mac — currently $766,550 in most U.S. markets. They are used for higher-value properties and have stricter qualification requirements.' },
      { q: 'What is an asset qualifier loan?', a: 'Asset qualifier loans allow borrowers to qualify based on assets rather than traditional income. Ideal for retirees, investors, or high-net-worth individuals with significant savings or investments but non-traditional income documentation.' },
      { q: 'I am self-employed — can I still get a mortgage?', a: 'Absolutely. We specialize in self-employed borrowers. Bank statement loans use 12-24 months of deposits instead of tax returns to determine qualifying income — a strong option when write-offs reduce taxable income on paper.' },
      { q: 'What is the Mortgage Accelerator program?', a: 'The Mortgage Accelerator is a proprietary program designed to dramatically reduce the time it takes to pay off your mortgage — cutting years off the loan and saving significant interest — without increasing your monthly payment.' },
    ],
  },
  {
    category: 'Rates & Costs',
    items: [
      { q: 'How are mortgage rates determined?', a: 'Rates are influenced by the broader bond market, the Federal Reserve\'s policy decisions, the loan program, your credit score, down payment, loan term, and property type. Rates change daily.' },
      { q: 'Should I lock my rate?', a: 'Rate locks protect you from rate increases during processing. We advise on timing based on current market conditions and your closing timeline. Lock periods typically range from 30-60 days.' },
      { q: 'What are closing costs?', a: 'Closing costs typically run 2-5% of the loan amount and include lender fees, title insurance, appraisal, prepaid property taxes and insurance, and more. We provide a detailed Loan Estimate early in the process so there are no surprises.' },
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
