'use client'

import { useState, useEffect } from 'react'

interface DashboardStats {
  totalRevenue: number
  monthlyRecurringRevenue: number
  failedPayments: number
  pendingInvoices: number
  activeSubscriptions: number
  totalCustomers: number
  revenueGrowth: number
  subscriptionGrowth: number
}

interface CustomerData {
  id: string
  email: string
  name?: string
  totalSpent: number
  subscriptionStatus: string
  lastPayment?: {
    amount: number
    date: string
    status: string
  }
}

interface TransactionData {
  id: string
  customer: string
  amount: number
  status: string
  date: string
  description: string
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [customers, setCustomers] = useState<CustomerData[]>([])
  const [transactions, setTransactions] = useState<TransactionData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true)
        
        // Fetch dashboard stats
        const statsResponse = await fetch('/api/admin/dashboard')
        if (statsResponse.ok) {
          const statsData = await statsResponse.json()
          setStats(statsData.data)
        } else {
          console.error('Failed to fetch stats:', await statsResponse.text())
        }

        // Fetch top customers
        const customersResponse = await fetch('/api/admin/customers?limit=5')
        if (customersResponse.ok) {
          const customersData = await customersResponse.json()
          setCustomers(customersData.data)
        } else {
          console.error('Failed to fetch customers:', await customersResponse.text())
        }

        // Fetch recent transactions
        const transactionsResponse = await fetch('/api/admin/transactions?limit=10')
        if (transactionsResponse.ok) {
          const transactionsData = await transactionsResponse.json()
          setTransactions(transactionsData.data)
        } else {
          console.error('Failed to fetch transactions:', await transactionsResponse.text())
        }
      } catch (err) {
        console.error('Error fetching dashboard data:', err)
        setError('Failed to load dashboard data')
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <div className="text-red-800">{error}</div>
          <p className="text-red-600 text-sm mt-2">
            Make sure Stripe is properly configured with valid API keys.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Overview of your business metrics and customer data.
        </p>
      </div>

      {/* Stats Overview */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-sm font-medium text-gray-600">Total Revenue</h3>
            <p className="text-2xl font-bold text-gray-900 mt-2">
              ${stats.totalRevenue.toLocaleString()}
            </p>
            <p className={`text-sm mt-1 ${stats.revenueGrowth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {stats.revenueGrowth >= 0 ? '+' : ''}{stats.revenueGrowth.toFixed(1)}% this month
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-sm font-medium text-gray-600">Monthly Recurring Revenue</h3>
            <p className="text-2xl font-bold text-gray-900 mt-2">
              ${stats.monthlyRecurringRevenue.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500 mt-1">Active subscriptions</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-sm font-medium text-gray-600">Active Customers</h3>
            <p className="text-2xl font-bold text-gray-900 mt-2">{stats.totalCustomers}</p>
            <p className="text-sm text-gray-500 mt-1">{stats.activeSubscriptions} subscriptions</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-sm font-medium text-gray-600">Failed Payments</h3>
            <p className="text-2xl font-bold text-gray-900 mt-2">
              ${stats.failedPayments.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500 mt-1">Requires attention</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Customers */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Top Customers</h2>
          </div>
          <div className="p-6">
            {customers.length > 0 ? (
              <div className="space-y-4">
                {customers.map((customer) => (
                  <div key={customer.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">
                        {customer.name || customer.email}
                      </p>
                      <p className="text-sm text-gray-500">{customer.email}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">
                        ${customer.totalSpent.toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-500">{customer.subscriptionStatus}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">No customer data available</p>
            )}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
          </div>
          <div className="p-6">
            {transactions.length > 0 ? (
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{transaction.description}</p>
                      <p className="text-sm text-gray-500">{transaction.customer}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">
                        ${transaction.amount.toLocaleString()}
                      </p>
                      <p className={`text-sm ${
                        transaction.status === 'succeeded' ? 'text-green-600' : 
                        transaction.status === 'failed' ? 'text-red-600' : 'text-yellow-600'
                      }`}>
                        {transaction.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">No transaction data available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}