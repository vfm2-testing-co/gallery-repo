'use client';

import { useState } from "react";
import { Search, Filter, Grid, List } from "lucide-react";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

const PHOTOS_PER_PAGE = 6;
const TOTAL_PHOTOS = 15; // This would come from your backend/database in a real app

export default function GalleryPage() {
  const [photosToShow, setPhotosToShow] = useState(PHOTOS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = async () => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setPhotosToShow(prev => Math.min(prev + PHOTOS_PER_PAGE, TOTAL_PHOTOS));
    setIsLoading(false);
  };

  const hasMorePhotos = photosToShow < TOTAL_PHOTOS;
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Photo Gallery
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Browse and discover amazing photography
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search photos..."
                className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Controls */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                <Filter className="h-4 w-4" />
                Filters
              </button>
              
              <div className="flex border border-slate-300 dark:border-slate-600 rounded-lg overflow-hidden">
                <button className="p-2 bg-blue-500 text-white">
                  <Grid className="h-4 w-4" />
                </button>
                <button className="p-2 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600">
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {['All', 'Landscape', 'Portrait', 'Architecture', 'Nature', 'Street', 'Wedding'].map(tag => (
              <button
                key={tag}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  tag === 'All'
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <GalleryGrid 
          limit={photosToShow}
          onLoadMore={handleLoadMore}
          hasMorePhotos={hasMorePhotos}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
