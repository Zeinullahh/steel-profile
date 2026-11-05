# Kazakhstan MX Record Analysis — Foreign-Hosted Mail Report

**Date:** 2026-11-05
**Method:** MX records resolved via DNS (dnspython), MX hostnames resolved to A records, IPs geolocated via ip-api.com (country + ASN/org).

**Legend:** 🚩 = MX points to non-Kazakhstani IP address

---

## Part 1 — Companies with MX pointing OUTSIDE Kazakhstan

### 1.1 Microsoft 365 / Exchange Online (mail processed in EU datacenters)

| Company | Domain | MX Host | IP Location | Provider |
|---|---|---|---|---|
| Kcell 🚩 | kcell.kz | kcell-kz.mail.protection.outlook.com | IE, PL, IT | Microsoft Azure (hybrid — also has local MX mailgw8.kcell.kz) |
| Jusan Bank 🚩 | jysanbank.kz | jysanbank-kz.mail.protection.outlook.com | NL, IE, IT | Microsoft Azure |
| Freedom Bank 🚩 | freedombank.kz | freedombank-kz.mail.protection.outlook.com | GB | Microsoft Azure (uksouth/ukwest) |
| FFIN Bank 🚩 | ffin.kz | ffin-kz.mail.protection.outlook.com | GB | Microsoft Azure |
| Home Credit Kazakhstan 🚩 | homecredit.kz | homecredit-kz.mail.protection.outlook.com | IE, ES | Microsoft Azure |
| Tele2 Kazakhstan 🚩 | tele2.kz | tele2-kz.mail.protection.outlook.com | DK, NL, ES, IT | Microsoft Azure |
| Altel 🚩 | altel.kz | altel-kz.mail.protection.outlook.com | IE, CH, DK, ES | Microsoft Azure |
| Kaz Minerals 🚩 | kazminerals.com | kazminerals-com.mail.protection.outlook.com | IT, DK, NL | Microsoft Azure |
| Kazakhmys 🚩 | kazakhmys.com | kazakhmys-com.mail.protection.outlook.com | DK, IE, NL | Microsoft Azure (hybrid — also local MX) |
| KPO (Karachaganak) 🚩 | kpo.kz | kpo-kz.mail.protection.outlook.com | IE, DK, NL | Microsoft Azure |
| NCOC (Kashagan) 🚩 | ncoc.kz | ncoc-kz.mail.protection.outlook.com | NL, IT, IE | Microsoft Azure |
| Qazaq Air 🚩 | flyqazaq.com | flyqazaq-com.mail.protection.outlook.com | IT, ES | Microsoft Azure |
| Altynalmas 🚩 | altynalmas.kz | altynalmas-kz.mail.protection.outlook.com | IT, NL, CH, IE | Microsoft Azure |
| Astana IT University 🚩 | astanait.edu.kz | astanait-edu-kz.mail.protection.outlook.com | IE, IT, ES | Microsoft Azure |
| KBTU 🚩 | kbtu.kz | kbtu-kz.mail.protection.outlook.com | IE, CH, DK, ES | Microsoft Azure |
| KazNU 🚩 | kaznu.kz | kaznu-kz.mail.protection.outlook.com | IE, IT, DK, ES | Microsoft Azure |
| ENU (Gumilyov) 🚩 | enu.kz | enu-kz.mail.protection.outlook.com | IT, CH, ES, NL | Microsoft Azure |
| AIFC 🚩 | aifc.kz | aifc-kz.mail.protection.outlook.com | ES, IT, IE | Microsoft Azure |
| AIX 🚩 | aix.kz | aix-kz.mail.protection.outlook.com | PL, NL, IE, ES | Microsoft Azure |

### 1.2 Google Workspace

