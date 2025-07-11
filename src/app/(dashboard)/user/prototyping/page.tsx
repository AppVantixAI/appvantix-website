'use client'

import { useState } from 'react'
import { Button } from '@/components/Button'

const prototypes = [
  { id: 1, name: 'E-commerce Checkout Flow', status: 'Ready for Review', template: 'E-commerce' },
  { id: 2, name: 'Dashboard Analytics', status: 'Draft', template: 'SaaS Dashboard' },
]

export default function SafePrototypingPage() {
  const [showWizard, setShowWizard] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState('')

  const templates = [
    { id: 'ecommerce', name: 'E-commerce', description: 'Shopping cart and checkout flows' },
    { id: 'saas', name: 'SaaS Dashboard', description: 'Analytics and management interfaces' },
    { id: 'mobile', name: 'Mobile App', description: 'iOS/Android app prototypes' },
    { id: 'landing', name: 'Landing Page', description: 'Marketing and conversion pages' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Safe Prototyping</h1>
          <p className="mt-2 text-gray-600">
            Create risk-free prototypes before committing to full development.
          </p>
        </div>
        <Button
          color="orange"
          onClick={() => setShowWizard(true)}
        >
          New Prototype
        </Button>
      </div>

      {/* Prototype Wizard */}
      {showWizard && (
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Create New Prototype</h2>
          
          <div className="grid grid-cols-2 gap-4">
            {templates.map((template) => (
              <button
                key={template.id}
                onClick={() => setSelectedTemplate(template.id)}
                className={`p-4 rounded-lg border-2 text-left transition-colors ${
                  selectedTemplate === template.id
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <h3 className="font-semibold text-gray-900">{template.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{template.description}</p>
              </button>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <Button
              color="orange"
              disabled={!selectedTemplate}
            >
              Start Prototype
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setShowWizard(false)
                setSelectedTemplate('')
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Active Prototypes */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Active Prototypes</h2>
        
        <div className="space-y-4">
          {prototypes.map((prototype) => (
            <div
              key={prototype.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{prototype.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Template: {prototype.template}
                  </p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  prototype.status === 'Ready for Review'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {prototype.status}
                </span>
              </div>
              
              <div className="mt-4 flex gap-2">
                <Button variant="outline">
                  View Demo
                </Button>
                <Button variant="outline">
                  Comments
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
