import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Update this date whenever the public website content receives a meaningful edit.
const contentUpdatedAt = new Date("2026-11-17T00:00:00+05:30");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: contentUpdatedAt, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/menu`, lastModified: contentUpdatedAt, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/catering`, lastModified: contentUpdatedAt, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: contentUpdatedAt, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: contentUpdatedAt, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/privacy-policy`, lastModified: contentUpdatedAt, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms-and-conditions`, lastModified: contentUpdatedAt, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/refund-policy`, lastModified: contentUpdatedAt, changeFrequency: "yearly", priority: 0.3 },
  ];
}
