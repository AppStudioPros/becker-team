'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Bold, Italic, Heading2, Heading3, List, Link2 } from 'lucide-react'
import { useEffect, useCallback } from 'react'

interface TiptapEditorProps {
  value: string
  onChange: (html: string) => void
  placeholder?: string
}

export default function TiptapEditor({ value, onChange, placeholder }: TiptapEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value || '',
    onUpdate({ editor }) {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm max-w-none min-h-[160px] px-4 py-3 outline-none',
      },
    },
  })

  // Sync external value changes (e.g. when editing an existing post)
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || '', { emitUpdate: false })
    }
    // Only run when value changes from outside (not from editor itself)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  const setLink = useCallback(() => {
    if (!editor) return
    const url = window.prompt('Enter URL:')
    if (!url) return
    editor.chain().focus().setLink({ href: url }).run()
  }, [editor])

  if (!editor) return null

  const btnClass = (active: boolean) =>
    `p-1.5 rounded transition-colors ${
      active
        ? 'bg-[#1c3023] text-white'
        : 'text-gray-600 hover:bg-gray-100'
    }`

  return (
    <div
      className="border rounded-lg overflow-hidden"
      style={{ borderColor: '#ede4cc' }}
    >
      {/* Toolbar */}
      <div
        className="flex items-center gap-1 px-3 py-2 border-b"
        style={{ borderColor: '#ede4cc', backgroundColor: '#fafaf8' }}
      >
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={btnClass(editor.isActive('bold'))}
          title="Bold"
        >
          <Bold size={15} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={btnClass(editor.isActive('italic'))}
          title="Italic"
        >
          <Italic size={15} />
        </button>
        <div className="w-px h-5 mx-1" style={{ backgroundColor: '#ede4cc' }} />
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={btnClass(editor.isActive('heading', { level: 2 }))}
          title="Heading 2"
        >
          <Heading2 size={15} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={btnClass(editor.isActive('heading', { level: 3 }))}
          title="Heading 3"
        >
          <Heading3 size={15} />
        </button>
        <div className="w-px h-5 mx-1" style={{ backgroundColor: '#ede4cc' }} />
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={btnClass(editor.isActive('bulletList'))}
          title="Bullet list"
        >
          <List size={15} />
        </button>
        <button
          type="button"
          onClick={setLink}
          className={btnClass(editor.isActive('link'))}
          title="Add link"
        >
          <Link2 size={15} />
        </button>
      </div>

      {/* Editor area */}
      <div style={{ minHeight: '160px', backgroundColor: '#fff' }}>
        {!editor.getText() && placeholder && (
          <p
            className="absolute pointer-events-none px-4 py-3 text-sm"
            style={{ color: '#aaa' }}
          >
            {placeholder}
          </p>
        )}
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}
