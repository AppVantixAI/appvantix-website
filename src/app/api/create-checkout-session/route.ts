import { NextRequest, NextResponse } from 'next/server'
import { getStripeInstance } from '@/lib/stripe/config'
import { createClient } from '@supabase/supabase-js'
import { getProductByPriceId } from '@/stripe-config'

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

    const { priceId, mode = 'subscription' } = await request.json()

    if (!priceId) {
      return NextResponse.json({ error: 'Price ID is required' }, { status: 400 })
    }

    // Verify the product exists in our config
    const product = getProductByPriceId(priceId)
    if (!product) {
      return NextResponse.json({ error: 'Invalid product' }, { status: 400 })
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

    // Check if customer already exists
    const { data: existingCustomer } = await supabase
      .from('stripe_customers')
      .select('customer_id')
      .eq('user_id', user.id)
      .single()

    let customerId = existingCustomer?.customer_id

    // Create Stripe customer if doesn't exist
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        metadata: {
          user_id: user.id,
        },
      })

      // Save customer to database
      await supabase
        .from('stripe_customers')
        .insert({
          user_id: user.id,
          customer_id: customer.id,
        })

      customerId = customer.id
    }

    // Create checkout session
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
      success_url: `${request.nextUrl.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/pricing`,
      allow_promotion_codes: true,
      billing_address_collection: 'required',
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error: any) {
    console.error('Checkout session creation failed:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}