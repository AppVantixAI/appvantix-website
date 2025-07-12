'use client'

import { useEffect, useState } from 'react'
import { supabase, isSupabaseConfigured, subscribeToUserData } from '@/lib/supabase'
import { useAuth } from './useAuth'
import { getProductByPriceId } from '@/stripe-config'

export interface UserSubscription {
  customer_id: string
  subscription_id: string | null
  subscription_status: 'not_started' | 'incomplete' | 'incomplete_expired' | 'trialing' | 'active' | 'past_due' | 'canceled' | 'unpaid' | 'paused'
  price_id: string | null
  current_period_start: number | null
  current_period_end: number | null
  cancel_at_period_end: boolean
  payment_method_brand: string | null
  payment_method_last4: string | null
  product_name?: string
}

export function useSubscription() {
  const { user } = useAuth()
  const [subscription, setSubscription] = useState<UserSubscription | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!user) {
      setSubscription(null)
      setLoading(false)
      return
    }

    if (!isSupabaseConfigured()) {
      setError('Supabase is not configured')
      setLoading(false)
      return
    }
    const fetchSubscription = async () => {
      try {
        setLoading(true)
        setError(null)

        const { data, error } = await supabase
          .from('stripe_user_subscriptions')
          .select('*')
          .maybeSingle()

        if (error) {
          console.error('Error fetching subscription:', error)
          setError('Failed to fetch subscription data')
          return
        }

        if (data) {
          const product = data.price_id ? getProductByPriceId(data.price_id) : null
          setSubscription({
            ...data,
            product_name: product?.name
          })
        } else {
          setSubscription(null)
        }
      } catch (err) {
        console.error('Unexpected error:', err)
        setError('An unexpected error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchSubscription()

    // Set up real-time subscription to subscription changes
    const channel = subscribeToUserData(user.id, (payload) => {
      console.log('Subscription data changed:', payload)
      fetchSubscription() // Refetch data when changes occur
    })

    return () => {
      supabase.removeChannel(channel)
    }
  }, [user])

  return {
    subscription,
    loading,
    error,
    refetch: async () => {
      if (user && isSupabaseConfigured()) {
        await fetchSubscription()
      }
    }
  }
}