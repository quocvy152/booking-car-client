'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Send,
  CheckCircle2
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
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
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-100 rounded-lg p-2">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Gửi Tin Nhắn</h2>
              </div>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    Gửi thành công!
                  </h3>
                  <p className="text-green-700">
                    Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất có thể.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nhập họ và tên của bạn"
                      className="w-full"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Số điện thoại <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0123 456 789"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Chủ đề <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Nhập chủ đề"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Nội dung tin nhắn <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Nhập nội dung tin nhắn của bạn..."
                      rows={6}
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 cursor-pointer py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Gửi tin nhắn
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Map & Additional Info */}
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

