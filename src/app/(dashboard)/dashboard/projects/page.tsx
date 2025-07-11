'use client'

const projects = [
  {
    id: 1,
    name: 'Customer Portal Redesign',
    status: 'In Progress',
    problem: 'Users struggling with complex navigation and outdated interface',
    solution: 'Modern, intuitive dashboard with streamlined workflows',
    nextStep: 'User testing with interactive prototype',
    progress: 65,
    lastUpdate: '2 days ago',
    deliverables: ['Wireframes', 'Design System', 'Prototype'],
    statusColor: 'bg-blue-500'
  },
  {
    id: 2,
    name: 'Mobile App Development',
    status: 'Planning',
    problem: 'Need mobile presence to reach customers on-the-go',
    solution: 'Native iOS/Android app with core business features',
    nextStep: 'Technical architecture planning session',
    progress: 15,
    lastUpdate: '1 week ago',
    deliverables: ['Requirements Doc', 'Technical Spec'],
    statusColor: 'bg-yellow-500'
  },
  {
    id: 3,
    name: 'API Integration Platform',
    status: 'Completed',
    problem: 'Manual data entry causing errors and delays',
    solution: 'Automated integration hub with real-time sync',
    nextStep: 'Deployment and monitoring',
    progress: 100,
    lastUpdate: '3 weeks ago',
    deliverables: ['Source Code', 'Documentation', 'Deployment Guide', 'Training Materials'],
    statusColor: 'bg-green-500'
  }
]

const notifications = [
  {
    id: 1,
    type: 'Build Complete',
    message: 'API Integration Platform build completed successfully',
    time: '2 hours ago',
    action: 'Download'
  },
  {
    id: 2,
    type: 'Feedback Requested',
    message: 'Customer Portal Redesign prototype ready for review',
    time: '1 day ago',
    action: 'Review'
  }
]

export default function ProjectsPage() {
  const downloadDeliverable = (projectId: number, deliverable: string) => {
    // Handle deliverable download
    console.log(`Downloading ${deliverable} for project ${projectId}`)
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
        <p className="mt-2 text-gray-600">
          Track your engagements and access all deliverables with peace of mind.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Projects List */}
        <div className="lg:col-span-3">
          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                      <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full text-white ${project.statusColor}`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">Last updated {project.lastUpdate}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">{project.progress}%</div>
                    <div className="w-24 bg-gray-200 rounded-full h-2 mt-1">
                      <div
                        className="bg-orange-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Problem → Solution → Next Step */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="text-sm font-semibold text-red-800 mb-2">Problem</h4>
                    <p className="text-sm text-red-700">{project.problem}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="text-sm font-semibold text-blue-800 mb-2">Solution</h4>
                    <p className="text-sm text-blue-700">{project.solution}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="text-sm font-semibold text-green-800 mb-2">Next Step</h4>
                    <p className="text-sm text-green-700">{project.nextStep}</p>
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Deliverables</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.deliverables.map((deliverable, index) => (
                      <button
                        key={index}
                        onClick={() => downloadDeliverable(project.id, deliverable)}
                        className="inline-flex items-center px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {deliverable}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h3>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div key={notification.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-900">{notification.type}</h4>
                      <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                      <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
                    </div>
                  </div>
                  <button className="mt-3 w-full bg-orange-600 text-white text-sm py-1 px-3 rounded hover:bg-orange-700 transition-colors">
                    {notification.action}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Active Projects</span>
                <span className="text-sm font-semibold">2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Completed</span>
                <span className="text-sm font-semibold">1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Deliverables</span>
                <span className="text-sm font-semibold">9</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}