import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "CookOnStay | Food & Catering in Madurai",
    template: "%s | CookOnStay",
  },

  description:
    "Explore CookOnStay in Madurai for South Indian everyday food, catering packages and bulk food orders for colleges, workplaces and events.",

  applicationName: "CookOnStay",

  keywords: [
    "CookOnStay",
    "food in Madurai",
    "South Indian food Madurai",
    "catering services Madurai",
    "bulk food orders Madurai",
    "college catering Madurai",
    "office lunch Madurai",
  ],

  authors: [{ name: "CookOnStay" }],
  creator: "CookOnStay",
  publisher: "CookOnStay",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "CookOnStay",
    title: "CookOnStay | Food & Catering in Madurai",
    description:
      "South Indian everyday food, catering packages and bulk food orders in Madurai.",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "CookOnStay - Food & Catering",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CookOnStay | Food & Catering in Madurai",
    description:
      "South Indian everyday food, catering packages and bulk food orders in Madurai.",
    images: ["/images/og-image.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/icons/icon.png",
    apple: "/icons/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>
        {children}
        {process.env.VERCEL === "1" ? (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        ) : null}
      </body>
    </html>
  );
}
