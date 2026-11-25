import type { Metadata } from 'next'
import Link from 'next/link'

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

const heading = 'mb-5 text-3xl font-bold leading-tight text-[#1F2E2A] md:text-4xl'
const subheading = 'mb-2 mt-6 text-xl font-bold text-[#1F2E2A]'
const sourceLink = 'font-semibold text-[#294C40] underline underline-offset-4'
const sectionStyle = 'scroll-mt-24 border-b border-[#ded9cc] pb-9'

export default function MortgageAcceleratorGuide() {
  return (
    <article className="bg-white text-[#1F2E2A]">
      <header className="bg-[#1F2E2A] px-6 py-14 text-[#F5EFE6] md:py-20">
        <div className="mx-auto max-w-5xl">
          <Link href={overview} className="text-sm font-semibold underline underline-offset-4">Home Mortgage Accelerator overview</Link>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">How the Home Mortgage Accelerator works</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed">
            What happens to your mortgage when your paycheck comes in and the bills go out?
            Follow the money through one month of The Becker Team’s example, then see what you
            could do with the same dollars on your existing mortgage.
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-12 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-14 lg:py-16">
        <nav aria-label="In this guide" className="self-start rounded bg-[#F5EFE6] p-5 lg:sticky lg:top-24">
          <p className="mb-3 font-semibold">In this guide</p>
          <ul className="space-y-3 text-sm leading-relaxed">
            {sections.map(({ id, label }) => (
              <li key={id}><a className="underline underline-offset-4" href={'#' + id}>{label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="prose-becker min-w-0 space-y-10">
          <section id="how-it-works" className={sectionStyle}>
            <h2 className={heading}>How the strategy works, step by step</h2>
            <p>The Becker Team describes its Accelerator as a mortgage strategy that uses a home-secured line of credit for everyday banking. Income deposited into the account reduces the amount borrowed. Paying household bills from it brings the balance back up. What matters is how much you owe between those transactions and how much of each deposit you can leave against the debt after expenses and interest.</p>
            <h3 className={subheading}>1. Start with the mortgage you have</h3>
            <p>Take your balance, interest rate, remaining term and required principal-and-interest payment from your most recent statement. Separate taxes and insurance if you pay them through escrow. Those bills still belong in your household budget under either option. For a refinance, also get the amount needed to pay off the existing loan and an itemized list of new costs. A balance copied from a monthly statement and a payoff quote for a particular closing date can differ.</p>
            <h3 className={subheading}>2. Follow a paycheck through the account</h3>
            <p>Write down when your take-home pay actually arrives and when you expect to pay bills. In the linked-account model, a deposit can lower the balance used to calculate interest while that money stays in the account. When you use the line to pay a bill, you borrow that amount back. Two households can bring home the same pay and finish the month owing different amounts because their expenses differ. Even with identical expenses, the dates matter when the lender calculates interest on daily balances.</p>
            <h3 className={subheading}>3. Account for interest and every withdrawal</h3>
            <p>The payment schedule in the example lists income, expenses, interest and principal separately. That lets you trace how much debt the household actually pays down. Include bills that arrive outside a typical month, such as insurance renewals, property taxes paid directly or a repair you have been putting off. If a projection omits one of those bills, the money appears available to reduce the mortgage even though your household will need to spend it.</p>
            <h3 className={subheading}>4. Test the plan with your own calendar</h3>
            <p>Ask Jamie to run it once using your usual deposits and again using a tighter month from your actual statements. Set aside any cash you intend to keep available outside the loan. For each run, ask for the ending debt, interest charged, fees paid and cash still on hand. Those four figures let you see whether reaching a lower loan balance would leave you short of cash for something important.</p>
          </section>

          <section id="worked-example" className={sectionStyle}>
            <h2 className={heading}>A month from The Becker Team’s example</h2>
            <p>Page 3 of the original PDF shows a March 2026 row for each loan. The figures below come from those rows. They are the inputs and results of a simulation, rather than a record of a borrower’s payments or an offer of financing.</p>
            <table className="my-6 w-full border-collapse text-left text-sm">
              <caption className="pb-3 text-left font-semibold">March 2026, as modeled on page 3</caption>
              <thead className="bg-[#F5EFE6]">
                <tr><th scope="col" className="p-3">March activity</th><th scope="col" className="p-3 text-right">Accelerator</th><th scope="col" className="p-3 text-right">Standard loan</th></tr>
              </thead>
              <tbody className="divide-y divide-[#ded9cc] tabular-nums">
                <tr><th scope="row" className="p-3 font-normal">Interest</th><td className="p-3 text-right">$1,720.96</td><td className="p-3 text-right">$2,059.48</td></tr>
                <tr><th scope="row" className="p-3 font-normal">Principal paid</th><td className="p-3 text-right">$6,779.04</td><td className="p-3 text-right">$441.28</td></tr>
                <tr><th scope="row" className="p-3 font-normal">Balance after payment</th><td className="p-3 text-right">$418,220.96</td><td className="p-3 text-right">$424,558.72</td></tr>
              </tbody>
            </table>
            <p>Here is the Accelerator arithmetic. The simulator enters $10,000 of income and $1,500 of expenses. That leaves $8,500. After its $1,720.96 interest entry, $6,779.04 remains to reduce principal. Subtract that from $425,000 and you get the $418,220.96 balance reported for March. A homeowner whose essential expenses use up most of that deposit would have much less available for principal.</p>
            <p>On the standard side, the $2,500.76 payment breaks into $2,059.48 of interest and $441.28 of principal. The row shows no extra principal. The two columns therefore answer different household-budget questions. A borrower reading across the row might conclude that changing accounts produced the entire difference. Most of the difference in principal paid that month comes from sending more money toward the debt.</p>
            <p>There is also a discrepancy worth knowing before you use the annual chart. Page 1 shows a $50,000 one-time deposit. Page 2 starts the Accelerator at $375,000 and the standard loan at $425,000. The March Accelerator row on page 3 reconciles to $425,000 before that month’s principal payment. Page 1 also lists a one-month Accelerator term, while page 2 models payments over multiple years. Ask Jamie for a schedule that reconciles those entries before using the projected payoff year to make a decision.</p>
            <a href={pdf} download className="inline-block rounded bg-[#1F2E2A] px-6 py-3 font-semibold text-white">Download the original example (PDF)</a>
            <p className="mt-3 text-sm">The original 18-page illustration is labeled for mortgage professionals.</p>
          </section>

          <section id="payoff-options" className={sectionStyle}>
            <h2 className={heading}>Compare three ways to use the same money</h2>
            <p>Start each option with the same debt and the same pool of savings. If you plan to put $50,000 toward the home loan today, apply it on both sides of the comparison. If that money needs to stay in savings, leave it there in both cases. Then decide how much of your take-home pay you can commit over a full year. Hold that amount constant while you compare the different ways to send it.</p>
            <h3 className={subheading}>Extra principal on your current mortgage</h3>
            <p>Keep making the full scheduled payment. Ask the company that collects it how to designate extra money for principal, whether a prepayment penalty applies and where the extra amount will appear on your statement. This gives you a benchmark that uses the terms of the loan you already have. For a direct comparison with March in the PDF, give the standard mortgage the same $8,500 total payment budget. After its regular $2,500.76 payment, that leaves $5,999.24 to send as extra principal. Add the scheduled $441.28 and the total principal paid becomes $6,440.52, assuming the servicer applies it that month without a fee. In that calculation, the difference in March principal paid is $338.52. The PDF also uses different interest rates for the two loans, so the difference reflects more than deposit timing.</p>
            <h3 className={subheading}>Biweekly payments through your servicer</h3>
            <p>Every two weeks and twice a month are different schedules. With 26 half-payments, you send the equivalent of 13 full monthly payments in a year. With 24 half-payments, you send 12. Using the standard payment from the illustration, half is $1,250.38. Sending that amount 26 times totals $32,509.88, compared with $30,009.12 for 12 regular payments. The difference is $2,500.76 for the year. A fair comparison gives the extra-principal option that same annual amount.</p>
            <p>Before sending half a payment, ask whether the servicer accepts biweekly payments, charges an enrollment fee or holds the first half until a full payment arrives. If taxes and insurance are in your payment, ask how the extra amount is allocated. The figures above use only the payment shown in the example. Your servicer can tell you the amount and timing that will keep your own account current.</p>
            <h3 className={subheading}>The Accelerator with the same budget</h3>
            <p>Give Jamie the same starting balance, savings contribution and annual cash commitment you used for the other options, along with the dates you receive and spend money. Ask for a schedule showing when interest posts and when fees are paid. Pick a date that matters to you, such as your expected move or retirement, and compare debt remaining, interest and fees through that date. A lifetime total is less useful if you expect to sell the home in a few years.</p>
            <p className="text-sm">Payment references: <a className={sourceLink} href="https://www.consumerfinance.gov/consumer-tools/mortgages/answers/key-terms/#bi-weekly-payment">CFPB guide to biweekly payments</a> and <a className={sourceLink} href="https://www.consumerfinance.gov/consumer-tools/mortgages/your-mortgage-servicer-must-comply-with-federal-rules/">how a servicer handles payments</a>.</p>
          </section>

          <section id="who-it-fits" className={sectionStyle}>
            <h2 className={heading}>Who is likely to find it useful?</h2>
            <p>The Becker Team identifies consistent positive cash flow as a reason to explore the Accelerator. Look at what remains after the bills clear across several ordinary months, including a month with an unusually large expense. A steady surplus and a willingness to track transactions give you something meaningful to model. If your goal is to enter retirement with less debt, ask for a second projection using the income you expect after leaving work. A projection that assumes today’s full paycheck until the final payment can miss the very transition you are planning for.</p>
            <p>This structure may be a poor fit if you routinely draw savings to meet regular expenses, rely on a single unpredictable bonus to get ahead, or would have to put your entire emergency fund into the loan. It can also be a poor trade if replacing an existing loan means giving up a rate or payment you value. Homeowners in any of those situations can ask what happens if they keep their existing mortgage and send extra principal only in months when the money is actually available.</p>
          </section>

          <section id="risks-and-costs" className="scroll-mt-24">
            <h2 className={heading}>What could make the strategy cost more?</h2>
            <h3 className={subheading}>A rate change or an expensive refinance</h3>
            <p>Get the proposed rate and fees in writing. If the rate is variable, ask what index it follows, what the lender adds to that index, when it can change and whether it has a cap. Ask for a second projection at a higher rate while holding income and spending steady. For a refinance, include upfront costs and any charges rolled into the balance. If you plan to move, compare those costs with the interest difference you would actually see before the sale. The original PDF shows a rate assumption for a simulation. Your written terms determine what you would pay.</p>
            <p><a className={sourceLink} href="https://myhome.freddiemac.com/refinancing/costs-of-refinancing">Freddie Mac explains refinance costs</a>. The <a className={sourceLink} href="https://www.consumerfinance.gov/ask-cfpb/what-fees-can-my-lender-charge-if-i-take-out-a-heloc-en-249/">CFPB lists fees to ask about on a home equity line</a>, including annual charges and possible early cancellation fees.</p>
            <h3 className={subheading}>Losing access to cash when you need it</h3>
            <p>Cash held in a savings account and unused borrowing capacity on a home-secured line serve different purposes. The CFPB explains that a lender may restrict further draws in certain circumstances, including a significant drop in home value. Ask how you would cover a repair or a gap between paychecks if a draw were unavailable. On a loan secured by your home, failure to repay can put the home at risk. The <a className={sourceLink} href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-home-equity-line-of-credit-heloc-en-107/">CFPB’s guide to home equity lines</a> explains borrowing limits and repayment periods.</p>
            <h3 className={subheading}>What to bring to a review with Jamie</h3>
            <p>Bring your current mortgage statement, recent deposit and spending records, any written offer you are comparing, and a list of money you need to keep accessible. Mark any upcoming change in income, property taxes or household expenses. Ask for a schedule you can trace from the opening balance to the first month’s ending balance, just as you did above. Then do the same check for a lean month. That gives you a practical basis for deciding whether to change loans, send extra principal yourself or keep your current payment schedule.</p>
            <Link href="/contact" className={sourceLink}>Ask Jamie Becker about your mortgage scenario</Link>
          </section>
        </div>
      </div>
    </article>
  )
}
