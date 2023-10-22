import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Workclub',
  description: 'Increase Hybrid Team Engagement to Create a More Positive Work Environment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
