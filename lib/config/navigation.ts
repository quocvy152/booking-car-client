/**
 * Navigation configuration
 * Centralized navigation items used across Header, Footer, and other components
 */

export interface NavigationItem {
  href: string
  label: string
  icon?: React.ComponentType<{ className?: string }>
}

/**
 * Main navigation items for header
 */
export const mainNavigationItems: NavigationItem[] = [
  {
    href: '/',
    label: 'Trang chủ',
  },
  {
    href: '/gioi-thieu',
    label: 'Giới thiệu',
  },
  {
    href: '/dich-vu',
    label: 'Dịch vụ',
  },
  {
    href: '/xe',
    label: 'Danh sách xe',
  },
  {
    href: '/lien-he',
    label: 'Liên hệ',
  },
]

/**
 * Footer quick links (subset of main navigation)
 */
export const footerQuickLinks: NavigationItem[] = [
  {
    href: '/',
    label: 'Trang chủ',
  },
  {
    href: '/gioi-thieu',
    label: 'Giới thiệu',
  },
  {
    href: '/dich-vu',
    label: 'Dịch vụ',
  },
  {
    href: '/lien-he',
    label: 'Liên hệ',
  },
]

/**
 * Footer service links
 */
export const footerServiceLinks: NavigationItem[] = [
  {
    href: '/dich-vu/thue-xe-tu-lai',
    label: 'Thuê xe tự lái',
  },
  {
    href: '/dich-vu/thue-xe-co-tai-xe',
    label: 'Thuê xe có tài xế',
  },
]

/**
 * Footer legal links
 */
export const footerLegalLinks: NavigationItem[] = [
  {
    href: '/chinh-sach-bao-mat',
    label: 'Chính sách bảo mật',
  },
  {
    href: '/dieu-khoan',
    label: 'Điều khoản sử dụng',
  },
  {
    href: '/hoan-tien',
    label: 'Chính sách hoàn tiền',
  },
]
