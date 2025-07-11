'use client'

import { Button } from '@/components/Button'

const billingHistory = [
  { date: '2024-01-01', amount: '$299', description: 'Monthly Subscription', status: 'Paid' },
  { date: '2023-12-01', amount: '$299', description: 'Monthly Subscription', status: 'Paid' },
  { date: '2023-11-01', amount: '$299', description: 'Monthly Subscription', status: 'Paid' },
]

export default function AccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Account</h1>
        <p className="mt-2 text-gray-600">
          Manage your billing, subscription, and account details.
        </p>
      </div>

      {/* Current Plan */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Current Plan</h2>
        
        <div className="border border-orange-200 bg-orange-50 rounded-lg p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Professional Plan</h3>
              <p className="text-gray-600 mt-1">$299/month</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Unlimited Clarity Calls
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  5 Active Prototypes
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  All Automation Tools
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Priority Support
                </li>
              </ul>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Next billing date</p>
              <p className="text-lg font-semibold text-gray-900">Feb 1, 2024</p>
            </div>
          </div>
          
          <div className="mt-6 flex gap-3">
            <Button variant="outline">
              Upgrade Plan
            </Button>
            <Button variant="outline">
              Cancel Subscription
            </Button>
          </div>
        </div>
      </div>

      {/* Usage Summary */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Usage Summary</h2>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-gray-900">12</p>
            <p className="text-sm text-gray-600">Clarity Calls</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-gray-900">4/5</p>
            <p className="text-sm text-gray-600">Active Prototypes</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-gray-900">847</p>
            <p className="text-sm text-gray-600">Tool Runs</p>
          </div>
        </div>
      </div>

      {/* Billing History */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Billing History</h2>
          <Button variant="outline" size="sm">
            Download All Invoices
          </Button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Date</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Description</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Amount</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Invoice</th>
              </tr>
            </thead>
            <tbody>
              {billingHistory.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-4 text-sm text-gray-900">{item.date}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{item.description}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{item.amount}</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Button size="sm" variant="outline">
                      Download
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Support & Feedback */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Support & Feedback</h2>
        
        <div className="space-y-4">
          <p className="text-gray-600">
            Need help or have feedback? We're here to support you.
          </p>
          
          <div className="flex gap-3">
            <Button color="orange">
              Contact Support
            </Button>
            <Button variant="outline">
              Submit Feedback
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
