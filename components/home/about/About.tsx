import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fffdf8]" style={{padding : "20px"}}>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10  bg-[radial-gradient(ellipse_at_12%_18%,rgba(255,122,0,0.12),transparent_42%),radial-gradient(ellipse_at_88%_22%,rgba(46,125,50,0.11),transparent_40%)]"
      />
      <div className="mx-auto grid w-full min-h-[calc(100svh-5rem)]  items-center gap-12 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-20 lg:py-20">
        <AboutImage />
        <AboutContent />
      </div>
    </section>
  );
}