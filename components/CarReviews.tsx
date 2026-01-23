'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, ThumbsUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Review } from '@/types/car'

interface CarReviewsProps {
  reviews: Review[]
}

export default function CarReviews({ reviews }: CarReviewsProps) {
  const [helpfulCounts, setHelpfulCounts] = useState<Record<string, number>>(
    reviews.reduce((acc, review) => {
      acc[review.id] = review.helpful
      return acc
    }, {} as Record<string, number>)
  )

  const handleHelpful = (reviewId: string) => {
    setHelpfulCounts((prev) => ({
      ...prev,
      [reviewId]: (prev[reviewId] || 0) + 1,
    }))
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating
            ? 'text-yellow-500 fill-yellow-500'
            : 'text-gray-300'
        }`}
      />
    ))
  }

  if (reviews.length === 0) {
    return (
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-4">Đánh giá</h3>
        <p className="text-slate-600">Chưa có đánh giá nào cho xe này.</p>
      </div>
    )
  }

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-slate-900 mb-6">
        Đánh giá ({reviews.length})
      </h3>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
            <div className="flex items-start gap-4 mb-3">
              {/* Avatar */}
              <div className="flex-shrink-0">
                {review.avatar ? (
                  <Image
                    src={review.avatar}
                    alt={review.user}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">
                      {review.user.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>

              {/* Review Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-slate-900">{review.user}</span>
                  <div className="flex items-center gap-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <p className="text-xs text-slate-500 mb-2">{formatDate(review.date)}</p>
                <p className="text-slate-700 leading-relaxed">{review.comment}</p>

                {/* Helpful Button */}
                <div className="mt-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleHelpful(review.id)}
                    className="h-8 text-xs"
                  >
                    <ThumbsUp className="h-3 w-3 mr-1" />
                    Hữu ích ({helpfulCounts[review.id] || 0})
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

