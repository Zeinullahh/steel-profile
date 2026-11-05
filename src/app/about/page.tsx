import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { content } from "@/types/catalog";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("О компании", "STEEL PROFILES: фасадные и кровельные материалы, системы ограждения, ворота и металлические изделия.", "/about", "/images/linear-house.webp");

export default function AboutPage() {
  return <>
    <section className="page-hero"><div className="container"><nav className="breadcrumbs" aria-label="Путь к странице"><Link href="/">Главная</Link><span>/</span><span>О компании</span></nav><span className="eyebrow">STEEL PROFILES · {content.catalogYears}</span></div></section>
    <section className="container about-hero"><div className="about-copy"><h1>Материалы<br/>для <em>архитектуры</em></h1><p>Каталог STEEL PROFILES объединяет направления для внешней отделки и обустройства зданий и участков: фасадные системы, кровлю, ограждения, ворота и металлические элементы.</p><p>На сайте представлены товарные направления и варианты из каталога. Точные параметры конкретного изделия и актуальные условия можно уточнить у компании.</p><Link href="/catalog" className="button button-primary">Каталог продукции <ArrowUpRight size={16}/></Link></div><figure className="about-photo"><Image src="/images/linear-house.webp" alt="Линейные панели в отделке фасада" fill sizes="(max-width:640px) 100vw, 45vw" priority/></figure></section>
    <section className="section" style={{background:"#0c1b29"}}><div className="container"><blockquote className="about-statement">«Надёжность. Эстетика. Простой монтаж. Гармония» — четыре принципа, вынесенные на обложку каталога.</blockquote><div className="about-advantages">{content.advantages.map((advantage, index) => <div className="about-adv" key={advantage}><span className="eyebrow">0{index + 1}</span><strong>{advantage}</strong></div>)}</div></div></section>
    <section className="section"><div className="container"><div className="section-top"><div><span className="eyebrow">Ассортимент</span><h2 className="section-title">Направления<br/>каталога</h2></div><p className="section-intro">Пять групп продукции для частных домов и коммерческих объектов.</p></div><div className="about-group-list">{content.groups.map(group => <Link key={group.id} href={`/catalog?group=${group.id}`}>{group.title}<ArrowUpRight size={18}/></Link>)}</div></div></section>
    <section className="container" style={{paddingBottom:100}}><div className="contact-banner"><div><span className="eyebrow">Связаться с компанией</span><h2>Обсудить продукцию</h2><p>Телефоны и адреса представительств указаны в каталоге.</p></div><Link className="button button-primary" href="/contacts">Контактная информация <ArrowUpRight size={16}/></Link></div></section>
  </>;
}
