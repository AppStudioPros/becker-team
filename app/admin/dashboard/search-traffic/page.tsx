import { createAdminClient } from '@/lib/supabase'
import { importSearchReport } from './import-report'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import type { ReactNode } from 'react'
import DashboardHeader from '../DashboardHeader'
import { canViewSearchReports } from '@/lib/reporting-access'
import { loadSearchReport, loadTrafficReport } from '@/lib/search-reports'
import { loadPageHealth } from '@/lib/page-health-report'

export const dynamic = 'force-dynamic'
export const maxDuration = 60

const importSources = [
  { id: 'backlinks', label: 'Backlinks from Search Console' },
  { id: 'google-ai', label: 'Google AI visibility' },
  { id: 'bing-ai', label: 'Bing AI citations' },
] as const

const number = new Intl.NumberFormat('en-US')
const stamp = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'America/Denver' })

function dateAgo(days: number) {
  const now = new Date()
  now.setUTCDate(now.getUTCDate() - days)
  return now.toISOString().slice(0, 10)
}

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return <section className="space-y-4 rounded-xl bg-white p-5 shadow-sm">
    <h2 className="text-lg font-semibold">{title}</h2>
    {children}
  </section>
}

function Table({ headings, rows }: { headings: string[]; rows: ReactNode[][] }) {
  if (!rows.length) return <p className="text-sm text-gray-600">No data for this period.</p>
  return <div className="overflow-x-auto">
    <table className="w-full text-left text-sm">
      <thead><tr className="bg-[#f5ecd8]">
        {headings.map((heading, index) => <th scope="col" className="px-3 py-2" key={index}>{heading}</th>)}
      </tr></thead>
      <tbody>{rows.map((row, rowIndex) => <tr className="border-b border-stone-200 align-top" key={rowIndex}>
        {row.map((cell, index) => <td className="max-w-xs break-words px-3 py-2" key={index}>{cell}</td>)}
      </tr>)}</tbody>
    </table>
  </div>
}

function Metric({ label, value, previous }: { label: string; value?: number; previous?: number }) {
  return <div className="rounded-xl bg-white p-4 shadow-sm">
    <p className="text-sm text-gray-600">{label}</p>
    <p className="text-2xl font-semibold">{value === undefined ? '—' : number.format(value)}</p>
    {previous !== undefined && <p className="text-xs text-gray-600">{number.format(previous)} previous period</p>}
  </div>
}

