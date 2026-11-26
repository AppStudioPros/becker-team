import { dollars, oneUnitLimits } from './conformingLimits'

export const mortgageServiceAreas = [
  {
    city: 'Boulder', slug: 'boulder',
    focus: 'Compare financing for a Boulder home, from a first condo near CU to a higher-priced home near the foothills.',
    question: 'Should I compare conventional and jumbo loans before I make an offer?',
    answer: 'Yes. The expected loan amount, rather than the asking price alone, determines which options to compare. Share your target price and down payment with Jamie so you can see what changes if you put more down or reserve more cash for closing and repairs.',
    detail: 'If you are comparing a condo near campus with a detached home, put the association dues and any known assessments next to the estimated mortgage payment. The less expensive listing can still cost more per month.',
    href: '/boulder-jumbo-loans', label: 'Explore Boulder jumbo loans',
  },
  {
    city: 'Breckenridge', slug: 'breckenridge',
    focus: 'Plan financing for a Breckenridge condo, a year-round home, or a place to use on ski weekends.',
    question: 'What should I check before financing a ski condo?',
    answer: 'Ask how the building operates. A front desk, hotel-style services, or rental-management requirements can affect the loan options. Share the listing and HOA documents with Jamie early so the lender can review the project.',
    detail: 'If the budget assumes you will rent the condo when you are away, check town rules and HOA restrictions for that address. Tell Jamie how you intend to use the property before you request a quote.',
    href: '/second-home-loans-colorado', label: 'Explore Colorado second-home loans',
  },
  {
    city: 'Silverthorne', slug: 'silverthorne',
    focus: 'Compare home loans for a Silverthorne primary residence, townhome, or second home.',
    question: 'How can I compare a Silverthorne townhome and a detached home?',
    answer: 'Start with the full monthly cost. Add dues, taxes, insurance, and any known assessments to each estimated payment. Then check what the association covers, because two properties with similar dues can leave you responsible for very different expenses.',
    detail: 'Ask your agent for the ownership and association documents if you are considering a townhome. The way a listing describes the property may differ from how ownership is recorded, which can change what the lender needs to review.',
    href: '/mountain-home-loans', label: 'Explore Colorado mountain home loans',
  },
  {
    // Realie public parcel-record aggregates and Aspen Glenwood MLS sales through October 2026.
    // https://www.realie.ai/data/CO/PITKIN/ASPEN
    // https://monthaus.com/market-reports/october-2026/aspen
    city: 'Aspen', slug: 'aspen',
    focus: 'Talk through loan size, cash at closing, and property use before making an offer on an Aspen home.',
    question: 'What do Aspen properties sell for, and when would I need a jumbo loan?',
    answer: 'From May 7, 2025, through October 28, 2026, the middle 80% of recorded property sale amounts in Aspen ran from $126,500 to $5.94 million. If you are looking for a whole home, local MLS sales from January through October 2026 give a useful comparison. The median was about $3.85 million for condos and townhomes and $10.6 million for single-family homes.',
    detail: `In Pitkin County, a mortgage on a one-unit home is jumbo above ${dollars.format(oneUnitLimits.Pitkin[2026])} for both 2026 and 2027. Subtract your down payment from the purchase price first. For an Aspen condo, send us the HOA rules and any rental agreement so we can review whether you control when you stay there.`,
    href: '/loan-programs/jumbo-loans', label: 'Explore jumbo loans',
  },
  {
    // https://www.realie.ai/data/CO/LAKE/LEADVILLE
    city: 'Leadville', slug: 'leadville',
    focus: 'Get a financing plan for a Leadville home, including older properties and homes outside town.',
    question: 'What should I budget for a Leadville home?',
    answer: 'From May 7, 2025, through October 28, 2026, the middle 80% of recorded property sale amounts in Leadville ran from $319,800 to $922,500. If you are considering an older house, include any roof or heating repairs in your budget. Outside town, ask who maintains the road and whether the house uses a private well or septic system.',
    detail: `For a one-unit home in Lake County, the conforming loan limit is ${dollars.format(oneUnitLimits.Lake[2026])} for 2026 and ${dollars.format(oneUnitLimits.Lake[2027])} for 2027. Compare the mortgage you need after your down payment with the limit for the applicable year. A loan above that amount is jumbo.`,
    href: '/home-loan-process-guide', label: 'See the home loan process',
  },
  {
    city: 'Vail', slug: 'vail',
    focus: 'Compare financing for a Vail residence, resort condo, or second home before you make an offer.',
    question: 'Does a rental agreement change my options for buying a Vail condo?',
    answer: 'It can. Share any rental agreement with Jamie and explain when you expect to use the unit yourself. The lender can review the intended occupancy and the project together, including any limits on owner use.',
    detail: 'When you compare a Vail slope-side condo with a property farther from the lifts, look at more than the asking price. Get the current dues, parking terms, and assessment history for each property so your budget reflects what you would actually own.',
    href: '/second-home-loans-colorado', label: 'Explore Colorado second-home loans',
  },
] as const
