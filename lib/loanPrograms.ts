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
      'Lenders review your credit history, debts and down payment. Some conventional programs allow eligible borrowers to put 3% down on a one-unit primary home. Income limits or first-time buyer requirements can apply. With less than 20% down, monthly private mortgage insurance is common.',
      'Conventional loans come in two main categories: conforming and non-conforming. Conforming loans meet the loan limits set by the Federal Housing Finance Agency (FHFA). The applicable limit depends on the county, number of units and year. A loan above that amount is jumbo.',
      'Conventional mortgages can finance a primary residence, second home or investment property, with different terms for each use. On most covered loans, you can request PMI cancellation at 80% of the original home value if you meet the conditions. It generally ends automatically when the balance is scheduled to reach 78% and payments are current.',
      'At The Becker Team, we work with a wide network of lenders to find the right conventional loan for your situation. Whether you are a first-time buyer, upgrading to a larger home, or refinancing an existing mortgage, we can walk you through your options and help you close quickly.',
      'If you are self-employed, a conventional lender can review your tax returns and business records. If that approach does not fit, ask about bank statement programs or asset-based alternatives and compare their terms with the conventional offer.',
    ],
    faqs: [
      {
        q: 'What credit score do I need for a conventional loan?',
        a: 'Credit requirements vary by lender and program. Your credit history, down payment and other application details affect which loans and rates are available to you.',
      },
      {
        q: 'How much do I need to put down on a conventional loan?',
        a: 'Eligible buyers may be able to put 3% down on a one-unit primary residence. The minimum depends on the program and occupancy. With 20% down, PMI is generally unnecessary.',
      },
      {
        q: 'Can I use a conventional loan to buy an investment property?',
        a: 'Yes. Conventional loans can be used for primary residences, second homes, and investment properties, though down payment and rate requirements differ by property type.',
      },
      {
        q: 'How long does it take to close a conventional loan?',
        a: 'If you have a closing date in mind, share it with us before you make an offer. We’ll review the documents your lender needs, the appraisal schedule and the title work.',
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
      'For the Asset Qualifier program, the benchmark is 125% of the loan amount in eligible assets remaining after the down payment and closing costs. An $800,000 loan has a $1,000,000 benchmark. Asset depletion is a separate method that converts eligible assets to monthly qualifying income.',
      'Your lender can review your bank, investment and vested retirement account statements, including account ownership and access restrictions. The amount you need for the purchase is deducted before the remaining eligible assets are compared with the benchmark.',
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
        a: 'Document the accounts you plan to use for qualification and identify how you will pay your down payment and closing costs. The lender checks which assets are accessible and eligible to count after closing.',
      },
      {
        q: 'What credit score is needed for an asset qualifier loan?',
        a: 'Credit requirements depend on the lender and loan terms. The lender reviews your credit as well as how much you will hold in eligible assets after closing.',
      },
      {
        q: 'Is this program available for investment properties?',
        a: 'Tell your lender how you intend to use the property. Occupancy affects which programs are available, and the lender must confirm eligibility for your purchase.',
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
      'The Mortgage Accelerator uses a credit line secured by your home. Deposits lower the balance, while withdrawals to pay bills increase it. The amount you leave on the line after expenses and interest determines your principal reduction.',
      'Interest on the line depends on the rate and outstanding balance as deposits and withdrawals post. Compare it with your current mortgage using the same starting debt and the same money available for principal and interest.',
      'If you are planning for retirement, compare balances and total interest and fees through that date. Test a month with lower income, a large expense or a higher line rate to see how each would affect the result.',
      'A homeowner with steady surplus cash can also make extra principal payments on an existing mortgage. Compare that option before replacing your loan, and consider whether you have enough savings if access to the line is reduced.',
      'Jamie Becker has years of experience explaining and implementing the Mortgage Accelerator for Colorado homeowners and those in other licensed states. He takes the time to run through the numbers with each client, model different scenarios, and make sure the program is the right fit before moving forward.',
      'If you are approaching retirement and want to enter that phase of life without a mortgage payment, or if you simply want to build equity faster and reduce total interest paid, the Mortgage Accelerator is worth exploring.',
    ],
    faqs: [
      {
        q: 'Is the Mortgage Accelerator the same as a HELOC?',
        a: 'It uses a revolving line of credit secured by the home. Your deposits reduce the balance while they remain on the line. When you withdraw money, you borrow against the home again.',
      },
      {
        q: 'How much faster can I pay off my mortgage?',
        a: 'The payoff date depends on available cash, rates, fees and when payments post. Compare the line with paying the same extra amount toward your current mortgage to see whether the payoff date changes.',
      },
      {
        q: 'Do I need to change how I spend money?',
        a: 'Review what is left after routine and irregular expenses. If most of your pay goes back out to cover bills, you may have little cash left to reduce principal after interest.',
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
    tagline: 'VA purchase loans with low or no down payment for eligible borrowers',
    heroSubtitle: 'Home financing for eligible veterans, service members and surviving spouses',
    body: [
      'VA loans are mortgage loans guaranteed by the U.S. Department of Veterans Affairs and available to eligible veterans, active-duty service members, National Guard and Reserve members, and surviving spouses. They are one of the most powerful home financing tools available — and one of the most underutilized.',
      'With full entitlement, eligible buyers can generally finance a primary home up to its appraised value without a down payment. An appraisal gap or remaining entitlement may require cash. VA loans do not require monthly private mortgage insurance.',
      'VA loans generally offer competitive interest rates, often lower than conventional rates for comparable borrowers. They also carry more flexible credit and income guidelines, making them accessible to veterans who may not qualify for a conventional loan.',
      'Most VA purchase loans have a one-time funding fee based on the down payment and prior use of the benefit. You can pay it at closing or finance it. Veterans receiving VA compensation for a service-connected disability are among those exempt. Ask the lender to verify your status.',
      'VA loans can be used to purchase a primary residence — including single-family homes, condos, and multi-unit properties up to four units — or to refinance an existing VA loan through the VA Interest Rate Reduction Refinance Loan (IRRRL), also known as a VA streamline refinance.',
      'At The Becker Team, Jamie Becker has helped dozens of veterans and active-duty service members access their VA benefit in Colorado and other licensed states. We walk you through eligibility, Certificate of Eligibility (COE) requirements, and the full loan process from application through closing.',
      'If you served and have not yet used your VA loan benefit — or have used it before and want to use it again — contact us to discuss your options.',
    ],
    faqs: [
      {
        q: 'Who is eligible for a VA loan?',
        a: 'VA considers service dates, length, type of service and, for veterans, character of discharge. Guard and Reserve members may qualify. Certain surviving spouses qualify under separate rules. A VA Certificate of Eligibility establishes benefit eligibility, while the lender also reviews credit, income and occupancy.',
      },
      {
        q: 'Is there a VA loan limit?',
        a: 'VA sets no county loan limit for borrowers with full entitlement. With remaining entitlement, the county limit helps determine the available guaranty and possible down payment. The lender reviews what you can afford and the home’s appraised value.',
      },
      {
        q: 'Can I use a VA loan more than once?',
        a: 'Yes. You can request restoration of entitlement after selling the property and repaying the previous VA loan in full. Other restoration rules may apply. If you still own the property, ask about the remaining entitlement shown on your Certificate of Eligibility.',
      },
      {
        q: 'How fast can I close a VA loan?',
        a: 'Ask your lender to review the proposed contract date, outstanding documents, appraisal schedule and any condo project approval before you agree to a deadline.',
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
      'For a typical FHA purchase, a qualifying credit score of at least 580 may allow a 3.5% down payment. With a score of 500 to 579, FHA generally requires at least 10% down. Lenders can set higher requirements and also check your income, debts and property.',
      'FHA loans require two forms of mortgage insurance: an upfront mortgage insurance premium (UFMIP) of 1.75% of the loan amount, typically rolled into the loan, and an annual mortgage insurance premium (MIP) paid monthly. Unlike PMI on a conventional loan, FHA MIP remains for the life of the loan if your down payment is less than 10%.',
      'FHA loans are only available for primary residences. They can be used to purchase single-family homes, 2-4 unit properties, condos that are FHA-approved, and manufactured homes. FHA loan limits are set by county and adjusted annually.',
      'Gift funds from family members are fully allowed for the down payment on an FHA loan, making it a practical option for buyers receiving financial help from relatives.',
      'At The Becker Team, we help first-time buyers, buyers with past credit challenges, and borrowers who need a lower down payment option find the right FHA loan. We explain all costs upfront, including mortgage insurance, so there are no surprises at closing.',
    ],
    faqs: [
      {
        q: 'What credit score do I need for an FHA loan?',
        a: 'A qualifying score of at least 580 may allow 3.5% down. With a score of 500 to 579, FHA generally requires at least 10% down. A lender can require a higher score and must also review the rest of the application.',
      },
      {
        q: 'Can I use gift money for the down payment?',
        a: 'Yes. FHA allows the entire down payment and closing costs to come from gift funds from an eligible donor, such as a family member.',
      },
      {
        q: 'Does FHA mortgage insurance ever go away?',
        a: 'On a new standard 30-year FHA purchase mortgage, the annual premium lasts 11 years with an original loan-to-value ratio of 90% or lower. Above 90%, it generally lasts for the loan term.',
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
      'Jumbo loans are mortgage loans that exceed the conforming loan limits set by the Federal Housing Finance Agency (FHFA). Compare the original loan amount with the limit for the county, number of units and year. A loan exactly at the limit is within the conforming size limit.',
      'Jumbo lenders set their own credit, income, down payment and reserve requirements. Ask which rules apply to the loan amount and the way you plan to occupy the home.',
      'Despite stricter qualification, jumbo loans are widely available and offer competitive interest rates for well-qualified borrowers. In some market conditions, jumbo rates are actually lower than conforming rates due to the higher creditworthiness of jumbo borrowers.',
      'Jumbo loans can be used for primary residences, second homes, and investment properties. They are available as fixed-rate and adjustable-rate products, with terms typically ranging from 15 to 30 years.',
      'In Colorado, luxury properties in the Denver metro area, mountain communities, and other high-demand markets frequently exceed conforming loan limits. The Becker Team has experience financing high-value properties and working with lenders that specialize in jumbo and super-jumbo products.',
      'If you are purchasing or refinancing a high-value home and need a loan above the conforming limit, contact The Becker Team to discuss your options and get a clear picture of what you qualify for.',
    ],
    faqs: [
      {
        q: 'What is the minimum credit score for a jumbo loan?',
        a: 'Jumbo lenders set their own credit requirements. The minimum depends on the program, loan amount and your overall application.',
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
