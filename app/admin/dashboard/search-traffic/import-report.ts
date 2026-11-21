'use server'

import { redirect } from 'next/navigation'
import { createAdminClient } from '@/lib/supabase'
import { canViewSearchReports } from '@/lib/reporting-access'

const path = '/admin/dashboard/search-traffic'

function parseCsv(csv: string) {
  const records: string[][] = []
  let record: string[] = []
  let value = ''
  let quoted = false
  for (let index = 0; index < csv.length; index++) {
    const character = csv[index]
    if (character === '"' && quoted && csv[index + 1] === '"') {
      value += '"'
      index++
    } else if (character === '"' && (quoted || !value)) {
      quoted = !quoted
    } else if (!quoted && (character === ',' || character === '\n' || character === '\r')) {
      record.push(value.trim())
      value = ''
      if (character !== ',') {
        if (record.some(Boolean)) records.push(record)
        record = []
        if (character === '\r' && csv[index + 1] === '\n') index++
      }
    } else {
      value += character
    }
  }
  if (quoted) return []
  record.push(value.trim())
  if (record.some(Boolean)) records.push(record)
  return records
}

export async function importSearchReport(form: FormData) {
  if (!(await canViewSearchReports())) redirect('/admin/dashboard')
  const file = form.get('report')
  const source = form.get('source')
  if (typeof source !== 'string' || !['backlinks', 'google-ai', 'bing-ai'].includes(source) ||
      !(file instanceof File) || file.size === 0 || file.size > 512_000) {
    redirect(path + '?import=invalid')
  }

  const [headings, ...rows] = parseCsv((await file.text()).replace(/^\uFEFF/, ''))
  if (!headings || headings.length < 2 || headings.length > 20 || !rows.length || rows.length > 10000 ||
      headings.some(value => !value || value.length > 100) ||
      rows.some(row => row.length !== headings.length || row.some(value => value.length > 2000))) {
    redirect(path + '?import=invalid')
  }

  const { error } = await createAdminClient().from('becker_search_report_imports')
    .insert({ source, headings, rows })
  redirect(path + (error ? '?import=failed' : '?import=saved'))
}
