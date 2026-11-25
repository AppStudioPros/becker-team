import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

const overview = '/loan-programs/mortgage-accelerator'

export const metadata: Metadata = {
  title: 'Home Mortgage Accelerator Guide and Payoff Example',
  description: 'Follow two paychecks through a $360,000 mortgage example. Compare a credit line, extra principal and biweekly payments using one household budget.',
  alternates: { canonical: '/loan-programs/mortgage-accelerator/guide' },
}

const sections = [
  { id: 'how-it-works', label: 'How the strategy works' },
  { id: 'worked-example', label: 'The numbers in the example' },
  { id: 'payoff-options', label: 'Compare three payoff options' },
  { id: 'who-it-fits', label: 'Who it fits' },
  { id: 'risks-and-costs', label: 'Risks and costs' },
]

const displayFont = { fontFamily: '"Playfair Display", Georgia, serif' }
const heading = 'scroll-mt-32 mx-auto mb-6 max-w-4xl text-center text-3xl font-bold leading-tight text-balance md:text-5xl'
const subheading = 'mb-3 text-xl font-semibold leading-snug text-forest md:text-2xl'
const sourceLink = 'font-semibold text-forest underline decoration-[#B98942] underline-offset-4 hover:decoration-forest'
const button = 'btn-hover inline-block max-w-full rounded px-6 py-4 text-center text-sm font-semibold uppercase tracking-widest sm:px-10'
const section = 'px-6 py-14 md:py-20'

