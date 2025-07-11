'use client'

import { Button } from '@/components/Button'

const projects = [
  {
    id: 1,
    name: 'E-commerce Platform Redesign',
    status: 'Active',
    problem: 'Low conversion rates on checkout',
    solution: 'Streamlined 3-step checkout with auto-save',
    nextStep: 'User testing scheduled for next week',
    progress: 75,
  },
  {
    id: 2,
    name: 'Customer Dashboard',
    status: 'Completed',
    problem: 'Users couldn\'t find key metrics',
    solution: 'AI-powered personalized dashboard',
    nextStep: 'Deployed and monitoring performance',
    progress: 100,
  },
]

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
        <p className="mt-2 text-gray-600">
          Track your active and completed engagements with peace of mind.
        </p>
      </div>

      {/* Project Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-sm font-medium text-gray-600">Active Projects</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">2</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-sm font-medium text-gray-600">Completed</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">5</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-sm font-medium text-gray-600">Time Saved</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">120h</p>
        </div>
      </div>

      {/* Project Cards */}
      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{project.name}</h2>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-2 ${
                  project.status === 'Active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {project.status}
                </span>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Progress</p>
                <p className="text-2xl font-bold text-gray-900">{project.progress}%</p>
              </div>
            </div>

            {/* TL;DR Cards */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="text-sm font-semibold text-red-900 mb-1">Problem</h4>
                <p className="text-sm text-red-700">{project.problem}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <h4 className="text-sm font-semibold text-green-900 mb-1">Solution</h4>
                <p className="text-sm text-green-700">{project.solution}</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3">
                <h4 className="text-sm font-semibold text-blue-900 mb-1">Next Step</h4>
                <p className="text-sm text-blue-700">{project.nextStep}</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button size="sm" variant="outline">
                View Details
              </Button>
              <Button size="sm" variant="outline">
                Download Assets
              </Button>
              {project.status === 'Active' && (
                <Button size="sm" variant="outline">
                  Give Feedback
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Notifications */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
        <h3 className="font-semibold text-orange-900 mb-2">Recent Updates</h3>
        <ul className="space-y-2 text-sm text-orange-700">
          <li>• Build completed for "E-commerce Platform Redesign"</li>
          <li>• Feedback requested on "Customer Dashboard" wireframes</li>
        </ul>
      </div>
    </div>
  )
}
