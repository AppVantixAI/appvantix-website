'use client'

import { useState } from 'react'
import { Button } from '@/components/Button'

const courseModules = [
  {
    id: 1,
    title: 'Foundation: Understanding AI Automation',
    duration: '45 min',
    lessons: 5,
    completed: true,
    progress: 100,
  },
  {
    id: 2,
    title: 'Problem Translation Framework',
    duration: '60 min',
    lessons: 7,
    completed: true,
    progress: 100,
  },
  {
    id: 3,
    title: 'Rapid Prototyping with AI',
    duration: '75 min',
    lessons: 8,
    completed: false,
    progress: 40,
  },
  {
    id: 4,
    title: 'Communication Multipliers',
    duration: '60 min',
    lessons: 6,
    completed: false,
    progress: 0,
  },
  {
    id: 5,
    title: 'Advanced Implementation Strategies',
    duration: '90 min',
    lessons: 10,
    completed: false,
    progress: 0,
  },
]
const resources = [
  { name: 'AI Automation Cheat Sheet', type: 'PDF', size: '2.4 MB' },
  { name: 'Prompt Engineering Guide', type: 'PDF', size: '1.8 MB' },
  { name: 'Code Snippets Collection', type: 'ZIP', size: '5.2 MB' },
]

export default function LearnPage() {
  const [activeModule, setActiveModule] = useState(3)
  const overallProgress = Math.round(
    courseModules.reduce((acc, m) => acc + m.progress, 0) / courseModules.length
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Learn</h1>
        <p className="mt-2 text-gray-600">
          Master AI-powered automation through our comprehensive 5-hour course.
        </p>
      </div>

      {/* Course Progress */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Course Progress</h2>
          <span className="text-2xl font-bold text-orange-600">{overallProgress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-orange-500 h-3 rounded-full transition-all duration-300"
            style={{ width: `${overallProgress}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">
          2 hours 15 minutes completed • 2 hours 45 minutes remaining
        </p>
      </div>

      {/* Course Modules */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Course Modules</h2>
        
        <div className="space-y-4">
          {courseModules.map((module) => (
            <div
              key={module.id}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                activeModule === module.id
                  ? 'border-orange-500 bg-orange-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setActiveModule(module.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center flex-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                    module.completed
                      ? 'bg-green-500 text-white'
                      : module.progress > 0
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {module.completed ? '✓' : module.id}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{module.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {module.lessons} lessons • {module.duration}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{module.progress}%</p>
                  {activeModule === module.id && !module.completed && (
                    <Button size="sm" color="orange" className="mt-2">
                      {module.progress > 0 ? 'Continue' : 'Start'}
                    </Button>
                  )}
                </div>
              </div>
              
              {module.progress > 0 && module.progress < 100 && (
                <div className="mt-3">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${module.progress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Resources & Office Hours */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Resources */}
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Resources</h2>
          <div className="space-y-3">
            {resources.map((resource, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900">{resource.name}</p>
                    <p className="text-sm text-gray-600">{resource.type} • {resource.size}</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  Download
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Office Hours */}
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Office Hours</h2>
          <p className="text-gray-600 mb-4">
            Get your questions answered in live group sessions.
          </p>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 border border-blue-200 rounded">
              <p className="font-medium text-blue-900">Next Session</p>
              <p className="text-sm text-blue-700">Thursday, 2:00 PM EST</p>
              <p className="text-sm text-blue-600 mt-1">Topic: Advanced Prototyping</p>
            </div>
            <Button color="orange" className="w-full">
              Reserve Your Spot
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
