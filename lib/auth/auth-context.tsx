'use client'

/**
 * Authentication Context
 * Provides authentication state and methods throughout the application
 */

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import type { User, LoginCredentials, RegisterCredentials, AuthStatus } from './types'
import { login as loginService, register as registerService, logout as logoutService, getCurrentUser } from './auth-service'

interface AuthContextType {
  user: User | null
  status: AuthStatus
  isLoading: boolean
  isAuthenticated: boolean
  login: (credentials: LoginCredentials) => Promise<void>
  register: (credentials: RegisterCredentials) => Promise<void>
  logout: () => Promise<void>
  error: string | null
  clearError: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const TOKEN_KEY = 'auth_token'
const USER_KEY = 'auth_user'

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [status, setStatus] = useState<AuthStatus>('idle')
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  const isLoading = status === 'loading'
  const isAuthenticated = status === 'authenticated' && user !== null

  /**
   * Load user from localStorage on mount
   */
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = localStorage.getItem(TOKEN_KEY)
        const storedUser = localStorage.getItem(USER_KEY)

        if (token && storedUser) {
          // Verify token is still valid (in production, call API)
          try {
            const userData = JSON.parse(storedUser)
            setUser(userData)
            setStatus('authenticated')
          } catch {
            // Invalid stored data, clear it
            localStorage.removeItem(TOKEN_KEY)
            localStorage.removeItem(USER_KEY)
            setStatus('unauthenticated')
          }
        } else {
          setStatus('unauthenticated')
        }
      } catch (err) {
        console.error('Auth initialization error:', err)
        setStatus('unauthenticated')
      }
    }

    initializeAuth()
  }, [])

  /**
   * Login function
   */
  const handleLogin = useCallback(async (credentials: LoginCredentials) => {
    try {
      setStatus('loading')
      setError(null)

      const response = await loginService(credentials)

      // Store auth data
      localStorage.setItem(TOKEN_KEY, response.token)
      localStorage.setItem(USER_KEY, JSON.stringify(response.user))

      setUser(response.user)
      setStatus('authenticated')

      // Redirect to success page
      router.push('/auth-success?type=login')
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Đăng nhập thất bại'
      setError(errorMessage)
      setStatus('error')
      throw err
    }
  }, [router])

  /**
   * Register function
   */
  const handleRegister = useCallback(async (credentials: RegisterCredentials) => {
    try {
      setStatus('loading')
      setError(null)

      const response = await registerService(credentials)

      // Store auth data
      localStorage.setItem(TOKEN_KEY, response.token)
      localStorage.setItem(USER_KEY, JSON.stringify(response.user))

      setUser(response.user)
      setStatus('authenticated')

      // Redirect to success page
      router.push('/auth-success?type=register')
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Đăng ký thất bại'
      setError(errorMessage)
      setStatus('error')
      throw err
    }
  }, [router])

  /**
   * Logout function
   */
  const handleLogout = useCallback(async () => {
    try {
      setStatus('loading')
      setError(null)

      await logoutService()

      // Clear auth data
      localStorage.removeItem(TOKEN_KEY)
      localStorage.removeItem(USER_KEY)

      setUser(null)
      setStatus('unauthenticated')

      // Redirect to home page
      router.push('/')
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Đăng xuất thất bại'
      setError(errorMessage)
      setStatus('error')
    }
  }, [router])

  /**
   * Clear error
   */
  const clearError = useCallback(() => {
    setError(null)
  }, [])

  const value: AuthContextType = {
    user,
    status,
    isLoading,
    isAuthenticated,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
    error,
    clearError,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

/**
 * Hook to use auth context
 * Throws error if used outside AuthProvider
 */
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

