'use client'

/**
 * Authentication Success Page
 * Displays success message after login/register and redirects to home
 */

import PageLayout from '@/components/PageLayout'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth/use-auth'
import { ArrowRight, CheckCircle2, Home } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'

function AuthSuccessContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { user, isAuthenticated } = useAuth()
  const [countdown, setCountdown] = useState(5)
  const authType = searchParams.get('type') // 'login' or 'register'

  useEffect(() => {
    // Redirect to home if not authenticated
    if (!isAuthenticated) {
      router.push('/')
      return
    }

    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          router.push('/')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isAuthenticated, router])

  const isLogin = authType === 'login'
  const title = isLogin ? 'Đăng nhập thành công!' : 'Đăng ký thành công!'
  const message = isLogin
    ? 'Chào mừng bạn trở lại. Bạn có thể bắt đầu đặt xe ngay bây giờ.'
    : 'Tài khoản của bạn đã được tạo thành công. Chào mừng bạn đến với Tây Ninh Car!'

  return (
    <PageLayout mainClassName="flex-1 pt-24 pb-16 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-8 md:p-10 text-center">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-green-100 p-4">
                <CheckCircle2 className="h-16 w-16 text-green-600" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-slate-900 mb-3">{title}</h1>

            {/* Message */}
            <p className="text-slate-600 mb-6">{message}</p>

            {/* User Info */}
            {user && (
              <div className="bg-slate-50 rounded-lg p-4 mb-6 text-left">
                <p className="text-sm text-slate-500 mb-1">Thông tin tài khoản:</p>
                <p className="font-medium text-slate-900">{user.name}</p>
                <p className="text-sm text-slate-600">{user.email}</p>
                {user.phone && <p className="text-sm text-slate-600">{user.phone}</p>}
              </div>
            )}

            {/* Countdown */}
            <p className="text-sm text-slate-500 mb-6">
              Tự động chuyển hướng về trang chủ sau <span className="font-semibold text-blue-600">{countdown}</span> giây...
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => router.push('/')}
                className="flex-1 h-12 text-base font-medium bg-blue-600 hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
              >
                <Home className="h-4 w-4 mr-2" />
                Về trang chủ
              </Button>
              <Button
                onClick={() => router.push('/xe')}
                variant="outline"
                className="flex-1 h-12 text-base font-medium border-gray-300 hover:bg-slate-50 transition-colors duration-200 cursor-pointer"
              >
                Đặt xe ngay
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
    </PageLayout>
  )
}

export default function AuthSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center">
        <div className="text-slate-600">Đang tải...</div>
      </div>
    }>
      <AuthSuccessContent />
    </Suspense>
  )
}

