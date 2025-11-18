import { FAQ_ITEMS } from '@/data/faq-items'
import { H2 } from './typography'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { useId } from 'react'

const FAQ = () => {
  const id = useId()

  return (
    <section
      id="faq"
      className="relative p-8 md:p-16 w-full md:w-2xl h-fit flex flex-col items-center justify-center overflow-hidden"
    >
      <H2>FAQs</H2>
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
