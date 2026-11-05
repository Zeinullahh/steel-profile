import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MotionEffects } from "@/components/motion-effects";
import { content } from "@/types/catalog";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: { default: "STEEL PROFILES — архитектурные решения из металла", template: "%s | STEEL PROFILES" },
  description: "Фасады, кровля, ограждения, ворота и металлические элементы для частных домов и коммерческих объектов.",
  ...(siteUrl ? { alternates: { canonical: siteUrl } } : {}),
  openGraph: { type: "website", locale: "ru_RU", siteName: "STEEL PROFILES", title: "STEEL PROFILES — архитектурные решения из металла", description: "Фасады, кровля, ограждения, ворота и металлические элементы.", ...(siteUrl ? { url: siteUrl } : {}), images: ["/images/hero-facade-house.webp"] },
};

const organizationJson = siteUrl ? JSON.stringify({
  "@context": "https://schema.org", "@type": "Organization", name: "STEEL PROFILES", url: siteUrl,
  email: content.contacts.email,
  telephone: content.contacts.cities.flatMap(city => city.phones),
}) : null;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><head><link rel="preload" href="/fonts/Inter-Regular.woff" as="font" type="font/woff" crossOrigin="anonymous"/></head><body>
    {organizationJson && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: organizationJson.replace(/</g, "\\u003c") }}/>} 
    <a className="skip-link" href="#main">Перейти к содержимому</a><SiteHeader/><main id="main">{children}</main><SiteFooter/><MotionEffects/>
  </body></html>;
}
