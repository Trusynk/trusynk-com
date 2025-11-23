import CategorizedFAQ from '@/components/categorized-faq'
import LoadingState from '@/components/loading-state'
import { Suspense } from 'react'

export const metadata = {
  title: 'FAQ - Frequently Asked Questions | Trusynk',
  description: 'Find answers to common questions about Trusynk',
}

const FAQ = () => {
  return (
    <Suspense fallback={<LoadingState />}>
      <CategorizedFAQ />
    </Suspense>
  )
}

export default FAQ
