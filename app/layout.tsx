import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import dynamic from 'next/dynamic'
import { AuthProvider } from '@/lib/auth/auth-context'
import './globals.css'

// Lazy load ChatBot component to reduce initial bundle size
const ChatBot = dynamic(() => import('@/components/ChatBot'), {
  ssr: false, // ChatBot likely uses browser APIs, so disable SSR
})

const inter = Inter({ subsets: ['latin', 'vietnamese'] })

export const metadata: Metadata = {
  title: 'Tây Ninh Car - Thuê xe tự lái và thuê xe có tài xế',
  description: 'Dịch vụ đặt xe Tây Ninh chuyên nghiệp. Thuê xe tự lái và thuê xe có tài xế với giá cả minh bạch và uy tín.',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <ChatBot />
        </AuthProvider>
      </body>
    </html>
  )
}

