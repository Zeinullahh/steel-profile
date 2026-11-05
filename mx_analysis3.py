"""Batch 3: more large Kazakhstani companies."""
import dns.resolver
import requests

COMPANIES = {
    "QazaqGaz": "qazaqgaz.kz",
    "KazGazDobycha": "kazgazdobycha.kz",
    "Intergas Central Asia": "icagroup.kz",
    "KazTransGas Aimak": "kta.kz",
    "QazaqGaz (gasnet)": "gaznet.kz",
    "Samruk Energy": "samruk-energy.kz",
    "Alatau Zharyk": "alatau-jaryk.kz",
    "Mazar? CEZ (Astana utilities)": "astana-cez.kz",
    "Astana Energosbyt": "en.kz",
    "AlmatyEnergosbyt": "almatyenergosbyt.kz",
    "Kazvodokanal": "kazvodokanal.kz",
    "Astana Su Arnasy": "su-arnasy.kz",
    "KazAvtoZholy (Kazakhavtodor)": "kazautozhol.kz",
    "KazAD": "kazad.kz",
    "Astana LRT": "astanalrt.kz",
    "Almaty Airport": "alaport.com",
    "Astana Airport (Nursultan)": "nursultannazarbayevairport.com",
    "Airport Management Group": "airport.com.kz",
    "KazAirNavigation": "kan.kz",
    "Kazaviaspas": "kazaviaspas.kz",
    "Kazcosmos": "kazcosmos.gov.kz",
    "Gharysh Sapary": "gharysh.kz",
    "EphocaSpace (SpaceX KZ partner)": "space.kz",
    "Kazhydromet": "kazhydromet.kz",
    "KazSeismology": "kazseismology.kz",
    "Kaz minerals Bozshakol": "bozshakol.kz",
    "Kazakhaltyn": "kazakhaltyn.kz",
    "Altynalmas": "altynalmas.com",
    "AK Altynalmas (site)": "altynalmas.kz",
    "AltynEx Company": "altynex.kz",
    "Kazchrome (ERG)": "kazchrome.com",
    "Sokolov-Sarbai (SSGPO)": "ssgpo.kz",
    "Eurasian Energy Corporation": "eec.kz",
    "Shubarkol Premium? Vostochny": "vostcoal.com",
    "Bogatyr Access Komir": "balkomir.kz",
    "Maikuben West": "maikuben.kz",
    "Kazakhmys Copper": "kazakhmys.com",
    "Kazakhmys Energy": "kazakhmys-energy.kz",
    "Kaznickel": "kaznickel.kz",
    "Kazzinc Schweizer?": "kazzinc.net",
    "Zhairem GOK": "zhairem.kz",
    "Kempir? (KazMinerals Aktogay)": "aktogay.kz",
    "KAZ Minerals Aktogay": "aktogay.com",
    "KAZ Minerals Bozymchak": "bozymchak.kz",
    "PetroKazakhstan Oil Products": "pkop.kz",
    "PKKR (PetroKaz)": "petrokazakhstan.com",
    "KMG Drilling": "kmg-drilling.kz",
    "KMG Service": "kmgservice.kz",
    "KazMunayGas Refinery (Pavlodar)": "prm.kz",
    "Atyrau Refinery": "anpz.kz",
    "Shymkent Refinery": "shymkentnpz.kz",
    "Caspi Bitum": "caspibitum.kz",
    "KazMunayTeniz": "kmt.kz",
    "Kazmortransflot": "kazmortransflot.kz",
    "KazTransGas": "kaztransgas.kz",
    "Munaigas? KazRosGas": "kazrosgas.kz",
    "Karachaganak Petroleum Operating": "kpo.kz",
    "NCOC (Kashagan)": "ncoc.kz",
    "Tengiz? TCO careers": "tengizchevroil.kz",
    "Embamunaigas": "emg.kz",
    "OzenMunaiGas": "omg.kz",
    "Mangistaumunaigas": "mmg.kz",
    "KazgerMunai": "kazger-munai.kz",
    "Tasbulat Oil": "tasbulat.kz",
    "Kazakhoil Aktobe": "kol.kz",
    "PetroKazakhstan Kumkol": "kumkol.kz",
    "Kazakhtelecom (KT)": "kt.kz",
    "Kazteleport": "kazteleport.kz",
    "Transtelecom (TTK)": "tranco.kz",
    "Transtelecom alt": "ttk.kz",
    "Tauelsizdik Avenue? MTS KZ": "mts.kz",
    "Digital TV (Alma TV)": "almawifi.kz",
    "Alma TV": "almatv.kz",
    "Icon (ID TV)": "icon.kz",
    "Qaznet Telecom?": "qaznettelecom.kz",
    "Astana Broadcast": "astanabroadcast.kz",
    "Khabar Agency": "khabar.kz",
    "Khabar 24": "24.kz",
    "Qazaqstan TV": "qazaqstan.tv",
    "Qazaqstan TV alt": "qazaqstan.kz",
    "Channel One Eurasia": "1tv.kz",
    "NTK TV": "ntk.kz",
    "31 Channel": "31.kz",
    "El Arna": "elarna.kz",
    "Mir Kazakhstan": "mirkaz.kz",
    "Kazakh Radio": "kazradio.kz",
    "Astana TV": "astanatv.kz",
    "Abai TV": "abaitv.kz",
    "Balapan TV": "balapantv.kz",
}

def resolve_mx(domain):
    try:
        return [str(r.exchange).rstrip(".") for r in dns.resolver.resolve(domain, "MX", lifetime=10)]
    except Exception:
        return []

def resolve_a(host):
    try:
        return [str(r) for r in dns.resolver.resolve(host, "A", lifetime=10)]
    except Exception:
        return []

def ip_info(ip):
    try:
        r = requests.get(f"http://ip-api.com/json/{ip}?fields=status,country,countryCode,org,isp,query", timeout=10)
        d = r.json()
        if d.get("status") == "success":
            return d
    except Exception:
        pass
    return None

for name, domain in COMPANIES.items():
    mxs = resolve_mx(domain)
    if not mxs:
        print(f"{name:42s} {domain:30s} NO MX / NXDOMAIN")
        continue
    seen = set()
    for mx in mxs:
        for ip in resolve_a(mx):
            if (mx, ip) in seen:
                continue
            seen.add((mx, ip))
            info = ip_info(ip)
            cc = info.get("countryCode") if info else "?"
            country = info.get("country") if info else "?"
            org = (info.get("org") or info.get("isp")) if info else "?"
            flag = "  <<< NON-KZ" if cc != "KZ" else ""
            print(f"{name:42s} {domain:30s} {mx:45s} {ip:16s} {cc:3s} {country:20s} {org}{flag}")
