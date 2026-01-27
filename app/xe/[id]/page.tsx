'use client'

import { useParams } from 'next/navigation'
import PageLayout from '@/components/PageLayout'
import CarImageGallery from '@/components/CarImageGallery'
import CarFeatures from '@/components/CarFeatures'
import CarAmenities from '@/components/CarAmenities'
import CarReviews from '@/components/CarReviews'
import CarOwner from '@/components/CarOwner'
import CarRentalForm from '@/components/CarRentalForm'
import { Badge } from '@/components/ui/badge'
import { Star, MapPin, Zap, Heart } from 'lucide-react'
import type { CarDetail } from '@/types/car'

// Mock data - Replace with actual API call
const mockCarDetails: Record<string, CarDetail> = {
  '1': {
    id: '1',
    name: 'HYUNDAI ACCENT',
    year: 2023,
    image: 'https://cdn.autoxuyenviet.com/assets/media/products/860~1720520653_lI_KqWiam5Q2WG42MY4qVDNH.jpg',
    transmission: 'automatic',
    seats: 5,
    fuel: 'gasoline',
    location: 'Phường 04, Quận Tân Bình',
    rating: 5.0,
    trips: 39,
    pricePerDay: 675,
    originalPrice: 775,
    discount: 15,
    shortTermPrice: 465,
    shortTermHours: 4,
    featured: true,
    noCollateral: true,
    images: [
      'https://cdn.autoxuyenviet.com/assets/media/products/860~1720520653_lI_KqWiam5Q2WG42MY4qVDNH.jpg',
      'https://images2.thanhnien.vn/528068263637045248/2023/5/8/toyota-vios-11-16835401585491256311899.jpg',
      'https://hondavinh.net/wp-content/uploads/2024/02/honda-city-2024-2.jpg',
      'https://drive.gianhangvn.com/image/2et5xsy-2745308j31311.jpg',
      'https://image.danchoioto.vn/kia/cerato/2021/kia-cerato-ngoai-that-1.jpg',
    ],
    description: `Xe Hyundai Accent 2023 là mẫu xe sedan hạng B được đánh giá cao về độ bền, tiết kiệm nhiên liệu và giá cả hợp lý. Xe được trang bị đầy đủ các tính năng an toàn và tiện nghi hiện đại, phù hợp cho gia đình và sử dụng hàng ngày.

Xe được bảo dưỡng định kỳ, đảm bảo chất lượng tốt nhất. Nội thất sạch sẽ, không mùi thuốc lá. Xe phù hợp cho các chuyến đi dài, du lịch hoặc công tác.`,
    features: [
      'Hộp số tự động vô cấp CVT',
      'Hệ thống phanh ABS, EBD',
      'Túi khí an toàn',
      'Camera lùi',
      'Màn hình cảm ứng 8 inch',
    ],
    amenities: [
      { id: '1', name: 'Bản đồ', icon: 'Map' },
      { id: '2', name: 'Camera lùi', icon: 'Camera' },
      { id: '3', name: 'Camera hành trình', icon: 'Video' },
      { id: '4', name: 'Bluetooth', icon: 'Bluetooth' },
      { id: '5', name: 'USB', icon: 'Usb' },
      { id: '6', name: 'Điều hòa', icon: 'Wind' },
      { id: '7', name: 'GPS', icon: 'Navigation' },
      { id: '8', name: 'Cảm biến lùi', icon: 'Radio' },
    ],
    documents: [
      'Giấy đăng ký xe',
      'Bảo hiểm xe',
      'Giấy phép lái xe',
      'Chứng minh nhân dân/Căn cước công dân',
    ],
    collateral: 'Miễn thế chấp - Chỉ cần CMND/CCCD và bằng lái xe',
    terms: `1. Khách hàng phải có bằng lái xe hợp lệ (tối thiểu 1 năm kinh nghiệm)
2. Xe phải được trả đúng thời gian và địa điểm đã thỏa thuận
3. Khách hàng chịu trách nhiệm về mọi thiệt hại xảy ra trong thời gian thuê xe
4. Không được sử dụng xe để vận chuyển hàng hóa cấm, chất cấm
5. Không được cho người khác mượn xe trong thời gian thuê
6. Phải tuân thủ luật giao thông và các quy định của pháp luật`,
    cancellationPolicy: `- Hủy trước 24 giờ: Hoàn tiền 100%
- Hủy trước 12 giờ: Hoàn tiền 50%
- Hủy sau 12 giờ: Không hoàn tiền
- Trường hợp hủy do lỗi từ phía chủ xe: Hoàn tiền 100%`,
    owner: {
      id: '1',
      name: 'Nguyễn Văn A',
      rating: 4.8,
      verified: true,
      phone: '0901234567',
      email: 'nguyenvana@example.com',
    },
    reviews: [
      {
        id: '1',
        user: 'Trần Thị B',
        rating: 5,
        comment: 'Xe rất sạch sẽ, chủ xe nhiệt tình. Điều hòa mát, xe chạy êm. Sẽ thuê lại lần sau!',
        date: new Date('2024-01-15'),
        helpful: 12,
      },
      {
        id: '2',
        user: 'Lê Văn C',
        rating: 5,
        comment: 'Xe mới, đầy đủ tiện nghi. Chủ xe giao xe đúng giờ, thủ tục nhanh gọn. Rất hài lòng!',
        date: new Date('2024-01-20'),
        helpful: 8,
      },
      {
        id: '3',
        user: 'Phạm Thị D',
        rating: 4,
        comment: 'Xe tốt, giá hợp lý. Chỉ có điều hơi nhỏ một chút cho gia đình 5 người nhưng vẫn đủ dùng.',
        date: new Date('2024-02-01'),
        helpful: 5,
      },
    ],
    tags: ['Tiết kiệm', 'Mới', 'Sạch sẽ', 'Nhiều tiện nghi'],
  },
  '2': {
    id: '2',
    name: 'TOYOTA VIOS',
    year: 2023,
    image: 'https://images2.thanhnien.vn/528068263637045248/2023/5/8/toyota-vios-11-16835401585491256311899.jpg',
    transmission: 'automatic',
    seats: 5,
    fuel: 'gasoline',
    location: 'Phường 05, Quận Tân Bình',
    rating: 4.8,
    trips: 52,
    pricePerDay: 750,
    featured: false,
    noCollateral: true,
    images: [
      'https://images2.thanhnien.vn/528068263637045248/2023/5/8/toyota-vios-11-16835401585491256311899.jpg',
      'https://cdn.autoxuyenviet.com/assets/media/products/860~1720520653_lI_KqWiam5Q2WG42MY4qVDNH.jpg',
      'https://hondavinh.net/wp-content/uploads/2024/02/honda-city-2024-2.jpg',
      'https://drive.gianhangvn.com/image/2et5xsy-2745308j31311.jpg',
    ],
    description: 'Toyota Vios 2023 - Xe sedan hạng B được yêu thích với độ bền cao và tiết kiệm nhiên liệu.',
    features: [
      'Hộp số tự động',
      'Hệ thống an toàn đầy đủ',
      'Camera lùi',
    ],
    amenities: [
      { id: '1', name: 'Bản đồ', icon: 'Map' },
      { id: '2', name: 'Camera lùi', icon: 'Camera' },
      { id: '3', name: 'Bluetooth', icon: 'Bluetooth' },
      { id: '4', name: 'Điều hòa', icon: 'Wind' },
    ],
    documents: [
      'Giấy đăng ký xe',
      'Bảo hiểm xe',
      'Giấy phép lái xe',
    ],
    collateral: 'Miễn thế chấp',
    terms: 'Tuân thủ luật giao thông và quy định của pháp luật.',
    cancellationPolicy: 'Hủy trước 24 giờ: Hoàn tiền 100%',
    owner: {
      id: '2',
      name: 'Trần Văn B',
      rating: 4.5,
      verified: true,
      phone: '0907654321',
    },
    reviews: [
      {
        id: '1',
        user: 'Nguyễn Văn E',
        rating: 5,
        comment: 'Xe tốt, chủ xe nhiệt tình.',
        date: new Date('2024-01-10'),
        helpful: 3,
      },
    ],
    tags: ['Bền', 'Tiết kiệm'],
  },
}

