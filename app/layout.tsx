import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://cookonstay.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "CookOnStay | Food & Catering",
    template: "%s | CookOnStay",
  },

  description:
    "CookOnStay provides everyday food, catering and practical food solutions for colleges, workplaces, events and group requirements.",

  applicationName: "CookOnStay",

  keywords: [
    "CookOnStay",
    "food catering",
    "college catering",
    "campus food",
    "bulk food",
    "event catering",
    "food solutions",
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
    url: siteUrl,
    siteName: "CookOnStay",
    title: "CookOnStay | Food & Catering",
    description:
      "Everyday food, catering and practical food solutions for colleges, workplaces, events and group requirements.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "CookOnStay - Food & Catering",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CookOnStay | Food & Catering",
    description:
      "Everyday food, catering and practical food solutions by CookOnStay.",
    images: ["/images/og-image.png"],
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
      <body>{children}</body>
    </html>
  );
}