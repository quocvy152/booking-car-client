'use client'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger, usePopover } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

interface DatePickerPopoverProps {
  date?: Date
  setDate: (date: Date | undefined) => void
}

export default function DatePickerPopover({ date, setDate }: DatePickerPopoverProps) {
  return (
    <Popover>
      <DatePickerContent date={date} setDate={setDate} />
    </Popover>
  )
}

function DatePickerContent({ date, setDate }: DatePickerPopoverProps) {
  const { setOpen } = usePopover()

  return (
    <>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full h-12 justify-start text-left font-normal rounded-lg border-gray-300",
            !date && "text-slate-500"
          )}
        >
          {date ? date.toLocaleDateString('vi-VN', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          }) : "Chọn ngày đi"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            setDate(selectedDate)
            setOpen(false)
          }}
          disabled={(date) => {
            const today = new Date()
            today.setHours(0, 0, 0, 0)
            return date < today
          }}
          initialFocus
        />
      </PopoverContent>
    </>
  )
}

