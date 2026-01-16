import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  Users, 
  Clock,
  Shield,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  Car,
  Award,
  Star,
  ChevronDown,
  Info,
  Globe,
  Briefcase
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Thuê Xe Có Tài Xế - Tây Ninh Car',
  description: 'Thuê xe có tài xế chuyên nghiệp cho các chuyến đi dài ngày, công tác hoặc sự kiện đặc biệt.',
}

const features = [
  {
    icon: Users,
    title: 'Tài Xế Chuyên Nghiệp',
    description: 'Tài xế có kinh nghiệm, bằng lái hợp lệ, am hiểu đường xá và nhiệt tình phục vụ.'
  },
  {
    icon: Car,
    title: 'Xe Đời Mới',
    description: 'Xe đời mới, sạch sẽ, được bảo dưỡng thường xuyên. Đầy đủ tiện nghi và an toàn.'
  },
  {
    icon: Clock,
    title: 'Linh Hoạt Thời Gian',
    description: 'Thuê xe theo giờ, theo ngày hoặc theo chuyến. Thời gian linh hoạt theo nhu cầu.'
  },
  {
    icon: Globe,
    title: 'Đa Ngôn Ngữ',
    description: 'Hỗ trợ tài xế nói tiếng Anh, tiếng Hoa cho khách hàng quốc tế.'
  }
]

const pricing = [
  { type: 'Xe 4 chỗ', price: '800.000đ', duration: '8 giờ/100km', features: ['Tài xế chuyên nghiệp', 'Nhiên liệu đã bao gồm', 'Bảo hiểm đầy đủ'] },
  { type: 'Xe 7 chỗ', price: '1.200.000đ', duration: '8 giờ/100km', features: ['Tài xế chuyên nghiệp', 'Nhiên liệu đã bao gồm', 'Phù hợp gia đình'] },
  { type: 'Xe 16 chỗ', price: '1.800.000đ', duration: '8 giờ/100km', features: ['Tài xế chuyên nghiệp', 'Nhiên liệu đã bao gồm', 'Phù hợp nhóm đông'] },
  { type: 'Xe cao cấp', price: 'Liên hệ', duration: 'Theo yêu cầu', features: ['Xe sang trọng', 'Tài xế chuyên nghiệp', 'Dịch vụ cao cấp'] },
]

const useCases = [
  {
    icon: Briefcase,
    title: 'Công Tác',
    description: 'Phục vụ các chuyến công tác, hội nghị, sự kiện doanh nghiệp.'
  },
  {
    icon: Users,
    title: 'Gia Đình',
    description: 'Đưa đón gia đình, đi chơi, thăm hỏi người thân.'
  },
  {
    icon: Star,
    title: 'Sự Kiện',
    description: 'Phục vụ đám cưới, sinh nhật, các sự kiện đặc biệt.'
  },
  {
    icon: Car,
    title: 'Du Lịch',
    description: 'Thuê xe dài ngày cho các chuyến du lịch, khám phá.'
  }
]

const faqs = [
  {
    question: 'Tôi có thể thuê xe theo giờ không?',
    answer: 'Có, chúng tôi hỗ trợ thuê xe theo giờ, theo ngày hoặc theo chuyến. Giá sẽ được tính dựa trên thời gian và quãng đường sử dụng.'
  },
  {
    question: 'Giá có bao gồm nhiên liệu không?',
    answer: 'Có, giá đã bao gồm nhiên liệu trong phạm vi 100km cho 8 giờ đầu tiên. Nếu vượt quá, sẽ tính thêm theo km.'
  },
  {
    question: 'Tài xế có thể làm việc qua đêm không?',
    answer: 'Có, chúng tôi có thể sắp xếp tài xế làm việc qua đêm với phụ phí hợp lý. Vui lòng thông báo khi đặt xe.'
  },
  {
    question: 'Tôi có thể yêu cầu tài xế cụ thể không?',
    answer: 'Chúng tôi sẽ cố gắng sắp xếp tài xế theo yêu cầu của bạn nếu có thể. Tuy nhiên, không thể đảm bảo 100% do lịch trình của tài xế.'
  }
]

