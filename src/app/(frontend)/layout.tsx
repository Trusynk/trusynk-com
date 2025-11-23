// @ts-ignore: side-effect import for global CSS without type declarations
import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['serif'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

export const metadata = {
  description:
    'Trusynk is the future of professional connectivity. Elevate your network with smart NFC cards, analytics, and an ecosystem built to take you beyond networking.',
  title: 'Trusynk | Beyond Networking',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body
        className={`${inter.className} ${playfairDisplay.className} bg-brand-1 h-screen min-w-screen overflow-x-hidden scroll-smooth`}
      >
        <main>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </main>
      </body>
    </html>
  )
}
