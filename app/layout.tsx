import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import * as React from 'react'
import { Toaster } from "@/components/ui/toaster"


import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ACIMUN Online',
  description: 'WebApp for ACIMUN',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  )
}
