import { Users, FolderOpen, BarChart3, Settings, Plus, Eye, Edit, Trash2 } from "lucide-react";
import Link from "next/link";

export default function AdminPage() {
  const stats = [
    { label: "Total Photos", value: "1,234", icon: FolderOpen, color: "blue" },
    { label: "Active Galleries", value: "28", icon: FolderOpen, color: "green" },
    { label: "Client Projects", value: "12", icon: Users, color: "purple" },
    { label: "This Month Views", value: "45,678", icon: BarChart3, color: "orange" },
  ];

  const galleries = [
    {
      id: 1,
      name: "Wedding - Sarah & John",
      type: "Client Review",
      photos: 156,
      views: 234,
      status: "Active",
      lastUpdated: "2 hours ago"
    },
    {
      id: 2,
      name: "Corporate Headshots",
      type: "Public",
      photos: 89,
      views: 1234,
      status: "Published",
      lastUpdated: "1 day ago"
    },
    {
      id: 3,
      name: "Nature Portfolio",
      type: "Portfolio",
      photos: 234,
      views: 5678,
      status: "Published",
      lastUpdated: "3 days ago"
    },
    {
      id: 4,
      name: "Street Photography",
      type: "Draft",
      photos: 67,
      views: 0,
      status: "Draft",
      lastUpdated: "1 week ago"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white">
              Portfolio Gallery
            </Link>
            <nav className="flex items-center gap-4">
              <Link href="/gallery" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                Gallery
              </Link>
              <Link href="/upload" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                Upload
              </Link>
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Admin Dashboard
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Manage your galleries, clients, and portfolio
            </p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2">
            <Plus className="h-5 w-5" />
            New Gallery
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                    {stat.value}
                  </p>
                </div>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  stat.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900' :
                  stat.color === 'green' ? 'bg-green-100 dark:bg-green-900' :
                  stat.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900' :
                  'bg-orange-100 dark:bg-orange-900'
                }`}>
                  <stat.icon className={`h-6 w-6 ${
                    stat.color === 'blue' ? 'text-blue-600' :
                    stat.color === 'green' ? 'text-green-600' :
                    stat.color === 'purple' ? 'text-purple-600' :
                    'text-orange-600'
                  }`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link href="/upload" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
              <Plus className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Upload Photos</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Add new photos to your galleries with automatic optimization
            </p>
          </Link>

          <button className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group text-left">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Manage Clients</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Add clients and manage access to private galleries
            </p>
          </button>

          <button className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group text-left">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors">
              <Settings className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Settings</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Configure your portfolio, branding, and preferences
            </p>
          </button>
        </div>

        {/* Galleries Table */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Recent Galleries</h2>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                View All
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 dark:bg-slate-700">
                <tr>
                  <th className="text-left py-3 px-6 font-medium text-slate-700 dark:text-slate-300">
                    Gallery Name
                  </th>
                  <th className="text-left py-3 px-6 font-medium text-slate-700 dark:text-slate-300">
                    Type
                  </th>
                  <th className="text-left py-3 px-6 font-medium text-slate-700 dark:text-slate-300">
                    Photos
                  </th>
                  <th className="text-left py-3 px-6 font-medium text-slate-700 dark:text-slate-300">
                    Views
                  </th>
                  <th className="text-left py-3 px-6 font-medium text-slate-700 dark:text-slate-300">
                    Status
                  </th>
                  <th className="text-left py-3 px-6 font-medium text-slate-700 dark:text-slate-300">
                    Last Updated
                  </th>
                  <th className="text-left py-3 px-6 font-medium text-slate-700 dark:text-slate-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {galleries.map((gallery) => (
                  <tr key={gallery.id} className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <td className="py-4 px-6">
                      <div className="font-medium text-slate-900 dark:text-white">
                        {gallery.name}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        gallery.type === 'Client Review' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                        gallery.type === 'Public' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                        gallery.type === 'Portfolio' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' :
                        'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300'
                      }`}>
                        {gallery.type}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-600 dark:text-slate-400">
                      {gallery.photos}
                    </td>
                    <td className="py-4 px-6 text-slate-600 dark:text-slate-400">
                      {gallery.views.toLocaleString()}
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        gallery.status === 'Active' || gallery.status === 'Published' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                          : 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300'
                      }`}>
                        {gallery.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-600 dark:text-slate-400">
                      {gallery.lastUpdated}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <button className="p-1 text-slate-400 hover:text-blue-600 transition-colors">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-1 text-slate-400 hover:text-green-600 transition-colors">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-1 text-slate-400 hover:text-red-600 transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
