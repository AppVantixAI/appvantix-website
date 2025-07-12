'use client'

import { useState } from 'react'
import { Button } from '@/components/Button'

export default function StripeSetupPage() {
  const [testResult, setTestResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const testStripeConnection = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/stripe/test')
      const result = await response.json()
      setTestResult(result)
    } catch (error) {
      setTestResult({ success: false, error: 'Failed to test connection' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Stripe Integration Setup
          </h1>
          <p className="text-gray-600">
            Complete your Stripe integration in 3 simple steps
          </p>
        </div>

        {/* Setup Steps */}
        <div className="space-y-8">
          {/* Step 1 */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                1
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Create Stripe Account</h2>
            </div>
            <div className="ml-11">
              <p className="text-gray-600 mb-4">
                Sign up for a Stripe account and get your API keys
              </p>
              <div className="space-y-2">
                <p className="text-sm">
                  • Go to <a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">stripe.com</a> and create an account
                </p>
                <p className="text-sm">
                  • Navigate to Developers → API keys in your dashboard
                </p>
                <p className="text-sm">
                  • Copy your Publishable key (pk_test_...) and Secret key (sk_test_...)
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                2
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Configure Environment Variables</h2>
            </div>
            <div className="ml-11">
              <p className="text-gray-600 mb-4">
                Update your .env.local file with your Stripe keys
              </p>
              <div className="bg-gray-100 p-4 rounded-md text-sm font-mono">
                <div>STRIPE_SECRET_KEY=sk_test_your_secret_key_here</div>
                <div>NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here</div>
                <div>STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here</div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                3
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Set Up Webhooks</h2>
            </div>
            <div className="ml-11">
              <p className="text-gray-600 mb-4">
                Create a webhook endpoint in your Stripe dashboard
              </p>
              <div className="space-y-2">
                <p className="text-sm">
                  • Go to Developers → Webhooks in your Stripe dashboard
                </p>
                <p className="text-sm">
                  • Click &quot;Add endpoint&quot;
                </p>
                <p className="text-sm">
                  • Endpoint URL: <code className="bg-gray-100 px-2 py-1 rounded">https://your-domain.com/api/webhooks/stripe</code>
                </p>
                <p className="text-sm">
                  • Select these events: checkout.session.completed, customer.subscription.*, invoice.payment_*
                </p>
                <p className="text-sm">
                  • Copy the webhook signing secret to your .env.local
                </p>
              </div>
            </div>
          </div>

          {/* Test Connection */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Test Your Integration</h2>
            <div className="flex items-center space-x-4">
              <Button 
                onClick={testStripeConnection}
                disabled={loading}
                color="orange"
              >
                {loading ? 'Testing...' : 'Test Stripe Connection'}
              </Button>
              
              {testResult && (
                <div className={`p-3 rounded-md ${
                  testResult.success 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {testResult.success ? '✅ Connection successful!' : `❌ ${testResult.error || 'Connection failed'}`}
                </div>
              )}
            </div>
          </div>

          {/* Current Products */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Current Products</h2>
            <p className="text-gray-600 mb-4">
              These products are configured in your app. Update stripe-config.ts with your actual Stripe price IDs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold">BoltBridge Free</h3>
                <p className="text-sm text-gray-600">$0.00/month</p>
                <p className="text-xs text-gray-500 mt-1">Basic workspace for personal use</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold">BoltBridge Pro</h3>
                <p className="text-sm text-gray-600">$15.00/month</p>
                <p className="text-xs text-gray-500 mt-1">Advanced features for growing teams</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold">BoltBridge Premium</h3>
                <p className="text-sm text-gray-600">$25.00/month</p>
                <p className="text-xs text-gray-500 mt-1">Enterprise-grade workspace</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold">Website Management</h3>
                <p className="text-sm text-gray-600">$250-$750/month</p>
                <p className="text-xs text-gray-500 mt-1">Professional website services</p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
            <h2 className="text-xl font-semibold text-orange-900 mb-4">🎉 You&apos;re Almost Ready!</h2>
            <p className="text-orange-800 mb-4">
              Your Stripe integration is fully implemented. Once you complete the setup above:
            </p>
            <ul className="space-y-2 text-orange-700">
              <li>✅ Customers can purchase subscriptions and one-time products</li>
              <li>✅ Automatic webhook handling for payment events</li>
              <li>✅ Customer portal for self-service billing</li>
              <li>✅ Admin dashboard with revenue analytics</li>
              <li>✅ Secure payment processing with Stripe</li>
            </ul>
            <div className="mt-4">
              <Button href="/pricing" color="orange">
                View Pricing Page
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}