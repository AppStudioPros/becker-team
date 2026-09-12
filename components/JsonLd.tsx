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
      // Colorado — primary market
      { '@type': 'State', name: 'Colorado' },
      { '@type': 'City', name: 'Denver', containedIn: { '@type': 'State', name: 'Colorado' } },
      { '@type': 'City', name: 'Colorado Springs', containedIn: { '@type': 'State', name: 'Colorado' } },
      { '@type': 'City', name: 'Boulder', containedIn: { '@type': 'State', name: 'Colorado' } },
      { '@type': 'City', name: 'Fort Collins', containedIn: { '@type': 'State', name: 'Colorado' } },
      { '@type': 'City', name: 'Aurora', containedIn: { '@type': 'State', name: 'Colorado' } },
      { '@type': 'City', name: 'Lakewood', containedIn: { '@type': 'State', name: 'Colorado' } },
      { '@type': 'City', name: 'Littleton', containedIn: { '@type': 'State', name: 'Colorado' } },
      { '@type': 'City', name: 'Vail', containedIn: { '@type': 'State', name: 'Colorado' } },
      { '@type': 'City', name: 'Aspen', containedIn: { '@type': 'State', name: 'Colorado' } },
      { '@type': 'City', name: 'Breckenridge', containedIn: { '@type': 'State', name: 'Colorado' } },
      { '@type': 'City', name: 'Steamboat Springs', containedIn: { '@type': 'State', name: 'Colorado' } },
      // Additional states
      { '@type': 'State', name: 'Georgia' },
      { '@type': 'State', name: 'Oregon' },
    ],
  }
}
