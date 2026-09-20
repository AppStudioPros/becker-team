'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Underline from '@tiptap/extension-underline'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

interface GivingBackData {
  id: number
  heading: string
  subheading: string
  body_html: string
  button_text: string
  button_url: string
  youtube_url: string
  updated_at: string
}

export default function GivingBackEditor() {
  const router = useRouter()
  const [data, setData] = useState<GivingBackData | null>(null)
  const [heading, setHeading] = useState('')
  const [subheading, setSubheading] = useState('')
  const [buttonText, setButtonText] = useState('')
  const [buttonUrl, setButtonUrl] = useState('')
  const [youtubeUrl, setYoutubeUrl] = useState('')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({ openOnClick: false }),
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose prose-sm max-w-none focus:outline-none min-h-[160px] p-4',
      },
    },
  })

  useEffect(() => {
    async function load() {
      const { data: row, error } = await supabase
        .from('giving_back_section')
        .select('*')
        .eq('id', 1)
        .single()
      if (error || !row) return
      setData(row)
      setHeading(row.heading)
      setSubheading(row.subheading)
      setButtonText(row.button_text)
      setButtonUrl(row.button_url)
      setYoutubeUrl(row.youtube_url)
      if (editor) editor.commands.setContent(row.body_html)
    }
    load()
  }, [editor])

  async function handleSave() {
    setSaving(true)
    setError('')
    setSaved(false)
    const body_html = editor?.getHTML() ?? ''
    const { error } = await supabase
      .from('giving_back_section')
      .update({ heading, subheading, body_html, button_text: buttonText, button_url: buttonUrl, youtube_url: youtubeUrl, updated_at: new Date().toISOString() })
      .eq('id', 1)
    setSaving(false)
    if (error) { setError('Save failed: ' + error.message); return }
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const inputClass = "w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1c3023] bg-white"
  const labelClass = "block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5"

  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <button onClick={() => router.push('/admin/dashboard')} className="text-xs text-gray-400 hover:text-gray-600 mb-2 flex items-center gap-1">
            ← Back to Dashboard
          </button>
          <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: '"Playfair Display", serif' }}>
            Giving Back Section
          </h1>
          <p className="text-sm text-gray-400 mt-1">Updates the Giving Back section on the About page.</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors"
          style={{ backgroundColor: saving ? '#6b7280' : '#1c3023' }}
        >
          {saving ? 'Saving...' : saved ? '✓ Saved!' : 'Save Changes'}
        </button>
      </div>

      {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">{error}</div>}
      {saved && <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg">Changes saved and live on the site.</div>}

      <div className="flex flex-col gap-6">
        {/* Heading */}
        <div>
          <label className={labelClass}>Heading</label>
          <input type="text" value={heading} onChange={e => setHeading(e.target.value)} className={inputClass} placeholder="Giving Back" />
        </div>

        {/* Subheading */}
        <div>
          <label className={labelClass}>Subheading</label>
          <input type="text" value={subheading} onChange={e => setSubheading(e.target.value)} className={inputClass} placeholder="Keep Climbing Foundation — Board Member" />
        </div>

        {/* Body (rich text) */}
        <div>
          <label className={labelClass}>Body Text</label>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            {/* Toolbar */}
            <div className="flex items-center gap-1 px-3 py-2 bg-gray-50 border-b border-gray-200 flex-wrap">
              {[
                { label: 'B', title: 'Bold', action: () => editor?.chain().focus().toggleBold().run(), active: editor?.isActive('bold') },
                { label: 'I', title: 'Italic', action: () => editor?.chain().focus().toggleItalic().run(), active: editor?.isActive('italic') },
                { label: 'U', title: 'Underline', action: () => editor?.chain().focus().toggleUnderline().run(), active: editor?.isActive('underline') },
              ].map(btn => (
                <button key={btn.label} onMouseDown={e => { e.preventDefault(); btn.action() }} title={btn.title}
                  className={`w-7 h-7 text-xs font-bold rounded flex items-center justify-center transition-colors ${btn.active ? 'bg-[#1c3023] text-white' : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'}`}>
                  {btn.label}
                </button>
              ))}
              <div className="w-px h-5 bg-gray-200 mx-1" />
              {[
                { label: 'H2', title: 'Heading 2', action: () => editor?.chain().focus().toggleHeading({ level: 2 }).run(), active: editor?.isActive('heading', { level: 2 }) },
                { label: 'H3', title: 'Heading 3', action: () => editor?.chain().focus().toggleHeading({ level: 3 }).run(), active: editor?.isActive('heading', { level: 3 }) },
                { label: '¶', title: 'Paragraph', action: () => editor?.chain().focus().setParagraph().run(), active: editor?.isActive('paragraph') },
              ].map(btn => (
                <button key={btn.label} onMouseDown={e => { e.preventDefault(); btn.action() }} title={btn.title}
                  className={`w-7 h-7 text-xs font-bold rounded flex items-center justify-center transition-colors ${btn.active ? 'bg-[#1c3023] text-white' : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'}`}>
                  {btn.label}
                </button>
              ))}
              <div className="w-px h-5 bg-gray-200 mx-1" />
              <button onMouseDown={e => { e.preventDefault(); editor?.chain().focus().toggleBulletList().run() }} title="Bullet list"
                className={`w-7 h-7 text-xs rounded flex items-center justify-center transition-colors ${editor?.isActive('bulletList') ? 'bg-[#1c3023] text-white' : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'}`}>≡</button>
            </div>
            <EditorContent editor={editor} />
          </div>
          <p className="text-xs text-gray-400 mt-1">Supports bold, italic, underline, headings, and bullet lists.</p>
        </div>

        {/* Button */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Button Text</label>
            <input type="text" value={buttonText} onChange={e => setButtonText(e.target.value)} className={inputClass} placeholder="Visit Keep Climbing Foundation" />
          </div>
          <div>
            <label className={labelClass}>Button URL</label>
            <input type="url" value={buttonUrl} onChange={e => setButtonUrl(e.target.value)} className={inputClass} placeholder="https://..." />
          </div>
        </div>

        {/* YouTube */}
        <div>
          <label className={labelClass}>YouTube Embed URL</label>
          <input type="url" value={youtubeUrl} onChange={e => setYoutubeUrl(e.target.value)} className={inputClass} placeholder="https://www.youtube.com/embed/VIDEO_ID" />
          <p className="text-xs text-gray-400 mt-1">Use the embed URL format: https://www.youtube.com/embed/VIDEO_ID</p>
          {youtubeUrl && (
            <div className="mt-3 aspect-video w-full max-w-md rounded overflow-hidden bg-gray-100">
              <iframe src={youtubeUrl} width="100%" height="100%" allowFullScreen className="w-full h-full" />
            </div>
          )}
        </div>

        {data && (
          <p className="text-xs text-gray-400">Last updated: {new Date(data.updated_at).toLocaleString()}</p>
        )}
      </div>
    </div>
  )
}
