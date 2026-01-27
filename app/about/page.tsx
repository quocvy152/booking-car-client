import PageLayout from '@/components/PageLayout'
import {
    Award,
    Car,
    CheckCircle2,
    Clock,
    MapPin,
    Shield,
    Star,
    Users
} from 'lucide-react'

export const metadata = {
  title: 'Giới Thiệu - Tây Ninh Car',
  description: 'Tìm hiểu về Tây Ninh Car - Dịch vụ đặt xe chuyên nghiệp với giá cả minh bạch và tài xế uy tín.',
}

export default function AboutPage() {
  return (
    <PageLayout>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Về <span className="text-blue-600">Tây Ninh Car</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Chúng tôi tự hào là đơn vị cung cấp dịch vụ đặt xe chuyên nghiệp, 
              uy tín tại Tây Ninh với hơn 10 năm kinh nghiệm phục vụ khách hàng.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 cursor-pointer hover:shadow-2xl transition-shadow duration-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Sứ Mệnh</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Mang đến dịch vụ đặt xe chất lượng cao với giá cả minh bạch, 
                đảm bảo an toàn và tiện lợi cho mọi khách hàng. Chúng tôi cam kết 
                phục vụ với tinh thần chuyên nghiệp và tận tâm.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 cursor-pointer hover:shadow-2xl transition-shadow duration-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <Star className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Tầm Nhìn</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Trở thành đơn vị dẫn đầu về dịch vụ đặt xe tại khu vực Tây Ninh, 
                mở rộng phạm vi phục vụ và không ngừng nâng cao chất lượng dịch vụ 
                để đáp ứng nhu cầu ngày càng cao của khách hàng.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Giá Trị Cốt Lõi
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Những nguyên tắc và giá trị mà chúng tôi luôn tuân thủ trong mọi hoạt động
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200 text-center cursor-pointer hover:shadow-xl transition-shadow duration-200">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Uy Tín</h3>
              <p className="text-sm text-slate-600">
                Đảm bảo chất lượng dịch vụ và cam kết với khách hàng
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200 text-center cursor-pointer hover:shadow-xl transition-shadow duration-200">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Đúng Giờ</h3>
              <p className="text-sm text-slate-600">
                Luôn đúng giờ, không để khách hàng phải chờ đợi
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200 text-center cursor-pointer hover:shadow-xl transition-shadow duration-200">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Chất Lượng</h3>
              <p className="text-sm text-slate-600">
                Xe mới, sạch sẽ, an toàn và tài xế chuyên nghiệp
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200 text-center cursor-pointer hover:shadow-xl transition-shadow duration-200">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Tận Tâm</h3>
              <p className="text-sm text-slate-600">
                Phục vụ khách hàng với thái độ nhiệt tình, chu đáo
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Tại Sao Chọn Tây Ninh Car?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Đội ngũ tài xế chuyên nghiệp
                  </h3>
                  <p className="text-slate-600">
                    Tất cả tài xế đều có bằng lái hợp lệ, kinh nghiệm lái xe an toàn 
                    và thái độ phục vụ chuyên nghiệp.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Xe đời mới, sạch sẽ
                  </h3>
                  <p className="text-slate-600">
                    Đội xe được bảo dưỡng thường xuyên, đảm bảo an toàn và tiện nghi 
                    cho hành trình của bạn.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Giá cả minh bạch
                  </h3>
                  <p className="text-slate-600">
                    Báo giá rõ ràng, không phát sinh thêm chi phí. Thanh toán linh hoạt 
                    và hỗ trợ nhiều phương thức.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Phục vụ 24/7
                  </h3>
                  <p className="text-slate-600">
                    Sẵn sàng phục vụ mọi lúc, mọi nơi. Hỗ trợ đặt xe nhanh chóng 
                    qua nhiều kênh liên lạc.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Đưa đón đúng giờ
                  </h3>
                  <p className="text-slate-600">
                    Cam kết đúng giờ hẹn, đặc biệt quan trọng với các chuyến đi sân bay 
                    và các cuộc hẹn quan trọng.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Bảo hiểm đầy đủ
                  </h3>
                  <p className="text-slate-600">
                    Tất cả xe đều có bảo hiểm đầy đủ, đảm bảo an toàn và quyền lợi 
                    cho khách hàng.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Dịch Vụ Của Chúng Tôi
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Đa dạng dịch vụ đáp ứng mọi nhu cầu di chuyển của bạn
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200 cursor-pointer hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 rounded-lg p-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Đưa đón sân bay</h3>
              </div>
              <p className="text-slate-600 text-sm">
                Dịch vụ đưa đón sân bay chuyên nghiệp, đúng giờ với giá cả hợp lý.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200 cursor-pointer hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 rounded-lg p-2">
                  <Car className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Đi tỉnh</h3>
              </div>
              <p className="text-slate-600 text-sm">
                Dịch vụ đi tỉnh nhanh chóng, an toàn với nhiều tuyến đường phổ biến.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200 cursor-pointer hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 rounded-lg p-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Du lịch</h3>
              </div>
              <p className="text-slate-600 text-sm">
                Tour du lịch trọn gói với tài xế kinh nghiệm, am hiểu địa phương.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Thành Tựu Của Chúng Tôi
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold mb-2">10+</div>
                <div className="text-blue-100">Năm kinh nghiệm</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Xe trong đội</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold mb-2">10K+</div>
                <div className="text-blue-100">Khách hàng hài lòng</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Hỗ trợ khách hàng</div>
              </div>
            </div>
          </div>
        </section>
    </PageLayout>
  )
}

