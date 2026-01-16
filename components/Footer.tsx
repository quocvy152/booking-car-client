'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Youtube, 
  Instagram,
  MessageCircle,
  Clock
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 cursor-pointer group">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 group-hover:bg-white/20 transition-colors duration-200">
                <Image
                  src="/logo.png"
                  alt="Tây Ninh Car"
                  width={120}
                  height={40}
                  className="h-6 w-auto sm:h-8 object-contain"
                  priority
                />
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Dịch vụ đặt xe Tây Ninh chuyên nghiệp với giá cả minh bạch. 
              Đưa đón sân bay, đi tỉnh, du lịch với tài xế uy tín.
            </p>
            {/* Social Media Links */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-500 transition-colors duration-200 cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-red-500 transition-colors duration-200 cursor-pointer"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-pink-500 transition-colors duration-200 cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://zalo.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                aria-label="Zalo"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Liên kết nhanh
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer text-sm"
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link 
                  href="/gioi-thieu" 
                  className="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer text-sm"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link 
                  href="/dich-vu" 
                  className="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer text-sm"
                >
                  Dịch vụ
                </Link>
              </li>
              <li>
                <Link 
                  href="/bang-gia" 
                  className="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer text-sm"
                >
                  Bảng giá
                </Link>
              </li>
              <li>
                <Link 
                  href="/lien-he" 
                  className="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer text-sm"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Dịch vụ
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/services/airport" 
                  className="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer text-sm"
                >
                  Đưa đón sân bay
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/intercity" 
                  className="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer text-sm"
                >
                  Đi tỉnh
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/tour" 
                  className="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer text-sm"
                >
                  Du lịch
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/with-driver" 
                  className="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer text-sm"
                >
                  Thuê xe có tài xế
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/self-drive" 
                  className="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer text-sm"
                >
                  Thuê xe tự lái
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Liên hệ
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <a 
                    href="tel:0123456789" 
                    className="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer text-sm block"
                  >
                    0123 456 789
                  </a>
                  <a 
                    href="tel:0987654321" 
                    className="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer text-sm block"
                  >
                    0987 654 321
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <a 
                  href="mailto:info@tayninhcar.com" 
                  className="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer text-sm"
                >
                  info@tayninhcar.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">
                  Tây Ninh, Việt Nam
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <div className="text-slate-400 text-sm">
                  <p>24/7 - Phục vụ mọi lúc</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-slate-500 text-center md:text-left">
              © {currentYear} Tây Ninh Car. Tất cả quyền được bảo lưu.
            </p>
            
            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-6">
              <Link 
                href="/chinh-sach-bao-mat" 
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Chính sách bảo mật
              </Link>
              <Link 
                href="/dieu-khoan" 
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Điều khoản sử dụng
              </Link>
              <Link 
                href="/hoan-tien" 
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Chính sách hoàn tiền
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

