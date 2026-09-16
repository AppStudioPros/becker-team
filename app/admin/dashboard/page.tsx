import Link from 'next/link'
import { createAdminClient } from '@/lib/supabase'
import DashboardActions from './DashboardActions'

export const dynamic = 'force-dynamic'

interface BlogPost {
  id: string
  title: string
  slug: string
  status: 'draft' | 'published'
  published_at: string | null
  created_at: string
}

async function getPosts(): Promise<BlogPost[]> {
  const admin = createAdminClient()
  const { data, error } = await admin
    .from('becker_blog_posts')
    .select('id, title, slug, status, published_at, created_at')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Dashboard fetch error:', error)
    return []
  }
  return data || []
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return '--'
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default async function DashboardPage() {
  const posts = await getPosts()

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5ecd8' }}>
      {/* Top bar */}
      <div
        className="sticky top-0 z-10 shadow-sm"
        style={{ backgroundColor: '#1c3023' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1
            className="text-white text-xl font-semibold"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Blog Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-white/70 text-sm hover:text-white transition-colors"
              target="_blank"
            >
              View Site
            </Link>
            <Link
              href="/admin/dashboard/new"
              className="bg-white text-sm font-semibold px-5 py-2 rounded transition-opacity hover:opacity-90"
              style={{ color: '#1c3023' }}
            >
              + New Post
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Total Posts', value: posts.length },
            { label: 'Published', value: posts.filter((p) => p.status === 'published').length },
            { label: 'Drafts', value: posts.filter((p) => p.status === 'draft').length },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl px-6 py-5 shadow-sm"
            >
              <p className="text-3xl font-bold" style={{ color: '#1c3023' }}>
                {stat.value}
              </p>
              <p className="text-sm mt-1" style={{ color: '#666' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Posts table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b" style={{ borderColor: '#ede4cc' }}>
            <h2 className="font-semibold" style={{ color: '#1c3023' }}>
              All Posts
            </h2>
          </div>

          {posts.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <p className="text-lg mb-2" style={{ color: '#1c3023' }}>
                No posts yet
              </p>
              <p className="text-sm mb-6" style={{ color: '#888' }}>
                Create your first blog post to get started.
              </p>
              <Link
                href="/admin/dashboard/new"
                className="inline-block px-6 py-3 rounded-lg text-white text-sm font-semibold"
                style={{ backgroundColor: '#1c3023' }}
              >
                Create First Post
              </Link>
            </div>
          ) : (
            <div className="divide-y" style={{ borderColor: '#ede4cc' }}>
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="px-6 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  {/* Post info */}
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-medium truncate"
                      style={{ color: '#1c3023' }}
                    >
                      {post.title}
                    </p>
                    <p className="text-xs mt-0.5 truncate" style={{ color: '#888' }}>
                      /blog/{post.slug}
                    </p>
                  </div>

                  {/* Status badge */}
                  <span
                    className="shrink-0 text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor:
                        post.status === 'published' ? '#d1fae5' : '#f3f4f6',
                      color:
                        post.status === 'published' ? '#065f46' : '#6b7280',
                    }}
                  >
                    {post.status}
                  </span>

                  {/* Date */}
                  <span className="shrink-0 text-sm hidden sm:block" style={{ color: '#888', minWidth: '100px', textAlign: 'right' }}>
                    {post.status === 'published'
                      ? formatDate(post.published_at)
                      : `Draft ${formatDate(post.created_at)}`}
                  </span>

                  {/* Actions — client component for delete/toggle */}
                  <DashboardActions post={post} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
