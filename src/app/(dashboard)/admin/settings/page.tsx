'use client'

import { useState } from 'react'
import {
  BellIcon,
  CreditCardIcon,
  CubeIcon,
  FingerPrintIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const secondaryNavigation = [
  { name: 'General', href: '/admin/settings', icon: UserCircleIcon, current: true },
  { name: 'Security', href: '/admin/settings/security', icon: FingerPrintIcon, current: false },
  { name: 'Notifications', href: '/admin/settings/notifications', icon: BellIcon, current: false },
  { name: 'Billing', href: '/admin/settings/billing', icon: CreditCardIcon, current: false },
  { name: 'Team', href: '/admin/settings/team', icon: UsersIcon, current: false },
  { name: 'API', href: '/admin/settings/api', icon: CubeIcon, current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function AdminSettings() {
  const [autoTimezone, setAutoTimezone] = useState(true)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl lg:flex lg:gap-x-16 lg:px-8">
        <h1 className="sr-only">Admin Settings</h1>

        <aside className="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20">
          <nav className="flex-none px-4 sm:px-6 lg:px-0">
            <ul role="list" className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col">
              {secondaryNavigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-50 text-indigo-600'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                      'group flex gap-x-3 rounded-md py-2 pr-3 pl-2 text-sm/6 font-semibold',
                    )}
                  >
                    <item.icon
                      aria-hidden="true"
                      className={classNames(
                        item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                        'size-6 shrink-0',
                      )}
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
          <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
            <div>
              <h2 className="text-base/7 font-semibold text-gray-900">Admin Profile</h2>
              <p className="mt-1 text-sm/6 text-gray-500">
                Manage your admin account information and application settings.
              </p>

              <dl className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm/6">
                <div className="py-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Full name</dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">Admin User</div>
                    <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Update
                    </button>
                  </dd>
                </div>
                <div className="py-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Email address</dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">admin@appvantix.com</div>
                    <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Update
                    </button>
                  </dd>
                </div>
                <div className="py-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Role</dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">Super Administrator</div>
                    <span className="text-gray-400">Cannot modify</span>
                  </dd>
                </div>
                <div className="py-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Last login</dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">January 15, 2024 at 2:30 PM</div>
                    <span className="text-gray-400">—</span>
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="text-base/7 font-semibold text-gray-900">Stripe Integration</h2>
              <p className="mt-1 text-sm/6 text-gray-500">
                Manage your Stripe account connection and webhook settings.
              </p>

              <ul role="list" className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm/6">
                <li className="flex justify-between gap-x-6 py-6">
                  <div className="font-medium text-gray-900">
                    <div>Stripe Account</div>
                    <div className="text-sm text-gray-500">Connected to acct_1234567890</div>
                  </div>
                  <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Manage
                  </button>
                </li>
                <li className="flex justify-between gap-x-6 py-6">
                  <div className="font-medium text-gray-900">
                    <div>Webhook Endpoint</div>
                    <div className="text-sm text-gray-500">https://appvantix.com/api/webhooks/stripe</div>
                  </div>
                  <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Test
                  </button>
                </li>
                <li className="flex justify-between gap-x-6 py-6">
                  <div className="font-medium text-gray-900">
                    <div>API Keys</div>
                    <div className="text-sm text-gray-500">Last rotated: Never</div>
                  </div>
                  <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Rotate
                  </button>
                </li>
              </ul>

              <div className="flex border-t border-gray-100 pt-6">
                <button type="button" className="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500">
                  <span aria-hidden="true">+</span> Add test environment
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-base/7 font-semibold text-gray-900">System Configuration</h2>
              <p className="mt-1 text-sm/6 text-gray-500">
                Configure application-wide settings and preferences.
              </p>

              <ul role="list" className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm/6">
                <li className="flex justify-between gap-x-6 py-6">
                  <div className="font-medium text-gray-900">
                    <div>Email Provider</div>
                    <div className="text-sm text-gray-500">SendGrid (configured)</div>
                  </div>
                  <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Configure
                  </button>
                </li>
                <li className="flex justify-between gap-x-6 py-6">
                  <div className="font-medium text-gray-900">
                    <div>Analytics</div>
                    <div className="text-sm text-gray-500">Google Analytics 4</div>
                  </div>
                  <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Configure
                  </button>
                </li>
                <li className="flex justify-between gap-x-6 py-6">
                  <div className="font-medium text-gray-900">
                    <div>CDN</div>
                    <div className="text-sm text-gray-500">Cloudflare (active)</div>
                  </div>
                  <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Manage
                  </button>
                </li>
              </ul>

              <div className="flex border-t border-gray-100 pt-6">
                <button type="button" className="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500">
                  <span aria-hidden="true">+</span> Add integration
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-base/7 font-semibold text-gray-900">Application Settings</h2>
              <p className="mt-1 text-sm/6 text-gray-500">
                Configure global application settings and defaults.
              </p>

              <dl className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm/6">
                <div className="py-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Default Currency</dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">USD ($)</div>
                    <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Update
                    </button>
                  </dd>
                </div>
                <div className="py-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Time Zone</dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">Pacific Standard Time (PST)</div>
                    <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Update
                    </button>
                  </dd>
                </div>
                <div className="py-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Date Format</dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">MM/DD/YYYY</div>
                    <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Update
                    </button>
                  </dd>
                </div>
                <div className="py-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">User Registration</dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">Enabled with email verification</div>
                    <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Configure
                    </button>
                  </dd>
                </div>
                <div className="flex pt-6">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Maintenance Mode</dt>
                  <dd className="flex flex-auto items-center justify-end">
                    <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2">
                      <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                      <input
                        defaultChecked={false}
                        name="maintenance-mode"
                        type="checkbox"
                        aria-label="Maintenance mode"
                        className="absolute inset-0 appearance-none focus:outline-hidden"
                      />
                    </div>
                  </dd>
                </div>
                <div className="flex pt-6">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Debug Mode</dt>
                  <dd className="flex flex-auto items-center justify-end">
                    <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2">
                      <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                      <input
                        defaultChecked={true}
                        name="debug-mode"
                        type="checkbox"
                        aria-label="Debug mode"
                        className="absolute inset-0 appearance-none focus:outline-hidden"
                      />
                    </div>
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="text-base/7 font-semibold text-gray-900">Danger Zone</h2>
              <p className="mt-1 text-sm/6 text-gray-500">
                These actions are irreversible. Please proceed with caution.
              </p>

              <div className="mt-6 border border-red-200 rounded-lg bg-red-50 p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-sm font-medium text-red-800">Clear All Customer Data</h3>
                      <p className="text-sm text-red-600">Permanently delete all customer and payment data.</p>
                    </div>
                    <button
                      type="button"
                      className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500"
                    >
                      Clear Data
                    </button>
                  </div>
                  <div className="border-t border-red-200 pt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-sm font-medium text-red-800">Reset Application</h3>
                        <p className="text-sm text-red-600">Reset the application to factory defaults.</p>
                      </div>
                      <button
                        type="button"
                        className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500"
                      >
                        Reset App
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
