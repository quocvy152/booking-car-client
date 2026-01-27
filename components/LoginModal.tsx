'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/lib/auth/use-auth'
import { AlertCircle, Eye, EyeOff, Lock, LogIn, Mail, Phone, User, UserPlus, X } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const router = useRouter()
  const { login, register, isAuthenticated, isLoading, error, clearError } = useAuth()
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  
  // Register form state
  const [registerName, setRegisterName] = useState('')
  const [registerPhone, setRegisterPhone] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('')
  const [localError, setLocalError] = useState<string | null>(null)

  // Close modal and redirect if authenticated
  useEffect(() => {
    if (isAuthenticated && isOpen) {
      onClose()
      router.push('/auth-success?type=' + (isLogin ? 'login' : 'register'))
    }
  }, [isAuthenticated, isOpen, isLogin, onClose, router])

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setIsLogin(true)
      setLoginEmail('')
      setLoginPassword('')
      setRegisterName('')
      setRegisterPhone('')
      setRegisterEmail('')
      setRegisterPassword('')
      setRegisterConfirmPassword('')
      setShowPassword(false)
      setShowConfirmPassword(false)
      setLocalError(null)
      clearError()
    }
  }, [isOpen, clearError])

  // Clear errors when switching between login/register
  useEffect(() => {
    clearError()
    setLocalError(null)
  }, [isLogin, clearError])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Handle escape key
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen) {
      onClose()
    }
  }, [isOpen, onClose])

  useEffect(() => {
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [handleEscape])

  const handleLoginSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setLocalError(null)
    clearError()

    try {
      await login({
        email: loginEmail,
        password: loginPassword,
      })
      // Modal will close automatically via useEffect when authenticated
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Đăng nhập thất bại'
      setLocalError(errorMessage)
    }
  }, [loginEmail, loginPassword, login, clearError])

  const handleRegisterSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setLocalError(null)
    clearError()

    // Validate password match
    if (registerPassword !== registerConfirmPassword) {
      setLocalError('Mật khẩu không khớp')
      return
    }

    try {
      await register({
        name: registerName,
        email: registerEmail,
        phone: registerPhone,
        password: registerPassword,
      })
      // Modal will close automatically via useEffect when authenticated
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Đăng ký thất bại'
      setLocalError(errorMessage)
    }
  }, [registerName, registerEmail, registerPhone, registerPassword, registerConfirmPassword, register, clearError])

  const toggleLoginMode = useCallback(() => {
    setIsLogin(true)
  }, [])

  const toggleRegisterMode = useCallback(() => {
    setIsLogin(false)
  }, [])

  const toggleShowPassword = useCallback(() => {
    setShowPassword((prev) => !prev)
  }, [])

  const toggleShowConfirmPassword = useCallback(() => {
    setShowConfirmPassword((prev) => !prev)
  }, [])

  const displayError = localError || error

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!isOpen || !mounted) return null

  const modalContent = (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
        <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl border border-gray-200 transform transition-all duration-300 my-auto max-h-[95vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-white hover:bg-slate-50 text-slate-500 hover:text-slate-700 rounded-full p-1.5 shadow-md hover:shadow-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 cursor-pointer z-10"
            aria-label="Đóng"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Content */}
          <div className="p-4 md:p-5">
            {/* Toggle Tabs */}
            <div className="flex items-center justify-center mb-4 bg-slate-100 rounded-lg p-1">
              <button
                onClick={toggleLoginMode}
                className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isLogin
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LogIn className="h-3.5 w-3.5" />
                Đăng nhập
              </button>
              <button
                onClick={toggleRegisterMode}
                className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${
                  !isLogin
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <UserPlus className="h-3.5 w-3.5" />
                Đăng ký
              </button>
            </div>

            {/* Title */}
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-slate-900 mb-1">
                {isLogin ? 'Chào mừng trở lại' : 'Tạo tài khoản mới'}
              </h2>
              <p className="text-slate-600 text-xs">
                {isLogin
                  ? 'Đăng nhập để tiếp tục sử dụng dịch vụ'
                  : 'Đăng ký để bắt đầu đặt xe ngay hôm nay'}
              </p>
            </div>

            {/* Error Message */}
            {displayError && (
              <div className="mb-3 p-2.5 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-red-600 flex-1">{displayError}</p>
              </div>
            )}

            {/* Login Form */}
            {isLogin && (
              <form onSubmit={handleLoginSubmit} className="space-y-3">
                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="login-email" className="text-xs font-medium text-slate-700">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="Nhập email của bạn"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="pl-9 h-10 text-sm rounded-lg"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <label htmlFor="login-password" className="text-xs font-medium text-slate-700">
                    Mật khẩu
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input
                      id="login-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Nhập mật khẩu"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="pl-9 pr-9 h-10 text-sm rounded-lg"
                      required
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={toggleShowPassword}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors duration-200 cursor-pointer"
                      aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Forgot Password */}
                <div className="flex items-center justify-end pt-1">
                  <Link
                    href="/quen-mat-khau"
                    onClick={onClose}
                    className="text-xs text-blue-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer"
                  >
                    Quên mật khẩu?
                  </Link>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-10 text-sm font-medium bg-blue-600 hover:bg-blue-700 transition-colors duration-200 cursor-pointer mt-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  {isLoading ? 'Đang xử lý...' : 'Đăng nhập'}
                </Button>
              </form>
            )}

            {/* Register Form */}
            {!isLogin && (
              <form onSubmit={handleRegisterSubmit} className="space-y-3">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="register-name" className="text-xs font-medium text-slate-700">
                    Họ và tên
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input
                      id="register-name"
                      type="text"
                      placeholder="Nhập họ và tên"
                      value={registerName}
                      onChange={(e) => setRegisterName(e.target.value)}
                      className="pl-9 h-10 text-sm rounded-lg"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="register-phone" className="text-xs font-medium text-slate-700">
                    Số điện thoại
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input
                      id="register-phone"
                      type="tel"
                      placeholder="Nhập số điện thoại"
                      value={registerPhone}
                      onChange={(e) => setRegisterPhone(e.target.value)}
                      className="pl-9 h-10 text-sm rounded-lg"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="register-email" className="text-xs font-medium text-slate-700">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="Nhập email của bạn"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      className="pl-9 h-10 text-sm rounded-lg"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <label htmlFor="register-password" className="text-xs font-medium text-slate-700">
                    Mật khẩu
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input
                      id="register-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Nhập mật khẩu (tối thiểu 6 ký tự)"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      className="pl-9 pr-9 h-10 text-sm rounded-lg"
                      required
                      minLength={6}
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={toggleShowPassword}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors duration-200 cursor-pointer"
                      aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-1.5">
                  <label htmlFor="register-confirm-password" className="text-xs font-medium text-slate-700">
                    Xác nhận mật khẩu
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input
                      id="register-confirm-password"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Nhập lại mật khẩu"
                      value={registerConfirmPassword}
                      onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                      className="pl-9 pr-9 h-10 text-sm rounded-lg"
                      required
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={toggleShowConfirmPassword}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors duration-200 cursor-pointer"
                      aria-label={showConfirmPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {registerConfirmPassword && registerPassword !== registerConfirmPassword && (
                    <p className="text-xs text-red-600">Mật khẩu không khớp</p>
                  )}
                </div>

                {/* Terms */}
                <div className="flex items-start space-x-2 pt-1">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-0.5 h-3.5 w-3.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <label htmlFor="terms" className="text-xs text-slate-600 cursor-pointer leading-relaxed">
                    Tôi đồng ý với{' '}
                    <Link href="/terms" onClick={onClose} className="text-blue-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer">
                      Điều khoản sử dụng
                    </Link>
                    {' '}và{' '}
                    <Link href="/chinh-sach-bao-mat" onClick={onClose} className="text-blue-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer">
                      Chính sách bảo mật
                    </Link>
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-10 text-sm font-medium bg-blue-600 hover:bg-blue-700 transition-colors duration-200 cursor-pointer mt-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={(registerPassword !== registerConfirmPassword && registerConfirmPassword !== '') || isLoading}
                >
                  {isLoading ? 'Đang xử lý...' : 'Đăng ký'}
                </Button>
              </form>
            )}

            {/* Divider */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-white text-slate-500">Hoặc</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="space-y-2">
              <Button
                type="button"
                variant="outline"
                className="w-full h-10 text-xs font-medium border-gray-300 hover:bg-slate-50 transition-colors duration-200 cursor-pointer"
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Tiếp tục với Google
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full h-10 text-xs font-medium border-gray-300 hover:bg-slate-50 transition-colors duration-200 cursor-pointer"
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
                </svg>
                Tiếp tục với Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  return createPortal(modalContent, document.body)
}

