import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Colorado Mortgage Calculator',
  description: 'Estimate the monthly payment on a Colorado home with principal, interest, property tax and homeowners insurance. Adjust the price, down payment and loan term.',
  alternates: { canonical: '/mortgage-calculator' },
}

export default function CalculatorLayout({ children }: { children: ReactNode }) {
  return children
}
