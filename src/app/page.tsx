import { Upload, Users, Eye } from "lucide-react";
import Link from "next/link";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { UploadZone } from "@/components/upload/UploadZone";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Professional Photo Gallery & Portfolio
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto">
            Upload, organize, and share your photography with automatic optimization, 
            tagging system, and client proofing capabilities.
          </p>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
              <Upload className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Upload</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Drag & drop with automatic resizing and optimization
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
              <Eye className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Client Proofing</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Share galleries with clients for review and approval
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Public Sharing</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Create public portfolios with custom URLs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Upload Section */}
      <section className="py-16 px-4 bg-white/30 dark:bg-slate-800/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Quick Upload</h3>
          <UploadZone />
        </div>
      </section>

      {/* Recent Gallery Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold">Recent Uploads</h3>
            <Link href="/gallery" className="text-blue-600 hover:text-blue-700 font-medium">
              View All →
            </Link>
          </div>
          <GalleryGrid limit={6} currentPage={1} />
        </div>
      </section>
    </div>
  );
}
