import type { Metadata } from "next";
import Link from "next/link";
import { CatalogBrowser } from "@/components/catalog-browser";
import { content } from "@/types/catalog";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata = pageMetadata("Каталог продукции", "19 направлений продукции STEEL PROFILES: фасадные системы, кровля, ограждения, ворота и элементы.", "/catalog");
export default function CatalogPage() { return <><section className="page-hero"><div className="container"><div className="breadcrumbs"><Link href="/">Главная</Link><span>/</span><span>Каталог</span></div><span className="eyebrow">Ассортимент STEEL PROFILES</span><h1>Каталог<br/><em>продукции</em></h1><p>19 товарных направлений из каталога 2026–2027. Ищите по названию и вариантам или выберите группу.</p></div></section><section className="catalog-section"><div className="container"><CatalogBrowser products={content.products} groups={content.groups}/></div></section></>; }
