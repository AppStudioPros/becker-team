'use client'

import Image from 'next/image'
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react'
import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react'
import type { ReviewCardData, ReviewsPayload } from '@/lib/googleReviewTypes'
import styles from './GoogleReviews.module.css'

const listing = 'https://www.google.com/maps?cid=14064244300182174262'
const motionQuery = '(prefers-reduced-motion: reduce)'
const empty: ReviewsPayload = { source: 'testimonials', reviews: [], attributions: [] }

function subscribeMotion(notify: () => void) {
  const media = window.matchMedia(motionQuery)
  media.addEventListener('change', notify)
  return () => media.removeEventListener('change', notify)
}

function ReviewCard({ review, hidden }: { review: ReviewCardData; hidden: boolean }) {
  const author = (
    <>
      {review.photoUri && <Image unoptimized src={review.photoUri} width={40} height={40} alt="" className={styles.avatar} />}
      <span>{review.name}</span>
    </>
  )
  return (
    <li className={styles.card} inert={hidden} aria-hidden={hidden || undefined}>
      {review.profileUri
        ? <a className={styles.author} href={review.profileUri}>{author}</a>
        : <div className={styles.author}>{author}</div>}
      {review.rating != null && (
        <span className={styles.stars} role="img" aria-label={`${review.rating} out of 5 stars`}>
          {'★'.repeat(review.rating)}
        </span>
      )}
      <blockquote className={review.reviewUri ? styles.excerpt : undefined}>{review.text}</blockquote>
      {review.reviewUri && <a className={styles.full} href={review.reviewUri}>Read full review</a>}
    </li>
  )
}

