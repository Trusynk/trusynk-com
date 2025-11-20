import Hero from '@/components/hero'
// @ts-ignore: side-effect import for global CSS without type declarations
import './globals.css'
import Footer from '@/components/footer'
import Header from '@/components/header'
import FAQ from '@/components/faq'

export default async function HomePage() {
  return (
    <div className="flex flex-col min-h-screen w-screen items-center justify-center align-middle bg-brand-1">
      <Header />
      <div className="flex flex-col align-middle justify-center items-center">
        <Hero />
        <FAQ />
      </div>
      <Footer />
    </div>
  )
}
