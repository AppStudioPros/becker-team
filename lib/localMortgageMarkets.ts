import type { oneUnitLimits } from './conformingLimits'

type LocalMarket = {
  city: string
  county: Exclude<keyof typeof oneUnitLimits, 'U.S. baseline'>
  period: string
  marketScope: string
  attached: string
  detached: string
  salePriceRange: { percentile10: number; percentile90: number }
  financing: string
  condoHeading: string
  condo: string
  occupancyHeading: string
  occupancy: string
  review?: string
}

export const localMortgageMarkets: Partial<Record<string, LocalMarket>> = {
  denver: {
    city: 'Denver',
    // Recorded residential sales, May 7, 2025 through October 28, 2026: https://www.realie.ai/data/CO/DENVER/DENVER
    salePriceRange: { percentile10: 278100, percentile90: 1400000 },
    county: 'Denver',
    period: 'October 2026',
    marketScope: 'Denver County',
    attached: '$354,500',
    detached: '$704,000',
    // Market report: https://smdra.com/wp-content/uploads/2026/11/CAR-Colorado-SMDRA-MMI-2026-10.pdf#page=23
    financing: 'On a $1 million Denver purchase, putting $150,000 down leaves an $850,000 mortgage, within the county limit for 2026. Putting $125,000 down leaves an $875,000 mortgage, above it.',
    condoHeading: 'What will a Denver condo cost each month?',
    condo: 'When you compare a condo with a house, ask for the HOA budget, insurance summary and any approved special assessments. Put the dues and your share of any assessment beside the mortgage payment. Ask which repairs and insurance deductibles you would have to cover yourself.',
    occupancyHeading: 'Can I rent out a second home in Denver?',
    occupancy: 'Denver’s standard short-term rental license is for your primary residence. If you plan to keep your main home elsewhere, leave nightly rental income out of your Denver purchase budget. An HOA can also prohibit short stays in a building where city rules would otherwise allow them.',
    // Local rental rules: https://www.denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Business-Licensing/Business-licenses/Short-term-rentals/Short-term-rental-FAQ
    review: 'In her Denver review, Emily Drennan shared that she returned to our team for several home purchases and refinances.',
  },
  boulder: {
    city: 'Boulder',
    // Recorded residential sales, May 7, 2025 through October 28, 2026: https://www.realie.ai/data/CO/BOULDER/BOULDER
    salePriceRange: { percentile10: 360000, percentile90: 2281400 },
    county: 'Boulder',
    period: 'September 2026',
    marketScope: 'the city of Boulder',
    attached: '$560,000',
    detached: '$1,262,500',
    // Market report: https://lbaronline.com/wp-content/uploads/2026/10/Boulder.pdf
    financing: 'At the $1,262,500 single-family median, a $300,000 down payment would leave a $962,500 loan. That is $82,750 above Boulder County’s 2026 one-unit limit.',
    condoHeading: 'What should I ask a Boulder condo association?',
    condo: 'Before you commit to a condo near CU or downtown, ask when the association last updated its reserve study and whether owners have voted on a special assessment. If a roof or exterior repair is coming, find out what the reserves will cover and what you might owe after closing.',
    occupancyHeading: 'Can I use a Boulder second home for short stays?',
    occupancy: 'Boulder’s standard short-term rental license requires the home to be the owner’s principal residence. If you plan to use a condo only on visits, review the city’s rules and the HOA rental policy before including guest income in your budget.',
    // Local rental rules: https://bouldercolorado.gov/services/rental-housing-licensing-short-term
  },
  'fort-collins': {
    city: 'Fort Collins',
    // Recorded residential sales, May 7, 2025 through October 28, 2026: https://www.realie.ai/data/CO/LARIMER/FORT-COLLINS
    salePriceRange: { percentile10: 318300, percentile90: 975000 },
    county: 'Larimer',
    period: 'October 2026',
    marketScope: 'the Fort Collins Board of REALTORS reporting area',
    attached: '$403,500',
    detached: '$624,950',
    // Market report: https://coloradorealtors.com/2026/11/12/colorado-housing-market-hits-the-brakes-as-october-sales-fall-nearly-19/
    financing: 'A one-unit house purchased at the area’s $624,950 single-family median is already below the 2026 loan-size limit before a down payment. For a higher-priced home, subtract your proposed down payment and compare the resulting loan amount with the Larimer County limit.',
    condoHeading: 'What belongs in a Fort Collins townhome budget?',
    condo: 'If you are comparing a townhome near CSU with a detached house, check who insures the roof and exterior and who pays for snow removal. The HOA budget and master insurance policy can explain a difference in dues that the two listings leave out.',
    occupancyHeading: 'What if I want to rent the home between visits?',
    occupancy: 'Fort Collins distinguishes primary-residence rentals from non-primary rentals. Check the address on the city’s short-term rental zoning map and read the association’s leasing rules. Tell us whether you plan to live there, visit occasionally or rely on rent to make the payments.',
    // Local rental rules: https://www.fortcollins.gov/Services/Housing/Short-Term-Rentals
  },
  breckenridge: {
    city: 'Breckenridge',
    // Recorded residential sales, May 7, 2025 through October 28, 2026: https://www.realie.ai/data/CO/SUMMIT/BRECKENRIDGE
    salePriceRange: { percentile10: 519000, percentile90: 3634000 },
    county: 'Summit',
    period: 'January through October 2026',
    marketScope: 'Breckenridge',
    attached: '$893,350',
    detached: 'About $2.06 million',
    // Market report: https://monthaus.com/market-reports/october-2026/breckenridge
    financing: 'The town’s condo and townhome median was below Summit County’s one-unit limit even before a down payment. At the single-family median, the amount you put down can make a substantial difference to the financing you need.',
    condoHeading: 'Does the ski condo come with a rental agreement?',
    condo: 'Ask for any front-desk or rental-pool agreement before making an offer. Check whether you choose when to stay and who controls the rest of the calendar. A mandatory rental pool can affect financing even if the unit itself is in good condition.',
    occupancyHeading: 'Can I keep the seller’s Breckenridge rental license?',
    occupancy: 'The town says short-term rental licenses generally do not transfer with a sale. Check the license zone for the address and whether the HOA permits short stays. Outside town limits, check unincorporated Summit County’s rules. A Breckenridge mailing address alone does not tell you which rules apply.',
    // Local rental rules: https://www.townofbreckenridge.com/departments/finance/business-and-accommodation-unit-licenses/accommodation-unit-short-term-rentals-licenses
  },
  silverthorne: {
    city: 'Silverthorne',
    // Recorded residential sales, May 7, 2025 through October 28, 2026: https://www.realie.ai/data/CO/SUMMIT/SILVERTHORNE
    salePriceRange: { percentile10: 333000, percentile90: 2757500 },
    county: 'Summit',
    period: 'January through October 2026',
    marketScope: 'Silverthorne',
    attached: '$740,000',
    detached: 'About $1.91 million',
    // Market report: https://monthaus.com/market-reports/october-2026/silverthorne
    financing: 'For a home priced at $1.4 million, putting $280,000 down would leave a $1.12 million mortgage. That is $27,500 above Summit County’s 2026 one-unit limit and within its published 2027 limit.',
    condoHeading: 'Who pays for the roof and snow removal?',
    condo: 'Two Silverthorne townhomes can have similar asking prices and different monthly costs. Read the recorded ownership documents and the HOA budget to see who covers exterior maintenance, snow removal and the insurance deductible on a shared roof.',
    occupancyHeading: 'Which Silverthorne rental zone is the home in?',
    occupancy: 'The town caps short-term rental licenses in Areas 1 and 2 and prohibits them in deed-restricted Area 3. Before buying a weekend home, check the address, any recorded occupancy restrictions and whether a new license is available. For a property outside town limits, check Summit County instead.',
    // Local rental rules: https://www.silverthorne.org/town-government/finance-administrative-services/short-term-rental-licenses
  },
  vail: {
    city: 'Vail',
    // Recorded residential sales, May 7, 2025 through October 28, 2026: https://www.realie.ai/data/CO/EAGLE/VAIL
    salePriceRange: { percentile10: 516500, percentile90: 5070000 },
    county: 'Eagle',
    period: 'January through October 2026',
    marketScope: 'Vail',
    attached: 'About $1.19 million',
    detached: 'About $4 million',
    // Market report: https://monthaus.com/market-reports/october-2026/vail
    financing: 'The single-family median reflects 15 sales over this period. For a Vail condo, the amount you borrow determines whether it is jumbo. How the building is operated can still affect which loans are available.',
    condoHeading: 'Who controls the calendar for a Vail resort condo?',
    condo: 'Ask whether you can occupy the unit when you choose, whether a management company controls bookings and which parts of the building the HOA insures. Bring the management agreement to us before you commit to a second-home loan.',
    occupancyHeading: 'Can I use the home for ski weekends and rent it out?',
    occupancy: 'Within the Town of Vail, you need an approved license before advertising or operating a short-term rental. Check the deed for occupancy restrictions and ask whether a fire inspection applies. Tell us when you plan to use the property and share the building’s rules or rental contract.',
    // Local rental rules: https://www.vail.gov/government/departments/finance/short-term-rentals
    review: 'In a Vail review, Adam W described working with our team on several refinances and an investment-property mortgage.',
  },
}
