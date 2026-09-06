import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#f8f7f2] text-[#172019]">
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}