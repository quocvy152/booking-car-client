'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

interface PopoverProps {
  children: React.ReactNode
}

interface PopoverTriggerProps {
  asChild?: boolean
  children: React.ReactNode
  className?: string
}

interface PopoverContentProps {
  children: React.ReactNode
  className?: string
  align?: "start" | "center" | "end"
}

const PopoverContext = React.createContext<{
  open: boolean
  setOpen: (open: boolean) => void
}>({
  open: false,
  setOpen: () => {},
})

export function usePopover() {
  return React.useContext(PopoverContext)
}

export function Popover({ children }: PopoverProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <PopoverContext.Provider value={{ open, setOpen }}>
      <div className="relative">{children}</div>
    </PopoverContext.Provider>
  )
}

export function PopoverTrigger({ asChild, children, className }: PopoverTriggerProps) {
  const { open, setOpen } = usePopover()

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: () => setOpen(!open),
      className: cn(className, children.props.className),
    } as any)
  }

  return (
    <button
      onClick={() => setOpen(!open)}
      className={className}
    >
      {children}
    </button>
  )
}

export function PopoverContent({ children, className, align = "start" }: PopoverContentProps) {
  const { open, setOpen } = usePopover()

  if (!open) return null

  return (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={() => setOpen(false)}
      />
      <div
        className={cn(
          "absolute z-50 mt-2 rounded-md border border-gray-200 bg-white p-3 shadow-lg",
          align === "start" && "left-0",
          align === "center" && "left-1/2 -translate-x-1/2",
          align === "end" && "right-0",
          className
        )}
      >
        {children}
      </div>
    </>
  )
}

