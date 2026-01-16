'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, Lock, User, Phone, Eye, EyeOff, LogIn, UserPlus } from 'lucide-react'

export default function LoginPage() {
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

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login:', { email: loginEmail, password: loginPassword })
  }

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle register logic here
    console.log('Register:', {
      name: registerName,
      phone: registerPhone,
      email: registerEmail,
      password: registerPassword,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Card Container */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-8 md:p-10">
            {/* Toggle Tabs */}
            <div className="flex items-center justify-center mb-8 bg-slate-100 rounded-lg p-1">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isLogin
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LogIn className="h-4 w-4" />
                Đăng nhập
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${
                  !isLogin
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <UserPlus className="h-4 w-4" />
                Đăng ký
              </button>
            </div>

            {/* Title */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                {isLogin ? 'Chào mừng trở lại' : 'Tạo tài khoản mới'}
              </h1>
              <p className="text-slate-600 text-sm">
                {isLogin
                  ? 'Đăng nhập để tiếp tục sử dụng dịch vụ'
                  : 'Đăng ký để bắt đầu đặt xe ngay hôm nay'}
              </p>
            </div>

            {/* Login Form */}
            {isLogin && (
              <form onSubmit={handleLoginSubmit} className="space-y-5">
                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="login-email" className="text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="Nhập email của bạn"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="pl-10 h-12 rounded-lg"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label htmlFor="login-password" className="text-sm font-medium text-slate-700">
                    Mật khẩu
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                    <Input
                      id="login-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Nhập mật khẩu"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="pl-10 pr-10 h-12 rounded-lg"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors duration-200 cursor-pointer"
                      aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Forgot Password */}
                <div className="flex items-center justify-end">
                  <Link
                    href="/quen-mat-khau"
                    className="text-sm text-blue-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer"
                  >
                    Quên mật khẩu?
                  </Link>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-12 text-base font-medium bg-blue-600 hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
                >
                  Đăng nhập
                </Button>
              </form>
            )}

            {/* Register Form */}
            {!isLogin && (
              <form onSubmit={handleRegisterSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="register-name" className="text-sm font-medium text-slate-700">
                    Họ và tên
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                    <Input
                      id="register-name"
                      type="text"
                      placeholder="Nhập họ và tên"
                      value={registerName}
                      onChange={(e) => setRegisterName(e.target.value)}
                      className="pl-10 h-12 rounded-lg"
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="register-phone" className="text-sm font-medium text-slate-700">
                    Số điện thoại
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                    <Input
                      id="register-phone"
                      type="tel"
                      placeholder="Nhập số điện thoại"
                      value={registerPhone}
                      onChange={(e) => setRegisterPhone(e.target.value)}
                      className="pl-10 h-12 rounded-lg"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="register-email" className="text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="Nhập email của bạn"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      className="pl-10 h-12 rounded-lg"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label htmlFor="register-password" className="text-sm font-medium text-slate-700">
                    Mật khẩu
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                    <Input
                      id="register-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Nhập mật khẩu (tối thiểu 6 ký tự)"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      className="pl-10 pr-10 h-12 rounded-lg"
                      required
                      minLength={6}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors duration-200 cursor-pointer"
                      aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <label htmlFor="register-confirm-password" className="text-sm font-medium text-slate-700">
                    Xác nhận mật khẩu
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                    <Input
                      id="register-confirm-password"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Nhập lại mật khẩu"
                      value={registerConfirmPassword}
                      onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                      className="pl-10 pr-10 h-12 rounded-lg"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors duration-200 cursor-pointer"
                      aria-label={showConfirmPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {registerConfirmPassword && registerPassword !== registerConfirmPassword && (
                    <p className="text-sm text-red-600">Mật khẩu không khớp</p>
                  )}
                </div>

                {/* Terms */}
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <label htmlFor="terms" className="text-sm text-slate-600 cursor-pointer">
                    Tôi đồng ý với{' '}
                    <Link href="/terms" className="text-blue-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer">
                      Điều khoản sử dụng
                    </Link>
                    {' '}và{' '}
                    <Link href="/chinh-sach-bao-mat" className="text-blue-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer">
                      Chính sách bảo mật
                    </Link>
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-12 text-base font-medium bg-blue-600 hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
                  disabled={registerPassword !== registerConfirmPassword && registerConfirmPassword !== ''}
                >
                  Đăng ký
                </Button>
              </form>
            )}

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-slate-500">Hoặc</span>
              </div>
            </div>

            {/* Social Login (Optional) */}
            <div className="space-y-3">
              <Button
                type="button"
                variant="outline"
                className="w-full h-12 text-sm font-medium border-gray-300 hover:bg-slate-50 transition-colors duration-200 cursor-pointer"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
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
                className="w-full h-12 text-sm font-medium border-gray-300 hover:bg-slate-50 transition-colors duration-200 cursor-pointer"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.205-2.136 4.039-.12.083-.276.106-.405.05-.13-.054-.21-.17-.24-.3-.03-.13.01-.27.09-.37.09-.1.22-.16.36-.16.09 0 .18.02.26.07.8.55 1.74.83 2.75.83.22 0 .44-.02.66-.05.09-.01.19 0 .27.03.09.03.16.09.21.17.05.08.07.17.06.26-.01.09-.04.18-.1.25-.06.07-.14.12-.23.14-1.17.23-2.33.23-3.5 0-.12-.02-.24-.03-.36-.03-.82 0-1.63.16-2.38.48-.75.32-1.42.78-1.98 1.36-.56.58-1 1.27-1.29 2.04-.29.77-.43 1.59-.41 2.41.02.82.18 1.63.5 2.38.32.75.78 1.42 1.36 1.98.58.56 1.27 1 2.04 1.29.77.29 1.59.43 2.41.41.82-.02 1.63-.18 2.38-.5.75-.32 1.42-.78 1.98-1.36.56-.58 1-1.27 1.29-2.04.29-.77.43-1.59.41-2.41-.02-.82-.18-1.63-.5-2.38-.32-.75-.78-1.42-1.36-1.98-.58-.56-1.27-1-2.04-1.29-.77-.29-1.59-.43-2.41-.41z" fill="#1877F2"/>
                </svg>
                Tiếp tục với Facebook
              </Button>
            </div>

            {/* Back to Home */}
            <div className="mt-6 text-center">
              <Link
                href="/"
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors duration-200 cursor-pointer"
              >
                ← Quay lại trang chủ
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

