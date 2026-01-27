'use client'

import type { NominatimSuggestion } from '@/lib/api'
import { searchLocations } from '@/lib/api'
import { useCallback, useEffect, useState } from 'react'

interface UseLocationAutocompleteOptions {
  /**
   * Initial value for the location input
   */
  initialValue?: string
  /**
   * Minimum query length before searching (default: 3)
   */
  minQueryLength?: number
  /**
   * Debounce delay in milliseconds (default: 400)
   */
  debounceDelay?: number
  /**
   * Callback when a location is selected
   */
  onSelect?: (suggestion: NominatimSuggestion) => void
}

interface UseLocationAutocompleteReturn {
  /**
   * Current input value
   */
  value: string
  /**
   * Array of location suggestions
   */
  suggestions: NominatimSuggestion[]
  /**
   * Whether a search is currently in progress
   */
  isLoading: boolean
  /**
   * Whether a search has been performed (to show "no results" message)
   */
  hasSearched: boolean
  /**
   * Selected coordinates (null if not selected)
   */
  coordinates: { lat: number; lon: number } | null
  /**
   * Handler for input change
   */
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  /**
   * Handler for input blur
   */
  handleBlur: () => void
  /**
   * Handler for selecting a suggestion
   */
  handleSelect: (suggestion: NominatimSuggestion) => void
  /**
   * Clear the current value and reset state
   */
  clear: () => void
}

/**
 * Custom hook for location autocomplete functionality
 * Handles debounced search, suggestion management, and coordinate extraction
 */
export function useLocationAutocomplete(
  options: UseLocationAutocompleteOptions = {}
): UseLocationAutocompleteReturn {
  const {
    initialValue = '',
    minQueryLength = 3,
    debounceDelay = 400,
    onSelect,
  } = options

  const [value, setValue] = useState(initialValue)
  const [suggestions, setSuggestions] = useState<NominatimSuggestion[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [coordinates, setCoordinates] = useState<{ lat: number; lon: number } | null>(null)

  // Fetch suggestions when value changes
  useEffect(() => {
    if (!value || value.trim().length < minQueryLength) {
      setSuggestions([])
      setHasSearched(false)
      return
    }

    let isCurrent = true
    const controller = new AbortController()

    const timeoutId = window.setTimeout(async () => {
      setIsLoading(true)
      try {
        const fetchedSuggestions = await searchLocations(value)
        if (isCurrent) {
          setSuggestions(fetchedSuggestions)
          setIsLoading(false)
          setHasSearched(true)
        }
      } catch (error) {
        // Error is already logged in the service
        if (isCurrent) {
          setSuggestions([])
          setIsLoading(false)
          setHasSearched(true)
        }
      }
    }, debounceDelay)

    return () => {
      isCurrent = false
      controller.abort()
      window.clearTimeout(timeoutId)
    }
  }, [value, minQueryLength, debounceDelay])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    setCoordinates(null)
  }, [])

  const handleBlur = useCallback(() => {
    // Delay hiding suggestions to allow click on suggestion
    setTimeout(() => {
      setSuggestions([])
      setHasSearched(false)
    }, 150)
  }, [])

  const handleSelect = useCallback(
    (suggestion: NominatimSuggestion) => {
      setValue(suggestion.display_name)
      const coords = { lat: suggestion.lat, lon: suggestion.lon }
      setCoordinates(coords)
      setSuggestions([])
      setHasSearched(false)
      onSelect?.(suggestion)
    },
    [onSelect]
  )

  const clear = useCallback(() => {
    setValue('')
    setSuggestions([])
    setHasSearched(false)
    setCoordinates(null)
  }, [])

  return {
    value,
    suggestions,
    isLoading,
    hasSearched,
    coordinates,
    handleChange,
    handleBlur,
    handleSelect,
    clear,
  }
}
