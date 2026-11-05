import Image from "next/image";
import partners from "@/data/partners.json";

export function PartnersMarquee() {
  return (
    <section className="partners-section section" aria-labelledby="partners-title">
      <div className="container partners-heading">
        <div>
          <span className="eyebrow">Сотрудничество</span>
          <h2 className="section-title" id="partners-title">Наши партнёры</h2>
        </div>
        <p className="section-intro">Компании и бренды, с которыми мы сотрудничаем</p>
      </div>

      <div className="partners-marquee" role="group" tabIndex={0} aria-label="Лента логотипов партнёров">
        <div className="partners-track">
          {[false, true, true].map((duplicate, copyIndex) => (
            <ul
              className="partners-list"
              aria-label={duplicate ? undefined : "Партнёры STEEL PROFILES"}
              aria-hidden={duplicate ? true : undefined}
              key={copyIndex}
            >
              {partners.map((partner) => (
                <li className="partner-card" key={partner.id}>
                  <Image
                    src={partner.logo}
                    alt={duplicate ? "" : partner.alt}
                    width={480}
                    height={220}
                    sizes="(max-width: 640px) 170px, 238px"
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
