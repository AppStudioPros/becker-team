'use client'

import { useState, useRef } from 'react'
import { Upload, X, ImageIcon } from 'lucide-react'

interface ImageUploaderProps {
  label: string
  value: string
  onChange: (url: string) => void
  optional?: boolean
}

export default function ImageUploader({ label, value, onChange, optional }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  async function handleFile(file: File) {
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file.')
      return
    }
    if (file.size > 10 * 1024 * 1024) {
      setError('File must be under 10MB.')
      return
    }

    setError('')
    setUploading(true)

    const formData = new FormData()
    formData.append('file', file)

    const res = await fetch('/api/admin/upload', { method: 'POST', body: formData })
    const data = await res.json()

    if (!res.ok) {
      setError(data.error || 'Upload failed. Try again.')
      setUploading(false)
      return
    }

    onChange(data.url)
    setUploading(false)
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }

  function handleRemove() {
    onChange('')
    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <div>
      <label className="block text-sm font-medium mb-1.5" style={{ color: '#1c3023' }}>
        {label} {optional && <span className="text-xs font-normal" style={{ color: '#aaa' }}>(optional)</span>}
      </label>

      {value ? (
        <div className="relative rounded-lg overflow-hidden border" style={{ borderColor: '#ede4cc' }}>
          <img src={value} alt="" className="w-full h-40 object-cover" />
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-red-50 transition-colors"
          >
            <X size={14} style={{ color: '#e53e3e' }} />
          </button>
        </div>
      ) : (
        <div
          className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors hover:bg-gray-50"
          style={{ borderColor: '#ede4cc' }}
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) handleFile(file)
            }}
          />
          <div className="flex flex-col items-center gap-2">
            {uploading ? (
              <div className="text-sm" style={{ color: '#888' }}>Uploading...</div>
            ) : (
              <>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f5ecd8' }}>
                  {value ? <ImageIcon size={18} style={{ color: '#1c3023' }} /> : <Upload size={18} style={{ color: '#1c3023' }} />}
                </div>
                <div className="text-sm font-medium" style={{ color: '#1c3023' }}>Click to upload</div>
                <div className="text-xs" style={{ color: '#aaa' }}>or drag and drop — PNG, JPG, WEBP up to 10MB</div>
              </>
            )}
          </div>
        </div>
      )}

      {error && <p className="text-xs mt-1 text-red-500">{error}</p>}
    </div>
  )
}
