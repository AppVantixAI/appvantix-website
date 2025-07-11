'use client'

import { Fragment, useState } from 'react'
import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArrowDownCircleIcon,
  ArrowPathIcon,
  ArrowUpCircleIcon,
  Bars3Icon,
  EllipsisHorizontalIcon,
  PlusSmallIcon,
} from '@heroicons/react/20/solid'
import { BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

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
        <div className="relative isolate overflow-hidden">
          {/* Header */}
          <header className="pt-6 pb-4 sm:pb-6">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
              <h1 className="text-base/7 font-semibold text-gray-900">Revenue & Payments</h1>
              <div className="order-last flex w-full gap-x-8 text-sm/6 font-semibold sm:order-0 sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:text-sm/7">
                <a href="#" className="text-indigo-600">Last 7 days</a>
                <a href="#" className="text-gray-700">Last 30 days</a>
                <a href="#" className="text-gray-700">All-time</a>
              </div>
              <a
                href="#"
                className="ml-auto flex items-center gap-x-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
              >
                <PlusSmallIcon aria-hidden="true" className="-ml-1.5 size-5" />
                Create Invoice
              </a>
            </div>
          </header>

          {/* Stats */}
          <div className="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
            <dl className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-0">
              {stats.map((stat, statIdx) => (
                <div
                  key={stat.name}
                  className={classNames(
                    statIdx % 2 === 1 ? 'sm:border-l' : statIdx === 2 ? 'lg:border-l' : '',
                    'flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8',
                  )}
                >
                  <dt className="text-sm/6 font-medium text-gray-500">{stat.name}</dt>
                  <dd
                    className={classNames(
                      stat.changeType === 'negative' ? 'text-rose-600' : 'text-green-600',
                      'text-xs font-medium',
                    )}
                  >
                    {stat.change}
                  </dd>
                  <dd className="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="space-y-16 py-16 xl:space-y-20">
          {/* Recent Transactions */}
          <div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="mx-auto max-w-2xl text-base font-semibold text-gray-900 lg:mx-0 lg:max-w-none">
                Recent Transactions
              </h2>
            </div>
            <div className="mt-6 overflow-hidden border-t border-gray-100">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
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
                            <th scope="colgroup" colSpan={3} className="relative isolate py-2 font-semibold">
                              <time dateTime={day.dateTime}>{day.date}</time>
                              <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                              <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                            </th>
                          </tr>
                          {day.transactions.map((transaction) => (
                            <tr key={transaction.id}>
                              <td className="relative py-5 pr-6">
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
                                          statuses[transaction.status],
                                          'rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset',
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
                                <div className="absolute right-full bottom-0 h-px w-screen bg-gray-100" />
                                <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                              </td>
                              <td className="hidden py-5 pr-6 sm:table-cell">
                                <div className="text-sm/6 text-gray-900">{transaction.client}</div>
                                <div className="mt-1 text-xs/5 text-gray-500">{transaction.description}</div>
                              </td>
                              <td className="py-5 text-right">
                                <div className="flex justify-end">
                                  <a
                                    href={transaction.href}
                                    className="text-sm/6 font-medium text-indigo-600 hover:text-indigo-500"
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
          </div>

          {/* Top Customers */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="flex items-center justify-between">
                <h2 className="text-base/7 font-semibold text-gray-900">Top Customers</h2>
                <a href="#" className="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500">
                  View all<span className="sr-only">, customers</span>
                </a>
              </div>
              <ul role="list" className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
                {topCustomers.map((customer) => (
                  <li key={customer.id} className="overflow-hidden rounded-xl border border-gray-200">
                    <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                      <img
                        alt={customer.name}
                        src={customer.imageUrl}
                        className="size-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
                      />
                      <div className="text-sm/6 font-medium text-gray-900">{customer.name}</div>
                      <div className={classNames(
                        customer.subscriptionStatus === 'Active' ? 'text-green-700 bg-green-50 ring-green-600/20' : 'text-red-700 bg-red-50 ring-red-600/10',
                        'ml-auto rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset'
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
                              statuses[customer.lastPayment.status],
                              'rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset',
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
        </div>
      </main>
    </div>
  )
}
