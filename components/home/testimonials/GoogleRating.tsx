import { Star } from "lucide-react";

export default function GoogleRating() {
  return (
    <div className="mb-16 flex flex-col items-center justify-center">
      <div className="flex gap-1 text-yellow-500">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-6 w-6 fill-yellow-500" />
        ))}
      </div>

      <h3 className="mt-4 text-4xl font-bold text-gray-900">
        5.0
      </h3>

      <p className="mt-2 text-gray-600">
        Based on 4 Google Reviews
      </p>
    </div>
  );
}