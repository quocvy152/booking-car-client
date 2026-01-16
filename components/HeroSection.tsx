'use client'

import { useState } from 'react'
import ServiceTabs from '@/components/ServiceTabs'
import BookingForm from '@/components/BookingForm'

export default function HeroSection() {
  const [activeService, setActiveService] = useState<'with-driver' | 'self-drive'>('with-driver')

  return (
    <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Đặt xe Tây Ninh
              <br />
              <span className="text-blue-600">Giá rẻ, Uy tín, Tiết kiệm</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Dịch vụ đặt xe chuyên nghiệp với giá cả minh bạch. 
              Đưa đón sân bay, đi tỉnh, du lịch với tài xế uy tín.
            </p>
          </div>

          {/* Right: Booking Form Card */}
          <div className="w-full">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
              <ServiceTabs onTabChange={setActiveService} />
              {activeService === 'with-driver' && <BookingForm />}
              {activeService === 'self-drive' && (
                <div className="text-center py-12 text-slate-500">
                  <p>Dịch vụ thuê xe tự lái sẽ sớm ra mắt!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

