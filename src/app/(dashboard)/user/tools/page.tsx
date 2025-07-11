'use client'

import { useState } from 'react'
import { Button } from '@/components/Button'

const tools = [
  {
    id: 'daily-clarity',
    name: 'Daily Clarity',
    description: 'Automated morning briefings and task prioritization',
    icon: '☀️',
    status: 'active',
    lastRun: '2 hours ago',
    timeSaved: '45 min/day',
    config: { frequency: 'daily', time: '8:00 AM' },
  },
  {
    id: 'smart-inbox',
    name: 'Smart Inbox',
    description: 'AI-powered email categorization and response drafts',
    icon: '📧',
    status: 'inactive',
    lastRun: 'Never',
    timeSaved: '2 hours/week',
    config: { categories: ['urgent', 'client', 'team', 'other'] },
  },
  {
    id: 'meeting-notes',
    name: 'Meeting Notes AI',
    description: 'Automatic meeting transcription and action item extraction',
    icon: '📝',
    status: 'active',
    lastRun: 'Yesterday',
    timeSaved: '30 min/meeting',
    config: { autoTranscribe: true, sendSummary: true },
  },
]
export default function ToolsPage() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null)

  const totalTimeSaved = '12 hours/week'
  const tasksAutomated = 147

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Tools</h1>
        <p className="mt-2 text-gray-600">
          Micro-tools designed to automate repetitive tasks and recover your time.
        </p>
      </div>

      {/* Usage Metrics */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-sm font-medium text-gray-600">Time Saved</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">{totalTimeSaved}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-sm font-medium text-gray-600">Tasks Automated</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">{tasksAutomated}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-sm font-medium text-gray-600">Active Tools</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            {tools.filter(t => t.status === 'active').length}/{tools.length}
          </p>
        </div>
      </div>

      {/* Tools Library */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Your Tool Library</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedTool(tool.id)}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{tool.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{tool.name}</h3>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                      tool.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {tool.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">{tool.description}</p>
              
              <div className="space-y-1 text-xs text-gray-500">
                <p>Last run: {tool.lastRun}</p>
                <p>Time saved: {tool.timeSaved}</p>
              </div>
              
              <div className="mt-3 flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  {tool.status === 'active' ? 'Configure' : 'Activate'}
                </Button>
                {tool.status === 'active' && (
                  <Button size="sm" variant="outline">
                    Run Now
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coming Soon */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-900 mb-2">Coming Soon</h3>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
          <div>• Slack Integration Assistant</div>
          <div>• Code Review Automation</div>
          <div>• Client Report Generator</div>
          <div>• API Documentation Builder</div>
        </div>
      </div>
    </div>
  )
}
