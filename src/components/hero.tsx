import React from 'react'
import { H1, LinkP, P } from './typography'
import { Button } from './ui/button'
import { ArrowRight, Info, Rocket } from 'lucide-react'
import Link from 'next/link'
import { Badge } from './ui/badge'

export default function Hero(): React.ReactElement {
  return (
    <section
      id="hero"
      className="relative w-screen p-8 md:p-16 flex flex-col items-center justify-center overflow-hidden mt-32"
    >
      <div className="flex flex-col items-center justify-center text-center md:w-2xl gap-4">
        <Badge variant="default" className="bg-yellow-400 text-yellow-900">
          <Info /> Trusynk is still on development.
        </Badge>
        <H1>
          <span className="font-light italic">Turn Real-World Conversations into Pipeline </span>
          <span className="font-normal italic font-playfair-display">Automatically.</span>
        </H1>
        <P className="font-normal text-gray-11">
          One platform that captures contacts, enriches data, and pushes everything straight into
          your pipeline.
        </P>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Button asChild className="capitalize rounded-4xl w-64 max-w-2xl md:w-auto">
            <Link href="https://app.trusynk.com/" target="_blank" rel="noopener noreferrer">
              <Rocket /> Start capturing leads
            </Link>
          </Button>
          <Button variant="outline" className="capitalize rounded-4xl max-w-2xl w-64 md:w-auto">
            see how it works <ArrowRight />
          </Button>
        </div>
        <P className="font-normal text-xs text-gray-11">
          Stop losing leads. Start tapping.{' '}
          <LinkP href="" className="text-xs font-normal text-brand-11">
            Join waitlist
          </LinkP>
        </P>
      </div>
    </section>
  )
}
