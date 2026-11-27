import { beckerTeam } from '@/lib/siteIdentity'
import type { Metadata } from 'next'
import { jamieLicensedStates } from '@/lib/jamieLicenses'
import SectionBackdrop from '@/components/SectionBackdrop'
import Link from 'next/link'
import { Phone, Mail, Building2, MapPin } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import ContactMap from '@/components/ContactMap'

export const metadata: Metadata = {
  title: 'Contact Jamie Becker, Colorado Mortgage Broker',
  description:
    'Contact Jamie Becker to discuss your mortgage needs. Call (720) 492-3335 or email Jamie@thebeckerteam.com. NMLS #794730.',
}

const contactCards = [
  {
    icon: Phone,
    label: 'Call Me',
    value: '(720) 492-3335',
    sub: 'Monday to Friday, 9 a.m. to 6 p.m. Mountain time',
    href: 'tel:7204923335',
  },
  {
    icon: Mail,
    label: 'Email Me',
    value: 'Jamie@thebeckerteam.com',
    href: 'mailto:Jamie@thebeckerteam.com',
  },
  {
    icon: Building2,
    label: 'Licensing',
    value: 'Jamie Becker · Individual NMLS #794730',
    sub: 'Xpert Home Lending, Inc. · Company NMLS #2179191',
    href: null,
  },
  {
    icon: MapPin,
    label: 'Office Location',
    value: '201 Columbine Street, Suite 300',
    sub: 'Denver, CO 80206',
    href: 'https://www.google.com/maps?q=201+Columbine+Street+Suite+300+Denver+CO+80206',
  },
]

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  ...beckerTeam,
  description: 'Jamie Becker (Individual NMLS #794730) is a Colorado mortgage broker with 21+ years of experience in VA, FHA, jumbo, self-employed and specialty loan programs.',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 39.71981,
    longitude: -104.96007,
  },
  openingHours: 'Mo-Fr 09:00-18:00',
  priceRange: '$$',
  areaServed: jamieLicensedStates,
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      {/* ── Hero ── */}
      <section
        className="relative isolate py-16 md:py-28 px-6 text-center text-white"
        style={{ backgroundColor: '#1F2E2A' }}
      >
        <SectionBackdrop src="/images/contact-hero.jpg" shade={0.62} position="center 55%" hero />
        <h1
          data-reveal="fade"
          className="text-4xl md:text-6xl lg:text-7xl font-bold"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Get In Touch
        </h1>
        <p data-reveal="fade" data-delay="150" className="mt-4 text-white/80 max-w-xl mx-auto text-lg">
          Talk with Jamie Becker about buying a home, refinancing, or comparing loan options.
        </p>
      </section>

      {/* ── Contact Information ── */}
      <section id="contact-information" className="scroll-mt-20 py-14 md:py-20 px-6" style={{ backgroundColor: '#1F2E2A' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <h2
              data-reveal="fade"
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Contact Information
            </h2>
            <p data-reveal="fade" data-delay="100" className="text-white/70 mb-10 leading-relaxed">
              Call, email, or send a message below. If you’re still comparing options, start with the
              calculator or check example rates.
            </p>
            <div className="grid w-fit max-w-full gap-3">
              <Link
                href="/mortgage-calculator"
                className="inline-block text-center uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded btn-hover"
                style={{ backgroundColor: 'transparent', color: '#F5EFE6', border: '2px solid #F5EFE6' }}
              >
                Calculate Payment
              </Link>
              <a
                href="https://2179191.my1003app.com/794730/register"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-cta inline-block text-center uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded btn-hover"
                style={{ backgroundColor: '#B98942', border: '2px solid #B98942' }}
              >
                Get Pre-Approved
              </a>
              <Link
                href="/mortgage-interest-rates"
                className="inline-block text-center uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded btn-hover"
                style={{ backgroundColor: 'transparent', color: '#F5EFE6', border: '2px solid #F5EFE6' }}
              >
                Check Rates
              </Link>
            </div>
          </div>

          {/* Right — 4 Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactCards.map((card, i) => {
              const Icon = card.icon
              return (
                <div key={card.label} data-reveal data-delay={i * 80} className="rounded p-6 card-hover" style={{ backgroundColor: "#F5EFE6" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <Icon size={16} style={{ color: '#B98942' }} />
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#1F2E2A' }}>
                      {card.label}
                    </p>
                  </div>
                  {card.href ? (
                    <a href={card.href} className="text-sm font-semibold block mb-1 [overflow-wrap:anywhere]" style={{ color: '#1F2E2A' }}>
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold mb-1" style={{ color: '#1F2E2A' }}>{card.value}</p>
                  )}
                  {card.sub && <p className="text-xs" style={{ color: '#4a5e53' }}>{card.sub}</p>}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Send Me a Message ── */}
      <section id="contact-form" aria-labelledby="contact-form-title" tabIndex={-1} className="scroll-mt-32 py-14 md:py-20 px-6" style={{ backgroundColor: '#F5EFE6' }}>
        <div className="max-w-3xl mx-auto">
          <h2
            id="contact-form-title"
            data-reveal="fade"
            className="text-3xl md:text-5xl font-bold text-center mb-10"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            Send Me a Message
          </h2>
          <ContactForm />
        </div>
      </section>

      {/* ── Find Us ── */}
      <section className="py-14 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2
            data-reveal="fade"
            className="text-3xl md:text-5xl font-bold text-center mb-10"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1F2E2A' }}
          >
            Find Us
          </h2>
          <p data-reveal="fade" data-delay="80" className="text-center text-gray-500 text-sm mb-8">
            Our Denver office is at 201 Columbine Street, Suite 300.
          </p>
          <ContactMap />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Parking', desc: 'Call us for parking information before your visit.' },
              { title: 'Public Transit', desc: 'Check RTD for current routes and service times.' },
              { title: 'Hours', desc: 'Monday to Friday, 9 a.m. to 6 p.m. Mountain time.' },
            ].map((item, i) => (
              <div
                key={item.title}
                data-reveal
                data-delay={i * 80}
                className="rounded p-6 card-hover"
                style={{ border: '2px solid #1F2E2A' }}
              >
                <h3
                  className="text-sm font-bold uppercase tracking-widest mb-2"
                  style={{ color: '#1F2E2A' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4a5e53' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mountain CTA ── */}
      <section
        className="relative isolate py-24 md:py-36 px-6 text-white text-center"
        style={{ backgroundColor: '#1F2E2A' }}
      >
        <SectionBackdrop src="/images/cta-mountain.jpg" shade={0.55} />
        <h2
          data-reveal="fade"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Ready to Get Started?
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Start the online pre-approval application or use the calculator to estimate a payment.
        </p>
        <div data-reveal="fade" data-delay="280" className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://2179191.my1003app.com/794730/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
            style={{ backgroundColor: '#1F2E2A', color: '#F5EFE6', border: '2px solid #F5EFE6' }}
          >
            Get Pre-Approved
          </a>
          <Link
            href="/mortgage-calculator"
            className="inline-block uppercase tracking-widest text-sm font-semibold px-14 py-5 rounded btn-hover"
            style={{ backgroundColor: 'transparent', color: '#F5EFE6', border: '2px solid #F5EFE6' }}
          >
            Calculate Payment
          </Link>
        </div>
      </section>
    </>
  )
}
