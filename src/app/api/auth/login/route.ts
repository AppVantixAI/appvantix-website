import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()
    
    // TODO: Implement actual authentication logic
    // This is a placeholder implementation
    
    if (email === 'admin@example.com' && password === 'password') {
      return NextResponse.json({ 
        success: true, 
        user: { id: 1, email, role: 'admin' },
        token: 'mock-jwt-token'
      })
    }
    
    if (email === 'user@example.com' && password === 'password') {
      return NextResponse.json({ 
        success: true, 
        user: { id: 2, email, role: 'user' },
        token: 'mock-jwt-token'
      })
    }
    
    return NextResponse.json({ 
      success: false, 
      message: 'Invalid credentials' 
    }, { status: 401 })
    
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Server error' 
    }, { status: 500 })
  }
}
