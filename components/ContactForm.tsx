'use client'

import { useEffect, useRef, useState } from 'react'
import { trackWebsiteLead } from '@/lib/leadAnalytics'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [failed, setFailed] = useState(false)
  const inFlight = useRef(false)
  const submissionKey = useRef<string | null>(null)

  useEffect(() => {
    if (window.location.hash === '#contact-form') {
      document.getElementById('contact-form')?.focus({ preventScroll: true })
    }
  }, [])

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    submissionKey.current = null
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (inFlight.current) return
    inFlight.current = true
    setLoading(true)
    setFailed(false)

    try {
      submissionKey.current ??= crypto.randomUUID()
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Idempotency-Key': submissionKey.current,
        },
        body: JSON.stringify(formData),
        signal: AbortSignal.timeout(15000),
      })
      if (response.ok && (await response.json())?.success === true) {
        setSubmitted(true)
        trackWebsiteLead('Contact form')
      } else {
        setFailed(true)
      }
    } catch {
      setFailed(true)
    } finally {
      inFlight.current = false
      setLoading(false)
    }
  }

  const form = (
    <form onSubmit={handleSubmit} aria-busy={loading} className="flex flex-col gap-5">
      {/* First + Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="contact-first-name"
            className="block text-xs font-semibold uppercase tracking-widest mb-1"
            style={{ color: '#1F2E2A' }}
          >
            First Name
          </label>
          <input
            id="contact-first-name"
            type="text"
            name="firstName"
            autoComplete="given-name"
            value={formData.firstName}
            onChange={handleChange}
            required
            disabled={loading}
            className="w-full border border-[#ede4cc] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#1F2E2A]"
            style={{ color: '#1F2E2A' }}
          />
        </div>
        <div>
          <label
            htmlFor="contact-last-name"
            className="block text-xs font-semibold uppercase tracking-widest mb-1"
            style={{ color: '#1F2E2A' }}
          >
            Last Name
          </label>
          <input
            id="contact-last-name"
            type="text"
            name="lastName"
            autoComplete="family-name"
            value={formData.lastName}
            onChange={handleChange}
            required
            disabled={loading}
            className="w-full border border-[#ede4cc] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#1F2E2A]"
            style={{ color: '#1F2E2A' }}
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs font-semibold uppercase tracking-widest mb-1"
            style={{ color: '#1F2E2A' }}
          >
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
            className="w-full border border-[#ede4cc] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#1F2E2A]"
            style={{ color: '#1F2E2A' }}
          />
        </div>
        <div>
          <label
            htmlFor="contact-phone"
            className="block text-xs font-semibold uppercase tracking-widest mb-1"
            style={{ color: '#1F2E2A' }}
          >
            Phone
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            disabled={loading}
            className="w-full border border-[#ede4cc] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#1F2E2A]"
            style={{ color: '#1F2E2A' }}
          />
        </div>
      </div>

      {/* Interest Dropdown */}
      <div>
        <label
          htmlFor="contact-interest"
          className="block text-xs font-semibold uppercase tracking-widest mb-1"
          style={{ color: '#1F2E2A' }}
        >
          I&apos;m Interested In
        </label>
        <select
          id="contact-interest"
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          disabled={loading}
          className="w-full border border-[#ede4cc] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#1F2E2A]"
          style={{ color: '#1F2E2A' }}
        >
          <option value="">Select an option</option>
          <option value="purchase">Purchase</option>
          <option value="refinance">Refinance</option>
          <option value="cash-out">Cash-Out Refinance</option>
          <option value="investment">Investment Property</option>
          <option value="pre-approval">Pre-Approval</option>
          <option value="general">General Question</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs font-semibold uppercase tracking-widest mb-1"
          style={{ color: '#1F2E2A' }}
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          disabled={loading}
          rows={5}
          className="w-full border border-[#ede4cc] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#1F2E2A] resize-none"
          style={{ color: '#1F2E2A' }}
        />
      </div>

      <button
        type="submit" aria-disabled={loading}
        className="w-full uppercase tracking-widest text-sm font-semibold py-4 rounded transition-colors hover:opacity-90"
        style={{ backgroundColor: '#1F2E2A', color: '#fff' }}
      >
        {loading ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )

  return (
    <>
      <div role="status" className={submitted ? 'text-center py-16' : undefined}>
        {submitted && (
          <>
            <p className="text-xl font-semibold mb-2" style={{ color: '#1F2E2A' }}>
              Message sent
            </p>
            <p className="text-gray-600">
              Thanks for reaching out to The Becker Team.
            </p>
          </>
        )}
      </div>
      {!submitted && form}
      <p role="alert" className={failed ? 'mt-4 text-sm text-[#1F2E2A]' : undefined}>
        {failed && (
          <>
            We couldn&apos;t confirm your message was sent. Try again, or call{' '}
            <a href="tel:7204923335" className="font-semibold underline">(720) 492-3335</a>.
          </>
        )}
      </p>
    </>
  )
}
