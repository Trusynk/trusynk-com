import LoadingState from '@/components/loading-state'
import WelcomeContent from '@/components/welcome-content'
import { Suspense } from 'react'

const WelcomePage = () => {
  return (
    <Suspense fallback={<LoadingState />}>
      <WelcomeContent />
    </Suspense>
  )
}

export default WelcomePage
