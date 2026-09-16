import type { MetadataRoute } from 'next'
import { createAdminClient } from '@/lib/supabase'

const BASE = 'https://www.thebeckerteam.com'

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  // Fetch published blog posts
  let blogEntries: MetadataRoute.Sitemap = []
  try {
    const admin = createAdminClient()
    const { data } = await admin
      .from('becker_blog_posts')
      .select('slug, updated_at')
      .eq('status', 'published')

    blogEntries = (data || []).map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: post.updated_at ? new Date(post.updated_at) : now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  } catch {
    // Non-blocking — sitemap still generates without blog posts
  }

  return [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/loan-programs`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE}/loan-programs/mortgage-accelerator`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/loan-programs/asset-qualifier-loans`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/loan-programs/conventional-loans`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/loan-programs/fha-loans`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/loan-programs/va-loans`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/loan-programs/jumbo-loans`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/loan-programs/self-employed-loans`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/mortgage-calculator`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/mortgage-interest-rates`, lastModified: now, changeFrequency: 'daily', priority: 0.75 },
    { url: `${BASE}/home-loan-process-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/fair-lending`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE}/accessibility`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    ...blogEntries,
  ]
}
