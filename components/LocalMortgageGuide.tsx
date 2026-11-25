import Link from 'next/link'
import { dollars, oneUnitLimits } from '@/lib/conformingLimits'
import { localMortgageMarkets } from '@/lib/localMortgageMarkets'

const linkStyle = 'font-semibold underline decoration-[#B98942] underline-offset-4'

export default function LocalMortgageGuide({ city }: { city: string }) {
  const market = localMortgageMarkets[city]
  if (!market) return null

  const limit = oneUnitLimits[market.county]
  return (
    <section id="local-buying-guide" aria-labelledby="local-buying-heading" className="scroll-mt-24 bg-white px-6 py-14 text-center text-[#1F2E2A] md:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 id="local-buying-heading" className="mb-4 text-3xl font-bold md:text-4xl">Buying a home in {market.city}</h2>
        <p className="mb-6 leading-relaxed">
          Median sale prices in {market.marketScope} for <a className={linkStyle} href={market.marketUrl}>{market.period}</a>
        </p>
        <dl className="mb-8 grid gap-3 sm:grid-cols-2">
          <div className="rounded border border-[#ded4be] bg-[#F5EFE6] px-4 py-5">
            <dt className="text-sm">Condos and townhomes</dt>
            <dd className="mt-2 text-2xl font-semibold">{market.attached}</dd>
          </div>
          <div className="rounded border border-[#ded4be] bg-[#F5EFE6] px-4 py-5">
            <dt className="text-sm">Single-family homes</dt>
            <dd className="mt-2 text-2xl font-semibold">{market.detached}</dd>
          </div>
        </dl>
        <h3 className="mb-3 text-2xl font-bold">When does a loan become jumbo in {market.county} County?</h3>
        <p className="leading-relaxed">
          For a one-unit home, the 2026 conforming loan limit is <strong>{dollars.format(limit[2026])}</strong>.
          {' '}{limit[2026] === limit[2027] ? 'The 2027 limit stays at ' : 'The 2027 limit rises to '}
          <strong>{dollars.format(limit[2027])}</strong>. A mortgage above the applicable limit is jumbo.
        </p>
        <p className="mt-3 leading-relaxed">{market.financing}</p>
        <Link href="/loan-programs/jumbo-loans#county-loan-limits" className={`${linkStyle} mt-3 inline-block`}>Compare Colorado county limits and see which year applies</Link>

        <h3 className="mb-3 mt-9 text-2xl font-bold">{market.condoHeading}</h3>
        <p className="leading-relaxed">{market.condo}</p>

        <h3 className="mb-3 mt-9 text-2xl font-bold">{market.occupancyHeading}</h3>
        <p className="leading-relaxed">{market.occupancy}</p>
        <div className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2">
          <a className={linkStyle} href={market.rulesUrl}>{market.rulesLabel}</a>
          <Link className={linkStyle} href="/second-home-loans-colorado">Explore second-home financing</Link>
        </div>

        {market.review && (
          <div className="mt-9 border-t border-[#ded4be] pt-6">
            <h3 className="mb-3 text-2xl font-bold">From a {market.city} borrower</h3>
            <p className="leading-relaxed">{market.review}</p>
            <Link href="/#becker-home-reviews" className={`${linkStyle} mt-3 inline-block`}>Read our clients’ reviews</Link>
          </div>
        )}
      </div>
    </section>
  )
}
