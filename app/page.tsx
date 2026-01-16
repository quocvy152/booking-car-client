import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header />
      <HeroSection />
    </div>
  )
}

