'use client'

import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/Button'

interface CustomerPortalButtonProps {
  children: React.ReactNode
  className?: string
}

export function CustomerPortalButton({ children, className }: CustomerPortalButtonProps) {
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handlePortalAccess = async () => {
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

      const response = await fetch('/api/customer-portal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          returnUrl: `${window.location.origin}/user/account`,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to access customer portal')
      }

      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error('No portal URL received')
      }
    } catch (err: any) {
      console.error('Portal access error:', err)
      setError(err.message || 'Failed to access customer portal')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Button
        onClick={handlePortalAccess}
        disabled={loading}
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