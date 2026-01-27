import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
import { 
  MapPin, 
  Clock,
  Shield,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  Route,
  Users,
  Award,
  Star,
  ChevronDown,
  Info
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Đi Tỉnh - Tây Ninh Car',
  description: 'Dịch vụ đi tỉnh nhanh chóng, an toàn với nhiều tuyến đường phổ biến. Đảm bảo đúng giờ và tiện lợi.',
}

const features = [
  {
    icon: Route,
    title: 'Nhiều Tuyến Đường',
    description: 'Phục vụ các tuyến đường phổ biến: TP.HCM, Vũng Tàu, Đà Lạt, Cần Thơ và nhiều tỉnh thành khác.'
  },
  {
    icon: Clock,
    title: 'Linh Hoạt Thời Gian',
    description: 'Đặt xe bất cứ lúc nào, phục vụ 24/7. Thời gian khởi hành linh hoạt theo nhu cầu của bạn.'
  },
  {
    icon: Shield,
    title: 'An Toàn Tuyệt Đối',
    description: 'Xe đời mới, bảo hiểm đầy đủ. Tài xế có kinh nghiệm lái xe đường dài, am hiểu địa hình.'
  },
  {
    icon: Users,
    title: 'Giá Cả Cạnh Tranh',
    description: 'Giá cả minh bạch, cạnh tranh nhất thị trường. Không phát sinh thêm chi phí nào.'
  }
]

const pricing = [
  { route: 'Tây Ninh ↔ TP.HCM', oneWay: '600.000đ', roundTrip: '1.100.000đ' },
  { route: 'Tây Ninh ↔ Vũng Tàu', oneWay: '800.000đ', roundTrip: '1.500.000đ' },
  { route: 'Tây Ninh ↔ Đà Lạt', oneWay: '1.200.000đ', roundTrip: '2.200.000đ' },
  { route: 'Tây Ninh ↔ Cần Thơ', oneWay: '1.000.000đ', roundTrip: '1.900.000đ' },
  { route: 'Tây Ninh ↔ Nha Trang', oneWay: '1.500.000đ', roundTrip: '2.800.000đ' },
]

const faqs = [
  {
    question: 'Tôi có thể đặt xe đi tỉnh trong ngày không?',
    answer: 'Có, chúng tôi hỗ trợ đặt xe gấp trong ngày. Tuy nhiên, để đảm bảo có xe phù hợp, chúng tôi khuyến nghị đặt trước ít nhất 4-6 giờ.'
  },
  {
    question: 'Giá có thay đổi theo số lượng hành khách không?',
    answer: 'Giá cố định theo tuyến đường và loại xe, không phụ thuộc vào số lượng hành khách (trong giới hạn số chỗ của xe).'
  },
  {
    question: 'Xe có dừng nghỉ giữa đường không?',
    answer: 'Có, tài xế sẽ dừng nghỉ tại các điểm nghỉ an toàn trên đường nếu hành trình dài hơn 2 giờ. Thời gian nghỉ khoảng 15-20 phút.'
  },
  {
    question: 'Tôi có thể đặt xe đi tỉnh khác không có trong danh sách không?',
    answer: 'Có, chúng tôi có thể phục vụ các tuyến đường khác. Vui lòng liên hệ để được báo giá cụ thể cho tuyến đường của bạn.'
  }
]

export default function IntercityServicePage() {
  return (
    <PageLayout className="min-h-screen bg-gradient-to-br from-green-50 via-slate-50 to-green-100 flex flex-col">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-medium">Dịch vụ đi tỉnh</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Đi Tỉnh
                <br />
                <span className="text-green-200">Nhanh Chóng & An Toàn</span>
              </h1>
              <p className="text-lg sm:text-xl text-green-100 mb-8 leading-relaxed">
                Dịch vụ đi tỉnh chuyên nghiệp với nhiều tuyến đường phổ biến. 
                Xe đời mới, tài xế kinh nghiệm, giá cả cạnh tranh.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/">
                  <Button className="bg-white text-green-600 hover:bg-green-50 transition-colors duration-200 cursor-pointer px-6 py-3 text-base font-medium shadow-lg hover:shadow-xl">
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
              Ưu Điểm Dịch Vụ Đi Tỉnh
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Những lý do bạn nên chọn dịch vụ đi tỉnh của chúng tôi
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
                  <div className="bg-green-100 rounded-xl w-14 h-14 flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-green-600" />
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
              Bảng Giá Đi Tỉnh
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Giá cả minh bạch, cạnh tranh nhất thị trường. Đã bao gồm phí cầu đường.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Tuyến đường</th>
                    <th className="px-6 py-4 text-center font-semibold">Một chiều</th>
                    <th className="px-6 py-4 text-center font-semibold">Khứ hồi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {pricing.map((item, index) => (
                    <tr key={index} className="hover:bg-green-50 transition-colors duration-200 cursor-pointer">
                      <td className="px-6 py-4 font-medium text-slate-900">{item.route}</td>
                      <td className="px-6 py-4 text-center text-slate-700">{item.oneWay}</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">{item.roundTrip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-green-50 px-6 py-4 border-t border-gray-200">
              <p className="text-sm text-slate-600 flex items-start">
                <Info className="h-5 w-5 text-green-600 shrink-0 mr-2 mt-0.5" />
                <span>Giá áp dụng cho xe 4 chỗ. Xe 7 chỗ và 16 chỗ có giá khác. Giá có thể thay đổi tùy theo thời điểm và khoảng cách cụ thể.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Popular Routes */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Các Tuyến Đường Phổ Biến
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Những tuyến đường được đặt nhiều nhất
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'TP.HCM', icon: '🏙️', description: 'Thành phố lớn nhất Việt Nam' },
              { name: 'Vũng Tàu', icon: '🏖️', description: 'Thành phố biển xinh đẹp' },
              { name: 'Đà Lạt', icon: '🏔️', description: 'Thành phố ngàn hoa' },
              { name: 'Cần Thơ', icon: '🚤', description: 'Trung tâm đồng bằng sông Cửu Long' },
              { name: 'Nha Trang', icon: '🌊', description: 'Thành phố biển du lịch' },
              { name: 'Phan Thiết', icon: '☀️', description: 'Thành phố nghỉ dưỡng' }
            ].map((route, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200 cursor-pointer hover:shadow-xl transition-all duration-200 text-center"
              >
                <div className="text-4xl mb-3">{route.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {route.name}
                </h3>
                <p className="text-slate-600 text-sm">
                  {route.description}
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
              Những câu hỏi phổ biến về dịch vụ đi tỉnh
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
                    <ChevronDown className="h-5 w-5 text-green-600 shrink-0 mr-2 mt-0.5" />
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
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Sẵn Sàng Đặt Xe Đi Tỉnh?
            </h2>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto text-lg">
              Liên hệ với chúng tôi ngay hôm nay để được tư vấn và đặt xe với giá ưu đãi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button className="bg-white text-green-600 hover:bg-green-50 transition-colors duration-200 cursor-pointer px-6 py-3 text-base font-medium shadow-lg hover:shadow-xl">
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
    </PageLayout>
  )
}

