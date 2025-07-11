'use client'

import { useState } from 'react'
import { Button } from '@/components/Button'

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    projectUpdates: true,
    toolAlerts: false,
    newsletter: true,
  })

  const [integrations, setIntegrations] = useState({
    slack: { connected: true, workspace: 'appvantix.slack.com' },
    notion: { connected: false, workspace: null },
    zapier: { connected: true, workspace: 'AppVantix Automation' },
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="mt-2 text-gray-600">
          Manage your profile, notifications, and integrations.
        </p>
      </div>

      {/* Profile Settings */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500"
              defaultValue="John Doe"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500"
              defaultValue="john@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company
            </label>
            <input
              type="text"
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500"
              defaultValue="Acme Corp"
            />
          </div>
          
          <Button color="orange">
            Save Changes
          </Button>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
        
        <div className="space-y-4">
          {Object.entries(notifications).map(([key, value]) => (
            <label key={key} className="flex items-center justify-between">
              <span className="text-gray-700">
                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
              </span>
              <input
                type="checkbox"
                checked={value}
                onChange={(e) => setNotifications({ ...notifications, [key]: e.target.checked })}
                className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
              />
            </label>
          ))}
        </div>
      </div>

      {/* Integrations */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Connected Integrations</h2>
        
        <div className="space-y-4">
          {Object.entries(integrations).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${
                  value.connected ? 'bg-green-100' : 'bg-gray-100'
                }`}>
                  {key === 'slack' && '💬'}
                  {key === 'notion' && '📝'}
                  {key === 'zapier' && '⚡'}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 capitalize">{key}</h3>
                  {value.connected ? (
                    <p className="text-sm text-gray-600">Connected to {value.workspace}</p>
                  ) : (
                    <p className="text-sm text-gray-600">Not connected</p>
                  )}
                </div>
              </div>
              <Button
                size="sm"
                variant={value.connected ? 'outline' : 'solid'}
                color={value.connected ? 'gray' : 'orange'}
              >
                {value.connected ? 'Disconnect' : 'Connect'}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* API Keys & Security */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">API Keys & Security</h2>
        
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-gray-900">Production API Key</h3>
              <span className="text-xs text-gray-600">Created 30 days ago</span>
            </div>
            <div className="flex items-center gap-2">
              <code className="flex-1 bg-white px-3 py-1 rounded border border-gray-300 text-sm font-mono">
                ak_live_••••••••••••••••
              </code>
              <Button size="sm" variant="outline">
                Rotate
              </Button>
              <Button size="sm" variant="outline">
                Revoke
              </Button>
            </div>
          </div>
          
          <Button variant="outline">
            Generate New API Key
          </Button>
        </div>
      </div>

      {/* Team Management */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Team Management</h2>
        
        <p className="text-gray-600 mb-4">
          Invite team members to collaborate on your projects.
        </p>
        
        <Button color="orange">
          Invite Team Member
        </Button>
      </div>
    </div>
  )
}
