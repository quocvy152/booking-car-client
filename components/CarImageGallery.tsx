'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CarImageModal from './CarImageModal'

interface CarImageGalleryProps {
  images: string[]
  carName: string
}

export default function CarImageGallery({ images, carName }: CarImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const mainImage = images[selectedIndex] || images[0]
  const thumbnails = images.slice(0, 4) // Show first 4 as thumbnails

  const handleThumbnailClick = (index: number) => {
    setSelectedIndex(index)
  }

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
  }

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
  }

  return (
    <>
      <div className="space-y-4">
        {/* Main Image */}
        <div className="relative w-full aspect-video bg-gray-100 rounded-xl overflow-hidden group">
          <Image
            src={mainImage}
            alt={`${carName} - Hình ảnh ${selectedIndex + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
            priority
          />
          
          {/* Navigation Arrows - Desktop */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                aria-label="Ảnh trước"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                aria-label="Ảnh sau"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {/* Mobile Navigation - Swipe indicators */}
          {images.length > 1 && (
            <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    index === selectedIndex
                      ? 'w-6 bg-white'
                      : 'w-2 bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Xem ảnh ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {thumbnails.length > 1 && (
          <div className="grid grid-cols-4 gap-2">
            {thumbnails.map((image, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === selectedIndex
                    ? 'border-blue-600 ring-2 ring-blue-200'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                aria-label={`Chọn ảnh ${index + 1}`}
              >
                <Image
                  src={image}
                  alt={`${carName} - Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 25vw, 16vw"
                />
                {index === selectedIndex && (
                  <div className="absolute inset-0 bg-blue-600/10" />
                )}
              </button>
            ))}
          </div>
        )}

        {/* View All Images Button */}
        {images.length > 4 && (
          <Button
            onClick={() => setIsModalOpen(true)}
            variant="outline"
            className="w-full"
          >
            Xem tất cả {images.length} ảnh
          </Button>
        )}
      </div>

      {/* Image Modal */}
      <CarImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={images}
        initialIndex={selectedIndex}
        carName={carName}
      />
    </>
  )
}

