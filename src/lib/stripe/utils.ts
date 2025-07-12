import { getStripeInstance } from './config'
import Stripe from 'stripe'

export interface DashboardStats {
  totalRevenue: number
  monthlyRecurringRevenue: number
  failedPayments: number
  pendingInvoices: number
  activeSubscriptions: number
  totalCustomers: number
  revenueGrowth: number
  subscriptionGrowth: number
}

export interface CustomerData {
  id: string
  email: string
  name?: string
  totalSpent: number
  subscriptionStatus: string
  lastPayment?: {
    amount: number
    date: string
    status: string
  }
}

export interface TransactionData {
  id: string
  customer: string
  amount: number
  status: string
  date: string
  description: string
  invoice?: string
}

export async function getDashboardStats(): Promise<DashboardStats> {
  try {
    // Get Stripe instance with error handling
    let stripe
    try {
      stripe = getStripeInstance()
    } catch (configError: any) {
      console.error('Stripe configuration error:', configError.message)
      throw new Error('Stripe is not properly configured. Please check your API keys.')
    }
    
    // Get current period (last 30 days)
    const now = new Date()
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
    const sixtyDaysAgo = new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000)

    // Fetch charges for revenue calculation
    const currentCharges = await stripe.charges.list({
      created: {
        gte: Math.floor(thirtyDaysAgo.getTime() / 1000),
      },
      limit: 100,
    })

    const previousCharges = await stripe.charges.list({
      created: {
        gte: Math.floor(sixtyDaysAgo.getTime() / 1000),
        lt: Math.floor(thirtyDaysAgo.getTime() / 1000),
      },
      limit: 100,
    })

    // Calculate revenue
    const currentRevenue = currentCharges.data
      .filter(charge => charge.status === 'succeeded')
      .reduce((sum, charge) => sum + charge.amount, 0) / 100

    const previousRevenue = previousCharges.data
      .filter(charge => charge.status === 'succeeded')
      .reduce((sum, charge) => sum + charge.amount, 0) / 100

    const revenueGrowth = previousRevenue > 0 
      ? ((currentRevenue - previousRevenue) / previousRevenue) * 100 
      : 0

    // Get failed payments
    const failedCharges = await stripe.charges.list({
      created: {
        gte: Math.floor(thirtyDaysAgo.getTime() / 1000),
      },
      limit: 100,
    })

    const failedPayments = failedCharges.data
      .filter(charge => charge.status === 'failed')
      .reduce((sum, charge) => sum + charge.amount, 0) / 100

    // Get subscriptions
    const subscriptions = await stripe.subscriptions.list({
      status: 'active',
      limit: 100,
    })

    const activeSubscriptions = subscriptions.data.length

    // Calculate MRR
    const monthlyRecurringRevenue = subscriptions.data.reduce((sum, sub) => {
      const price = sub.items.data[0]?.price
      if (price && price.recurring?.interval === 'month') {
        return sum + (price.unit_amount || 0) / 100
      }
      return sum
    }, 0)

    // Get customers
    const customers = await stripe.customers.list({
      limit: 100,
    })

    const totalCustomers = customers.data.length

    // Get pending invoices
    const invoices = await stripe.invoices.list({
      status: 'open',
      limit: 100,
    })

    const pendingInvoices = invoices.data.reduce((sum, invoice) => sum + invoice.amount_due, 0) / 100

    return {
      totalRevenue: currentRevenue,
      monthlyRecurringRevenue,
      failedPayments,
      pendingInvoices,
      activeSubscriptions,
      totalCustomers,
      revenueGrowth,
      subscriptionGrowth: 0, // Would need historical data to calculate
    }
  } catch (error) {
    console.error('Error fetching dashboard stats:', error)
    throw new Error('Failed to fetch dashboard statistics')
  }
}

