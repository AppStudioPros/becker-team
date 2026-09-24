'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function DashboardHeader() {
  const router = useRouter()

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/admin')
  }

  return (
    <div className="sticky top-0 z-10 shadow-sm" style={{ backgroundColor: '#1c3023' }}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-xl font-semibold" style={{ fontFamily: 'var(--font-playfair)' }}>
            Blog Dashboard
          </h1>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-white/70 text-sm hover:text-white transition-colors" target="_blank">
              View Site
            </Link>
            <Link href="/admin/users"
              className="text-sm font-semibold px-4 py-2 rounded transition-opacity hover:opacity-90 border"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
              Users
            </Link>
            <Link href="/admin/dashboard/categories"
              className="text-sm font-semibold px-4 py-2 rounded transition-opacity hover:opacity-90 border"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
              Categories
            </Link>
            <Link href="/admin/dashboard/new"
              className="bg-white text-sm font-semibold px-5 py-2 rounded transition-opacity hover:opacity-90"
              style={{ color: '#1c3023' }}>
              + New Post
            </Link>
            <button onClick={handleSignOut} className="text-white/60 text-sm hover:text-white/90 transition-colors">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
