export interface LoanProgram {
  slug: string
  title: string
  shortTitle: string
  tagline: string
  heroSubtitle: string
  body: string[]
  faqs: { q: string; a: string }[]
}

export const loanPrograms: LoanProgram[] = [
  {
    slug: 'conventional-loans',
    title: 'Conventional Loans in Colorado',
    shortTitle: 'Conventional Loans',
    tagline: 'Mortgage loans from private lenders with as little as 3-5% down',
    heroSubtitle: 'Flexible financing for borrowers with strong credit and steady income',
    body: [
      'Conventional loans are mortgage loans issued by private lenders and not backed by a federal government agency. They typically offer competitive interest rates, flexible terms, and a wide range of loan amounts — making them the most commonly used mortgage product for home purchases and refinances.',
      'To qualify for a conventional loan, lenders generally look for a credit score of 620 or higher, though borrowers with scores above 740 often access the best rates. Down payments start as low as 3% for first-time buyers and 5% for repeat buyers. If your down payment is less than 20%, private mortgage insurance (PMI) is required until you reach 20% equity.',
      'Conventional loans come in two main categories: conforming and non-conforming. Conforming loans meet the loan limits set by the Federal Housing Finance Agency (FHFA). For 2024, the conforming loan limit for most counties is $766,550, with higher limits in designated high-cost areas. Non-conforming loans, such as jumbo loans, exceed these limits.',
      'One of the biggest advantages of a conventional loan is flexibility. You can use one to purchase a primary residence, a second home, or an investment property. You can choose between fixed-rate and adjustable-rate terms. And once you have 20% equity, PMI drops off automatically — something government-backed loans do not always allow.',
      'At The Becker Team, we work with a wide network of lenders to find the right conventional loan for your situation. Whether you are a first-time buyer, upgrading to a larger home, or refinancing an existing mortgage, we can walk you through your options and help you close quickly.',
      'If you are a business owner, self-employed borrower, or have nontraditional income, a conventional loan may still be possible with the right documentation. We also offer conventional options with bank statement qualifying and asset depletion for borrowers whose income does not show up cleanly on a tax return.',
    ],
    faqs: [
      {
        q: 'What credit score do I need for a conventional loan?',
        a: 'Most lenders require a minimum score of 620. Borrowers with scores of 740 or higher typically qualify for the lowest rates and best terms.',
      },
      {
        q: 'How much do I need to put down on a conventional loan?',
        a: 'Down payments start at 3% for first-time buyers. Putting 20% down eliminates the requirement for private mortgage insurance (PMI).',
      },
      {
        q: 'Can I use a conventional loan to buy an investment property?',
        a: 'Yes. Conventional loans can be used for primary residences, second homes, and investment properties, though down payment and rate requirements differ by property type.',
      },
      {
        q: 'How long does it take to close a conventional loan?',
        a: 'Closings typically take 21 to 30 days, though The Becker Team has closed loans in as few as 10 days with proper preparation.',
      },
    ],
  },
  {
    slug: 'self-employed-loans',
    title: 'Self-Employed Mortgage Loans in Colorado',
    shortTitle: 'Self-Employed Loans',
    tagline: 'We make it easier for business owners and entrepreneurs',
    heroSubtitle: 'Mortgage solutions designed for the way you actually earn',
    body: [
      'Self-employed borrowers and business owners often have strong finances but face challenges qualifying for a mortgage the traditional way. Tax returns show deductions that reduce taxable income — which looks great on a tax bill but makes income appear lower than it actually is to a conventional underwriter.',
      'At The Becker Team, we specialize in mortgage solutions that work around that problem. We offer bank statement loans, profit and loss statement loans, and asset qualifier programs designed specifically for business owners, contractors, freelancers, and anyone with nontraditional income.',
      'Bank statement loans allow you to qualify using 12 or 24 months of personal or business bank statements instead of tax returns. Lenders calculate your average monthly deposits to determine qualifying income. This approach often allows self-employed borrowers to qualify for significantly more than they could through conventional underwriting.',
      'Profit and loss statement loans use a CPA-prepared P&L as the primary income document. This is a strong option for borrowers whose business has grown in recent years or who have fluctuating income from month to month.',
      'Asset-based qualifying is another option for high-net-worth borrowers who can demonstrate sufficient assets to cover the loan — even without traditional income documentation. We can also explore DSCR (debt-service coverage ratio) loans for investment property purchases, where the rental income of the property qualifies the loan rather than your personal income.',
      'Jamie Becker brings a background in financial advising and real estate investing to every self-employed mortgage conversation. He understands how business income works, how to read a P&L, and how to structure a loan application that reflects your actual financial strength.',
      'If you have been turned down elsewhere or told you cannot qualify because you are self-employed, there is a good chance we have a program that fits. Contact The Becker Team to discuss your situation.',
    ],
    faqs: [
      {
        q: 'Do I need two years of self-employment history to qualify?',
        a: 'Most programs want to see two years of self-employment history. Some bank statement programs accept one year if you can show prior employment in the same field.',
      },
      {
        q: 'How many months of bank statements do I need?',
        a: 'Most bank statement loan programs require 12 or 24 months of statements. Lenders average your monthly deposits over that period to determine qualifying income.',
      },
      {
        q: 'Can I use business bank statements instead of personal statements?',
        a: 'Yes. Many programs accept business bank statements, though lenders typically apply an expense factor — usually 50% — to account for business overhead costs.',
      },
      {
        q: 'Will I pay a higher interest rate on a bank statement loan?',
        a: 'Non-QM loan rates are generally higher than conventional rates, but the difference has narrowed in recent years. The right program depends on your overall financial picture.',
      },
    ],
  },
  {
    slug: 'asset-qualifier-loans',
    title: 'Asset Qualifier Loans in Colorado',
    shortTitle: 'Asset Qualifier Loans',
    tagline: 'Qualify with assets, not income — flexible alternative lending',
    heroSubtitle: 'For high-net-worth borrowers who hold wealth in assets rather than paycheck income',
    body: [
      'Asset qualifier loans allow borrowers to qualify for a mortgage based on their total liquid assets rather than traditional income documentation. If you have significant savings, investment accounts, retirement funds, or other financial assets but do not show enough income on paper to qualify through conventional underwriting, an asset qualifier loan may be the right path.',
      'This program is particularly useful for retirees living off investment portfolios, high-net-worth individuals who have recently sold a business or property, or borrowers who receive large annual distributions rather than a steady monthly salary.',
      'The qualifying formula works by taking your total verified assets, subtracting a down payment and closing costs, and then dividing the remaining balance over a set number of months — typically 60 to 120 months depending on the lender. The resulting figure becomes your "monthly income" for qualification purposes.',
      'Eligible assets typically include checking and savings accounts, money market accounts, stocks, bonds, mutual funds, ETFs, vested retirement accounts such as 401(k)s and IRAs, and proceeds from the sale of a business or property. Assets must be fully documented and verified.',
      'Asset qualifier loans generally require a strong credit score, a meaningful down payment, and a clear paper trail on all assets. Rates are typically higher than conforming loan rates, but for borrowers who fit the profile, this program opens doors that traditional underwriting keeps closed.',
      'At The Becker Team, we have worked with retirees, executives, entrepreneurs, and investors who all qualified through asset-based programs. We help structure the application to present your financial picture in the strongest possible light.',
      'If you have significant wealth but limited traditional income, contact us to find out whether an asset qualifier loan makes sense for your situation.',
    ],
    faqs: [
      {
        q: 'What types of assets count toward qualification?',
        a: 'Lenders typically count checking and savings accounts, brokerage accounts, vested retirement funds, stocks, bonds, and proceeds from recent asset sales. The exact list varies by lender.',
      },
      {
        q: 'Do I need to liquidate my assets to qualify?',
        a: 'No. You do not need to sell or liquidate assets. The lender uses a depletion formula to calculate a monthly income equivalent from your documented assets.',
      },
      {
        q: 'What credit score is needed for an asset qualifier loan?',
        a: 'Most asset qualifier programs require a credit score of at least 680, with better pricing available for scores above 720 or 740.',
      },
      {
        q: 'Is this program available for investment properties?',
        a: 'Yes. Asset qualifier loans can be used for primary residences, second homes, and investment properties. Terms vary by property type.',
      },
    ],
  },
  {
    slug: 'mortgage-accelerator',
    title: 'Mortgage Accelerator Program in Colorado',
    shortTitle: 'Mortgage Accelerator',
    tagline: 'Accelerate mortgage payoff before retirement',
    heroSubtitle: 'A strategic approach to eliminating your mortgage faster and building equity sooner',
    body: [
      'The Mortgage Accelerator is a strategic loan product designed to help homeowners pay off their mortgage significantly faster than a traditional 30-year fixed loan, often without dramatically increasing their monthly payment.',
      'The program works by linking your mortgage to a line of credit that functions as your primary checking account. Your income deposits reduce your outstanding principal balance each month, and your expenses are paid from the same line. Because mortgage interest is typically calculated daily on the outstanding principal, reducing your average daily balance — even temporarily — cuts the total interest you pay over the life of the loan.',
      'For many borrowers, especially those nearing retirement who want to eliminate their housing payment, the Mortgage Accelerator can shave years or even decades off their payoff timeline. A homeowner who might otherwise spend 30 years paying off a mortgage may pay it off in 12 to 18 years while keeping their lifestyle largely intact.',
      'This product is best suited for borrowers who have consistent income deposits and relatively stable monthly expenses. It requires discipline in how you manage your checking account but does not require you to dramatically change your spending habits.',
      'Jamie Becker has years of experience explaining and implementing the Mortgage Accelerator for Colorado homeowners and those in other licensed states. He takes the time to run through the numbers with each client, model different scenarios, and make sure the program is the right fit before moving forward.',
      'If you are approaching retirement and want to enter that phase of life without a mortgage payment, or if you simply want to build equity faster and reduce total interest paid, the Mortgage Accelerator is worth exploring.',
    ],
    faqs: [
      {
        q: 'Is the Mortgage Accelerator the same as a HELOC?',
        a: 'It operates similarly to a HELOC in that it is a revolving line of credit tied to your home equity, but it is structured specifically to function as your primary banking account and optimize principal reduction.',
      },
      {
        q: 'How much faster can I pay off my mortgage?',
        a: 'Results vary based on income, expenses, and deposit patterns, but many borrowers reduce a 30-year payoff timeline to 12 to 18 years without making larger payments.',
      },
      {
        q: 'Do I need to change how I spend money?',
        a: 'Not dramatically. The program works best when your income deposits consistently exceed your monthly expenses. The key is keeping your average daily balance as low as possible.',
      },
      {
        q: 'Is this available in Colorado?',
        a: 'Yes. Jamie Becker is licensed in Colorado and can help you explore the Mortgage Accelerator for your primary residence.',
      },
    ],
  },
  {
    slug: 'va-loans',
    title: 'VA Home Loans for Veterans in Colorado',
    shortTitle: 'VA Loans',
    tagline: 'No down payment loans for eligible veterans and service members',
    heroSubtitle: 'Exclusive benefit for veterans, active-duty service members, and eligible spouses',
    body: [
      'VA loans are mortgage loans guaranteed by the U.S. Department of Veterans Affairs and available to eligible veterans, active-duty service members, National Guard and Reserve members, and surviving spouses. They are one of the most powerful home financing tools available — and one of the most underutilized.',
      'The most well-known feature of a VA loan is no down payment. Eligible borrowers can finance 100% of the purchase price without putting anything down. There is also no requirement for private mortgage insurance (PMI), which can save hundreds of dollars per month compared to other low-down-payment options.',
      'VA loans generally offer competitive interest rates, often lower than conventional rates for comparable borrowers. They also carry more flexible credit and income guidelines, making them accessible to veterans who may not qualify for a conventional loan.',
      'One unique feature of VA loans is the VA funding fee — a one-time fee that helps sustain the program. The fee varies based on your service type, down payment amount, and whether it is your first or subsequent use of a VA loan. Some veterans with service-connected disabilities are exempt from the funding fee entirely.',
      'VA loans can be used to purchase a primary residence — including single-family homes, condos, and multi-unit properties up to four units — or to refinance an existing VA loan through the VA Interest Rate Reduction Refinance Loan (IRRRL), also known as a VA streamline refinance.',
      'At The Becker Team, Jamie Becker has helped dozens of veterans and active-duty service members access their VA benefit in Colorado and other licensed states. We walk you through eligibility, Certificate of Eligibility (COE) requirements, and the full loan process from application through closing.',
      'If you served and have not yet used your VA loan benefit — or have used it before and want to use it again — contact us to discuss your options.',
    ],
    faqs: [
      {
        q: 'Who is eligible for a VA loan?',
        a: 'Eligible borrowers include veterans, active-duty service members, National Guard and Reserve members with qualifying service, and surviving spouses of veterans who died in service or from a service-connected disability.',
      },
      {
        q: 'Is there a VA loan limit?',
        a: 'VA loans no longer have a maximum loan amount for eligible borrowers with full entitlement. County conforming loan limits only apply if you have reduced entitlement from a prior VA loan.',
      },
      {
        q: 'Can I use a VA loan more than once?',
        a: 'Yes. You can use your VA loan benefit multiple times throughout your life. If you have paid off a prior VA loan, your full entitlement is restored.',
      },
      {
        q: 'How fast can I close a VA loan?',
        a: 'VA loans typically close in 30 to 45 days. With preparation and organization, The Becker Team can often close faster.',
      },
    ],
  },
  {
    slug: 'fha-loans',
    title: 'FHA Loans in Colorado',
    shortTitle: 'FHA Loans',
    tagline: 'Insured by FHA with down payments as low as 3.5%',
    heroSubtitle: 'Government-backed financing with more flexible credit and income requirements',
    body: [
      'FHA loans are mortgages insured by the Federal Housing Administration and issued by approved private lenders. They are designed to make homeownership more accessible, particularly for first-time buyers or borrowers who may not qualify for a conventional loan.',
      'The hallmark of an FHA loan is a lower barrier to entry. Borrowers with a credit score of 580 or higher can put as little as 3.5% down. Borrowers with credit scores between 500 and 579 may still qualify with a 10% down payment. FHA guidelines also allow for higher debt-to-income ratios than conventional loans, which can help borrowers with existing debts.',
      'FHA loans require two forms of mortgage insurance: an upfront mortgage insurance premium (UFMIP) of 1.75% of the loan amount, typically rolled into the loan, and an annual mortgage insurance premium (MIP) paid monthly. Unlike PMI on a conventional loan, FHA MIP remains for the life of the loan if your down payment is less than 10%.',
      'FHA loans are only available for primary residences. They can be used to purchase single-family homes, 2-4 unit properties, condos that are FHA-approved, and manufactured homes. FHA loan limits are set by county and adjusted annually.',
      'Gift funds from family members are fully allowed for the down payment on an FHA loan, making it a practical option for buyers receiving financial help from relatives.',
      'At The Becker Team, we help first-time buyers, buyers with past credit challenges, and borrowers who need a lower down payment option find the right FHA loan. We explain all costs upfront, including mortgage insurance, so there are no surprises at closing.',
    ],
    faqs: [
      {
        q: 'What credit score do I need for an FHA loan?',
        a: 'A score of 580 qualifies you for the 3.5% down payment option. Scores between 500 and 579 may still qualify but require 10% down.',
      },
      {
        q: 'Can I use gift money for the down payment?',
        a: 'Yes. FHA allows the entire down payment and closing costs to come from gift funds from an eligible donor, such as a family member.',
      },
      {
        q: 'Does FHA mortgage insurance ever go away?',
        a: 'For loans with less than 10% down, FHA mortgage insurance remains for the life of the loan. To remove it, you would need to refinance into a conventional loan once you have enough equity.',
      },
      {
        q: 'What is the FHA loan limit in Colorado?',
        a: 'FHA loan limits vary by county in Colorado. Contact The Becker Team for the current limit in your area.',
      },
    ],
  },
  {
    slug: 'jumbo-loans',
    title: 'Jumbo Loans in Colorado',
    shortTitle: 'Jumbo Loans',
    tagline: 'Loans exceeding conforming limits for luxury and high-cost homes',
    heroSubtitle: 'Financing for homes that go beyond standard loan limits',
    body: [
      'Jumbo loans are mortgage loans that exceed the conforming loan limits set by the Federal Housing Finance Agency (FHFA). For 2024, the standard conforming limit is $766,550 in most U.S. counties, though higher limits apply in designated high-cost areas. Any loan above those limits is considered a jumbo loan and falls outside the guidelines used by Fannie Mae and Freddie Mac.',
      'Because jumbo loans are not eligible for purchase by the government-sponsored enterprises, lenders carry the risk directly. As a result, qualification requirements are stricter than those for conforming loans. Most jumbo lenders require a credit score of at least 700 to 720, a down payment of 10% to 20% or more, and strong reserves — often 12 months or more of mortgage payments in liquid assets.',
      'Despite stricter qualification, jumbo loans are widely available and offer competitive interest rates for well-qualified borrowers. In some market conditions, jumbo rates are actually lower than conforming rates due to the higher creditworthiness of jumbo borrowers.',
      'Jumbo loans can be used for primary residences, second homes, and investment properties. They are available as fixed-rate and adjustable-rate products, with terms typically ranging from 15 to 30 years.',
      'In Colorado, luxury properties in the Denver metro area, mountain communities, and other high-demand markets frequently exceed conforming loan limits. The Becker Team has experience financing high-value properties and working with lenders that specialize in jumbo and super-jumbo products.',
      'If you are purchasing or refinancing a high-value home and need a loan above the conforming limit, contact The Becker Team to discuss your options and get a clear picture of what you qualify for.',
    ],
    faqs: [
      {
        q: 'What is the minimum credit score for a jumbo loan?',
        a: 'Most lenders require 700 to 720 for a jumbo loan. Some programs allow scores as low as 680 with strong compensating factors.',
      },
      {
        q: 'How much do I need to put down on a jumbo loan?',
        a: 'Down payments typically start at 10% and go up to 20% or more depending on the lender and loan amount. Reserve requirements are also higher than for conforming loans.',
      },
      {
        q: 'Are jumbo rates higher than conventional rates?',
        a: 'Not always. Jumbo rates are often competitive with or close to conforming rates. The difference depends on market conditions and your overall borrower profile.',
      },
      {
        q: 'Can I get a jumbo loan for a vacation home or investment property?',
        a: 'Yes, though down payment and reserve requirements are typically higher for non-primary residences.',
      },
    ],
  },
]

export function getLoanProgram(slug: string): LoanProgram | undefined {
  return loanPrograms.find((p) => p.slug === slug)
}
