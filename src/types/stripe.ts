// Stripe-related types for the admin dashboard

export interface StripeCustomer {
  id: string
  email: string
  name?: string
  phone?: string
  created: number
  description?: string
  metadata: Record<string, string>
  subscriptions?: StripeSubscription[]
  totalSpent: number
  lastPayment?: StripePayment
}

export interface StripePayment {
  id: string
  amount: number
  currency: string
  status: 'succeeded' | 'pending' | 'failed' | 'canceled' | 'requires_action'
  created: number
  customer: string
  description?: string
  receipt_url?: string
  invoice?: string
  payment_method?: string
}

export interface StripeSubscription {
  id: string
  customer: string
  status: 'active' | 'past_due' | 'canceled' | 'incomplete' | 'trialing' | 'paused'
  created: number
  current_period_start: number
  current_period_end: number
  plan: StripePlan
  quantity: number
  trial_start?: number
  trial_end?: number
}

export interface StripePlan {
  id: string
  nickname?: string
  amount: number
  currency: string
  interval: 'day' | 'week' | 'month' | 'year'
  interval_count: number
}

export interface StripeInvoice {
  id: string
  customer: string
  amount_due: number
  amount_paid: number
  currency: string
  status: 'draft' | 'open' | 'paid' | 'void' | 'uncollectible'
  created: number
  due_date?: number
  number: string
  hosted_invoice_url?: string
  invoice_pdf?: string
}

export interface StripeDashboardStats {
  totalRevenue: number
  monthlyRecurringRevenue: number
  failedPayments: number
  pendingInvoices: number
  activeSubscriptions: number
  totalCustomers: number
  revenueGrowth: number
  subscriptionGrowth: number
}

export interface StripeWebhookEvent {
  id: string
  type: string
  created: number
  data: {
    object: any
    previous_attributes?: any
  }
}
