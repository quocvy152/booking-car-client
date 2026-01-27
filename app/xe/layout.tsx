import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Danh Sách Xe - Tây Ninh Car',
  description: 'Tìm kiếm và lựa chọn xe phù hợp với nhu cầu của bạn. Nhiều loại xe đời mới với giá cả hợp lý.',
}

export default function CarListingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
