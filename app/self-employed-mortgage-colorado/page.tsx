import { teamReference } from '@/lib/siteIdentity'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Self-Employed Mortgage Options in Colorado',
  description:
    'Self-employed in Colorado? Compare bank statement loans and other mortgage options, and learn which documents each approach may require.',
  alternates: { canonical: 'https://www.thebeckerteam.com/self-employed-mortgage-colorado' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'The Becker Team — Self-Employed Mortgage Colorado',
  description: 'Bank statement loans, asset qualifier programs, and non-QM mortgage options for self-employed buyers in Colorado.',
  url: 'https://www.thebeckerteam.com/self-employed-mortgage-colorado',
  provider: teamReference,
  areaServed: [{ '@type': 'State', name: 'Colorado' }],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thebeckerteam.com' },
    { '@type': 'ListItem', position: 2, name: 'Self-Employed Mortgage Colorado', item: 'https://www.thebeckerteam.com/self-employed-mortgage-colorado' },
  ],
}

const benefits = [
  { title: 'Bank Statement Loans', body: 'The lender can use 12 or 24 months of personal or business bank statements to review your income. It averages eligible deposits and may adjust for business expenses.' },
  { title: 'Asset Qualifier Loans', body: 'This option uses eligible assets left after closing. If you have significant savings, retirement funds or investments, we can help you review which accounts may count.' },
  { title: '1099 Income Programs', body: 'Freelancers and independent contractors with consistent 1099 income can often qualify using 1-2 years of 1099 forms instead of full tax returns, avoiding the impact of business deductions on qualifying income.' },
  { title: 'Profit and Loss Statement Loans', body: 'CPA-prepared or borrower-prepared profit and loss statements can be used with some non-QM programs to document income without tax return scrutiny.' },
  { title: 'DSCR Investment Loans', body: 'For real estate investors, DSCR (Debt Service Coverage Ratio) loans qualify based on property rental income rather than personal income. No tax returns, no W-2s.' },
  { title: 'Conventional Loans', body: 'A lender commonly reviews two years of tax returns. One year may be enough if your business and ownership history meet the loan requirements. We can compare the terms with other options.' },
]

const faqs = [
  {
    q: 'Can self-employed people get a mortgage in Colorado?',
    a: 'Yes. We can look at a conventional loan if your tax returns support the income you need to qualify. If another option fits better, we can review eligible bank deposits or other records. The right choice depends on how you earn, the property you’re buying and the loan terms.',
  },
  {
    q: 'What is a bank statement loan?',
    a: 'A bank statement loan can document business income with 12 or 24 months of personal or business bank statements. The lender averages eligible deposits and may account for business expenses. Transfers between your own accounts don’t create new income. We can help you identify which deposits the lender may count.',
  },
  {
    q: 'How many years of self-employment do I need to qualify?',
    a: 'Your time in business and the number of tax returns a lender needs are separate. Two years of returns is common for a conventional loan. A lender may accept one year if your business and ownership history meet the rules. If you recently started a business in your field, tell us about your prior work so we can check which loan options fit.',
  },
  {
    q: 'Can I use business bank statements instead of personal?',
    a: 'Yes, some programs accept business bank statements. A lender may subtract a share of eligible deposits to account for business expenses. That calculation depends on the program and the records the lender accepts. Before you pay for an accountant’s letter, ask us whether it would help document your expenses.',
  },
  {
    q: 'What is an asset qualifier loan?',
    a: 'Our Asset Qualifier looks at eligible assets you’ll have left after paying your down payment and closing costs. The lender checks which accounts you own and can access. This may be an option if you have substantial savings or investments and limited income from a paycheck.',
  },
  {
    q: 'What should I bring if my self-employment income varies?',
    a: 'Start with how and when you’re paid. If you invoice clients or earn more in some seasons, bring the records that show those patterns. We can help you work out which statements, returns or business records a lender may need.',
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

export default function SelfEmployedMortgagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section
        className="relative py-28 md:py-40 px-6 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 60%, #162518 100%)' }}
      >
        <p className="text-sm uppercase tracking-widest font-semibold mb-4 text-white/70">Self-Employed Buyers, Colorado</p>
        <h1
          className="text-4xl md:text-6xl font-bold mb-6"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Self-Employed Mortgage Colorado
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80 leading-relaxed">
          Jamie Becker of The Becker Team helps Colorado freelancers, independent contractors, and business owners explore bank statement mortgages and other options for self-employed buyers.
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
          <Link href="/loan-programs/self-employed-loans" className="underline underline-offset-4">
            Explore self-employed loan programs
          </Link>
          <span>✦ 1099 and Non-QM Programs</span>
          <span>✦ No W-2 Required</span>
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
            Your Tax Return Is Not Your Income
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4a5e53' }}>
            If you run a business or work for yourself, your tax returns may show lower net income after business expenses. We’ll review how you earn and which records you have. That gives us a place to start when comparing a conventional mortgage with a bank statement loan or another option for self-employed buyers.
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
            Self-Employed Loan Programs
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
            Self-Employed Mortgage FAQ
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
          You Run a Business. You Can Buy a Home.
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Get pre-approved using your actual income, not just your tax return. Jamie will find the right program for your situation.
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
