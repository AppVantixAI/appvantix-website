'use client'

import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'

const integrations = [
  {
    id: 1,
    name: 'Slack',
    description: 'Get notifications and updates in your Slack workspace',
    icon: '💬',
    connected: true,
    lastSync: '2 hours ago'
  },
  {
    id: 2,
    name: 'Notion',
    description: 'Sync project updates and deliverables to your Notion workspace',
    icon: '📝',
    connected: false,
    lastSync: 'Never'
  },
  {
    id: 3,
    name: 'Zapier',
    description: 'Connect with 5000+ apps through Zapier automation',
    icon: '⚡',
    connected: true,
    lastSync: '1 day ago'
  },
  {
    id: 4,
    name: 'Google Calendar',
    description: 'Sync clarity calls and meetings with your Google Calendar',
    icon: '📅',
    connected: false,
    lastSync: 'Never'
  }
]

const apiKeys = [
  {
    id: 1,
    name: 'Production API Key',
    description: 'Main API key for production integrations',
    created: '2 months ago',
    lastUsed: '1 hour ago',
    permissions: ['read', 'write']
  },
  {
    id: 2,
    name: 'Development API Key',
    description: 'API key for testing and development',
    created: '1 month ago',
    lastUsed: '3 days ago',
    permissions: ['read']
  }
]

export default function SettingsPage() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('profile')
  const [notifications, setNotifications] = useState({
    email: true,
    slack: true,
    browser: false,
    sms: false
  })

  const tabs = [
    { id: 'profile', name: 'Profile', icon: '👤' },
    { id: 'notifications', name: 'Notifications', icon: '🔔' },
    { id: 'integrations', name: 'Integrations', icon: '🔗' },
    { id: 'security', name: 'Security', icon: '🔒' },
    { id: 'billing', name: 'Billing', icon: '💳' }
  ]

  const toggleNotification = (type: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  const rotateApiKey = (keyId: number) => {
    console.log(`Rotating API key ${keyId}`)
  }

  const revokeApiKey = (keyId: number) => {
    console.log(`Revoking API key ${keyId}`)
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="mt-2 text-gray-600">
          Manage your preferences, integrations, and account settings.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === tab.id
                    ? 'bg-orange-50 text-orange-700 border-r-2 border-orange-600'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="mr-3">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Settings</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={user?.email || ''}
                        disabled
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Display Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your display name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your company name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time Zone
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                      <option>Eastern Time (UTC-5)</option>
                      <option>Central Time (UTC-6)</option>
                      <option>Mountain Time (UTC-7)</option>
                      <option>Pacific Time (UTC-8)</option>
                    </select>
                  </div>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors">
                    Update Profile
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Notification Preferences</h2>
                <div className="space-y-6">
                  {Object.entries(notifications).map(([type, enabled]) => (
                    <div key={type} className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 capitalize">{type} Notifications</h3>
                        <p className="text-sm text-gray-500">
                          Receive updates via {type}
                        </p>
                      </div>
                      <button
                        onClick={() => toggleNotification(type as keyof typeof notifications)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          enabled ? 'bg-orange-600' : 'bg-gray-200'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                            enabled ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'integrations' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Connected Integrations</h2>
                <div className="space-y-4">
                  {integrations.map((integration) => (
                    <div key={integration.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{integration.icon}</span>
                          <div>
                            <h3 className="font-medium text-gray-900">{integration.name}</h3>
                            <p className="text-sm text-gray-500">{integration.description}</p>
                            <p className="text-xs text-gray-400">Last sync: {integration.lastSync}</p>
                          </div>
                        </div>
                        <button
                          className={`px-4 py-2 text-sm rounded-md transition-colors ${
                            integration.connected
                              ? 'bg-red-100 text-red-700 hover:bg-red-200'
                              : 'bg-orange-600 text-white hover:bg-orange-700'
                          }`}
                        >
                          {integration.connected ? 'Disconnect' : 'Connect'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Security & API Keys</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-medium text-gray-900">API Keys</h3>
                      <button className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm hover:bg-orange-700 transition-colors">
                        Generate New Key
                      </button>
                    </div>
                    <div className="space-y-3">
                      {apiKeys.map((key) => (
                        <div key={key.id} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-gray-900">{key.name}</h4>
                              <p className="text-sm text-gray-500">{key.description}</p>
                              <div className="mt-2 flex space-x-4 text-xs text-gray-400">
                                <span>Created {key.created}</span>
                                <span>Last used {key.lastUsed}</span>
                                <span>Permissions: {key.permissions.join(', ')}</span>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <button
                                onClick={() => rotateApiKey(key.id)}
                                className="text-orange-600 hover:text-orange-700 text-sm"
                              >
                                Rotate
                              </button>
                              <button
                                onClick={() => revokeApiKey(key.id)}
                                className="text-red-600 hover:text-red-700 text-sm"
                              >
                                Revoke
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Password</h3>
                    <button className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition-colors">
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'billing' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Billing & Usage</h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-2">Current Plan</h3>
                    <p className="text-sm text-gray-600">Professional Plan - $99/month</p>
                    <p className="text-xs text-gray-500 mt-1">Next billing date: August 11, 2025</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-3">Usage Summary</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-700">3</div>
                        <div className="text-sm text-blue-600">Clarity Calls</div>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-purple-700">8</div>
                        <div className="text-sm text-purple-600">Prototypes</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-700">247</div>
                        <div className="text-sm text-green-600">Tool Runs</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors">
                      Upgrade Plan
                    </button>
                    <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
                      View Invoices
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}