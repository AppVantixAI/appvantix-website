'use client'

import { useState } from 'react'
import Link from 'next/link'

const prototypes = [
  {
    id: 1,
    name: 'E-commerce Mobile App',
    status: 'Ready for Review',
    lastUpdated: '2 days ago',
    version: 'v1.2',
    demoUrl: 'https://demo.example.com/ecommerce',
    comments: 3,
    statusColor: 'bg-blue-500'
  },
  {
    id: 2,
    name: 'Customer Dashboard',
    status: 'Draft',
    lastUpdated: '1 week ago',
    version: 'v0.3',
    demoUrl: null,
    comments: 1,
    statusColor: 'bg-yellow-500'
  },
  {
    id: 3,
    name: 'API Integration Tool',
    status: 'Approved',
    lastUpdated: '3 weeks ago',
    version: 'v2.0',
    demoUrl: 'https://demo.example.com/api-tool',
    comments: 8,
    statusColor: 'bg-green-500'
  }
]

const useCaseTemplates = [
  {
    title: 'E-commerce Platform',
    description: 'Online store with product catalog, cart, and checkout',
    icon: '🛒'
  },
  {
    title: 'Customer Dashboard',
    description: 'User portal with analytics and account management',
    icon: '📊'
  },
  {
    title: 'Mobile App',
    description: 'Native mobile application with core features',
    icon: '📱'
  },
  {
    title: 'API Service',
    description: 'Backend service with RESTful API endpoints',
    icon: '🔌'
  },
  {
    title: 'Marketing Website',
    description: 'Landing page with lead capture and content',
    icon: '🌐'
  },
  {
    title: 'Custom Solution',
    description: 'Tailored prototype for specific requirements',
    icon: '⚡'
  }
]

export default function PrototypingPage() {
  const [showNewPrototypeModal, setShowNewPrototypeModal] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState('')
  const [prototypeName, setPrototypeName] = useState('')

  const handleCreatePrototype = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle prototype creation
    console.log({ selectedTemplate, prototypeName })
    setShowNewPrototypeModal(false)
    setSelectedTemplate('')
    setPrototypeName('')
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Safe Prototyping</h1>
            <p className="mt-2 text-gray-600">
              Reduce risks by testing ideas safely before full development.
            </p>
          </div>
          <button
            onClick={() => setShowNewPrototypeModal(true)}
            className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors"
          >
            + New Prototype
          </button>
        </div>
      </div>

      {/* Prototypes List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Your Prototypes</h2>
        </div>
        
        <div className="divide-y divide-gray-200">
          {prototypes.map((prototype) => (
            <div key={prototype.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-lg font-medium text-gray-900">{prototype.name}</h3>
                    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full text-white ${prototype.statusColor}`}>
                      {prototype.status}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                    <span>Version {prototype.version}</span>
                    <span>Updated {prototype.lastUpdated}</span>
                    <span>{prototype.comments} comments</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  {prototype.demoUrl && (
                    <Link
                      href={prototype.demoUrl}
                      target="_blank"
                      className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                    >
                      View Demo
                    </Link>
                  )}
                  <button className="text-gray-600 hover:text-gray-700 text-sm font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Prototype Modal */}
      {showNewPrototypeModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="fixed inset-0 bg-black opacity-50" onClick={() => setShowNewPrototypeModal(false)}></div>
            
            <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-screen overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Create New Prototype</h2>
                  <button
                    onClick={() => setShowNewPrototypeModal(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleCreatePrototype} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Select Use-Case Template
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {useCaseTemplates.map((template) => (
                        <button
                          key={template.title}
                          type="button"
                          onClick={() => setSelectedTemplate(template.title)}
                          className={`p-4 text-left border rounded-lg transition-colors ${
                            selectedTemplate === template.title
                              ? 'border-orange-500 bg-orange-50'
                              : 'border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{template.icon}</span>
                            <div>
                              <h3 className="font-medium text-gray-900">{template.title}</h3>
                              <p className="text-sm text-gray-600">{template.description}</p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prototype Name
                    </label>
                    <input
                      type="text"
                      value={prototypeName}
                      onChange={(e) => setPrototypeName(e.target.value)}
                      placeholder="Enter a name for your prototype..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setShowNewPrototypeModal(false)}
                      className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={!selectedTemplate || !prototypeName}
                      className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Create Prototype
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}