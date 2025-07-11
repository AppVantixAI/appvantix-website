import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Pricing } from '@/components/Pricing'

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <div className="py-20">
          <Pricing />
        </div>
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}