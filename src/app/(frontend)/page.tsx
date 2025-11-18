import Hero from '@/components/hero'
// @ts-ignore: side-effect import for global CSS without type declarations
import './globals.css'
import Footer from '@/components/footer'
import Header from '@/components/header'

export default async function HomePage() {
  return (
    <div className="flex flex-col min-h-screen w-screen items-center justify-center align-middle">
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}
