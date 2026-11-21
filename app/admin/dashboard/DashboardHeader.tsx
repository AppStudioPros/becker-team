'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function DashboardHeader({ showReports = false, reportsActive = false }: { showReports?: boolean; reportsActive?: boolean }) {
  const router = useRouter()

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/admin')
  }

  return (
    <div className="sticky top-0 z-10 shadow-sm" style={{ backgroundColor: '#1c3023' }}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-white text-xl font-semibold" style={{ fontFamily: 'var(--font-playfair)' }}>
            {reportsActive ? 'Search & Traffic' : 'Blog Dashboard'}
          </h1>
          <nav aria-label="Dashboard" className="flex flex-wrap items-center gap-3">
            <Link href="/" className="text-white/70 text-sm hover:text-white transition-colors" target="_blank">
              View Site
            </Link>
            {showReports && (
              <Link href={reportsActive ? '/admin/dashboard' : '/admin/dashboard/search-traffic'}
                className="rounded border border-white/30 px-4 py-2 text-sm font-semibold text-white">
                {reportsActive ? 'Blog Dashboard' : 'Search & Traffic'}
              </Link>
            )}
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
          </nav>
        </div>
      </div>
    </div>
  )
}
