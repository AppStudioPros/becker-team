import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createAdminClient } from '@/lib/supabase'
import PostForm from '@/components/PostForm'
import { ChevronLeft } from 'lucide-react'

interface Params {
  params: Promise<{ id: string }>
}

async function getPost(id: string) {
  const admin = createAdminClient()
  const { data, error } = await admin
    .from('becker_blog_posts')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !data) return null
  return data
}

export default async function EditPostPage({ params }: Params) {
  const { id } = await params
  const post = await getPost(id)

  if (!post) notFound()

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5ecd8' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#1c3023' }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link
            href="/admin/dashboard"
            className="text-white/70 hover:text-white transition-colors flex items-center gap-1 text-sm"
          >
            <ChevronLeft size={16} />
            Back to Dashboard
          </Link>
          <span className="text-white/30">/</span>
          <h1
            className="text-white text-lg font-semibold truncate max-w-xs"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Edit: {post.title}
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <PostForm
          initialData={{
            id: post.id,
            title: post.title,
            slug: post.slug,
            status: post.status,
            meta_description: post.meta_description,
            feature_image: post.feature_image,
            body_top: post.body_top,
            mid_image: post.mid_image,
            body_bottom: post.body_bottom,
            cta_text: post.cta_text,
            cta_url: post.cta_url,
            category: post.category,
            keywords: post.keywords,
          }}
          isEdit
        />
      </div>
    </div>
  )
}
