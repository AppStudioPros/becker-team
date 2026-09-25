'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  id: string
  email: string
  display_name: string | null
  role: string
  created_at: string
  last_sign_in_at: string | null
  confirmed_at: string | null
}

export default function UsersPage() {
  const router = useRouter()
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState<string | null>(null)
  const [resending, setResending] = useState<string | null>(null)
  const [changingRole, setChangingRole] = useState<string | null>(null)
  const [inviteEmail, setInviteEmail] = useState('')
  const [inviteRole, setInviteRole] = useState<'admin' | 'user'>('user')
  const [inviteLoading, setInviteLoading] = useState(false)
  const [inviteMsg, setInviteMsg] = useState('')
  const [inviteError, setInviteError] = useState('')
  const [rowMsg, setRowMsg] = useState<Record<string, string>>({})

  async function load() {
    setLoading(true)
    const res = await fetch('/api/admin/users')
    if (res.status === 403) {
      router.replace('/admin/dashboard')
      return
    }
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
    setUsers(prev => prev.filter(u => u.id !== id))
    const res = await fetch('/api/admin/users', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: id }),
    })
    if (!res.ok) await load()
    setDeleting(null)
  }

  async function changeRole(userId: string, email: string, newRole: 'admin' | 'user') {
    setChangingRole(userId)
    const res = await fetch(`/api/admin/users/${userId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ role: newRole }),
    })
    if (res.ok) {
      setUsers(prev => prev.map(u => u.id === userId ? { ...u, role: newRole } : u))
      setRowMsg(prev => ({ ...prev, [email]: `Role updated to ${newRole}` }))
      setTimeout(() => setRowMsg(prev => ({ ...prev, [email]: '' })), 3000)
    } else {
      setRowMsg(prev => ({ ...prev, [email]: 'Failed to update role' }))
    }
    setChangingRole(null)
  }

  async function resendInvite(userId: string, email: string) {
    setResending(email)
    setRowMsg(prev => ({ ...prev, [email]: '' }))
    const res = await fetch(`/api/admin/users/${userId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'resend_invite', email }),
    })
    const d = await res.json()
    setResending(null)
    setRowMsg(prev => ({
      ...prev,
      [email]: res.ok ? 'Invite resent!' : (d.error ?? 'Failed to resend'),
    }))
    setTimeout(() => setRowMsg(prev => ({ ...prev, [email]: '' })), 4000)
  }

  async function sendInvite(e: React.FormEvent) {
    e.preventDefault()
    setInviteLoading(true)
    setInviteMsg('')
    setInviteError('')
    const res = await fetch('/api/admin/invite', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: inviteEmail, role: inviteRole }),
    })
    const d = await res.json()
    setInviteLoading(false)
    if (res.ok) {
      setInviteMsg(`Invite sent to ${inviteEmail} as ${inviteRole}`)
      setInviteEmail('')
      setInviteRole('user')
      await load()
    } else {
      setInviteError(d.error ?? 'Failed to send invite')
    }
  }

  const roleBadge = (role: string) => {
    const isAdmin = role === 'admin'
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${isAdmin ? 'bg-[#1c3023] text-[#f5ecd8]' : 'bg-gray-100 text-gray-600'}`}>
        {isAdmin ? 'Admin' : 'User'}
      </span>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-8">
        <button onClick={() => router.push('/admin/dashboard')} className="text-xs text-gray-400 hover:text-gray-600 mb-2 flex items-center gap-1">
          ← Back to Dashboard
        </button>
        <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: '"Playfair Display", serif' }}>
          Admin Users
        </h1>
        <p className="text-sm text-gray-400 mt-1">Manage who has access to the blog admin.</p>
      </div>

      {/* Role legend */}
      <div className="bg-[#f5ecd8] rounded-xl p-4 mb-6 flex gap-6 text-sm">
        <div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#1c3023] text-[#f5ecd8] mr-2">Admin</span>
          Full access — can invite/remove users and manage all settings
        </div>
        <div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 mr-2">User</span>
          Blog only — can write and edit posts
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
          <select
            value={inviteRole}
            onChange={e => setInviteRole(e.target.value as 'admin' | 'user')}
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1c3023] bg-white"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
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
          <div className="px-6 py-8 text-sm text-gray-400 text-center">No users yet. Send an invite above.</div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Email</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Role</th>
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
                    <div className="flex items-center gap-2">
                      {roleBadge(u.role)}
                      <select
                        value={u.role}
                        disabled={changingRole === u.id}
                        onChange={e => changeRole(u.id, u.email, e.target.value as 'admin' | 'user')}
                        className="text-xs border border-gray-200 rounded px-2 py-1 bg-white text-gray-500 disabled:opacity-40"
                      >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${u.confirmed_at ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                      {u.confirmed_at ? 'Active' : 'Invite Pending'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">
                    {u.last_sign_in_at ? new Date(u.last_sign_in_at).toLocaleDateString() : 'Never'}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      {rowMsg[u.email ?? ''] && (
                        <span className={`text-xs ${rowMsg[u.email ?? ''].includes('Failed') ? 'text-red-500' : 'text-green-600'}`}>
                          {rowMsg[u.email ?? '']}
                        </span>
                      )}
                      {!u.confirmed_at && (
                        <button onClick={() => resendInvite(u.id, u.email ?? '')} disabled={resending === u.email}
                          className="text-xs text-[#1c3023] hover:underline font-medium disabled:opacity-40">
                          {resending === u.email ? 'Sending...' : 'Resend'}
                        </button>
                      )}
                      <button onClick={() => deleteUser(u.id, u.email ?? '')} disabled={deleting === u.id}
                        className="text-xs text-red-500 hover:text-red-700 font-medium disabled:opacity-40">
                        {deleting === u.id ? 'Removing...' : 'Remove'}
                      </button>
                    </div>
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
