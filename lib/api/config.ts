/**
 * API Configuration
 * Centralized configuration for all external API endpoints
 * 
 * Best Practice: Use environment variables for API URLs in production
 */

/**
 * External API Base URLs
 */
export const API_CONFIG = {
  /**
   * Nominatim API - OpenStreetMap geocoding service
   * Documentation: https://nominatim.org/release-docs/develop/api/Search/
   */
  NOMINATIM: {
    BASE_URL: process.env.NEXT_PUBLIC_NOMINATIM_URL || 'https://nominatim.openstreetmap.org',
    SEARCH_PATH: '/search',
    DEFAULT_PARAMS: {
      countrycodes: 'vn', // Vietnam only
      format: 'json',
      addressdetails: 1,
      limit: 5,
    },
  },

  /**
   * OSRM API - Open Source Routing Machine
   * Documentation: http://project-osrm.org/docs/v5.24.0/api/
   */
  OSRM: {
    BASE_URL: process.env.NEXT_PUBLIC_OSRM_URL || 'https://router.project-osrm.org',
    ROUTE_PATH: '/route/v1/driving',
    DEFAULT_PARAMS: {
      overview: 'false',
    },
  },
} as const

/**
 * API Request Headers
 */
export const API_HEADERS = {
  NOMINATIM: {
    Accept: 'application/json',
    'User-Agent': 'BookingCarApp/1.0', // Required by Nominatim usage policy
  },
  OSRM: {
    Accept: 'application/json',
  },
} as const

/**
 * Helper function to build Nominatim search URL
 */
export function buildNominatimUrl(query: string, params?: Partial<typeof API_CONFIG.NOMINATIM.DEFAULT_PARAMS>): string {
  const baseUrl = `${API_CONFIG.NOMINATIM.BASE_URL}${API_CONFIG.NOMINATIM.SEARCH_PATH}`
  const searchParams = new URLSearchParams({
    q: query,
    ...API_CONFIG.NOMINATIM.DEFAULT_PARAMS,
    ...params,
  } as unknown as Record<string, string>)
  return `${baseUrl}?${searchParams.toString()}`
}

/**
 * Helper function to build OSRM route URL
 */
export function buildOsrmUrl(
  coordinates: Array<{ lat: number; lon: number }>,
  params?: Partial<typeof API_CONFIG.OSRM.DEFAULT_PARAMS>
): string {
  const baseUrl = `${API_CONFIG.OSRM.BASE_URL}${API_CONFIG.OSRM.ROUTE_PATH}`
  const coordinatesString = coordinates.map((coord) => `${coord.lon},${coord.lat}`).join(';')
  const searchParams = new URLSearchParams({
    ...API_CONFIG.OSRM.DEFAULT_PARAMS,
    ...params,
  } as Record<string, string>)
  return `${baseUrl}/${coordinatesString}?${searchParams.toString()}`
}

