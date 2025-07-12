'use client'

import { Fragment, useState } from 'react'
import Image from 'next/image'
import {
  ArrowDownCircleIcon,
  ArrowPathIcon,
  ArrowUpCircleIcon,
  PlusSmallIcon,
} from '@heroicons/react/20/solid'

// This will be replaced with actual Stripe data
const stats = [
  { name: 'Total Revenue', value: '$405,091.00', change: '+4.75%', changeType: 'positive' },
  { name: 'Failed Payments', value: '$12,787.00', change: '+54.02%', changeType: 'negative' },
  { name: 'Pending Subscriptions', value: '$245,988.00', change: '-1.39%', changeType: 'positive' },
  { name: 'Monthly Recurring Revenue', value: '$30,156.00', change: '+10.18%', changeType: 'positive' },
]

const statuses = {
  Paid: 'text-green-700 bg-green-50 ring-green-600/20',
  Pending: 'text-yellow-600 bg-yellow-50 ring-yellow-500/10',
  Failed: 'text-red-700 bg-red-50 ring-red-600/10',
  Refunded: 'text-gray-600 bg-gray-50 ring-gray-500/10',
}

// This will be fetched from Stripe API
const recentTransactions = [
  {
    date: 'Today',
    dateTime: '2024-01-15',
    transactions: [
      {
        id: 1,
        invoiceNumber: 'in_1234567890',
        href: '#',
        amount: '$7,600.00 USD',
        tax: '$500.00',
        status: 'Paid',
        client: 'Acme Corp',
        description: 'Pro Subscription',
        icon: ArrowUpCircleIcon,
      },
      {
        id: 2,
        invoiceNumber: 'in_0987654321',
        href: '#',
        amount: '$2,000.00 USD',
        status: 'Failed',
        client: 'TechStart LLC',
        description: 'Annual Plan',
        icon: ArrowPathIcon,
      },
    ],
  },
  {
    date: 'Yesterday',
    dateTime: '2024-01-14',
    transactions: [
      {
        id: 3,
        invoiceNumber: 'in_1122334455',
        href: '#',
        amount: '$14,000.00 USD',
        tax: '$900.00',
        status: 'Paid',
        client: 'Growth Systems',
        description: 'Enterprise Plan',
        icon: ArrowUpCircleIcon,
      },
    ],
  },
]

