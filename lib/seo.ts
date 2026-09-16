import type { Metadata } from "next";

export const SITE_URL = "https://carpsync.com";
export const SITE_NAME = "CarpSync";

export const DEFAULT_TITLE =
  "CarpSync | Online Booking Software for Fisheries";

export const DEFAULT_DESCRIPTION =
  "CarpSync helps fisheries and carp lakes manage online bookings, availability, payments, optional extras and customer communication from one simple platform.";

export function canonicalUrl(path: string): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path}`;
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  const url = canonicalUrl(path);
  const resolvedTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: resolvedTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
    },
  };
}

export const marketingPaths = [
  "/",
  "/product",
  "/features",
  "/for-fisheries",
  "/french-fisheries",
  "/pricing",
  "/resources",
  "/about",
  "/demo",
  "/integrations",
  "/ecosystem",
  "/privacy",
  "/terms",
  "/cookies",
] as const;