| Company | Domain | MX Host | IP Location | Provider |
|---|---|---|---|---|
| Rixos / Semurg Invest 🚩 | semurginvest.kz | aspmx.l.google.com etc. | US | Google LLC |
| Nazarbayev University 🚩 | nu.edu.kz | aspmx.l.google.com etc. | US | Google LLC |
| SDU 🚩 | sdu.edu.kz | aspmx.l.google.com etc. | US | Google LLC |
| KIMEP 🚩 | kimep.kz | aspmx5.googlemail.com etc. | US | Google LLC |
| Shubarkol Coal 🚩 | shubarkol.kz | smtp.google.com | US | Google LLC |
| Icon (ID TV) 🚩 | icon.kz | smtp.google.com | US | Google LLC |
| Chocofamily (Chocotravel) 🚩 | chocotravel.com | aspmx.l.google.com etc. | US | Google LLC |

### 1.3 Russian infrastructure

| Company | Domain | MX Host | IP Location | Provider |
|---|---|---|---|---|
| Altyn Bank 🚩 | altynbank.com | mail2/mail3/mail.altynbank.com | RU | Tattelecom, Teleset, TATINTELCOM |
| Kazchrome (ERG) 🚩 | kazchrome.com | mail.kazchrome.com | RU | Selectel |
| OzenMunaiGas 🚩 | omg.kz | emx.mail.ru | RU | VK Services (Mail.ru) |
| Kazaviaspas 🚩 | kazaviaspas.kz | mx.yandex.net | RU | Yandex LLC |
| Mechta 🚩 | mechta.kz | mx.yandex.net | RU | Yandex LLC |
| Khabar 24 (state TV) 🚩 | 24.kz | emx.mail.ru | RU | VK Services |
| El Arna TV 🚩 | elarna.kz | emx.mail.ru | RU | VK Services |
| Qazaqstan TV (state) 🚩 | qazaqstan.tv | mail.rtrk.kz | RU | Oyster Telecom |
| Abai TV 🚩 | abaitv.kz | mail.abaitv.kz | RU | Oyster Telecom |
| Baitursynuly University 🚩 | abu.edu.kz | emx.mail.ru | RU | VK Services |
| Eurasian Foods (efko.kz) 🚩 | efko.kz | mx.efko.ru | RU | Mastertel ISP |

### 1.3b Russian infrastructure (batch 4 additions)

| Company | Domain | MX Host | IP Location | Provider |
|---|---|---|---|---|
| Bipek Auto 🚩 | bipek.kz | proxmail.bipek.com | RU | JSC Avantel |
| Toyota Kazakhstan 🚩 | toyota.kz | mx.yandex.net | RU | Yandex LLC |
| Bayan Sulu (food) 🚩 | sulu.kz | mx.yandex.net | RU | Yandex LLC |
| Turan Express 🚩 | turanexpress.kz | emx.mail.ru | RU | VK Services |
| Satty Zhuldyz (gambling) 🚩 | szh.kz | emx.mail.ru | RU | VK Services |
| Keramir (ceramics) 🚩 | keramir.kz | emx.mail.ru | RU | VK Services |
| 2GIS Kazakhstan 🚩 | 2gis.kz | mx3/mx4.2gis.com | RU | DoubleGIS LLC (Novosibirsk) |
| Colvir 🚩 | colvir.com | mail.colvir.com | RU | Arkona Softlab |
| Kazakhtelecom Data (DIS) 🚩 | dis.kz | mx.yandex.net | RU | Yandex LLC |
| Yandex Go Kazakhstan 🚩 | go.yandex.kz | mx.yandex.net | RU | Yandex LLC |

### 1.4 Other foreign providers

