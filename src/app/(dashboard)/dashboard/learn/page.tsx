'use client'

import { useState } from 'react'

const courseModules = [
  {
    id: 1,
    title: 'Foundation: Understanding Modern Business Challenges',
    duration: '45 min',
    completed: true,
    sections: [
      { title: 'Digital Transformation Basics', completed: true },
      { title: 'Common Pain Points', completed: true },
      { title: 'Cost of Inaction', completed: true }
    ]
  },
  {
    id: 2,
    title: 'Strategic Problem-Solving Framework',
    duration: '60 min',
    completed: true,
    sections: [
      { title: 'Problem Identification Techniques', completed: true },
      { title: 'Solution Mapping', completed: true },
      { title: 'Risk Assessment', completed: false }
    ]
  },
  {
    id: 3,
    title: 'Technology Selection and Implementation',
    duration: '75 min',
    completed: false,
    sections: [
      { title: 'Tech Stack Evaluation', completed: false },
      { title: 'Vendor Assessment', completed: false },
      { title: 'Implementation Planning', completed: false }
    ]
  },
  {
    id: 4,
    title: 'Team Communication and Change Management',
    duration: '50 min',
    completed: false,
    sections: [
      { title: 'Stakeholder Alignment', completed: false },
      { title: 'Change Communication', completed: false },
      { title: 'Adoption Strategies', completed: false }
    ]
  },
  {
    id: 5,
    title: 'Measuring Success and Continuous Improvement',
    duration: '50 min',
    completed: false,
    sections: [
      { title: 'KPI Definition', completed: false },
      { title: 'Progress Tracking', completed: false },
      { title: 'Iteration and Optimization', completed: false }
    ]
  }
]

const resources = [
  {
    category: 'Cheat Sheets',
    items: [
      'Technology Selection Checklist',
      'Problem-Solution Mapping Template',
      'ROI Calculation Worksheet',
      'Stakeholder Communication Guide'
    ]
  },
  {
    category: 'Code Snippets',
    items: [
      'API Integration Examples',
      'Database Schema Templates',
      'Security Best Practices',
      'Performance Optimization Tips'
    ]
  },
  {
    category: 'Reading List',
    items: [
      'Digital Strategy Fundamentals',
      'Modern Architecture Patterns',
      'Leadership in Tech Transformation',
      'Data-Driven Decision Making'
    ]
  }
]

export default function LearnPage() {
  const [currentModule, setCurrentModule] = useState(3) // Currently watching module 3
  const [showVideoPlayer, setShowVideoPlayer] = useState(false)

  const completedModules = courseModules.filter(module => module.completed).length
  const totalProgress = Math.round((completedModules / courseModules.length) * 100)

  const nextOfficeHours = {
    date: 'July 18, 2025',
    time: '2:00 PM EST',
    topic: 'Technology Selection Best Practices'
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Learn</h1>
        <p className="mt-2 text-gray-600">
          Master business technology through our comprehensive 5-hour course.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Course Progress */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Course Progress</h2>
              <div className="text-right">
                <div className="text-2xl font-bold text-orange-600">{totalProgress}%</div>
                <div className="text-sm text-gray-500">{completedModules} of {courseModules.length} modules</div>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
              <div
                className="bg-orange-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${totalProgress}%` }}
              ></div>
            </div>

            <div className="space-y-4">
              {courseModules.map((module, index) => (
                <div key={module.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        module.completed 
                          ? 'bg-green-500 text-white' 
                          : currentModule === module.id
                            ? 'bg-orange-500 text-white'
                            : 'bg-gray-200 text-gray-600'
                      }`}>
                        {module.completed ? '✓' : index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{module.title}</h3>
                        <p className="text-sm text-gray-500">{module.duration}</p>
                      </div>
                    </div>
                    {!module.completed && (
                      <button
                        onClick={() => setShowVideoPlayer(true)}
                        className="bg-orange-600 text-white px-4 py-2 rounded text-sm hover:bg-orange-700 transition-colors"
                      >
                        {currentModule === module.id ? 'Continue' : 'Start'}
                      </button>
                    )}
                  </div>
                  
                  <div className="ml-11 space-y-1">
                    {module.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="flex items-center space-x-2 text-sm">
                        <span className={`w-4 h-4 rounded-full flex items-center justify-center text-xs ${
                          section.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                        }`}>
                          {section.completed ? '✓' : ''}
                        </span>
                        <span className={section.completed ? 'text-gray-600' : 'text-gray-500'}>
                          {section.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Office Hours */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Next Office Hours</h3>
            <div className="space-y-2 text-sm text-blue-800">
              <p><strong>Date:</strong> {nextOfficeHours.date}</p>
              <p><strong>Time:</strong> {nextOfficeHours.time}</p>
              <p><strong>Topic:</strong> {nextOfficeHours.topic}</p>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
              Join Office Hours
            </button>
          </div>

          {/* Quick Resources */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Resources</h3>
            <div className="space-y-4">
              {resources.map((category, index) => (
                <div key={index}>
                  <h4 className="font-medium text-gray-900 mb-2">{category.category}</h4>
                  <div className="space-y-1">
                    {category.items.map((item, itemIndex) => (
                      <button
                        key={itemIndex}
                        className="block w-full text-left text-sm text-orange-600 hover:text-orange-700 hover:underline"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificate */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Completion Certificate</h3>
            <p className="text-sm text-gray-600 mb-4">
              Complete all modules to earn your AppVantix Business Technology Mastery certificate.
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
              <div
                className="bg-orange-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${totalProgress}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500">{completedModules}/5 modules completed</p>
          </div>
        </div>
      </div>

      {/* Video Player Modal */}
      {showVideoPlayer && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="fixed inset-0 bg-black opacity-75" onClick={() => setShowVideoPlayer(false)}></div>
            
            <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Module {currentModule}: {courseModules.find(m => m.id === currentModule)?.title}
                  </h2>
                  <button
                    onClick={() => setShowVideoPlayer(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-gray-600">Video player would be embedded here</p>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <div className="text-sm text-gray-600">
                    Progress: 15:30 / 45:00
                  </div>
                  <div className="space-x-2">
                    <button className="bg-gray-600 text-white px-4 py-2 rounded text-sm hover:bg-gray-700 transition-colors">
                      Previous
                    </button>
                    <button className="bg-orange-600 text-white px-4 py-2 rounded text-sm hover:bg-orange-700 transition-colors">
                      Next Section
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}