export default async function SearchTrafficPage({ searchParams }: { searchParams: Promise<{ days?: string; import?: string }> }) {
  if (!(await canViewSearchReports())) redirect('/admin/dashboard')

  const { days, import: importStatus } = await searchParams
  const period = days === '7' ? 7 : days === '90' ? 90 : 28
  const range = { startDate: dateAgo(period + 3), endDate: dateAgo(4) }
  const previous = { startDate: dateAgo(2 * period + 3), endDate: dateAgo(period + 4) }
  const [searchResult, trafficResult, healthResult, importsResult] = await Promise.allSettled([
    loadSearchReport(range, previous),
    loadTrafficReport(range, previous),
    loadPageHealth(),
    Promise.all(importSources.map(async ({ id, label }) => {
      const { data, error } = await createAdminClient().from('becker_search_report_imports')
        .select('imported_at, headings, rows').eq('source', id)
        .order('imported_at', { ascending: false }).limit(1).maybeSingle()
      return { id, label, data, error }
    })),
  ])
  const search = searchResult.status === 'fulfilled' ? searchResult.value : null
  const traffic = trafficResult.status === 'fulfilled' ? trafficResult.value : null
  const health = healthResult.status === 'fulfilled' ? healthResult.value : null
  const aiSessions = traffic?.channels.find(([channel]) => channel === 'Identifiable AI')?.[1]

  return <div className="min-h-screen bg-[#f5ecd8] text-[#1c3023]">
    <DashboardHeader showReports reportsActive />
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm">Reporting period {range.startDate} to {range.endDate}</p>
        <nav aria-label="Reporting period" className="flex gap-2">
          {[7, 28, 90].map(value => <Link key={value} href={`?days=${value}`} aria-current={value === period ? 'page' : undefined}
            className={`rounded px-3 py-2 text-sm font-semibold ${value === period ? 'bg-[#1c3023] text-white' : 'bg-white'}`}>{value} days</Link>)}
        </nav>
      </div>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Metric label="Google Search clicks" value={search ? search.totals?.clicks ?? 0 : undefined} previous={search ? search.previous?.clicks ?? 0 : undefined} />
        <Metric label="Google Search impressions" value={search ? search.totals?.impressions ?? 0 : undefined} previous={search ? search.previous?.impressions ?? 0 : undefined} />
        <Metric label="Website sessions" value={traffic?.total} previous={traffic?.previous} />
        <Metric label={traffic?.partial ? 'Identifiable AI sessions (partial)' : 'Identifiable AI sessions'}
          value={traffic ? Object.values(aiSessions ?? {}).reduce((sum, count) => sum + count, 0) : undefined} />
      </div>
      <Panel title="Keywords & Google rankings">
        {search ? <>
          <p className="text-sm text-gray-600">Top query and page pairs by clicks. Position is an average across recorded Google impressions. Retrieved {stamp.format(new Date(search.checkedAt))} MT.</p>
          <Table headings={['Search phrase', 'Page', 'Clicks', 'Impressions', 'CTR', 'Avg. position']}
            rows={search.keywords.map(row => [row.keys?.[0], row.keys?.[1], row.clicks, row.impressions, (100 * row.ctr).toFixed(1) + '%', row.position.toFixed(1)])} />
        </> : <p>{searchResult.status === 'rejected' ? 'Search Console sync failed.' : 'Search Console is not connected.'}</p>}
      </Panel>
      <Panel title="Traffic & devices">
        {traffic ? <>
          <p className="text-sm text-gray-600">Direct includes sessions without an attributable source. AI visits are counted where the source is identifiable. Retrieved {stamp.format(new Date(traffic.checkedAt))} MT.</p>
          {traffic.partial && <p className="text-sm">Channel and device counts cover the returned source rows only.</p>}
          <Table headings={['Channel', 'Desktop', 'Mobile', 'Tablet', 'Other']}
            rows={traffic.channels.map(([channel, counts]) => [channel, counts.desktop ?? 0, counts.mobile ?? 0, counts.tablet ?? 0,
              Object.entries(counts).filter(([key]) => !['desktop', 'mobile', 'tablet'].includes(key)).reduce((sum, [, value]) => sum + value, 0)])} />
          <h3 className="font-semibold">Top traffic sources</h3>
          <Table headings={['Channel', 'Source', 'Medium', 'Device', 'Sessions']}
            rows={traffic.sources.map(row => [row.channel, row.source, row.medium, row.device, row.sessions])} />
          <h3 className="font-semibold">Top landing pages</h3>
          <Table headings={['Landing page', 'Sessions']} rows={traffic.landingPages.map(row => [row.page, row.sessions])} />
        </> : <p>{trafficResult.status === 'rejected' ? 'GA4 sync failed.' : 'GA4 is not connected.'}</p>}
      </Panel>
      <Panel title="Page health & metadata">
        {health ? <>
          <p className="text-sm text-gray-600">Checked {health.rows.length} of {health.total} sitemap URLs. Last check {stamp.format(new Date(health.checkedAt))} MT.</p>
          <Table headings={['Page', 'Title tag', 'Meta description', 'Canonical', 'JSON-LD', 'Issues']}
            rows={health.rows.map(row => [<Link className="underline" key={row.path} href={row.path} target="_blank" rel="noreferrer">{row.path}</Link>,
              row.title || '—', row.description || '—', row.canonical || '—', row.structuredData ? 'Present' : '—', row.issues.join(', ') || '—'])} />
        </> : <p>Site check failed.</p>}
      </Panel>
      <Panel title="Backlinks & AI visibility">
        <p className="text-sm text-gray-600">Import a single CSV report from Search Console or Bing Webmaster Tools. AI impressions and citations measure visibility. AI sessions above count visits to the website.</p>
        {importStatus === 'saved' && <p role="status">Report saved.</p>}
        {importStatus === 'invalid' && <p role="alert">Choose a CSV with a header row and data, up to 500 KB.</p>}
        {importStatus === 'failed' && <p role="alert">Could not save the report. Check that reporting storage is available and try again.</p>}
        {importsResult.status === 'fulfilled' ? importsResult.value.map(({ id, label, data, error }) => (
          <details className="rounded-lg border border-stone-200 p-3" key={id}>
            <summary className="cursor-pointer font-semibold">{label}</summary>
            <div className="mt-3 space-y-3">
              {error ? <p>Reporting storage is unavailable.</p> : <>
                {data ? <>
                  <p className="text-sm text-gray-600">Imported {stamp.format(new Date(data.imported_at))} MT. Showing up to 100 of {data.rows.length} rows.</p>
                  <Table headings={data.headings} rows={data.rows.slice(0, 100)} />
                </> : <p className="text-sm text-gray-600">No report imported yet.</p>}
                <form action={importSearchReport} className="flex flex-wrap items-end gap-3">
                  <input type="hidden" name="source" value={id} />
                  <label className="space-y-1 text-sm">
                    <span className="block">CSV file</span>
                    <input className="block max-w-full" type="file" name="report" accept=".csv,text/csv" required />
                  </label>
                  <button className="rounded bg-[#1c3023] px-4 py-2 text-sm font-semibold text-white">Import report</button>
                </form>
              </>}
            </div>
          </details>
        )) : <p>Reporting storage is unavailable.</p>}
      </Panel>
    </div>
  </div>
}
