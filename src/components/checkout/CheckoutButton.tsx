'use client'

import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/Button'

interface CheckoutButtonProps {
  priceId: string
  mode: 'payment' | 'subscription'
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

export function CheckoutButton({ 
  priceId, 
  mode, 
  children, 
  className,
  disabled = false 
}: CheckoutButtonProps) {
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleCheckout = async () => {
    if (!user) {
      window.location.href = '/login'
      return
    }

    setLoading(true)
    setError(null)

    try {
      // Get the user's session token
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        throw new Error('No active session')
      }

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          priceId,
          mode,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session')
      }

      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error('No checkout URL received')
      }
    } catch (err: any) {
      console.error('Checkout error:', err)
      setError(err.message || 'Failed to start checkout process')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Button
        onClick={handleCheckout}
        disabled={loading || disabled}
        className={className}
      >
        {loading ? 'Loading...' : children}
      </Button>
      {error && (
        <div className="mt-2 text-sm text-red-600">
          {error}
        </div>
      )}
    </div>
  )
}