import content from "../../CONTENT_DATA.json";
export type Product = (typeof content.products)[number];
export type Group = (typeof content.groups)[number];
export type ContactCity = (typeof content.contacts.cities)[number];
export { content };
