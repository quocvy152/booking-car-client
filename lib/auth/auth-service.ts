/**
 * Authentication Service
 * Handles all authentication-related API calls
 * This is a mock implementation - replace with actual API calls
 */

import type { LoginCredentials, RegisterCredentials, AuthResponse, AuthError } from './types'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api'

/**
 * Simulates API delay
 */
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Login user
 */
export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  // Simulate API call
  await delay(1000)

  // Mock validation
  if (!credentials.email || !credentials.password) {
    throw new Error('Email và mật khẩu không được để trống')
  }

  // Default guest account for testing
  if (credentials.email.toLowerCase() === 'guest@gmail.com' && credentials.password === 'guest') {
    return {
      user: {
        id: 'guest-1',
        name: 'Khách hàng',
        email: 'guest@example.com',
        phone: '0123456789',
        createdAt: new Date().toISOString(),
      },
      token: 'mock-jwt-token-guest-' + Date.now(),
    }
  }

  // Mock successful login
  // In production, replace this with actual API call:
  // const response = await fetch(`${API_BASE_URL}/auth/login`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(credentials),
  // })
  // if (!response.ok) throw new Error('Đăng nhập thất bại')
  // return response.json()

  // For other credentials, return error (or you can make it accept any credentials for testing)
  throw new Error('Email hoặc mật khẩu không đúng')
}

/**
 * Register new user
 */
export async function register(credentials: RegisterCredentials): Promise<AuthResponse> {
  // Simulate API call
  await delay(1000)

  // Mock validation
  if (!credentials.name || !credentials.email || !credentials.phone || !credentials.password) {
    throw new Error('Vui lòng điền đầy đủ thông tin')
  }

  if (credentials.password.length < 6) {
    throw new Error('Mật khẩu phải có ít nhất 6 ký tự')
  }

  // Mock successful registration
  // In production, replace this with actual API call:
  // const response = await fetch(`${API_BASE_URL}/auth/register`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(credentials),
  // })
  // if (!response.ok) throw new Error('Đăng ký thất bại')
  // return response.json()

  return {
    user: {
      id: '1',
      name: credentials.name,
      email: credentials.email,
      phone: credentials.phone,
      createdAt: new Date().toISOString(),
    },
    token: 'mock-jwt-token-' + Date.now(),
  }
}

/**
 * Logout user
 */
export async function logout(): Promise<void> {
  // Simulate API call
  await delay(500)

  // In production, call logout endpoint:
  // await fetch(`${API_BASE_URL}/auth/logout`, {
  //   method: 'POST',
  //   headers: { Authorization: `Bearer ${token}` },
  // })
}

/**
 * Get current user from token
 */
export async function getCurrentUser(token: string): Promise<AuthResponse['user']> {
  // Simulate API call
  await delay(500)

  // In production, validate token and fetch user:
  // const response = await fetch(`${API_BASE_URL}/auth/me`, {
  //   headers: { Authorization: `Bearer ${token}` },
  // })
  // if (!response.ok) throw new Error('Token không hợp lệ')
  // return response.json()

  return {
    id: '1',
    name: 'Người dùng',
    email: 'user@example.com',
    phone: '0123456789',
    createdAt: new Date().toISOString(),
  }
}

