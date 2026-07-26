import { LucideIcon } from "lucide-react";

type Feature = {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function FeatureCard({
  feature,
}: {
  feature: Feature;
}) {
  const Icon = feature.icon;

  return (
    <div className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl" style={{"padding": "20px"}}>
      <div className="mb-6 inline-flex rounded-2xl bg-orange-100 p-4 text-orange-600 transition-transform duration-300 group-hover:scale-110" style={{"padding": "10px"}}>
        <Icon className="h-8 w-8" />
      </div>

      <h3 className="mb-3 text-xl font-semibold text-gray-900">
        {feature.title}
      </h3>

      <p className="leading-7 text-gray-600">
        {feature.description}
      </p>
    </div>
  );
}