import type { MetadataRoute } from 'next'
import { createAdminClient } from '@/lib/supabase'
import { lastPublishedEdit } from '@/lib/blogDates'
import { mortgageServiceAreas } from '@/lib/mortgageServiceAreas'

const BASE = 'https://www.thebeckerteam.com'

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch published blog posts
  let blogEntries: MetadataRoute.Sitemap = []
  try {
    const admin = createAdminClient()
    const { data } = await admin
      .from('becker_blog_posts')
      .select('slug, published_at, updated_at')
      .eq('status', 'published')

    blogEntries = (data || []).map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: lastPublishedEdit(post.published_at, post.updated_at),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  } catch {
    // Non-blocking — sitemap still generates without blog posts
  }

  return [
    { url: BASE, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/about`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/faq`, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${BASE}/contact`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/loan-programs`, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE}/loan-programs/mortgage-accelerator`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/loan-programs/mortgage-accelerator/guide`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/loan-programs/asset-qualifier-loans`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/loan-programs/conventional-loans`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/loan-programs/fha-loans`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/loan-programs/va-loans`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/loan-programs/jumbo-loans`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/loan-programs/self-employed-loans`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/mortgage-calculator`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/mortgage-interest-rates`, changeFrequency: 'daily', priority: 0.75 },
    { url: `${BASE}/home-loan-process-guide`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/terms`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/fair-lending`, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE}/accessibility`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    // GEO landing pages
    { url: `${BASE}/denver-mortgage`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/boulder-jumbo-loans`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/colorado-springs-va-loans`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/fort-collins-mortgage`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/aurora-home-loans`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/lakewood-mortgage`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/littleton-mortgage`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/westminster-mortgage`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/broomfield-mortgage`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/englewood-mortgage`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/longmont-mortgage`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/loveland-mortgage`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/thornton-mortgage`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/centennial-mortgage`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/mountain-home-loans`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/self-employed-mortgage-colorado`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/second-home-loans-colorado`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/va-loans-denver`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/chfa-loan-colorado`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/down-payment-assistance-colorado`, changeFrequency: 'monthly', priority: 0.85 },
    ...mortgageServiceAreas.map(({ slug }) => ({
      url: BASE + '/service-areas/' + slug,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
    ...blogEntries,
  ]
}
