import MoodHeader from "./MoodHeader";
import MoodGrid from "./MoodGrid";

export default function MoodSection() {
  return (
    <section
      id="choose-your-mood"
      className="bg-gradient-to-b from-white to-orange-50 py-24" style={{background: "linear-gradient(to bottom, #ffffff, #fff7ed)", padding: "2rem"}}>
      <div className="mx-auto max-w-full px-6">
        <MoodHeader />
        <MoodGrid />
      </div>
    </section>
  );
}