'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface PriceRangeSliderProps {
  min: number
  max: number
  value: [number, number]
  onChange: (value: [number, number]) => void
  step?: number
  className?: string
}

export function PriceRangeSlider({
  min,
  max,
  value,
  onChange,
  step = 50,
  className,
}: PriceRangeSliderProps) {
  const [minValue, maxValue] = value
  const [activeSlider, setActiveSlider] = React.useState<'min' | 'max' | null>(null)
  const sliderRef = React.useRef<HTMLDivElement>(null)
  const range = max - min

  const getPercentage = (val: number) => ((val - min) / range) * 100

  const handleMinSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Math.min(Math.max(Number(e.target.value), min), maxValue - step)
    onChange([newMin, maxValue])
  }

  const handleMaxSliderChange = (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLInputElement>) => {
    const rawValue = Number((e.target as HTMLInputElement).value)
    let newMax = Math.min(rawValue, max)
    
    // Always allow reaching the absolute max value
    // If we're very close to max (within step), use max directly
    // Otherwise, round to nearest step for better UX, but ensure we can always reach max
    if (newMax >= max - step / 2) {
      newMax = max
    } else {
      // Round to nearest step for consistency with min slider
      newMax = Math.round(newMax / step) * step
      // Ensure minimum separation from minValue
      if (newMax < minValue + step) {
        newMax = minValue + step
      }
      // Ensure we don't exceed max
      newMax = Math.min(newMax, max)
    }
    
    onChange([minValue, newMax])
  }

  const minPercent = getPercentage(minValue)
  const maxPercent = getPercentage(maxValue)

  // Improved z-index logic: active slider always on top
  // When not active, use alternating z-index based on handle positions to ensure both are accessible
  const getMinZIndex = () => {
    if (activeSlider === 'min') return 30
    if (activeSlider === 'max') return 15
    // When both are inactive, prioritize based on position to avoid conflicts
    return minPercent < maxPercent - 10 ? 25 : 20
  }

  const getMaxZIndex = () => {
    if (activeSlider === 'max') return 30
    if (activeSlider === 'min') return 15
    // When both are inactive, prioritize based on position to avoid conflicts
    return maxPercent > minPercent + 10 ? 25 : 20
  }

  // Handle mouse/touch events more reliably
  const handleMinMouseDown = () => {
    setActiveSlider('min')
  }

  const handleMaxMouseDown = () => {
    setActiveSlider('max')
  }

  const handleMouseUp = () => {
    // Reset active state after a brief delay to ensure drag completes
    setTimeout(() => {
      setActiveSlider(null)
    }, 150)
  }

  const handleMouseLeave = () => {
    setActiveSlider(null)
  }

  return (
    <div className={cn('w-full', className)}>
      {/* Slider Track Container - Aligned to match h-11 (44px) of select inputs */}
      <div 
        ref={sliderRef} 
        className="relative price-range-slider h-11 flex items-center"
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchEnd={handleMouseUp}
      >
        {/* Background Track */}
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 rounded-full -translate-y-1/2"></div>
        
        {/* Active Range Track */}
        <div
          className="absolute top-1/2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full -translate-y-1/2 transition-all duration-200 shadow-sm pointer-events-none"
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
          }}
        ></div>

        {/* Min Slider */}
        <input
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={handleMinSliderChange}
          onMouseDown={handleMinMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMinMouseDown}
          onTouchEnd={handleMouseUp}
          step={step}
          className="absolute top-1/2 left-0 w-full bg-transparent cursor-pointer -translate-y-1/2"
          style={{ zIndex: getMinZIndex(), height: '24px' }}
        />

        {/* Max Slider - Use step=1 to allow reaching exact max value even if not aligned with main step */}
        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={handleMaxSliderChange}
          onInput={handleMaxSliderChange}
          onMouseDown={handleMaxMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMaxMouseDown}
          onTouchEnd={handleMouseUp}
          step={1}
          className="absolute top-1/2 left-0 w-full bg-transparent cursor-pointer -translate-y-1/2"
          style={{ zIndex: getMaxZIndex(), height: '24px' }}
        />
      </div>

      {/* Min/Max Labels - Positioned below the slider track */}
      <div className="flex items-center justify-between text-xs text-slate-500 mt-1.5">
        <span className="font-medium">{min.toLocaleString('vi-VN')}K</span>
        <span className="font-medium">{max.toLocaleString('vi-VN')}K</span>
      </div>
    </div>
  )
}

