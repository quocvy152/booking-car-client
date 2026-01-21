'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import LoginModal from '@/components/LoginModal'
import UserProfile from '@/components/UserProfile'
import { useAuth } from '@/lib/auth/use-auth'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const pathname = usePathname()
  const { isAuthenticated } = useAuth()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 cursor-pointer">
            <Image
              src="/logo.png"
              alt="Tây Ninh Car"
              width={120}
              height={40}
              className="h-8 w-auto sm:h-10 object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                pathname === '/' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Trang chủ
            </Link>
            <Link 
              href="/gioi-thieu" 
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                pathname === '/gioi-thieu' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Giới thiệu
            </Link>
            <Link 
              href="/dich-vu" 
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                pathname === '/dich-vu' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Dịch vụ
            </Link>
            <Link 
              href="/xe" 
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                pathname === '/xe' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Danh sách xe
            </Link>
            {/* <Link 
              href="/bang-gia" 
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                pathname === '/bang-gia' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Bảng giá
            </Link> */}
            <Link 
              href="/lien-he" 
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                pathname === '/lien-he' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Liên hệ
            </Link>
          </div>

          {/* Desktop Login/Register Button or User Profile */}
          <div className="hidden md:block">
            {isAuthenticated ? (
              <UserProfile />
            ) : (
              <Button 
                variant="default" 
                onClick={() => setLoginModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 cursor-pointer px-6 py-2.5"
              >
                Đăng nhập / Đăng ký
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 transition-colors duration-200 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-1 border-t border-gray-200 mt-2 pt-4">
            <Link 
              href="/" 
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                pathname === '/' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Trang chủ
            </Link>
            <Link 
              href="/gioi-thieu" 
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                pathname === '/gioi-thieu' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Giới thiệu
            </Link>
            <Link 
              href="/dich-vu" 
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                pathname === '/dich-vu' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Dịch vụ
            </Link>
            <Link 
              href="/xe" 
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                pathname === '/xe' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Danh sách xe
            </Link>
            {/* <Link 
              href="/bang-gia" 
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                pathname === '/bang-gia' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Bảng giá
            </Link> */}
            <Link 
              href="/lien-he" 
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                pathname === '/lien-he' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Liên hệ
            </Link>
            {isAuthenticated ? (
              <div className="mt-2">
                <UserProfile />
              </div>
            ) : (
              <Button 
                variant="default" 
                onClick={() => {
                  setMobileMenuOpen(false)
                  setLoginModalOpen(true)
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 cursor-pointer mt-2 px-6 py-2.5"
              >
                Đăng nhập / Đăng ký
              </Button>
            )}
          </div>
        )}
      </nav>

      {/* Login Modal */}
      <LoginModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
    </header>
  )
}

