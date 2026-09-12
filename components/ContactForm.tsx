'use client'

import { useState } from 'react'

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

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <p className="text-xl font-semibold mb-2" style={{ color: '#1F2E2A' }}>
          Message sent!
        </p>
        <p className="text-gray-600">
          Thank you for reaching out. Jamie will be in touch with you shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* First + Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            className="block text-xs font-semibold uppercase tracking-widest mb-1"
            style={{ color: '#1F2E2A' }}
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full border border-[#ede4cc] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#1F2E2A]"
            style={{ color: '#1F2E2A' }}
          />
        </div>
        <div>
          <label
            className="block text-xs font-semibold uppercase tracking-widest mb-1"
            style={{ color: '#1F2E2A' }}
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full border border-[#ede4cc] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#1F2E2A]"
            style={{ color: '#1F2E2A' }}
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            className="block text-xs font-semibold uppercase tracking-widest mb-1"
            style={{ color: '#1F2E2A' }}
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-[#ede4cc] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#1F2E2A]"
            style={{ color: '#1F2E2A' }}
          />
        </div>
        <div>
          <label
            className="block text-xs font-semibold uppercase tracking-widest mb-1"
            style={{ color: '#1F2E2A' }}
          >
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-[#ede4cc] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#1F2E2A]"
            style={{ color: '#1F2E2A' }}
          />
        </div>
      </div>

      {/* Interest Dropdown */}
      <div>
        <label
          className="block text-xs font-semibold uppercase tracking-widest mb-1"
          style={{ color: '#1F2E2A' }}
        >
          I&apos;m Interested In
        </label>
        <select
          name="interest"
          value={formData.interest}
          onChange={handleChange}
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
          className="block text-xs font-semibold uppercase tracking-widest mb-1"
          style={{ color: '#1F2E2A' }}
        >
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full border border-[#ede4cc] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#1F2E2A] resize-none"
          style={{ color: '#1F2E2A' }}
        />
      </div>

      <button
        type="submit" disabled={loading}
        className="w-full uppercase tracking-widest text-sm font-semibold py-4 rounded transition-colors hover:opacity-90"
        style={{ backgroundColor: '#1F2E2A', color: '#fff' }}
      >
        Send Message
      </button>
    </form>
  )
}
