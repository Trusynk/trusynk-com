import Hero from '@/components/hero'
import './globals.css'
import Footer from '@/components/footer'

export default async function HomePage() {
  return (
    <div className="flex flex-col min-h-screen w-screen items-center justify-center align-middle">
      <Hero />
      <Footer />
    </div>
  )
}
