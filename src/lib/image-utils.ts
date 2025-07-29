import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export interface ImageMetadata {
  width: number;
  height: number;
  size: number;
  format: string;
  exif?: {
    camera?: string;
    lens?: string;
    iso?: number;
    aperture?: string;
    shutterSpeed?: string;
    focalLength?: string;
    dateTaken?: string;
  };
}

export interface OptimizedImage {
  original: string;
  thumbnail: string;
  medium: string;
  large: string;
  webp: {
    thumbnail: string;
    medium: string;
    large: string;
  };
}

export class ImageProcessor {
  static async processImage(file: File): Promise<{
    metadata: ImageMetadata;
    optimized: OptimizedImage;
  }> {
    // In a real implementation, this would use Sharp or similar
    // For now, we'll return mock data
    
    const metadata: ImageMetadata = {
      width: 1920,
      height: 1080,
      size: file.size,
      format: (file.type && file.type.split('/').length > 1) ? file.type.split('/')[1] : 'jpeg',
      exif: {
        camera: 'Canon EOS R5',
        lens: 'RF 24-70mm f/2.8L IS USM',
        iso: 400,
        aperture: 'f/5.6',
        shutterSpeed: '1/125',
        focalLength: '50mm',
        dateTaken: new Date().toISOString(),
      }
    };

    // Mock optimized versions - in production these would be generated
    const optimized: OptimizedImage = {
      original: URL.createObjectURL(file),
      thumbnail: URL.createObjectURL(file),
      medium: URL.createObjectURL(file),
      large: URL.createObjectURL(file),
      webp: {
        thumbnail: URL.createObjectURL(file),
        medium: URL.createObjectURL(file),
        large: URL.createObjectURL(file),
      }
    };

    return { metadata, optimized };
  }

  static async generateThumbnail(file: File, maxWidth: number = 300): Promise<string> {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = () => {
        const ratio = Math.min(maxWidth / img.width, maxWidth / img.height);
        canvas.width = img.width * ratio;
        canvas.height = img.height * ratio;

        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', 0.8));
      };

      img.src = URL.createObjectURL(file);
    });
  }

  static async extractMetadata(file: File): Promise<ImageMetadata> {
    // In production, this would extract real EXIF data
    return {
      width: 1920,
      height: 1080,
      size: file.size,
      format: file.type.split('/')[1] || 'jpeg',
      exif: {
        dateTaken: new Date().toISOString(),
      }
    };
  }

  static formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  static validateImageFile(file: File): { valid: boolean; error?: string } {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];

    if (!allowedTypes.includes(file.type)) {
      return {
        valid: false,
        error: 'Invalid file type. Please upload JPEG, PNG, GIF, or WebP images.'
      };
    }

    if (file.size > maxSize) {
      return {
        valid: false,
        error: `File size too large. Maximum size is ${this.formatFileSize(maxSize)}.`
      };
    }

    return { valid: true };
  }
}

export interface Tag {
  id: string;
  name: string;
  color: string;
  count: number;
}

export class TagManager {
  static suggestTags(filename: string): string[] {
    const suggestions: string[] = [];
    const name = filename.toLowerCase();

    // Extract common photography terms
    if (name.includes('wedding')) suggestions.push('wedding');
    if (name.includes('portrait')) suggestions.push('portrait');
    if (name.includes('landscape')) suggestions.push('landscape');
    if (name.includes('nature')) suggestions.push('nature');
    if (name.includes('street')) suggestions.push('street');
    if (name.includes('macro')) suggestions.push('macro');
    if (name.includes('studio')) suggestions.push('studio');
    if (name.includes('outdoor')) suggestions.push('outdoor');

    return suggestions;
  }

  static parseTagString(tagString: string): string[] {
    return tagString
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0)
      .map(tag => tag.toLowerCase());
  }

  static formatTags(tags: string[]): Tag[] {
    const colors = ['blue', 'green', 'purple', 'red', 'yellow', 'pink', 'indigo', 'gray'];
    
    return tags.map((tag, index) => ({
      id: `tag-${index}`,
      name: tag,
      color: colors[index % colors.length],
      count: 1
    }));
  }
}
