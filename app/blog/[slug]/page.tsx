import { lastPublishedEdit } from '@/lib/blogDates'
import { jamieBecker, siteUrl, teamLogo, teamReference } from '@/lib/siteIdentity'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { createAdminClient } from '@/lib/supabase'
import { previewBlogPosts } from '@/lib/previewBlogPosts'
import { Calendar, ChevronLeft } from 'lucide-react'

export const revalidate = 60

interface Params {
  params: Promise<{ slug: string }>
}

function articleAction(href: string | null) {
  if (!href || !URL.canParse(href, siteUrl)) return null
  const url = new URL(href, siteUrl)
  if (url.protocol === 'tel:') return { href: url.href, label: 'Call', external: false }
  if (url.protocol === 'mailto:') return { href: url.href, label: 'Send an Email', external: false }
  if (!['https:', 'http:'].includes(url.protocol)) return null

  const local = ['www.thebeckerteam.com', 'thebeckerteam.com'].includes(url.hostname)
  const path = url.pathname.replace(/\/$/, '')
  const application = url.origin === 'https://2179191.my1003app.com' && path === '/794730/register'
  let label = 'Learn More'
  if (local && path === '/contact') label = 'Contact Jamie'
  if (application) label = 'Start Your Application'
  return { href: local ? url.pathname + url.search + url.hash : url.href, label, external: !local }
}

async function getPostBySlug(slug: string) {
  const admin = createAdminClient()
  const { data, error } = await admin
    .from('becker_blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .maybeSingle()

  if (error) return null
  return data ?? previewBlogPosts.find(post => post.slug === slug) ?? null
}

export async function generateStaticParams() {
  const admin = createAdminClient()
  const { data } = await admin
    .from('becker_blog_posts')
    .select('slug')
    .eq('status', 'published')

  const slugs = new Set((data || []).map(post => post.slug))
  for (const post of previewBlogPosts) slugs.add(post.slug)
  return Array.from(slugs, slug => ({ slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: post.title,
    robots: post.status === 'draft' ? { index: false, follow: false } : undefined,
    description: post.meta_description || undefined,
    keywords: post.keywords || undefined,
    alternates: {
      canonical: `https://www.thebeckerteam.com/blog/${post.slug}`,
    },
    openGraph: {
      url: siteUrl + '/blog/' + post.slug,
      title: post.title,
      description: post.meta_description || undefined,
      type: 'article',
      publishedTime: post.published_at || undefined,
      modifiedTime: lastPublishedEdit(post.published_at, post.updated_at),
      authors: [jamieBecker.url],
      images: [new URL(post.feature_image || '/opengraph-image', siteUrl)],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.meta_description || undefined,
      images: [new URL(post.feature_image || '/opengraph-image', siteUrl)],
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

  const action = articleAction(post.cta_url)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.meta_description || undefined,
    image: new URL(post.feature_image || '/opengraph-image', siteUrl).href,
    url: `${siteUrl}/blog/${post.slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/blog/${post.slug}` },
    datePublished: post.published_at || undefined,
    dateModified: lastPublishedEdit(post.published_at, post.updated_at),
    author: jamieBecker,
    publisher: { ...teamReference, logo: teamLogo },
    ...(post.category ? { articleSection: post.category } : {}),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${siteUrl}/blog/${post.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, '\\u003c') }} />
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
                <div className="flex items-center gap-1.5 text-sm text-muted-ink">
                  <Calendar size={14} />
                  <time dateTime={post.published_at}>{formatDate(post.published_at)}</time>
                </div>
              )}
            </div>
            <h1
              className="text-3xl md:text-4xl font-bold leading-tight"
              style={{ fontFamily: 'var(--font-playfair)', color: '#1c3023' }}
            >
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-[#1c3023]">
              By <Link href="/about" className="font-semibold underline underline-offset-4">Jamie Becker</Link>
              {' · Colorado mortgage broker · NMLS #794730'}
            </p>
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
          {post.slug === 'bank-statement-loans-colorado' && (
            <p className="mt-8 text-[#1c3023]">
              Buying in Colorado with self-employment income?{' '}
              <Link href="/loan-programs/self-employed-loans" className="font-semibold underline underline-offset-4">
                See how The Becker Team can help with bank statement mortgages
              </Link>
              .
            </p>
          )}
          <p className="mt-6 text-[#1c3023]">Jamie Becker - The Becker Team - Denver, CO</p>
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
              {action && (
                <a
                  href={action.href}
                  target={action.external ? '_blank' : undefined}
                  rel={action.external ? 'noopener noreferrer' : undefined}
                  className="gold-cta inline-block px-8 py-4 rounded-lg font-semibold text-sm tracking-wide uppercase"
                  style={{ backgroundColor: '#c8972b' }}
                >
                  {action.label}
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
        )}
      </article>
    </>
  )
}
