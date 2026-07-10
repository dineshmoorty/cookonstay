// components/GoogleMap.tsx

export default function GoogleMap() {
  return (
    <div className="overflow-hidden rounded-2xl shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2668746707336!2d78.1227497!3d9.911717000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5ebbc50b39b%3A0x9ef6e6fab2e9657b!2sSHRI%20KUBERAN%20TIFFEN%20HOME!5e0!3m2!1sen!2sin!4v1783683197363!5m2!1sen!2sin"
      className="h-64 w-full md:h-80 lg:h-30"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
      title="SHRI KUBERAN TIFFEN HOME"
      />
    </div>
  );
}