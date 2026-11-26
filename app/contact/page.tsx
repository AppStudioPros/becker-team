import type { Metadata } from 'next'
import { jamieLicensedStates } from '@/lib/jamieLicenses'
import Image from 'next/image'
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
    sub: 'Available Mon–Fri, 9am–6pm MST',
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
  '@type': 'MortgageLender',
  name: 'The Becker Team',
  description: 'Jamie Becker (Individual NMLS #794730) is a Colorado mortgage broker with 21+ years of experience in VA, FHA, jumbo, self-employed and specialty loan programs.',
  url: 'https://www.thebeckerteam.com',
  telephone: '+17204923335',
  email: 'Jamie@thebeckerteam.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '201 Columbine Street, Suite 300',
    addressLocality: 'Denver',
    addressRegion: 'CO',
    postalCode: '80206',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 39.71981,
    longitude: -104.96007,
  },
  openingHours: 'Mo-Fr 09:00-18:00',
  priceRange: '$$',
  areaServed: jamieLicensedStates,
  founder: {
    '@type': 'Person',
    name: 'Jamie Becker',
    identifier: 'NMLS #794730',
  },
  sameAs: ['https://www.thebeckerteam.com'],
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
        <Image
          src="/images/contact-hero.jpg"
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
          className="-z-20 object-cover"
          style={{ objectPosition: 'center 55%' }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ backgroundImage: 'linear-gradient(rgba(20,35,25,0.62), rgba(20,35,25,0.62))' }}
        />
        <h1
          data-reveal="fade"
          className="text-4xl md:text-6xl lg:text-7xl font-bold"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Get In Touch
        </h1>
        <p data-reveal="fade" data-delay="150" className="mt-4 text-white/80 max-w-xl mx-auto text-lg">
          Ready to start? Have a question? Jamie Becker is here to help.
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
              Whether you have a specific loan in mind or just want to talk through your situation,
              Jamie is ready to connect. Reach out any time.
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
                className="inline-block text-center uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded btn-hover"
                style={{ backgroundColor: '#B98942', color: '#fff', border: '2px solid #B98942' }}
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
            Visit our office in Denver, Colorado — 201 Columbine Street, Suite 300
          </p>
          <ContactMap />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Parking', desc: 'Free parking available in the building lot.' },
              { title: 'Public Transit', desc: 'Accessible via RTD bus routes.' },
              { title: 'Hours', desc: 'Monday – Friday: 9:00 AM – 6:00 PM MST' },
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
        <Image
          src="/images/cta-mountain.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ backgroundImage: 'linear-gradient(rgba(20,35,25,0.55), rgba(20,35,25,0.55))' }}
        />
        <h2
          data-reveal="fade"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Ready to Get Started?
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-white/80 leading-relaxed">
          Whether you&apos;re buying, refinancing, or just exploring your options, The Becker Team is here to help make your home loan journey smooth and successful.
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
