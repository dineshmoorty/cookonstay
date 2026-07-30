import JourneyHeader from "./JourneyHeader";
import Timeline from "./Timeline";

export default function Journey() {
  return (
    <section className="bg-white py-24" style={{padding: "20px"}}>
      <div className="mx-auto max-w-full px-6">
        <JourneyHeader />
        <Timeline />
      </div>
    </section>
  );
}