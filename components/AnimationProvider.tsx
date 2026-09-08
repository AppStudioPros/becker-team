'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function AnimationProvider() {
  const pathname = usePathname()

  useEffect(() => {
    // Small delay to let the new page's DOM fully paint
    const timer = setTimeout(() => {
      const els = Array.from(document.querySelectorAll('[data-reveal]'))
      if (!els.length) return

      // Reset any previously animated elements on this page
      els.forEach((el) => el.classList.remove('in-view'))

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            const el = entry.target as HTMLElement
            const delay = Number(el.dataset.delay ?? 0)
            setTimeout(() => el.classList.add('in-view'), delay)
            io.unobserve(el)
          })
        },
        { threshold: 0.08, rootMargin: '0px 0px -24px 0px' }
      )

      els.forEach((el) => io.observe(el))
      return () => io.disconnect()
    }, 50)

    return () => clearTimeout(timer)
  }, [pathname]) // Re-run on every route change

  return null
}
