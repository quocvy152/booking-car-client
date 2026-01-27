import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import PageLayout from '@/components/PageLayout'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

export const metadata = {
  title: 'Liên Hệ - Tây Ninh Car',
  description: 'Liên hệ với Tây Ninh Car để được tư vấn và đặt xe. Hotline 24/7, email và địa chỉ liên hệ.',
}

export default function ContactPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            <span className="text-blue-600">Liên Hệ</span> Với Chúng Tôi
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. 
            Hãy liên hệ với chúng tôi qua bất kỳ kênh nào bạn cảm thấy tiện lợi nhất.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200 text-center cursor-pointer hover:shadow-xl transition-shadow duration-200">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Điện Thoại</h3>
            <a 
              href="tel:0123456789" 
              className="text-blue-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer block mb-1"
            >
              0123 456 789
            </a>
            <a 
              href="tel:0987654321" 
              className="text-blue-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer block"
            >
              0987 654 321
            </a>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200 text-center cursor-pointer hover:shadow-xl transition-shadow duration-200">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
            <a 
              href="mailto:info@tayninhcar.com" 
              className="text-blue-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer"
            >
              info@tayninhcar.com
            </a>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200 text-center cursor-pointer hover:shadow-xl transition-shadow duration-200">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Địa Chỉ</h3>
            <p className="text-slate-600 text-sm">
              Tây Ninh, Việt Nam
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200 text-center cursor-pointer hover:shadow-xl transition-shadow duration-200">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Giờ Làm Việc</h3>
            <p className="text-slate-600 text-sm">
              24/7 - Phục vụ mọi lúc
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <ContactForm />

          {/* Map & Additional Info */}
          <ContactInfo />
        </div>
      </section>
    </PageLayout>
  )
}
