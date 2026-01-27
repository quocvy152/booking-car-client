'use client'

import { Calendar as CalendarIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger, usePopover } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

export interface DateRange {
  from?: Date
  to?: Date
}

interface DateRangePickerProps {
  dateRange: DateRange
  setDateRange: (range: DateRange) => void
  pickupLabel?: string
  returnLabel?: string
}

export default function DateRangePicker({ 
  dateRange, 
  setDateRange, 
  pickupLabel = 'Ngày nhận xe',
  returnLabel = 'Ngày trả xe'
}: DateRangePickerProps) {
  const handlePickupDateSelect = (date: Date | undefined) => {
    if (!date) return
    // If return date exists and is before pickup date, clear it
    if (dateRange.to && date > dateRange.to) {
      setDateRange({ from: date, to: undefined })
    } else {
      setDateRange({ ...dateRange, from: date })
    }
  }

  const handleReturnDateSelect = (date: Date | undefined) => {
    if (!date) return
    setDateRange({ ...dateRange, to: date })
  }

  const isPickupDateDisabled = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today
  }

  const isReturnDateDisabled = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (date < today) return true
    // Disable dates before pickup date
    if (dateRange.from) {
      const pickupDate = new Date(dateRange.from)
      pickupDate.setHours(0, 0, 0, 0)
      return date < pickupDate
    }
    return false
  }

  return (
    <div className="space-y-4">
      {/* Pickup Date */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          {pickupLabel}
        </label>
        <Popover>
          <PickupDateContent
            date={dateRange.from}
            onSelect={handlePickupDateSelect}
            isDisabled={isPickupDateDisabled}
            label={pickupLabel}
          />
        </Popover>
      </div>

      {/* Return Date */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          {returnLabel}
        </label>
        <Popover>
          <ReturnDateContent
            date={dateRange.to}
            onSelect={handleReturnDateSelect}
            isDisabled={isReturnDateDisabled}
            label={returnLabel}
            pickupDate={dateRange.from}
          />
        </Popover>
      </div>
    </div>
  )
}

interface DateContentProps {
  date?: Date
  onSelect: (date: Date | undefined) => void
  isDisabled: (date: Date) => boolean
  label: string
}

function PickupDateContent({ date, onSelect, isDisabled, label }: DateContentProps) {
  const { setOpen } = usePopover()

  return (
    <>
      <div className="relative">
        <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 z-10 pointer-events-none" />
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full h-12 justify-start text-left font-normal rounded-lg border-gray-300 pl-10",
              !date && "text-slate-500"
            )}
          >
            {date
              ? date.toLocaleDateString('vi-VN', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
              : label}
          </Button>
        </PopoverTrigger>
      </div>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            onSelect(selectedDate)
            setOpen(false)
          }}
          disabled={isDisabled}
          initialFocus
        />
      </PopoverContent>
    </>
  )
}

interface ReturnDateContentProps extends DateContentProps {
  pickupDate?: Date
}

function ReturnDateContent({ date, onSelect, isDisabled, label, pickupDate }: ReturnDateContentProps) {
  const { setOpen } = usePopover()

  return (
    <>
      <div className="relative">
        <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 z-10 pointer-events-none" />
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full h-12 justify-start text-left font-normal rounded-lg border-gray-300 pl-10",
              !date && "text-slate-500"
            )}
            disabled={!pickupDate}
          >
            {date
              ? date.toLocaleDateString('vi-VN', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
              : label}
          </Button>
        </PopoverTrigger>
      </div>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            onSelect(selectedDate)
            setOpen(false)
          }}
          disabled={isDisabled}
          initialFocus
        />
      </PopoverContent>
    </>
  )
}

