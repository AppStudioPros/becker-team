import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { mortgageServiceAreas } from '@/lib/mortgageServiceAreas'

type Props = { params: Promise<{ city: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return mortgageServiceAreas.map(({ slug }) => ({ city: slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params
  const area = mortgageServiceAreas.find(({ slug }) => slug === city)
  if (!area) notFound()

  return {
    title: area.city + ', Colorado Mortgage Broker',
    description: area.focus,
    alternates: { canonical: '/service-areas/' + area.slug },
  }
}

export default async function MortgageServiceAreaPage({ params }: Props) {
  const { city } = await params
  const area = mortgageServiceAreas.find(({ slug }) => slug === city)
  if (!area) notFound()

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: area.city + ', Colorado Mortgage Services',
    url: 'https://www.thebeckerteam.com/service-areas/' + area.slug,
    description: area.focus,
    areaServed: {
      '@type': 'City', name: area.city,
      containedInPlace: { '@type': 'State', name: 'Colorado' },
    },
    provider: { '@type': 'Organization', name: 'The Becker Team', url: 'https://www.thebeckerteam.com' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <section className="bg-[#1F2E2A] px-6 py-20 text-center text-white">
        <h1 className="mb-5 font-serif text-4xl md:text-6xl">{area.city}, Colorado Mortgage Broker</h1>
        <p className="mx-auto mb-7 max-w-xl text-lg text-white/90">{area.focus}</p>
        <Link href="/contact" className="inline-block rounded bg-[#F5EFE6] px-6 py-3 font-semibold text-[#1F2E2A]">
          Talk to Jamie
        </Link>
      </section>
      <section className="bg-[#F5EFE6] px-6 py-14 text-[#1F2E2A]">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 font-serif text-3xl">{area.question}</h2>
          <p className="mb-5 leading-relaxed">{area.answer}</p>
          <p className="mb-6 leading-relaxed">{area.detail}</p>
          <Link href={area.href} className="font-semibold underline underline-offset-4">{area.label}</Link>
          <p className="mt-8 border-t border-[#d4c9b5] pt-5 text-sm">
            <Link href="/about" className="underline underline-offset-4">Jamie Becker</Link>
            {' · NMLS #794730 · Xpert Home Lending NMLS #2179191'}
          </p>
        </div>
      </section>
    </>
  )
}
