'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface Post {
  id: string
  title: string
  status: 'draft' | 'published'
}

export default function DashboardActions({ post }: { post: Post }) {
  const router = useRouter()

  async function handleDelete() {
    if (!confirm(`Delete "${post.title}"? This cannot be undone.`)) return

    const res = await fetch(`/api/admin/posts/${post.id}`, { method: 'DELETE' })
    if (res.ok) {
      router.refresh()
    } else {
      alert('Failed to delete post.')
    }
  }

  async function handleToggleStatus() {
    const newStatus = post.status === 'published' ? 'draft' : 'published'
    const res = await fetch(`/api/admin/posts/${post.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...post, status: newStatus }),
    })
    if (res.ok) {
      router.refresh()
    } else {
      alert('Failed to update post status.')
    }
  }

  return (
    <div className="flex items-center gap-2 shrink-0">
      <button
        onClick={handleToggleStatus}
        className="text-xs px-3 py-1.5 rounded-lg border font-medium transition-colors hover:bg-gray-50"
        style={{
          borderColor: '#ede4cc',
          color: post.status === 'published' ? '#b45309' : '#065f46',
        }}
        title={post.status === 'published' ? 'Set to draft' : 'Publish'}
      >
        {post.status === 'published' ? 'Unpublish' : 'Publish'}
      </button>

      <Link
        href={`/admin/dashboard/${post.id}`}
        className="text-xs px-3 py-1.5 rounded-lg border font-medium transition-colors hover:bg-gray-50"
        style={{ borderColor: '#ede4cc', color: '#1c3023' }}
      >
        Edit
      </Link>

      <button
        onClick={handleDelete}
        className="text-xs px-3 py-1.5 rounded-lg border font-medium transition-colors hover:bg-red-50"
        style={{ borderColor: '#fecaca', color: '#dc2626' }}
      >
        Delete
      </button>
    </div>
  )
}
