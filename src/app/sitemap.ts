import type { MetadataRoute } from "next";
import { content } from "@/types/catalog";
export default function sitemap(): MetadataRoute.Sitemap { const base = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, ""); if (!base) return []; const paths = ["", "/catalog", "/solutions", "/about", "/contacts", ...content.products.map(p => `/catalog/${p.slug}`)]; return paths.map(path => ({ url: `${base}${path}`, changeFrequency: "monthly", priority: path === "" ? 1 : path.startsWith("/catalog/") ? 0.7 : 0.8 })); }
