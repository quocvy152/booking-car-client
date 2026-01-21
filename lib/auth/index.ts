/**
 * Authentication Module
 * Central export point for authentication functionality
 */

export { AuthProvider, useAuth } from './auth-context'
export type { User, LoginCredentials, RegisterCredentials, AuthResponse, AuthError, AuthStatus } from './types'
export { login, register, logout, getCurrentUser } from './auth-service'

