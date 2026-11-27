import SectionBackdrop from '@/components/SectionBackdrop'
import type { Metadata } from 'next'
import { createAdminClient } from '@/lib/supabase'
import { previewBlogPosts } from '@/lib/previewBlogPosts'
import BlogClient from '@/components/BlogClient'

export const metadata: Metadata = {
  title: 'Colorado Mortgage Blog',
  description:
    'Jamie Becker answers Colorado homebuyers’ questions about credit, down payments, loan programs and the cash needed at closing.',
  alternates: {
    canonical: 'https://www.thebeckerteam.com/blog',
  },
}

export const revalidate = 60

interface BlogPost {
  id: string
  title: string
  slug: string
  published_at: string | null
  feature_image: string | null
  meta_description: string | null
  category: string | null
  hero_position: string | null
}

async function getPublishedPosts(): Promise<BlogPost[]> {
  const admin = createAdminClient()
  const { data, error } = await admin
    .from('becker_blog_posts')
    .select('id, title, slug, published_at, feature_image, meta_description, category, hero_position')
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Blog index fetch error:', error)
    return []
  }
  const published = data || []
  const publishedSlugs = new Set(published.map(post => post.slug))
  const previewCards = previewBlogPosts
    .filter(post => !publishedSlugs.has(post.slug))
    .map(({ id, title, slug, published_at, feature_image, meta_description, category, hero_position }) =>
      ({ id, title, slug, published_at, feature_image, meta_description, category, hero_position }))
  return [...previewCards, ...published]
}

export default async function BlogPage() {
  const posts = await getPublishedPosts()
  const categories = [...new Set(posts.flatMap(post => post.category ? [post.category] : []))]
    .sort((first, second) => first.localeCompare(second))

  return (
    <>
      {/* Hero */}
      <section
        className="relative isolate py-24 px-6 flex items-center justify-center overflow-hidden"
        style={{ minHeight: '320px' }}
      >
        <SectionBackdrop src="/blog-hero.jpg" shade={0.72} tint="11,30,61" hero />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Mortgage Insights
          </h1>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Jamie Becker answers your questions about buying a home and comparing mortgages in Colorado.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section
        className="py-16 px-6"
        style={{ backgroundColor: '#f5ecd8' }}
      >
        <div className="max-w-6xl mx-auto">
          <BlogClient posts={posts} categories={categories} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="py-16 px-6 text-center"
        style={{ backgroundColor: '#1c3023' }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Ready to Apply for a Mortgage?
          </h2>
          <p className="text-white/75 mb-8">
            Start your application online so we can review your income, down payment and plans for the home.
          </p>
          <a
            href="https://2179191.my1003app.com/794730/register"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-cta inline-block px-8 py-4 rounded-lg font-semibold text-sm tracking-wide uppercase"
            style={{ backgroundColor: '#c8972b' }}
          >
            Start Your Application
          </a>
        </div>
      </section>
    </>
  )
}
