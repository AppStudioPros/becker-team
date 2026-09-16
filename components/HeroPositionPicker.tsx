'use client'

const positions = [
  'top left',    'top center',    'top right',
  'center left', 'center center', 'center right',
  'bottom left', 'bottom center', 'bottom right',
]

const labels: Record<string, string> = {
  'top left': 'Top Left',       'top center': 'Top',          'top right': 'Top Right',
  'center left': 'Left',        'center center': 'Center',    'center right': 'Right',
  'bottom left': 'Bottom Left', 'bottom center': 'Bottom',    'bottom right': 'Bottom Right',
}

interface Props {
  value: string
  onChange: (val: string) => void
  previewUrl?: string
}

export default function HeroPositionPicker({ value, onChange, previewUrl }: Props) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5" style={{ color: '#1c3023' }}>
        Hero Image Position
      </label>
      <div className="flex gap-4 items-start">
        {/* 3x3 grid */}
        <div
          className="grid gap-1.5 shrink-0"
          style={{ gridTemplateColumns: 'repeat(3, 28px)' }}
        >
          {positions.map((pos) => (
            <button
              key={pos}
              type="button"
              title={labels[pos]}
              onClick={() => onChange(pos)}
              className="w-7 h-7 rounded transition-all"
              style={{
                backgroundColor: value === pos ? '#1c3023' : '#ede4cc',
                border: value === pos ? '2px solid #1c3023' : '2px solid transparent',
                transform: value === pos ? 'scale(1.15)' : 'scale(1)',
              }}
            />
          ))}
        </div>

        {/* Live preview */}
        {previewUrl && (
          <div
            className="flex-1 rounded-lg overflow-hidden"
            style={{ height: '90px', border: '1px solid #ede4cc' }}
          >
            <div
              className="w-full h-full bg-cover"
              style={{
                backgroundImage: `url(${previewUrl})`,
                backgroundPosition: value,
              }}
            />
          </div>
        )}

        <span className="text-xs self-center shrink-0" style={{ color: '#888' }}>
          {labels[value] || 'Center'}
        </span>
      </div>
    </div>
  )
}
