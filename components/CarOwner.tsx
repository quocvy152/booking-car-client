'use client'

import Image from 'next/image'
import { Star, CheckCircle2, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Owner } from '@/types/car'

interface CarOwnerProps {
  owner: Owner
}

export default function CarOwner({ owner }: CarOwnerProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-500 fill-yellow-500'
            : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-slate-900 mb-4">Thông tin chủ xe</h3>
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          {owner.avatar ? (
            <Image
              src={owner.avatar}
              alt={owner.name}
              width={64}
              height={64}
              className="rounded-full"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-semibold text-xl">
                {owner.name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>

        {/* Owner Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-semibold text-slate-900">{owner.name}</h4>
            {owner.verified && (
              <CheckCircle2 className="h-5 w-5 text-blue-600" />
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              {renderStars(owner.rating)}
            </div>
            <span className="text-sm font-semibold text-slate-900">
              {owner.rating.toFixed(1)}
            </span>
          </div>

          {/* Contact Info */}
          {(owner.phone || owner.email) && (
            <div className="space-y-2 mb-4">
              {owner.phone && (
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Phone className="h-4 w-4" />
                  <span>{owner.phone}</span>
                </div>
              )}
              {owner.email && (
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Mail className="h-4 w-4" />
                  <span>{owner.email}</span>
                </div>
              )}
            </div>
          )}

          {/* Contact Button */}
          {owner.phone && (
            <Button variant="outline" size="sm" className="w-full sm:w-auto">
              <Phone className="h-4 w-4 mr-2" />
              Liên hệ
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