// This will be fetched from Stripe customers API
const topCustomers = [
  {
    id: 1,
    name: 'Acme Corp',
    email: 'billing@acme.com',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastPayment: { date: 'January 15, 2024', dateTime: '2024-01-15', amount: '$7,600.00', status: 'Paid' },
    totalSpent: '$45,600.00',
    subscriptionStatus: 'Active',
  },
  {
    id: 2,
    name: 'Growth Systems',
    email: 'finance@growthsys.com',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastPayment: { date: 'January 14, 2024', dateTime: '2024-01-14', amount: '$14,000.00', status: 'Paid' },
    totalSpent: '$84,000.00',
    subscriptionStatus: 'Active',
  },
  {
    id: 3,
    name: 'TechStart LLC',
    email: 'ops@techstart.io',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastPayment: { date: 'January 10, 2024', dateTime: '2024-01-10', amount: '$2,000.00', status: 'Failed' },
    totalSpent: '$12,000.00',
    subscriptionStatus: 'Past Due',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <div className="relative isolate overflow-hidden bg-white">
          {/* Header */}
          <header className="pt-8 pb-6 sm:pb-8 border-b border-gray-200">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="mt-2 text-gray-600">Monitor revenue, payments, and customer activity</p>
              </div>
              <div className="order-last flex w-full gap-x-8 text-sm/6 font-semibold sm:order-0 sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:text-sm/7">
                <a href="#" className="text-orange-600">Last 7 days</a>
                <a href="#" className="text-gray-700">Last 30 days</a>
                <a href="#" className="text-gray-700">All-time</a>
              </div>
              <a
                href="#"
                className="ml-auto flex items-center gap-x-1 rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 transition-colors"
              >
                <PlusSmallIcon aria-hidden="true" className="-ml-1.5 size-5" />
                Create Invoice
              </a>
            </div>
          </header>

          {/* Stats */}
          <div className="bg-gray-50 py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div
                  key={stat.name}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <dt className="text-sm font-medium text-gray-600">{stat.name}</dt>
                      <dd className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</dd>
                    </div>
                    <dd
                      className={classNames(
                        stat.changeType === 'negative' ? 'text-red-600 bg-red-50' : 'text-green-600 bg-green-50',
                        'text-sm font-medium px-2 py-1 rounded-full',
                      )}
                    >
                      {stat.change}
                    </dd>
                  </div>
                </div>
              ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="space-y-8 py-8">
          {/* Recent Transactions */}
          <div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Recent Transactions
              </h2>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="sr-only">
                      <tr>
                        <th>Amount</th>
                        <th className="hidden sm:table-cell">Customer</th>
                        <th>More details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentTransactions.map((day) => (
                        <Fragment key={day.dateTime}>
                          <tr className="text-sm/6 text-gray-900">
                            <th scope="colgroup" colSpan={3} className="relative isolate py-3 px-6 font-semibold bg-gray-50">
                              <time dateTime={day.dateTime}>{day.date}</time>
                            </th>
                          </tr>
                          {day.transactions.map((transaction) => (
                            <tr key={transaction.id}>
                              <td className="relative py-4 px-6">
                                <div className="flex gap-x-6">
                                  <transaction.icon
                                    aria-hidden="true"
                                    className="hidden h-6 w-5 flex-none text-gray-400 sm:block"
                                  />
                                  <div className="flex-auto">
                                    <div className="flex items-start gap-x-3">
                                      <div className="text-sm/6 font-medium text-gray-900">{transaction.amount}</div>
                                      <div
                                        className={classNames(
                                          statuses[transaction.status as keyof typeof statuses] || 'text-gray-600 bg-gray-50 ring-gray-500/10',
                                          'rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset',
                                        )}
                                      >
                                        {transaction.status}
                                      </div>
                                    </div>
                                    {transaction.tax ? (
                                      <div className="mt-1 text-xs/5 text-gray-500">{transaction.tax} tax</div>
                                    ) : null}
                                  </div>
                                </div>
                              </td>
                              <td className="hidden py-4 px-6 sm:table-cell">
                                <div className="text-sm/6 text-gray-900">{transaction.client}</div>
                                <div className="mt-1 text-xs/5 text-gray-500">{transaction.description}</div>
                              </td>
                              <td className="py-4 px-6 text-right">
                                <div className="flex justify-end">
                                  <a
                                    href={transaction.href}
                                    className="text-sm/6 font-medium text-orange-600 hover:text-orange-500"
                                  >
                                    View<span className="hidden sm:inline"> transaction</span>
                                  </a>
                                </div>
                                <div className="mt-1 text-xs/5 text-gray-500">
                                  Invoice <span className="text-gray-900">#{transaction.invoiceNumber}</span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </Fragment>
                      ))}
                    </tbody>
                  </table>
              </div>
            </div>
          </div>

          {/* Top Customers */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Top Customers</h2>
                <a href="#" className="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500">
                  View all<span className="sr-only">, customers</span>
                </a>
              </div>
              <ul role="list" className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                {topCustomers.map((customer) => (
                  <li key={customer.id} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-x-4 border-b border-gray-200 bg-gray-50 p-6">
                      <Image
                        alt={customer.name}
                        src={customer.imageUrl}
                        width={48}
                        height={48}
                        className="size-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
                      />
                      <div className="text-sm/6 font-medium text-gray-900">{customer.name}</div>
                      <div className={classNames(
                        customer.subscriptionStatus === 'Active' ? 'text-green-700 bg-green-50 ring-green-600/20' : 'text-red-700 bg-red-50 ring-red-600/10',
                        'ml-auto rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset'
                      )}>
                        {customer.subscriptionStatus}
                      </div>
                    </div>
                    <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm/6">
                      <div className="flex justify-between gap-x-4 py-3">
                        <dt className="text-gray-500">Total Spent</dt>
                        <dd className="font-medium text-gray-900">{customer.totalSpent}</dd>
                      </div>
                      <div className="flex justify-between gap-x-4 py-3">
                        <dt className="text-gray-500">Last Payment</dt>
                        <dd className="text-gray-700">
                          <time dateTime={customer.lastPayment.dateTime}>{customer.lastPayment.date}</time>
                        </dd>
                      </div>
                      <div className="flex justify-between gap-x-4 py-3">
                        <dt className="text-gray-500">Amount</dt>
                        <dd className="flex items-start gap-x-2">
                          <div className="font-medium text-gray-900">{customer.lastPayment.amount}</div>
                          <div
                            className={classNames(
                              statuses[customer.lastPayment.status as keyof typeof statuses] || 'text-gray-600 bg-gray-50 ring-gray-500/10',
                              'rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset',
                            )}
                          >
                            {customer.lastPayment.status}
                          </div>
                        </dd>
                      </div>
                    </dl>
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
