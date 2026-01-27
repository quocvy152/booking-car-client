import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { cn } from '@/lib/utils'

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
  mainClassName?: string
}

export default function PageLayout({ 
  children, 
  className,
  mainClassName 
}: PageLayoutProps) {
  return (
    <div className={cn(
      "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex flex-col",
      className
    )}>
      <Header />
      <main className={cn("flex-1 pt-24 pb-16", mainClassName)}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
