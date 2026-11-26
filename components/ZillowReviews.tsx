'use client'

import { useRef } from 'react'
import useReviewCarousel from './useReviewCarousel'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react'
import reviews from './zillow-reviews.json'
import ZillowReviewCard from './ZillowReviewCard'
import styles from './ZillowReviews.module.css'

const profile = 'https://www.zillow.com/lender-profile/Jamie%20Becker/#reviews'
const total = reviews.length

export default function ZillowReviews() {
  const { track, columns, position, paused, move, setTouching, togglePause, hoverEvents, focusEvents } = useReviewCarousel(total)
  const touch = useRef<{ x: number; y: number } | null>(null)

  return (
    <section id="becker-home-reviews" className={styles.section} aria-labelledby="becker-voices-title"
      {...focusEvents}
    >
      <header className={styles.intro}>
        <div>
          <p className={styles.eyebrow}>Reviews on Zillow</p>
          <h2 id="becker-voices-title">See what past clients have to say</h2>
        </div>
        <Link className={styles.meet} href="/about">Meet Jamie Becker <ArrowRight size={17} aria-hidden="true" /></Link>
      </header>
      <div
        className={styles.carousel} role="region" aria-roledescription="carousel" aria-label="Jamie Becker’s Zillow reviews"
        onKeyDown={e => {
          if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            e.preventDefault()
            move(e.key === 'ArrowLeft' ? -1 : 1)
          }
        }}
      >
        <div
          className={styles.window}
          {...hoverEvents}
          onPointerDown={e => {
            if (!e.isPrimary || e.pointerType === 'mouse') return
            touch.current = { x: e.clientX, y: e.clientY }
            setTouching(true)
            e.currentTarget.setPointerCapture(e.pointerId)
          }}
          onPointerUp={e => {
            if (!touch.current || !e.isPrimary) return
            const dx = e.clientX - touch.current.x
            const dy = e.clientY - touch.current.y
            touch.current = null
            setTouching(false)
            if (Math.abs(dx) > 32 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1)
          }}
          onLostPointerCapture={() => { touch.current = null; setTouching(false) }}
        >
          <ul ref={track} className={styles.track}>
            {reviews.map((_, offset) => {
              const review = reviews[(position.index + offset) % total]
              return (
                <ZillowReviewCard key={review.name} review={review} hidden={offset >= columns} />
              )
            })}
          </ul>
        </div>
        <div className={styles.actions}>
          <div className={styles.source}>
            <a href="https://www.zillow.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/zillow-wordmark.svg" alt="Real Estate on Zillow" width={110} height={24} />
            </a>
            <a className={styles.more} href={profile} target="_blank" rel="noopener noreferrer">More reviews</a>
          </div>
          <div className={styles.controls} role="group" aria-label="Review controls">
            <span className={styles.count} aria-hidden="true">{position.index + 1} / {total}</span>
            <button type="button" aria-label="Previous review" onClick={() => move(-1)}><ArrowLeft /></button>
            <button type="button" aria-label={paused ? 'Resume automatic scrolling' : 'Pause automatic scrolling'} onClick={togglePause}>
              {paused ? <Play /> : <Pause />}
            </button>
            <button type="button" aria-label="Next review" onClick={() => move(1)}><ArrowRight /></button>
          </div>
        </div>
        <span className="sr-only" role="status" aria-atomic="true">
          {position.manual ? `Review ${position.index + 1} of ${total}, ${reviews[position.index].name}` : ''}
        </span>
      </div>
    </section>
  )
}
