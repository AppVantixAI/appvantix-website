import { NextRequest, NextResponse } from 'next/server'
import { getRecentTransactions } from '@/lib/stripe/utils'

export async function GET(request: NextRequest) {
  try {
    // TODO: Add authentication middleware to verify admin user
    
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '20')
    
    const transactions = await getRecentTransactions(limit)
    
    return NextResponse.json({
      success: true,
      data: transactions
    })
  } catch (error: any) {
    console.error('Transactions API error:', error)
    return NextResponse.json({
      success: false,
      message: error.message || 'Failed to fetch transactions'
    }, { status: 500 })
  }
}
