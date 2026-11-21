import { unstable_cache } from 'next/cache'
import { createSign } from 'node:crypto'

const tokenUrl = 'https://oauth2.googleapis.com/token'

async function googleToken(scope: string) {
  const email = process.env.REPORTS_GOOGLE_CLIENT_EMAIL
  const key = process.env.REPORTS_GOOGLE_PRIVATE_KEY
  if (!email || !key) return null

  const encode = (value: object) => Buffer.from(JSON.stringify(value)).toString('base64url')
  const now = Math.floor(Date.now() / 1000)
  const claims = encode({ iss: email, scope, aud: tokenUrl, iat: now, exp: now + 300 })
  const unsigned = `${encode({ alg: 'RS256', typ: 'JWT' })}.${claims}`
  const signature = createSign('RSA-SHA256').update(unsigned).sign(key.replace(/\\n/g, '\n'), 'base64url')
  const response = await fetch(tokenUrl, {
    method: 'POST',
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${unsigned}.${signature}`,
    }),
    cache: 'no-store',
    signal: AbortSignal.timeout(10000),
  })
  if (!response.ok) throw new Error('Google could not authorize reporting.')
  const { access_token } = await response.json()
  if (typeof access_token !== 'string') throw new Error('Google did not return a token.')
  return access_token
}

async function report<T>(url: string, token: string, body: object): Promise<T> {
  const response = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    cache: 'no-store',
    signal: AbortSignal.timeout(10000),
  })
  if (!response.ok) throw new Error(`Google report request failed (${response.status}).`)
  return response.json()
}

export type DateRange = { startDate: string; endDate: string }

async function searchReport(range: DateRange, previous: DateRange) {
  const property = process.env.REPORTS_GSC_PROPERTY
  if (!property) return null
  const token = await googleToken('https://www.googleapis.com/auth/webmasters.readonly')
  if (!token) return null

  type Row = { keys?: string[]; clicks: number; impressions: number; ctr: number; position: number }
  const url = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(property)}/searchAnalytics/query`
  const query = (dates: DateRange, dimensions: string[], rowLimit: number) =>
    report<{ rows?: Row[] }>(url, token, { ...dates, dimensions, rowLimit, type: 'web', dataState: 'final' })
  const [totals, prior, keywords] = await Promise.all([
    query(range, [], 1),
    query(previous, [], 1),
    query(range, ['query', 'page'], 100),
  ])
  return { checkedAt: new Date().toISOString(), totals: totals.rows?.[0], previous: prior.rows?.[0], keywords: keywords.rows ?? [] }
}

async function trafficReport(range: DateRange, previous: DateRange) {
  const property = process.env.REPORTS_GA4_PROPERTY_ID
  if (!property || !/^\d+$/.test(property)) return null
  const token = await googleToken('https://www.googleapis.com/auth/analytics.readonly')
  if (!token) return null

  type Row = { dimensionValues?: { value: string }[]; metricValues: { value: string }[] }
  const url = `https://analyticsdata.googleapis.com/v1beta/properties/${property}:runReport`
  const query = (dates: DateRange, dimensions: string[], limit: number) =>
    report<{ rows?: Row[]; rowCount?: number }>(url, token, {
      dateRanges: [dates],
      dimensions: dimensions.map(name => ({ name })),
      metrics: [{ name: 'sessions' }],
      orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
      limit,
    })
  const [totals, prior, sources, landingPages] = await Promise.all([
    query(range, [], 1),
    query(previous, [], 1),
    query(range, ['sessionDefaultChannelGroup', 'sessionSource', 'sessionMedium', 'deviceCategory'], 5000),
    query(range, ['landingPage'], 25),
  ])
  const channels = new Map<string, Record<string, number>>()
  const sourceRows = (sources.rows ?? []).map(row => {
    const [group = '', source = '', medium = '', device = ''] = row.dimensionValues?.map(item => item.value) ?? []
    const sessions = Number(row.metricValues[0].value)
    const ai = /^(chatgpt\.com|chat\.openai\.com|perplexity\.ai|claude\.ai|copilot\.microsoft\.com|gemini\.google\.com)$/.test(source.toLowerCase().replace(/^www\./, ''))
    const channel = ai ? 'Identifiable AI' : group === 'Organic Search' && source === 'google' ? 'Google organic' : group
    const counts = channels.get(channel) ?? {}
    counts[device] = (counts[device] ?? 0) + sessions
    channels.set(channel, counts)
    return { channel, source, medium, device, sessions }
  })
  return {
    checkedAt: new Date().toISOString(),
    total: Number(totals.rows?.[0]?.metricValues[0].value ?? 0),
    previous: Number(prior.rows?.[0]?.metricValues[0].value ?? 0),
    channels: [...channels.entries()],
    partial: (sources.rowCount ?? 0) > sourceRows.length,
    sources: sourceRows.slice(0, 100),
    landingPages: (landingPages.rows ?? []).map(row => ({
      page: row.dimensionValues?.[0]?.value ?? '',
      sessions: Number(row.metricValues[0].value),
    })),
  }
}

export const loadSearchReport = unstable_cache(searchReport, ['becker-search-report-v1'], { revalidate: 86400 })
export const loadTrafficReport = unstable_cache(trafficReport, ['becker-traffic-report-v1'], { revalidate: 86400 })
