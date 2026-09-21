import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { createAdminClient } from '@/lib/supabase'
import { Calendar, ChevronLeft } from 'lucide-react'

export const revalidate = 60

interface Params {
  params: Promise<{ slug: string }>
}

async function getPostBySlug(slug: string) {
  const admin = createAdminClient()
  const { data, error } = await admin
    .from('becker_blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (error || !data) return null
  return data
}

export async function generateStaticParams() {
  const admin = createAdminClient()
  const { data } = await admin
    .from('becker_blog_posts')
    .select('slug')
    .eq('status', 'published')

  return (data || []).map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: 'Post Not Found | The Becker Team' }

  return {
    title: post.title,
    description: post.meta_description || undefined,
    keywords: post.keywords || undefined,
    alternates: {
      canonical: `https://www.thebeckerteam.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.meta_description || undefined,
      type: 'article',
      publishedTime: post.published_at || undefined,
      authors: ['Jamie Becker'],
      images: post.feature_image ? [{ url: post.feature_image, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.meta_description || undefined,
      images: post.feature_image ? [post.feature_image] : undefined,
    },
  }
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) notFound()

  const BASE = 'https://www.thebeckerteam.com'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.meta_description || undefined,
    image: post.feature_image || undefined,
    url: `${BASE}/blog/${post.slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/blog/${post.slug}` },
    datePublished: post.published_at || undefined,
    dateModified: post.updated_at || post.published_at || undefined,
    author: {
      '@type': 'Person',
      name: 'Jamie Becker',
      url: `${BASE}/about`,
      identifier: 'NMLS #794730',
      sameAs: ['https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/794730'],
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Becker Team',
      url: BASE,
      logo: { '@type': 'ImageObject', url: `${BASE}/images/becker-team-logo.png` },
    },
    ...(post.category ? { articleSection: post.category } : {}),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${BASE}/blog/${post.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Feature Image */}
      {post.feature_image && (
        <div className="relative w-full h-64 md:h-96 overflow-hidden">
          <Image
            src={post.feature_image}
            alt={post.title}
            fill
            className="object-cover"
            style={{ objectPosition: post.hero_position || 'center center' }}
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(28,48,35,0.6) 100%)' }}
          />
        </div>
      )}

      {/* Article */}
      <article style={{ backgroundColor: '#f5ecd8' }}>
        <div className="max-w-3xl mx-auto px-6 py-12">

          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm mb-8 transition-opacity hover:opacity-75"
            style={{ color: '#1c3023' }}
          >
            <ChevronLeft size={16} />
            All Posts
          </Link>

          {/* Post header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              {post.category && (
                <span
                  className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                  style={{ backgroundColor: '#f5ecd8', color: '#1c3023' }}
                >
                  {post.category}
                </span>
              )}
              {post.published_at && (
                <div className="flex items-center gap-1.5 text-sm" style={{ color: '#888' }}>
                  <Calendar size={14} />
                  <span>{formatDate(post.published_at)}</span>
                </div>
              )}
            </div>
            <h1
              className="text-3xl md:text-4xl font-bold leading-tight"
              style={{ fontFamily: 'var(--font-playfair)', color: '#1c3023' }}
            >
              {post.title}
            </h1>
          </header>

          {/* Body Top */}
          {post.body_top && (
            <div
              className="prose prose-lg max-w-none mb-10"
              style={{ color: '#1c3023' }}
              dangerouslySetInnerHTML={{ __html: post.body_top }}
            />
          )}

          {/* Mid Image */}
          {post.mid_image && (
            <div className="my-12 flex justify-center">
              <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-md" style={{ aspectRatio: '16/9' }}>
                <Image
                  src={post.mid_image}
                  alt="Article image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              </div>
            </div>
          )}

          {/* Body Bottom */}
          {post.body_bottom && (
            <div
              className="prose prose-lg max-w-none mb-10"
              style={{ color: '#1c3023' }}
              dangerouslySetInnerHTML={{ __html: post.body_bottom }}
            />
          )}
        </div>

        {/* CTA Section */}
        {post.cta_text && (
          <section
            className="py-16 px-6 text-center"
            style={{ backgroundColor: '#1c3023' }}
          >
            <div className="max-w-2xl mx-auto">
              <h2
                className="text-2xl md:text-3xl font-bold text-white mb-6"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {post.cta_text}
              </h2>
              {post.cta_url && (
                <a
                  href={post.cta_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 rounded-lg font-semibold text-sm tracking-wide uppercase transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#c8972b', color: '#fff' }}
                >
                  Get Started
                </a>
              )}
            </div>
          </section>
        )}

        {/* Default CTA if no custom CTA */}
        {!post.cta_text && (
          <section
            className="py-16 px-6 text-center"
            style={{ backgroundColor: '#1c3023' }}
          >
            <div className="max-w-2xl mx-auto">
              <h2
                className="text-2xl font-bold text-white mb-4"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Have Questions About Your Home Loan?
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
        )}
      </article>
    </>
  )
}
