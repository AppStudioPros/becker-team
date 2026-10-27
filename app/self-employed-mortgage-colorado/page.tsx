import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Self-Employed Mortgage Colorado | Bank Statement Loans | The Becker Team',
  description:
    'Self-employed mortgage programs in Colorado. Bank statement loans, asset qualifier loans, and non-QM options for freelancers, 1099 workers, and business owners. Jamie Becker NMLS #794730.',
  alternates: { canonical: 'https://www.thebeckerteam.com/self-employed-mortgage-colorado' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'The Becker Team — Self-Employed Mortgage Colorado',
  description: 'Bank statement loans, asset qualifier programs, and non-QM mortgage options for self-employed buyers in Colorado.',
  url: 'https://www.thebeckerteam.com/self-employed-mortgage-colorado',
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
  areaServed: [{ '@type': 'State', name: 'Colorado' }],
  founder: { '@type': 'Person', name: 'Jamie Becker', identifier: 'NMLS #794730' },
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
  { title: 'Bank Statement Loans', body: '12 or 24 months of personal or business bank statements replace tax returns for income verification. Deposits are averaged to calculate qualifying income. No W-2s required.' },
  { title: 'Asset Qualifier Loans', body: 'Qualify using liquid assets and investment accounts instead of income documentation at all. If you have significant savings, retirement accounts, or investment portfolios, this program may work for you.' },
  { title: '1099 Income Programs', body: 'Freelancers and independent contractors with consistent 1099 income can often qualify using 1-2 years of 1099 forms instead of full tax returns, avoiding the impact of business deductions on qualifying income.' },
  { title: 'Profit and Loss Statement Loans', body: 'CPA-prepared or borrower-prepared profit and loss statements can be used with some non-QM programs to document income without tax return scrutiny.' },
  { title: 'DSCR Investment Loans', body: 'For real estate investors, DSCR (Debt Service Coverage Ratio) loans qualify based on property rental income rather than personal income. No tax returns, no W-2s.' },
  { title: 'Conventional with Two-Year History', body: 'If you have two full years of self-employment documented on tax returns and your net income is strong enough, conventional loans are still available and usually the lowest-cost option.' },
]

const faqs = [
  {
    q: 'Can self-employed people get a mortgage in Colorado?',
    a: 'Yes. Self-employed buyers have multiple paths to mortgage financing. The main challenge is that traditional lenders use tax return net income for qualification, and self-employed borrowers often show lower net income due to legitimate business deductions. Bank statement loans, asset qualifier programs, and 1099-based qualification are all alternatives that work around this problem. Jamie has placed hundreds of self-employed borrowers into homes across Colorado.',
  },
  {
    q: 'What is a bank statement loan?',
    a: 'A bank statement loan uses 12 or 24 months of bank deposit history to calculate your income instead of tax returns. The lender takes your average monthly deposits, applies an expense ratio (often 50% for business accounts), and uses the result as your qualifying income. This approach often shows significantly higher income than a tax return for self-employed borrowers who write off substantial business expenses. Personal and business account statements can both be used.',
  },
  {
    q: 'How many years of self-employment do I need to qualify?',
    a: 'For bank statement loans and most non-QM programs, lenders typically want to see 2 years of self-employment history. Some programs will consider 1 year with strong supporting documentation. For conventional loans using tax returns, you need 2 years of returns showing self-employment income. If you recently transitioned to self-employment from a W-2 role in the same field, some lenders are more flexible. Jamie will assess your specific timeline and match you to the right program.',
  },
  {
    q: 'Can I use business bank statements instead of personal?',
    a: 'Yes. Business bank statements are accepted by most bank statement loan programs. Because business accounts typically show higher deposit volumes than personal accounts, lenders apply an expense ratio to estimate actual net income. Common expense ratios are 50% for service businesses and up to 50-60% for businesses with higher operating costs. Some programs allow you to use your CPA or accountant\'s letter to set a different expense ratio that better reflects your actual profit margins.',
  },
  {
    q: 'What is an asset qualifier loan?',
    a: 'An asset qualifier (or asset depletion) loan lets you qualify based on your net worth rather than your current income. The lender takes your liquid assets, divides them over a set period (often the remaining loan term), and uses that as your monthly income for qualification purposes. If you have $2M in liquid assets, for example, that can translate into substantial qualifying income. These programs are designed for retirees, investors, and high-net-worth buyers whose balance sheets are strong but current income is limited.',
  },
  {
    q: 'What Colorado industries have the most self-employed buyers?',
    a: 'Colorado has a high concentration of self-employed buyers in tech and software consulting, cannabis industry operators and owners, real estate investors, remote workers with LLC structures, restaurant and hospitality entrepreneurs, healthcare practitioners (therapists, dentists, chiropractors), and outdoor industry professionals. Jamie has worked with buyers across all of these sectors and understands how income is structured in each.',
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
          Bank statement loans, asset qualifier programs, and non-QM options for Colorado freelancers, 1099 workers, business owners, and entrepreneurs. Your tax return does not have to define your loan.
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
          <span>✦ Bank Statement Loan Specialists</span>
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
            Traditional mortgage underwriting was built around the W-2 worker with a predictable paycheck and a simple tax return. That system works fine for employees. It often breaks down completely for self-employed buyers. If you run a business, work as a contractor, freelance, or have any income structure that involves write-offs and deductions, your taxable income is almost certainly lower than your actual earning power. Colorado has one of the highest concentrations of self-employed workers in the country — remote tech consultants, cannabis business owners, real estate investors, restaurant operators, healthcare practitioners — and all of them need access to mortgage programs that reflect how they actually earn. Jamie Becker (NMLS #794730) specializes in exactly these situations, with bank statement loans, asset qualifier programs, and non-QM options that work the way your income does.
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
