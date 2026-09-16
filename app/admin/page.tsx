'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function AdminLoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (res.ok) {
        router.push('/admin/dashboard')
      } else {
        setError('Incorrect password. Please try again.')
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
            Admin Login
          </h1>
          <p className="text-center text-sm mb-8" style={{ color: '#555' }}>
            The Becker Team Blog Management
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1"
                style={{ color: '#1c3023' }}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full border rounded-lg px-4 py-3 text-sm outline-none transition-all"
                style={{
                  borderColor: '#ede4cc',
                  color: '#1c3023',
                  backgroundColor: '#fafaf8',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#1c3023')}
                onBlur={(e) => (e.currentTarget.style.borderColor = '#ede4cc')}
                placeholder="Enter admin password"
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
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>

        <p className="text-center text-xs mt-6" style={{ color: '#888' }}>
          The Becker Team &mdash; Xpert Home Lending, NMLS #794730
        </p>
      </div>
    </div>
  )
}
