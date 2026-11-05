import type { Product } from "@/types/catalog";

type ProductImage = { src: string; alt: string; contain?: boolean };

const additionalImages: Record<string, ProductImage[]> = {
  "fibercement-facade-panels": [{ src: "/images/facade-texture-panel.webp", alt: "Фактура фасадной панели", contain: true }],
  "linear-panels": [{ src: "/images/linear-panel.webp", alt: "Линейная фасадная панель", contain: true }],
  "aluminium-cassettes": [{ src: "/images/aluminium-cassette-product.webp", alt: "Алюминиевая фасадная кассета", contain: true }],
  "metal-roof-tile": [
    { src: "/images/roof-venecia-profile.webp", alt: "Профиль металлочерепицы Венеция Плюс", contain: true },
    { src: "/images/roof-tramontana-profile.webp", alt: "Профиль металлочерепицы Трамонтана", contain: true },
  ],
  "louver-fences": [
    { src: "/images/fence-louvers-eco.webp", alt: "Забор жалюзи ЭКО" },
    { src: "/images/fence-louvers-twin.webp", alt: "Забор жалюзи ТВИН" },
  ],
  "fence-eco": [{ src: "/images/fence-eco-profile.webp", alt: "Профиль ламели забора жалюзи ЭКО", contain: true }],
};

const containedPrimary = new Set(["steel-picket", "ac-baskets", "mailboxes"]);
const familyPhoto = new Set(["facade-subsystem", "roofing-accessories-como", "gutter-system", "roof-flashings", "gates-doorhan"]);

export function getProductImages(product: Product): ProductImage[] {
  return [
    { src: product.image, alt: familyPhoto.has(product.slug) ? `Иллюстрация направления «${product.title}» из каталога` : product.title, contain: containedPrimary.has(product.slug) },
    ...(additionalImages[product.slug] ?? []),
  ];
}

export function getProductFacts(product: Product) {
  return product.highlights.filter(text => /\d/.test(text));
}

export function getProductFeatures(product: Product) {
  return product.highlights.filter(text => !/\d/.test(text));
}
