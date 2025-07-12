import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { getStripeInstance, getWebhookSecret } from '@/lib/stripe/config'
import Stripe from 'stripe'

export async function POST(request: NextRequest) {
  try {
    // Check if Stripe server-side configuration is available
    let stripe: Stripe
    let webhookSecret: string
    
    try {
      stripe = getStripeInstance()
      webhookSecret = getWebhookSecret()
    } catch (configError: any) {
      console.error('Stripe configuration error:', configError.message)
      return NextResponse.json(
        { error: 'Stripe server configuration not available' }, 
        { status: 503 }
      )
    }

    const body = await request.text()
    const signature = headers().get('stripe-signature')

    if (!signature) {
      return NextResponse.json({ error: 'No signature' }, { status: 400 })
    }

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err: any) {
      console.error('Webhook signature verification failed:', err.message)
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        console.log(`Payment succeeded: ${paymentIntent.id}`)
        await handlePaymentSuccess(paymentIntent)
        break

      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object as Stripe.PaymentIntent
        console.log(`Payment failed: ${failedPayment.id}`)
        await handlePaymentFailure(failedPayment)
        break

      case 'customer.subscription.created':
        const newSubscription = event.data.object as Stripe.Subscription
        console.log(`New subscription created: ${newSubscription.id}`)
        await handleSubscriptionCreated(newSubscription)
        break

      case 'invoice.payment_succeeded':
        const paidInvoice = event.data.object as Stripe.Invoice
        console.log(`Invoice paid: ${paidInvoice.id}`)
        await handleInvoicePaymentSucceeded(paidInvoice)
        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error: any) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}

// Event handlers - implement these based on your business logic
async function handlePaymentSuccess(paymentIntent: Stripe.PaymentIntent) {
  console.log('Processing successful payment:', paymentIntent.id)
}

async function handlePaymentFailure(paymentIntent: Stripe.PaymentIntent) {
  console.log('Processing failed payment:', paymentIntent.id)
}

async function handleSubscriptionCreated(subscription: Stripe.Subscription) {
  console.log('Processing new subscription:', subscription.id)
}

async function handleInvoicePaymentSucceeded(invoice: Stripe.Invoice) {
  console.log('Processing successful invoice payment:', invoice.id)
}
