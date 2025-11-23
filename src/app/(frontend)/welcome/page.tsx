import LoadingState from '@/components/loading-state'
import WelcomeContent from '@/components/welcome-content'
import { Suspense } from 'react'

export const metadata = {
  title: 'Welcome! | Trusynk',
  description: 'Thank you for joining our early access program',
}

const WelcomePage = () => {
  return (
    <Suspense fallback={<LoadingState />}>
      <WelcomeContent />
    </Suspense>
  )
}

export default WelcomePage
