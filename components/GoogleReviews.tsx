'use client'

import Image from 'next/image'
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import useReviewCarousel from './useReviewCarousel'
import type { ReviewCardData, ReviewsPayload } from '@/lib/googleReviewTypes'
import { staticGoogleReviews } from '@/lib/monthlyGoogleReviews'
import styles from './GoogleReviews.module.css'

const listing = 'https://www.google.com/maps?cid=14064244300182174262'
const pendingReviews: ReviewsPayload = { source: 'google', reviews: [], attributions: [] }

function ReviewCard({ review, hidden, linked }: { review: ReviewCardData; hidden: boolean; linked: boolean }) {
  const author = (
    <>
      {review.photoUri && <Image unoptimized src={review.photoUri} width={40} height={40} alt="" className={styles.avatar} />}
      <span>{review.name}</span>
    </>
  )
  return (
    <li className={styles.card} data-clone={hidden || undefined} inert={hidden} aria-hidden={hidden || undefined}>
      {review.profileUri
        ? <a className={styles.author} href={review.profileUri}>{author}</a>
        : <div className={styles.author}>{author}</div>}
      {review.rating != null && (
        <span className={styles.stars} role="img" aria-label={`${review.rating} out of 5 stars`}>
          {'★'.repeat(review.rating)}
        </span>
      )}
      {linked
        ? <p className={styles.topic}>{review.text}</p>
        : <blockquote className={review.reviewUri ? styles.excerpt : undefined}>{review.text}</blockquote>}
      {review.reviewUri && (
        <a className={styles.full} href={review.reviewUri} aria-label={`Read the full review by ${review.name} on Google`}>
          Read full review
        </a>
      )}
    </li>
  )
}

export default function GoogleReviews() {
  const section = useRef<HTMLElement>(null)
  const request = useRef<Promise<ReviewsPayload> | null>(null)
  const touch = useRef<{ x: number; y: number } | null>(null)
  const suppressClick = useRef(false)
  const [payload, setPayload] = useState<ReviewsPayload>(pendingReviews)
  const { reviews, attributions, source, googleSummary } = payload
  const count = reviews.length
  const { track, position, paused, scrollable, move, setTouching, togglePause, hoverEvents, focusEvents } = useReviewCarousel(count)
  const linked = source === 'review-links'
  const showGoogleAttribution = count > 0 || !!googleSummary

  useEffect(() => {
    let mounted = true
    function load() {
      request.current ??= fetch('/api/google-reviews', { cache: 'no-store' })
        .then(async response => response.ok ? await response.json() as ReviewsPayload : staticGoogleReviews)
        .catch(() => staticGoogleReviews)
      void request.current.then(result => { if (mounted) setPayload(result) })
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { load(); observer.disconnect() }
    })
    if (section.current) observer.observe(section.current)
    return () => { mounted = false; observer.disconnect() }
  }, [])

  // During a continuous slide, the incoming card can be read or clicked before it reaches its final slot.
  useEffect(() => {
    const list = track.current
    if (!list) return
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        const card = entry.target as HTMLLIElement
        const hidden = !entry.isIntersecting || entry.intersectionRatio === 0
        card.inert = hidden
        card.setAttribute('aria-hidden', String(hidden))
      }
    }, { root: list.parentElement, threshold: [0, 0.001] })
    for (const card of list.children) {
      if (!card.hasAttribute('data-clone')) observer.observe(card)
    }
    return () => observer.disconnect()
  }, [count, scrollable, track])

  const index = count ? position.index % count : 0
  const ordered = scrollable
    ? reviews.map((_, offset) => reviews[(index + offset) % count])
    : reviews
  // The leading card fills the left edge during a forward slide, including the wrap from last to first.
  const cards = scrollable ? [ordered[count - 1], ...ordered] : ordered
  const label = 'Google reviews'

  return (
    <section ref={section} id="google-reviews" className={styles.section} aria-label={count ? label : 'More reviews'}
      {...focusEvents}
      onKeyDown={e => {
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
              {...hoverEvents}
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
                  <ReviewCard key={scrollable && i === 0 ? `leading-${review.id}` : review.id} linked={linked}
                    review={review} hidden={scrollable && i === 0} />
                ))}
              </ul>
            </div>
          </>
        )}
        <div className={styles.footer} data-empty={count === 0}>
          <div className={styles.source}>
            {googleSummary && <span className={styles.attribution}>
              {googleSummary.rating.toFixed(1)} out of 5 · {googleSummary.count.toLocaleString('en-US')} Google {googleSummary.count === 1 ? 'review' : 'reviews'}
            </span>}
            <a href={listing} className={styles.more}>More reviews</a>
            {showGoogleAttribution && <Image src="/images/google-maps-attribution.svg" alt="Google Maps" width={98} height={18} className={styles.maps} />}
            {showGoogleAttribution && attributions.map(({ name, uri }) => uri
              ? <a key={name + uri} href={uri} className={styles.attribution}>{name}</a>
              : <span key={name} className={styles.attribution}>{name}</span>)}
          </div>
          {scrollable && (
            <div className={styles.controls} role="group" aria-label="Review controls">
              <span aria-hidden="true">{index + 1} / {count}</span>
              <button type="button" aria-label="Previous review" onClick={() => move(-1)}><ArrowLeft /></button>
              <button type="button" aria-label={paused ? 'Play automatic scrolling' : 'Pause automatic scrolling'} onClick={togglePause}>
                {paused ? <Play /> : <Pause />}
              </button>
              <button type="button" aria-label="Next review" onClick={() => move(1)}><ArrowRight /></button>
            </div>
          )}
        </div>
        <span className="sr-only" role="status">{scrollable && position.manual ? `Review ${index + 1} of ${count}, ${reviews[index].name}` : ''}</span>
      </div>
    </section>
  )
}
