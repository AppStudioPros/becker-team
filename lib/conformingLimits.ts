// FHFA one-unit limits by acquisition year: https://www.fhfa.gov/data/conforming-loan-limit
export const oneUnitLimits = {
  'U.S. baseline': { 2026: 832750, 2027: 855400 },
  Denver: { 2026: 862500, 2027: 862500 },
  Arapahoe: { 2026: 862500, 2027: 862500 },
  Broomfield: { 2026: 862500, 2027: 862500 },
  Boulder: { 2026: 879750, 2027: 885500 },
  Larimer: { 2026: 832750, 2027: 855400 },
  Lake: { 2026: 1092500, 2027: 1283100 },
  Summit: { 2026: 1092500, 2027: 1283100 },
  Eagle: { 2026: 1249125, 2027: 1283100 },
  Pitkin: { 2026: 1209750, 2027: 1209750 },
} as const

export const dollars = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})
