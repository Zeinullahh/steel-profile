"""Find large Kazakhstani companies whose MX records point to non-Kazakhstani IPs."""
import json
import dns.resolver
import requests

# Large Kazakhstani companies (banks, telecoms, oil&gas, mining, airlines, retail, etc.)
COMPANIES = {
    "Kazatomprom": "kazatomprom.kz",
    "KazMunayGas": "kmg.kz",
    "Kazakhtelecom": "telecom.kz",
    "Kcell": "kcell.kz",
    "Beeline Kazakhstan": "beeline.kz",
    "Halyk Bank": "halykbank.kz",
    "Kaspi Bank": "kaspi.kz",
    "ForteBank": "fortebank.kz",
    "Eurasian Bank": "eurasianbank.kz",
    "Jusan Bank": "jysanbank.kz",
    "Bank CenterCredit": "bcc.kz",
    "Air Astana": "airastana.com",
    "Kazakhstan Railways (KTZ)": "railways.kz",
    "Kazpost": "kazpost.kz",
    "Kaz Minerals": "kazminerals.com",
    "ERG (Eurasian Resources)": "erg.kz",
    "Kazzinc": "kazzinc.com",
    "Tengizchevroil": "tengizchevroil.com",
    "Samruk-Kazyna": "sk.kz",
    "Qazaq Air": "flyqazaq.com",
    "Magnum Cash & Carry": "magnum.kz",
    "BI Group": "bi.group",
    "Eurasian Foods": "efko.kz",
    "Rixos / Semurg Invest": "semurginvest.kz",
    "Kazakhmys": "kazakhmys.kz",
    "CNPC-Aktobemunaigas": "amgk.kz",
    "KazTransOil": "kaztransoil.kz",
    "KEGOC": "kegoc.kz",
}

def resolve_mx(domain):
    try:
        answers = dns.resolver.resolve(domain, "MX", lifetime=10)
        return [str(r.exchange).rstrip(".") for r in answers]
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
    row = {"company": name, "domain": domain, "mx": []}
    for mx in mxs:
        ips = resolve_a(mx)
        for ip in ips:
            info = ip_info(ip)
            row["mx"].append({
                "mx_host": mx,
                "ip": ip,
                "country": info.get("country") if info else "?",
                "countryCode": info.get("countryCode") if info else "?",
                "org": info.get("org") or info.get("isp") if info else "?",
            })
    results.append(row)
    for m in row["mx"]:
        print(f"{name:35s} {domain:22s} {m['mx_host']:40s} {m['ip']:16s} {m['countryCode']:3s} {m['country']:20s} {m['org']}")

with open("mx_results.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2, ensure_ascii=False)
print("\nSaved to mx_results.json")
