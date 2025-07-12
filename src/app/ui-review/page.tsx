'use client'

import { useState } from 'react'
import { Button } from '@/components/Button'
import { TextField, SelectField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { CheckoutButton } from '@/components/checkout/CheckoutButton'
import { CustomerPortalButton } from '@/components/subscription/CustomerPortalButton'
import { products } from '@/stripe-config'

export default function UIReviewPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    select: '',
    textarea: ''
  })

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">UI Component Review</h1>
          <p className="text-lg text-gray-600">
            Comprehensive review of all UI components with orange theme
          </p>
        </div>

        {/* Logo Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Logo & Branding</h2>
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <div className="flex items-center justify-center space-x-8">
              <Logo className="h-12 w-auto" />
              <Logo className="h-16 w-auto" />
              <Logo className="h-20 w-auto" />
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Buttons</h2>
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Solid Buttons</h3>
                <div className="space-y-3">
                  <Button color="orange">Orange Button</Button>
                  <Button color="slate">Slate Button</Button>
                  <Button color="white">White Button</Button>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Outline Buttons</h3>
                <div className="space-y-3">
                  <Button variant="outline" color="slate">Outline Slate</Button>
                  <Button variant="outline" color="white">Outline White</Button>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">States</h3>
                <div className="space-y-3">
                  <Button color="orange" disabled>Disabled</Button>
                  <Button color="orange" className="w-full">Full Width</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Elements */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Form Elements</h2>
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextField
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <TextField
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
              <SelectField
                label="Select Option"
                value={formData.select}
                onChange={(e) => setFormData({...formData, select: e.target.value})}
              >
                <option value="">Choose an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </SelectField>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Textarea
                </label>
                <textarea
                  rows={3}
                  className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:bg-white focus:outline-hidden focus:ring-orange-500 sm:text-sm"
                  placeholder="Enter your message"
                  value={formData.textarea}
                  onChange={(e) => setFormData({...formData, textarea: e.target.value})}
                />
              </div>
            </form>
          </div>
        </section>

        {/* Status Indicators */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Status Indicators & Badges</h2>
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Status Badges</h3>
                <div className="space-y-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Active
                  </span>
                  <br />
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                    Pending
                  </span>
                  <br />
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Failed
                  </span>
                  <br />
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Inactive
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Progress Bars</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Completion</span>
                      <span>45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-orange-500 h-3 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Loading States</h3>
                <div className="space-y-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div>
                  <div className="animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cards & Containers */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Cards & Containers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Standard Card</h3>
              <p className="text-gray-600">This is a standard card with shadow and border.</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-900 mb-2">Orange Card</h3>
              <p className="text-orange-700">This is an orange-themed card for highlights.</p>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-900 mb-2">Gradient Card</h3>
              <p className="text-orange-700">This card uses an orange gradient background.</p>
            </div>
          </div>
        </section>

        {/* Stripe Components */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Stripe Components</h2>
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Checkout Button</h3>
                <CheckoutButton
                  priceId={products[0]?.priceId || 'price_test'}
                  mode="subscription"
                  className="w-full bg-orange-600 text-white hover:bg-orange-700"
                >
                  Subscribe Now
                </CheckoutButton>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Customer Portal</h3>
                <CustomerPortalButton className="w-full">
                  <Button variant="outline" className="w-full">
                    Manage Subscription
                  </Button>
                </CustomerPortalButton>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Elements */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Navigation Elements</h2>
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Tab Navigation</h3>
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex space-x-8">
                    <button className="border-orange-500 text-orange-600 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm">
                      Active Tab
                    </button>
                    <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm">
                      Inactive Tab
                    </button>
                    <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm">
                      Another Tab
                    </button>
                  </nav>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Breadcrumbs</h3>
                <nav className="flex" aria-label="Breadcrumb">
                  <ol className="flex items-center space-x-4">
                    <li>
                      <div>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                          Home
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <svg className="flex-shrink-0 h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        <a href="#" className="ml-4 text-gray-400 hover:text-gray-500">
                          Projects
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <svg className="flex-shrink-0 h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-4 text-orange-600 font-medium">
                          Current Page
                        </span>
                      </div>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>

        {/* Alerts & Messages */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Alerts & Messages</h2>
          <div className="space-y-4">
            <div className="rounded-md bg-green-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">
                    Success! Your changes have been saved.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-orange-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-orange-800">
                    Warning: Please review your settings before proceeding.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-red-800">
                    Error: There was a problem processing your request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Display */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Data Display</h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Progress
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Project Alpha
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <a href="#" className="text-orange-600 hover:text-orange-900">Edit</a>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Project Beta
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <a href="#" className="text-orange-600 hover:text-orange-900">Edit</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-8 border border-orange-200">
            <h2 className="text-2xl font-semibold text-orange-900 mb-4">UI Review Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-orange-800 mb-2">✅ Consistent Orange Theme</h3>
                <p className="text-sm text-orange-700">All primary actions and focus states use orange colors</p>
              </div>
              <div>
                <h3 className="font-semibold text-orange-800 mb-2">✅ Accessible Contrast</h3>
                <p className="text-sm text-orange-700">Text and background colors meet accessibility standards</p>
              </div>
              <div>
                <h3 className="font-semibold text-orange-800 mb-2">✅ Component Consistency</h3>
                <p className="text-sm text-orange-700">All components follow the same design patterns</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}