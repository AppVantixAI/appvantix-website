import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-600 py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Ready to enhance your business with AI?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Let&apos;s build the car together. Schedule a consultation to see how our AI solutions can save your team time while enhancing human capabilities.
            feel like you’re doing something productive.
          </p>
          <Button href="/consultation" color="white" className="mt-10">
            Start Free Consultation
          </Button>
        </div>
      </Container>
    </section>
  )
}
