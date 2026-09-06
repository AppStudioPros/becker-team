import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, Building2, MapPin } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | The Becker Team | Colorado Mortgage Broker',
  description:
    'Contact Jamie Becker to discuss your mortgage needs. Call (470) 660-5693 or email Jamie@thebeckerteam.com. NMLS #794730.',
}

const contactCards = [
  {
    icon: Phone,
    label: 'Call Me',
    value: '(470) 660-5693',
    href: 'tel:4706605693',
  },
  {
    icon: Mail,
    label: 'Email Me',
    value: 'Jamie@thebeckerteam.com',
    href: 'mailto:Jamie@thebeckerteam.com',
  },
  {
    icon: Building2,
    label: 'Company',
    value: 'Xpert Home Lending\nNMLS 2179191',
    href: null,
  },
  {
    icon: MapPin,
    label: 'Office Location',
    value: '201 Columbine Street, Suite 300\nDenver, CO 80206',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{ backgroundColor: '#1c3023' }} className="py-20 px-6 text-center text-white">
        <h1
          className="text-5xl md:text-6xl font-bold"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Get In Touch
        </h1>
        <p className="mt-4 text-white/80 max-w-xl mx-auto text-lg">
          Ready to start? Have a question? Jamie Becker is here to help.
        </p>
      </section>

      {/* ── 2-Column Info Section ── */}
      <section className="py-16 px-6" style={{ backgroundColor: '#1a2e1a' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left — Contact Info + Quick Actions */}
          <div>
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Contact Information
            </h2>
            <p className="text-gray-300 mb-10 leading-relaxed">
              Whether you have a specific loan in mind or just want to talk through your situation,
              Jamie is ready to connect. Reach out any time.
            </p>

            <p
              className="text-white mb-4 text-xs font-bold uppercase tracking-widest"
            >
              Quick Actions
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/mortgage-calculator"
                className="block w-full text-center uppercase tracking-widest text-sm font-semibold py-4 px-6 rounded transition-colors hover:opacity-90"
                style={{ backgroundColor: '#2a3f2e', color: '#f5ecd8' }}
              >
                Calculate Payment
              </Link>
              <a
                href="https://2179191.my1003app.com/794730/register"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center uppercase tracking-widest text-sm font-semibold py-4 px-6 rounded transition-colors hover:opacity-90"
                style={{ backgroundColor: '#2a3f2e', color: '#f5ecd8' }}
              >
                Get Pre-Approved
              </a>
              <Link
                href="/mortgage-interest-rates"
                className="block w-full text-center uppercase tracking-widest text-sm font-semibold py-4 px-6 rounded transition-colors hover:opacity-90"
                style={{ backgroundColor: '#2a3f2e', color: '#f5ecd8' }}
              >
                Check Rates
              </Link>
            </div>
          </div>

          {/* Right — 4 Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactCards.map((card) => {
              const Icon = card.icon
              return (
                <div
                  key={card.label}
                  className="rounded p-6"
                  style={{ backgroundColor: '#f5ecd8' }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={18} style={{ color: '#1c3023' }} />
                    <p
                      className="text-xs font-bold uppercase tracking-widest"
                      style={{ color: '#1c3023' }}
                    >
                      {card.label}
                    </p>
                  </div>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="text-sm font-medium underline"
                      style={{ color: '#c8960c' }}
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p
                      className="text-sm"
                      style={{ color: '#4a5e53', whiteSpace: 'pre-line' }}
                    >
                      {card.value}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Send Me a Message ── */}
      <section className="py-16 px-6" style={{ backgroundColor: '#f5ecd8' }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-10"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1c3023' }}
          >
            Send Me a Message
          </h2>
          <ContactForm />
        </div>
      </section>

      {/* ── Find Us ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-10"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1c3023' }}
          >
            Find Us
          </h2>

          {/* Map placeholder */}
          <div
            className="w-full rounded overflow-hidden mb-10"
            style={{ height: '360px', border: '1px solid #ddd' }}
          >
            <iframe
              title="Office Location — 201 Columbine Street, Denver CO"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.5!2d-104.9730!3d39.7202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7f3a1234!2s201+Columbine+St%2C+Denver%2C+CO+80206!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* 3 Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Parking',
                desc: 'Street parking is available on Columbine Street. The building also has a small lot accessible from the alley.',
              },
              {
                title: 'Public Transit',
                desc: 'Accessible via RTD bus routes. Cherry Creek Shopping Center stop is a short walk away.',
              },
              {
                title: 'Hours',
                desc: 'Monday – Friday: 9:00 AM – 6:00 PM MST',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded border p-6"
                style={{ borderColor: '#ede4cc', backgroundColor: '#fdfaf5' }}
              >
                <h3
                  className="text-sm font-bold uppercase tracking-widest mb-2"
                  style={{ color: '#1c3023' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4a5e53' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
