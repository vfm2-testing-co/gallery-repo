'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart, Download, Share2, Eye, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

interface Photo {
  id: string;
  url: string;
  title: string;
  tags: string[];
  likes: number;
  downloads: number;
  views: number;
  photographer?: string;
  dateTaken?: string;
}

interface GalleryGridProps {
  limit?: number;
  className?: string;
}

// Mock data for demonstration
const mockPhotos: Photo[] = [
  {
    id: '1',
    url: '/placeholder-1.jpg',
    title: 'Sunset Landscape',
    tags: ['landscape', 'sunset', 'nature'],
    likes: 124,
    downloads: 45,
    views: 1205,
    photographer: 'John Doe',
    dateTaken: '2024-01-15'
  },
  {
    id: '2',
    url: '/placeholder-2.jpg',
    title: 'Portrait Study',
    tags: ['portrait', 'studio', 'professional'],
    likes: 89,
    downloads: 23,
    views: 892,
    photographer: 'Jane Smith',
    dateTaken: '2024-01-10'
  },
  {
    id: '3',
    url: '/placeholder-3.jpg',
    title: 'Architecture',
    tags: ['architecture', 'building', 'city'],
    likes: 156,
    downloads: 67,
    views: 1543,
    photographer: 'Mike Johnson',
    dateTaken: '2024-01-08'
  },
  {
    id: '4',
    url: '/placeholder-4.jpg',
    title: 'Nature Close-up',
    tags: ['macro', 'nature', 'flowers'],
    likes: 203,
    downloads: 89,
    views: 2134,
    photographer: 'Sarah Wilson',
    dateTaken: '2024-01-05'
  },
  {
    id: '5',
    url: '/placeholder-5.jpg',
    title: 'Street Photography',
    tags: ['street', 'candid', 'urban'],
    likes: 91,
    downloads: 34,
    views: 765,
    photographer: 'Alex Brown',
    dateTaken: '2024-01-03'
  },
  {
    id: '6',
    url: '/placeholder-6.jpg',
    title: 'Wedding Moment',
    tags: ['wedding', 'love', 'ceremony'],
    likes: 267,
    downloads: 112,
    views: 3421,
    photographer: 'Emma Davis',
    dateTaken: '2024-01-01'
  }
];

export function GalleryGrid({ limit, className = "" }: GalleryGridProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [likedPhotos, setLikedPhotos] = useState<Set<string>>(new Set());

  const displayedPhotos = limit ? mockPhotos.slice(0, limit) : mockPhotos;

  const toggleLike = (photoId: string) => {
    setLikedPhotos(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(photoId)) {
        newLiked.delete(photoId);
      } else {
        newLiked.add(photoId);
      }
      return newLiked;
    });
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedPhotos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Photo Container */}
            <div className="relative aspect-[4/3] overflow-hidden">
              {/* Placeholder colored rectangles since we don't have actual images */}
              <div 
                className={`w-full h-full ${
                  index % 6 === 0 ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                  index % 6 === 1 ? 'bg-gradient-to-br from-green-400 to-green-600' :
                  index % 6 === 2 ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                  index % 6 === 3 ? 'bg-gradient-to-br from-pink-400 to-pink-600' :
                  index % 6 === 4 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' :
                  'bg-gradient-to-br from-red-400 to-red-600'
                }`}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => setSelectedPhoto(photo)}
                    className="bg-white/90 dark:bg-slate-800/90 text-slate-900 dark:text-white px-4 py-2 rounded-lg font-medium hover:bg-white dark:hover:bg-slate-700 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => toggleLike(photo.id)}
                  className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                    likedPhotos.has(photo.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700'
                  }`}
                >
                  <Heart className={`h-4 w-4 ${likedPhotos.has(photo.id) ? 'fill-current' : ''}`} />
                </button>
                <button className="p-2 rounded-full bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 backdrop-blur-sm transition-colors">
                  <Download className="h-4 w-4" />
                </button>
                <button className="p-2 rounded-full bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 backdrop-blur-sm transition-colors">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Photo Info */}
            <div className="p-4">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2 truncate">
                {photo.title}
              </h3>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {photo.tags.slice(0, 3).map(tag => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-full"
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
                {photo.tags.length > 3 && (
                  <span className="text-xs text-slate-500 px-2 py-1">
                    +{photo.tags.length - 3} more
                  </span>
                )}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    {photo.likes + (likedPhotos.has(photo.id) ? 1 : 0)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {photo.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Download className="h-4 w-4" />
                    {photo.downloads}
                  </span>
                </div>
              </div>

              {/* Photographer */}
              {photo.photographer && (
                <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  by {photo.photographer}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {displayedPhotos.length === 0 && (
        <div className="text-center py-16">
          <div className="bg-slate-100 dark:bg-slate-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Eye className="h-8 w-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">
            No photos yet
          </h3>
          <p className="text-slate-500 dark:text-slate-400">
            Upload your first photos to get started
          </p>
        </div>
      )}

      {/* Photo Detail Modal - Placeholder for future implementation */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">{selectedPhoto.title}</h2>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                >
                  ✕
                </button>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                Photo details and larger view would be implemented here.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
