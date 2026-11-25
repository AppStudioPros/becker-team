import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

const overview = '/loan-programs/mortgage-accelerator'

export const metadata: Metadata = {
  title: 'Home Mortgage Accelerator Guide and Payoff Example',
  description: 'See how deposits, spending and interest affect a $425,000 mortgage balance. Compare our Accelerator with biweekly payments and paying extra principal.',
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
    <article className="bg-white text-center text-forest [&_.prose-becker_p]:text-center!">
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
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/90">When your paycheck goes in and your bills come out, how much actually goes toward your home? We’ll walk you through one month on a $425,000 balance and show you what happens when you put the same money toward a traditional mortgage.</p>
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
            <p>With our Home Mortgage Accelerator, you use a line of credit secured by your home for everyday banking. When your paycheck goes in, the amount you owe goes down. When you pay a bill from the line, that amount goes back onto your balance. Interest depends on how much you owe while the money is there. Paying down your home over time depends on how much you can leave there after bills and interest.</p>
          </div>
          <div className="grid gap-5 text-gray-700 leading-relaxed md:grid-cols-2">
            <div className="rounded border-2 border-forest bg-white p-6 md:p-8">
              <h3 className={subheading} style={displayFont}>1. Start with the mortgage you have</h3>
              <p>We start with your current mortgage statement. We look at how much you owe, your interest rate, how many years you have left and how much of your payment goes to principal and interest. If your lender collects property taxes and homeowners insurance through escrow, we keep those costs in your budget under every option. If you’re considering a refinance, we also use a payoff quote for the expected closing date. It can differ from the balance on your last statement because interest accrues between payments.</p>
            </div>
            <div className="rounded border-2 border-forest bg-white p-6 md:p-8">
              <h3 className={subheading} style={displayFont}>2. Follow a paycheck through the account</h3>
              <p>Look at the dates your pay reaches your account and the dates your bills clear. On a line that calculates interest daily, a paycheck can reduce the balance used for interest as soon as the deposit posts. Paying a bill from the line raises the balance again. If most of your bills clear right after payday, the full deposit may only lower your balance for a day or two. We use your actual paydays and due dates when we compare options with you.</p>
            </div>
            <div className="rounded border-2 border-forest bg-white p-6 md:p-8">
              <h3 className={subheading} style={displayFont}>3. Account for interest and every withdrawal</h3>
              <p>Before you count money as available for the mortgage, look beyond this month’s bills. Property taxes, insurance renewals, car repairs and other irregular expenses still need a place in your budget. Include the money you want to set aside for them, even in a month when nothing is due. Then look at the interest charge. What remains after spending and interest is the amount that actually reduces what you owe.</p>
            </div>
            <div className="rounded border-2 border-forest bg-white p-6 md:p-8">
              <h3 className={subheading} style={displayFont}>4. Test the plan with your own calendar</h3>
              <p>Bring us a typical month and one when money was tighter. We’ll compare the interest, fees and ending loan balance in each, along with how much cash you’d still have in the bank. If paying down the line means using money you’ll need for an upcoming expense, we’ll include that withdrawal on the date you expect to make it. That way you can see what happens to the balance after the bill is paid.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={section + ' bg-white'}>
        <div className="mx-auto max-w-5xl">
          <h2 id="worked-example" tabIndex={-1} className={heading} style={displayFont}>One month on a $425,000 balance</h2>
          <div className="prose-becker mx-auto max-w-3xl">
            <p>Start with a $425,000 balance. In our one-month example, $10,000 comes in and $1,500 goes back out for expenses. That leaves $8,500 for interest and principal on the Accelerator. The traditional mortgage receives its scheduled payment of $2,500.76. Those are two different payment amounts. Here’s how those payments break down. We’ll also compare the two loans with the same $8,500 going toward each.</p>
            <div className="my-7 overflow-x-auto rounded border border-cream-border">
              <table className="w-full border-collapse text-left text-xs sm:text-base [&_th]:text-left">
                <caption className="bg-forest px-3 py-4 text-left font-semibold text-cream sm:px-5">Where the monthly payment goes</caption>
                <thead className="border-b border-cream-border bg-cream">
                  <tr><th scope="col" className="px-2 py-3 sm:px-5 sm:py-4">Monthly activity</th><th scope="col" className="px-2 py-3 sm:px-5 sm:py-4">Accelerator</th><th scope="col" className="px-2 py-3 sm:px-5 sm:py-4">Standard loan</th></tr>
                </thead>
                <tbody className="divide-y divide-cream-border tabular-nums [&_tr:last-child]:bg-cream/60 [&_tr:last-child]:font-semibold">
                  <tr><th scope="row" className="px-2 py-3 sm:px-5 sm:py-4 font-normal">Total toward the loan</th><td className="px-2 py-3 sm:px-5 sm:py-4 text-right">$8,500.00</td><td className="px-2 py-3 sm:px-5 sm:py-4 text-right">$2,500.76</td></tr>
                  <tr><th scope="row" className="px-2 py-3 sm:px-5 sm:py-4 font-normal">Interest</th><td className="px-2 py-3 sm:px-5 sm:py-4 text-right">$1,720.96</td><td className="px-2 py-3 sm:px-5 sm:py-4 text-right">$2,059.48</td></tr>
                  <tr><th scope="row" className="px-2 py-3 sm:px-5 sm:py-4 font-normal">Principal paid</th><td className="px-2 py-3 sm:px-5 sm:py-4 text-right">$6,779.04</td><td className="px-2 py-3 sm:px-5 sm:py-4 text-right">$441.28</td></tr>
                  <tr><th scope="row" className="px-2 py-3 sm:px-5 sm:py-4 font-normal">Balance after payment</th><td className="px-2 py-3 sm:px-5 sm:py-4 text-right">$418,220.96</td><td className="px-2 py-3 sm:px-5 sm:py-4 text-right">$424,558.72</td></tr>
                </tbody>
              </table>
            </div>
            <p>On the Accelerator, the $8,500 left after expenses covers $1,720.96 in interest. The remaining <strong>$6,779.04</strong> reduces the balance. Subtract that from $425,000 and you finish the month owing <strong>$418,220.96</strong>. The $1,500 expense figure matters here. If you spend more of the same deposit, you have less left to put toward your home.</p>
            <p>On the traditional mortgage, $2,059.48 of the $2,500.76 payment covers interest. The remaining <strong>$441.28</strong> goes to principal, leaving a balance of <strong>$424,558.72</strong>. That’s the result of making the scheduled payment alone. You can keep this same mortgage and pay more toward principal whenever your budget and loan terms allow.</p>
            <p>Now put $8,500 toward each loan. On the traditional mortgage, $8,500 minus $2,059.48 in interest leaves <strong>$6,440.52</strong> for principal. The new balance is <strong>$418,559.48</strong>. With equal dollars going in, the Accelerator reduces the balance by <strong>$338.52 more</strong> for this month. That’s exactly the difference between the two interest charges. Your own interest charges depend on your loan terms, your balance and when your payments post. When we look at your payoff date, we use your rates and your payment schedule.</p>
          </div>
        </div>
      </section>

      <section className={section + ' bg-cream'}>
        <div className="mx-auto max-w-5xl">
          <h2 id="payoff-options" tabIndex={-1} className={heading} style={displayFont}>Compare three ways to use the same money</h2>
          <div className="prose-becker mx-auto mb-8 max-w-3xl">
            <p>When we compare payoff options with you, we start each one with the same debt, savings and amount available from your pay. If you want to make a lump-sum payment, we apply it to every option. If you want to keep that money in savings, it stays there in every comparison. Then we look at how much interest you pay and what you’ll still owe on a date that matters to you.</p>
          </div>
          <div className="space-y-5">
            <div className="grid gap-x-10 gap-y-1 rounded border border-cream-border bg-white p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:p-8">
              <h3 className={subheading} style={displayFont}>Extra principal on your current mortgage</h3>
              <div className="space-y-4 leading-relaxed text-gray-700">
                <p>In our $425,000 example, getting from the scheduled $2,500.76 payment to the full $8,500 takes an extra $5,999.24. Your regular payment already includes $441.28 of principal. Add $5,999.24 and you get the $6,440.52 of principal paid that month. This assumes the company that manages your mortgage applies the extra money to principal that month without a fee.</p>
                <p>Before sending extra, ask your servicer how to mark a principal-only payment and whether your loan has a prepayment penalty. On your next statement, look for the extra amount in the principal column. If you’d like to pay ahead only in months when you have cash to spare, we can compare that schedule with making the same extra payment every month.</p>
              </div>
            </div>
            <div className="grid gap-x-10 gap-y-1 rounded border border-cream-border bg-white p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:p-8">
              <h3 className={subheading} style={displayFont}>Biweekly payments through your servicer</h3>
              <div className="space-y-4 leading-relaxed text-gray-700">
                <p>With a scheduled payment of $2,500.76, half is $1,250.38. Send that amount every two weeks for 26 payments and you’ll pay $32,509.88 over the year. Send it twice a month for 24 payments and you’ll pay $30,009.12, the same total as 12 regular monthly payments. The difference is one full payment of $2,500.76. To compare the schedules fairly, we give the monthly option that same extra $2,500.76 over the year.</p>
                <p>Before switching to <a className={sourceLink} href="https://www.consumerfinance.gov/consumer-tools/mortgages/answers/key-terms/#bi-weekly-payment">biweekly payments</a>, find out whether your servicer accepts half-payments, charges an enrollment fee or <a className={sourceLink} href="https://www.consumerfinance.gov/consumer-tools/mortgages/your-mortgage-servicer-must-comply-with-federal-rules/">holds a partial payment until the rest arrives</a>. The date the money reaches your principal balance matters. If your payment includes taxes and insurance, also ask how much of the extra payment will go toward principal. And if you’re paid twice a month, check which months would have three mortgage withdrawals before you sign up.</p>
              </div>
            </div>
            <div className="grid gap-x-10 gap-y-1 rounded border border-cream-border bg-white p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:p-8">
              <h3 className={subheading} style={displayFont}>The Accelerator with the same budget</h3>
              <div className="space-y-4 leading-relaxed text-gray-700">
                <p>We use the same starting balance and the same annual payment budget, then put your deposits and withdrawals on the days you expect them to post. That lets you see how much of your progress comes from paying more and how much comes from differences in interest. If you expect to move or retire before the loan ends, we compare the balance and total costs through that date. Savings projected for later years won’t help cover the cost of a refinance you pay for today.</p>
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
            <p>We look first at what’s left after your bills clear. If you consistently have money left over, like to keep track of your accounts and want to pay down your home faster, the Accelerator is worth comparing with the mortgage you already have. If retirement is your goal, we can look at the years before and after your last paycheck separately. Tell us which income will continue and which expenses will change, so you can see whether the payment still fits when you’re no longer working.</p>
            <p>If you regularly use savings to cover ordinary bills, count on an unpredictable bonus or need all your available cash for emergencies, keeping your current mortgage may fit you better. The same goes if you already have a low fixed rate that would be expensive to replace. We can show you what happens if you keep your loan and send extra principal only when you have money to spare. That leaves you the option to skip the extra payment in a tight month.</p>
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
                <p>If the proposed rate can change, we’ll walk through what it’s tied to, how often it can adjust and how high it can go under the loan terms. We can also run the same budget at a higher rate so you see how much less of your deposit would reach principal. For a refinance, we include <a className={sourceLink} href="https://myhome.freddiemac.com/refinancing/costs-of-refinancing">closing costs</a>, including any you add to the balance. On a home equity line, <a className={sourceLink} href="https://www.consumerfinance.gov/ask-cfpb/what-fees-can-my-lender-charge-if-i-take-out-a-heloc-en-249/">annual or early cancellation fees</a> can also matter. If you plan to sell, we’ll compare those costs with the interest you could save before the sale.</p>
              </div>
            </div>
            <div className="h-full rounded border border-cream-border bg-cream p-6 md:p-8">
              <h3 className={subheading} style={displayFont}>Losing access to cash when you need it</h3>
              <div className="space-y-4 leading-relaxed text-gray-700">
                <p>Money in your savings account is yours to spend. Drawing on a credit line means borrowing against your home again. A lender may <a className={sourceLink} href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-home-equity-line-of-credit-heloc-en-107/">limit further withdrawals</a> in certain circumstances, including a significant drop in your home’s value. Think about how you’d pay for an urgent repair or cover a gap in pay if the line were frozen. Because your home secures the loan, falling behind on payments could put your home at risk.</p>
              </div>
            </div>
          </div>
          <div className="mt-10 rounded bg-forest px-6 py-10 text-center text-white md:px-12 md:py-12">
            <h3 className="mb-4 text-2xl font-bold md:text-3xl" style={displayFont}>What to bring when we talk</h3>
            <p className="mx-auto mb-7 max-w-3xl leading-relaxed text-white/90">Bring your current mortgage statement, a few months of deposits and bills, and any written loan offer you’d like us to compare. Tell us how much you want to keep in savings and when you expect a change in pay or a large expense. We’ll use your numbers to walk through what you’d pay in interest, how much would reach principal and how much cash you’d have on hand. You can then decide whether to keep your current payment, pay extra yourself or explore the Accelerator with us.</p>
            <Link href="/contact" className={button + ' border-2 border-cream text-cream'}>Talk with Jamie about your mortgage</Link>
          </div>
        </div>
      </section>
    </article>
  )
}
