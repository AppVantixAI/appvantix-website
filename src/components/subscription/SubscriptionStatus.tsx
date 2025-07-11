'use client'

import { useSubscription } from '@/hooks/useSubscription'

export function SubscriptionStatus() {
  const { subscription, loading, error } = useSubscription()

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-32"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-sm text-red-600">
        Error loading subscription
      </div>
    )
  }

  if (!subscription || subscription.subscription_status === 'not_started') {
    return (
      <div className="text-sm text-gray-500">
        No active subscription
      </div>
    )
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-50 ring-green-600/20'
      case 'trialing':
        return 'text-blue-600 bg-blue-50 ring-blue-600/20'
      case 'past_due':
        return 'text-yellow-600 bg-yellow-50 ring-yellow-600/20'
      case 'canceled':
        return 'text-red-600 bg-red-50 ring-red-600/20'
      default:
        return 'text-gray-600 bg-gray-50 ring-gray-600/20'
    }
  }

  const formatStatus = (status: string) => {
    return status.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  }

  return (
    <div className="flex items-center gap-3">
      <div className="text-sm font-medium text-gray-900">
        {subscription.product_name || 'Subscription'}
      </div>
      <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${getStatusColor(subscription.subscription_status)}`}>
        {formatStatus(subscription.subscription_status)}
      </span>
    </div>
  )
}