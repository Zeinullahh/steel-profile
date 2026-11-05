# Uzbekistan MX Record Analysis — Foreign-Hosted Mail Report

**Date:** 2026-11-05
**Batch:** 1 of N (85 domains)
**Method:** MX records resolved via DNS (dnspython), MX hostnames resolved to A records, IPs geolocated via ip-api.com (country + ASN/org).

**Legend:** 🚩 = MX points to non-Uzbekistani IP address

---

## Part 1 — Companies with MX pointing OUTSIDE Uzbekistan

### 1.1 Microsoft 365 / Exchange Online (mail processed in EU datacenters)

| Company | Domain | MX Host | IP Location | Provider |
|---|---|---|---|---|
| TBC Uzbekistan 🚩 | tbcbank.uz | tbcbank-uz.mail.protection.outlook.com | IT, ES | Microsoft Azure (italynorth / spaincentral) |
| Payme 🚩 | payme.uz | payme-uz.mail.protection.outlook.com | NL, IE, PL | Microsoft Azure (westeurope / northeurope / polandcentral) |

### 1.2 Google Workspace

| Company | Domain | MX Host | IP Location | Provider |
|---|---|---|---|---|
| Click 🚩 | click.uz | aspmx.l.google.com / aspmx2.googlemail.com | US | Google LLC |
| Humans 🚩 | humans.uz | aspmx.l.google.com + alt1–4 | US | Google LLC |
| OLX Uzbekistan 🚩 | olx.uz | aspmx.l.google.com + alt1–4 | US | Google LLC |
| Gazeta.uz 🚩 | gazeta.uz | smtp.google.com | US | Google LLC |
| Kun.uz 🚩 | kun.uz | smtp.google.com | US | Google LLC |
| Gross Insurance 🚩 | gross.uz | aspmx.l.google.com + alt1–4 | US | Google LLC |

### 1.3 Russian infrastructure (Mail.ru/VK, Yandex, Beget, Reg.ru)

| Company | Domain | MX Host | IP Location | Provider |
|---|---|---|---|---|
| Uzum Bank 🚩 | uzum.uz | emx.mail.ru | RU | VK Services (Mail.ru) |
| Mobiuz (UMS) 🚩 | mobiuz.uz | mx1/mx2.beget.com | RU | Beget Ltd |
| Silk Avia 🚩 | silkavia.uz | mx1/mx2.hosting.reg.ru | RU | Reg.Ru |
| Uzreport 🚩 | uzreport.uz | mx.yandex.net | RU | Yandex LLC |
| Daryo.uz 🚩 | daryo.uz | emx.mail.ru (hybrid — also local MX 93.188.84.233 UZ) | RU | VK Services |
| Zamin.uz 🚩 | zamin.uz | mx.yandex.net | RU | Yandex LLC |
| Apex Insurance 🚩 | apex.uz | mx1/mx2.beget.com | RU | Beget Ltd |
| O'zbekiston paxtasi 🚩 | uzcotton.uz | mx1/mx2.beget.com | RU | Beget Ltd |

### 1.4 Other foreign providers

| Company | Domain | MX Host | IP Location | Provider |
|---|---|---|---|---|
| Korzinka 🚩 | korzinka.uz | mailstream-*.mxrecord.io | CA (Cloudflare) | MXRecord.io (anti-spam relay, EU/US endpoints behind CF) |
| Coca-Cola Ichimligi UZ 🚩 | coca-cola.uz | mail.coca-cola.uz | TR | Vaultr (Turkey) |
| Turonforum 🚩 | turonzamin.uz | turonzamin.uz | FR | Contabo GmbH |
| GM Uzbekistan (former) 🚩 | gmuz.com | mail.mailerhost.net | US, NL | Hetzner / DigitalOcean |

---

## Part 2 — Companies whose MX stays inside Uzbekistan (contrast)

