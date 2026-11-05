import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const content = JSON.parse(readFileSync("CONTENT_DATA.json", "utf8"));
const manifest = JSON.parse(readFileSync("ASSET_MANIFEST.json", "utf8"));
const errors = [];
const slugs = new Set();
const groups = new Set(content.groups.map(group => group.id));
const manifestImages = new Set(manifest.items.map(item => `/${item.file.replace(/^public\//, "")}`));

function checkImage(image, label) {
  if (!image?.startsWith("/images/") || !existsSync(resolve(`public${image}`))) errors.push(`${label}: файл ${image} не найден`);
  if (!manifestImages.has(image)) errors.push(`${label}: файл ${image} отсутствует в ASSET_MANIFEST.json`);
}

if (content.products.length !== 19) errors.push(`Ожидалось 19 направлений, найдено ${content.products.length}`);
if (content.groups.length !== 5) errors.push(`Ожидалось 5 групп, найдено ${content.groups.length}`);

for (const group of content.groups) checkImage(group.image, `Группа ${group.id}`);
for (const product of content.products) {
  if (slugs.has(product.slug)) errors.push(`Повторный slug ${product.slug}`);
  slugs.add(product.slug);
  if (!groups.has(product.group)) errors.push(`${product.slug}: неизвестная группа ${product.group}`);
  checkImage(product.image, product.slug);
  if (product.price != null || product.availability != null) errors.push(`${product.slug}: цена или наличие не подтверждены`);
}

const solutionSource = readFileSync("src/app/solutions/page.tsx", "utf8");
for (const [, list] of solutionSource.matchAll(/slugs:\s*\[([^\]]*)\]/g)) {
  for (const [, slug] of list.matchAll(/"([a-z0-9-]+)"/g)) if (!slugs.has(slug)) errors.push(`Решения: неизвестный slug ${slug}`);
}

const detailSource = readFileSync("src/lib/product-detail.ts", "utf8");
for (const [, image] of detailSource.matchAll(/src:\s*"(\/images\/[^\"]+)"/g)) checkImage(image, "Дополнительное изображение");

if (errors.length) { console.error(errors.join("\n")); process.exitCode = 1; }
else console.log(`Проверено: ${content.products.length} товаров, ${content.groups.length} групп, изображения и ссылки решений.`);
