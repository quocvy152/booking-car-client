/**
 * Authentication Types
 * Centralized type definitions for authentication system
 */

export interface User {
  id: string
  name: string
  email: string
  phone?: string
  createdAt?: string
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials {
  name: string
  email: string
  phone: string
  password: string
}

export interface AuthResponse {
  user: User
  token: string
}

export interface AuthError {
  message: string
  code?: string
}

export type AuthStatus = 'idle' | 'loading' | 'authenticated' | 'unauthenticated' | 'error'

