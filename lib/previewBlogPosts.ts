// Editorial previews stay on the review branch until the posts are published through the CMS.
const drafts = [
  {
    id: "down-payment-assistance-denver",
    title: "Can I Get Down Payment Assistance in Denver?",
    slug: "down-payment-assistance-denver",
    category: "Home Buying",
    published_at: "2026-11-24T16:00:00Z",
    status: "draft",
    meta_description: "Buying a Denver home? Learn who can use metroDPA, which closing costs it can cover, and when you’d need to repay the assistance.",
    feature_image: "/images/squarespace/ChatGPT_Image_Jun_12__2026__06_27_45_PM.jpg",
    hero_position: "center center",
    cta_text: "Have questions about your Denver home budget?",
    cta_url: "/contact",
    body_top: `<p>Yes. If you’re buying a home in Denver to live in, the city’s metroDPA program can help eligible buyers cover a down payment and some closing costs. You can apply even if you’ve owned a home before. The first things I’d check are the property address, how much cash you want to keep after closing, and when you expect to move again.</p>
<h2>Does the home have to be in Denver County?</h2>
<p>The regular metroDPA program covers Denver and other participating Front Range communities. You can live somewhere else now. It’s the home you’re buying that needs to be in an eligible area. If the address is in the City and County of Denver, ask a participating lender about Denver Advantage, too. That distinction matters if your search includes both city neighborhoods and nearby suburbs.</p>
<p>A metroDPA-approved lender has to arrange the first mortgage and check your income, credit and plans to occupy the home. Homebuyer education is also required. If you’re considering a condo, give the lender the building address along with the unit price so they can check the property as well as your application.</p>
<h2>What can the assistance actually pay for?</h2>
<p>It can go toward the required down payment, eligible closing costs and certain expenses paid in advance, such as homeowners insurance. An appraisal gap is a separate part of your offer to discuss with your agent and lender. If you offer $425,000 and the home appraises for $415,000, ask how that $10,000 difference affects your loan and the cash you’d need to bring.</p>`,
    body_bottom: `<h2>When would I have to pay it back?</h2>
<p>The standard assistance comes as a second mortgage. There’s no interest or scheduled monthly payment on that second loan. The balance comes due when you sell, pay off or refinance the first mortgage, stop using the home as your primary residence, or reach the end of the 30-year assistance term.</p>
<p>Say you accept $12,000 in assistance and sell four years later. If you still owe the full $12,000, include that payoff when you estimate how much money you’ll take away from the sale. The same question matters if you hope to refinance in a few years.</p>
<h2>How do I decide if it’s worth using?</h2>
<p>Ask for two written estimates for the same Denver home. On one, use your own savings. On the other, have a participating lender show the assistance option. Compare the cash you need at closing, the monthly payment on the first mortgage, and the amount of the second loan you would owe when you leave. A smaller upfront payment can be worth a lot if it lets you keep an emergency fund. Your plans for the home matter just as much.</p>
<p>If you want to compare metroDPA with other <a href="/down-payment-assistance-colorado">Colorado down payment assistance options</a>, start with your property address and cash-to-close estimates. Our <a href="/denver-mortgage#local-buying-guide">Denver homebuying guide</a> can also help you compare prices and condo costs before you settle on a budget.</p>`,
  },
  {
    id: "jumbo-loan-limit-denver-county",
    title: "When Do I Need a Jumbo Loan in Denver County?",
    slug: "jumbo-loan-limit-denver-county",
    category: "Loan Programs",
    published_at: "2026-11-26T16:00:00Z",
    status: "draft",
    meta_description: "Denver County’s one-unit loan limit is $862,500 for 2026 and 2027. See how your down payment changes whether you need a jumbo mortgage.",
    feature_image: "/images/squarespace/lp-jumbo.jpg",
    hero_position: "center center",
    cta_text: "Want to compare loan options for a Denver home?",
    cta_url: "/contact",
    body_top: `<p>For a house or an individual condo in Denver County, a conventional first mortgage goes into jumbo territory when you borrow more than <strong>$862,500</strong>. Denver’s one-unit limit is the same for 2026 and 2027. If you’re shopping near that number, start with what you’ll borrow after your down payment. Even a $950,000 home can fit under the limit.</p>
<h2>How much would I need to put down on a $950,000 home?</h2>
<p>Here’s how I’d run the numbers for a Denver buyer comparing two down payments on the same house.</p>
<ul><li><strong>With $80,000 down,</strong> the first mortgage is $870,000. That puts it $7,500 above Denver County’s one-unit limit.</li><li><strong>With $87,500 down,</strong> the first mortgage is exactly $862,500. A loan right at the limit is still within the conforming range.</li></ul>
<p>For that purchase price, $87,500 is the down payment that meets the loan-size cutoff. You’ll also need to budget for closing costs. The lender still reviews your credit, income, debts and the property before approving either loan.</p>
<h2>Does a condo or duplex use the same limit?</h2>
<p>Buying one condo in a building with 40 homes still means you’re financing one unit. The $862,500 limit applies, and the lender may also need to review the building’s finances and insurance. Buying an entire Denver duplex is different. The two-unit conforming limit is <strong>$1,104,150</strong> in both 2026 and 2027. That matters if you’re comparing a single condo with a property where you would own both units.</p>`,
    body_bottom: `<h2>What if I’m looking outside Denver County?</h2>
<p>Check the county on the listing before you use Denver’s figure. For example, the 2026 one-unit limit in Boulder County is $879,750. An $870,000 mortgage falls within that county’s limit and exceeds Denver County’s limit. Our <a href="/loan-programs/jumbo-loans#county-loan-limits">Colorado county loan limits</a> let you look up both years if your search crosses county lines.</p>
<h2>Should I put more down to avoid a jumbo loan?</h2>
<p>I’d price both options before moving money. In the $950,000 example, the decision is whether to put another $7,500 into the home or keep it available for moving, repairs or savings. Ask for written estimates using the same purchase price and loan term. Compare cash to close, monthly payment including any mortgage insurance, and how much the lender wants you to have left in reserves after closing.</p>
<p>If you send us a listing and the down payment you have in mind, we can show you where your loan amount lands. You can also see how the numbers compare with recent Denver sales in our <a href="/denver-mortgage#local-buying-guide">Denver homebuying guide</a>.</p>`,
  },
]

export const previewBlogPosts = process.env.VERCEL_ENV === 'preview'
  && process.env.VERCEL_GIT_COMMIT_REF === 'preview-homepage-restoration'
  ? drafts
  : []
