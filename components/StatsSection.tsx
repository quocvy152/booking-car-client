'use client'

import { useState, useEffect, useRef } from 'react'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
}

function AnimatedCounter({ 
  value, 
  suffix = '', 
  duration = 2000
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const startValue = 0
    const endValue = value

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentValue = startValue + (endValue - startValue) * easeOut

      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(endValue)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, value, duration])

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      const thousands = Math.floor(num / 1000)
      return `${thousands}K`
    }
    return Math.floor(num).toString()
  }

  return (
    <div ref={counterRef} className="text-4xl sm:text-5xl font-bold mb-2">
      {formatNumber(count)}{suffix}
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 md:p-12 text-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Thành Tựu Của Chúng Tôi
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <AnimatedCounter value={10} suffix="+" />
            <div className="text-blue-100">Năm kinh nghiệm</div>
          </div>
          <div className="text-center">
            <AnimatedCounter value={50} suffix="+" />
            <div className="text-blue-100">Xe trong đội</div>
          </div>
          <div className="text-center">
            <AnimatedCounter value={10000} suffix="+" />
            <div className="text-blue-100">Khách hàng hài lòng</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold mb-2">24/7</div>
            <div className="text-blue-100">Hỗ trợ khách hàng</div>
          </div>
        </div>
      </div>
    </section>
  )
}

