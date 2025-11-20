import { FAQ_ITEMS } from '@/data/faq-items'
import { H2, P } from './typography'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { useId } from 'react'

const FAQ = () => {
  const id = useId()

  return (
    <section
      id="faq"
      className="relative p-8 md:p-16 w-full md:w-2xl h-fit flex flex-col items-center justify-center overflow-hidden gap-4"
    >
      <H2>Got questions? We&apos;ve got you.</H2>
      <P className="text-center text-sm">
        Find clear, friendly answers to help you get the most out of Trusynk. No pressure, no
        confusion — just simple guidance to keep your networking flow smooth. And if you ever need
        more help, we&apos;re always here for you.
      </P>
      <Accordion type="single" collapsible className="w-full">
        {FAQ_ITEMS.slice(0, 7).map((item, index) => (
          <AccordionItem key={`${id}-${index}`} value={`${id}-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

export default FAQ
