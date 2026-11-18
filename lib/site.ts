const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const SITE_URL =
  rawSiteUrl && rawSiteUrl.trim().length > 0
    ? rawSiteUrl.trim().replace(/\/+$/, "")
    : "https://cookonstay.com";

export function siteUrl(path = "") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  return `${SITE_URL}${path ? cleanPath : ""}`;
}