'use client';

import { useState, useEffect, useRef } from "react";
import { Search, Filter, Grid, List, ChevronDown, X } from "lucide-react";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

const PHOTOS_PER_PAGE = 6;
const TOTAL_PHOTOS = 15; // This would come from your backend/database in a real app

// Available tags for filtering
const AVAILABLE_TAGS = ['landscape', 'portrait', 'architecture', 'nature', 'street', 'wedding', 'studio', 'professional', 'building', 'city', 'macro', 'wildlife', 'sports', 'abstract', 'beach'];

export default function GalleryPage() {
  const [photosToShow, setPhotosToShow] = useState(PHOTOS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const filterRef = useRef<HTMLDivElement>(null);

  // Close filter dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLoadMore = async () => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setPhotosToShow(prev => Math.min(prev + PHOTOS_PER_PAGE, TOTAL_PHOTOS));
    setIsLoading(false);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearAllTags = () => {
    setSelectedTags([]);
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Controls */}
            <div className="flex items-center gap-4">
              <div className="relative" ref={filterRef}>
                <button 
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  <Filter className="h-4 w-4" />
                  Filters
                  {selectedTags.length > 0 && (
                    <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-0.5 ml-1">
                      {selectedTags.length}
                    </span>
                  )}
                  <ChevronDown className={`h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Filter Dropdown */}
                {isFilterOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg shadow-lg z-10">
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium text-slate-900 dark:text-white">Filter by Tags</h3>
                        {selectedTags.length > 0 && (
                          <button
                            onClick={clearAllTags}
                            className="text-sm text-blue-500 hover:text-blue-600"
                          >
                            Clear all
                          </button>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
                        {AVAILABLE_TAGS.map(tag => (
                          <label
                            key={tag}
                            className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={selectedTags.includes(tag)}
                              onChange={() => toggleTag(tag)}
                              className="rounded border-slate-300 text-blue-500 focus:ring-blue-500"
                            />
                            <span className="text-sm text-slate-700 dark:text-slate-300 capitalize">
                              {tag}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
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

          {/* Selected Tags Display */}
          {selectedTags.length > 0 && (
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Active filters:
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedTags.map(tag => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tag}
                    <button
                      onClick={() => toggleTag(tag)}
                      className="hover:bg-blue-200 dark:hover:bg-blue-800 rounded-full p-0.5"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Gallery Grid */}
        <GalleryGrid 
          limit={photosToShow}
          onLoadMore={handleLoadMore}
          hasMorePhotos={hasMorePhotos}
          isLoading={isLoading}
          selectedTags={selectedTags}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  );
}
