import { Camera, Settings, Users, Globe } from "lucide-react";
import { UploadZone } from "@/components/upload/UploadZone";
import Link from "next/link";

export default function UploadPage() {
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
              <Link href="/admin" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Admin
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
            <Camera className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Upload Your Photos
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Share your photography with automatic optimization, tagging, and organization. 
            Perfect for building your portfolio or sharing with clients.
          </p>
        </div>

        {/* Upload Zone */}
        <div className="mb-12">
          <UploadZone />
        </div>

        {/* Upload Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              <Settings className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Automatic Optimization</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Your photos are automatically resized and optimized for web viewing while preserving quality.
            </p>
            <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-1">
              <li>• Multiple size variants generated</li>
              <li>• WebP format conversion</li>
              <li>• EXIF data preservation</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Client Sharing</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Create private galleries for client review and approval with download controls.
            </p>
            <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-1">
              <li>• Password-protected galleries</li>
              <li>• Client approval workflow</li>
              <li>• Download permissions</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Public Portfolio</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Showcase your best work with customizable public galleries and SEO optimization.
            </p>
            <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-1">
              <li>• Custom portfolio URLs</li>
              <li>• SEO-friendly galleries</li>
              <li>• Social media integration</li>
            </ul>
          </div>
        </div>

        {/* Upload Settings */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-6">Upload Settings</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Gallery Assignment */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Assign to Gallery
              </label>
              <select className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Select a gallery...</option>
                <option>Wedding - Sarah & John</option>
                <option>Corporate Headshots</option>
                <option>Nature Portfolio</option>
                <option>Street Photography</option>
              </select>
            </div>

            {/* Visibility */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Visibility
              </label>
              <select className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Public</option>
                <option>Private</option>
                <option>Client Review</option>
                <option>Draft</option>
              </select>
            </div>

            {/* Tags */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Tags (comma-separated)
              </label>
              <input
                type="text"
                placeholder="wedding, portrait, outdoor, professional..."
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Copyright */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Copyright Notice
              </label>
              <input
                type="text"
                placeholder="© 2024 Your Photography Studio"
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Upload & Process
            </button>
            <button className="px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              Save as Draft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
