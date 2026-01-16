import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Shield, Lock, Eye, FileText, AlertCircle } from 'lucide-react'

export const metadata = {
  title: 'Chính Sách Bảo Mật - Tây Ninh Car',
  description: 'Chính sách bảo mật thông tin của Tây Ninh Car - Cam kết bảo vệ thông tin cá nhân của khách hàng.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <Shield className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              Chính Sách <span className="text-blue-600">Bảo Mật</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 space-y-8">
            
            {/* Introduction */}
            <div className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                Tây Ninh Car ("chúng tôi", "của chúng tôi", hoặc "dịch vụ") cam kết bảo vệ quyền riêng tư 
                và thông tin cá nhân của bạn. Chính sách bảo mật này giải thích cách chúng tôi thu thập, 
                sử dụng, lưu trữ và bảo vệ thông tin của bạn khi sử dụng dịch vụ đặt xe của chúng tôi.
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-lg p-2 shrink-0 mt-1">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Thông Tin Chúng Tôi Thu Thập</h2>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p>Chúng tôi thu thập các loại thông tin sau đây:</p>
                    <div className="pl-4 space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p><strong>Thông tin cá nhân:</strong> Họ tên, số điện thoại, email, địa chỉ khi bạn đặt xe hoặc liên hệ với chúng tôi.</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p><strong>Thông tin đặt xe:</strong> Điểm đón, điểm đến, thời gian, loại xe, số lượng hành khách.</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p><strong>Thông tin thanh toán:</strong> Phương thức thanh toán, thông tin thẻ (được mã hóa và xử lý bởi bên thứ ba uy tín).</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p><strong>Thông tin kỹ thuật:</strong> Địa chỉ IP, loại trình duyệt, thiết bị truy cập, cookies.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-lg p-2 shrink-0 mt-1">
                  <Eye className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Cách Chúng Tôi Sử Dụng Thông Tin</h2>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p>Chúng tôi sử dụng thông tin thu thập được để:</p>
                    <ul className="pl-4 space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Xử lý và quản lý đơn đặt xe của bạn</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Liên hệ với bạn về đơn đặt xe, xác nhận, thay đổi hoặc hủy đơn</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Cải thiện chất lượng dịch vụ và trải nghiệm khách hàng</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Gửi thông báo về các chương trình khuyến mãi, cập nhật dịch vụ (nếu bạn đồng ý)</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Xử lý thanh toán và phòng chống gian lận</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Tuân thủ các nghĩa vụ pháp lý và quy định</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-lg p-2 shrink-0 mt-1">
                  <Lock className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Bảo Mật Thông Tin</h2>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p>
                      Chúng tôi áp dụng các biện pháp bảo mật kỹ thuật và tổ chức phù hợp để bảo vệ thông tin 
                      cá nhân của bạn khỏi việc truy cập, sử dụng, tiết lộ, thay đổi hoặc phá hủy trái phép:
                    </p>
                    <ul className="pl-4 space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Mã hóa dữ liệu trong quá trình truyền (SSL/TLS)</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Lưu trữ thông tin trên hệ thống máy chủ an toàn với kiểm soát truy cập nghiêm ngặt</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Chỉ nhân viên được ủy quyền mới có quyền truy cập thông tin cá nhân</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Thường xuyên cập nhật và kiểm tra hệ thống bảo mật</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-lg p-2 shrink-0 mt-1">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Chia Sẻ Thông Tin</h2>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p>Chúng tôi không bán hoặc cho thuê thông tin cá nhân của bạn. Chúng tôi chỉ chia sẻ thông tin trong các trường hợp sau:</p>
                    <ul className="pl-4 space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p><strong>Nhà cung cấp dịch vụ:</strong> Chia sẻ với tài xế để thực hiện đơn đặt xe của bạn</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p><strong>Đối tác thanh toán:</strong> Xử lý giao dịch thanh toán (thông tin được mã hóa)</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p><strong>Yêu cầu pháp lý:</strong> Khi có yêu cầu từ cơ quan nhà nước có thẩm quyền</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p><strong>Bảo vệ quyền lợi:</strong> Để bảo vệ quyền, tài sản hoặc an toàn của chúng tôi và khách hàng</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-lg p-2 shrink-0 mt-1">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Quyền Của Bạn</h2>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p>Bạn có các quyền sau đây đối với thông tin cá nhân của mình:</p>
                    <ul className="pl-4 space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p><strong>Truy cập:</strong> Yêu cầu xem thông tin cá nhân chúng tôi đang lưu trữ</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p><strong>Chỉnh sửa:</strong> Yêu cầu sửa đổi thông tin không chính xác</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p><strong>Xóa:</strong> Yêu cầu xóa thông tin cá nhân (trừ khi pháp luật yêu cầu lưu trữ)</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p><strong>Từ chối:</strong> Từ chối nhận thông báo marketing (nếu có)</p>
                      </li>
                    </ul>
                    <p className="mt-4">
                      Để thực hiện các quyền trên, vui lòng liên hệ với chúng tôi qua email: 
                      <a href="mailto:info@tayninhcar.com" className="text-blue-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer ml-1">
                        info@tayninhcar.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-lg p-2 shrink-0 mt-1">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">6. Cookies và Công Nghệ Theo Dõi</h2>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p>
                      Chúng tôi sử dụng cookies và công nghệ tương tự để cải thiện trải nghiệm của bạn, 
                      phân tích cách bạn sử dụng dịch vụ và tùy chỉnh nội dung. Bạn có thể quản lý cookies 
                      thông qua cài đặt trình duyệt của mình.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-lg p-2 shrink-0 mt-1">
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">7. Thay Đổi Chính Sách</h2>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p>
                      Chúng tôi có thể cập nhật chính sách bảo mật này theo thời gian. Mọi thay đổi sẽ được 
                      thông báo trên trang web này với ngày cập nhật mới nhất. Chúng tôi khuyến khích bạn 
                      xem lại chính sách này định kỳ.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 8 */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-lg p-2 shrink-0 mt-1">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">8. Liên Hệ</h2>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p>
                      Nếu bạn có bất kỳ câu hỏi hoặc lo ngại nào về chính sách bảo mật này, vui lòng liên hệ với chúng tôi:
                    </p>
                    <div className="bg-slate-50 rounded-lg p-4 space-y-2">
                      <p><strong>Email:</strong> 
                        <a href="mailto:info@tayninhcar.com" className="text-blue-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer ml-2">
                          info@tayninhcar.com
                        </a>
                      </p>
                      <p><strong>Điện thoại:</strong> 
                        <a href="tel:0123456789" className="text-blue-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer ml-2">
                          0123 456 789
                        </a>
                      </p>
                      <p><strong>Địa chỉ:</strong> Tây Ninh, Việt Nam</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