export default function WithDriverServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-slate-50 to-orange-100 flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-orange-700 text-white">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Users className="h-5 w-5" />
                <span className="text-sm font-medium">Thuê xe có tài xế</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Thuê Xe Có Tài Xế
                <br />
                <span className="text-orange-200">Chuyên Nghiệp & Tiện Lợi</span>
              </h1>
              <p className="text-lg sm:text-xl text-orange-100 mb-8 leading-relaxed">
                Thuê xe có tài xế chuyên nghiệp cho các chuyến đi dài ngày, công tác hoặc sự kiện đặc biệt. 
                Xe đời mới, tài xế kinh nghiệm, giá cả hợp lý.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/">
                  <Button className="bg-white text-orange-600 hover:bg-orange-50 transition-colors duration-200 cursor-pointer px-6 py-3 text-base font-medium shadow-lg hover:shadow-xl">
                    Đặt xe ngay
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
              Ưu Điểm Dịch Vụ Thuê Xe Có Tài Xế
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Những lý do bạn nên chọn dịch vụ thuê xe có tài xế của chúng tôi
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
                  <div className="bg-orange-100 rounded-xl w-14 h-14 flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-orange-600" />
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

        {/* Pricing Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Bảng Giá Thuê Xe Có Tài Xế
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Giá cả minh bạch, linh hoạt theo nhu cầu của bạn
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((item, index) => (
              <div
                key={index}
                className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border-2 overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-200 ${
                  index === 0 ? 'border-orange-500 ring-2 ring-orange-200' : 'border-gray-200'
                }`}
              >
                {index === 0 && (
                  <div className="bg-orange-600 text-white text-center py-2 text-sm font-semibold">
                    Phổ Biến
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {item.type}
                  </h3>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-orange-600 mb-1">
                      {item.price}
                    </div>
                    <p className="text-sm text-slate-500">{item.duration}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-orange-600 shrink-0 mr-2 mt-0.5" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/">
                    <Button 
                      className={`w-full transition-colors duration-200 cursor-pointer px-5 py-2.5 text-sm font-medium ${
                        index === 0 
                          ? 'bg-orange-600 hover:bg-orange-700 text-white' 
                          : 'bg-orange-50 hover:bg-orange-100 text-orange-600'
                      }`}
                    >
                      Đặt xe
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-orange-50 rounded-xl p-6 border border-orange-200">
            <p className="text-sm text-slate-600 flex items-start">
              <Info className="h-5 w-5 text-orange-600 shrink-0 mr-2 mt-0.5" />
              <span>Giá áp dụng cho 8 giờ đầu tiên và 100km đầu tiên. Vượt quá sẽ tính thêm theo giờ và km. Giá có thể thay đổi tùy theo thời điểm và yêu cầu cụ thể.</span>
            </p>
          </div>
        </section>

        {/* Use Cases */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Phù Hợp Cho Mọi Nhu Cầu
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Dịch vụ thuê xe có tài xế phù hợp cho nhiều mục đích khác nhau
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon
              return (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200 cursor-pointer hover:shadow-xl transition-all duration-200 text-center"
                >
                  <div className="bg-orange-100 rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {useCase.description}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Câu Hỏi Thường Gặp
            </h2>
            <p className="text-lg text-slate-600">
              Những câu hỏi phổ biến về dịch vụ thuê xe có tài xế
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
                    <ChevronDown className="h-5 w-5 text-orange-600 shrink-0 mr-2 mt-0.5" />
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
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Sẵn Sàng Thuê Xe Có Tài Xế?
            </h2>
            <p className="text-orange-100 mb-8 max-w-2xl mx-auto text-lg">
              Liên hệ với chúng tôi ngay hôm nay để được tư vấn và đặt xe với giá ưu đãi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button className="bg-white text-orange-600 hover:bg-orange-50 transition-colors duration-200 cursor-pointer px-6 py-3 text-base font-medium shadow-lg hover:shadow-xl">
                  Đặt xe ngay
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
      </main>
      <Footer />
    </div>
  )
}

