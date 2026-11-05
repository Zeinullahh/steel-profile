"use client";

import { Search, X } from "lucide-react";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import type { Group, Product } from "@/types/catalog";

function CatalogFilters({ products, groups }: { products: Product[]; groups: Group[] }) {
  const params = useSearchParams();
  const requestedGroup = params.get("group");
  const validGroup = groups.some(item => item.id === requestedGroup) ? requestedGroup! : "all";
  const [group, setGroup] = useState(validGroup);
  const [query, setQuery] = useState("");
  useEffect(() => { setGroup(validGroup); }, [validGroup]);

  const filtered = useMemo(() => products.filter(product =>
    (group === "all" || product.group === group) &&
    `${product.title} ${product.description} ${product.variants.join(" ")} ${product.filterTags.join(" ")}`.toLocaleLowerCase("ru").includes(query.trim().toLocaleLowerCase("ru"))
  ), [products, group, query]);

  return <>
    <div className="catalog-tools"><label className="search-box"><Search size={18} aria-hidden="true"/><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Например, фасадные панели" aria-label="Поиск по каталогу"/>{query && <button type="button" onClick={() => setQuery("")} aria-label="Очистить поиск"><X size={17}/></button>}</label><span className="result-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? "направление" : filtered.length < 5 ? "направления" : "направлений"}</span></div>
    <div className="filter-row" role="group" aria-label="Фильтр по категориям"><button type="button" className={group === "all" ? "filter-chip active" : "filter-chip"} aria-pressed={group === "all"} onClick={() => setGroup("all")}>Все направления <span>{products.length}</span></button>{groups.map(item => <button type="button" key={item.id} className={group === item.id ? "filter-chip active" : "filter-chip"} aria-pressed={group === item.id} onClick={() => setGroup(item.id)}>{item.title}<span>{products.filter(product => product.group === item.id).length}</span></button>)}</div>
    {filtered.length ? <div className="product-grid">{filtered.map((product, index) => <ProductCard key={product.slug} product={product} index={index} headingLevel={2}/>)}</div> : <div className="empty-state"><span className="eyebrow">Ничего не найдено</span><h2>Попробуйте изменить запрос</h2><p>Проверьте написание или покажите все направления каталога.</p><button type="button" className="button button-primary" onClick={() => { setQuery(""); setGroup("all"); }}>Сбросить фильтры <X size={16}/></button></div>}
  </>;
}

export function CatalogBrowser(props: { products: Product[]; groups: Group[] }) {
  return <Suspense fallback={<div aria-hidden="true" className="catalog-tools"/>}><CatalogFilters {...props}/></Suspense>;
}
