'use client'

import { useAuth } from '@/hooks/useAuth'
import { useSubscription } from '@/hooks/useSubscription'
import { SubscriptionStatus } from '@/components/subscription/SubscriptionStatus'
import { CheckoutButton } from '@/components/checkout/CheckoutButton'
import { products } from '@/stripe-config'

export default function Dashboard() {
  const { user, loading: authLoading } = useAuth()
  const { subscription, loading: subLoading } = useSubscription()

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-600"></div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600">Please sign in to access your dashboard.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome, {user.email}!
            </h1>
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Subscription Status</h2>
              {subLoading ? (
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-48"></div>
                </div>
              ) : (
                <SubscriptionStatus />
              )}
            </div>
          </div>

          {/* Available Products */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">
                      ${product.price?.toFixed(2) || 'Free'}
                      {product.mode === 'subscription' && (
                        <span className="text-sm font-normal text-gray-500">/month</span>
                      )}
                    </div>
                    <CheckoutButton
                      priceId={product.priceId}
                      mode={product.mode}
                      className="text-sm"
                      disabled={
                        subscription?.price_id === product.priceId && 
                        subscription?.subscription_status === 'active'
                      }
                    >
                      {subscription?.price_id === product.priceId && 
                       subscription?.subscription_status === 'active' 
                        ? 'Current Plan' 
                        : product.mode === 'subscription' 
                          ? 'Subscribe' 
                          : 'Purchase'
                      }
                    </CheckoutButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}