/**
 * OSRM Service
 * Service for interacting with Open Source Routing Machine API
 * Handles route calculation and navigation
 */

import { buildOsrmUrl, API_HEADERS } from './config'
import { ApiError } from './types'
import type { RouteInfo, Coordinate, OsrmRouteResponse } from './types'

/**
 * Calculate route between two or more coordinates
 * 
 * @param coordinates - Array of coordinates (minimum 2 points)
 * @returns Route information (distance and duration)
 * @throws ApiError if the request fails or route cannot be calculated
 */
export async function calculateRoute(coordinates: Coordinate[]): Promise<RouteInfo> {
  // Validate coordinates
  if (!coordinates || coordinates.length < 2) {
    throw new ApiError('Cần ít nhất 2 điểm để tính toán đường đi')
  }

  // Validate coordinate values
  for (const coord of coordinates) {
    if (
      typeof coord.lat !== 'number' ||
      typeof coord.lon !== 'number' ||
      isNaN(coord.lat) ||
      isNaN(coord.lon)
    ) {
      throw new ApiError('Tọa độ không hợp lệ')
    }
  }

  try {
    const url = buildOsrmUrl(coordinates)
    const response = await fetch(url, {
      headers: API_HEADERS.OSRM,
      cache: 'no-store', // Routes should not be cached
    })

    if (!response.ok) {
      throw new Error(`OSRM API error: ${response.status} ${response.statusText}`)
    }

    const data: OsrmRouteResponse = await response.json()

    // Check if route was found
    if (data.code !== 'Ok' || !data.routes || data.routes.length === 0) {
      throw new ApiError('Không thể tính toán đường đi giữa các điểm này')
    }

    const route = data.routes[0]

    // Validate route data
    if (typeof route.distance !== 'number' || typeof route.duration !== 'number') {
      throw new ApiError('Dữ liệu đường đi không hợp lệ')
    }

    return {
      distance: route.distance, // meters
      duration: route.duration, // seconds
    }
  } catch (error) {
    // Log error for debugging
    console.error('Error calculating route from OSRM:', error)

    // Re-throw ApiError as-is
    if (error instanceof ApiError) {
      throw error
    }

    // Wrap other errors
    if (error instanceof Error) {
      throw new ApiError(
        `Lỗi kết nối khi tính toán đường đi: ${error.message}`,
        undefined,
        error
      )
    }

    throw new ApiError('Lỗi kết nối khi tính toán đường đi', undefined, error)
  }
}

/**
 * Calculate route between pickup and dropoff points
 * Convenience method for the most common use case
 * 
 * @param pickup - Pickup location coordinates
 * @param dropoff - Dropoff location coordinates
 * @returns Route information
 */
export async function calculateRouteBetweenPoints(
  pickup: Coordinate,
  dropoff: Coordinate
): Promise<RouteInfo> {
  return calculateRoute([pickup, dropoff])
}

