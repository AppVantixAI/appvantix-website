import { NextRequest, NextResponse } from 'next/server'
import { getTopCustomers } from '@/lib/stripe/utils'

export async function GET(request: NextRequest) {
  try {
    // TODO: Add authentication middleware to verify admin user
    
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '10')
    
    const customers = await getTopCustomers(limit)
    
    return NextResponse.json({
      success: true,
      data: customers
    })
  } catch (error: any) {
    console.error('Customers API error:', error)
    return NextResponse.json({
      success: false,
      message: error.message || 'Failed to fetch customers'
    }, { status: 500 })
  }
}
