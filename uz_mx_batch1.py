"""Batch 1: Find large Uzbekistani companies whose MX records point to non-Uzbekistani IPs."""
import json, time, sys
import dns.resolver
import requests

COMPANIES = {
    # Banks / fintech
    "Kapitalbank (Uzpromstroybank)": "kapitalbank.uz",
    "Asakabank": "asakabank.uz",
    "Hamkorbank": "hamkorbank.uz",
    "Ipoteka Bank": "ipotekabank.uz",
    "TBC Uzbekistan": "tbcbank.uz",
    "Payme": "payme.uz",
    "Click": "click.uz",
    "Uzum Bank": "uzum.uz",
    "SQB (Sanoat Qurilish Bank)": "sqb.uz",
    "Xalq Banki": "xalqbanki.uz",
    "Turonbank": "turonbank.uz",
    "Aloqabank": "aloqabank.uz",
    "Agrobank": "agrobank.uz",
    "Invest Finance Bank": "ifb.uz",
    "Ravnaq Bank": "ravnaq-bank.uz",
    "Mikrokreditbank": "mikrokreditbank.uz",
    "Savdogar Bank": "savdogarbank.uz",
    "Yelo Bank": "yelo.uz",
    "Octobank": "octobank.uz",
    # Telecoms
    "Uztelecom": "uztelecom.uz",
    "Beeline Uzbekistan (Unitel)": "beeline.uz",
    "Ucell (Coscom)": "ucell.uz",
    "Mobiuz (UMS)": "mobiuz.uz",
    "Humans": "humans.uz",
    # Oil & gas / mining / energy
    "Uzbekneftegaz": "ung.uz",
    "Lukoil Uzbekistan": "lukoil.uz",
    "Sanoat Energetika Guruhi": "seg.uz",
    "Almalyk Mining (AGMK)": "agmk.uz",
    "Navoi Mining (NGMK)": "ngmk.uz",
    "Uzbekcoal": "uzbekcoal.uz",
    "Uzbekhydroenergo": "uhe.uz",
    "Thermal Power Plants (TTP)": "tpp.uz",
    # Airlines
    "Uzbekistan Airways": "uzairways.com",
    "Qanot Sharq": "qanotsharq.uz",
    "Centrum Air": "centrumair.uz",
    "Silk Avia": "silkavia.uz",
    # State holdings
    "UzAvto": "uzavto.uz",
    "UzBuild": "uzbuild.uz",
    "Uzagrotech": "uzagrotech.uz",
    "UzChasys": "uzchasys.uz",
    "Uzeltexsanoat": "uzeltexsanoat.uz",
    "Sanoat Invest": "sanoinvest.uz",
    "Uzmetkombinat": "uzmk.uz",
    "Uzbekistan Railways (UTY)": "railway.uz",
    "Uzbekistan Post": "pochta.uz",
    # Retail / food / manufacturing
    "Korzinka": "korzinka.uz",
    "Makro (Hamkorbank)": "makro.uz",
    "UzBAT": "uzbat.com",
    "Coca-Cola Ichimligi UZ": "coca-cola.uz",
    "Artel": "artel.uz",
    "Texnopark": "texnopark.uz",
    "Shohruh Savdo (Fix Price UZ)": "fixprice.uz",
    # Tech
    "IT Park Uzbekistan": "it-park.uz",
    "OLX Uzbekistan": "olx.uz",
    "Telecom market / Uzinfocom": "uzinfocom.uz",
    "UZINFOCOM": "uic.uz",
    # Exchanges / finance infra
    "Toshkent RSE (RSE)": "rse.uz",
    "UzEx (Commodity Exchange)": "uzex.uz",
    "Central Securities Depository": "csd.uz",
    # Media / telecom adjacent
    "MTRK (Toshkent TV)": "mtrk.uz",
    "Uzreport": "uzreport.uz",
    "Daryo.uz": "daryo.uz",
    "Gazeta.uz": "gazeta.uz",
    "Kun.uz": "kun.uz",
    "Zamin.uz": "zamin.uz",
    "My5 TV": "my5.uz",
    # Government / municipalities
    "Toshkent city gov": "tashkent.uz",
    "Government portal": "gov.uz",
    # Pharma / chemistry
    "Dori-Darmon": "doridarmon.uz",
    "Bio-chem farm": "biokim.uz",
    # Insurance / leasing
    "Kafolat Insurance": "kafolat.uz",
    "Gross Insurance": "gross.uz",
    "Apex Insurance": "apex.uz",
    # Construction / cement
    "Qizilqumsement": "qizilqumsement.uz",
    "Akhangarancement": "akhangarancement.uz",
    # Agriculture
    "O'zbekiston paxtasi": "uzcotton.uz",
    # Tourism / hospitality
    "Uzbektourism": "uzbektourism.uz",
    "Turonforum": "turonzamin.uz",
    # Auto
    "GM Uzbekistan (former)": "gmuz.com",
    "Man Auto Uzbekistan": "manauto.uz",
    # Transport
    "Toshkent Metro": "metro.uz",
    "Toshkent airport": "tashkent-airport.uz",
}

resolver = dns.resolver.Resolver()
resolver.lifetime = 10

ip_cache = {}
def ip_info(ip):
    if ip in ip_cache:
        return ip_cache[ip]
    try:
        r = requests.get(f"http://ip-api.com/json/{ip}?fields=status,country,countryCode,org,isp", timeout=10)
        d = r.json()
        if d.get("status") == "success":
            ip_cache[ip] = d
            time.sleep(1.5)  # stay under 45 req/min free tier
            return d
    except Exception:
        pass
    ip_cache[ip] = None
    return None

def resolve_mx(domain):
    try:
        return [str(r.exchange).rstrip(".") for r in resolver.resolve(domain, "MX")]
    except Exception:
        return []

def resolve_a(host):
    try:
        return [str(r) for r in resolver.resolve(host, "A")]
    except Exception:
        return []

results = []
for i, (name, domain) in enumerate(COMPANIES.items(), 1):
    row = {"company": name, "domain": domain, "mx": []}
    for mx in resolve_mx(domain):
        for ip in resolve_a(mx):
            info = ip_info(ip)
            row["mx"].append({
                "mx_host": mx, "ip": ip,
                "country": info.get("country") if info else "?",
                "countryCode": info.get("countryCode") if info else "?",
                "org": (info.get("org") or info.get("isp")) if info else "?",
            })
    results.append(row)
    for m in row["mx"]:
        flag = "🚩" if m["countryCode"] not in ("UZ", "?") else "  "
        print(f"[{i:2d}] {flag} {name:35s} {domain:22s} {m['mx_host']:45s} {m['ip']:16s} {m['countryCode']:3s} {m['country']:20s} {m['org']}")

with open("uz_mx_results_batch1.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2, ensure_ascii=False)
print("\nSaved to uz_mx_results_batch1.json")
