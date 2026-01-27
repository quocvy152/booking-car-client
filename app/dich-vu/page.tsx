import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
import { 
  Car, 
  Users, 
  Shield,
  Clock,
  CheckCircle2,
  ArrowRight,
  Star,
  Award
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Dịch Vụ - Tây Ninh Car',
  description: 'Khám phá các dịch vụ đặt xe chuyên nghiệp của Tây Ninh Car: thuê xe tự lái và thuê xe có tài xế.',
}

const services = [
  {
    id: 'self-drive',
    icon: Car,
    title: 'Thuê Xe Tự Lái',
    description: 'Dịch vụ thuê xe tự lái với nhiều loại xe đời mới, giá cả hợp lý. Tự do khám phá mọi nơi bạn muốn.',
    features: [
      'Nhiều loại xe đa dạng',
      'Giá thuê hợp lý',
      'Thủ tục đơn giản',
      'Bảo hiểm đầy đủ',
      'Hỗ trợ 24/7'
    ],
    color: 'blue',
    link: '/dich-vu/thue-xe-tu-lai'
  },
  {
    id: 'with-driver',
    icon: Users,
    title: 'Thuê Xe Có Tài Xế',
    description: 'Thuê xe có tài xế chuyên nghiệp cho các chuyến đi dài ngày, công tác hoặc sự kiện đặc biệt.',
    features: [
      'Tài xế chuyên nghiệp, kinh nghiệm',
      'Xe đời mới, đầy đủ tiện nghi',
      'Linh hoạt về thời gian',
      'Bảo hiểm đầy đủ',
      'Hỗ trợ đa ngôn ngữ'
    ],
    color: 'orange',
    link: '/dich-vu/thue-xe-co-tai-xe'
  }
]

const benefits = [
  {
    icon: Shield,
    title: 'An Toàn Tuyệt Đối',
    description: 'Tất cả xe đều có bảo hiểm đầy đủ, tài xế có bằng lái hợp lệ và kinh nghiệm lái xe an toàn.'
  },
  {
    icon: Clock,
    title: 'Đúng Giờ',
    description: 'Cam kết đúng giờ hẹn, đặc biệt quan trọng với các chuyến đi sân bay và các cuộc hẹn quan trọng.'
  },
  {
    icon: Award,
    title: 'Chất Lượng Cao',
    description: 'Xe đời mới, sạch sẽ, được bảo dưỡng thường xuyên. Tài xế chuyên nghiệp, nhiệt tình.'
  },
  {
    icon: Star,
    title: 'Giá Cả Minh Bạch',
    description: 'Báo giá rõ ràng, không phát sinh thêm chi phí. Thanh toán linh hoạt và hỗ trợ nhiều phương thức.'
  }
]

export default function ServicesPage() {
  return (
    <PageLayout>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Dịch Vụ <span className="text-blue-600">Của Chúng Tôi</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Dịch vụ đặt xe chuyên nghiệp đáp ứng mọi nhu cầu di chuyển của bạn. 
              Thuê xe tự lái hoặc thuê xe có tài xế, chúng tôi có giải pháp phù hợp cho bạn.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600',
                orange: 'bg-orange-100 text-orange-600'
              }

              return (
                <div
                  key={service.id}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 cursor-pointer hover:shadow-2xl transition-all duration-200 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${colorClasses[service.color as keyof typeof colorClasses]} rounded-xl p-3`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 flex-grow">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={service.link}>
                    <Button 
                      variant="outline" 
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-200 cursor-pointer group px-5 py-2.5 text-sm font-medium"
                    >
                      Tìm hiểu thêm
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </Link>
                </div>
              )
            })}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Tại Sao Chọn Chúng Tôi?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Những lợi ích và cam kết mà chúng tôi mang lại cho khách hàng
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200 text-center cursor-pointer hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Sẵn Sàng Đặt Xe Ngay?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Liên hệ với chúng tôi ngay hôm nay để được tư vấn và đặt xe với giá ưu đãi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button 
                  className="bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-200 cursor-pointer px-6 py-3 text-base font-medium"
                >
                  Đặt xe ngay
                </Button>
              </Link>
              <Link href="/lien-he">
                <Button 
                  variant="outline"
                  className="border-2 border-white/90 bg-white/10 text-white hover:bg-white/20 hover:border-white transition-all duration-200 cursor-pointer px-6 py-3 text-base font-medium shadow-lg shadow-white/10"
                >
                  Liên hệ tư vấn
                </Button>
              </Link>
            </div>
          </div>
        </section>
    </PageLayout>
  )
}