export default function GoogleReviews() {
  const section = useRef<HTMLElement>(null)
  const track = useRef<HTMLUListElement>(null)
  const animation = useRef<Animation | null>(null)
  const request = useRef<Promise<ReviewsPayload> | null>(null)
  const touch = useRef<{ x: number; y: number } | null>(null)
  const suppressClick = useRef(false)
  const [payload, setPayload] = useState(empty)
  const [inView, setInView] = useState(false)
  const [columns, setColumns] = useState(3)
  const [position, setPosition] = useState({ index: 0, direction: 0, manual: false })
  const [manualPause, setManualPause] = useState<boolean | null>(null)
  const [hovered, setHovered] = useState(false)
  const [keyboardFocus, setKeyboardFocus] = useState(false)
  const [touching, setTouching] = useState(false)
  const [pageHidden, setPageHidden] = useState(false)
  const reducedMotion = useSyncExternalStore(subscribeMotion, () => window.matchMedia(motionQuery).matches, () => true)
  const paused = manualPause ?? reducedMotion
  const hold = paused || hovered || keyboardFocus || touching || !inView || pageHidden
  const { reviews, attributions, source } = payload
  const count = reviews.length
  const scrollable = count > columns
  const google = source === 'google' && count > 0

  useEffect(() => {
    let mounted = true
    function load() {
      request.current ??= fetch('/api/google-reviews', { cache: 'no-store' })
        .then(async response => response.ok ? await response.json() as ReviewsPayload : empty)
        .catch(() => empty)
      void request.current.then(result => { if (mounted) setPayload(result) })
    }
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting)
      if (entry.isIntersecting) load()
    })
    if (section.current) observer.observe(section.current)
    const visibility = () => setPageHidden(document.hidden)
    document.addEventListener('visibilitychange', visibility)
    return () => {
      mounted = false
      observer.disconnect()
      document.removeEventListener('visibilitychange', visibility)
    }
  }, [])

  useLayoutEffect(() => {
    const list = track.current
    if (!list) return
    const resize = new ResizeObserver(() => setColumns(Number(getComputedStyle(list).getPropertyValue('--columns'))))
    resize.observe(list)
    return () => resize.disconnect()
  }, [count])

  useEffect(() => {
    if (!scrollable || hold) return
    const timer = window.setTimeout(() => {
      setPosition(({ index }) => ({ index: (index + 1) % count, direction: 1, manual: false }))
    }, 6500)
    return () => window.clearTimeout(timer)
  }, [count, scrollable, hold, position])

  useLayoutEffect(() => {
    const list = track.current
    if (!scrollable || !list || !position.direction || reducedMotion) return
    const step = list.children[1].getBoundingClientRect().left - list.children[0].getBoundingClientRect().left
    const slide = list.animate([{ translate: `${step * position.direction}px 0` }, { translate: '0 0' }], {
      duration: 440, easing: 'cubic-bezier(.2,.7,.2,1)',
    })
    animation.current = slide
    return () => { slide.cancel(); animation.current = null }
  }, [position, columns, scrollable, reducedMotion])

  useLayoutEffect(() => {
    const slide = animation.current
    if (!slide || position.manual || slide.playState === 'finished') return
    if (hold) slide.pause()
    else if (slide.playState === 'paused') slide.play()
  }, [hold, position])

  function move(direction: number) {
    if (scrollable) setPosition(({ index }) => ({ index: (index + direction + count) % count, direction, manual: true }))
  }

  const ordered = scrollable
    ? reviews.map((_, offset) => reviews[(position.index + offset) % count])
    : reviews
  // The leading card fills the left edge during a forward slide, including the wrap from last to first.
  const cards = scrollable ? [ordered[count - 1], ...ordered] : ordered
  const label = google ? 'Google reviews' : 'Client testimonials'

  return (
    <section ref={section} id="google-reviews" className={styles.section} aria-label={count ? label : 'More reviews'}
      onPointerEnter={e => { if (e.pointerType !== 'touch') setHovered(true) }}
      onPointerLeave={() => setHovered(false)}
      onFocus={e => { if (e.target.matches(':focus-visible')) setKeyboardFocus(true) }}
      onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setKeyboardFocus(false) }}
      onKeyDown={e => {
        setKeyboardFocus(true)
        if (scrollable && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
          e.preventDefault()
          if (track.current?.contains(e.target as Node)) e.currentTarget.focus()
          move(e.key === 'ArrowLeft' ? -1 : 1)
        }
      }}
      tabIndex={-1}
    >
      <div className={styles.content}>
        {count > 0 && (
          <>
            <p className={styles.eyebrow}>{label}</p>
            <h2>See what past clients have to say</h2>
            <div className={styles.window} role="region" aria-roledescription="carousel" aria-label={label}
              onTouchStart={e => {
                suppressClick.current = false
                const point = e.touches[0]
                if (e.touches.length === 1) { touch.current = { x: point.clientX, y: point.clientY }; setTouching(true) }
              }}
              onTouchCancel={() => { touch.current = null; setTouching(false) }}
              onTouchEnd={e => {
                const start = touch.current
                touch.current = null
                setTouching(false)
                if (!start || !scrollable) return
                const dx = e.changedTouches[0].clientX - start.x
                const dy = e.changedTouches[0].clientY - start.y
                if (Math.abs(dx) > 32 && Math.abs(dx) > Math.abs(dy)) { suppressClick.current = true; move(dx < 0 ? 1 : -1) }
              }}
              onClickCapture={e => {
                if (suppressClick.current) { e.preventDefault(); suppressClick.current = false }
              }}
            >
              <ul ref={track} className={styles.track} data-scrollable={scrollable}>
                {cards.map((review, i) => (
                  <ReviewCard key={scrollable && i === 0 ? `leading-${review.id}` : review.id}
                    review={review} hidden={scrollable && (i === 0 || i > columns)} />
                ))}
              </ul>
            </div>
          </>
        )}
        <div className={styles.footer} data-empty={count === 0}>
          <div className={styles.source}>
            <a href={listing} className={styles.more}>More reviews</a>
            {google && <Image src="/images/google-maps-attribution.svg" alt="Google Maps" width={98} height={18} className={styles.maps} />}
            {google && attributions.map(({ name, uri }) => uri
              ? <a key={name + uri} href={uri} className={styles.attribution}>{name}</a>
              : <span key={name} className={styles.attribution}>{name}</span>)}
          </div>
          {scrollable && (
            <div className={styles.controls} role="group" aria-label="Review controls">
              <span aria-hidden="true">{position.index + 1} / {count}</span>
              <button type="button" aria-label="Previous review" onClick={() => move(-1)}><ArrowLeft /></button>
              <button type="button" aria-label={paused ? 'Play automatic scrolling' : 'Pause automatic scrolling'} onClick={() => setManualPause(!paused)}>
                {paused ? <Play /> : <Pause />}
              </button>
              <button type="button" aria-label="Next review" onClick={() => move(1)}><ArrowRight /></button>
            </div>
          )}
        </div>
        {google && <p className={styles.notice}>Showing five-star reviews with comments, ordered by Google relevance.</p>}
        <span className="sr-only" role="status">{scrollable && position.manual ? `Review ${position.index + 1} of ${count}, ${reviews[position.index].name}` : ''}</span>
      </div>
    </section>
  )
}