| Company | Domain | MX Host | IP Location | Provider |
|---|---|---|---|---|
| Tengizchevroil 🚩 | tengizchevroil.com | mx1/mx2.hc2860-13.iphmx.com | US | Cisco IronPort (hosted) |
| Kazzinc 🚩 | kazzinc.com / kazzinc.kz | mxa/mxb-*.pphosted.com | DE, NL | Proofpoint |
| FoodMaster 🚩 | foodmaster.kz | mxa/mxb-*.pphosted.com | NL | Proofpoint |
| Maersk KZ 🚩 | maersk.kz | relay1/relay2.netnames.net | GB | CSC / Netnames |
| Bazis A 🚩 | bazis-a.com (bazis-a.kz has NO MX) | mail.bazis-a.com | MY | Hostinger |
| PetroKazakhstan Kumkol 🚩 | kumkol.kz | mx1/mx2.hostinger.com | CA | Hostinger/Cloudflare |
| Capital Bank 🚩 | capitalbank.kz | mail.b1nk.kz | CA | Cloudflare (hybrid — second MX in KZ) |
| Almaty Airport 🚩 | alaport.com | mx/mail.alaport.com | NL | Microsoft Azure (self-hosted VM) |
| NSK Insurance 🚩 | nsk.kz | nsk-kz.mail.protection.outlook.com | IT, ES, IE | Microsoft Azure |
| Aitas KZ 🚩 | aitas.kz | aitas-kz.mail.protection.outlook.com | IE, IT, NL | Microsoft Azure |
| Ersai Caspian Contractor 🚩 | ersai.kz | ersai-kz.mail.protection.outlook.com | DK, NL, IT, CH | Microsoft Azure |
| Mabetex Group 🚩 | mabetex.com | mabetex-com.mail.protection.outlook.com | ES, NL, IT | Microsoft Azure |
| Esentai Mall 🚩 | esentaimall.com | esentaimall-com.mail.protection.outlook.com | IE, CH, IT | Microsoft Azure |
| Dostyk Plaza 🚩 | dostykplaza.kz | dostykplaza-kz.mail.protection.outlook.com | ES, IE, NL | Microsoft Azure |
| Arbuz.kz 🚩 | arbuz.kz | arbuz-kz.mail.protection.outlook.com | GB | Microsoft Azure |
| Aviata 🚩 | aviata.kz | aviata-kz.mail.protection.outlook.com | GB | Microsoft Azure |
| Jambyl Cement (Vicat) 🚩 | jambylcement.kz | mxkztemp1/2.vicat.com | FR | Microsoft Azure (francecentral — parent Vicat) |
| DANONE Central Asia 🚩 | danone.kz | mxa/mxb-*.pphosted.com | DE | Proofpoint |
| DHL Kazakhstan 🚩 | dhl.kz | dhl-com.fortimailcloud.com | DE, FR | Fortinet FortiMail Cloud |
| Borusan Cat Kazakhstan 🚩 | borusancat.kz | mxa/mxb-*.pphosted.com | GB, NL | Proofpoint |
| Kolesa Group 🚩 | kolesa.kz | aspmx.l.google.com etc. | US | Google Workspace |
| Krisha.kz 🚩 | krisha.kz | aspmx.l.google.com etc. | US | Google Workspace |
| Chocofamily 🚩 | chocofamily.kz | aspmx.l.google.com etc. | US | Google Workspace |
| Chocolife 🚩 | chocolife.me | aspmx.l.google.com etc. | US | Google Workspace |
| Aitu messenger 🚩 | aitu.io | aspmx.l.google.com etc. | US | Google Workspace |
| BTS Digital 🚩 | btsdigital.kz | aspmx.l.google.com etc. | US | Google Workspace |
| Astana Hub 🚩 | astanahub.com | aspmx.l.google.com etc. | US | Google Workspace |
| InDriver 🚩 | indrive.com | aspmx.l.google.com etc. | US | Google Workspace |
| Wolt Kazakhstan 🚩 | wolt.com | aspmx.l.google.com etc. | US | Google Workspace |
| Glovo Kazakhstan 🚩 | glovoapp.com | aspmx.l.google.com etc. | US | Google Workspace |
| KAMAZ-Engineering 🚩 | kamaz-engineering.kz | smtp.google.com | US | Google |
| InterCert 🚩 | intercert.kz | aspmx.l.google.com etc. | US | Google Workspace |
| Interteach (medicine) 🚩 | interteach.kz | mail.interteach.kz | DE | Linode |
| Isover KZ 🚩 | isover.kz | mail.isover.kz | IE | AWS EC2 (eu-west-1) |
| Knauf KZ 🚩 | knauf.kz | mailstream-eu1.mxrecord.io | CA | Cloudflare (Mimecast EU behind CF) |
| ACG Ceramics 🚩 | acg.kz | mx.yandex.net | RU | Yandex |

---

## Part 2 — Companies with MX inside Kazakhstan (for contrast)

