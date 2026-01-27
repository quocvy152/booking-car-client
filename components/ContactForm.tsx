'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle2, MessageCircle, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactForm() {
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
  )
}
