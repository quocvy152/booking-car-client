'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useLocationAutocomplete } from '@/lib/hooks/useLocationAutocomplete'
import { useRouteCalculation } from '@/lib/hooks/useRouteCalculation'
import type { CarDetail } from '@/types/car'
import { Clock, MapPin, Navigation, Route } from 'lucide-react'
import { useMemo, useState } from 'react'
import DateRangePicker, { DateRange } from './DateRangePicker'

interface CarRentalFormProps {
  car: CarDetail
}

export default function CarRentalForm({ car }: CarRentalFormProps) {
  const [dateRange, setDateRange] = useState<DateRange>({})
  const [pickupTime, setPickupTime] = useState<string>('08:00')
  const [returnTime, setReturnTime] = useState<string>('18:00')

  const TIME_DELAY = 3600

  // Use location autocomplete hooks
  const pickupLocation = useLocationAutocomplete()
  const dropoffLocation = useLocationAutocomplete()

  // Use route calculation hook
  const { routeInfo, isLoading: isRouteLoading, error: routeError } = useRouteCalculation({
    pickupCoord: pickupLocation.coordinates,
    dropoffCoord: dropoffLocation.coordinates,
  })

  // Generate time options (every hour from 00:00 to 23:00)
  const timeOptions = useMemo(() => {
    const times = []
    for (let hour = 0; hour < 24; hour++) {
      const timeString = `${hour.toString().padStart(2, '0')}:00`
      times.push(timeString)
    }
    return times
  }, [])

  // Calculate rental details
  const rentalDetails = useMemo(() => {
    if (!dateRange.from || !dateRange.to) {
      return {
        days: 0,
        totalPrice: 0,
        originalTotal: 0,
        discount: 0,
        discountAmount: 0,
      }
    }

    // Calculate days (including both start and end day)
    const timeDiff = dateRange.to.getTime() - dateRange.from.getTime()
    const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1

    const originalTotal = days * car.pricePerDay
    const discountAmount = car.discount
      ? (originalTotal * car.discount) / 100
      : 0
    const totalPrice = originalTotal - discountAmount

    return {
      days,
      totalPrice,
      originalTotal,
      discount: car.discount || 0,
      discountAmount,
    }
  }, [dateRange, car.pricePerDay, car.discount])

  const formatDistance = (meters: number): string => {
    if (meters >= 1000) {
      return `${(meters / 1000).toFixed(1)} km`
    }
    return `${Math.round(meters)} m`
  }

  const formatDuration = (seconds: number): string => {
    const totalMinutes = Math.floor(seconds / 60)
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60

    if (hours > 0) {
      return `${hours} giờ ${minutes} phút`
    }
    return `${minutes} phút`
  }

  const handleBook = () => {
    // TODO: Implement booking logic
    // Could redirect to booking page or open booking modal
    console.log('Booking:', {
      carId: car.id,
      dateRange,
      pickupTime,
      returnTime,
      rentalDetails,
    })
  }

  const isFormValid = dateRange.from && dateRange.to

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-6 sticky top-24">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Đặt xe</h2>

      {/* Pick-up Location */}
      <div className="space-y-2 mb-4">
        <label htmlFor="pickup" className="text-sm font-medium text-slate-700">
          Điểm đón
        </label>
        <div className="relative">
          <Navigation className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <Input
            id="pickup"
            type="text"
            placeholder="Nhập điểm đón"
            value={pickupLocation.value}
            onChange={pickupLocation.handleChange}
            onBlur={pickupLocation.handleBlur}
            className="pl-10 h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
          {pickupLocation.value &&
            pickupLocation.value.trim().length >= 3 &&
            !pickupLocation.isLoading &&
            (pickupLocation.suggestions.length > 0 || pickupLocation.hasSearched) && (
              <div className="absolute z-20 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg max-h-64 overflow-y-auto">
                {pickupLocation.suggestions.length > 0 ? (
                  pickupLocation.suggestions.map((suggestion) => (
                    <button
                      type="button"
                      key={suggestion.place_id}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-blue-50 cursor-pointer"
                      onMouseDown={(e) => {
                        e.preventDefault()
                        pickupLocation.handleSelect(suggestion)
                      }}
                    >
                      {suggestion.display_name}
                    </button>
                  ))
                ) : pickupLocation.hasSearched ? (
                  <div className="px-3 py-2 text-sm text-slate-500 text-center">
                    Không tìm thấy địa chỉ
                  </div>
                ) : null}
              </div>
            )}
          {pickupLocation.isLoading && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">
              Đang tìm...
            </div>
          )}
        </div>
      </div>

      {/* Drop-off Location */}
      <div className="space-y-2 mb-4">
        <label htmlFor="dropoff" className="text-sm font-medium text-slate-700">
          Điểm đến
        </label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <Input
            id="dropoff"
            type="text"
            placeholder="Nhập điểm đến"
            value={dropoffLocation.value}
            onChange={dropoffLocation.handleChange}
            onBlur={dropoffLocation.handleBlur}
            className="pl-10 h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
          {dropoffLocation.value &&
            dropoffLocation.value.trim().length >= 3 &&
            !dropoffLocation.isLoading &&
            (dropoffLocation.suggestions.length > 0 || dropoffLocation.hasSearched) && (
              <div className="absolute z-20 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg max-h-64 overflow-y-auto">
                {dropoffLocation.suggestions.length > 0 ? (
                  dropoffLocation.suggestions.map((suggestion) => (
                    <button
                      type="button"
                      key={suggestion.place_id}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-blue-50 cursor-pointer"
                      onMouseDown={(e) => {
                        e.preventDefault()
                        dropoffLocation.handleSelect(suggestion)
                      }}
                    >
                      {suggestion.display_name}
                    </button>
                  ))
                ) : dropoffLocation.hasSearched ? (
                  <div className="px-3 py-2 text-sm text-slate-500 text-center">
                    Không tìm thấy địa chỉ
                  </div>
                ) : null}
              </div>
            )}
          {dropoffLocation.isLoading && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">
              Đang tìm...
            </div>
          )}
        </div>
      </div>

      {/* Route Information */}
      {pickupLocation.coordinates && dropoffLocation.coordinates && (
        <div className="space-y-2 mb-6">
          <div className="rounded-lg border border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 shadow-sm">
            {isRouteLoading ? (
              <div className="flex items-center justify-center space-x-2 text-slate-600">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
                <span className="text-sm font-medium">Đang tính toán đường đi...</span>
              </div>
            ) : routeError ? (
              <div className="flex items-center space-x-2 text-red-600">
                <Route className="w-5 h-5" />
                <span className="text-sm font-medium">{routeError}</span>
              </div>
            ) : routeInfo ? (
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-blue-100 p-1.5 flex-shrink-0">
                    <Route className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 leading-tight">Khoảng cách</p>
                    <p className="text-sm font-semibold text-slate-800 leading-tight">
                      {formatDistance(routeInfo.distance)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-indigo-100 p-1.5 flex-shrink-0">
                    <Clock className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 leading-tight">Thời gian dự tính</p>
                    <p className="text-sm font-semibold text-slate-800 leading-tight">
                      {formatDuration(routeInfo.duration + TIME_DELAY)}
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}

      {/* Date Range Picker */}
      <div className="mb-6">
        <DateRangePicker
          dateRange={dateRange}
          setDateRange={setDateRange}
        />
      </div>

      {/* Time Pickers */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Pickup Time */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Giờ nhận xe
          </label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 z-10 pointer-events-none" />
            <Select value={pickupTime} onValueChange={setPickupTime}>
              <SelectTrigger className="pl-10 h-12">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {timeOptions.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Return Time */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Giờ trả xe
          </label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 z-10 pointer-events-none" />
            <Select value={returnTime} onValueChange={setReturnTime}>
              <SelectTrigger className="pl-10 h-12">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {timeOptions.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Price Summary */}
      {isFormValid && (
        <div className="mb-6 p-4 bg-slate-50 rounded-lg border border-gray-200 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Số ngày thuê:</span>
            <span className="font-semibold text-slate-900">
              {rentalDetails.days} ngày
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Giá/ngày:</span>
            <span className="font-semibold text-slate-900">
              {car.pricePerDay.toLocaleString('vi-VN')}K
            </span>
          </div>
          {rentalDetails.discount > 0 && (
            <>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Giảm giá ({rentalDetails.discount}%):</span>
                <span className="font-semibold text-green-600">
                  -{rentalDetails.discountAmount.toLocaleString('vi-VN')}K
                </span>
              </div>
              <div className="pt-2 border-t border-gray-200">
                <div className="flex justify-between text-sm line-through text-slate-400">
                  <span>Tổng tiền:</span>
                  <span>{rentalDetails.originalTotal.toLocaleString('vi-VN')}K</span>
                </div>
              </div>
            </>
          )}
          <div className="pt-2 border-t border-gray-300">
            <div className="flex justify-between">
              <span className="text-lg font-semibold text-slate-900">Tổng tiền:</span>
              <span className="text-2xl font-bold text-green-600">
                {rentalDetails.totalPrice.toLocaleString('vi-VN')}K
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Book Button */}
      <Button
        onClick={handleBook}
        disabled={!isFormValid}
        className="w-full h-14 text-lg font-semibold"
      >
        Đặt xe ngay
      </Button>

      {/* Additional Info */}
      {car.noCollateral && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-2 text-sm text-green-700">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>Miễn thế chấp</span>
          </div>
        </div>
      )}
    </div>
  )
}

