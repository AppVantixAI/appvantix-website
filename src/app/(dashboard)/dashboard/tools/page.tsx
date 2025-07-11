'use client'

import { useState } from 'react'

const microTools = [
  {
    id: 1,
    name: 'Daily Clarity',
    description: 'Morning routine to clarify priorities and goals',
    category: 'Productivity',
    timeSaved: '30 min/day',
    lastRun: '2 hours ago',
    isConfigured: true,
    icon: '🌅',
    metrics: {
      tasksAutomated: 247,
      timeSaved: '42 hours',
      lastRun: '2 hours ago'
    }
  },
  {
    id: 2,
    name: 'Smart Inbox',
    description: 'AI-powered email prioritization and auto-responses',
    category: 'Communication',
    timeSaved: '45 min/day',
    lastRun: '1 hour ago',
    isConfigured: true,
    icon: '📧',
    metrics: {
      tasksAutomated: 156,
      timeSaved: '28 hours',
      lastRun: '1 hour ago'
    }
  },
  {
    id: 3,
    name: 'Meeting Prep Bot',
    description: 'Automatically generate meeting agendas and briefings',
    category: 'Meetings',
    timeSaved: '20 min/meeting',
    lastRun: '3 days ago',
    isConfigured: false,
    icon: '🤖',
    metrics: {
      tasksAutomated: 0,
      timeSaved: '0 hours',
      lastRun: 'Never'
    }
  },
  {
    id: 4,
    name: 'Project Status Reporter',
    description: 'Weekly status reports sent to stakeholders automatically',
    category: 'Reporting',
    timeSaved: '1 hour/week',
    lastRun: '1 week ago',
    isConfigured: true,
    icon: '📊',
    metrics: {
      tasksAutomated: 23,
      timeSaved: '15 hours',
      lastRun: '1 week ago'
    }
  },
  {
    id: 5,
    name: 'Social Media Scheduler',
    description: 'AI-curated content scheduling across platforms',
    category: 'Marketing',
    timeSaved: '2 hours/week',
    lastRun: 'Never',
    isConfigured: false,
    icon: '📱',
    metrics: {
      tasksAutomated: 0,
      timeSaved: '0 hours',
      lastRun: 'Never'
    }
  },
  {
    id: 6,
    name: 'Customer Feedback Analyzer',
    description: 'Sentiment analysis and insights from customer feedback',
    category: 'Analytics',
    timeSaved: '3 hours/week',
    lastRun: '2 days ago',
    isConfigured: true,
    icon: '💭',
    metrics: {
      tasksAutomated: 89,
      timeSaved: '22 hours',
      lastRun: '2 days ago'
    }
  }
]

const categories = ['All', 'Productivity', 'Communication', 'Meetings', 'Reporting', 'Marketing', 'Analytics']

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showConfigModal, setShowConfigModal] = useState(false)
  const [selectedTool, setSelectedTool] = useState<typeof microTools[0] | null>(null)

  const filteredTools = selectedCategory === 'All' 
    ? microTools 
    : microTools.filter(tool => tool.category === selectedCategory)

  const configuredTools = microTools.filter(tool => tool.isConfigured)
  const totalTimeSaved = configuredTools.reduce((acc, tool) => acc + parseInt(tool.metrics.timeSaved), 0)
  const totalTasksAutomated = configuredTools.reduce((acc, tool) => acc + tool.metrics.tasksAutomated, 0)

  const launchTool = (tool: typeof microTools[0]) => {
    console.log(`Launching ${tool.name}`)
  }

  const configureTool = (tool: typeof microTools[0]) => {
    setSelectedTool(tool)
    setShowConfigModal(true)
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Tools</h1>
        <p className="mt-2 text-gray-600">
          Automate tasks and recover valuable time with our micro-tools library.
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">⏰</span>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">{totalTimeSaved}h</h3>
              <p className="text-sm text-gray-600">Time Saved</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">{totalTasksAutomated}</h3>
              <p className="text-sm text-gray-600">Tasks Automated</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">{configuredTools.length}</h3>
              <p className="text-sm text-gray-600">Active Tools</p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
          <div key={tool.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">{tool.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
                  <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                    {tool.category}
                  </span>
                </div>
              </div>
              {tool.isConfigured && (
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
              )}
            </div>

            <p className="text-sm text-gray-600 mb-4">{tool.description}</p>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tasks Automated:</span>
                <span className="font-medium">{tool.metrics.tasksAutomated}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Time Saved:</span>
                <span className="font-medium">{tool.metrics.timeSaved}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Last Run:</span>
                <span className="font-medium">{tool.metrics.lastRun}</span>
              </div>
            </div>

            <div className="flex space-x-2">
              {tool.isConfigured ? (
                <button
                  onClick={() => launchTool(tool)}
                  className="flex-1 bg-orange-600 text-white py-2 px-4 rounded text-sm hover:bg-orange-700 transition-colors"
                >
                  Launch
                </button>
              ) : (
                <button
                  onClick={() => configureTool(tool)}
                  className="flex-1 bg-gray-600 text-white py-2 px-4 rounded text-sm hover:bg-gray-700 transition-colors"
                >
                  Configure
                </button>
              )}
              <button
                onClick={() => configureTool(tool)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors"
              >
                Settings
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Configuration Modal */}
      {showConfigModal && selectedTool && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="fixed inset-0 bg-black opacity-50" onClick={() => setShowConfigModal(false)}></div>
            
            <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Configure {selectedTool.name}</h2>
                  <button
                    onClick={() => setShowConfigModal(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      API Keys
                    </label>
                    <input
                      type="password"
                      placeholder="Enter API key..."
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Run Cadence
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500">
                      <option>Every hour</option>
                      <option>Every 4 hours</option>
                      <option>Daily</option>
                      <option>Weekly</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    onClick={() => setShowConfigModal(false)}
                    className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setShowConfigModal(false)}
                    className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"
                  >
                    Save Configuration
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}