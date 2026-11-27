import SectionBackdrop from '@/components/SectionBackdrop'
import type { Metadata } from 'next'
import Link from 'next/link'
import RatesWidget from '@/components/RatesWidget'

export const metadata: Metadata = {
  title: 'Current Mortgage Interest Rates',
  description:
    'See national mortgage rate averages and ask Colorado mortgage broker Jamie Becker for a quote based on your loan, down payment and property.',
}

export default function InterestRatesPage() {
  return (
    <>
      {/* ── Header ── */}
      <section style={{ backgroundColor: '#1F2E2A' }} className="py-20 px-6 text-center text-white">
        <h1
          className="text-6xl md:text-7xl font-bold mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Current Mortgage Rates
        </h1>
        <p className="text-white/80 max-w-xl mx-auto">
          See how rates are moving nationally. For a quote on your home, we’ll compare lenders using your loan amount, down payment and credit history.
        </p>
      </section>

      {/* ── Rates content ── */}
      <section style={{ backgroundColor: '#F5EFE6' }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto">

          <div className="mx-auto mb-12 max-w-[680px] overflow-hidden rounded-lg border border-[#ede4cc] bg-white">
            <h2 className="px-4 pt-5 text-center text-2xl font-bold text-[#1F2E2A]">
              National Mortgage Rate Averages
            </h2>
            <p className="mx-auto mt-2 max-w-xl px-4 text-center text-sm text-gray-600">
              Mortgage News Daily tracks rates across lenders. Your Loan Estimate shows your own interest rate, annual percentage rate (APR) and closing costs.
            </p>
            <div className="py-3">
              <RatesWidget />
            </div>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 border-t border-[#ede4cc] px-4 py-4 text-center text-sm text-[#1F2E2A]">
              <a href="https://www.mortgagenewsdaily.com/mortgage-rates" className="underline underline-offset-4">
                See more rates on Mortgage News Daily
              </a>
              <Link href="/contact#contact-form" className="font-semibold underline underline-offset-4">
                Ask Jamie for a personalized quote
              </Link>
            </div>
          </div>

          <h2
            className="text-2xl font-bold mb-6 text-center"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            What Affects Your Rate?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
              { title: 'Credit Score', body: 'Lenders use your credit history when pricing a mortgage. The effect on your rate depends on the lender and the loan you choose.' },
              { title: 'Loan Type', body: 'The same borrower can get different rates on a conventional, FHA, VA or jumbo loan. Compare fees and monthly payments along with the rate.' },
              { title: 'Down Payment', body: 'Your down payment changes how much you borrow relative to the home’s value. That can affect both your interest rate and whether you pay mortgage insurance.' },
              { title: 'Loan Term', body: 'For the same loan amount, a 15-year mortgage usually has a higher monthly payment than a 30-year mortgage, even when its interest rate is lower.' },
              { title: 'How You’ll Use the Home', body: 'Lenders consider how you’ll use the home. Pricing can differ for a primary residence, a second home and a rental property.' },
              { title: 'Market Conditions', body: 'Mortgage rates move with the bond market, Federal Reserve policy, and broader economic data. Rates can shift daily.' },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded border p-6 bg-white"
                style={{ borderColor: '#ede4cc' }}
              >
                <h3
                  className="font-bold mb-2"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              What rate could you get for the home you have in mind?
            </p>
            <Link
              href="/contact#contact-form"
              className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
              style={{ backgroundColor: '#1F2E2A', color: '#F5EFE6', border: '2px solid #1F2E2A' }}
            >
              Request a Rate Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative isolate bg-[#1F2E2A] py-24 md:py-36 px-6 text-white text-center"
      >
        <SectionBackdrop src="/images/cta-mountain.jpg" shade={0.55} />
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Ready to apply?
        </h2>
        <p className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Tell us about the home you want to buy or refinance. We’ll use your application to compare loan options with you.
        </p>
        <a
          href="https://2179191.my1003app.com/794730/register"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
          style={{ backgroundColor: '#1F2E2A', color: '#F5EFE6', border: '2px solid #F5EFE6' }}
        >
          Start Your Application
        </a>
      </section>
    </>
  )
}
