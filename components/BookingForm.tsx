'use client'

import { useState } from 'react'
import { MapPin, Navigation } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import DatePickerPopover from '@/components/DatePickerPopover'
import { cn } from '@/lib/utils'

export default function BookingForm() {
  const [pickupLocation, setPickupLocation] = useState('')
  const [dropoffLocation, setDropoffLocation] = useState('')
  const [date, setDate] = useState<Date>()
  const [carType, setCarType] = useState('')

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
            onChange={(e) => setPickupLocation(e.target.value)}
            className="pl-10 h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            required
          />
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
            onChange={(e) => setDropoffLocation(e.target.value)}
            className="pl-10 h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
      </div>

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
              {carType === 'limousine' && 'Limousine'}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="4-seats">4 chỗ</SelectItem>
            <SelectItem value="7-seats">7 chỗ</SelectItem>
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

