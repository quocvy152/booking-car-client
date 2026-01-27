'use client'

import * as Icons from 'lucide-react'
import type { Amenity } from '@/types/car'

interface CarAmenitiesProps {
  amenities: Amenity[]
}

// Map icon names to actual icon components
const getIcon = (iconName: string) => {
  const IconComponent = (Icons as any)[iconName]
  return IconComponent || Icons.Check
}

export default function CarAmenities({ amenities }: CarAmenitiesProps) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-slate-900 mb-4">Tiện nghi</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {amenities.map((amenity) => {
          const Icon = getIcon(amenity.icon)
          return (
            <div
              key={amenity.id}
              className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-gray-200"
            >
              <Icon className="h-5 w-5 text-blue-600 flex-shrink-0" />
              <span className="text-sm font-medium text-slate-900">{amenity.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

