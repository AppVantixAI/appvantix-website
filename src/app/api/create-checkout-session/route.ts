import { NextRequest, NextResponse } from 'next/server'
import { getStripeInstance } from '@/lib/stripe/config'
import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase'
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

    // Get the current user (you might need to implement proper auth here)
    const authHeader = request.headers.get('authorization')
    if (!authHeader) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
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