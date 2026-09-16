'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Search, X } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  slug: string
  published_at: string | null
  feature_image: string | null
  meta_description: string | null
  category: string | null
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric',
  })
}

export default function BlogClient({ posts, categories }: { posts: BlogPost[], categories: string[] }) {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sort, setSort] = useState<'newest' | 'oldest'>('newest')

  const filtered = useMemo(() => {
    let result = [...posts]

    // Search
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.meta_description?.toLowerCase().includes(q) ||
        p.category?.toLowerCase().includes(q)
      )
    }

    // Category
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory)
    }

    // Sort
    result.sort((a, b) => {
      const da = a.published_at ? new Date(a.published_at).getTime() : 0
      const db = b.published_at ? new Date(b.published_at).getTime() : 0
      return sort === 'newest' ? db - da : da - db
    })

    return result
  }, [posts, search, selectedCategory, sort])

  const hasFilters = search.trim() || selectedCategory !== 'All' || sort !== 'newest'

  function clearFilters() {
    setSearch('')
    setSelectedCategory('All')
    setSort('newest')
  }

  return (
    <>
      {/* Search + Filter bar */}
      <div className="max-w-5xl mx-auto mb-10">
        <div className="bg-white rounded-2xl shadow-sm p-4 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          {/* Search */}
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#aaa' }} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search posts..."
              className="w-full pl-9 pr-4 py-2.5 text-sm rounded-lg border outline-none transition-colors focus:border-[#1c3023]"
              style={{ borderColor: '#ede4cc', color: '#1c3023' }}
            />
          </div>

          {/* Category filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2.5 text-sm rounded-lg border outline-none cursor-pointer"
            style={{ borderColor: '#ede4cc', color: '#1c3023', minWidth: '160px' }}
          >
            <option value="All">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as 'newest' | 'oldest')}
            className="px-3 py-2.5 text-sm rounded-lg border outline-none cursor-pointer"
            style={{ borderColor: '#ede4cc', color: '#1c3023', minWidth: '130px' }}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>

          {/* Clear */}
          {hasFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1.5 text-sm px-3 py-2.5 rounded-lg transition-colors hover:bg-gray-50 whitespace-nowrap"
              style={{ color: '#888', border: '1px solid #ede4cc' }}
            >
              <X size={13} /> Clear
            </button>
          )}
        </div>

        {/* Results count when filtering */}
        {hasFilters && (
          <p className="text-sm mt-3 px-1" style={{ color: '#888' }}>
            {filtered.length} {filtered.length === 1 ? 'post' : 'posts'} found
          </p>
        )}
      </div>

      {/* Posts grid */}
      {filtered.length === 0 ? (
        <div className="max-w-5xl mx-auto text-center py-16">
          <p className="text-lg font-medium mb-2" style={{ color: '#1c3023' }}>No posts found</p>
          <p className="text-sm mb-4" style={{ color: '#888' }}>Try adjusting your search or filters</p>
          <button onClick={clearFilters} className="text-sm underline" style={{ color: '#c8972b' }}>
            Clear filters
          </button>
        </div>
      ) : (
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              {post.feature_image ? (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.feature_image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ) : (
                <div className="h-48 flex items-center justify-center" style={{ backgroundColor: '#ede4cc' }}>
                  <span className="text-4xl font-bold opacity-20" style={{ fontFamily: 'var(--font-playfair)', color: '#1c3023' }}>BT</span>
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  {post.category && (
                    <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full" style={{ backgroundColor: '#f5ecd8', color: '#1c3023' }}>
                      {post.category}
                    </span>
                  )}
                  {post.published_at && (
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: '#888' }}>
                      <Calendar size={12} />
                      <span>{formatDate(post.published_at)}</span>
                    </div>
                  )}
                </div>

                <h2 className="text-lg font-semibold leading-snug mb-3" style={{ fontFamily: 'var(--font-playfair)', color: '#1c3023' }}>
                  {post.title}
                </h2>

                {post.meta_description && (
                  <p className="text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: '#555' }}>
                    {post.meta_description}
                  </p>
                )}

                <span className="inline-block text-sm font-semibold" style={{ color: '#1c3023', borderBottom: '2px solid #c8972b' }}>
                  Read More
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
