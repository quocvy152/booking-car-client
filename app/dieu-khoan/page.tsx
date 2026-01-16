import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FileText, AlertTriangle, CheckCircle2, XCircle, Scale } from 'lucide-react'

export const metadata = {
  title: 'Điều Khoản Sử Dụng - Tây Ninh Car',
  description: 'Điều khoản và điều kiện sử dụng dịch vụ đặt xe của Tây Ninh Car.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <Scale className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              Điều Khoản <span className="text-blue-600">Sử Dụng</span>
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
                Xin chào và cảm ơn bạn đã sử dụng dịch vụ của Tây Ninh Car. Khi bạn truy cập và sử dụng 
                dịch vụ đặt xe của chúng tôi, bạn đồng ý tuân thủ các điều khoản và điều kiện sau đây. 
                Vui lòng đọc kỹ trước khi sử dụng dịch vụ.
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-lg p-2 shrink-0 mt-1">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Chấp Nhận Điều Khoản</h2>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p>
                      Bằng việc truy cập, sử dụng hoặc đặt xe thông qua website hoặc ứng dụng của Tây Ninh Car, 
                      bạn xác nhận rằng bạn đã đọc, hiểu và đồng ý bị ràng buộc bởi các điều khoản này. 
                      Nếu bạn không đồng ý với bất kỳ phần nào, vui lòng không sử dụng dịch vụ của chúng tôi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-lg p-2 shrink-0 mt-1">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Mô Tả Dịch Vụ</h2>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p>Tây Ninh Car cung cấp dịch vụ đặt xe bao gồm:</p>
                    <ul className="pl-4 space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Đưa đón sân bay</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Đi tỉnh, liên tỉnh</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Du lịch, tham quan</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Thuê xe có tài xế</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Thuê xe tự lái (khi có)</p>
                      </li>
                    </ul>
                    <p className="mt-4">
                      Chúng tôi hoạt động như một nền tảng kết nối khách hàng với các tài xế độc lập. 
                      Chúng tôi không phải là nhà cung cấp dịch vụ vận tải trực tiếp.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-lg p-2 shrink-0 mt-1">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Đăng Ký và Tài Khoản</h2>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p>Khi đặt xe, bạn cần cung cấp:</p>
                    <ul className="pl-4 space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Thông tin cá nhân chính xác và đầy đủ</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Số điện thoại hợp lệ để liên lạc</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Thông tin đặt xe chính xác (điểm đón, điểm đến, thời gian)</p>
                      </li>
                    </ul>
                    <p className="mt-4">
                      Bạn chịu trách nhiệm bảo mật thông tin tài khoản và thông báo ngay cho chúng tôi 
                      nếu phát hiện bất kỳ hoạt động trái phép nào.
                    </p>
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
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Đặt Xe và Thanh Toán</h2>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p><strong>4.1. Đặt xe:</strong></p>
                    <ul className="pl-4 space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Đơn đặt xe được xác nhận khi bạn nhận được thông báo xác nhận từ chúng tôi</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Giá cả được hiển thị rõ ràng trước khi xác nhận đặt xe</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Chúng tôi có quyền từ chối đơn đặt nếu không đáp ứng được yêu cầu</p>
                      </li>
                    </ul>
                    <p className="mt-4"><strong>4.2. Thanh toán:</strong></p>
                    <ul className="pl-4 space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Thanh toán có thể thực hiện bằng tiền mặt, chuyển khoản, hoặc thẻ</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Giá cả đã bao gồm thuế VAT (nếu có) và phí dịch vụ</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Phí phát sinh (cầu đường, đỗ xe) sẽ được thông báo và tính thêm</p>
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
                  <XCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Hủy và Hoàn Tiền</h2>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p><strong>5.1. Hủy đơn từ phía khách hàng:</strong></p>
                    <ul className="pl-4 space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Hủy trước 24 giờ: Hoàn tiền 100% (trừ phí giao dịch nếu có)</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Hủy trong vòng 24 giờ: Hoàn tiền 50%</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Hủy sau khi tài xế đã đến điểm đón: Không hoàn tiền</p>
                      </li>
                    </ul>
                    <p className="mt-4"><strong>5.2. Hủy đơn từ phía chúng tôi:</strong></p>
                    <p>
                      Nếu chúng tôi không thể thực hiện đơn đặt xe do lỗi kỹ thuật hoặc lý do khách quan, 
                      chúng tôi sẽ hoàn tiền 100% hoặc sắp xếp phương án thay thế.
                    </p>
                    <p className="mt-4">
                      Chi tiết về chính sách hoàn tiền, vui lòng xem tại 
                      <a href="/hoan-tien" className="text-blue-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer ml-1">
                        Chính sách hoàn tiền
                      </a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-lg p-2 shrink-0 mt-1">
                  <AlertTriangle className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">6. Trách Nhiệm và Giới Hạn</h2>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p><strong>6.1. Trách nhiệm của chúng tôi:</strong></p>
                    <ul className="pl-4 space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Cung cấp dịch vụ đúng giờ và đảm bảo chất lượng</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Xe sạch sẽ, an toàn và tài xế có bằng lái hợp lệ</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Bảo hiểm đầy đủ cho hành khách và hành lý</p>
                      </li>
                    </ul>
                    <p className="mt-4"><strong>6.2. Trách nhiệm của khách hàng:</strong></p>
                    <ul className="pl-4 space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Cung cấp thông tin chính xác khi đặt xe</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Có mặt đúng giờ tại điểm đón</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Thanh toán đầy đủ theo thỏa thuận</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Tuân thủ quy định an toàn giao thông</p>
                      </li>
                    </ul>
                    <p className="mt-4">
                      <strong>6.3. Giới hạn trách nhiệm:</strong> Chúng tôi không chịu trách nhiệm cho 
                      các thiệt hại gián tiếp, tổn thất lợi nhuận, hoặc các thiệt hại khác phát sinh từ 
                      việc sử dụng dịch vụ, trừ khi do lỗi cố ý hoặc sơ suất nghiêm trọng của chúng tôi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-lg p-2 shrink-0 mt-1">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">7. Sở Hữu Trí Tuệ</h2>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p>
                      Tất cả nội dung trên website và ứng dụng của Tây Ninh Car, bao gồm logo, văn bản, 
                      hình ảnh, thiết kế, đều thuộc quyền sở hữu của chúng tôi hoặc được cấp phép sử dụng. 
                      Bạn không được sao chép, sử dụng hoặc phân phối bất kỳ nội dung nào mà không có sự 
                      cho phép bằng văn bản của chúng tôi.
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
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">8. Thay Đổi Điều Khoản</h2>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p>
                      Chúng tôi có quyền thay đổi, bổ sung hoặc cập nhật các điều khoản này bất cứ lúc nào. 
                      Các thay đổi sẽ có hiệu lực ngay sau khi được đăng tải trên website. Việc bạn tiếp tục 
                      sử dụng dịch vụ sau khi có thay đổi được coi là bạn đã chấp nhận các điều khoản mới.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 9 */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-lg p-2 shrink-0 mt-1">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">9. Luật Áp Dụng và Giải Quyết Tranh Chấp</h2>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p>
                      Các điều khoản này được điều chỉnh bởi pháp luật Việt Nam. Mọi tranh chấp phát sinh 
                      sẽ được giải quyết thông qua thương lượng. Nếu không đạt được thỏa thuận, tranh chấp 
                      sẽ được đưa ra Tòa án có thẩm quyền tại Tây Ninh, Việt Nam.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 10 */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-lg p-2 shrink-0 mt-1">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">10. Liên Hệ</h2>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p>
                      Nếu bạn có bất kỳ câu hỏi nào về các điều khoản này, vui lòng liên hệ với chúng tôi:
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

