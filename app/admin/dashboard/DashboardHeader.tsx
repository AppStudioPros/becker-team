'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function DashboardHeader() {
  const router = useRouter()
  const [showInvite, setShowInvite] = useState(false)
  const [inviteEmail, setInviteEmail] = useState('')
  const [inviteStatus, setInviteStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [inviteMessage, setInviteMessage] = useState('')

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/admin')
  }

  async function handleInvite(e: React.FormEvent) {
    e.preventDefault()
    setInviteStatus('sending')
    setInviteMessage('')

    try {
      const res = await fetch('/api/admin/invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: inviteEmail }),
      })

      const data = await res.json()

      if (res.ok) {
        setInviteStatus('success')
        setInviteMessage(`Invite sent to ${inviteEmail}`)
        setInviteEmail('')
        setTimeout(() => {
          setShowInvite(false)
          setInviteStatus('idle')
          setInviteMessage('')
        }, 3000)
      } else {
        setInviteStatus('error')
        setInviteMessage(data.error || 'Failed to send invite.')
      }
    } catch {
      setInviteStatus('error')
      setInviteMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <div
      className="sticky top-0 z-10 shadow-sm"
      style={{ backgroundColor: '#1c3023' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1
            className="text-white text-xl font-semibold"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Blog Dashboard
          </h1>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-white/70 text-sm hover:text-white transition-colors"
              target="_blank"
            >
              View Site
            </Link>

            <button
              onClick={() => {
                setShowInvite(!showInvite)
                setInviteStatus('idle')
                setInviteMessage('')
              }}
              className="text-sm font-medium px-4 py-2 rounded border transition-colors"
              style={{
                borderColor: 'rgba(255,255,255,0.3)',
                color: 'white',
              }}
            >
              Invite User
            </button>

            <Link
              href="/admin/dashboard/categories"
              className="text-sm font-semibold px-4 py-2 rounded transition-opacity hover:opacity-90 border"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}
            >
              Categories
            </Link>

            <Link
              href="/admin/dashboard/new"
              className="bg-white text-sm font-semibold px-5 py-2 rounded transition-opacity hover:opacity-90"
              style={{ color: '#1c3023' }}
            >
              + New Post
            </Link>

            <button
              onClick={handleSignOut}
              className="text-white/60 text-sm hover:text-white/90 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Invite inline form */}
        {showInvite && (
          <div className="mt-3 pb-1">
            <form onSubmit={handleInvite} className="flex items-center gap-3">
              <input
                type="email"
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
                required
                placeholder="Enter email address to invite"
                className="flex-1 max-w-sm px-4 py-2 rounded-lg text-sm outline-none"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  color: 'white',
                }}
              />
              <button
                type="submit"
                disabled={inviteStatus === 'sending'}
                className="px-4 py-2 rounded-lg text-sm font-semibold bg-white transition-opacity disabled:opacity-60"
                style={{ color: '#1c3023' }}
              >
                {inviteStatus === 'sending' ? 'Sending...' : 'Send Invite'}
              </button>
              <button
                type="button"
                onClick={() => setShowInvite(false)}
                className="text-white/60 text-sm hover:text-white/90 transition-colors"
              >
                Cancel
              </button>
            </form>

            {inviteMessage && (
              <p
                className="text-xs mt-2 font-medium"
                style={{ color: inviteStatus === 'success' ? '#86efac' : '#fca5a5' }}
              >
                {inviteMessage}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
