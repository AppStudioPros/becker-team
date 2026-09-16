import type { Metadata } from 'next'
import { createAdminClient } from '@/lib/supabase'
import BlogClient from '@/components/BlogClient'

export const metadata: Metadata = {
  title: 'Mortgage Blog | The Becker Team',
  description:
    'Mortgage tips, market updates, and home loan insights from Jamie Becker and The Becker Team. Colorado mortgage broker with 21+ years of experience.',
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
  return data || []
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

async function getCategories(): Promise<string[]> {
  const admin = createAdminClient()
  const { data } = await admin
    .from('becker_blog_categories')
    .select('name')
    .order('name', { ascending: true })
  return (data || []).map(c => c.name)
}

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([getPublishedPosts(), getCategories()])

  return (
    <>
      {/* Hero */}
      <section
        className="relative py-24 px-6 flex items-center justify-center overflow-hidden"
        style={{ minHeight: '320px' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/blog-hero.jpg")' }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(11,30,61,0.72)' }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Mortgage Insights
          </h1>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Tips, updates, and real talk on home loans from Jamie Becker and The Becker Team.
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
            Ready to Talk About Your Home Loan?
          </h2>
          <p className="text-white/75 mb-8">
            Jamie Becker has helped Colorado families close on their dream homes for over 21 years. Let us help you next.
          </p>
          <a
            href="https://2179191.my1003app.com/794730/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg font-semibold text-sm tracking-wide uppercase transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#c8972b', color: '#fff' }}
          >
            Start Your Application
          </a>
        </div>
      </section>
    </>
  )
}
