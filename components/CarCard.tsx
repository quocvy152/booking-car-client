'use client'

import { Badge } from '@/components/ui/badge'
import { Fuel, Gauge, Heart, MapPin, Star, Users, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export interface Car {
  id: string
  name: string
  year: number
  image: string
  transmission: 'automatic' | 'manual'
  seats: number
  fuel: 'gasoline' | 'diesel' | 'electric'
  location: string
  rating: number
  trips: number
  pricePerDay: number
  originalPrice?: number
  discount?: number
  shortTermPrice?: number
  shortTermHours?: number
  featured?: boolean
  noCollateral?: boolean
  isFavorite?: boolean
}

interface CarCardProps {
  car: Car
}

function CarCard({ car }: CarCardProps) {
  const transmissionText = car.transmission === 'automatic' ? 'Số tự động' : 'Số sàn'
  const fuelText = car.fuel === 'gasoline' ? 'Xăng' : car.fuel === 'diesel' ? 'Dầu' : 'Điện'

  return (
    <Link 
      href={`/xe/${car.id}`}
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-200 flex flex-col h-full"
    >
      {/* Image Section */}
      <div className="relative w-full h-36 bg-gray-100 overflow-hidden">
        <Image
          src={car.image}
          alt={car.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        
        {/* Featured Badge - Top Left */}
        {car.featured && (
          <div className="absolute top-2 left-2 z-10">
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-full p-1">
              <Zap className="h-3 w-3 text-yellow-400" fill="currentColor" />
            </div>
          </div>
        )}

        {/* Favorite Icon - Top Right */}
        <div className="absolute top-2 right-2 z-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-1.5 shadow-sm">
            <Heart
              className={`h-3.5 w-3.5 ${
                car.isFavorite
                  ? 'text-red-500 fill-red-500'
                  : 'text-slate-700'
              }`}
              fill="currentColor"
            />
          </div>
        </div>

        {/* Discount Badge - Bottom Right */}
        {car.discount && car.discount > 0 && (
          <div className="absolute bottom-2 right-2 z-10">
            <div className="bg-orange-500 rounded-md px-2 py-1 shadow-lg">
              <span className="text-white font-bold text-xs">-{car.discount}%</span>
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-3 flex-1 flex flex-col space-y-2">
        {/* Badges Row */}
        <div className="flex items-center gap-2 flex-wrap">
          {car.noCollateral && (
            <Badge 
              variant="outline" 
              className="bg-green-50 border-green-200 text-green-700 border-dashed text-[10px] px-1.5 py-0.5 h-5"
            >
              <div className="w-1 h-1 rounded-full bg-green-500 mr-1" />
              Miễn thế chấp
            </Badge>
          )}
        </div>

        {/* Car Name */}
        <h3 className="font-bold text-sm text-slate-900 leading-tight line-clamp-2">
          {car.name.toUpperCase()} {car.year}
        </h3>

        {/* Features - Compact */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
          <div className="flex items-center gap-1">
            <Gauge className="h-3 w-3 text-slate-500" />
            <span>{transmissionText}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3 text-slate-500" />
            <span>{car.seats} chỗ</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel className="h-3 w-3 text-slate-500" />
            <span>{fuelText}</span>
          </div>
        </div>

        {/* Location - Compact */}
        <div className="flex items-center gap-1 text-xs text-slate-600">
          <MapPin className="h-3 w-3 text-slate-500 flex-shrink-0" />
          <span className="truncate">{car.location}</span>
        </div>

        {/* Rating and Trips - Compact */}
        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
            <span className="font-semibold text-slate-900">{car.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-slate-600">
            <div className="w-3 h-3 rounded bg-green-100 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded bg-green-500" />
            </div>
            <span>{car.trips} chuyến</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="pt-2 mt-auto border-t border-gray-100">
          <div className="flex items-baseline gap-1.5 flex-wrap">
            {car.originalPrice && car.originalPrice > car.pricePerDay && (
              <span className="text-xs text-slate-400 line-through">
                {car.originalPrice.toLocaleString('vi-VN')}K
              </span>
            )}
            <span className="text-lg font-bold text-green-600">
              {car.pricePerDay.toLocaleString('vi-VN')}K/ngày
            </span>
          </div>
          {car.shortTermPrice && car.shortTermHours && (
            <div className="flex items-center gap-1 mt-1 text-xs text-blue-600">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-100 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-blue-500" />
              </div>
              <span>{car.shortTermPrice.toLocaleString('vi-VN')}K/{car.shortTermHours}h</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

export default React.memo(CarCard)