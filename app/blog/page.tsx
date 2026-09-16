import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { createAdminClient } from '@/lib/supabase'
import { Calendar } from 'lucide-react'

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
}

async function getPublishedPosts(): Promise<BlogPost[]> {
  const admin = createAdminClient()
  const { data, error } = await admin
    .from('becker_blog_posts')
    .select('id, title, slug, published_at, feature_image, meta_description')
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

export default async function BlogPage() {
  const posts = await getPublishedPosts()

  return (
    <>
      {/* Hero */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: '#1c3023' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Mortgage Insights
          </h1>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.75)' }}>
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
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <h2
                className="text-2xl font-semibold mb-3"
                style={{ fontFamily: 'var(--font-playfair)', color: '#1c3023' }}
              >
                Check Back Soon
              </h2>
              <p style={{ color: '#666' }}>
                We are working on some great content. Check back shortly for mortgage tips and market updates.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Feature image */}
                  {post.feature_image ? (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={post.feature_image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div
                      className="h-48 flex items-center justify-center"
                      style={{ backgroundColor: '#ede4cc' }}
                    >
                      <span
                        className="text-4xl font-bold opacity-20"
                        style={{ fontFamily: 'var(--font-playfair)', color: '#1c3023' }}
                      >
                        BT
                      </span>
                    </div>
                  )}

                  {/* Card content */}
                  <div className="p-6">
                    {post.published_at && (
                      <div
                        className="flex items-center gap-1.5 text-xs mb-3"
                        style={{ color: '#888' }}
                      >
                        <Calendar size={12} />
                        <span>{formatDate(post.published_at)}</span>
                      </div>
                    )}

                    <h2
                      className="text-lg font-semibold leading-snug mb-3"
                      style={{ fontFamily: 'var(--font-playfair)', color: '#1c3023' }}
                    >
                      {post.title}
                    </h2>

                    {post.meta_description && (
                      <p
                        className="text-sm leading-relaxed mb-4 line-clamp-3"
                        style={{ color: '#555' }}
                      >
                        {post.meta_description}
                      </p>
                    )}

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-block text-sm font-semibold transition-opacity hover:opacity-75"
                      style={{ color: '#1c3023', borderBottom: '2px solid #c8972b' }}
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
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
