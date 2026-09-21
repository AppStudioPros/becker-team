import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'The Becker Team — Colorado Mortgage Broker'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          background: 'linear-gradient(135deg, #1c3023 0%, #0f1e14 50%, #0a1510 100%)',
          padding: '64px 72px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle geometric accent */}
        <div style={{
          position: 'absolute', top: -80, right: -80,
          width: 480, height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(185,137,66,0.12) 0%, rgba(185,137,66,0) 70%)',
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute', bottom: -40, left: -40,
          width: 320, height: 320,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(44,75,64,0.5) 0%, rgba(44,75,64,0) 70%)',
          display: 'flex',
        }} />

        {/* Gold accent line */}
        <div style={{
          position: 'absolute', top: 0, left: 72,
          width: 80, height: 4,
          background: '#B98942',
          display: 'flex',
        }} />

        {/* Tag */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 24,
        }}>
          <div style={{
            background: 'rgba(185,137,66,0.15)',
            border: '1px solid rgba(185,137,66,0.35)',
            borderRadius: 20,
            padding: '6px 16px',
            display: 'flex',
          }}>
            <span style={{ color: '#B98942', fontSize: 14, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Colorado Mortgage Broker
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: 32,
        }}>
          <span style={{
            fontSize: 72,
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            maxWidth: 800,
          }}>
            The Becker Team
          </span>
          <span style={{
            fontSize: 28,
            color: 'rgba(255,255,255,0.6)',
            marginTop: 12,
            letterSpacing: '0.02em',
          }}>
            Jamie Becker, NMLS #794730
          </span>
        </div>

        {/* Bottom row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 32,
          width: '100%',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ color: '#B98942', fontSize: 15, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              21+ Years Experience
            </span>
            <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14 }}>
              VA · FHA · Jumbo · Self-Employed · Asset Qualifier
            </span>
          </div>
          <div style={{
            marginLeft: 'auto',
            background: '#B98942',
            borderRadius: 10,
            padding: '12px 28px',
            display: 'flex',
          }}>
            <span style={{ color: '#1c3023', fontSize: 16, fontWeight: 700 }}>
              thebeckerteam.com
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