| Company | Domain | MX Host | IP Location | Provider |
|---|---|---|---|---|
| Kazatomprom | kazatomprom.kz | meg.kazatomprom.kz | KZ | Baylanysnak |
| KazMunayGas | kmg.kz | mx3/mx4.kmg.kz | KZ | KazMunayGaz |
| Kazakhtelecom | telecom.kz | mail.telecom.kz | KZ | DIS |
| Beeline Kazakhstan | beeline.kz | mailrelay1/2.beeline.kz | KZ | Kar-Tel |
| Halyk Bank | halykbank.kz | ewg1/ewg2.halykbank.kz | KZ | HSBK |
| Kaspi Bank | kaspi.kz | bmss-01d/02d.kaspi.kz | KZ | JSC Kaspi Bank |
| ForteBank | fortebank.kz | ml01.fortebank.kz | KZ | ForteBank |
| Eurasian Bank | eurasianbank.kz | mail.eurasianbank.kz | KZ | Hosterkz |
| Bank CenterCredit | bcc.kz | mx3/mx4.bcc.kz | KZ | BankCenterCredit |
| Air Astana | airastana.com | mail/mailx/mail2.airastana.com | KZ | Air Astana |
| FlyArystan | flyarystan.com | (Air Astana MXs) | KZ | Air Astana |
| KTZ (Railways) | railways.kz | ftmail2.railways.kz | KZ | Transtelecom |
| Kazpost | kazpost.kz | smtp.kazpost.kz | KZ | Qazcloud |
| ERG | erg.kz | mail/mail1.erg.kz | KZ | LeaderTelecom |
| Samruk-Kazyna | sk.kz | mail.sk.kz | KZ | Samruk |
| Kazakhmys (local) | kazakhmys.kz | fortimail.kazakhmys.kz | KZ | Kazakhmys |
| CNPC-Aktobemunaigas | amgk.kz | mail.amgk.kz | KZ | — |
| KazTransOil | kaztransoil.kz | mx1/mx3.kaztransoil.kz | KZ | Transtelecom |
| KEGOC | kegoc.kz | email.kegoc.kz | KZ | Jusan Mobile |
| QazaqGaz | qazaqgaz.kz | gwmail.qazaqgaz.kz | KZ | Jusan Mobile |
| Samruk Energy | samruk-energy.kz | mail.samruk-energy.kz | KZ | Samruk Energo |
| Kazakhaltyn | kazakhaltyn.kz | mail.kazakhaltyn.kz | KZ | Kazakhaltyn |
| PetroKazakhstan | petrokazakhstan.com | mail-a..mail-g.petrokazakhstan.com | KZ | PetroKazakhstan |
| Atyrau Refinery | anpz.kz | mx4/mx5.anpz.kmg.kz | KZ | ANPZ / Jusan Mobile |
| Mangistaumunaigas | mmg.kz | mail.mmg.kz | KZ | Jusan Mobile |
| KPO local? | — | — | — | (KPO fully on M365) |
| Bogatyr Coal | bogatyr.kz | bogcp01/02.bogatyr.kz | KZ | Bogatyr Akses Komir |
| Maikuben West | maikuben.kz | mail.maikuben.kz | KZ | Ostrovskiy Co |
| Nurbank | nurbank.kz | mail.nurbank.kz | KZ | Nurbank |
| Bank RBK | bankrbk.kz | gate1/2.bankrbk.kz | KZ | Bank RBK |
| Bereke Bank | berekebank.kz | esg1.berekebank.kz | KZ | Bereke Bank |
| SCAT Airlines | scat.kz | mail1.scat.kz | KZ | SCAT |
| Kazakhtelecom (kt.kz) | kt.kz | mail.kt.kz | KZ | Kazakhstan Today Media |
| Kazteleport | kazteleport.kz | mail.kazteleport.kz | KZ | Kazteleport |
| Transtelecom | tranco.kz / ttk.kz | mail.tranco.kz / mail.ttk.kz | KZ | Alonstelefonstroy / Hosterkz |
| MTS Kazakhstan | mts.kz | mail.mts.kz | KZ | Pskz Hosting |
| KazAvtoZholy | kazautozhol.kz | mail.kazautozhol.kz | KZ | Hoster.KZ |
| Astana Energosbyt | en.kz | mail.en.kz | KZ | Konnekteam |
| Gharysh Sapary | gharysh.kz | mail.gharysh.kz | KZ | Kazgarsapar |
| Kazhydromet | kazhydromet.kz | mail.kazhydromet.kz | KZ | KazTransCom |
| KazRosGas | kazrosgas.kz | mail.kazrosgas.kz | KZ | NLS Kazakhstan |
| KTZ Express | ktze.kz | mail.ktze.kz | KZ | VK Cloud (KZ IP) |
| KazakhInvest | invest.gov.kz | mail.invest.gov.kz | KZ | Qmobile |
| Baiterek | baiterek.gov.kz | mx1/mx2.baiterek.gov.kz | KZ | NLS Astana |
| KASE | kase.kz | relay.kase.kz | KZ | KASE / Smartnet |
| DBK | dbk.kz | mail.dbk.kz | KZ | Hosterkz |
| KazakhExport | kazakhexport.kz | mail.kazakhexport.kz | KZ | Jusan Mobile |
| QazIndustry | qazindustry.gov.kz | mail.qazindustry.gov.kz | KZ | Smartnet |
| Halyk Finance | halykfinance.kz | mail.halykfinance.kz | KZ | Kazteleport |
| Rakhat | rakhat.kz | mail.rakhat.kz / mx10.rakhat.kz | KZ | Rahat / ASTEL |
| Technodom | technodom.kz | mx.technodom.kz | KZ | Technodom |
| Sulpak | sulpak.kz | mail.sulpak.kz | KZ | Kazakhtelecom |
| Alser | alser.kz | ksmg2/edge.alser.kz | KZ | Obit Telecom |
| BI Group | bi.group | mail01/02.bi-group.org | KZ | SA-Telcom / CTC Astana |
| Magnum | magnum.kz | mx1.magnum.kz | KZ | KazTransCom / Magnum |
| EFCO Kazakhstan | efco.kz | mail/mail2/mail3.efco.kz | KZ | Eurasia Insurance |
| Khabar Agency | khabar.kz | mx.khabar.kz | KZ | Khabar |
| NTK TV | ntk.kz | relay.ntk.kz | KZ | ALMANET |
| Channel 31 | 31.kz | emailmx2/3.31.kz | KZ | Jusan Mobile / Comfortel |
| Kazakh Radio | kazradio.kz | mail.kazradio.kz | KZ | Kazakhtelecom |
| Astana TV | astanatv.kz | mail.astanatv.kz | KZ | Hoster.KZ |
| Balapan TV | balapantv.kz | mail.balapantv.kz | KZ | PS Internet |
| KazAirNavigation | kan.kz | mail.kan.kz | KZ | Hosterkz |
| KazMunayTeniz | kmt.kz | mail.kmt.kz | KZ | NBI |
| Caspi Bitum | caspibitum.kz | caspibitum.kz | KZ | Mediana Services |
| KazNickel | kaznickel.kz | mail.kaznickel.kz | KZ | Hoster.KZ |
| Zhairem GOK | zhairem.kz | mail.zhairem.kz | KZ | Pskz Hosting |
| Kazakhmys Energy | kazakhmys-energy.kz | mail.kazakhmys-energy.kz | KZ | GOhost |
| Bolashak University | bolashak.edu.kz | mail.bolashak.edu.kz | KZ | PS Internet |
| KazNTU / Satbayev | kazntu.kz | mx3/mx4.satbayev.university | KZ | KazNITU / KazRENA |
| Alma TV | almatv.kz | edgemail.almatv.kz | KZ | ALMANET |
| Skif Treyd (Small) | small.kz | mail1.small.kz | KZ | Skif Treyd |
| Embamunaigas | emg.kz | mail.emg.kz | KZ | PS Internet |
| Halyk Insurance | halykinsurance.kz | mail.halykinsurance.kz | KZ | Hoster.KZ |
| Kommesk-Omir | kommesk-omir.kz | mail.kommesk-omir.kz | KZ | ABR |
| Victoria Insurance | victoria.kz | mail.victoria.kz | KZ | PS Internet |
| Nobel Pharmaceutical | nobel.kz | mail.nobel.kz | KZ | Nobel Almaty Pharma |
| Arman Company | arman.kz | mail.arman.kz | KZ | PS Internet |
| ON Clinic | onclinic.kz | mail.onclinic.kz | KZ | Hoster.KZ |
| Mugalzhar | mugalzhar.kz | _dc-mx.mugalzhar.kz | KZ | Hoster.KZ |
| Aktobe Mill Complex | amk.kz | mail.amk.kz | KZ | PS Internet |
| AsiaAgroFood | asiaagrofood.kz | mail.asiaagrofood.kz | KZ | Hoster.KZ |
| Allur Group | allur.kz | mx01/mx02.allur.kz | KZ | Davion / Saryarkaavtoprom |
| ETK Company | etk.kz | mail.etk.kz | KZ | Hoster.KZ |
| Mega Center malls | megacenter.kz | mail/mail2.mega.kz | KZ | FTTB Almaty / Kcell |
| Asia Park mall | asiapark.kz | mail.asiapark.kz | KZ | PS Internet |
| Keruen mall | keruen.kz | mail.keruen.kz | KZ | Qmobile |
| ADK Almaty | adk.kz | mail.adk.kz | KZ | NLS Kazakhstan |
| Auchan Kazakhstan | auchan.kz | mail.auchan.kz | KZ | Hosterkz |
| Galmart | galmart.kz | mail.galmart.kz | KZ | Jeti Aspan |
| Otbasy Bank | otbasybank.kz | mail/mail2.otbasybank.kz | KZ | Otbasy Bank |
| National Bank of Kazakhstan | nationalbank.kz | mail1-3/mail.nationalbank.kz | KZ | National Bank |
| KDIF | kdif.kz | mail/mx1/mx2.kdif.kz | KZ | ASTEL / NBI |
| Delta Bank | deltabank.kz | mail.deltabank.kz | KZ | PS Internet |
| ENPF (pension fund) | enpf.kz | mx1/mx2.enpf.kz | KZ | ENPF / NLS |
| Qazkom legacy | qazkom.kz | mx.kkb.kz (Halyk infra) | KZ | Halyk Bank |
| NITEC | nitec.kz | meg1/meg2.nitec.kz | KZ | NIT |
| KazRENA | kazrena.kz | mail.kazrena.kz | KZ | KazRENA |
| Eurasian Cement | cement.kz | cement.kz | KZ | ASTEL |
| Caspi Bitum | caspibitum.kz | caspibitum.kz | KZ | Mediana Services |
| KazMunayTeniz | kmt.kz | mail.kmt.kz | KZ | NBI |


