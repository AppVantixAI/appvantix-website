import { NextRequest, NextResponse } from 'next/server'
import { getStripeInstance } from '@/lib/stripe/config'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: NextRequest) {
  try {
    // Check if Stripe server-side configuration is available
    let stripe
    try {
      stripe = getStripeInstance()
    } catch (configError: any) {
      console.error('Stripe configuration error:', configError.message)
      return NextResponse.json(
        { error: 'Stripe server configuration not available' }, 
        { status: 503 }
      )
    }

    const { returnUrl } = await request.json()

    if (!returnUrl) {
      return NextResponse.json({ error: 'Return URL is required' }, { status: 400 })
    }

    // Get the current user from Supabase auth
    const authHeader = request.headers.get('authorization')
    if (!authHeader) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const token = authHeader.replace('Bearer ', '')
    const { data: { user }, error: authError } = await supabase.auth.getUser(token)

    if (authError || !user) {
      return NextResponse.json({ error: 'Invalid authentication' }, { status: 401 })
    }

    // Get customer ID from database
    const { data: customer, error: customerError } = await supabase
      .from('stripe_customers')
      .select('customer_id')
      .eq('user_id', user.id)
      .single()

    if (customerError || !customer) {
      return NextResponse.json({ error: 'Customer not found' }, { status: 404 })
    }

    // Create billing portal session
    const session = await stripe.billingPortal.sessions.create({
      customer: customer.customer_id,
      return_url: returnUrl,
    })

    return NextResponse.json({ url: session.url })
  } catch (error: any) {
    console.error('Customer portal creation failed:', error)
    return NextResponse.json(
      { error: 'Failed to create customer portal session' },
      { status: 500 }
    )
  }
}