'use client'

import { useId, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Loan Programs', href: '/loan-programs' },
  { label: 'Blog', href: '/blog' },
  { label: 'Giving Back', href: '/about#givingback' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const toggleRef = useRef<HTMLButtonElement>(null)

  return (
    <nav
      className="sticky top-0 z-50"
      aria-label="Main navigation"
      style={{ backgroundColor: '#1F2E2A' }}
      onKeyDown={event => {
        if (event.key === 'Escape' && open) {
          setOpen(false)
          toggleRef.current?.focus()
        }
      }}
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-28">
        {/* Logo — left aligned, contained within nav height */}
        <Link href="/" className="shrink-0 flex items-center h-full py-3">
          <Image
            src="/images/squarespace/becker-logo-all-white.png"
            alt="The Becker Team"
            width={100}
            height={80}
            priority
            className="object-contain h-[60px] md:h-[90px] w-auto max-w-[120px] md:max-w-none"
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
          className="hidden md:block bg-white text-[#1F2E2A] text-sm font-semibold px-8 py-3 rounded tracking-widest uppercase hover:bg-gray-100 transition-colors"
        >
          Apply
        </a>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          type="button"
          aria-controls={menuId}
          aria-expanded={open}
          className="-mr-1.5 inline-flex min-h-11 min-w-11 items-center justify-center text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id={menuId}
        className={`${open ? 'flex' : 'hidden'} max-h-[calc(100dvh-7rem)] flex-col gap-2 overflow-y-auto overscroll-contain border-t border-white/10 px-6 pb-8 md:hidden`}
        style={{ backgroundColor: '#1F2E2A' }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="shrink-0 border-b border-white/10 py-3 text-base tracking-wide text-white"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://2179191.my1003app.com/794730/register"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 shrink-0 rounded bg-white px-6 py-4 text-center text-sm font-semibold uppercase tracking-widest text-[#1F2E2A]"
        >
          Apply
        </a>
      </div>
    </nav>
  )
}
