'use client'

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface SelectContextType {
  value?: string
  onValueChange?: (value: string) => void
  open: boolean
  setOpen: (open: boolean) => void
  items: Map<string, string>
  registerItem: (value: string, label: string) => void
}

const SelectContext = React.createContext<SelectContextType>({
  value: undefined,
  onValueChange: undefined,
  open: false,
  setOpen: () => {},
  items: new Map(),
  registerItem: () => {},
})

interface SelectProps {
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
  required?: boolean
}

const Select = ({ value, onValueChange, children, required }: SelectProps) => {
  const [open, setOpen] = React.useState(false)
  const [items, setItems] = React.useState<Map<string, string>>(new Map())

  const registerItem = React.useCallback((value: string, label: string) => {
    setItems((prev) => {
      const next = new Map(prev)
      next.set(value, label)
      return next
    })
  }, [])

  return (
    <SelectContext.Provider value={{ value, onValueChange, open, setOpen, items, registerItem }}>
      <div className="relative">{children}</div>
    </SelectContext.Provider>
  )
}

interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { open, setOpen } = React.useContext(SelectContext)

    return (
      <button
        ref={ref}
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-slate-900 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 text-slate-400" />
      </button>
    )
  }
)
SelectTrigger.displayName = "SelectTrigger"

interface SelectValueProps {
  placeholder?: string
  children?: React.ReactNode
}

const SelectValue = ({ placeholder, children }: SelectValueProps) => {
  const { value, items } = React.useContext(SelectContext)
  const displayText = value && items.has(value) ? items.get(value) : (value ? children : placeholder)
  return (
    <span className={value ? "text-slate-900" : "text-slate-500"}>
      {displayText}
    </span>
  )
}
SelectValue.displayName = "SelectValue"

interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
  ({ className, children, ...props }, ref) => {
    const { open, setOpen } = React.useContext(SelectContext)

    if (!open) return null

    return (
      <>
        <div
          className="fixed inset-0 z-[9998]"
          onClick={() => setOpen(false)}
        />
        <div
          ref={ref}
          className={cn(
            "absolute z-[9999] mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white p-1 shadow-lg",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </>
    )
  }
)
SelectContent.displayName = "SelectContent"

interface SelectItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  children: React.ReactNode
}

// Helper function to extract text from React children
const getTextFromChildren = (children: React.ReactNode): string => {
  if (typeof children === 'string') {
    return children
  }
  if (typeof children === 'number') {
    return String(children)
  }
  if (Array.isArray(children)) {
    return children.map(getTextFromChildren).join('')
  }
  if (React.isValidElement(children)) {
    if (children.props.children) {
      return getTextFromChildren(children.props.children)
    }
  }
  return ''
}

const SelectItem = React.forwardRef<HTMLButtonElement, SelectItemProps>(
  ({ className, value, children, ...props }, ref) => {
    const { onValueChange, setOpen, registerItem } = React.useContext(SelectContext)

    React.useEffect(() => {
      const text = getTextFromChildren(children)
      if (text) {
        registerItem(value, text)
      }
    }, [value, children, registerItem])

    return (
      <button
        ref={ref}
        type="button"
        onClick={() => {
          onValueChange?.(value)
          setOpen(false)
        }}
        className={cn(
          "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm text-slate-900 outline-none hover:bg-gray-100 focus:bg-gray-100",
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
SelectItem.displayName = "SelectItem"

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }

