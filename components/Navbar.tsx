'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Loan Programs', href: '/loan-programs' },
  { label: 'Giving Back', href: '/about#givingback' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50" style={{ backgroundColor: '#1c3023' }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/becker-logo-white.webp"
            alt="The Becker Team"
            width={64}
            height={64}
            className="object-contain"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-sm tracking-wide hover:opacity-75 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Apply button */}
        <a
          href="https://2179191.my1003app.com/794730/register"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-white text-[#1c3023] text-sm font-semibold px-8 py-3 rounded tracking-widest uppercase hover:bg-gray-100 transition-colors"
        >
          Apply
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-8 flex flex-col gap-6 border-t border-white/10"
          style={{ backgroundColor: '#1c3023' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-sm tracking-wide pt-2"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://2179191.my1003app.com/794730/register"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#1c3023] text-sm font-semibold px-6 py-3 text-center uppercase tracking-widest"
          >
            Apply
          </a>
        </div>
      )}
    </nav>
  )
}
