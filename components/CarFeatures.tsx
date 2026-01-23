'use client'

import { Gauge, Users, Fuel, Calendar } from 'lucide-react'
import type { Car } from '@/components/CarCard'

interface CarFeaturesProps {
  car: Car
}

export default function CarFeatures({ car }: CarFeaturesProps) {
  const transmissionText = car.transmission === 'automatic' ? 'Số tự động' : 'Số sàn'
  const fuelText = car.fuel === 'gasoline' ? 'Xăng' : car.fuel === 'diesel' ? 'Dầu' : 'Điện'

  const features = [
    {
      icon: Gauge,
      label: 'Hộp số',
      value: transmissionText,
    },
    {
      icon: Users,
      label: 'Số chỗ',
      value: `${car.seats} chỗ`,
    },
    {
      icon: Fuel,
      label: 'Nhiên liệu',
      value: fuelText,
    },
    {
      icon: Calendar,
      label: 'Năm sản xuất',
      value: car.year.toString(),
    },
  ]

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-slate-900 mb-4">Đặc điểm xe</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-lg border border-gray-200"
            >
              <Icon className="h-6 w-6 text-blue-600 mb-2" />
              <span className="text-xs text-slate-600 mb-1">{feature.label}</span>
              <span className="text-sm font-semibold text-slate-900">{feature.value}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

