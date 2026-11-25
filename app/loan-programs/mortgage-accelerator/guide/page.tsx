import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

const overview = '/loan-programs/mortgage-accelerator'
const pdf = '/mortgage-accelerator-example.pdf'

export const metadata: Metadata = {
  title: 'Home Mortgage Accelerator Guide and Payoff Example',
  description: 'Follow a month in The Becker Team’s mortgage payoff example. Compare extra principal and biweekly payments, and see how deposits, loan costs and risks affect the result.',
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
          Follow the money through one month of The Becker Team’s example, then see what you
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
            <p>The Becker Team describes its Accelerator as a mortgage strategy that uses a home-secured line of credit for everyday banking. Income deposited into the account reduces the amount borrowed. Paying household bills from it brings the balance back up. What matters is how much you owe between those transactions and how much of each deposit you can leave against the debt after expenses and interest.</p>
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
              <p>The payment schedule in the example lists income, expenses, interest and principal separately. That lets you trace how much debt the household actually pays down. Include bills that arrive outside a typical month, such as insurance renewals, property taxes paid directly or a repair you have been putting off. If a projection omits one of those bills, the money appears available to reduce the mortgage even though your household will need to spend it.</p>
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
          <h2 id="worked-example" tabIndex={-1} className={heading} style={displayFont}>A month from The Becker Team’s example</h2>
          <div className="prose-becker mx-auto max-w-3xl">
            <p>Page 3 of the original PDF shows a March 2026 row for each loan. The figures below come from those rows. They are the inputs and results of a simulation, rather than a record of a borrower’s payments or an offer of financing.</p>
            <div className="my-7 overflow-x-auto rounded border border-cream-border">
              <table className="w-full border-collapse text-left text-xs sm:text-base">
                <caption className="bg-forest px-3 py-4 text-left font-semibold text-cream sm:px-5">March 2026, as modeled on page 3</caption>
                <thead className="border-b border-cream-border bg-cream">
                  <tr><th scope="col" className="px-2 py-3 sm:px-5 sm:py-4">March activity</th><th scope="col" className="px-2 py-3 sm:px-5 sm:py-4 text-right">Accelerator</th><th scope="col" className="px-2 py-3 sm:px-5 sm:py-4 text-right">Standard loan</th></tr>
                </thead>
                <tbody className="divide-y divide-cream-border tabular-nums [&_tr:last-child]:bg-cream/60 [&_tr:last-child]:font-semibold">
                  <tr><th scope="row" className="px-2 py-3 sm:px-5 sm:py-4 font-normal">Interest</th><td className="px-2 py-3 sm:px-5 sm:py-4 text-right">$1,720.96</td><td className="px-2 py-3 sm:px-5 sm:py-4 text-right">$2,059.48</td></tr>
                  <tr><th scope="row" className="px-2 py-3 sm:px-5 sm:py-4 font-normal">Principal paid</th><td className="px-2 py-3 sm:px-5 sm:py-4 text-right">$6,779.04</td><td className="px-2 py-3 sm:px-5 sm:py-4 text-right">$441.28</td></tr>
                  <tr><th scope="row" className="px-2 py-3 sm:px-5 sm:py-4 font-normal">Balance after payment</th><td className="px-2 py-3 sm:px-5 sm:py-4 text-right">$418,220.96</td><td className="px-2 py-3 sm:px-5 sm:py-4 text-right">$424,558.72</td></tr>
                </tbody>
              </table>
            </div>
            <p>Here is the Accelerator arithmetic. The simulator enters $10,000 of income and $1,500 of expenses. That leaves $8,500. After its $1,720.96 interest entry, $6,779.04 remains to reduce principal. Subtract that from $425,000 and you get the $418,220.96 balance reported for March. A homeowner whose essential expenses use up most of that deposit would have much less available for principal.</p>
            <p>On the standard side, the $2,500.76 payment breaks into $2,059.48 of interest and $441.28 of principal. The row shows no extra principal. The two columns therefore answer different household-budget questions. A borrower reading across the row might conclude that changing accounts produced the entire difference. Most of the difference in principal paid that month comes from sending more money toward the debt.</p>
            <p>There is also a discrepancy worth knowing before you use the annual chart. Page 1 shows a $50,000 one-time deposit. Page 2 starts the Accelerator at $375,000 and the standard loan at $425,000. The March Accelerator row on page 3 reconciles to $425,000 before that month’s principal payment. Page 1 also lists a one-month Accelerator term, while page 2 models payments over multiple years. Ask Jamie for a schedule that reconciles those entries before using the projected payoff year to make a decision.</p>
          </div>
          <div className="mt-8 text-center">
            <a href={pdf} download className={button + ' bg-forest text-cream'}>Download the original example (PDF)</a>
            <p className="mx-auto mt-3 max-w-prose text-sm leading-relaxed text-gray-600">The original 18-page illustration is labeled for mortgage professionals.</p>
          </div>
        </div>
      </section>

      <section className={section + ' bg-cream'}>
        <div className="mx-auto max-w-5xl">
          <h2 id="payoff-options" tabIndex={-1} className={heading} style={displayFont}>Compare three ways to use the same money</h2>
          <div className="prose-becker mx-auto mb-8 max-w-3xl">
            <p>Start each option with the same debt and the same pool of savings. If you plan to put $50,000 toward the home loan today, apply it on both sides of the comparison. If that money needs to stay in savings, leave it there in both cases. Then decide how much of your take-home pay you can commit over a full year. Hold that amount constant while you compare the different ways to send it.</p>
          </div>
          <div className="space-y-5">
            <div className="grid gap-x-10 gap-y-1 rounded border border-cream-border bg-white p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:p-8">
              <h3 className={subheading} style={displayFont}>Extra principal on your current mortgage</h3>
              <div className="space-y-4 leading-relaxed text-gray-700">
                <p>Keep making the full scheduled payment. Ask the company that collects it how to designate extra money for principal, whether a prepayment penalty applies and where the extra amount will appear on your statement. This gives you a benchmark that uses the terms of the loan you already have. For a direct comparison with March in the PDF, give the standard mortgage the same $8,500 total payment budget. After its regular $2,500.76 payment, that leaves $5,999.24 to send as extra principal. Add the scheduled $441.28 and the total principal paid becomes $6,440.52, assuming the servicer applies it that month without a fee. In that calculation, the difference in March principal paid is $338.52. The PDF also uses different interest rates for the two loans, so the difference reflects more than deposit timing.</p>
              </div>
            </div>
            <div className="grid gap-x-10 gap-y-1 rounded border border-cream-border bg-white p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:p-8">
              <h3 className={subheading} style={displayFont}>Biweekly payments through your servicer</h3>
              <div className="space-y-4 leading-relaxed text-gray-700">
                <p>Every two weeks and twice a month are different schedules. With 26 half-payments, you send the equivalent of 13 full monthly payments in a year. With 24 half-payments, you send 12. Using the standard payment from the illustration, half is $1,250.38. Sending that amount 26 times totals $32,509.88, compared with $30,009.12 for 12 regular payments. The difference is $2,500.76 for the year. A fair comparison gives the extra-principal option that same annual amount.</p>
                <p>Before sending half a payment, ask whether the servicer accepts biweekly payments, charges an enrollment fee or holds the first half until a full payment arrives. If taxes and insurance are in your payment, ask how the extra amount is allocated. The figures above use only the payment shown in the example. Your servicer can tell you the amount and timing that will keep your own account current.</p>
              </div>
            </div>
            <div className="grid gap-x-10 gap-y-1 rounded border border-cream-border bg-white p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:p-8">
              <h3 className={subheading} style={displayFont}>The Accelerator with the same budget</h3>
              <div className="space-y-4 leading-relaxed text-gray-700">
                <p>Give Jamie the same starting balance, savings contribution and annual cash commitment you used for the other options, along with the dates you receive and spend money. Ask for a schedule showing when interest posts and when fees are paid. Pick a date that matters to you, such as your expected move or retirement, and compare debt remaining, interest and fees through that date. A lifetime total is less useful if you expect to sell the home in a few years.</p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-gray-700">Payment references: <a className={sourceLink} href="https://www.consumerfinance.gov/consumer-tools/mortgages/answers/key-terms/#bi-weekly-payment">CFPB guide to biweekly payments</a> and <a className={sourceLink} href="https://www.consumerfinance.gov/consumer-tools/mortgages/your-mortgage-servicer-must-comply-with-federal-rules/">how a servicer handles payments</a>.</p>
        </div>
      </section>

      <section
        className={section + ' bg-forest bg-cover bg-center text-white'}
        style={{ backgroundImage: 'linear-gradient(rgba(20,35,25,0.88), rgba(20,35,25,0.88)), url("/images/ma-coins-houses.jpg")' }}
      >
        <div className="mx-auto max-w-5xl">
          <h2 id="who-it-fits" tabIndex={-1} className={heading} style={displayFont}>Who is likely to find it useful?</h2>
          <div className="mx-auto grid gap-6 text-base leading-relaxed text-white/90 md:grid-cols-2 md:gap-12">
            <p>The Becker Team identifies consistent positive cash flow as a reason to explore the Accelerator. Look at what remains after the bills clear across several ordinary months, including a month with an unusually large expense. A steady surplus and a willingness to track transactions give you something meaningful to model. If your goal is to enter retirement with less debt, ask for a second projection using the income you expect after leaving work. A projection that assumes today’s full paycheck until the final payment can miss the very transition you are planning for.</p>
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
                <p>Get the proposed rate and fees in writing. If the rate is variable, ask what index it follows, what the lender adds to that index, when it can change and whether it has a cap. Ask for a second projection at a higher rate while holding income and spending steady. For a refinance, include upfront costs and any charges rolled into the balance. If you plan to move, compare those costs with the interest difference you would actually see before the sale. The original PDF shows a rate assumption for a simulation. Your written terms determine what you would pay.</p>
                <p><a className={sourceLink} href="https://myhome.freddiemac.com/refinancing/costs-of-refinancing">Freddie Mac explains refinance costs</a>. The <a className={sourceLink} href="https://www.consumerfinance.gov/ask-cfpb/what-fees-can-my-lender-charge-if-i-take-out-a-heloc-en-249/">CFPB lists fees to ask about on a home equity line</a>, including annual charges and possible early cancellation fees.</p>
              </div>
            </div>
            <div className="h-full rounded border border-cream-border bg-cream p-6 md:p-8">
              <h3 className={subheading} style={displayFont}>Losing access to cash when you need it</h3>
              <div className="space-y-4 leading-relaxed text-gray-700">
                <p>Cash held in a savings account and unused borrowing capacity on a home-secured line serve different purposes. The CFPB explains that a lender may restrict further draws in certain circumstances, including a significant drop in home value. Ask how you would cover a repair or a gap between paychecks if a draw were unavailable. On a loan secured by your home, failure to repay can put the home at risk. The <a className={sourceLink} href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-home-equity-line-of-credit-heloc-en-107/">CFPB’s guide to home equity lines</a> explains borrowing limits and repayment periods.</p>
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
