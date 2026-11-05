import type { Metadata } from "next";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export function pageMetadata(title: string, description: string, path: string, image = "/images/hero-facade-house.webp"): Metadata {
  return {
    title,
    description,
    ...(siteUrl ? { alternates: { canonical: `${siteUrl}${path}` } } : {}),
    openGraph: {
      type: "website",
      locale: "ru_RU",
      siteName: "STEEL PROFILES",
      title: `${title} | STEEL PROFILES`,
      description,
      ...(siteUrl ? { url: `${siteUrl}${path}` } : {}),
      images: [image],
    },
  };
}
