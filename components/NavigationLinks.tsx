'use client'

import type { NavigationItem } from '@/lib/config/navigation'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavigationLinksProps {
  items: NavigationItem[]
  variant?: 'desktop' | 'mobile' | 'footer'
  onItemClick?: () => void
  className?: string
}

/**
 * Reusable navigation links component
 * Supports desktop, mobile, and footer variants
 */
export default function NavigationLinks({
  items,
  variant = 'desktop',
  onItemClick,
  className = '',
}: NavigationLinksProps) {
  const pathname = usePathname()

  const getLinkClasses = (href: string) => {
    const isActive = pathname === href

    switch (variant) {
      case 'desktop':
        return `relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
          isActive
            ? 'text-blue-600 bg-blue-50'
            : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
        }`

      case 'mobile':
        return `block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
          isActive
            ? 'text-blue-600 bg-blue-50'
            : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
        }`

      case 'footer':
        return `text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer text-sm`

      default:
        return ''
    }
  }

  if (variant === 'footer') {
    return (
      <ul className={`space-y-3 ${className}`}>
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={getLinkClasses(item.href)}
              onClick={onItemClick}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className={className}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={getLinkClasses(item.href)}
          onClick={onItemClick}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}
