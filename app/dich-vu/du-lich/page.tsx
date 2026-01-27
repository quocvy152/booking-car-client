import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
import { 
  Navigation, 
  Clock,
  Shield,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  MapPin,
  Users,
  Award,
  Star,
  ChevronDown,
  Info,
  Camera,
  Hotel
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Du Lịch - Tây Ninh Car',
  description: 'Tour du lịch trọn gói với tài xế kinh nghiệm, am hiểu địa phương. Trải nghiệm tuyệt vời cho chuyến đi của bạn.',
}

const features = [
  {
    icon: Users,
    title: 'Tài Xế Am Hiểu',
    description: 'Tài xế có kinh nghiệm, am hiểu địa phương, sẵn sàng giới thiệu các điểm tham quan thú vị.'
  },
  {
    icon: Navigation,
    title: 'Lộ Trình Linh Hoạt',
    description: 'Thiết kế lộ trình theo nhu cầu của bạn. Có thể điều chỉnh trong quá trình tour.'
  },
  {
    icon: Hotel,
    title: 'Hỗ Trợ Đặt Khách Sạn',
    description: 'Hỗ trợ đặt khách sạn với giá ưu đãi tại các điểm đến phổ biến.'
  },
  {
    icon: Camera,
    title: 'Chụp Ảnh Kỷ Niệm',
    description: 'Tài xế hỗ trợ chụp ảnh tại các điểm check-in đẹp, lưu giữ kỷ niệm đẹp.'
  }
]

const tours = [
  { 
    name: 'Tour 1 Ngày', 
    duration: 'Trong tỉnh',
    price: '1.500.000đ',
    features: ['8 giờ sử dụng xe', 'Tài xế chuyên nghiệp', 'Nhiên liệu đã bao gồm', 'Bảo hiểm đầy đủ']
  },
  { 
    name: 'Tour 2 Ngày 1 Đêm', 
    duration: 'Liên tỉnh',
    price: '3.500.000đ',
    features: ['2 ngày sử dụng xe', 'Tài xế chuyên nghiệp', 'Nhiên liệu đã bao gồm', 'Hỗ trợ đặt khách sạn']
  },
  { 
    name: 'Tour 3 Ngày 2 Đêm', 
    duration: 'Liên tỉnh',
    price: '5.500.000đ',
    features: ['3 ngày sử dụng xe', 'Tài xế chuyên nghiệp', 'Nhiên liệu đã bao gồm', 'Hỗ trợ đặt khách sạn']
  },
  { 
    name: 'Tour Theo Yêu Cầu', 
    duration: 'Tùy chỉnh',
    price: 'Liên hệ',
    features: ['Lộ trình tùy chỉnh', 'Thời gian linh hoạt', 'Giá cả hợp lý', 'Tư vấn miễn phí']
  },
]

const faqs = [
  {
    question: 'Giá tour có bao gồm vé tham quan và ăn uống không?',
    answer: 'Giá tour chỉ bao gồm xe và tài xế. Vé tham quan, ăn uống và khách sạn không bao gồm trong giá tour. Tuy nhiên, chúng tôi có thể hỗ trợ đặt khách sạn với giá ưu đãi.'
  },
  {
    question: 'Tôi có thể thay đổi lộ trình trong quá trình tour không?',
    answer: 'Có, bạn hoàn toàn có thể thay đổi lộ trình trong quá trình tour. Tài xế sẽ hỗ trợ điều chỉnh lộ trình phù hợp với nhu cầu của bạn.'
  },
  {
    question: 'Tài xế có thể nói tiếng Anh không?',
    answer: 'Một số tài xế của chúng tôi có thể giao tiếp bằng tiếng Anh cơ bản. Nếu bạn cần tài xế nói tiếng Anh, vui lòng thông báo khi đặt tour.'
  },
  {
    question: 'Tôi có thể đặt tour cho nhóm đông người không?',
    answer: 'Có, chúng tôi có thể phục vụ nhóm đông người với nhiều loại xe khác nhau (7 chỗ, 16 chỗ, 29 chỗ). Vui lòng liên hệ để được tư vấn và báo giá phù hợp.'
  }
]

export default function TourServicePage() {
  return (
    <PageLayout className="min-h-screen bg-gradient-to-br from-purple-50 via-slate-50 to-purple-100 flex flex-col">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-700 text-white">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Navigation className="h-5 w-5" />
                <span className="text-sm font-medium">Tour du lịch</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Du Lịch
                <br />
                <span className="text-purple-200">Trọn Gói & Tiện Lợi</span>
              </h1>
              <p className="text-lg sm:text-xl text-purple-100 mb-8 leading-relaxed">
                Tour du lịch với tài xế kinh nghiệm, am hiểu địa phương. 
                Lộ trình linh hoạt, hỗ trợ đặt khách sạn và chụp ảnh kỷ niệm.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/">
                  <Button className="bg-white text-purple-600 hover:bg-purple-50 transition-colors duration-200 cursor-pointer px-6 py-3 text-base font-medium shadow-lg hover:shadow-xl">
                    Đặt tour ngay
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
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

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Tại Sao Chọn Tour Của Chúng Tôi?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Những ưu điểm vượt trội giúp bạn có trải nghiệm du lịch tuyệt vời
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200 cursor-pointer hover:shadow-xl transition-all duration-200"
                >
                  <div className="bg-purple-100 rounded-xl w-14 h-14 flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-purple-600" />
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

        {/* Tour Packages */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Các Gói Tour
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Chọn gói tour phù hợp với nhu cầu của bạn
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tours.map((tour, index) => (
              <div
                key={index}
                className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border-2 overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-200 ${
                  index === 1 ? 'border-purple-500 ring-2 ring-purple-200' : 'border-gray-200'
                }`}
              >
                {index === 1 && (
                  <div className="bg-purple-600 text-white text-center py-2 text-sm font-semibold">
                    Phổ Biến Nhất
                  </div>
                )}
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">
                      {tour.name}
                    </h3>
                    <p className="text-sm text-slate-500">{tour.duration}</p>
                  </div>
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold text-purple-600">
                      {tour.price}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {tour.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 shrink-0 mr-2 mt-0.5" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/">
                    <Button 
                      className={`w-full transition-colors duration-200 cursor-pointer px-5 py-2.5 text-sm font-medium ${
                        index === 1 
                          ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                          : 'bg-purple-50 hover:bg-purple-100 text-purple-600'
                      }`}
                    >
                      Đặt tour
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-purple-50 rounded-xl p-6 border border-purple-200">
            <p className="text-sm text-slate-600 flex items-start">
              <Info className="h-5 w-5 text-purple-600 shrink-0 mr-2 mt-0.5" />
              <span>Giá tour chưa bao gồm vé tham quan, ăn uống và khách sạn. Giá có thể thay đổi tùy theo lộ trình cụ thể và thời điểm.</span>
            </p>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Điểm Đến Phổ Biến
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Những địa điểm được yêu thích nhất
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Đà Lạt', icon: '🏔️', description: 'Thành phố ngàn hoa, khí hậu mát mẻ' },
              { name: 'Vũng Tàu', icon: '🏖️', description: 'Thành phố biển với nhiều bãi biển đẹp' },
              { name: 'Nha Trang', icon: '🌊', description: 'Thành phố biển du lịch nổi tiếng' },
              { name: 'Phan Thiết', icon: '☀️', description: 'Thành phố nghỉ dưỡng lý tưởng' },
              { name: 'Cần Thơ', icon: '🚤', description: 'Khám phá miền Tây sông nước' },
              { name: 'Mũi Né', icon: '🏜️', description: 'Sa mạc và biển tuyệt đẹp' }
            ].map((destination, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200 cursor-pointer hover:shadow-xl transition-all duration-200 text-center"
              >
                <div className="text-4xl mb-3">{destination.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {destination.name}
                </h3>
                <p className="text-slate-600 text-sm">
                  {destination.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Câu Hỏi Thường Gặp
            </h2>
            <p className="text-lg text-slate-600">
              Những câu hỏi phổ biến về tour du lịch
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-200"
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-start">
                    <ChevronDown className="h-5 w-5 text-purple-600 shrink-0 mr-2 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 ml-7 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Sẵn Sàng Khởi Hành Tour Du Lịch?
            </h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto text-lg">
              Liên hệ với chúng tôi ngay hôm nay để được tư vấn và thiết kế tour phù hợp với bạn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button className="bg-white text-purple-600 hover:bg-purple-50 transition-colors duration-200 cursor-pointer px-6 py-3 text-base font-medium shadow-lg hover:shadow-xl">
                  Đặt tour ngay
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:0123456789">
                <Button 
                  variant="outline"
                  className="border-2 border-white/90 bg-white/10 text-white hover:bg-white/20 hover:border-white transition-all duration-200 cursor-pointer px-6 py-3 text-base font-medium"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Gọi ngay: 0123 456 789
                </Button>
              </a>
            </div>
          </div>
        </section>
    </PageLayout>
  )
}

