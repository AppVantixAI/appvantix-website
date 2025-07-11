export default function AdminAnalytics() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Analytics</h1>
          
          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="text-2xl font-bold text-gray-900">1,247</div>
              <div className="text-sm text-gray-500">Total Users</div>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <div className="text-2xl font-bold text-gray-900">89</div>
              <div className="text-sm text-gray-500">Active Projects</div>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <div className="text-2xl font-bold text-gray-900">$47,892</div>
              <div className="text-sm text-gray-500">Revenue</div>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <div className="text-2xl font-bold text-gray-900">98.5%</div>
              <div className="text-sm text-gray-500">Uptime</div>
            </div>
          </div>
          
          {/* Chart placeholder */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Usage Over Time</h2>
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
              <p className="text-gray-500">Chart visualization will be implemented here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
