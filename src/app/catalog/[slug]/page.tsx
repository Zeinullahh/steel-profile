import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { getProductFacts, getProductFeatures, getProductImages } from "@/lib/product-detail";
import { pageMetadata, siteUrl } from "@/lib/seo";
import { content } from "@/types/catalog";
import type { Product } from "@/types/catalog";

export const dynamicParams = false;
export function generateStaticParams() { return content.products.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = content.products.find(item => item.slug === slug);
  if (!product) return {};
  return pageMetadata(product.title, product.description, `/catalog/${slug}`, product.image);
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = content.products.find(item => item.slug === slug);
  if (!product) notFound();
  const group = content.groups.find(item => item.id === product.group);
  const related = content.products.filter((item: Product) => item.group === product.group && item.slug !== product.slug).slice(0, 3);
  const images = getProductImages(product);
  const facts = getProductFacts(product);
  const features = getProductFeatures(product);
  const breadcrumbJson = siteUrl ? JSON.stringify({
    "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Каталог", item: `${siteUrl}/catalog` },
      { "@type": "ListItem", position: 3, name: product.title, item: `${siteUrl}/catalog/${slug}` },
    ],
  }) : null;

  return <>
    {breadcrumbJson && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJson.replace(/</g, "\\u003c") }}/>} 
    <section className="detail-hero"><div className="container"><nav className="breadcrumbs" aria-label="Путь к странице"><Link href="/">Главная</Link><span>/</span><Link href="/catalog">Каталог</Link><span>/</span><span>{product.title}</span></nav>
      <div className="detail-grid"><figure className={`detail-photo ${images[0].contain ? "image-contain" : ""}`}><Image src={images[0].src} alt={images[0].alt} fill priority sizes="(max-width:700px) 100vw, 55vw"/>{images[0].alt.startsWith("Иллюстрация") && <figcaption>Иллюстрация направления из каталога</figcaption>}</figure>
      <div className="detail-copy"><span className="detail-label">{group?.title} · каталог, стр. {product.pdfPage}</span><h1>{product.title}</h1><p>{product.description}</p><div className="detail-spec"><div><span>Направление</span><strong>{group?.title}</strong></div><div><span>Каталог</span><strong>{content.catalogYears}</strong></div></div><Link className="button button-primary" href="/contacts">Уточнить характеристики <ArrowUpRight size={16}/></Link></div></div>
    </div></section>
    <section className="detail-body"><div className="container detail-columns"><div><span className="eyebrow">По данным каталога</span><h2>Исполнения и модели</h2><div className="variant-list">{product.variants.map(variant => <span className="variant" key={variant}>{variant}</span>)}</div></div>
      <div>{features.length > 0 && <><span className="eyebrow">Назначение и свойства</span><h2>Особенности</h2><ul className="highlight-list">{features.map(feature => <li key={feature}>{feature}</li>)}</ul></>}
      {facts.length > 0 && <div className="facts-block"><span className="eyebrow">Подтверждено каталогом</span><h2>Характеристики</h2><ul className="highlight-list">{facts.map(fact => <li key={fact}>{fact}</li>)}</ul></div>}</div></div></section>
    {images.length > 1 && <section className="product-gallery section"><div className="container"><span className="eyebrow">Изображения из каталога</span><h2 className="section-title">Подробнее о продукции</h2><div className="gallery-grid">{images.slice(1).map(image => <figure className={`gallery-photo ${image.contain ? "image-contain" : ""}`} key={image.src}><Image src={image.src} alt={image.alt} fill sizes="(max-width:640px) 100vw, 50vw" loading="lazy"/><figcaption>{image.alt}</figcaption></figure>)}</div></div></section>}
    {related.length > 0 && <section className="related-section"><div className="container"><div className="section-top"><div><span className="eyebrow">Та же группа</span><h2 className="section-title">Сопутствующие<br/>направления</h2></div><Link className="text-link" href="/catalog">Весь каталог <ArrowRight size={15}/></Link></div><div className="product-grid">{related.map((item, index) => <ProductCard key={item.slug} product={item} index={index}/>)}</div></div></section>}
  </>;
}
