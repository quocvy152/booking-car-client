import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  Car, 
  Clock,
  Shield,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  Key,
  Award,
  Star,
  Info,
  AlertCircle,
  Calendar,
  Mail
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Thuê Xe Tự Lái - Tây Ninh Car',
  description: 'Dịch vụ thuê xe tự lái với nhiều loại xe đời mới, giá cả hợp lý. Sắp ra mắt!',
}

const upcomingFeatures = [
  {
    icon: Car,
    title: 'Nhiều Loại Xe',
    description: 'Đa dạng các loại xe từ 4 chỗ đến 16 chỗ, phù hợp với mọi nhu cầu.'
  },
  {
    icon: Key,
    title: 'Thủ Tục Đơn Giản',
    description: 'Thủ tục thuê xe nhanh chóng, chỉ cần bằng lái và CMND/CCCD.'
  },
  {
    icon: Shield,
    title: 'Bảo Hiểm Đầy Đủ',
    description: 'Tất cả xe đều có bảo hiểm đầy đủ, đảm bảo an toàn cho bạn.'
  },
  {
    icon: Clock,
    title: 'Hỗ Trợ 24/7',
    description: 'Đội ngũ hỗ trợ 24/7 sẵn sàng giúp đỡ bạn mọi lúc, mọi nơi.'
  }
]

const carTypes = [
  { name: 'Xe 4 chỗ', description: 'Phù hợp cho 2-4 người, tiết kiệm nhiên liệu' },
  { name: 'Xe 7 chỗ', description: 'Phù hợp cho gia đình, không gian rộng rãi' },
  { name: 'Xe 16 chỗ', description: 'Phù hợp cho nhóm đông, du lịch tập thể' },
  { name: 'Xe cao cấp', description: 'Xe sang trọng, đầy đủ tiện nghi cao cấp' },
]

export default function SelfDriveServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-slate-50 to-red-100 flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <AlertCircle className="h-5 w-5" />
                <span className="text-sm font-medium">Sắp ra mắt</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Thuê Xe Tự Lái
                <br />
                <span className="text-red-200">Tự Do Khám Phá</span>
              </h1>
              <p className="text-lg sm:text-xl text-red-100 mb-8 leading-relaxed">
                Dịch vụ thuê xe tự lái với nhiều loại xe đời mới, giá cả hợp lý. 
                Tự do khám phá mọi nơi bạn muốn theo cách riêng của mình.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/30">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Calendar className="h-6 w-6" />
                  <span className="text-lg font-semibold">Sắp ra mắt trong thời gian tới</span>
                </div>
                <p className="text-red-100 text-sm">
                  Chúng tôi đang chuẩn bị để mang đến dịch vụ tốt nhất cho bạn. 
                  Đăng ký nhận thông báo để được ưu đãi đặc biệt khi ra mắt!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:info@tayninhcar.com?subject=Đăng ký nhận thông báo dịch vụ thuê xe tự lái">
                  <Button className="bg-white text-red-600 hover:bg-red-50 transition-colors duration-200 cursor-pointer px-6 py-3 text-base font-medium shadow-lg hover:shadow-xl">
                    <Mail className="mr-2 h-5 w-5" />
                    Đăng ký nhận thông báo
                  </Button>
                </a>
                <a href="tel:0123456789">
                  <Button 
                    variant="outline"
                    className="border-2 border-white/90 bg-white/10 text-white hover:bg-white/20 hover:border-white transition-all duration-200 cursor-pointer px-6 py-3 text-base font-medium"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    0123 456 789
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Notice */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
            <AlertCircle className="h-16 w-16 mx-auto mb-6 text-red-200" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Dịch Vụ Sắp Ra Mắt
            </h2>
            <p className="text-red-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Chúng tôi đang nỗ lực chuẩn bị dịch vụ thuê xe tự lái với chất lượng tốt nhất. 
              Dịch vụ sẽ sớm có mặt để phục vụ bạn!
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Đăng ký nhận thông báo để:</h3>
              <ul className="text-left space-y-2 text-red-100">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mr-2 mt-0.5" />
                  <span>Nhận thông báo sớm nhất khi dịch vụ ra mắt</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mr-2 mt-0.5" />
                  <span>Được ưu đãi đặc biệt cho khách hàng đăng ký sớm</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mr-2 mt-0.5" />
                  <span>Cập nhật thông tin về giá cả và chính sách</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Tính Năng Sắp Có
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Những tính năng và dịch vụ mà chúng tôi sẽ mang đến cho bạn
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200 cursor-pointer hover:shadow-xl transition-all duration-200"
                >
                  <div className="bg-red-100 rounded-xl w-14 h-14 flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Car Types Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Các Loại Xe Sẽ Có
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Đa dạng các loại xe phù hợp với mọi nhu cầu của bạn
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {carTypes.map((car, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200 cursor-pointer hover:shadow-xl transition-all duration-200 text-center"
              >
                <div className="bg-red-100 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {car.name}
                </h3>
                <p className="text-slate-600 text-sm">
                  {car.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Lợi Ích Khi Thuê Xe Tự Lái
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Tại sao bạn nên chọn dịch vụ thuê xe tự lái của chúng tôi
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {[
                  'Tự do lên kế hoạch và di chuyển theo ý muốn',
                  'Tiết kiệm chi phí so với thuê xe có tài xế',
                  'Thoải mái và riêng tư trong không gian riêng',
                  'Phù hợp cho các chuyến đi dài ngày'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-red-600 shrink-0 mr-3 mt-0.5" />
                    <span className="text-slate-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  'Xe đời mới, được bảo dưỡng thường xuyên',
                  'Bảo hiểm đầy đủ, an tâm khi lái xe',
                  'Hỗ trợ 24/7 khi gặp sự cố',
                  'Giá cả minh bạch, không phát sinh'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-red-600 shrink-0 mr-3 mt-0.5" />
                    <span className="text-slate-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Đăng Ký Nhận Thông Báo Ngay
            </h2>
            <p className="text-red-100 mb-8 max-w-2xl mx-auto text-lg">
              Đăng ký email để nhận thông báo sớm nhất khi dịch vụ ra mắt và nhận ưu đãi đặc biệt
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a href="mailto:info@tayninhcar.com?subject=Đăng ký nhận thông báo dịch vụ thuê xe tự lái">
                <Button className="bg-white text-red-600 hover:bg-red-50 transition-colors duration-200 cursor-pointer px-6 py-3 text-base font-medium shadow-lg hover:shadow-xl w-full sm:w-auto">
                  <Mail className="mr-2 h-5 w-5" />
                  Đăng ký email
                </Button>
              </a>
              <a href="tel:0123456789">
                <Button 
                  variant="outline"
                  className="border-2 border-white/90 bg-white/10 text-white hover:bg-white/20 hover:border-white transition-all duration-200 cursor-pointer px-6 py-3 text-base font-medium w-full sm:w-auto"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Gọi tư vấn
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

