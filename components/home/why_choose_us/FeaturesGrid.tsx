"use client";

import { FEATURES } from "@/constants/features";
import FeatureCard from "./FeatureCard";

export default function FeaturesGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {FEATURES.map((feature, index) => (
        <FeatureCard key={feature.id} feature={feature} index={index} />
      ))}
    </div>
  );
}
