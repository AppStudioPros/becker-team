import ReactMarkdown from 'react-markdown'

export default function ChatReply({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={{
        p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
        strong: ({ children }) => <strong className="font-semibold" style={{ color: '#1c3023' }}>{children}</strong>,
        ul: ({ children }) => <ul className="mt-1 mb-2 space-y-1 pl-3">{children}</ul>,
        li: ({ children }) => <li className="flex gap-1.5"><span style={{ color: '#c8972b' }}>•</span><span>{children}</span></li>,
        a: ({ children, href }) => <a href={href} className="underline" style={{ color: '#1c3023' }}>{children}</a>,
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
