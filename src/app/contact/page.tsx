import { type Metadata } from 'next'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { TextField } from '@/components/Fields'

export const metadata: Metadata = {
  title: 'Contact Us',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <Container className="py-20">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Ready to enhance your business with AI? Let&apos;s discuss how we can help you build solutions that save time while keeping humans at the center.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <TextField
                    label="Name"
                    name="name"
                    type="text"
                    required
                  />
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    required
                  />
                  <TextField
                    label="Company"
                    name="company"
                    type="text"
                  />
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:bg-white focus:outline-hidden focus:ring-orange-500 sm:text-sm"
                      placeholder="Tell us about your project or how we can help..."
                      required
                    />
                  </div>
                  <Button type="submit" color="orange" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Get in touch</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">
                      <a href="mailto:hello@appvantix.com" className="text-orange-600 hover:text-orange-700">
                        hello@appvantix.com
                      </a>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Schedule a Call</h3>
                    <p className="mt-1 text-gray-600">
                      Book a free consultation to discuss your AI needs
                    </p>
                    <Button href="/consultation" color="orange" className="mt-2">
                      Schedule Consultation
                    </Button>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Response Time</h3>
                    <p className="mt-1 text-gray-600">
                      We typically respond within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}