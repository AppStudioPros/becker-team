'use client'

import { useSyncExternalStore } from 'react'

const desktopQuery = '(min-width: 48rem)'

function subscribe(notify: () => void) {
  const media = window.matchMedia(desktopQuery)
  media.addEventListener('change', notify)
  return () => media.removeEventListener('change', notify)
}

function getSize() {
  return window.matchMedia(desktopQuery).matches ? 'large' : 'small'
}

export default function RatesWidget() {
  const size = useSyncExternalStore(subscribe, getSize, () => null)
  const sources = {
    large: 'https://widgets.mortgagenewsdaily.com/widget/f/rates?t=large&sn=false&c=85a3b3&w=648&h=230',
    small: 'https://widgets.mortgagenewsdaily.com/widget/f/rates?t=small&sc=false&c=85a3b3&w=260&h=170',
  }
  return (
    <iframe
      title={size === 'large' ? 'Mortgage News Daily rates and 30-year rate chart' : 'Mortgage News Daily rates'}
      src={size ? sources[size] : undefined}
      scrolling="no"
      className="mx-auto block h-[170px] w-[260px] border-0 md:h-[230px] md:w-[648px]"
    />
  )
}
