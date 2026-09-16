'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronLeft, Trash2, Plus } from 'lucide-react'

interface Category {
  id: string
  name: string
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [newName, setNewName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/admin/categories')
      .then(r => r.json())
      .then(setCategories)
  }, [])

  async function handleAdd() {
    if (!newName.trim()) return
    setLoading(true)
    setError('')
    const res = await fetch('/api/admin/categories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newName.trim() }),
    })
    const data = await res.json()
    if (!res.ok) {
      setError(data.error || 'Failed to add category')
    } else {
      setCategories(prev => [...prev, data].sort((a, b) => a.name.localeCompare(b.name)))
      setNewName('')
    }
    setLoading(false)
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this category? Posts using it will keep their category label, but it will no longer appear in the dropdown.')) return
    const res = await fetch('/api/admin/categories', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    if (res.ok) setCategories(prev => prev.filter(c => c.id !== id))
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5ecd8' }}>
      <div style={{ backgroundColor: '#1c3023' }}>
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/admin/dashboard" className="text-white/70 hover:text-white transition-colors flex items-center gap-1 text-sm">
            <ChevronLeft size={16} /> Back to Dashboard
          </Link>
          <span className="text-white/30">/</span>
          <h1 className="text-white text-lg font-semibold">Manage Categories</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#888' }}>
            Add New Category
          </h2>
          {error && <p className="text-sm text-red-500 mb-3">{error}</p>}
          <div className="flex gap-3">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
              placeholder="e.g. Refinancing Tips"
              className="flex-1 border rounded-lg px-4 py-2.5 text-sm outline-none"
              style={{ borderColor: '#ede4cc', color: '#1c3023' }}
            />
            <button
              onClick={handleAdd}
              disabled={loading || !newName.trim()}
              className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white rounded-lg disabled:opacity-50"
              style={{ backgroundColor: '#1c3023' }}
            >
              <Plus size={15} /> Add
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b" style={{ borderColor: '#f5ecd8' }}>
            <h2 className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#888' }}>
              {categories.length} {categories.length === 1 ? 'Category' : 'Categories'}
            </h2>
          </div>
          {categories.length === 0 ? (
            <p className="px-6 py-8 text-sm text-center" style={{ color: '#888' }}>No categories yet.</p>
          ) : (
            <ul>
              {categories.map((cat, i) => (
                <li
                  key={cat.id}
                  className="flex items-center justify-between px-6 py-3.5"
                  style={{ borderBottom: i < categories.length - 1 ? '1px solid #f5ecd8' : 'none' }}
                >
                  <span className="text-sm font-medium" style={{ color: '#1c3023' }}>{cat.name}</span>
                  <button
                    onClick={() => handleDelete(cat.id)}
                    className="p-1.5 rounded hover:bg-red-50 transition-colors"
                  >
                    <Trash2 size={14} style={{ color: '#e53e3e' }} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <p className="text-xs mt-4 px-1" style={{ color: '#aaa' }}>
          Deleting a category removes it from the dropdown but does not change existing posts that used it.
        </p>
      </div>
    </div>
  )
}
