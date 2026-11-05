"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { content } from "@/types/catalog";

const links = [["Главная", "/"], ["Каталог", "/catalog"], ["Решения", "/solutions"], ["О компании", "/about"], ["Контакты", "/contacts"]] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); setCatalogOpen(false); }, [pathname]);
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") { if (open) menuButtonRef.current?.focus(); setOpen(false); setCatalogOpen(false); }
    }
    function onPointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) { setOpen(false); setCatalogOpen(false); }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => { document.removeEventListener("keydown", onKeyDown); document.removeEventListener("pointerdown", onPointerDown); };
  }, [open]);

  return <header className="site-header" ref={headerRef}><div className="nav-shell">
    <Link href="/" className="brand" aria-label="STEEL PROFILES — главная" onClick={() => setOpen(false)}><Image src="/images/steel-profiles-logo-from-catalog.png" width={180} height={52} alt="STEEL PROFILES" priority /></Link>
    <nav className="desktop-nav" aria-label="Основная навигация">
      <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>Главная</Link>
      <div className="catalog-nav"><Link href="/catalog" aria-current={pathname.startsWith("/catalog") ? "page" : undefined}>Каталог</Link><button type="button" onClick={() => setCatalogOpen(value => !value)} aria-expanded={catalogOpen} aria-label="Группы каталога" aria-controls="catalog-groups"><ChevronDown size={14}/></button>
        {catalogOpen && <div className="catalog-dropdown" id="catalog-groups">{content.groups.map(group => <Link key={group.id} href={`/catalog?group=${group.id}`} onClick={() => setCatalogOpen(false)}>{group.title}<ArrowUpRight size={14}/></Link>)}</div>}
      </div>
      {links.slice(2).map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>)}
    </nav>
    <Link className="nav-cta" href="/contacts">Связаться <ArrowUpRight size={19}/></Link>
    <button type="button" ref={menuButtonRef} className="menu-toggle" onClick={() => setOpen(value => !value)} aria-label={open ? "Закрыть меню" : "Открыть меню"} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X /> : <Menu />}</button>
  </div>{open && <nav className="mobile-nav" id="mobile-navigation" aria-label="Мобильная навигация">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={17}/></Link>)}<div className="mobile-groups"><span>Группы каталога</span>{content.groups.map(group => <Link key={group.id} href={`/catalog?group=${group.id}`} onClick={() => setOpen(false)}>{group.title}</Link>)}</div><Link className="mobile-contact" href="/contacts" onClick={() => setOpen(false)}>Связаться <ArrowUpRight size={19}/></Link></nav>}</header>;
}
