/**
 * API Services Index
 * Central export point for all API services
 */

// Services
export { searchLocations, reverseGeocode } from './nominatim.service'
export { calculateRoute, calculateRouteBetweenPoints } from './osrm.service'

// Configuration
export { API_CONFIG, API_HEADERS, buildNominatimUrl, buildOsrmUrl } from './config'

// Error class (export as value, not type)
export { ApiError } from './types'

// Types
export type {
  NominatimSuggestion,
  NominatimSearchParams,
  RouteInfo,
  OsrmRouteResponse,
  Coordinate,
} from './types'

