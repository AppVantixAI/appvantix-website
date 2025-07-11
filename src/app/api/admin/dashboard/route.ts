import { NextRequest, NextResponse } from 'next/server'
import { getDashboardStats } from '@/lib/stripe/utils'

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    // TODO: Add authentication middleware to verify admin user
    
    const stats = await getDashboardStats()
    
    return NextResponse.json({
      success: true,
      data: stats
    })
  } catch (error: any) {
    console.error('Dashboard stats API error:', error)
    return NextResponse.json({
      success: false,
      message: error.message || 'Failed to fetch dashboard statistics'
    }, { status: 500 })
  }
}
