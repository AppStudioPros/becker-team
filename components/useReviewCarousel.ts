'use client'

import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react'
import type { FocusEvent, PointerEvent } from 'react'

const motionQuery = '(prefers-reduced-motion: reduce)'

function prefersReducedMotion() {
  return window.matchMedia(motionQuery).matches || document.documentElement.classList.contains('a11y-reduce-motion')
}

function subscribeMotion(update: () => void) {
  const media = window.matchMedia(motionQuery)
  const observer = new MutationObserver(update)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  media.addEventListener('change', update)
  return () => { media.removeEventListener('change', update); observer.disconnect() }
}

export default function useReviewCarousel(count: number) {
  const track = useRef<HTMLUListElement>(null)
  const automatic = useRef<Animation | null>(null)
  const [position, setPosition] = useState({ index: 0, direction: 0, manual: false })
  const [columns, setColumns] = useState(3)
  const [step, setStep] = useState(0)
  const [inView, setInView] = useState(false)
  const [pageVisible, setPageVisible] = useState(true)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [touching, setTouching] = useState(false)
  const [manualPause, setManualPause] = useState<boolean | null>(null)
  const reducedMotion = useSyncExternalStore(subscribeMotion, prefersReducedMotion, () => true)
  const paused = manualPause ?? reducedMotion
  const hold = paused || hovered || focused || touching || !inView || !pageVisible
  const scrollable = count > columns

  useLayoutEffect(() => {
    const list = track.current
    const viewport = list?.parentElement
    if (!list || !viewport) return
    function measure() {
      if (!list?.firstElementChild) return
      const style = getComputedStyle(list)
      setColumns(Number(style.getPropertyValue('--columns')))
      setStep(list.firstElementChild.getBoundingClientRect().width + parseFloat(style.columnGap))
    }
    measure()
    const resize = new ResizeObserver(measure)
    resize.observe(viewport)
    const intersection = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting))
    intersection.observe(viewport)
    return () => { resize.disconnect(); intersection.disconnect() }
  }, [count])

  useEffect(() => {
    const update = () => setPageVisible(!document.hidden)
    update()
    document.addEventListener('visibilitychange', update)
    return () => document.removeEventListener('visibilitychange', update)
  }, [])

  useLayoutEffect(() => {
    const list = track.current
    if (!list || !scrollable || step <= 0) return
    if (position.direction && !reducedMotion) {
      const snap = list.animate([{ translate: `${position.direction * step}px` }, { translate: '0px' }], {
        duration: 300, easing: 'ease-out',
      })
      snap.onfinish = () => setPosition(previous => ({ ...previous, direction: 0 }))
      return () => { snap.onfinish = null; snap.cancel() }
    }

    // Reorder only at a card boundary. Pausing the same animation preserves its exact offset.
    const drift = list.animate([{ translate: '0px' }, { translate: `${-step}px` }], {
      duration: 6500, easing: 'linear', fill: 'forwards',
    })
    drift.pause()
    automatic.current = drift
    drift.onfinish = () => setPosition(previous => ({ index: (previous.index + 1) % count, direction: 0, manual: false }))
    return () => { automatic.current = null; drift.onfinish = null; drift.cancel() }
  }, [count, position, reducedMotion, scrollable, step])

  useLayoutEffect(() => {
    const drift = automatic.current
    if (!drift || drift.playState === 'finished') return
    if (hold) drift.pause()
    else drift.play()
  }, [hold, count, position, reducedMotion, scrollable, step])

  function move(direction: number) {
    if (scrollable) setPosition(previous => ({ index: (previous.index + direction + count) % count, direction, manual: true }))
  }

  return {
    track, columns, position, paused, scrollable, move, setTouching,
    togglePause: () => setManualPause(!paused),
    hoverEvents: {
      // Scrolling the page beneath a parked mouse should not look like hovering to read a card.
      onPointerMove: (e: PointerEvent) => {
        if (e.pointerType !== 'touch' && (e.movementX || e.movementY)) setHovered(true)
      },
      onPointerLeave: () => setHovered(false),
    },
    focusEvents: {
      onFocus: (e: FocusEvent<HTMLElement>) => setFocused(e.target !== e.currentTarget && e.target.matches(':focus-visible')),
      onBlur: (e: FocusEvent<HTMLElement>) => { if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false) },
    },
  }
}
