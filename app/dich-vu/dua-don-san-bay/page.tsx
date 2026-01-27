import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
import { 
  Plane, 
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
  Info
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Đưa Đón Sân Bay - Tây Ninh Car',
  description: 'Dịch vụ đưa đón sân bay chuyên nghiệp, đúng giờ với giá cả hợp lý. Phục vụ tất cả các sân bay trong khu vực.',
}

const features = [
  {
    icon: Clock,
    title: 'Đúng Giờ Tuyệt Đối',
    description: 'Cam kết đúng giờ hẹn, không lo trễ chuyến bay. Tài xế có mặt sớm 15 phút trước giờ hẹn.'
  },
  {
    icon: Shield,
    title: 'An Toàn Tuyệt Đối',
    description: 'Xe đời mới, bảo hiểm đầy đủ. Tài xế có bằng lái hợp lệ và kinh nghiệm lái xe an toàn.'
  },
  {
    icon: Plane,
    title: 'Theo Dõi Chuyến Bay',
    description: 'Tự động theo dõi giờ bay của bạn để điều chỉnh thời gian đón phù hợp.'
  },
  {
    icon: Users,
    title: 'Hỗ Trợ Hành Lý',
    description: 'Tài xế hỗ trợ mang hành lý miễn phí, đặc biệt với hành lý cồng kềnh.'
  }
]

const pricing = [
  { route: 'Tây Ninh ↔ Sân bay Tân Sơn Nhất', oneWay: '800.000đ', roundTrip: '1.500.000đ' },
  { route: 'Tây Ninh ↔ Sân bay Long Thành', oneWay: '1.200.000đ', roundTrip: '2.200.000đ' },
  { route: 'Tây Ninh ↔ Sân bay Cần Thơ', oneWay: '1.500.000đ', roundTrip: '2.800.000đ' },
]

const faqs = [
  {
    question: 'Tôi cần đặt xe đưa đón sân bay trước bao lâu?',
    answer: 'Chúng tôi khuyến nghị đặt xe trước ít nhất 24 giờ để đảm bảo có xe phù hợp. Tuy nhiên, chúng tôi vẫn có thể hỗ trợ đặt gấp trong vòng 2-4 giờ.'
  },
  {
    question: 'Giá có bao gồm phí cầu đường không?',
    answer: 'Giá đã bao gồm tất cả phí cầu đường và phí đậu xe tại sân bay. Không có phát sinh thêm chi phí nào.'
  },
  {
    question: 'Tài xế có biết tiếng Anh không?',
    answer: 'Một số tài xế của chúng tôi có thể giao tiếp bằng tiếng Anh cơ bản. Nếu bạn cần tài xế nói tiếng Anh, vui lòng thông báo khi đặt xe.'
  },
  {
    question: 'Xe có thể chở được bao nhiêu hành lý?',
    answer: 'Tùy loại xe, xe 4 chỗ có thể chở 2-3 vali lớn, xe 7 chỗ có thể chở 4-5 vali lớn. Nếu hành lý nhiều, vui lòng thông báo khi đặt xe để chúng tôi bố trí xe phù hợp.'
  }
]

export default function AirportServicePage() {
  return (
    <PageLayout className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 flex flex-col">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Plane className="h-5 w-5" />
                <span className="text-sm font-medium">Dịch vụ đưa đón sân bay</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Đưa Đón Sân Bay
                <br />
                <span className="text-blue-200">Chuyên Nghiệp & Đúng Giờ</span>
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
                Dịch vụ đưa đón sân bay uy tín với tài xế chuyên nghiệp, xe đời mới và giá cả minh bạch. 
                Cam kết đúng giờ, không lo trễ chuyến bay.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-200 cursor-pointer px-6 py-3 text-base font-medium shadow-lg hover:shadow-xl">
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
              Tại Sao Chọn Dịch Vụ Của Chúng Tôi?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Những ưu điểm vượt trội giúp bạn yên tâm khi sử dụng dịch vụ đưa đón sân bay
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
                  <div className="bg-blue-100 rounded-xl w-14 h-14 flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-blue-600" />
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
              Bảng Giá Đưa Đón Sân Bay
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Giá cả minh bạch, không phát sinh thêm chi phí. Đã bao gồm phí cầu đường và đậu xe.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Tuyến đường</th>
                    <th className="px-6 py-4 text-center font-semibold">Một chiều</th>
                    <th className="px-6 py-4 text-center font-semibold">Khứ hồi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {pricing.map((item, index) => (
                    <tr key={index} className="hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                      <td className="px-6 py-4 font-medium text-slate-900">{item.route}</td>
                      <td className="px-6 py-4 text-center text-slate-700">{item.oneWay}</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">{item.roundTrip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-blue-50 px-6 py-4 border-t border-gray-200">
              <p className="text-sm text-slate-600 flex items-start">
                <Info className="h-5 w-5 text-blue-600 shrink-0 mr-2 mt-0.5" />
                <span>Giá áp dụng cho xe 4 chỗ. Xe 7 chỗ và 16 chỗ có giá khác. Giá có thể thay đổi tùy theo thời điểm và khoảng cách cụ thể.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Quy Trình Đặt Xe Đơn Giản
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Chỉ với 3 bước đơn giản để có chuyến đi thuận tiện
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Đặt Xe', description: 'Gọi điện hoặc đặt xe online qua website. Cung cấp thông tin chuyến bay và địa chỉ đón.' },
              { step: '02', title: 'Xác Nhận', description: 'Chúng tôi xác nhận thông tin và gửi chi tiết tài xế, biển số xe trước 2 giờ.' },
              { step: '03', title: 'Đón & Trả', description: 'Tài xế đón đúng giờ và đưa bạn đến sân bay an toàn, đúng giờ.' }
            ].map((item, index) => (
              <div key={index} className="relative h-full flex flex-col">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-gray-200 text-center cursor-pointer hover:shadow-xl transition-all duration-200 flex flex-col h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-2xl font-bold mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-blue-300" />
                  </div>
                )}
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
              Những câu hỏi phổ biến về dịch vụ đưa đón sân bay
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
                    <ChevronDown className="h-5 w-5 text-blue-600 shrink-0 mr-2 mt-0.5" />
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
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Sẵn Sàng Đặt Xe Đưa Đón Sân Bay?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Liên hệ với chúng tôi ngay hôm nay để được tư vấn và đặt xe với giá ưu đãi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-200 cursor-pointer px-6 py-3 text-base font-medium shadow-lg hover:shadow-xl">
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

