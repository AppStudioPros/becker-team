import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, Building2, MapPin } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | The Becker Team | Colorado Mortgage Broker',
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
    sub: "I'll respond within 24 hours",
    href: 'mailto:Jamie@thebeckerteam.com',
  },
  {
    icon: Building2,
    label: 'Company',
    value: 'The Becker Team',
    sub: 'NMLS #794730',
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
  description: 'Colorado mortgage broker Jamie Becker — 21+ years experience, VA, FHA, Jumbo, Self-Employed, and specialty loan programs. NMLS #794730.',
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
  areaServed: ['Colorado', 'California', 'Texas'],
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
        className="relative py-16 md:py-28 px-6 text-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,35,25,0.62), rgba(20,35,25,0.62)), url("/images/contact-hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 55%',
          backgroundColor: '#1F2E2A',
        }}
      >
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

      {/* ── Contact Info + Quick Actions ── */}
      <section className="py-14 md:py-20 px-6" style={{ backgroundColor: '#1F2E2A' }}>
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
            <p className="text-white/50 mb-4 text-xs font-bold uppercase tracking-widest">Quick Actions</p>
            <div className="flex flex-col gap-3">
              <Link
                href="/mortgage-calculator"
                className="block w-full text-center uppercase tracking-widest text-sm font-semibold py-4 px-6 rounded btn-hover"
                style={{ backgroundColor: 'transparent', color: '#F5EFE6', border: '2px solid #F5EFE6' }}
              >
                Calculate Payment
              </Link>
              <a
                href="https://2179191.my1003app.com/794730/register"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center uppercase tracking-widest text-sm font-semibold py-4 px-6 rounded btn-hover"
                style={{ backgroundColor: '#B98942', color: '#fff', border: '2px solid #B98942' }}
              >
                Get Pre-Approved
              </a>
              <Link
                href="/mortgage-interest-rates"
                className="block w-full text-center uppercase tracking-widest text-sm font-semibold py-4 px-6 rounded btn-hover"
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
                    <a href={card.href} className="text-sm font-semibold block mb-1" style={{ color: '#1F2E2A' }}>
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold mb-1" style={{ color: '#1F2E2A' }}>{card.value}</p>
                  )}
                  <p className="text-xs" style={{ color: '#4a5e53' }}>{card.sub}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Send Me a Message ── */}
      <section className="py-14 md:py-20 px-6" style={{ backgroundColor: '#F5EFE6' }}>
        <div className="max-w-3xl mx-auto">
          <h2
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
          <div data-reveal="fade" data-delay="120" className="w-full rounded overflow-hidden mb-10" style={{ height: '400px', border: '2px solid #ede4cc' }}>
            <iframe
              title="Office Location — Denver, CO"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.8831940116006!2d-104.96006832402334!3d39.71980767156022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e95cc4494a7%3A0xa8d5ddd4b9d21e58!2s201%20Columbine%20St%2C%20Denver%2C%20CO%2080206%2C%20USA!5e0!3m2!1sen!2sgr!4v1788866893265!5m2!1sen!2sgr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="eager"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
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
        className="relative py-24 md:py-36 px-6 text-white text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,35,25,0.55), rgba(20,35,25,0.55)), url("/images/cta-mountain.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#1F2E2A',
        }}
      >
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
