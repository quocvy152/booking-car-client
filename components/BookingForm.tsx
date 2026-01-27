'use client'

import DatePickerPopover from '@/components/DatePickerPopover'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useLocationAutocomplete } from '@/lib/hooks/useLocationAutocomplete'
import { useRouteCalculation } from '@/lib/hooks/useRouteCalculation'
import { Clock, MapPin, Navigation, Route } from 'lucide-react'
import { useCallback, useState } from 'react'

export default function BookingForm() {
  const [date, setDate] = useState<Date>()
  const [carType, setCarType] = useState('')

  const TIME_DELAY = 3600

  // Use location autocomplete hooks
  const pickupLocation = useLocationAutocomplete()
  const dropoffLocation = useLocationAutocomplete()

  // Use route calculation hook
  const { routeInfo, isLoading: isRouteLoading, error: routeError } = useRouteCalculation({
    pickupCoord: pickupLocation.coordinates,
    dropoffCoord: dropoffLocation.coordinates,
  })

  const formatDistance = useCallback((meters: number): string => {
    if (meters >= 1000) {
      return `${(meters / 1000).toFixed(1)} km`
    }
    return `${Math.round(meters)} m`
  }, [])

  const formatDuration = useCallback((seconds: number): string => {
    const totalMinutes = Math.floor(seconds / 60)
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60

    if (hours > 0) {
      return `${hours} giờ ${minutes} phút`
    }
    return `${minutes} phút`
  }, [])

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      // Handle form submission
      console.log({
        pickupLocation: pickupLocation.value,
        dropoffLocation: dropoffLocation.value,
        date,
        carType,
      })
    },
    [pickupLocation.value, dropoffLocation.value, date, carType]
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Pick-up Location */}
      <div className="space-y-2">
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
            required
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
      <div className="space-y-2">
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
            required
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
        <div className="space-y-2">
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
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-blue-100 p-2">
                    <Route className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Khoảng cách</p>
                    <p className="text-lg font-semibold text-slate-800">
                      {formatDistance(routeInfo.distance)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-indigo-100 p-2">
                    <Clock className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Thời gian dự tính</p>
                    <p className="text-lg font-semibold text-slate-800">
                      {formatDuration(routeInfo.duration + TIME_DELAY)}
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}

      {/* Date Picker */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">
          Ngày đi
        </label>
        <DatePickerPopover date={date} setDate={setDate} />
      </div>

      {/* Car Type */}
      <div className="space-y-2">
        <label htmlFor="carType" className="text-sm font-medium text-slate-700">
          Loại xe
        </label>
        <Select value={carType} onValueChange={setCarType} required>
          <SelectTrigger 
            id="carType"
            className="h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          >
            <SelectValue placeholder="Chọn loại xe">
              {carType === '4-seats' && '4 chỗ'}
              {carType === '7-seats' && '7 chỗ'}
              {carType === '16-seats' && '16 chỗ'}
              {carType === '29-seats' && '29 chỗ'}
              {carType === 'limousine' && 'Limousine'}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="4-seats">4 chỗ</SelectItem>
            <SelectItem value="7-seats">7 chỗ</SelectItem>
            <SelectItem value="16-seats">16 chỗ</SelectItem>
            <SelectItem value="29-seats">29 chỗ</SelectItem>
            <SelectItem value="limousine">Limousine</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-colors duration-200 cursor-pointer shadow-lg hover:shadow-xl"
      >
        Xem giá & Đặt xe
      </Button>
    </form>
  )
}

