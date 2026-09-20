'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  id: string
  email: string
  created_at: string
  last_sign_in_at: string | null
  confirmed: boolean
}

export default function UsersPage() {
  const router = useRouter()
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState<string | null>(null)
  const [inviteEmail, setInviteEmail] = useState('')
  const [inviteLoading, setInviteLoading] = useState(false)
  const [inviteMsg, setInviteMsg] = useState('')
  const [inviteError, setInviteError] = useState('')

  async function load() {
    setLoading(true)
    const res = await fetch('/api/admin/users')
    if (res.ok) {
      const d = await res.json()
      setUsers(d.users)
    }
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  async function deleteUser(id: string, email: string) {
    if (!confirm(`Remove ${email} from admin access?`)) return
    setDeleting(id)
    await fetch('/api/admin/users', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId: id }) })
    await load()
    setDeleting(null)
  }

  async function sendInvite(e: React.FormEvent) {
    e.preventDefault()
    setInviteLoading(true)
    setInviteMsg('')
    setInviteError('')
    const res = await fetch('/api/admin/invite', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: inviteEmail }),
    })
    const d = await res.json()
    setInviteLoading(false)
    if (res.ok) { setInviteMsg(`Invite sent to ${inviteEmail}`); setInviteEmail(''); load() }
    else setInviteError(d.error ?? 'Failed to send invite')
  }

  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <button onClick={() => router.push('/admin/dashboard')} className="text-xs text-gray-400 hover:text-gray-600 mb-2 flex items-center gap-1">
            ← Back to Dashboard
          </button>
          <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: '"Playfair Display", serif' }}>
            Admin Users
          </h1>
          <p className="text-sm text-gray-400 mt-1">People with access to the admin panel.</p>
        </div>
      </div>

      {/* Invite form */}
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
        <h2 className="font-semibold text-gray-800 mb-4">Invite a New User</h2>
        <form onSubmit={sendInvite} className="flex gap-3">
          <input
            type="email"
            value={inviteEmail}
            onChange={e => setInviteEmail(e.target.value)}
            placeholder="Email address"
            required
            className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1c3023]"
          />
          <button type="submit" disabled={inviteLoading}
            className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors"
            style={{ backgroundColor: inviteLoading ? '#6b7280' : '#1c3023' }}>
            {inviteLoading ? 'Sending...' : 'Send Invite'}
          </button>
        </form>
        {inviteMsg && <p className="text-sm text-green-600 mt-2">{inviteMsg}</p>}
        {inviteError && <p className="text-sm text-red-600 mt-2">{inviteError}</p>}
        <p className="text-xs text-gray-400 mt-2">Invite links expire after 24 hours.</p>
      </div>

      {/* Users table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800">Registered Users</h2>
        </div>
        {loading ? (
          <div className="px-6 py-8 text-sm text-gray-400 text-center">Loading...</div>
        ) : users.length === 0 ? (
          <div className="px-6 py-8 text-sm text-gray-400 text-center">No users found.</div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Email</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Status</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Last Sign In</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id} className="border-b border-gray-50 last:border-0">
                  <td className="px-6 py-4 text-sm text-gray-800 font-medium">{u.email}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${u.confirmed ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                      {u.confirmed ? 'Active' : 'Invite Pending'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">
                    {u.last_sign_in_at ? new Date(u.last_sign_in_at).toLocaleDateString() : 'Never'}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => deleteUser(u.id, u.email ?? '')} disabled={deleting === u.id}
                      className="text-xs text-red-500 hover:text-red-700 font-medium disabled:opacity-40">
                      {deleting === u.id ? 'Removing...' : 'Remove'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
