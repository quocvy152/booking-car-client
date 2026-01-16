'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'

interface ServiceTabsProps {
  onTabChange: (tab: 'with-driver' | 'self-drive') => void
}

export default function ServiceTabs({ onTabChange }: ServiceTabsProps) {
  const [activeTab, setActiveTab] = useState<'with-driver' | 'self-drive'>('with-driver')

  const handleTabClick = (tab: 'with-driver' | 'self-drive') => {
    if (tab === 'self-drive') return // Disabled
    setActiveTab(tab)
    onTabChange(tab)
  }

  return (
    <div className="flex space-x-2 mb-6">
      <button
        onClick={() => handleTabClick('with-driver')}
        className={`
          flex-1 px-6 py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer
          ${
            activeTab === 'with-driver'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-white text-slate-700 hover:bg-slate-50 border border-gray-200'
          }
        `}
      >
        Thuê xe có tài xế
      </button>
      <button
        onClick={() => handleTabClick('self-drive')}
        disabled
        className={`
          flex-1 px-6 py-3 rounded-lg font-medium transition-all duration-200
          relative bg-slate-100 text-slate-400 border border-gray-200
          cursor-not-allowed
        `}
      >
        Thuê xe tự lái
        <Badge 
          variant="secondary" 
          className="ml-2 text-xs bg-amber-100 text-amber-700 border-amber-200"
        >
          Sắp ra mắt
        </Badge>
      </button>
    </div>
  )
}

