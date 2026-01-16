import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Đăng nhập / Đăng ký - Tây Ninh Car',
  description: 'Đăng nhập hoặc tạo tài khoản mới để đặt xe và sử dụng dịch vụ của Tây Ninh Car.',
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

