'use client'

import { useEffect, useState } from 'react'
import { MapPin, Navigation, Route, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import DatePickerPopover from '@/components/DatePickerPopover'
import { searchLocations, calculateRouteBetweenPoints, ApiError } from '@/lib/api'
import type { NominatimSuggestion, RouteInfo } from '@/lib/api'

export default function BookingForm() {
  const [pickupLocation, setPickupLocation] = useState('')
  const [dropoffLocation, setDropoffLocation] = useState('')
  const [date, setDate] = useState<Date>()
  const [carType, setCarType] = useState('')

  const [pickupSuggestions, setPickupSuggestions] = useState<NominatimSuggestion[]>([])
  const [dropoffSuggestions, setDropoffSuggestions] = useState<NominatimSuggestion[]>([])
  const [isPickupLoading, setIsPickupLoading] = useState(false)
  const [isDropoffLoading, setIsDropoffLoading] = useState(false)
  const [hasPickupSearched, setHasPickupSearched] = useState(false)
  const [hasDropoffSearched, setHasDropoffSearched] = useState(false)

  // Coordinates for route calculation
  const [pickupCoord, setPickupCoord] = useState<{ lat: number; lon: number } | null>(null)
  const [dropoffCoord, setDropoffCoord] = useState<{ lat: number; lon: number } | null>(null)
  const [routeInfo, setRouteInfo] = useState<RouteInfo | null>(null)
  const [isRouteLoading, setIsRouteLoading] = useState(false)
  const [routeError, setRouteError] = useState<string | null>(null)

  const TIME_DELAY = 3600;

  const fetchSuggestions = async (query: string): Promise<NominatimSuggestion[]> => {
    try {
      return await searchLocations(query)
    } catch (error) {
      // Error is already logged in the service
      // Return empty array to prevent UI breakage
      return []
    }
  }

  useEffect(() => {
    if (!pickupLocation || pickupLocation.trim().length < 3) {
      setPickupSuggestions([])
      setHasPickupSearched(false)
      return
    }

    let isCurrent = true
    const controller = new AbortController()

    const timeoutId = window.setTimeout(async () => {
      setIsPickupLoading(true)
      const suggestions = await fetchSuggestions(pickupLocation)
      if (isCurrent) {
        setPickupSuggestions(suggestions)
        setIsPickupLoading(false)
        setHasPickupSearched(true)
      }
    }, 400)

    return () => {
      isCurrent = false
      controller.abort()
      window.clearTimeout(timeoutId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pickupLocation])

  useEffect(() => {
    if (!dropoffLocation || dropoffLocation.trim().length < 3) {
      setDropoffSuggestions([])
      setHasDropoffSearched(false)
      return
    }

    let isCurrent = true
    const controller = new AbortController()

    const timeoutId = window.setTimeout(async () => {
      setIsDropoffLoading(true)
      const suggestions = await fetchSuggestions(dropoffLocation)
      if (isCurrent) {
        setDropoffSuggestions(suggestions)
        setIsDropoffLoading(false)
        setHasDropoffSearched(true)
      }
    }, 400)

    return () => {
      isCurrent = false
      controller.abort()
      window.clearTimeout(timeoutId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dropoffLocation])

  // Fetch route information from OSRM when both coordinates are available
  useEffect(() => {
    const fetchRoute = async () => {
      if (!pickupCoord || !dropoffCoord) {
        setRouteInfo(null)
        setRouteError(null)
        return
      }

      setIsRouteLoading(true)
      setRouteError(null)

      try {
        const route = await calculateRouteBetweenPoints(pickupCoord, dropoffCoord)
        setRouteInfo(route)
      } catch (error) {
        // Error is already logged in the service
        if (error && typeof error === 'object' && 'name' in error && error.name === 'ApiError') {
          setRouteError((error as Error).message)
        } else if (error instanceof Error) {
          setRouteError(error.message)
        } else {
          setRouteError('Lỗi kết nối khi tính toán đường đi')
        }
        setRouteInfo(null)
      } finally {
        setIsRouteLoading(false)
      }
    }

    // Debounce route fetching
    const timeoutId = setTimeout(() => {
      fetchRoute()
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [pickupCoord, dropoffCoord])

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ pickupLocation, dropoffLocation, date, carType })
  }

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
            value={pickupLocation}
            onChange={(e) => {
              setPickupLocation(e.target.value)
              setPickupCoord(null)
              setRouteInfo(null)
            }}
            onBlur={() => {
              // Trì hoãn một chút để cho phép click chọn suggestion
              setTimeout(() => {
                setPickupSuggestions([])
                setHasPickupSearched(false)
              }, 150)
            }}
            className="pl-10 h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            required
          />
          {pickupLocation && pickupLocation.trim().length >= 3 && !isPickupLoading && (pickupSuggestions.length > 0 || hasPickupSearched) && (
            <div className="absolute z-20 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg max-h-64 overflow-y-auto">
              {pickupSuggestions.length > 0 ? (
                pickupSuggestions.map((suggestion) => (
                  <button
                    type="button"
                    key={suggestion.place_id}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-blue-50 cursor-pointer"
                    onMouseDown={(e) => {
                      e.preventDefault()
                      setPickupLocation(suggestion.display_name)
                      setPickupCoord({ lat: suggestion.lat, lon: suggestion.lon })
                      setPickupSuggestions([])
                      setHasPickupSearched(false)
                    }}
                  >
                    {suggestion.display_name}
                  </button>
                ))
              ) : hasPickupSearched ? (
                <div className="px-3 py-2 text-sm text-slate-500 text-center">
                  Không tìm thấy địa chỉ
                </div>
              ) : null}
            </div>
          )}
          {isPickupLoading && (
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
            value={dropoffLocation}
            onChange={(e) => {
              setDropoffLocation(e.target.value)
              setDropoffCoord(null)
              setRouteInfo(null)
            }}
            onBlur={() => {
              setTimeout(() => {
                setDropoffSuggestions([])
                setHasDropoffSearched(false)
              }, 150)
            }}
            className="pl-10 h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            required
          />
          {dropoffLocation && dropoffLocation.trim().length >= 3 && !isDropoffLoading && (dropoffSuggestions.length > 0 || hasDropoffSearched) && (
            <div className="absolute z-20 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg max-h-64 overflow-y-auto">
              {dropoffSuggestions.length > 0 ? (
                dropoffSuggestions.map((suggestion) => (
                  <button
                    type="button"
                    key={suggestion.place_id}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-blue-50 cursor-pointer"
                    onMouseDown={(e) => {
                      e.preventDefault()
                      setDropoffLocation(suggestion.display_name)
                      setDropoffCoord({ lat: suggestion.lat, lon: suggestion.lon })
                      setDropoffSuggestions([])
                      setHasDropoffSearched(false)
                    }}
                  >
                    {suggestion.display_name}
                  </button>
                ))
              ) : hasDropoffSearched ? (
                <div className="px-3 py-2 text-sm text-slate-500 text-center">
                  Không tìm thấy địa chỉ
                </div>
              ) : null}
            </div>
          )}
          {isDropoffLoading && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">
              Đang tìm...
            </div>
          )}
        </div>
      </div>

      {/* Route Information */}
      {pickupCoord && dropoffCoord && (
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

