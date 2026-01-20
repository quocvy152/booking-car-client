'use client'

import * as React from 'react'
// @ts-ignore - rc-slider types may not be available
import Slider from 'rc-slider'
import { cn } from '@/lib/utils'
import 'rc-slider/assets/index.css'

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
  const handleChange = (newValue: number | number[]) => {
    if (Array.isArray(newValue) && newValue.length === 2) {
      onChange([newValue[0], newValue[1]])
    }
  }

  return (
    <div className={cn('w-full', className)}>
      {/* Slider Container - Aligned to match h-11 (44px) of select inputs */}
      <div className="relative h-11 flex items-center px-1">
        <Slider
          range
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          step={step}
          allowCross={false}
          pushable={step}
          trackStyle={[
            {
              backgroundColor: 'transparent',
              height: '8px',
            },
          ]}
          railStyle={{
            backgroundColor: '#e2e8f0',
            height: '8px',
            borderRadius: '9999px',
          }}
          handleStyle={[
            {
              width: '24px',
              height: '24px',
              border: '3px solid #3b82f6',
              backgroundColor: 'white',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15), 0 0 0 4px rgba(59, 130, 246, 0.1)',
              cursor: 'grab',
              marginTop: '-8px',
              opacity: 1,
            },
            {
              width: '24px',
              height: '24px',
              border: '3px solid #3b82f6',
              backgroundColor: 'white',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15), 0 0 0 4px rgba(59, 130, 246, 0.1)',
              cursor: 'grab',
              marginTop: '-8px',
              opacity: 1,
            },
          ]}
          activeDotStyle={{
            display: 'none',
          }}
        />
        
        {/* Active Range Track Overlay - Positioned to align with handles */}
        <div
          className="absolute top-1/2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full -translate-y-1/2 pointer-events-none transition-all duration-200 shadow-sm"
          style={{
            left: `calc(${((value[0] - min) / (max - min)) * 100}% + 12px)`,
            width: `calc(${((value[1] - value[0]) / (max - min)) * 100}% - 24px)`,
          }}
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
