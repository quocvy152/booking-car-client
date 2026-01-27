import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chi Tiết Xe - Tây Ninh Car',
  description: 'Xem chi tiết thông tin xe, hình ảnh, đánh giá và đặt xe ngay với giá ưu đãi.',
}

export default function CarDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
