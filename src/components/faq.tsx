import { FAQ_ITEMS } from '@/data/faq-items'
import { H2, H3, P } from './typography'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { useId } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import { topFAQs } from '@/lib/faq-utils'

const FAQ = () => {
  const id = useId()
  const topFaqs = topFAQs(FAQ_ITEMS)

  return (
    <section
      id="faq"
      className="relative p-8 md:p-16 w-full max-w-2xl mx-auto h-fit flex flex-col items-center justify-center gap-8"
    >
      <div className="flex flex-col gap-4 w-full">
        <H2 className="text-center">Got questions? We&apos;ve got you.</H2>
        <P className="text-center text-gray-11 text-sm md:text-base max-w-2xl mx-auto">
          Find clear, friendly answers to help you get the most out of Trusynk. No pressure, no
          confusion — just simple guidance to keep your networking flow smooth. And if you ever need
          more help, we&apos;re always here for you.
        </P>
      </div>

      <Accordion type="single" collapsible className="w-full max-w-3xl">
        {topFaqs.map((item, index) => (
          <AccordionItem key={`${id}-${index}`} value={`${id}-${index}`}>
            <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
            <AccordionContent className="text-left">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="flex flex-col items-center gap-4 mt-4">
        <H3 className="text-center">Have more questions?</H3>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild variant="outline">
            <Link href="mailto:support@trusynk.com" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Contact Technical Support
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/faq" className="flex items-center gap-2">
              Find more answers here
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FAQ
