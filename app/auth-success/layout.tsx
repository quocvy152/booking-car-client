import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Đăng Nhập Thành Công - Tây Ninh Car',
  description: 'Đăng nhập thành công. Bắt đầu đặt xe ngay với Tây Ninh Car.',
}

export default function AuthSuccessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
