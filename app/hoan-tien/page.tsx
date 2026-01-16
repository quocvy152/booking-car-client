import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { RefreshCw, Clock, CheckCircle2, XCircle, AlertCircle, DollarSign } from 'lucide-react'

export const metadata = {
  title: 'Chính Sách Hoàn Tiền - Tây Ninh Car',
  description: 'Chính sách hoàn tiền và hủy đơn đặt xe của Tây Ninh Car.',
}

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <RefreshCw className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              Chính Sách <span className="text-blue-600">Hoàn Tiền</span>
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
                Tây Ninh Car cam kết đảm bảo quyền lợi của khách hàng. Chính sách hoàn tiền này quy định 
                các trường hợp và điều kiện hoàn tiền khi bạn hủy đơn đặt xe hoặc trong các tình huống đặc biệt.
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-lg p-2 shrink-0 mt-1">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Hủy Đơn Từ Phía Khách Hàng</h2>
                  
                  <div className="space-y-4">
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-green-900 mb-2">Hủy trước 24 giờ</h3>
                          <p className="text-green-800 text-sm">
                            Hoàn tiền <strong>100%</strong> (trừ phí giao dịch nếu có). 
                            Tiền sẽ được hoàn trong vòng 3-5 ngày làm việc.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-yellow-900 mb-2">Hủy trong vòng 24 giờ</h3>
                          <p className="text-yellow-800 text-sm">
                            Hoàn tiền <strong>50%</strong> do đã sắp xếp tài xế và phương tiện. 
                            Tiền sẽ được hoàn trong vòng 3-5 ngày làm việc.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                      <div className="flex items-start space-x-3">
                        <XCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-red-900 mb-2">Hủy sau khi tài xế đã đến điểm đón</h3>
                          <p className="text-red-800 text-sm">
                            <strong>Không hoàn tiền</strong> do tài xế đã di chuyển đến điểm đón và 
                            đã dành thời gian chờ đợi.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                    <p className="text-sm text-slate-600">
                      <strong>Lưu ý:</strong> Thời gian tính từ thời điểm đặt xe đến thời điểm bạn yêu cầu hủy. 
                      Vui lòng liên hệ hotline để được hỗ trợ hủy đơn.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-lg p-2 shrink-0 mt-1">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Hủy Đơn Từ Phía Chúng Tôi</h2>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p>
                      Trong các trường hợp sau, chúng tôi sẽ hoàn tiền <strong>100%</strong> hoặc sắp xếp 
                      phương án thay thế:
                    </p>
                    <ul className="pl-4 space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Không thể sắp xếp được xe do lỗi hệ thống hoặc quá tải</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Xe gặp sự cố kỹ thuật không thể khắc phục kịp thời</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Tài xế không thể đến đúng giờ do tai nạn, thiên tai, hoặc lý do bất khả kháng</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Thông tin đặt xe không chính xác do lỗi của chúng tôi</p>
                      </li>
                    </ul>
                    <p className="mt-4">
                      Chúng tôi sẽ liên hệ với bạn ngay khi phát hiện vấn đề và thông báo phương án xử lý.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-lg p-2 shrink-0 mt-1">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Phương Thức Hoàn Tiền</h2>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p><strong>3.1. Thời gian xử lý:</strong></p>
                    <ul className="pl-4 space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Xác nhận yêu cầu hoàn tiền: Trong vòng 24 giờ</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Hoàn tiền vào tài khoản: 3-5 ngày làm việc (tùy ngân hàng)</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Hoàn tiền mặt: Ngay khi hủy đơn (nếu đã thanh toán tiền mặt)</p>
                      </li>
                    </ul>
                    <p className="mt-4"><strong>3.2. Phương thức hoàn tiền:</strong></p>
                    <ul className="pl-4 space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p><strong>Chuyển khoản:</strong> Hoàn về tài khoản ngân hàng bạn đã thanh toán</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p><strong>Thẻ tín dụng/Ghi nợ:</strong> Hoàn về thẻ đã thanh toán (có thể mất 5-10 ngày)</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p><strong>Tiền mặt:</strong> Hoàn trực tiếp hoặc chuyển khoản theo yêu cầu</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p><strong>Ví điện tử:</strong> Hoàn về ví đã thanh toán</p>
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
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Các Trường Hợp Không Được Hoàn Tiền</h2>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p>Chúng tôi không hoàn tiền trong các trường hợp sau:</p>
                    <ul className="pl-4 space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-red-600 font-semibold">•</span>
                        <p>Khách hàng cung cấp thông tin sai dẫn đến không thể thực hiện chuyến đi</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-600 font-semibold">•</span>
                        <p>Khách hàng không có mặt tại điểm đón đúng giờ đã hẹn (quá 15 phút)</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-600 font-semibold">•</span>
                        <p>Khách hàng từ chối sử dụng dịch vụ sau khi tài xế đã đến</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-600 font-semibold">•</span>
                        <p>Hủy đơn do lý do cá nhân sau khi tài xế đã bắt đầu di chuyển đến điểm đón</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-600 font-semibold">•</span>
                        <p>Vi phạm quy định an toàn hoặc có hành vi không phù hợp</p>
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
                  <RefreshCw className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Đổi Lịch Thay Vì Hủy</h2>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p>
                      Thay vì hủy đơn, bạn có thể yêu cầu đổi lịch. Chúng tôi sẽ cố gắng sắp xếp lại 
                      chuyến đi cho bạn mà không mất phí (nếu có xe và tài xế phù hợp):
                    </p>
                    <ul className="pl-4 space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Đổi lịch trước 24 giờ: Miễn phí</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Đổi lịch trong vòng 24 giờ: Có thể phát sinh phí tùy tình huống</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <p>Đổi điểm đón/điểm đến: Có thể điều chỉnh giá nếu khoảng cách thay đổi</p>
                      </li>
                    </ul>
                    <p className="mt-4">
                      Vui lòng liên hệ hotline để được hỗ trợ đổi lịch nhanh chóng.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-lg p-2 shrink-0 mt-1">
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">6. Phí Giao Dịch</h2>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p>
                      Nếu bạn đã thanh toán qua thẻ tín dụng, thẻ ghi nợ, hoặc ví điện tử, phí giao dịch 
                      (nếu có) sẽ không được hoàn lại. Phí này được tính bởi bên thứ ba (ngân hàng, 
                      công ty thanh toán) và không nằm trong quyền kiểm soát của chúng tôi.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                      <p className="text-sm text-blue-900">
                        <strong>Ví dụ:</strong> Nếu bạn thanh toán 1.000.000 VNĐ và phí giao dịch là 10.000 VNĐ, 
                        khi hoàn tiền bạn sẽ nhận lại 990.000 VNĐ (1.000.000 - 10.000).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-lg p-2 shrink-0 mt-1">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">7. Quy Trình Yêu Cầu Hoàn Tiền</h2>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p>Để yêu cầu hoàn tiền, vui lòng thực hiện các bước sau:</p>
                    <ol className="pl-4 space-y-3 list-decimal list-inside">
                      <li>
                        <strong>Liên hệ chúng tôi:</strong> Gọi hotline hoặc gửi email với mã đơn đặt xe
                      </li>
                      <li>
                        <strong>Cung cấp thông tin:</strong> Mã đơn, lý do hủy, thông tin tài khoản nhận hoàn tiền
                      </li>
                      <li>
                        <strong>Xác nhận:</strong> Chúng tôi sẽ xác nhận yêu cầu trong vòng 24 giờ
                      </li>
                      <li>
                        <strong>Xử lý:</strong> Tiền sẽ được hoàn trong 3-5 ngày làm việc
                      </li>
                    </ol>
                    <div className="bg-slate-50 rounded-lg p-4 mt-4">
                      <p className="text-sm text-slate-600">
                        <strong>Lưu ý:</strong> Vui lòng giữ lại mã đơn đặt xe để tra cứu và yêu cầu hoàn tiền.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 8 */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-lg p-2 shrink-0 mt-1">
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">8. Khiếu Nại và Giải Quyết</h2>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p>
                      Nếu bạn không hài lòng với quyết định hoàn tiền hoặc có khiếu nại, vui lòng liên hệ 
                      với chúng tôi. Chúng tôi cam kết xem xét và giải quyết mọi khiếu nại một cách công bằng 
                      và minh bạch.
                    </p>
                    <p>
                      Thời gian giải quyết khiếu nại: Trong vòng 7 ngày làm việc kể từ khi nhận được khiếu nại.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 9 */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-lg p-2 shrink-0 mt-1">
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">9. Liên Hệ</h2>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p>
                      Để yêu cầu hoàn tiền hoặc có câu hỏi về chính sách này, vui lòng liên hệ:
                    </p>
                    <div className="bg-slate-50 rounded-lg p-4 space-y-2">
                      <p><strong>Hotline:</strong> 
                        <a href="tel:0123456789" className="text-blue-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer ml-2">
                          0123 456 789
                        </a>
                        {' / '}
                        <a href="tel:0987654321" className="text-blue-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer">
                          0987 654 321
                        </a>
                      </p>
                      <p><strong>Email:</strong> 
                        <a href="mailto:info@tayninhcar.com" className="text-blue-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer ml-2">
                          info@tayninhcar.com
                        </a>
                      </p>
                      <p><strong>Thời gian hỗ trợ:</strong> 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Lưu Ý Quan Trọng</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    Chính sách hoàn tiền này có thể được cập nhật theo thời gian. Chúng tôi khuyến khích bạn 
                    xem lại chính sách này định kỳ. Việc sử dụng dịch vụ sau khi có cập nhật được coi là bạn 
                    đã chấp nhận các thay đổi.
                  </p>
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

