import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { content } from "@/types/catalog";
import type { Product } from "@/types/catalog";

const contained = new Set(["steel-picket", "ac-baskets", "mailboxes"]);

export function ProductCard({ product, index = 0, headingLevel = 3 }: { product: Product; index?: number; headingLevel?: 2 | 3 }) {
  const group = content.groups.find(item => item.id === product.group);
  return <Link href={`/catalog/${product.slug}`} className={`product-card product-card-${index % 3}`}>
    <div className={`product-image ${contained.has(product.slug) ? "image-contain" : ""}`}><Image src={product.image} alt={product.title} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" loading="lazy"/><span className="image-count">{String(index + 1).padStart(2, "0")}</span></div>
    <div className="product-copy"><div><span className="eyebrow">{group?.title}</span>{headingLevel === 2 ? <h2>{product.title}</h2> : <h3>{product.title}</h3>}<p>{product.description}</p><span className="card-more">Подробнее</span></div><span className="round-arrow"><ArrowUpRight size={19}/></span></div>
  </Link>;
}
