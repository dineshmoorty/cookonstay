import type { Metadata } from "next";
import { Inter, Poppins, Geist } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";
import { BUSINESS } from "@/constants/business";
import { SITE_URL, siteUrl } from "@/lib/site";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "CookOnStay | Homemade South Indian Food in Madurai",
    template: "%s | CookOnStay",
  },
  description:
    "Fresh, hygienic homemade South Indian meals in Madurai. Enjoy authentic, affordable food prepared with care by CookOnStay.",
  keywords: [
    "CookOnStay",
    "homemade food Madurai",
    "South Indian food Madurai",
    "fresh meals Madurai",
    "hygienic food Madurai",
    "affordable meals Madurai",
  ],
  authors: [{ name: "CookOnStay" }],
  creator: "CookOnStay",
  publisher: "CookOnStay",
  category: "Food and dining",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "CookOnStay",
    title: "CookOnStay | Homemade South Indian Food in Madurai",
    description:
      "Fresh, hygienic homemade South Indian meals in Madurai, prepared with care and priced for everyone.",
    images: [
      {
        url: "/images/hero_banner.webp",
        width: 1254,
        height: 1151,
        alt: "Fresh homemade South Indian food from CookOnStay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CookOnStay | Homemade South Indian Food in Madurai",
    description:
      "Fresh, hygienic homemade South Indian meals in Madurai, prepared with care and priced for everyone.",
    images: ["/images/hero_banner.webp"],
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: SITE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: "₹₹",
    servesCuisine: "South Indian",
    address: {
      "@type": "PostalAddress",
      streetAddress: "106A, Panthadi 9th Street, Thavittusandhai",
      addressLocality: "Madurai",
      postalCode: "625001",
      addressCountry: "IN",
    },
    openingHours: "Mo-Sa 19:00-22:00",
    hasMap: BUSINESS.mapUrl,
    sameAs: [BUSINESS.instagram, BUSINESS.facebook, BUSINESS.linkedin],
  };

  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
