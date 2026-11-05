"""Batch 2: more large Kazakhstani companies + Bazis A."""
import json
import dns.resolver
import requests

COMPANIES = {
    "Bazis A": "bazis-a.kz",
    "Bazis-A (alt)": "bazis-a.com",
    "Capital Bank (KZ)": "capitalbank.kz",
    "Nurbank": "nurbank.kz",
    "Sberbank Kazakhstan": "sberbank.kz",
    "Bank RBK": "bankrbk.kz",
    "Home Credit Kazakhstan": "homecredit.kz",
    "Eurasian Bank (Bereke)": "berekebank.kz",
    "Freedom Bank": "freedombank.kz",
    "Altyn Bank": "altynbank.com",
    "Tele2 Kazakhstan": "tele2.kz",
    "Altel": "altel.kz",
    "Astana IT University": "astanait.edu.kz",
    "KBTU": "kbtu.kz",
    "Nazarbayev University": "nu.edu.kz",
    "KazNU": "kaznu.kz",
    "Aircompany SCAT": "scat.kz",
    "FlyArystan": "flyarystan.com",
    "Turkish Airlines KZ office": "thy.com",
    "Kazakh Invest": "invest.gov.kz",
    "Baiterek (holding)": "baiterek.gov.kz",
    "ZERDE holding (NIT)": "nit.kz",
    "Kazakhstan Temir Zholy — KTZ Express": "ktze.kz",
    "Kazakhmys Smelting": "kazakhmys.kz",
    "Kazzinc (KZ site)": "kazzinc.kz",
    "Tau-Ken Samruk": "tauken.kz",
    "Kazgeology": "kazgeology.kz",
    "KazMunayGas — EP": "kmgep.kz",
    "PetroKazakhstan (KMG Internatl)": "petrokazakhstan.kz",
    "Maersk KZ": "maersk.kz",
    "Eurasian Group (alt)": "eugr.kz",
    "VostokCoalService / Shubarkol": "shubarkol.kz",
    "Bogatyr Coal": "bogatyr.kz",
    "Eurasian Foods (EFCO KZ)": "efco.kz",
    "Rakhat (confectionery)": "rakhat.kz",
    "FoodMaster": "foodmaster.kz",
    "Tabys (retail)": "tabys.kz",
    "Technodom": "technodom.kz",
    "Mechta (mechta.kz)": "mechta.kz",
    "Sulpak": "sulpak.kz",
    "Alser": "alser.kz",
    "Small (smartphones)": "small.kz",
    "Chocofamily (Choco)": "chocotravel.com",
    "Kaspi Travel/Shop": "kaspi.kz",
    "Halyk Fin": "halykfinance.kz",
    "FFIN Bank": "ffin.kz",
    "DalCapital / DBK": "dbk.kz",
    "KazakhExport": "kazakhexport.kz",
    "QazIndustry": "qazindustry.gov.kz",
    "Astana Expo 2017 legacy": "expo2017astana.com",
    "Baitursynuly University": "abu.edu.kz",
    "Karaganda Economic Univ (Bolashak)": "bolashak.edu.kz",
    "ENU (L.N. Gumilyov)": "enu.kz",
    "KazNRTU (Satpayev)": "kaznitu.edu.kz",
    "KazNTU": "kazntu.kz",
    "SDU (Suleyman Demirel)": "sdu.edu.kz",
    "KIMEP": "kimep.kz",
    "AIFC": "aifc.kz",
    "Astana International Exchange": "aix.kz",
    "KASE": "kase.kz",
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

results = []
for name, domain in COMPANIES.items():
    mxs = resolve_mx(domain)
    if not mxs:
        print(f"{name:40s} {domain:25s} NO MX / NXDOMAIN")
        continue
    for mx in mxs:
        for ip in resolve_a(mx):
            info = ip_info(ip)
            cc = info.get("countryCode") if info else "?"
            country = info.get("country") if info else "?"
            org = (info.get("org") or info.get("isp")) if info else "?"
            flag = "  <<< NON-KZ" if cc != "KZ" else ""
            print(f"{name:40s} {domain:25s} {mx:45s} {ip:16s} {cc:3s} {country:20s} {org}{flag}")

with open("mx_results2.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2, ensure_ascii=False)
