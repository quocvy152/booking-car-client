import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Map Placeholder */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        <div className="bg-slate-200 h-64 flex items-center justify-center">
          <div className="text-center text-slate-500">
            <MapPin className="h-12 w-12 mx-auto mb-2" />
            <p className="text-sm">Bản đồ sẽ được tích hợp tại đây</p>
          </div>
        </div>
      </div>

      {/* Quick Contact Info */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
        <h3 className="text-xl font-bold text-slate-900 mb-6">
          Thông Tin Liên Hệ Nhanh
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 rounded-lg p-2 shrink-0">
              <Phone className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Hotline</h4>
              <a 
                href="tel:0123456789" 
                className="text-blue-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer"
              >
                0123 456 789
              </a>
              <span className="text-slate-500 mx-2">|</span>
              <a 
                href="tel:0987654321" 
                className="text-blue-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer"
              >
                0987 654 321
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 rounded-lg p-2 shrink-0">
              <Mail className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
              <a 
                href="mailto:info@tayninhcar.com" 
                className="text-blue-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer"
              >
                info@tayninhcar.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 rounded-lg p-2 shrink-0">
              <Clock className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Thời Gian</h4>
              <p className="text-slate-600 text-sm">
                Phục vụ 24/7 - Chúng tôi luôn sẵn sàng hỗ trợ bạn
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Kết Nối Với Chúng Tôi
        </h3>
        <p className="text-slate-600 text-sm mb-4">
          Theo dõi chúng tôi trên các mạng xã hội để cập nhật thông tin mới nhất
        </p>
        <div className="flex items-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-3 transition-colors duration-200 cursor-pointer"
            aria-label="Facebook"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a
            href="https://zalo.me"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-400 hover:bg-blue-500 text-white rounded-lg p-3 transition-colors duration-200 cursor-pointer"
            aria-label="Zalo"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  )
}
