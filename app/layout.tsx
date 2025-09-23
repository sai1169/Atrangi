import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Atrangi 2025 - Festival of Colors & Culture',
  description: 'Join us for Atrangi - A vibrant celebration of culture, and creativity at KMEC Auditorium on September 26th, 2025',
  keywords: 'Atrangi, festival, college event, cultural event, Holi, celebration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-body">
        {children}
      </body>
    </html>
  )
}