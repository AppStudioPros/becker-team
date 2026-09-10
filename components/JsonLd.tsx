// Reusable JSON-LD injector
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// ── Schema builders ──────────────────────────────────────

export function breadcrumbSchema(crumbs: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  }
}

export function mortgageLoanSchema(name: string, desc: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LoanOrCredit',
    name,
    description: desc,
    url,
    provider: {
      '@type': 'FinancialService',
      name: 'The Becker Team — Xpert Home Lending',
      url: 'https://www.thebeckerteam.com',
      telephone: '(720) 492-3335',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '201 Columbine Street, Suite 300',
        addressLocality: 'Denver',
        addressRegion: 'CO',
        postalCode: '80206',
        addressCountry: 'US',
      },
    },
    areaServed: [
      { '@type': 'State', name: 'Colorado' },
      { '@type': 'State', name: 'Georgia' },
      { '@type': 'State', name: 'Oregon' },
    ],
  }
}
