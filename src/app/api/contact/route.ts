import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json()
    
    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ 
        success: false, 
        message: 'Name, email, and message are required' 
      }, { status: 400 })
    }

    // TODO: Implement actual email sending logic
    // For now, just log the contact form submission
    console.log('Contact form submission:', {
      name,
      email,
      company,
      message,
      timestamp: new Date().toISOString()
    })
    
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message. We will get back to you soon!' 
    })
    
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to send message. Please try again.' 
    }, { status: 500 })
  }
}