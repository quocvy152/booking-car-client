/**
 * API Types
 * Type definitions for external API responses and requests
 */

/**
 * Nominatim API Types
 */
export interface NominatimSuggestion {
  place_id: number
  display_name: string
  lat: number
  lon: number
}

export interface NominatimSearchParams {
  query: string
  countrycodes?: string
  limit?: number
  addressdetails?: number
}

/**
 * OSRM API Types
 */
export interface RouteInfo {
  distance: number // in meters
  duration: number // in seconds
}

export interface OsrmRouteResponse {
  code: string
  routes?: Array<{
    distance: number
    duration: number
    geometry?: string
    legs?: Array<{
      distance: number
      duration: number
      steps: unknown[]
    }>
  }>
  waypoints?: Array<{
    location: [number, number]
    name: string
  }>
}

export interface Coordinate {
  lat: number
  lon: number
}

/**
 * API Error Types
 */
export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public originalError?: unknown
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

