import { getStripeInstance } from './config'

export async function testStripeConnection() {
  try {
    const stripe = getStripeInstance()
    
    // Test by fetching account information
    const account = await stripe.accounts.retrieve()
    
    return {
      success: true,
      accountId: account.id,
      country: account.country,
      currency: account.default_currency,
      email: account.email,
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    }
  }
}

export async function testWebhookEndpoint(webhookUrl: string) {
  try {
    const stripe = getStripeInstance()
    
    // List existing webhook endpoints
    const webhooks = await stripe.webhookEndpoints.list()
    
    const existingWebhook = webhooks.data.find(
      webhook => webhook.url === webhookUrl
    )
    
    if (existingWebhook) {
      return {
        success: true,
        webhook: existingWebhook,
        message: 'Webhook endpoint already exists',
      }
    }
    
    // Create a new webhook endpoint
    const webhook = await stripe.webhookEndpoints.create({
      url: webhookUrl,
      enabled_events: [
        'checkout.session.completed',
        'customer.subscription.created',
        'customer.subscription.updated',
        'customer.subscription.deleted',
        'invoice.payment_succeeded',
        'invoice.payment_failed',
      ],
    })
    
    return {
      success: true,
      webhook,
      message: 'Webhook endpoint created successfully',
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    }
  }
}

export const testCards = {
  success: '4242424242424242',
  decline: '4000000000000002',
  requiresAuthentication: '4000002500003155',
  insufficientFunds: '4000000000009995',
  expiredCard: '4000000000000069',
  incorrectCvc: '4000000000000127',
}

export function formatStripeAmount(amount: number, currency = 'usd') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(amount / 100)
}

export function validateStripeConfig() {
  const errors: string[] = []
  
  if (!process.env.STRIPE_SECRET_KEY) {
    errors.push('STRIPE_SECRET_KEY is not configured')
  }
  
  if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    errors.push('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not configured')
  }
  
  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    errors.push('STRIPE_WEBHOOK_SECRET is not configured')
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  }
}