export default function UserProjects() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">My Projects</h1>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              New Project
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample project cards */}
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Project {project}</h3>
                <p className="text-gray-600 mb-4">Description of project {project}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Last updated: 2 days ago</span>
                  <button className="text-indigo-600 hover:text-indigo-800">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
