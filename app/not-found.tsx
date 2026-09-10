import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Page Not Found | The Becker Team',
  description: 'The page you are looking for could not be found. Return to The Becker Team homepage or contact Jamie Becker directly.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 py-20"
      style={{
        backgroundImage: 'linear-gradient(rgba(20,35,25,0.82), rgba(20,35,25,0.82)), url("/images/squarespace/jamie-fishing.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center text-white max-w-lg mx-auto" data-reveal="fade">
        <p
          className="text-xs font-bold uppercase tracking-widest mb-4"
          style={{ color: '#C4A35A' }}
        >
          404 — Page Not Found
        </p>
        <h1
          className="text-4xl md:text-6xl font-bold mb-6"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Lost on the Trail
        </h1>
        <p className="text-lg mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded"
            style={{ backgroundColor: '#1F2E2A', color: '#fff', border: '2px solid rgba(255,255,255,0.2)' }}
          >
            <Home size={15} />
            Back to Home
          </Link>
          <Link
            href="/loan-programs"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded"
            style={{ backgroundColor: '#B98942', color: '#fff' }}
          >
            Loan Programs <ArrowRight size={15} />
          </Link>
        </div>
        <p className="mt-10 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
          Or call Jamie directly:{' '}
          <a href="tel:7204923335" className="underline" style={{ color: 'rgba(255,255,255,0.75)' }}>
            (720) 492-3335
          </a>
        </p>
      </div>
    </section>
  )
}
