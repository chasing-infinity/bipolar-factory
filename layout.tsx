import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Join Bipolar Factory — Application Portal',
  description: 'Apply to join the team at Bipolar Factory. A gamified hiring experience.',
  openGraph: {
    title: 'Join Bipolar Factory',
    description: 'A different kind of job application.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="noise">
        {children}
      </body>
    </html>
  )
}