export default function MortgageAcceleratorGuide() {
  return (
    <article className="bg-white text-forest">
      <header
        className="bg-forest bg-cover px-6 py-14 text-center text-white md:py-24"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,35,25,0.66), rgba(20,35,25,0.66)), url("/images/mortgage-accelerator-hero.jpg")',
          backgroundPosition: 'center 55%',
        }}
      >
        <Link href={overview} className="mb-5 inline-flex items-center gap-1 text-sm font-semibold text-cream underline-offset-4 hover:underline">
          <ChevronLeft size={16} aria-hidden="true" /> Home Mortgage Accelerator overview
        </Link>
        <h1 className="mx-auto mb-4 max-w-5xl text-4xl font-bold leading-tight text-balance md:text-6xl lg:text-7xl" style={displayFont}>
          How the Home Mortgage Accelerator works
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/90">
          What happens to your mortgage when your paycheck comes in and the bills go out?
          Follow two paychecks through a month of bills, then see what you
          could do with the same dollars on your existing mortgage.
        </p>
      </header>

      <nav aria-label="In this guide" className="border-b border-cream-dark bg-white px-6 py-6">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-forest">In this guide</p>
          <ul className="flex flex-wrap justify-center gap-x-2 gap-y-1">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={'#' + id}
                  className="inline-flex min-h-11 cursor-pointer items-center rounded px-3 py-2 text-sm font-semibold underline decoration-[#B98942] underline-offset-4 hover:bg-cream hover:decoration-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section className={section + ' bg-cream'}>
        <div className="mx-auto max-w-5xl">
          <h2 id="how-it-works" tabIndex={-1} className={heading} style={displayFont}>How the strategy works, step by step</h2>
          <div className="prose-becker mx-auto mb-9 max-w-3xl">
            <p>With the Home Mortgage Accelerator, you use a line of credit secured by your home for everyday banking. Income deposited into the account reduces the amount borrowed. Paying household bills from it brings the balance back up. What matters is how much you owe between those transactions and how much of each deposit you can leave against the debt after expenses and interest.</p>
          </div>
          <div className="grid gap-5 text-gray-700 leading-relaxed md:grid-cols-2">
            <div className="rounded border-2 border-forest bg-white p-6 md:p-8">
              <h3 className={subheading} style={displayFont}>1. Start with the mortgage you have</h3>
              <p>Take your balance, interest rate, remaining term and required principal-and-interest payment from your most recent statement. Separate taxes and insurance if you pay them through escrow. Those bills still belong in your household budget under either option. For a refinance, also get the amount needed to pay off the existing loan and an itemized list of new costs. A balance copied from a monthly statement and a payoff quote for a particular closing date can differ.</p>
            </div>
            <div className="rounded border-2 border-forest bg-white p-6 md:p-8">
              <h3 className={subheading} style={displayFont}>2. Follow a paycheck through the account</h3>
              <p>Write down when your take-home pay actually arrives and when you expect to pay bills. In the linked-account model, a deposit can lower the balance used to calculate interest while that money stays in the account. When you use the line to pay a bill, you borrow that amount back. Two households can bring home the same pay and finish the month owing different amounts because their expenses differ. Even with identical expenses, the dates matter when the lender calculates interest on daily balances.</p>
            </div>
            <div className="rounded border-2 border-forest bg-white p-6 md:p-8">
              <h3 className={subheading} style={displayFont}>3. Account for interest and every withdrawal</h3>
              <p>Keep a running balance as you work through the month. Once you account for the interest, you can see how much of your paycheck actually went toward the home. Include bills that arrive outside a typical month, such as insurance renewals, property taxes paid directly or a repair you have been putting off. If a projection omits one of those bills, the money appears available to reduce the mortgage even though your household will need to spend it.</p>
            </div>
            <div className="rounded border-2 border-forest bg-white p-6 md:p-8">
              <h3 className={subheading} style={displayFont}>4. Test the plan with your own calendar</h3>
              <p>Ask Jamie to run it once using your usual deposits and again using a tighter month from your actual statements. Set aside any cash you intend to keep available outside the loan. For each run, ask for the ending debt, interest charged, fees paid and cash still on hand. Those four figures let you see whether reaching a lower loan balance would leave you short of cash for something important.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={section + ' bg-white'}>
        <div className="mx-auto max-w-5xl">
          <h2 id="worked-example" tabIndex={-1} className={heading} style={displayFont}>What happens to a $360,000 balance in one month?</h2>
          <div className="prose-becker mx-auto max-w-3xl">
            <p>Picture two Denver homeowners who take home $8,000 a month. They owe $360,000 and want to put a little more toward their home without dipping into emergency savings. Their budget leaves $2,800 for the home loan after living expenses and savings. Each option gets that same budget. The figures are hypothetical. Neither loan gets a lump-sum payment, and the comparison assumes no fees.</p>
            <p>Where does the other $5,200 go? The couple budgets $1,400 for groceries and transportation, close to the combined monthly amount in <a className={sourceLink} href="https://livingwage.mit.edu/counties/08031">MIT’s Denver County estimates</a> for two adults without children. They allow $1,100 for property taxes, homeowners insurance and utilities, $1,500 for out-of-pocket health costs, everyday spending and other bills, and $1,200 for savings, repairs and irregular expenses. Property taxes and insurance are already covered in that budget, so the mortgage figures below include only principal and interest.</p>
            <h3 className={subheading} style={displayFont}>Two paychecks and a month of bills</h3>
            <p>Suppose their credit line charges 7% interest for a 30-day month. Two $4,000 paychecks post on the 1st and 16th. To keep the calendar easy to follow, the couple’s bills and savings transfers are grouped into two $2,600 withdrawals. Each transaction changes what they owe starting that day.</p>
            <div className="my-7 overflow-x-auto rounded border border-cream-border">
              <table className="w-full border-collapse text-left text-xs sm:text-base">
                <caption className="bg-forest px-3 py-4 text-left font-semibold text-cream sm:px-5">The couple’s credit line through the month</caption>
                <thead className="border-b border-cream-border bg-cream">
                  <tr><th scope="col" className="px-2 py-3 sm:px-5">Days</th><th scope="col" className="px-2 py-3 sm:px-5">What posts on the first day</th><th scope="col" className="px-2 py-3 text-right sm:px-5">Balance before interest</th></tr>
                </thead>
                <tbody className="divide-y divide-cream-border tabular-nums">
                  <tr><th scope="row" className="px-2 py-3 font-normal sm:px-5">1–7</th><td className="px-2 py-3 sm:px-5">$4,000 paycheck</td><td className="px-2 py-3 text-right sm:px-5">$356,000</td></tr>
                  <tr><th scope="row" className="px-2 py-3 font-normal sm:px-5">8–15</th><td className="px-2 py-3 sm:px-5">$2,600 goes out</td><td className="px-2 py-3 text-right sm:px-5">$358,600</td></tr>
                  <tr><th scope="row" className="px-2 py-3 font-normal sm:px-5">16–22</th><td className="px-2 py-3 sm:px-5">$4,000 paycheck</td><td className="px-2 py-3 text-right sm:px-5">$354,600</td></tr>
                  <tr><th scope="row" className="px-2 py-3 font-normal sm:px-5">23–30</th><td className="px-2 py-3 sm:px-5">$2,600 goes out</td><td className="px-2 py-3 text-right sm:px-5">$357,200</td></tr>
                </tbody>
              </table>
            </div>
            <p>The average balance over those 30 days is $356,686.67. Using daily simple interest and a 365-day year, the month’s interest comes to $2,052.17. Add that interest to the $357,200 balance and the couple owes $359,252.17. Their debt fell by <strong>$747.83</strong> after interest. Interest is rounded to the nearest cent after adding up the 30 daily charges.</p>
            <p>How much did depositing the paychecks early help? Suppose the couple kept their pay in checking, paid bills there and put the same $2,800 onto the same credit line on day 30. The balance would stay at $360,000 for 29 days, then fall to $357,200 for one day. Interest would be $2,070.70. Moving the paychecks earlier saved <strong>$18.53</strong> on that line for the month. Most of the debt reduction came from the money they could afford to leave in the account.</p>
          </div>
        </div>
      </section>

      <section className={section + ' bg-cream'}>
        <div className="mx-auto max-w-5xl">
          <h2 id="payoff-options" tabIndex={-1} className={heading} style={displayFont}>Compare three ways to use the same money</h2>
          <div className="prose-becker mx-auto mb-8 max-w-3xl">
            <p>Our couple has $2,800 a month for the loan, or $33,600 over a year if their budget holds. Their emergency savings stay in the bank under all three options. When you compare your own choices, use the same starting balance, keep the same cash cushion and look at the same date on each payment schedule.</p>
          </div>
          <div className="space-y-5">
            <div className="grid gap-x-10 gap-y-1 rounded border border-cream-border bg-white p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:p-8">
              <h3 className={subheading} style={displayFont}>Extra principal on your current mortgage</h3>
              <div className="space-y-4 leading-relaxed text-gray-700">
                <p>Suppose the couple’s existing mortgage has a fixed rate of 6.5% with 30 years remaining on the $360,000 balance. Their required monthly payment for principal and interest is $2,275.44. Of that, $1,950 is interest in the first month and $325.44 pays down principal. Their $2,800 budget leaves $524.56 for an extra principal payment. If the servicer applies it that month without a fee, their debt falls by <strong>$850</strong> to <strong>$359,150</strong>. That puts them $102.17 ahead of the 7% credit line in this example. The two loans charge different rates and calculate interest differently. A different pair of loans could give a different result.</p>
                <p>Check how your servicer wants you to mark an extra principal payment. After it posts, look at the principal balance on your statement. If money is tighter next month, you can make just the required payment under this example and keep the $524.56 for something else.</p>
              </div>
            </div>
            <div className="grid gap-x-10 gap-y-1 rounded border border-cream-border bg-white p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:p-8">
              <h3 className={subheading} style={displayFont}>Biweekly payments through your servicer</h3>
              <div className="space-y-4 leading-relaxed text-gray-700">
                <p>Half the couple’s scheduled payment is $1,137.72. Paying that amount every two weeks for 26 payments sends $29,580.72 in a year. That is one full payment more than paying half twice a month. It also falls $4,019.28 short of their $33,600 annual mortgage budget. They could send that difference as extra principal over the year to compare all three options using the same money. The dates their servicer applies each payment affect the interest they actually pay.</p>
                <p>Before sending half a payment, ask whether the servicer accepts <a className={sourceLink} href="https://www.consumerfinance.gov/consumer-tools/mortgages/answers/key-terms/#bi-weekly-payment">biweekly payments</a>, charges an enrollment fee or <a className={sourceLink} href="https://www.consumerfinance.gov/consumer-tools/mortgages/your-mortgage-servicer-must-comply-with-federal-rules/">holds the first half until a full payment arrives</a>. If taxes and insurance are in your payment, ask how the extra amount is allocated. With two paychecks a month, most months would have two debits, but a three-debit month would cost $3,413.16. Check the actual dates against your checking balance before you enroll.</p>
              </div>
            </div>
            <div className="grid gap-x-10 gap-y-1 rounded border border-cream-border bg-white p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:p-8">
              <h3 className={subheading} style={displayFont}>The Accelerator with the same budget</h3>
              <div className="space-y-4 leading-relaxed text-gray-700">
                <p>Give Jamie the same starting balance, savings contribution and annual cash commitment you used for the other options, along with the dates you receive and spend money. Ask for a schedule showing when interest posts and when fees are paid. Pick a date that matters to you, such as your expected move or retirement, and compare debt remaining, interest and fees through that date. A lifetime total is less useful if you expect to sell the home in a few years.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={section + ' bg-forest bg-cover bg-center text-white'}
        style={{ backgroundImage: 'linear-gradient(rgba(20,35,25,0.88), rgba(20,35,25,0.88)), url("/images/ma-coins-houses.jpg")' }}
      >
        <div className="mx-auto max-w-5xl">
          <h2 id="who-it-fits" tabIndex={-1} className={heading} style={displayFont}>Who is likely to find it useful?</h2>
          <div className="mx-auto grid gap-6 text-base leading-relaxed text-white/90 md:grid-cols-2 md:gap-12">
            <p>After you cover your bills and set money aside for surprises, how much of each paycheck can you leave against the loan? Look at what remains after the bills clear across several ordinary months, including a month with an unusually large expense. A steady surplus and a willingness to track transactions give you something meaningful to model. If your goal is to enter retirement with less debt, ask for a second projection using the income you expect after leaving work. A projection that assumes today’s full paycheck until the final payment can miss the very transition you are planning for.</p>
            <p>This structure may be a poor fit if you routinely draw savings to meet regular expenses, rely on a single unpredictable bonus to get ahead, or would have to put your entire emergency fund into the loan. It can also be a poor trade if replacing an existing loan means giving up a rate or payment you value. Homeowners in any of those situations can ask what happens if they keep their existing mortgage and send extra principal only in months when the money is actually available.</p>
          </div>
        </div>
      </section>

      <section className={section + ' bg-white'}>
        <div className="mx-auto max-w-5xl">
          <h2 id="risks-and-costs" tabIndex={-1} className={heading} style={displayFont}>What could make the strategy cost more?</h2>
          <div className="grid items-start gap-5 md:grid-cols-2">
            <div className="h-full rounded border border-cream-border bg-cream p-6 md:p-8">
              <h3 className={subheading} style={displayFont}>A rate change or an expensive refinance</h3>
              <div className="space-y-4 leading-relaxed text-gray-700">
                <p>Get the proposed rate and fees in writing. If the rate is variable, ask what index it follows, what the lender adds to that index, when it can change and whether it has a cap. Ask for a second projection at a higher rate while holding income and spending steady. For a refinance, include <a className={sourceLink} href="https://myhome.freddiemac.com/refinancing/costs-of-refinancing">upfront costs</a> and any charges rolled into the balance. For a home equity line, ask about <a className={sourceLink} href="https://www.consumerfinance.gov/ask-cfpb/what-fees-can-my-lender-charge-if-i-take-out-a-heloc-en-249/">annual charges and early cancellation fees</a>. If you plan to move, compare those costs with the interest difference you would actually see before the sale. On the daily balances in our example, an 8% rate would cost $2,345.34 in interest for the month. That leaves $454.66 of the same $2,800 budget to reduce the debt.</p>
              </div>
            </div>
            <div className="h-full rounded border border-cream-border bg-cream p-6 md:p-8">
              <h3 className={subheading} style={displayFont}>Losing access to cash when you need it</h3>
              <div className="space-y-4 leading-relaxed text-gray-700">
                <p>Cash held in a savings account and unused borrowing capacity on a home-secured line serve different purposes. A lender may <a className={sourceLink} href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-home-equity-line-of-credit-heloc-en-107/">restrict further draws</a> in certain circumstances, including a significant drop in home value. Ask how you would cover a repair or a gap between paychecks if a draw were unavailable. On a loan secured by your home, failure to repay can put the home at risk.</p>
              </div>
            </div>
          </div>
          <div className="mt-10 rounded bg-forest px-6 py-10 text-center text-white md:px-12 md:py-12">
            <h3 className="mb-4 text-2xl font-bold md:text-3xl" style={displayFont}>What to bring to a review with Jamie</h3>
            <p className="mx-auto mb-7 max-w-3xl text-left leading-relaxed text-white/90">Bring your current mortgage statement, recent deposit and spending records, any written offer you are comparing, and a list of money you need to keep accessible. Mark any upcoming change in income, property taxes or household expenses. Ask for a schedule you can trace from the opening balance to the first month’s ending balance, just as you did above. Then do the same check for a lean month. That gives you a practical basis for deciding whether to change loans, send extra principal yourself or keep your current payment schedule.</p>
            <Link href="/contact" className={button + ' border-2 border-cream text-cream'}>Ask Jamie Becker about your mortgage scenario</Link>
          </div>
        </div>
      </section>
    </article>
  )
}
