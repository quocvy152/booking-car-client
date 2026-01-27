/**
 * Nominatim Service
 * Service for interacting with OpenStreetMap Nominatim API
 * Handles location search and geocoding
 */

import { API_CONFIG, API_HEADERS, buildNominatimUrl } from './config'
import type { NominatimSearchParams, NominatimSuggestion } from './types'
import { ApiError } from './types'
import { cachedFetch, generateCacheKey } from './cache'

/**
 * Search for location suggestions using Nominatim API
 * 
 * @param query - Search query string (minimum 3 characters)
 * @param params - Optional search parameters
 * @returns Array of location suggestions
 * @throws ApiError if the request fails
 */
export async function searchLocations(
  query: string,
  params?: Partial<NominatimSearchParams>
): Promise<NominatimSuggestion[]> {
  // Validate query
  if (!query.trim() || query.trim().length < 3) {
    return []
  }

  try {
    const url = buildNominatimUrl(
      query,
      params as Partial<typeof API_CONFIG.NOMINATIM.DEFAULT_PARAMS>
    )
    
    // Generate cache key
    const cacheKey = generateCacheKey(url, { query, ...params })
    
    // Use cached fetch with 1 hour TTL
    const data = await cachedFetch<NominatimSuggestion[]>(
      cacheKey,
      async () => {
        const response = await fetch(url, {
          headers: API_HEADERS.NOMINATIM,
        })

        if (!response.ok) {
          throw new Error(`Nominatim API error: ${response.status} ${response.statusText}`)
        }

        const jsonData = await response.json()

        // Validate response is an array
        if (!Array.isArray(jsonData)) {
          return []
        }

        // Map response to our type
        return jsonData.map((item) => ({
          place_id: item.place_id,
          display_name: item.display_name,
          lat: parseFloat(item.lat),
          lon: parseFloat(item.lon),
        }))
      },
      60 * 60 * 1000 // 1 hour TTL
    )

    return data
  } catch (error) {
    // Log error for debugging
    console.error('Error fetching location suggestions from Nominatim:', error)

    // Re-throw as ApiError for better error handling
    if (error instanceof Error) {
      throw new ApiError(
        `Không thể tìm kiếm địa điểm: ${error.message}`,
        undefined,
        error
      )
    }

    throw new ApiError('Không thể tìm kiếm địa điểm', undefined, error)
  }
}

/**
 * Reverse geocoding - Get location name from coordinates
 * 
 * @param lat - Latitude
 * @param lon - Longitude
 * @returns Location display name or null
 */
export async function reverseGeocode(lat: number, lon: number): Promise<string | null> {
  try {
    const url = `${process.env.NEXT_PUBLIC_NOMINATIM_URL || 'https://nominatim.openstreetmap.org'}/reverse?lat=${lat}&lon=${lon}&format=json&addressdetails=1`
    
    // Generate cache key
    const cacheKey = generateCacheKey(url, { lat, lon })
    
    // Use cached fetch with 1 hour TTL
    const data = await cachedFetch<string | null>(
      cacheKey,
      async () => {
        const response = await fetch(url, {
          headers: API_HEADERS.NOMINATIM,
        })

        if (!response.ok) {
          return null
        }

        const jsonData = await response.json()
        return jsonData.display_name || null
      },
      60 * 60 * 1000 // 1 hour TTL
    )

    return data
  } catch (error) {
    console.error('Error in reverse geocoding:', error)
    return null
  }
}

