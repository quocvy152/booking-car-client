import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'vietnamese'] })

export const metadata: Metadata = {
  title: 'Tây Ninh Car - Đặt xe đi tỉnh, Sân bay giá rẻ',
  description: 'Dịch vụ đặt xe Tây Ninh chuyên nghiệp. Đưa đón sân bay, đi tỉnh, du lịch với giá cả minh bạch và tài xế uy tín.',
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}

