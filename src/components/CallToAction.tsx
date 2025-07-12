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
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Ready to enhance your business with AI?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Let&apos;s build the car together. Schedule a consultation to see how our AI solutions can save your team time while enhancing human capabilities.
          </p>
          <Button href="/consultation" color="white" className="mt-10">
            Start Free Consultation
          </Button>
        </div>
      </Container>
    </section>
  )
}
