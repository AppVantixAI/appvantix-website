import { StripeTestCard } from '@/components/stripe/StripeTestCard'

export default function StripeTestPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Stripe Integration Test
          </h1>
          <p className="text-gray-600">
            Test your Stripe integration with the components below
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Test Card */}
          <StripeTestCard />

          {/* Integration Status */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Integration Status</h3>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-sm">Stripe Configuration</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-sm">Database Schema</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-sm">Edge Functions</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-sm">React Components</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-sm">API Routes</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-medium text-yellow-800 mb-2">Next Steps:</h4>
              <ol className="text-sm text-yellow-700 space-y-1">
                <li>1. Set up your Stripe account</li>
                <li>2. Configure environment variables</li>
                <li>3. Set up webhook endpoints</li>
                <li>4. Test with the form above</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Documentation */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Setup Instructions</h3>
          
          <div className="prose max-w-none">
            <h4>1. Stripe Account Setup</h4>
            <ul>
              <li>Create a Stripe account at <a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">stripe.com</a></li>
              <li>Get your API keys from the Stripe Dashboard</li>
              <li>Create products and prices in your Stripe Dashboard</li>
            </ul>

            <h4>2. Environment Variables</h4>
            <p>Copy the values from <code>.env.local</code> and fill in your actual Stripe keys:</p>
            <ul>
              <li><code>STRIPE_SECRET_KEY</code> - Your secret key (starts with sk_)</li>
              <li><code>NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code> - Your publishable key (starts with pk_)</li>
              <li><code>STRIPE_WEBHOOK_SECRET</code> - Webhook endpoint secret</li>
            </ul>

            <h4>3. Webhook Setup</h4>
            <p>In your Stripe Dashboard, create a webhook endpoint pointing to:</p>
            <code>https://your-domain.com/api/webhooks/stripe</code>
            <p>Select these events:</p>
            <ul>
              <li>checkout.session.completed</li>
              <li>customer.subscription.created</li>
              <li>customer.subscription.updated</li>
              <li>customer.subscription.deleted</li>
              <li>invoice.payment_succeeded</li>
              <li>invoice.payment_failed</li>
            </ul>

            <h4>4. Product Configuration</h4>
            <p>Update <code>src/stripe-config.ts</code> with your actual product and price IDs from Stripe.</p>
          </div>
        </div>
      </div>
    </div>
  )
}