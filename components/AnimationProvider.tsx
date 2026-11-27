'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function AnimationProvider() {
  const pathname = usePathname()

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const elements = [...document.querySelectorAll<HTMLElement>('[data-reveal]')]
    const viewportBottom = window.innerHeight
    const belowFold = elements.filter(element => element.getBoundingClientRect().top >= viewportBottom)
    const timers = new Set<ReturnType<typeof setTimeout>>()
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const element = entry.target as HTMLElement
        observer.unobserve(element)

        const timer = setTimeout(() => {
          timers.delete(timer)
          element.classList.remove('reveal-pending')
          element.classList.add('in-view')
        }, Number(element.dataset.delay ?? 0))
        timers.add(timer)
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' })

    belowFold.forEach(element => {
      element.classList.add('reveal-pending')
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
      timers.forEach(timer => clearTimeout(timer))
      elements.forEach(element => element.classList.remove('reveal-pending', 'in-view'))
    }
  }, [pathname])

  return null
}
