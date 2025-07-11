import Link from 'next/link'

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">User Dashboard</h2>
        </div>
        <nav className="mt-8">
          <Link href="/user/dashboard" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
            Dashboard
          </Link>
          <Link href="/user/profile" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
            Profile
          </Link>
          <Link href="/user/projects" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
            Projects
          </Link>
          <Link href="/user/settings" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
            Settings
          </Link>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  )
}
