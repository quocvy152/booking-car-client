/**
 * Client-Side API Cache Utility
 * Provides in-memory caching for API responses with TTL support
 * and request deduplication
 */

interface CacheEntry<T> {
  data: T
  timestamp: number
  ttl: number // Time to live in milliseconds
}

interface PendingRequest<T> {
  promise: Promise<T>
  timestamp: number
}

/**
 * In-memory cache storage
 * Key: cache key (usually URL or query string)
 * Value: cache entry with data and expiration info
 */
const cache = new Map<string, CacheEntry<unknown>>()

/**
 * Pending requests map for request deduplication
 * Prevents multiple identical requests from being made simultaneously
 */
const pendingRequests = new Map<string, PendingRequest<unknown>>()

/**
 * Default cache TTL: 1 hour
 */
const DEFAULT_TTL = 60 * 60 * 1000 // 1 hour in milliseconds

/**
 * Cleanup interval: 5 minutes
 * Removes expired entries and stale pending requests
 */
const CLEANUP_INTERVAL = 5 * 60 * 1000 // 5 minutes

/**
 * Maximum age for pending requests: 30 seconds
 * If a pending request is older than this, it's considered stale
 */
const MAX_PENDING_AGE = 30 * 1000 // 30 seconds

/**
 * Check if a cache entry is still valid
 */
function isCacheValid<T>(entry: CacheEntry<T>): boolean {
  const now = Date.now()
  return now - entry.timestamp < entry.ttl
}

/**
 * Clean up expired cache entries and stale pending requests
 */
function cleanupCache(): void {
  const now = Date.now()

  // Remove expired cache entries
  for (const [key, entry] of cache.entries()) {
    if (!isCacheValid(entry)) {
      cache.delete(key)
    }
  }

  // Remove stale pending requests
  for (const [key, pending] of pendingRequests.entries()) {
    if (now - pending.timestamp > MAX_PENDING_AGE) {
      pendingRequests.delete(key)
    }
  }
}

// Start cleanup interval
if (typeof window !== 'undefined') {
  setInterval(cleanupCache, CLEANUP_INTERVAL)
}

/**
 * Get cached data if available and valid
 * 
 * @param key - Cache key
 * @returns Cached data or null if not found/expired
 */
export function getCached<T>(key: string): T | null {
  const entry = cache.get(key) as CacheEntry<T> | undefined

  if (!entry) {
    return null
  }

  if (!isCacheValid(entry)) {
    cache.delete(key)
    return null
  }

  return entry.data
}

/**
 * Set cache entry
 * 
 * @param key - Cache key
 * @param data - Data to cache
 * @param ttl - Time to live in milliseconds (default: 1 hour)
 */
export function setCached<T>(key: string, data: T, ttl: number = DEFAULT_TTL): void {
  cache.set(key, {
    data,
    timestamp: Date.now(),
    ttl,
  })
}

/**
 * Clear cache entry
 * 
 * @param key - Cache key to clear
 */
export function clearCache(key: string): void {
  cache.delete(key)
}

/**
 * Clear all cache entries
 */
export function clearAllCache(): void {
  cache.clear()
}

/**
 * Get or create a cached fetch request
 * Implements request deduplication - if the same request is made multiple times
 * simultaneously, only one actual request is made and all callers share the result
 * 
 * @param key - Cache key (usually the URL)
 * @param fetchFn - Function that performs the actual fetch
 * @param ttl - Time to live in milliseconds (default: 1 hour)
 * @returns Cached or fetched data
 */
export async function cachedFetch<T>(
  key: string,
  fetchFn: () => Promise<T>,
  ttl: number = DEFAULT_TTL
): Promise<T> {
  // Check cache first
  const cached = getCached<T>(key)
  if (cached !== null) {
    return cached
  }

  // Check if there's a pending request for this key
  const pending = pendingRequests.get(key) as PendingRequest<T> | undefined
  if (pending) {
    // If pending request is not stale, return it
    if (Date.now() - pending.timestamp < MAX_PENDING_AGE) {
      return pending.promise
    }
    // Otherwise, remove stale pending request
    pendingRequests.delete(key)
  }

  // Create new request
  const promise = fetchFn().then((data) => {
    // Cache the result
    setCached(key, data, ttl)
    // Remove from pending requests
    pendingRequests.delete(key)
    return data
  }).catch((error) => {
    // Remove from pending requests on error
    pendingRequests.delete(key)
    throw error
  })

  // Store pending request
  pendingRequests.set(key, {
    promise,
    timestamp: Date.now(),
  })

  return promise
}

/**
 * Generate cache key from URL and optional parameters
 * 
 * @param url - Request URL
 * @param params - Optional parameters object
 * @returns Cache key string
 */
export function generateCacheKey(url: string, params?: Record<string, unknown>): string {
  if (!params || Object.keys(params).length === 0) {
    return url
  }

  // Sort params for consistent cache keys
  const sortedParams = Object.keys(params)
    .sort()
    .map((key) => `${key}=${String(params[key])}`)
    .join('&')

  return `${url}?${sortedParams}`
}
