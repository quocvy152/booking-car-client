import type { Car } from '@/components/CarCard'

export interface Amenity {
  id: string
  name: string
  icon: string // Icon name from lucide-react
}

export interface Owner {
  id: string
  name: string
  avatar?: string
  rating: number
  verified: boolean
  phone?: string
  email?: string
}

export interface Review {
  id: string
  user: string
  rating: number
  comment: string
  date: Date
  helpful: number
  avatar?: string
}

export interface CarDetail extends Car {
  images: string[] // Mảng hình ảnh (tối thiểu 4 ảnh)
  description: string // Mô tả chi tiết
  features: string[] // Đặc điểm xe
  amenities: Amenity[] // Tiện nghi
  documents: string[] // Giấy tờ thuê xe
  collateral: string // Tài sản thế chấp
  terms: string // Điều khoản
  cancellationPolicy: string // Chính sách hủy chuyến
  owner: Owner // Thông tin chủ xe
  reviews: Review[] // Đánh giá khách hàng
  tags: string[] // Tags
}

