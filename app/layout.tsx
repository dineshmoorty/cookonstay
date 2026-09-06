import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CookOnStay | Food & Catering",
  description:
    "CookOnStay delivers fresh food, reliable catering and practical food solutions for colleges, workplaces and events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}