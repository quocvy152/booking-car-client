'use client'

import type { Coordinate, RouteInfo } from '@/lib/api'
import { calculateRouteBetweenPoints } from '@/lib/api'
import { useEffect, useState } from 'react'

interface UseRouteCalculationOptions {
  /**
   * Pickup coordinates
   */
  pickupCoord: Coordinate | null
  /**
   * Dropoff coordinates
   */
  dropoffCoord: Coordinate | null
  /**
   * Debounce delay in milliseconds (default: 500)
   */
  debounceDelay?: number
}

interface UseRouteCalculationReturn {
  /**
   * Calculated route information
   */
  routeInfo: RouteInfo | null
  /**
   * Whether route calculation is in progress
   */
  isLoading: boolean
  /**
   * Error message if route calculation failed
   */
  error: string | null
}

/**
 * Custom hook for calculating routes between two coordinates
 * Automatically fetches route when both coordinates are available
 */
export function useRouteCalculation(
  options: UseRouteCalculationOptions
): UseRouteCalculationReturn {
  const { pickupCoord, dropoffCoord, debounceDelay = 500 } = options

  const [routeInfo, setRouteInfo] = useState<RouteInfo | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRoute = async () => {
      if (!pickupCoord || !dropoffCoord) {
        setRouteInfo(null)
        setError(null)
        return
      }

      setIsLoading(true)
      setError(null)

      try {
        const route = await calculateRouteBetweenPoints(pickupCoord, dropoffCoord)
        setRouteInfo(route)
      } catch (err) {
        // Error is already logged in the service
        if (err && typeof err === 'object' && 'name' in err && err.name === 'ApiError') {
          setError((err as Error).message)
        } else if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('Lỗi kết nối khi tính toán đường đi')
        }
        setRouteInfo(null)
      } finally {
        setIsLoading(false)
      }
    }

    // Debounce route fetching
    const timeoutId = setTimeout(() => {
      fetchRoute()
    }, debounceDelay)

    return () => clearTimeout(timeoutId)
  }, [pickupCoord, dropoffCoord, debounceDelay])

  return {
    routeInfo,
    isLoading,
    error,
  }
}
