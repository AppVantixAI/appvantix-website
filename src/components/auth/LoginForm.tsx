'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const { signIn, loading } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    try {
      await signIn(email, password)
      router.push('/user/dashboard')
    } catch (err) {
      setError('Login failed')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-y-8">
      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="text-sm text-red-700">{error}</div>
        </div>
      )}
      
      <TextField
        label="Email address"
        name="email"
        type="email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
      />
      
      <TextField
        label="Password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading}
      />
      
      <div>
        <Button 
          type="submit" 
          variant="solid" 
          color="orange" 
          className="w-full"
          disabled={loading}
        >
          <span>
            {loading ? 'Signing in...' : 'Sign in'} <span aria-hidden="true">&rarr;</span>
          </span>
        </Button>
      </div>
      
      <div className="text-center">
        <p className="text-sm text-gray-600">
          Don&apos;t have an account?{' '}
          <Link
            href="/register"
            className="font-medium text-orange-600 hover:underline"
          >
            Sign up for free
          </Link>
        </p>
      </div>
    </form>
  )
}