import Link from 'next/link'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">Admin Panel</h2>
        </div>
        <nav className="mt-8">
          <Link href="/admin/dashboard" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
            Dashboard
          </Link>
          <Link href="/admin/users" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
            Users
          </Link>
          <Link href="/admin/analytics" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
            Analytics
          </Link>
          <Link href="/admin/projects" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
            Projects
          </Link>
          <Link href="/admin/settings" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
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
