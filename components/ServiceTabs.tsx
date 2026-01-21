'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'

interface ServiceTabsProps {
  onTabChange: (tab: 'with-driver' | 'self-drive') => void
  onRouteTypeChange?: (routeType: 'noi-tinh' | 'lien-tinh' | 'lien-tinh-mot-chieu') => void
}

export default function ServiceTabs({ onTabChange, onRouteTypeChange }: ServiceTabsProps) {
  const [activeTab, setActiveTab] = useState<'with-driver' | 'self-drive'>('with-driver')
  const [routeType, setRouteType] = useState<'noi-tinh' | 'lien-tinh' | 'lien-tinh-mot-chieu'>('noi-tinh')

  const handleTabClick = (tab: 'with-driver' | 'self-drive') => {
    if (tab === 'self-drive') return // Disabled
    setActiveTab(tab)
    onTabChange(tab)
  }

  const handleRouteTypeChange = (type: 'noi-tinh' | 'lien-tinh' | 'lien-tinh-mot-chieu') => {
    setRouteType(type)
    onRouteTypeChange?.(type)
  }

  return (
    <div className="mb-6">
      <div className="flex space-x-2 mb-4">
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

      {activeTab === 'with-driver' && (
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-6">
            <label className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name="routeType"
                value="noi-tinh"
                checked={routeType === 'noi-tinh'}
                onChange={() => handleRouteTypeChange('noi-tinh')}
                className="sr-only"
              />
              <div className={`
                w-5 h-5 rounded-full border-2 transition-all duration-200 flex items-center justify-center
                ${routeType === 'noi-tinh' 
                  ? 'border-blue-600 bg-blue-600' 
                  : 'border-gray-300 bg-white'
                }
              `}>
                {routeType === 'noi-tinh' && (
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                )}
              </div>
              <span className={`ml-2 text-sm transition-colors duration-200 ${
                routeType === 'noi-tinh' 
                  ? 'text-slate-900 font-medium' 
                  : 'text-slate-700'
              }`}>
                Nội thành
              </span>
            </label>
            <label className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name="routeType"
                value="lien-tinh"
                checked={routeType === 'lien-tinh'}
                onChange={() => handleRouteTypeChange('lien-tinh')}
                className="sr-only"
              />
              <div className={`
                w-5 h-5 rounded-full border-2 transition-all duration-200 flex items-center justify-center
                ${routeType === 'lien-tinh' 
                  ? 'border-blue-600 bg-blue-600' 
                  : 'border-gray-300 bg-white'
                }
              `}>
                {routeType === 'lien-tinh' && (
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                )}
              </div>
              <span className={`ml-2 text-sm transition-colors duration-200 ${
                routeType === 'lien-tinh' 
                  ? 'text-slate-900 font-medium' 
                  : 'text-slate-700'
              }`}>
                Liên tỉnh
              </span>
            </label>
            <label className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name="routeType"
                value="lien-tinh-mot-chieu"
                checked={routeType === 'lien-tinh-mot-chieu'}
                onChange={() => handleRouteTypeChange('lien-tinh-mot-chieu')}
                className="sr-only"
              />
              <div className={`
                w-5 h-5 rounded-full border-2 transition-all duration-200 flex items-center justify-center
                ${routeType === 'lien-tinh-mot-chieu' 
                  ? 'border-blue-600 bg-blue-600' 
                  : 'border-gray-300 bg-white'
                }
              `}>
                {routeType === 'lien-tinh-mot-chieu' && (
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                )}
              </div>
              <span className={`ml-2 text-sm transition-colors duration-200 ${
                routeType === 'lien-tinh-mot-chieu' 
                  ? 'text-slate-900 font-medium' 
                  : 'text-slate-700'
              }`}>
                Liên tỉnh (1 chiều)
              </span>
            </label>
          </div>
        </div>
      )}
    </div>
  )
}

