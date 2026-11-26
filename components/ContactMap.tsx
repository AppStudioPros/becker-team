'use client'

import { useEffect, useRef, useState } from 'react'

export default function ContactMap() {
  const container = useRef<HTMLDivElement>(null)
  const [nearViewport, setNearViewport] = useState(false)

  useEffect(() => {
    if (!container.current) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNearViewport(true)
        observer.disconnect()
      }
    }, { rootMargin: '240px 0px' })

    observer.observe(container.current)
    return () => observer.disconnect()
  }, [])

  const map = (
    <iframe
      title="Office Location — Denver, CO"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.8831940116006!2d-104.96006832402334!3d39.71980767156022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e95cc4494a7%3A0xa8d5ddd4b9d21e58!2s201%20Columbine%20St%2C%20Denver%2C%20CO%2080206%2C%20USA!5e0!3m2!1sen!2sgr!4v1788866893265!5m2!1sen!2sgr"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
    />
  )

  return (
    <div
      ref={container}
      id="contact-map"
      data-reveal="fade"
      data-delay="120"
      className="w-full rounded overflow-hidden mb-10"
      style={{ height: '400px', border: '2px solid #ede4cc' }}
    >
      {nearViewport ? map : (
        <noscript>
          <style>{'#contact-map { opacity: 1; }'}</style>
          {map}
        </noscript>
      )}
    </div>
  )
}
