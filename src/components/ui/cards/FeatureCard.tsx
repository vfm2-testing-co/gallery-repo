import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
}

export function FeatureCard({ icon: Icon, title, description, iconColor }: FeatureCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
      <Icon className={`h-12 w-12 ${iconColor} mx-auto mb-4`} />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </div>
  );
}
