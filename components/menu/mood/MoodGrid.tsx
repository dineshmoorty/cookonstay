import { MOODS } from "@/constants/mood";
import MoodCard from "./MoodCard";

export default function MoodGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {MOODS.map((mood) => (
        <MoodCard
          key={mood.id}
          mood={mood}
        />
      ))}

    </div>
  );
}