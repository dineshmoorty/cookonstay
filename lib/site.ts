const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cookonstay.com";

export const SITE_URL = configuredSiteUrl.replace(/\/$/, "");
export const siteUrl = new URL(SITE_URL);
