'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'

export function SignupForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const router = useRouter()
  const { signUp, loading } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long')
      return
    }

    try {
      await signUp(email, password)
      setSuccess(true)
      router.push('/user/dashboard')
    } catch (err) {
      setError('Signup failed')
    }
  }

  if (success) {
    return (
      <div className="mt-10">
        <div className="rounded-md bg-green-50 p-4">
          <div className="text-sm text-green-700">
            Account created successfully! You can now access your dashboard.
          </div>
        </div>
      </div>
    )
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
        autoComplete="new-password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading}
      />
      
      <TextField
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        autoComplete="new-password"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
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
            {loading ? 'Creating account...' : 'Create account'} <span aria-hidden="true">&rarr;</span>
          </span>
        </Button>
      </div>
      
      <div className="text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link
            href="/login"
            className="font-medium text-orange-600 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </form>
  )
}