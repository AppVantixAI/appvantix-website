import { NextRequest, NextResponse } from 'next/server'
import { testStripeConnection, validateStripeConfig } from '@/lib/stripe/test-utils'

export async function GET(request: NextRequest) {
  try {
    // Validate configuration
    const configValidation = validateStripeConfig()
    
    if (!configValidation.isValid) {
      return NextResponse.json({
        success: false,
        message: 'Stripe configuration is incomplete',
        errors: configValidation.errors,
      }, { status: 400 })
    }
    
    // Test connection
    const connectionTest = await testStripeConnection()
    
    if (!connectionTest.success) {
      return NextResponse.json({
        success: false,
        message: 'Failed to connect to Stripe',
        error: connectionTest.error,
      }, { status: 500 })
    }
    
    return NextResponse.json({
      success: true,
      message: 'Stripe integration is working correctly',
      account: {
        id: connectionTest.accountId,
        country: connectionTest.country,
        currency: connectionTest.currency,
        email: connectionTest.email,
      },
    })
  } catch (error: any) {
    console.error('Stripe test error:', error)
    return NextResponse.json({
      success: false,
      message: 'Unexpected error during Stripe test',
      error: error.message,
    }, { status: 500 })
  }
}