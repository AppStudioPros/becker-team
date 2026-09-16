import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin | The Becker Team',
  robots: { index: false, follow: false },
}

// Admin area — no global navbar or footer
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