export async function getTopCustomers(limit: number = 10): Promise<CustomerData[]> {
  try {
    let stripe
    try {
      stripe = getStripeInstance()
    } catch (configError: any) {
      console.error('Stripe configuration error:', configError.message)
      throw new Error('Stripe is not properly configured. Please check your API keys.')
    }
    
    const customers = await stripe.customers.list({
      limit,
      expand: ['data.subscriptions'],
    })

    const customerData: CustomerData[] = []

    for (const customer of customers.data) {
      // Get customer's charges to calculate total spent
      const charges = await stripe.charges.list({
        customer: customer.id,
        limit: 100,
      })

      const totalSpent = charges.data
        .filter(charge => charge.status === 'succeeded')
        .reduce((sum, charge) => sum + charge.amount, 0) / 100

      // Get subscription status
      const subscriptions = await stripe.subscriptions.list({
        customer: customer.id,
        limit: 1,
      })

      const subscriptionStatus = subscriptions.data[0]?.status || 'none'

      // Get last payment
      const lastCharge = charges.data
        .filter(charge => charge.status === 'succeeded')
        .sort((a, b) => b.created - a.created)[0]

      const lastPayment = lastCharge ? {
        amount: lastCharge.amount / 100,
        date: new Date(lastCharge.created * 1000).toISOString(),
        status: lastCharge.status,
      } : undefined

      customerData.push({
        id: customer.id,
        email: customer.email || '',
        name: customer.name || undefined,
        totalSpent,
        subscriptionStatus,
        lastPayment,
      })
    }

    return customerData.sort((a, b) => b.totalSpent - a.totalSpent)
  } catch (error) {
    console.error('Error fetching top customers:', error)
    throw new Error('Failed to fetch customer data')
  }
}

export async function getRecentTransactions(limit: number = 20): Promise<TransactionData[]> {
  try {
    let stripe
    try {
      stripe = getStripeInstance()
    } catch (configError: any) {
      console.error('Stripe configuration error:', configError.message)
      throw new Error('Stripe is not properly configured. Please check your API keys.')
    }
    
    const charges = await stripe.charges.list({
      limit,
      expand: ['data.customer'],
    })

    return charges.data.map(charge => ({
      id: charge.id,
      customer: typeof charge.customer === 'string' 
        ? charge.customer 
        : (charge.customer && 'email' in charge.customer) ? charge.customer.email || 'Unknown' : 'Unknown',
      amount: charge.amount / 100,
      status: charge.status,
      date: new Date(charge.created * 1000).toISOString(),
      description: charge.description || 'Payment',
    }))
  } catch (error) {
    console.error('Error fetching recent transactions:', error)
    throw new Error('Failed to fetch transaction data')
  }
}

export async function createCheckoutSession({
  priceId,
  customerId,
  mode,
  successUrl,
  cancelUrl,
}: {
  priceId: string
  customerId: string
  mode: 'payment' | 'subscription'
  successUrl: string
  cancelUrl: string
}): Promise<Stripe.Checkout.Session> {
  try {
    const stripe = getStripeInstance()
    
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode,
      success_url: successUrl,
      cancel_url: cancelUrl,
      allow_promotion_codes: true,
      billing_address_collection: 'required',
    })

    return session
  } catch (error) {
    console.error('Error creating checkout session:', error)
    throw new Error('Failed to create checkout session')
  }
}

export async function createCustomer({
  email,
  name,
  metadata,
}: {
  email: string
  name?: string
  metadata?: Record<string, string>
}): Promise<Stripe.Customer> {
  try {
    const stripe = getStripeInstance()
    
    const customer = await stripe.customers.create({
      email,
      name,
      metadata,
    })

    return customer
  } catch (error) {
    console.error('Error creating customer:', error)
    throw new Error('Failed to create customer')
  }
}

export async function getCustomerPortalUrl(customerId: string, returnUrl: string): Promise<string> {
  try {
    const stripe = getStripeInstance()
    
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: returnUrl,
    })

    return session.url
  } catch (error) {
    console.error('Error creating customer portal session:', error)
    throw new Error('Failed to create customer portal session')
  }
}