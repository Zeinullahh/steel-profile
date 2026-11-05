import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { content } from "@/types/catalog";

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-main">
    <div><Link href="/" className="brand footer-brand"><Image src="/images/steel-profiles-logo-from-catalog.png" width={160} height={48} alt="STEEL PROFILES" /></Link><p className="footer-note">Фасады, кровля, ограждения и ворота<br/>для частных домов и коммерческих объектов.</p></div>
    <div><span className="eyebrow">Разделы</span><nav className="footer-links" aria-label="Разделы сайта"><Link href="/">Главная</Link><Link href="/catalog">Каталог</Link><Link href="/solutions">Решения</Link><Link href="/about">О компании</Link><Link href="/contacts">Контакты</Link></nav></div>
    <div><span className="eyebrow">Каталог</span><nav className="footer-links" aria-label="Группы каталога">{content.groups.map(group => <Link key={group.id} href={`/catalog?group=${group.id}`}>{group.title}</Link>)}</nav></div>
    <div><span className="eyebrow">Связаться</span><div className="footer-links">{content.contacts.cities.map(city => <a key={city.city} href={`tel:${city.phones[0].replace(/[^+\d]/g, "")}`}>{city.city}: {city.phones[0]}</a>)}<a href={`mailto:${content.contacts.email}`}>{content.contacts.email}</a><a href={`https://www.instagram.com/${content.contacts.instagram}/`} target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={13}/></a></div></div>
  </div><div className="footer-bottom"><span>© {new Date().getFullYear()} STEEL PROFILES</span><span>Информация о продукции — по каталогу {content.catalogYears}</span></div></footer>;
}
