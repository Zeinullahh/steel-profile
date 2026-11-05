import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { content } from "@/types/catalog";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Контакты", "Контактные телефоны, адреса в Астане и Алматы, электронная почта и Instagram STEEL PROFILES.", "/contacts");

function tel(value: string) { return `tel:${value.replace(/[^+\d]/g, "")}`; }
function mapUrl(address: string) { return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`; }

export default function ContactsPage() {
  return <>
    <section className="page-hero"><div className="container"><nav className="breadcrumbs" aria-label="Путь к странице"><Link href="/">Главная</Link><span>/</span><span>Контакты</span></nav><span className="eyebrow">Представительства</span><h1>Связаться<br/><em>с нами</em></h1><p>Контактные данные приведены по каталогу STEEL PROFILES. Перед публикацией следует подтвердить их актуальность.</p></div></section>
    <section className="container contact-layout"><div className="contact-cities">{content.contacts.cities.map(city => <article className="contact-card" key={city.city}>
      <span className="eyebrow"><MapPin size={13} aria-hidden="true"/> Представительство</span><h2>{city.city}</h2><address>{city.address}</address>
      {city.phones.map(phone => <a key={phone} href={tel(phone)}><Phone size={14} aria-hidden="true"/>{phone}</a>)}
      <a className="map-link" href={mapUrl(city.address)} target="_blank" rel="noopener noreferrer">Построить маршрут <ArrowUpRight size={14} aria-hidden="true"/></a>
    </article>)}</div><aside className="contact-aside"><span className="eyebrow">Контактные каналы</span><h2>На связи по<br/>вопросам продукции</h2><p>Выберите удобный способ связи, чтобы уточнить информацию о направлениях и вариантах исполнения.</p>
      <a href={`mailto:${content.contacts.email}`}><Mail size={15} aria-hidden="true"/>{content.contacts.email}</a>
      <a href={`https://www.instagram.com/${content.contacts.instagram}/`} target="_blank" rel="noopener noreferrer"><Instagram size={15} aria-hidden="true"/>@{content.contacts.instagram}<ArrowUpRight size={13} aria-hidden="true"/></a>
      <Link className="button button-primary" href="/catalog">Каталог продукции <ArrowUpRight size={15}/></Link>
    </aside></section>
  </>;
}