export default function CarDetailPage() {
  const params = useParams()
  const carId = Array.isArray(params.id) ? params.id[0] : params.id
  const car = carId ? mockCarDetails[carId] : undefined

  if (!car) {
    return (
      <PageLayout>
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-16">
              <h1 className="text-2xl font-bold text-slate-900 mb-4">
                Không tìm thấy xe
              </h1>
              <p className="text-slate-600">
                Xe bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
              </p>
            </div>
          </section>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Car Header Info */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {car.featured && (
                <Badge variant="default" className="flex items-center gap-1">
                  <Zap className="h-3 w-3" />
                  Nổi bật
                </Badge>
              )}
              {car.noCollateral && (
                <Badge variant="outline" className="bg-green-50 border-green-200 text-green-700">
                  Miễn thế chấp
                </Badge>
              )}
              {car.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              {car.name} {car.year}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-slate-600">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold text-slate-900">{car.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>{car.trips} chuyến đã đi</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-5 w-5" />
                <span>{car.location}</span>
              </div>
            </div>
          </div>

          {/* Main Content - 2 Columns */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Image Gallery */}
              <CarImageGallery images={car.images} carName={car.name} />

              {/* Features */}
              <CarFeatures car={car} />

              {/* Description */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Mô tả</h3>
                <div className="text-slate-700 whitespace-pre-line leading-relaxed">
                  {car.description}
                </div>
              </div>

              {/* Amenities */}
              <CarAmenities amenities={car.amenities} />

              {/* Documents */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Giấy tờ thuê xe</h3>
                <ul className="space-y-2">
                  {car.documents.map((doc, index) => (
                    <li key={index} className="flex items-center gap-2 text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Collateral */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Tài sản thế chấp</h3>
                <p className="text-slate-700">{car.collateral}</p>
              </div>

              {/* Terms */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Điều khoản</h3>
                <div className="text-slate-700 whitespace-pre-line leading-relaxed">
                  {car.terms}
                </div>
              </div>

              {/* Cancellation Policy */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Chính sách hủy chuyến
                </h3>
                <div className="text-slate-700 whitespace-pre-line leading-relaxed">
                  {car.cancellationPolicy}
                </div>
              </div>

              {/* Owner Info */}
              <CarOwner owner={car.owner} />

              {/* Reviews */}
              <CarReviews reviews={car.reviews} />
            </div>

            {/* Right Column - Rental Form (Sticky on desktop) */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <CarRentalForm car={car} />
              </div>
            </div>
          </div>
        </section>
    </PageLayout>
  )
}

