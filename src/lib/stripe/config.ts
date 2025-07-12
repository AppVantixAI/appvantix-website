import Stripe from 'stripe'

// Public key for client-side Stripe (required)
export const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!

// Validate required client-side environment variables
if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is required')
}

// Server-side configuration (optional for build time)
const stripeSecretKey = process.env.STRIPE_SECRET_KEY
export const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

// Create Stripe instance only if secret key is available
export const stripe = stripeSecretKey ? new Stripe(stripeSecretKey, {
  apiVersion: '2024-12-18.acacia',
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
