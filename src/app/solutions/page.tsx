import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { content } from "@/types/catalog";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Решения для дома и зданий", "Подбор продукции STEEL PROFILES для частного дома, фасада, кровли, участка, гаража и коммерческого объекта.", "/solutions");

const solutions = [
  { title: "Частный дом", text: "Фасад, кровля, ограждение и ворота для внешнего облика дома.", image: "/images/hero-facade-house.webp", slugs: ["fibercement-facade-panels", "metal-roof-tile", "fence-eco", "garage-sectional-doors"] },
  { title: "Коммерческий фасад", text: "Кассеты, линейная облицовка и элементы фасадной подсистемы.", image: "/images/aluminium-cassettes-building.webp", slugs: ["aluminium-cassettes", "linear-panels", "facade-subsystem"] },
  { title: "Кровля и водосток", text: "Кровельное покрытие, комплектующие и система отвода воды.", image: "/images/roof-tiles-house.webp", slugs: ["metal-roof-tile", "roofing-accessories-como", "gutter-system", "roof-flashings"] },
  { title: "Участок и периметр", text: "Жалюзийные ограждения, штакетник и системы ворот.", image: "/images/fence-eco-house.webp", slugs: ["louver-fences", "fence-planken", "steel-picket", "fencing-systems"] },
  { title: "Гараж и склад", text: "Секционные ворота для гаражного и промышленного применения.", image: "/images/garage-door-house.webp", slugs: ["garage-sectional-doors", "industrial-sectional-doors", "gates-doorhan"] },
  { title: "Металлические элементы", text: "Функциональные изделия для фасада и жилого пространства.", image: "/images/mailbox-multi-section.webp", slugs: ["ac-baskets", "mailboxes"] },
];

export default function SolutionsPage() {
  return <>
    <section className="page-hero"><div className="container"><nav className="breadcrumbs" aria-label="Путь к странице"><Link href="/">Главная</Link><span>/</span><span>Решения</span></nav><span className="eyebrow">По задаче и объекту</span><h1>Решения<br/><em>для пространства</em></h1><p>Выберите задачу, затем откройте подходящие товарные направления каталога.</p></div></section>
    <section className="section" style={{paddingTop:20}}><div className="container"><div className="solution-grid">{solutions.map((solution, index) => <article className="solution-card" key={solution.title}>
      <Image src={solution.image} alt="" fill sizes="(max-width:640px) 100vw, 50vw" loading="lazy"/>
      <div className="solution-content"><span className="eyebrow">0{index + 1} / применение</span><h2>{solution.title}</h2><p>{solution.text}</p><div className="solution-links">{solution.slugs.map(slug => { const product = content.products.find(item => item.slug === slug); return product && <Link key={slug} href={`/catalog/${slug}`}>{product.title}<ArrowUpRight size={13}/></Link>; })}</div></div>
    </article>)}</div></div></section>
    <section className="container" style={{paddingBottom:100}}><div className="contact-banner"><div><span className="eyebrow">Все направления</span><h2>Посмотрите каталог<br/>продукции</h2><p>{content.products.length} направлений и варианты исполнения из каталога.</p></div><Link className="button button-primary" href="/catalog">Открыть каталог <ArrowUpRight size={16}/></Link></div></section>
  </>;
}
