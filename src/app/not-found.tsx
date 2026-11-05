import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
export default function NotFound() { return <section className="not-found"><div className="container not-found-inner"><div className="not-found-code">404</div><h1>Такой страницы нет</h1><p>Возможно, ссылка устарела. Вернитесь на главную или откройте каталог.</p><div className="button-row"><Link className="button button-glass" href="/"><ArrowLeft size={16}/> На главную</Link><Link className="button button-primary" href="/catalog">Каталог <ArrowUpRight size={16}/></Link></div></div></section>; }
