import { unstable_cache } from 'next/cache'

const origin = 'https://www.thebeckerteam.com'

function attribute(tag: string, name: string) {
  const match = tag.match(new RegExp('\\s' + name + '\\s*=\\s*(?:"([^"]*)"|\\x27([^\\x27]*)\\x27|([^\\s>]+))', 'i'))
  return match?.[1] ?? match?.[2] ?? match?.[3] ?? ''
}

async function checkPage(url: string) {
  const path = new URL(url).pathname
  try {
    const response = await fetch(url, {
      cache: 'no-store',
      redirect: 'manual',
      signal: AbortSignal.timeout(6000),
    })
    if (!response.ok) return { path, title: '', description: '', canonical: '', structuredData: false, issues: ['HTTP ' + response.status] }

    const html = await response.text()
    const head = html.split(/<\/head\s*>/i, 1)[0]
    const title = head.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1].trim() ?? ''
    const meta = head.match(/<meta\b[^>]*>/gi) ?? []
    const links = head.match(/<link\b[^>]*>/gi) ?? []
    const description = attribute(meta.find(tag => attribute(tag, 'name').toLowerCase() === 'description') ?? '', 'content')
    const canonical = attribute(links.find(tag => attribute(tag, 'rel').toLowerCase() === 'canonical') ?? '', 'href')
    const robots = meta.filter(tag => ['robots', 'googlebot'].includes(attribute(tag, 'name').toLowerCase()))
      .map(tag => attribute(tag, 'content')).concat(response.headers.get('x-robots-tag') ?? '')
    const structuredData = /<script\b[^>]*type=["']application\/ld\+json["']/i.test(html)
    const issues = [
      !title && 'Missing title',
      !description && 'Missing description',
      !canonical && 'Missing canonical',
      canonical && canonical !== url && 'Canonical points elsewhere',
      robots.some(value => /\b(?:noindex|none)\b/i.test(value)) && 'Noindex directive',
    ].filter((value): value is string => Boolean(value))
    return { path, title, description, canonical, structuredData, issues }
  } catch {
    return { path, title: '', description: '', canonical: '', structuredData: false, issues: ['Fetch failed'] }
  }
}

export const loadPageHealth = unstable_cache(async () => {
  const response = await fetch(origin + '/sitemap.xml', {
    cache: 'no-store',
    redirect: 'error',
    signal: AbortSignal.timeout(6000),
  })
  if (!response.ok) throw new Error('Could not read the public sitemap.')
  const xml = await response.text()
  const entries = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1].trim().replaceAll('&amp;', '&'))
  if (!entries.length) throw new Error('No URLs found in the public sitemap.')
  const urls = [...new Set(entries)].filter(value => {
    const url = new URL(value)
    return url.origin === origin && !url.pathname.startsWith('/admin') && !url.pathname.startsWith('/api/')
  })
  const rows: Awaited<ReturnType<typeof checkPage>>[] = []
  for (let index = 0; index < Math.min(urls.length, 40); index += 8) {
    rows.push(...await Promise.all(urls.slice(index, Math.min(index + 8, 40)).map(checkPage)))
  }
  for (const field of ['title', 'description'] as const) {
    const counts = new Map<string, number>()
    for (const row of rows) {
      const value = row[field].trim().toLowerCase()
      if (value && !row.issues.includes('Canonical points elsewhere') && !row.issues.includes('Noindex directive')) {
        counts.set(value, (counts.get(value) ?? 0) + 1)
      }
    }
    for (const row of rows) {
      if ((counts.get(row[field].trim().toLowerCase()) ?? 0) > 1) row.issues.push('Duplicate ' + field)
    }
  }
  return { checkedAt: new Date().toISOString(), rows, total: urls.length }
}, ['becker-page-health-v1'], { revalidate: 604800 })
