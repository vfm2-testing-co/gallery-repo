import { Upload, Users, Eye } from "lucide-react";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { UploadZone } from "@/components/upload/UploadZone";
import { 
  Hero, 
  SectionContainer, 
  SectionTitle, 
  FeatureCard 
} from "@/components/ui";

// Define feature cards data
const featureCardsData = [
  {
    icon: Upload,
    title: "Smart Upload",
    description: "Drag & drop with automatic resizing and optimization",
    iconColor: "text-blue-600"
  },
  {
    icon: Eye,
    title: "Client Proofing",
    description: "Share galleries with clients for review and approval",
    iconColor: "text-green-600"
  },
  {
    icon: Users,
    title: "Public Sharing",
    description: "Create public portfolios with custom URLs",
    iconColor: "text-purple-600"
  }
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Professional Photo Gallery & Portfolio" 
        description="Upload, organize, and share your photography with automatic optimization, tagging system, and client proofing capabilities."
      />
      
      {/* Feature Cards Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {featureCardsData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconColor={feature.iconColor}
            />
          ))}
        </div>
      </div>

      {/* Quick Upload Section */}
      <SectionContainer bgColor="bg-white/30 dark:bg-slate-800/30">
        <SectionTitle title="Quick Upload" className="text-center mb-12" />
        <UploadZone />
      </SectionContainer>

      {/* Recent Gallery Preview */}
      <SectionContainer>
        <SectionTitle title="Recent Uploads" viewAllLink="/gallery" />
        <GalleryGrid limit={6} currentPage={1} />
      </SectionContainer>
    </div>
  );
}
