'use client'

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CalendarProps {
  mode?: "single"
  selected?: Date
  onSelect?: (date: Date | undefined) => void
  disabled?: (date: Date) => boolean
  initialFocus?: boolean
}

const DAYS = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"]
const MONTHS = [
  "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
  "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
]

export function Calendar({ selected, onSelect, disabled }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(new Date())

  const year = currentMonth.getFullYear()
  const month = currentMonth.getMonth()

  const firstDayOfMonth = new Date(year, month, 1)
  const lastDayOfMonth = new Date(year, month + 1, 0)
  const daysInMonth = lastDayOfMonth.getDate()
  const startingDayOfWeek = firstDayOfMonth.getDay()

  const prevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1))
  }

  const handleDateClick = (day: number) => {
    const date = new Date(year, month, day)
    if (disabled && disabled(date)) return
    onSelect?.(date)
  }

  const isSelected = (day: number) => {
    if (!selected) return false
    return (
      selected.getDate() === day &&
      selected.getMonth() === month &&
      selected.getFullYear() === year
    )
  }

  const isDisabled = (day: number) => {
    const date = new Date(year, month, day)
    return disabled ? disabled(date) : false
  }

  return (
    <div className="p-3">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevMonth}
          className="p-1 hover:bg-gray-100 rounded cursor-pointer transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="font-semibold">
          {MONTHS[month]} {year}
        </div>
        <button
          onClick={nextMonth}
          className="p-1 hover:bg-gray-100 rounded cursor-pointer transition-colors"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAYS.map((day) => (
          <div key={day} className="text-center text-sm font-medium text-slate-500 py-1">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: startingDayOfWeek }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1
          const selected = isSelected(day)
          const disabled = isDisabled(day)
          return (
            <button
              key={day}
              onClick={() => handleDateClick(day)}
              disabled={disabled}
              className={cn(
                "h-9 w-9 rounded-md text-sm transition-colors cursor-pointer",
                selected && "bg-blue-600 text-white hover:bg-blue-700",
                !selected && !disabled && "hover:bg-gray-100",
                disabled && "text-gray-300 cursor-not-allowed"
              )}
            >
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}

