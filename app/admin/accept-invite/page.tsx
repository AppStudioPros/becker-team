'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/client'

export default function AcceptInvitePage() {
  const router = useRouter()
  const supabase = createClient()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    async function init() {
      // Read #access_token hash from Supabase redirect
      if (typeof window !== 'undefined' && window.location.hash) {
        const params = new URLSearchParams(window.location.hash.substring(1))
        const accessToken = params.get('access_token')
        const refreshToken = params.get('refresh_token')
        if (accessToken && refreshToken) {
          await supabase.auth.setSession({ access_token: accessToken, refresh_token: refreshToken })
          window.history.replaceState(null, '', window.location.pathname)
        }
      }

      // Retry up to 3x for cookie propagation
      let user = null
      for (let i = 0; i < 3; i++) {
        const { data } = await supabase.auth.getUser()
        if (data.user) { user = data.user; break }
        await new Promise((r) => setTimeout(r, 500))
      }

      if (user) {
        setEmail(user.email ?? '')
        setReady(true)
      } else {
        router.replace('/admin?error=invite_expired')
      }
    }

    init()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    if (password !== confirm) {
      setError("Passwords don't match.")
      return
    }

    setLoading(true)
    const { error: updateError } = await supabase.auth.updateUser({ password })
    if (updateError) {
      setError(updateError.message)
      setLoading(false)
      return
    }

    router.push('/admin/dashboard')
    router.refresh()
  }

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#f5ecd8' }}>
        <div className="bg-white rounded-2xl px-8 py-6 text-center shadow-lg">
          <p className="text-sm" style={{ color: '#888' }}>Setting up your account…</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#f5ecd8' }}>
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-lg p-10">

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/images/squarespace/becker-logo-all-white.png"
              alt="The Becker Team"
              width={120}
              height={80}
              className="object-contain"
              style={{ filter: 'invert(1) brightness(0.3)' }}
            />
          </div>

          <h1 className="text-2xl font-bold text-center mb-1" style={{ fontFamily: 'var(--font-playfair)', color: '#1c3023' }}>
            Welcome!
          </h1>
          <p className="text-center text-sm mb-8" style={{ color: '#888' }}>
            Create a password to activate your account.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Email — read only */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#1c3023' }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                disabled
                className="w-full border rounded-lg px-4 py-3 text-sm"
                style={{ borderColor: '#ede4cc', backgroundColor: '#fafaf8', color: '#888' }}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#1c3023' }}>
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 text-sm outline-none transition-all"
                style={{ borderColor: '#ede4cc', backgroundColor: '#fafaf8', color: '#1c3023' }}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#1c3023')}
                onBlur={(e) => (e.currentTarget.style.borderColor = '#ede4cc')}
                placeholder="At least 8 characters"
              />
            </div>

            <div>
              <label htmlFor="confirm" className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#1c3023' }}>
                Confirm Password
              </label>
              <input
                id="confirm"
                type="password"
                required
                autoComplete="new-password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 text-sm outline-none transition-all"
                style={{ borderColor: '#ede4cc', backgroundColor: '#fafaf8', color: '#1c3023' }}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#1c3023')}
                onBlur={(e) => (e.currentTarget.style.borderColor = '#ede4cc')}
                placeholder="Re-enter your password"
              />
            </div>

            {error && (
              <div className="px-4 py-3 rounded-lg bg-red-50 border border-red-100 text-sm text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg font-semibold text-sm tracking-wide transition-opacity hover:opacity-90 disabled:opacity-60"
              style={{ backgroundColor: '#1c3023', color: '#f5ecd8' }}
            >
              {loading ? 'Creating your account…' : 'Create Account & Sign In'}
            </button>
          </form>

          <p className="text-center text-xs mt-8" style={{ color: '#aaa' }}>
            The Becker Team &mdash; Xpert Home Lending, NMLS #794730
          </p>
        </div>
      </div>
    </div>
  )
}
