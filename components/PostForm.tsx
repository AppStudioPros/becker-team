'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

const TiptapEditor = dynamic(() => import('./TiptapEditor'), { ssr: false })
const ImageUploader = dynamic(() => import('./ImageUploader'), { ssr: false })

function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80)
}

interface PostFormProps {
  initialData?: {
    id?: string
    title?: string
    slug?: string
    status?: 'draft' | 'published'
    meta_description?: string
    feature_image?: string
    body_top?: string
    mid_image?: string
    body_bottom?: string
    cta_text?: string
    cta_url?: string
  }
  isEdit?: boolean
}

export default function PostForm({ initialData, isEdit }: PostFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [title, setTitle] = useState(initialData?.title || '')
  const [slug, setSlug] = useState(initialData?.slug || '')
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(!!initialData?.slug)
  const [status, setStatus] = useState<'draft' | 'published'>(initialData?.status || 'draft')
  const [metaDescription, setMetaDescription] = useState(initialData?.meta_description || '')
  const [featureImage, setFeatureImage] = useState(initialData?.feature_image || '')
  const [bodyTop, setBodyTop] = useState(initialData?.body_top || '')
  const [midImage, setMidImage] = useState(initialData?.mid_image || '')
  const [bodyBottom, setBodyBottom] = useState(initialData?.body_bottom || '')
  const [ctaText, setCtaText] = useState(initialData?.cta_text || '')
  const [ctaUrl, setCtaUrl] = useState(initialData?.cta_url || '')

  // Auto-generate slug from title
  useEffect(() => {
    if (!slugManuallyEdited) {
      setSlug(slugify(title))
    }
  }, [title, slugManuallyEdited])

  async function handleSave(publishStatus: 'draft' | 'published') {
    setError('')
    if (!title.trim()) {
      setError('Title is required.')
      return
    }
    if (!slug.trim()) {
      setError('Slug is required.')
      return
    }

    setLoading(true)
    try {
      const payload = {
        title: title.trim(),
        slug: slug.trim(),
        status: publishStatus,
        meta_description: metaDescription,
        feature_image: featureImage,
        body_top: bodyTop,
        mid_image: midImage,
        body_bottom: bodyBottom,
        cta_text: ctaText,
        cta_url: ctaUrl,
      }

      let res: Response
      if (isEdit && initialData?.id) {
        res = await fetch(`/api/admin/posts/${initialData.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      } else {
        res = await fetch('/api/admin/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      }

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Save failed')
      }

      router.push('/admin/dashboard')
      router.refresh()
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full border rounded-lg px-4 py-2.5 text-sm outline-none transition-all bg-white'
  const labelClass = 'block text-sm font-medium mb-1'
  const borderStyle = { borderColor: '#ede4cc' }
  const colorStyle = { color: '#1c3023' }

  return (
    <div className="max-w-3xl mx-auto">
      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
          {error}
        </div>
      )}

      <div className="flex flex-col gap-6">
        {/* Title */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: '#888' }}>
            Post Details
          </h2>

          <div className="flex flex-col gap-4">
            <div>
              <label className={labelClass} style={colorStyle}>
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={inputClass}
                style={borderStyle}
                placeholder="e.g. How to Get Pre-Approved for a Mortgage"
              />
            </div>

            <div>
              <label className={labelClass} style={colorStyle}>
                Slug
              </label>
              <div className="flex items-center gap-2">
                <span className="text-sm" style={{ color: '#888' }}>/blog/</span>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => {
                    setSlug(slugify(e.target.value))
                    setSlugManuallyEdited(true)
                  }}
                  className={`${inputClass} flex-1`}
                  style={borderStyle}
                  placeholder="auto-generated"
                />
              </div>
              <p className="text-xs mt-1" style={{ color: '#aaa' }}>
                Preview: /blog/{slug || 'your-slug'}
              </p>
            </div>

            <div>
              <label className={labelClass} style={colorStyle}>
                Meta Description (SEO)
              </label>
              <textarea
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                rows={3}
                className={inputClass}
                style={borderStyle}
                placeholder="Brief description for search engines (150-160 chars)"
                maxLength={160}
              />
              <p className="text-xs mt-1" style={{ color: '#aaa' }}>
                {metaDescription.length}/160 characters
              </p>
            </div>
          </div>
        </div>

        {/* Images + Content */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: '#888' }}>
            Content
          </h2>

          <div className="flex flex-col gap-5">
            {/* Side-by-side image uploaders */}
            <div className="grid grid-cols-2 gap-4">
              <ImageUploader
                label="Feature Image"
                value={featureImage}
                onChange={setFeatureImage}
              />
              <ImageUploader
                label="Mid-Section Image"
                value={midImage}
                onChange={setMidImage}
                optional
              />
            </div>

            {/* Single body editor */}
            <div>
              <label className={labelClass} style={colorStyle}>
                Post Content
              </label>
              <TiptapEditor
                value={bodyTop}
                onChange={setBodyTop}
                placeholder="Write your post content here..."
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: '#888' }}>
            Call to Action (optional)
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass} style={colorStyle}>
                CTA Button Text
              </label>
              <input
                type="text"
                value={ctaText}
                onChange={(e) => setCtaText(e.target.value)}
                className={inputClass}
                style={borderStyle}
                placeholder="Get Pre-Approved Today"
              />
            </div>
            <div>
              <label className={labelClass} style={colorStyle}>
                CTA URL
              </label>
              <input
                type="url"
                value={ctaUrl}
                onChange={(e) => setCtaUrl(e.target.value)}
                className={inputClass}
                style={borderStyle}
                placeholder="https://..."
              />
            </div>
          </div>
        </div>

        {/* Status + Save buttons */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            {/* Status toggle */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium" style={colorStyle}>Status:</span>
              <div
                className="flex rounded-lg overflow-hidden border text-sm font-medium"
                style={{ borderColor: '#ede4cc' }}
              >
                <button
                  type="button"
                  onClick={() => setStatus('draft')}
                  className="px-4 py-2 transition-colors"
                  style={{
                    backgroundColor: status === 'draft' ? '#1c3023' : '#fff',
                    color: status === 'draft' ? '#fff' : '#888',
                  }}
                >
                  Draft
                </button>
                <button
                  type="button"
                  onClick={() => setStatus('published')}
                  className="px-4 py-2 transition-colors"
                  style={{
                    backgroundColor: status === 'published' ? '#1c3023' : '#fff',
                    color: status === 'published' ? '#fff' : '#888',
                  }}
                >
                  Published
                </button>
              </div>
            </div>

            {/* Save buttons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleSave('draft')}
                disabled={loading}
                className="px-5 py-2.5 rounded-lg border text-sm font-semibold transition-colors hover:bg-gray-50 disabled:opacity-60"
                style={{ borderColor: '#ede4cc', color: '#1c3023' }}
              >
                {loading ? 'Saving...' : 'Save Draft'}
              </button>
              <button
                type="button"
                onClick={() => handleSave('published')}
                disabled={loading}
                className="px-5 py-2.5 rounded-lg text-white text-sm font-semibold transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ backgroundColor: '#1c3023' }}
              >
                {loading ? 'Saving...' : 'Publish'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
