'use client'

import { useState } from 'react'
import { MessageCircle, X, Facebook, MessageSquare } from 'lucide-react'

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)

  // Replace these with your actual Zalo and Facebook links
  const zaloLink = 'https://zalo.me/0123456789' // Update with your Zalo number/link
  const facebookLink = 'https://facebook.com/yourpage' // Update with your Facebook page link

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group"
        aria-label="Mở ChatBot"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            1
          </span>
        )}
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-80 max-w-sm bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform transition-all duration-300 ease-out opacity-100 translate-y-0">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 rounded-full p-2">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Chat với chúng tôi</h3>
                  <p className="text-xs text-blue-100">Chúng tôi sẽ phản hồi ngay!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-blue-100 transition-colors duration-200 cursor-pointer"
                aria-label="Đóng ChatBot"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 space-y-3">
            <p className="text-sm text-slate-600 mb-4">
              Chọn kênh liên hệ bạn muốn sử dụng:
            </p>

            {/* Zalo Button */}
            <a
              href={zaloLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 w-full bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg p-4 transition-all duration-200 cursor-pointer group"
            >
              <div className="bg-blue-600 rounded-lg p-2.5 group-hover:bg-blue-700 transition-colors duration-200">
                <MessageSquare className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 text-sm">Chat Zalo</h4>
                <p className="text-xs text-slate-600">Nhắn tin trực tiếp qua Zalo</p>
              </div>
              <svg
                className="h-5 w-5 text-slate-400 group-hover:text-slate-600 transition-colors duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>

            {/* Facebook Button */}
            <a
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 w-full bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg p-4 transition-all duration-200 cursor-pointer group"
            >
              <div className="bg-blue-600 rounded-lg p-2.5 group-hover:bg-blue-700 transition-colors duration-200">
                <Facebook className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 text-sm">Facebook Messenger</h4>
                <p className="text-xs text-slate-600">Chat qua Facebook Messenger</p>
              </div>
              <svg
                className="h-5 w-5 text-slate-400 group-hover:text-slate-600 transition-colors duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          {/* Footer */}
          <div className="bg-slate-50 border-t border-gray-200 p-3">
            <p className="text-xs text-slate-500 text-center">
              Phản hồi trong vòng vài phút
            </p>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-200"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

