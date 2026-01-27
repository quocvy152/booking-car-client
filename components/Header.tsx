'use client'

import NavigationLinks from '@/components/NavigationLinks'
import { Button } from '@/components/ui/button'
import UserProfile from '@/components/UserProfile'
import { useAuth } from '@/lib/auth/use-auth'
import { mainNavigationItems } from '@/lib/config/navigation'
import { Menu, X } from 'lucide-react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useState } from 'react'

// Lazy load LoginModal only when needed
const LoginModal = dynamic(() => import('@/components/LoginModal'), {
  ssr: false, // Modal components typically don't need SSR
})

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const { isAuthenticated } = useAuth()

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev)
  }, [])

  const openLoginModal = useCallback(() => {
    setLoginModalOpen(true)
  }, [])

  const closeLoginModal = useCallback(() => {
    setLoginModalOpen(false)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  const handleMobileLoginClick = useCallback(() => {
    setMobileMenuOpen(false)
    setLoginModalOpen(true)
  }, [])

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
            <NavigationLinks
              items={mainNavigationItems}
              variant="desktop"
            />
          </div>

          {/* Desktop Login/Register Button or User Profile */}
          <div className="hidden md:block">
            {isAuthenticated ? (
              <UserProfile />
            ) : (
              <Button 
                variant="default" 
                onClick={openLoginModal}
                className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 cursor-pointer px-6 py-2.5"
              >
                Đăng nhập / Đăng ký
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
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
            <NavigationLinks
              items={mainNavigationItems}
              variant="mobile"
              onItemClick={closeMobileMenu}
            />
            {isAuthenticated ? (
              <div className="mt-2">
                <UserProfile />
              </div>
            ) : (
              <Button 
                variant="default" 
                onClick={handleMobileLoginClick}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 cursor-pointer mt-2 px-6 py-2.5"
              >
                Đăng nhập / Đăng ký
              </Button>
            )}
          </div>
        )}
      </nav>

      {/* Login Modal */}
      <LoginModal isOpen={loginModalOpen} onClose={closeLoginModal} />
    </header>
  )
}

export default React.memo(Header)

