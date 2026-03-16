import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

import { NextAuthProvider } from '@/components/NextAuthProvider'

export const metadata: Metadata = {
  title: 'Eventify | Modern Event Management',
  description: 'The ultimate platform for managing and attending events.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
