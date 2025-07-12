import Stripe from 'stripe'

// Public key for client-side Stripe (required)
export const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

// Only validate in runtime, not during build
if (typeof window !== 'undefined' && !stripePublishableKey) {
  console.warn('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not configured')
}

// Server-side configuration (optional for build time)
const stripeSecretKey = process.env.STRIPE_SECRET_KEY
export const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

// Create Stripe instance only if secret key is available
export const stripe = stripeSecretKey ? new Stripe(stripeSecretKey, {
  apiVersion: '2025-06-30.basil',
  appInfo: {
    name: 'AppVantix',
    version: '1.0.0',
  },
}) : null

// Helper function to get Stripe instance with error handling
export function getStripeInstance(): Stripe {
  if (!stripe) {
    throw new Error('Stripe server-side configuration is not available. Please set STRIPE_SECRET_KEY environment variable.')
  }
  return stripe
}

// Helper function to get webhook secret with error handling
export function getWebhookSecret(): string {
  if (!webhookSecret) {
    throw new Error('Stripe webhook secret is not available. Please set STRIPE_WEBHOOK_SECRET environment variable.')
  }
  return webhookSecret
}

// Helper function to get publishable key with error handling
export function getStripePublishableKey(): string {
  if (!stripePublishableKey) {
    throw new Error('Stripe publishable key is not available. Please set NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY environment variable.')
  }
  return stripePublishableKey
}
