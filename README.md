# Photo Gallery & Portfolio

A professional photo gallery and portfolio application built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

✨ **Smart Image Upload**
- Drag & drop interface with real-time progress
- Automatic image resizing and optimization
- Multiple format support (JPEG, PNG, GIF, WebP)
- EXIF data extraction and preservation

🖼️ **Gallery Organization**
- Responsive masonry grid layout
- Advanced tagging and categorization system
- Search and filter capabilities
- Multiple view modes (grid/list)

👥 **Client Management**
- Private client galleries with password protection
- Client approval and proofing workflow
- Download permission controls
- Feedback and comment system

🌐 **Public Portfolio**
- SEO-optimized public galleries
- Custom portfolio URLs
- Social media integration
- Professional presentation layouts

⚡ **Performance & UX**
- Next.js 15 App Router for optimal performance
- Responsive design for all devices
- Dark/light mode support
- Smooth animations with Framer Motion

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
src/
├── app/                 # Next.js 15 App Router pages
│   ├── page.tsx        # Homepage with hero and features
│   ├── gallery/        # Photo gallery with filters
│   ├── upload/         # Image upload interface
│   └── admin/          # Admin dashboard
├── components/         # Reusable React components
│   ├── gallery/        # Gallery-specific components
│   └── upload/         # Upload-specific components
└── lib/                # Utility functions and helpers
    └── image-utils.ts  # Image processing utilities
```

## Key Components

### UploadZone
- Drag & drop file upload with progress tracking
- Real-time file validation and preview
- Automatic thumbnail generation
- Upload status management

### GalleryGrid
- Responsive masonry layout
- Interactive photo cards with actions
- Like, download, and share functionality
- Tag display and filtering

### Admin Dashboard
- Gallery management interface
- Client project tracking
- Analytics and statistics
- Bulk operations support

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **File Upload**: React Dropzone
- **Image Processing**: Sharp (server-side)
- **Icons**: Lucide React

## Development Features

- Hot reload with Turbopack support
- TypeScript strict mode enabled
- ESLint configuration included
- Responsive design patterns
- Accessibility considerations

## Deployment

The application can be deployed on Vercel, Netlify, or any platform supporting Next.js:

```bash
npm run build
npm start
```

## Future Enhancements

- Real image processing with Sharp
- Database integration (PostgreSQL/MongoDB)
- Authentication system
- Payment integration for client downloads
- Advanced analytics dashboard
- Mobile app with React Native

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
