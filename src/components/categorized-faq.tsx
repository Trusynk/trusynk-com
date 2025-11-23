import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion' // ← CHANGE THIS: Use styled component, not raw Radix
import { Mail } from 'lucide-react'
import Link from 'next/link'
import { H1, P, H3 } from './typography'
import { Button } from './ui/button'
import { FAQ_ITEMS } from '@/data/faq-items'
import { categorizeFAQs } from '@/lib/faq-utils'
import Feedback from './feedback'

const CategorizedFAQ = () => {
  const categories = categorizeFAQs(FAQ_ITEMS)

  return (
    <div className="font-inter flex flex-col items-center justify-center min-h-screen w-screen bg-brand-1 px-4 py-32 md:px-8">
      <div className="max-w-xl w-full flex flex-col gap-8 items-center justify-center">
        <div className="text-center flex flex-col gap-4 justify-center items-center w-full">
          <H1>We&apos;re Here to Help</H1>
          <P className="text-gray-11 text-sm">
            If you can&apos;t find an answer that you&apos;re looking for, feel free to reach out to
            us.
          </P>
          <Button asChild variant="outline">
            <Link href="mailto:support@trusynk.com">
              <Mail />
              Contact Support
            </Link>
          </Button>
        </div>

        <div className="w-full space-y-12">
          {categories.map((category) => {
            const categoryId = category.name.toLowerCase().replace(/\s+/g, '-')

            return (
              <div key={category.name} id={categoryId} className="flex flex-col gap-4 scroll-mt-16">
                <Link href={`#${categoryId}`}>
                  <H3 className="text-brand-12 hover:underline">{category.name}</H3>
                </Link>
                <Accordion type="single" collapsible className="w-full">
                  {category.items.map((item) => (
                    <AccordionItem key={item.id} value={item.id}>
                      <AccordionTrigger className="text-brand-12">{item.question}</AccordionTrigger>
                      <AccordionContent className="text-gray-11 flex flex-col items-start gap-4 justify-start">
                        {item.answer}
                        <Feedback contentType="faq" question="Was this conversation helpful?" />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CategorizedFAQ
