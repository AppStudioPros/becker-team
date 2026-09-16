'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/client'

export default function AcceptInvitePage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [sessionReady, setSessionReady] = useState(false)

  useEffect(() => {
    // Supabase processes the hash token automatically on the client.
    // Wait briefly to let the auth state settle.
    const supabase = createClient()
    const { data: listener } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN' || event === 'USER_UPDATED') {
        setSessionReady(true)
      }
    })

    // Also check immediately in case session is already there
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) setSessionReady(true)
    })

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }

    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }

    setLoading(true)

    try {
      const supabase = createClient()
      const { error: updateError } = await supabase.auth.updateUser({ password })

      if (updateError) {
        setError(updateError.message || 'Failed to set password. Please try again.')
      } else {
        setSuccess(true)
        setTimeout(() => router.push('/admin/dashboard'), 2000)
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: '#f5ecd8' }}
    >
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-lg p-10">
          {/* Logo / Branding */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/squarespace/becker-logo-all-white.png"
              alt="The Becker Team"
              width={120}
              height={80}
              className="object-contain"
              style={{ filter: 'invert(1) brightness(0.3)' }}
            />
          </div>

          <h1
            className="text-2xl font-bold text-center mb-2"
            style={{ fontFamily: 'var(--font-playfair)', color: '#1c3023' }}
          >
            Set Your Password
          </h1>
          <p className="text-center text-sm mb-8" style={{ color: '#555' }}>
            Choose a password to complete your account setup.
          </p>

          {success ? (
            <div className="text-center py-6">
              <p className="text-green-700 font-medium text-sm mb-2">
                Password set successfully!
              </p>
              <p className="text-sm" style={{ color: '#888' }}>
                Redirecting to dashboard...
              </p>
            </div>
          ) : !sessionReady ? (
            <div className="text-center py-6">
              <p className="text-sm" style={{ color: '#888' }}>
                Verifying your invite link...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-1"
                  style={{ color: '#1c3023' }}
                >
                  New Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="new-password"
                  minLength={8}
                  className="w-full border rounded-lg px-4 py-3 text-sm outline-none transition-all"
                  style={{
                    borderColor: '#ede4cc',
                    color: '#1c3023',
                    backgroundColor: '#fafaf8',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#1c3023')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#ede4cc')}
                  placeholder="At least 8 characters"
                />
              </div>

              <div>
                <label
                  htmlFor="confirm"
                  className="block text-sm font-medium mb-1"
                  style={{ color: '#1c3023' }}
                >
                  Confirm Password
                </label>
                <input
                  id="confirm"
                  type="password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  required
                  autoComplete="new-password"
                  className="w-full border rounded-lg px-4 py-3 text-sm outline-none transition-all"
                  style={{
                    borderColor: '#ede4cc',
                    color: '#1c3023',
                    backgroundColor: '#fafaf8',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#1c3023')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#ede4cc')}
                  placeholder="Re-enter your password"
                />
              </div>

              {error && (
                <p className="text-sm text-red-600 text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg text-white font-semibold text-sm tracking-wide transition-opacity disabled:opacity-60"
                style={{ backgroundColor: '#1c3023' }}
              >
                {loading ? 'Setting password...' : 'Set Password'}
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-xs mt-6" style={{ color: '#888' }}>
          The Becker Team &mdash; Xpert Home Lending, NMLS #794730
        </p>
      </div>
    </div>
  )
}