---

## Part 3 — Publicly documented executive email contacts

| Email | Company | Person / Office | Source |
|---|---|---|---|
| Investor_relations@kcell.kz | Kcell | Irina Shol, Head of IR (signs KSE disclosures) | investors.kcell.kz press release |
| materialsgm@kcell.kz | Kcell | Executive body / Company Secretary (AGM materials) | Kcell AGM notice, KSE |
| olga.lozovaya@ffin.kz | Freedom Finance SPC | Olga Lozovaya, Director | AIX Offer Document (official) |
| usoffice@freedomholdingcorp.com | Freedom Holding Corp. | Corporate Secretary office (CEO Timur Turlov board) | SEC DEF 14A filing |
| info@kazminerals.com | KAZ Minerals | CEO office (CEO Andrew Southam, Chairman Oleg Novachuk) | Official corporate profile |
| corpcomms@kazminerals.com | KAZ Minerals | Corporate Communications | kazminerals.com |
| acook@freedomholdingcorp.com | Freedom Holding Corp. | Adam Cook, Corporate Secretary | AIX Offer Document (official) |

### Email format intel (verified patterns)

| Company | Format | Confidence |
|---|---|---|
| KAZ Minerals | first.last@kazminerals.com (96.9% of mailboxes) | High |
| Bazis A | No MX on bazis-a.kz; bazis-a.com on Hostinger (MY) — only generic contacts published | — |
