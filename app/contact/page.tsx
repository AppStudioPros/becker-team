import type { Metadata } from 'next'
import { Phone, Mail, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact | The Becker Team | Colorado Mortgage Broker',
  description:
    'Contact Jamie Becker to discuss your mortgage needs. Call (720) 492-3335 or email Jamie@thebeckerteam.com. NMLS #794730.',
}

export default function ContactPage() {
  return (
    <>
      {/* ── Header ── */}
      <section style={{ backgroundColor: '#1c3023' }} className="py-20 px-6 text-center text-white">
        <h1
          className="text-5xl md:text-6xl font-bold"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Contact
        </h1>
      </section>

      {/* ── Content ── */}
      <section style={{ backgroundColor: '#f5ecd8' }} className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left — contact info */}
          <div>
            <h2
              className="text-2xl font-bold mb-8"
              style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1c3023' }}
            >
              Let&apos;s Talk
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Ready to explore your mortgage options? Whether you have a specific loan in mind or just
              want to talk through your situation, Jamie Becker is ready to help.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <Phone size={20} className="mt-0.5 shrink-0" style={{ color: '#1c3023' }} />
                <div>
                  <p className="text-sm font-semibold mb-0.5" style={{ color: '#1c3023' }}>Phone</p>
                  <a href="tel:7204923335" className="text-sm underline" style={{ color: '#c8960c' }}>
                    (720) 492-3335
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={20} className="mt-0.5 shrink-0" style={{ color: '#1c3023' }} />
                <div>
                  <p className="text-sm font-semibold mb-0.5" style={{ color: '#1c3023' }}>Email</p>
                  <a href="mailto:Jamie@thebeckerteam.com" className="text-sm underline" style={{ color: '#c8960c' }}>
                    Jamie@thebeckerteam.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={20} className="mt-0.5 shrink-0" style={{ color: '#1c3023' }} />
                <div>
                  <p className="text-sm font-semibold mb-0.5" style={{ color: '#1c3023' }}>Corporate Office</p>
                  <p className="text-sm text-gray-600">
                    100 Highpoint Park Way, Suite 202<br />
                    Braselton, GA 30517
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs text-gray-500">NMLS #794730 | Xpert Home Lending, NMLS 2179191</p>
            </div>
          </div>

          {/* Right — apply CTA */}
          <div
            className="rounded p-10 flex flex-col items-center justify-center text-center"
            style={{ backgroundColor: '#1c3023' }}
          >
            <h3
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Ready to Apply?
            </h3>
            <p className="text-white/80 text-sm mb-8 leading-relaxed">
              Start your application online and get pre-approved in minutes. We&apos;ll reach out to
              discuss your options and next steps.
            </p>
            <a
              href="https://2179191.my1003app.com/794730/register"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white uppercase tracking-widest text-sm font-semibold px-10 py-4 hover:bg-gray-100 transition-colors"
              style={{ color: '#1c3023' }}
            >
              Get Pre-Approved
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
