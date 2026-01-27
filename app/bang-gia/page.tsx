import PageLayout from '@/components/PageLayout'
import { Button } from '@/components/ui/button'
import {
    ArrowRight,
    Car,
    CheckCircle2,
    Info,
    MessageCircle,
    Phone,
    Users
} from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Bảng Giá - Tây Ninh Car',
  description: 'Bảng giá dịch vụ đặt xe Tây Ninh Car: thuê xe tự lái và thuê xe có tài xế. Giá cả minh bạch, không phát sinh.',
}

const pricingPlans = [
  {
    id: 'self-drive',
    icon: Car,
    title: 'Thuê Xe Tự Lái',
    subtitle: 'Dịch vụ thuê xe tự lái với nhiều loại xe đời mới',
    popular: true,
    routes: [
      { name: 'Xe 4 chỗ', price: '500.000đ', note: '1 ngày' },
      { name: 'Xe 7 chỗ', price: '800.000đ', note: '1 ngày' },
      { name: 'Xe 16 chỗ', price: '1.200.000đ', note: '1 ngày' },
      { name: 'Thuê dài ngày', price: 'Liên hệ', note: 'Giá ưu đãi' },
    ],
    features: [
      'Nhiều loại xe đa dạng, đời mới',
      'Giá thuê hợp lý, minh bạch',
      'Thủ tục đơn giản, nhanh chóng',
      'Bảo hiểm đầy đủ'
    ],
    note: 'Giá có thể thay đổi tùy theo loại xe và thời gian thuê'
  },
  {
    id: 'with-driver',
    icon: Users,
    title: 'Thuê Xe Có Tài Xế',
    subtitle: 'Thuê xe có tài xế chuyên nghiệp',
    popular: false,
    routes: [
      { name: 'Xe 4 chỗ', price: '800.000đ', note: '8 giờ/100km' },
      { name: 'Xe 7 chỗ', price: '1.200.000đ', note: '8 giờ/100km' },
      { name: 'Xe 16 chỗ', price: '1.800.000đ', note: '8 giờ/100km' },
      { name: 'Xe cao cấp', price: 'Liên hệ', note: 'Theo yêu cầu' },
    ],
    features: [
      'Tài xế chuyên nghiệp, kinh nghiệm',
      'Xe đời mới, đầy đủ tiện nghi',
      'Linh hoạt về thời gian',
      'Bảo hiểm đầy đủ'
    ],
    note: 'Giá có thể thay đổi tùy theo thời gian và khoảng cách thực tế'
  }
]

export default function PricingPage() {
  return (
    <PageLayout>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Bảng <span className="text-blue-600">Giá Dịch Vụ</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Giá cả minh bạch, không phát sinh. Chúng tôi cam kết mang đến dịch vụ chất lượng cao 
              với mức giá hợp lý nhất cho khách hàng.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {pricingPlans.map((plan) => {
              const Icon = plan.icon
              return (
                <div
                  key={plan.id}
                  className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border-2 transition-all duration-200 ${
                    plan.popular
                      ? 'border-blue-600 relative'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Phổ biến nhất
                      </span>
                    </div>
                  )}

                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="bg-blue-100 rounded-xl p-3">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">
                          {plan.title}
                        </h3>
                        <p className="text-slate-600 text-sm">
                          {plan.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Routes/Plans */}
                    <div className="space-y-3 mb-6">
                      {plan.routes.map((route, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-gray-200"
                        >
                          <div className="flex-1">
                            <p className="font-medium text-slate-900 text-sm">
                              {route.name}
                            </p>
                            {route.note && (
                              <p className="text-xs text-slate-500 mt-1">
                                {route.note}
                              </p>
                            )}
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-blue-600">
                              {route.price}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Note */}
                    {plan.note && (
                      <div className="flex items-start space-x-2 p-3 bg-amber-50 rounded-lg border border-amber-200 mb-6">
                        <Info className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                        <p className="text-xs text-amber-800">
                          {plan.note}
                        </p>
                      </div>
                    )}

                    {/* CTA Button */}
                    <Link href="/">
                      <Button 
                        className={`w-full transition-colors duration-200 cursor-pointer px-5 py-2.5 text-sm font-medium ${
                          plan.popular
                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                        }`}
                      >
                        Đặt xe ngay
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Lưu Ý Về Giá
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Giá có thể thay đổi
                    </h3>
                    <p className="text-sm text-slate-600">
                      Giá trên chỉ mang tính chất tham khảo. Giá thực tế có thể thay đổi tùy theo 
                      thời điểm, khoảng cách cụ thể và loại xe bạn chọn.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Không phát sinh chi phí
                    </h3>
                    <p className="text-sm text-slate-600">
                      Chúng tôi cam kết không phát sinh thêm bất kỳ chi phí nào ngoài giá đã thỏa thuận. 
                      Giá đã bao gồm phí đường, phí cầu và phí đỗ xe.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Ưu đãi đặc biệt
                    </h3>
                    <p className="text-sm text-slate-600">
                      Khách hàng đặt xe thường xuyên, đặt xe theo đoàn hoặc đặt trước sẽ được 
                      hưởng mức giá ưu đãi đặc biệt.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Thanh toán linh hoạt
                    </h3>
                    <p className="text-sm text-slate-600">
                      Chấp nhận thanh toán bằng tiền mặt, chuyển khoản ngân hàng hoặc các ví điện tử. 
                      Hỗ trợ thanh toán trước hoặc sau chuyến đi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Cần Tư Vấn Về Giá?
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                Liên hệ với chúng tôi ngay để được báo giá chính xác và nhận ưu đãi đặc biệt
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0123456789">
                <Button 
                  className="bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-200 cursor-pointer px-6 py-3 text-base font-medium"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  0123 456 789
                </Button>
              </a>
              <a href="https://zalo.me/0123456789" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline"
                  className="border-2 border-white/90 bg-white/10 text-white hover:bg-white/20 hover:border-white transition-all duration-200 cursor-pointer px-6 py-3 text-base font-medium shadow-lg shadow-white/10"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Zalo Chat
                </Button>
              </a>
              <Link href="/lien-he">
                <Button 
                  variant="outline"
                  className="border-2 border-white/90 bg-white/10 text-white hover:bg-white/20 hover:border-white transition-all duration-200 cursor-pointer px-6 py-3 text-base font-medium shadow-lg shadow-white/10"
                >
                  Liên hệ
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
    </PageLayout>
  )
}

