'use client'

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

// Only initialize Stripe if the publishable key is available
const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY 
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  : null

interface StripeProviderProps {
  children: React.ReactNode
}

export function StripeProvider({ children }: StripeProviderProps) {
  // If no Stripe key is configured, render children without Stripe context
  if (!stripePromise) {
    console.warn('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not configured. Stripe functionality will be disabled.')
    return <>{children}</>
  }

  return (
    <Elements stripe={stripePromise}>
      {children}
    </Elements>
  )
}