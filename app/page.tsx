import HeroSection from '@/components/HeroSection'
import PageLayout from '@/components/PageLayout'

export const metadata = {
  title: 'Trang Chủ - Tây Ninh Car',
  description: 'Đặt xe Tây Ninh chuyên nghiệp với giá cả minh bạch. Thuê xe tự lái và thuê xe có tài xế uy tín. Phục vụ 24/7.',
}

export default function Home() {
  return (
    <PageLayout mainClassName="flex-1">
      <HeroSection />
    </PageLayout>
  )
}