| Company | Domain | MX Host | IP Location | Local ISP |
|---|---|---|---|---|
| Kapitalbank | kapitalbank.uz | mail.kapitalbank.uz | UZ | East Telecom |
| Asakabank | asakabank.uz | mx1.asakabank.uz | UZ | East Telecom |
| Hamkorbank | hamkorbank.uz | mymail.hamkorbank.uz | UZ | Texnoprosistem |
| Ipoteka Bank | ipotekabank.uz | mailgw1–3.ipotekabank.uz | UZ | East Telecom |
| SQB | sqb.uz | mail.sqb.uz | UZ | Buzton |
| Turonbank | turonbank.uz | mail.turonbank.uz | UZ | Amaliy Aloqalar Biznesi |
| Aloqabank | aloqabank.uz | mail.aloqabank.uz | UZ | Uztelecom |
| Agrobank | agrobank.uz | mail.agrobank.uz | UZ | ARS-INFORM |
| Mikrokreditbank | mikrokreditbank.uz | mail2.mikrokreditbank.uz | UZ | Uztelecom |
| Savdogar Bank | savdogarbank.uz | mail.savdogarbank.uz | UZ | Texnoprosistem |
| Octobank | octobank.uz | mail.octobank.uz | UZ | Amaliy Aloqalar Biznesi |
| Uztelecom | uztelecom.uz | gw.uztelecom.uz | UZ | Uztelecom DC |
| Beeline Uzbekistan | beeline.uz | mailrelay1/2.beeline.uz | UZ | Unitel LLC |
| Ucell | ucell.uz | smtp1/smtp2.ucell.uz | UZ | Ucell |
| Uzbekneftegaz | ung.uz | mail.ung.uz | UZ | NDNC |
| Sanoat Energetika Guruhi | seg.uz | seg.uz | UZ | Suvan Net |
| Almalyk Mining (AGMK) | agmk.uz | mail.agmk.uz | UZ | Uztelecom |
| Navoi Mining (NGMK) | ngmk.uz | mail.ngmk.uz | UZ | NDNC |
| Uzbekcoal | uzbekcoal.uz | mail.uzbekcoal.uz | UZ | UZINFOCOM (state) |
| Thermal Power Plants | tpp.uz | mail.tpp.uz | UZ | PPPoE customer |
| Uzbekistan Airways | uzairways.com | mx/mx1.uzairways.com | UZ | Uztelecom |
| UzAvto | uzavto.uz | uzavto.uz | UZ | Arsenal D |
| UzBuild | uzbuild.uz | mail.uzupack.uz | UZ | Nano Telecom |
| UzChasys | uzchasys.uz | mail.uzchasys.uz | UZ | East Telecom |
| Uzbekistan Railways (UTY) | railway.uz | mx1/mx2.cm.uz, mail.railway.uz | UZ | UZINFOCOM / Uztelecom |
| Uzbekistan Post | pochta.uz | mail.pochta.uz | UZ | Uztelecom |
| Texnopark | texnopark.uz | mail.texnopark.uz | UZ | Citynet |
| IT Park Uzbekistan | it-park.uz | mail.it-park.uz | UZ | Uztelecom |
| Uzinfocom | uzinfocom.uz | mail.uzinfocom.uz | UZ | UZINFOCOM (state) |
| UzEx (Commodity Exchange) | uzex.uz | mail.uzex.uz | UZ | Texnoprosistem |
| MTRK (Toshkent TV) | mtrk.uz | mail.mtrk.uz | UZ | Uztelecom |
| My5 TV | my5.uz | my5.uz | UZ | New Line Solutions |
| Toshkent city gov | tashkent.uz | mail.tashkent.uz | UZ | Texnoprosistem |
| Government portal | gov.uz | mail2.gov.uz | UZ | Uztelecom |
| Kafolat Insurance | kafolat.uz | mail.kafolat.uz | UZ | Suvan Net |
| Qizilqumsement | qizilqumsement.uz | mail.qizilqumsement.uz | UZ | IST Telekom |
| Uzbektourism | uzbektourism.uz | webmail.uzbektourism.uz | UZ | IST Telekom |
| Toshkent airport | tashkent-airport.uz | tashkent-airport.uz | UZ | Suvan Net |
| Daryo.uz (local leg) | daryo.uz | _dc-mx…daryo.uz | UZ | Uzbektelekom |

## Part 3 — No MX record resolved (batch 1)

Xalq Banki (xalqbanki.uz), Invest Finance Bank (ifb.uz), Ravnaq Bank (ravnaq-bank.uz),
Yelo Bank (yelo.uz), Lukoil Uzbekistan (lukoil.uz), Uzbekhydroenergo (uhe.uz),
Qanot Sharq (qanotsharq.uz), Centrum Air (centrumair.uz), Uzagrotech, Uzeltexsanoat,
Sanoat Invest (sanoinvest.uz), Uzmetkombinat (uzmk.uz), Makro (makro.uz),
UzBAT (uzbat.com), Artel (artel.uz), Fix Price UZ (fixprice.uz), UZINFOCOM/uic (uic.uz),
Toshkent RSE (rse.uz), Central Securities Depository (csd.uz), Dori-Darmon (doridarmon.uz),
Bio-chem farm (biokim.uz), Akhangarancement (akhangarancement.uz), Toshkent Metro (metro.uz),
Man Auto Uzbekistan (manauto.uz). *(Many of these likely use different primary domains — to be corrected in batch 2.)*

---

## Most interesting / sensitive findings (batch 1)

1. **Uzum Bank (uzum.uz) — MX on Russian Mail.ru (emx.mail.ru).** A licensed Uzbek bank (part of the Uzum ecosystem, one of the country's most valuable startups) routes its corporate mail through Russian VK/Mail.ru infrastructure. Notable given Uzum's fintech scale.
2. **Mobiuz (UMS) — MX on Russian shared hosting (Beget).** One of the big-3 mobile operators running corporate mail on a cheap RU shared-hosting provider is a striking infra choice (and a security posture concern).
3. **Media on Russian services:** Uzreport (Yandex), Zamin.uz (Yandex), Daryo.uz (Mail.ru + a local leg) — major Uzbek news outlets' mail handled in Russia.
4. **Payme & TBC Uzbekistan on Microsoft 365 (EU).** Foreign-hosted but Western-cloud; a compliance/data-residency consideration for a payments company and a bank.
5. **Click (click.uz) and OLX Uzbekistan on Google Workspace (US)** — leading payment app hosted on Google.
6. **Apex Insurance and O'zbekiston paxtasi (state cotton association) on Beget (RU)** — state-linked entities with mail in Russia.
7. **Silk Avia (state-founded airline) on Reg.Ru (RU).**
8. **Korzinka (largest supermarket chain) via MXRecord.io anti-spam relays (Cloudflare-fronted, CA)** — foreign MX hop, though the destination is likely local.

*State-heavy infrastructure (UZINFOCOM, Uztelecom, NDNC) correctly hosts Uzbekcoal, UTY, Uzinfocom, government portal — good contrast with the outliers above.*

---

*Batch 2 will add 100+ more domains (universities, more banks/fintech, pharma, transport/logistics, energy distribution, media) and fix the dead domains from batch 1.*
