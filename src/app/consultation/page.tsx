import { type Metadata } from 'next'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AI Consultation',
}

export default function ConsultationPage() {
  return (
    <>
      <Header />
      <main>
        <Container className="py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              AI Consultation Call
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Get personalized guidance on implementing AI solutions that enhance your business without replacing human expertise.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* What We Cover */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategy & Planning</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• AI opportunity assessment</li>
                  <li>• Technology stack recommendations</li>
                  <li>• Implementation roadmap</li>
                  <li>• ROI projections</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Wins</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Immediate automation opportunities</li>
                  <li>• Low-hanging fruit identification</li>
                  <li>• Quick implementation tactics</li>
                  <li>• Time-saving solutions</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Solutions</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Tailored AI applications</li>
                  <li>• Integration planning</li>
                  <li>• Scalability considerations</li>
                  <li>• Ongoing support options</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-orange-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
              <p className="text-gray-600 mb-6">
                Book your free 30-minute consultation call to discuss how AI can enhance your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/register" color="orange" className="text-lg px-8 py-3">
                  Schedule Free Consultation
                </Button>
                <Button href="/contact" variant="outline" className="text-lg px-8 py-3">
                  Contact Us First
                </Button>
              </div>
            </div>

            <div className="mt-12 text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Discovery</h3>
                    <p className="text-gray-600 text-sm">We&apos;ll learn about your current challenges and goals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Analysis</h3>
                    <p className="text-gray-600 text-sm">Identify AI opportunities specific to your business</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Recommendations</h3>
                    <p className="text-gray-600 text-sm">Get actionable next steps and solution options</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Next Steps</h3>
                    <p className="text-gray-600 text-sm">Clear roadmap for implementation and support</p>
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