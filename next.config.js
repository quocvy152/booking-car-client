/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Tạm thời cho phép tải ảnh từ bất kỳ domain nào (tắt tối ưu hóa)
    // Lưu ý: Cần restart dev server sau khi thay đổi
    unoptimized: true,
  },
}

module.exports = nextConfig

