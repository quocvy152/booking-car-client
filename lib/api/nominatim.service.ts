/**
 * Nominatim Service
 * Service for interacting with OpenStreetMap Nominatim API
 * Handles location search and geocoding
 */

import { buildNominatimUrl, API_HEADERS } from './config'
import { ApiError } from './types'
import type { NominatimSuggestion, NominatimSearchParams } from './types'

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
    const url = buildNominatimUrl(query, params)
    const response = await fetch(url, {
      headers: API_HEADERS.NOMINATIM,
      // Add cache control for better performance
      cache: 'force-cache',
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error(`Nominatim API error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()

    // Validate response is an array
    if (!Array.isArray(data)) {
      return []
    }

    // Map response to our type
    return data.map((item) => ({
      place_id: item.place_id,
      display_name: item.display_name,
      lat: parseFloat(item.lat),
      lon: parseFloat(item.lon),
    }))
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
    
    const response = await fetch(url, {
      headers: API_HEADERS.NOMINATIM,
      cache: 'force-cache',
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      return null
    }

    const data = await response.json()
    return data.display_name || null
  } catch (error) {
    console.error('Error in reverse geocoding:', error)
    return null
  }
}

