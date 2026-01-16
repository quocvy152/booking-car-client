'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 cursor-pointer">
            <span className="text-xl sm:text-2xl font-bold text-slate-900">Tây Ninh Car</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-slate-700 hover:text-slate-900 transition-colors duration-200 cursor-pointer"
            >
              Trang chủ
            </Link>
            <Link 
              href="/about" 
              className="text-slate-700 hover:text-slate-900 transition-colors duration-200 cursor-pointer"
            >
              Giới thiệu
            </Link>
            <Link 
              href="/contact" 
              className="text-slate-700 hover:text-slate-900 transition-colors duration-200 cursor-pointer"
            >
              Liên hệ
            </Link>
          </div>

          {/* Desktop Login/Register Button */}
          <div className="hidden md:block">
            <Button 
              variant="default" 
              className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 cursor-pointer"
            >
              Đăng nhập / Đăng ký
            </Button>
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
          <div className="md:hidden pb-4 space-y-3 border-t border-gray-200 mt-2 pt-4">
            <Link 
              href="/" 
              className="block text-slate-700 hover:text-slate-900 transition-colors duration-200 cursor-pointer py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Trang chủ
            </Link>
            <Link 
              href="/about" 
              className="block text-slate-700 hover:text-slate-900 transition-colors duration-200 cursor-pointer py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Giới thiệu
            </Link>
            <Link 
              href="/contact" 
              className="block text-slate-700 hover:text-slate-900 transition-colors duration-200 cursor-pointer py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Liên hệ
            </Link>
            <Button 
              variant="default" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 cursor-pointer mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Đăng nhập / Đăng ký
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}

