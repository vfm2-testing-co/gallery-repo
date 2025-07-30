import { Users, Plus, Eye, Edit, Trash2, Settings } from "lucide-react";
import Link from "next/link";
import { Hero, SectionContainer, SectionTitle, FeatureCard } from "@/components/ui";
import { dashboardStats, recentGalleries } from "@/lib/mock-admin-data";

export default function AdminPage() {
  return (
    <div className="page-gradient">
      <Hero
        title="Admin Dashboard"
        description="Manage your galleries, clients, and portfolio"
      />
      
      <SectionContainer>
        {/* Stats Grid */}
        <SectionTitle title="Stats Overview" className="mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardStats.map((stat, index) => (
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
        <SectionTitle title="Quick Actions" />
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link href="/upload" className="block">
            <FeatureCard 
              icon={Plus}
              title="Upload Photos"
              description="Add new photos to your galleries with automatic optimization"
              iconColor="text-blue-600"
            />
          </Link>

          <FeatureCard 
            icon={Users}
            title="Manage Clients"
            description="Add clients and manage access to private galleries"
            iconColor="text-green-600"
          />

          <FeatureCard 
            icon={Settings}
            title="Settings"
            description="Configure your portfolio, branding, and preferences"
            iconColor="text-purple-600"
          />
        </div>

        {/* Galleries Table */}
        <SectionTitle title="Recent Galleries" viewAllLink="/admin/galleries" />
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
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
                {recentGalleries.map((gallery) => (
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
      </SectionContainer>
    </div>
  );
}
