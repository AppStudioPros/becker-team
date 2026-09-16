import Link from 'next/link'
import PostForm from '@/components/PostForm'
import { ChevronLeft } from 'lucide-react'

export default function NewPostPage() {
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
            className="text-white text-lg font-semibold"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            New Post
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <PostForm />
      </div>
    </div>
  )
}
