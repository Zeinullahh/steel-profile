"""Batch 4: even more Kazakhstani companies."""
import dns.resolver
import requests

COMPANIES = {
    # Insurance
    "Eurasia Insurance": "euasia.kz",
    "KazakhExport? Nomad Insurance": "nomadins.kz",
    "Halyk Insurance": "halykinsurance.kz",
    "Kommesk-Оmir": "kommesk-omir.kz",
    "Amanat Insurance": "amanatins.kz",
    "Standard Insurance": "standardins.kz",
    "Victoria Insurance": "victoria.kz",
    "NSK Insurance": "nsk.kz",
    "Allianz Kazakhstan": "allianz.kz",
    # Pharma / healthcare
    "Nobel Pharmaceutical (KZ)": "nobel.kz",
    "Arman Company (pharma)": "arman.kz",
    "Global pharm": "globalpharm.kz",
    "Damu Pharma": "damupharma.kz",
    "Rukhi Med": "rukhimed.kz",
    "Interteach (medicine)": "interteach.kz",
    "Atbasar Neurology? ON Clinic": "onclinic.kz",
    # Agriculture / food
    "Astyk Agro": "astykagro.kz",
    "KazAgro": "kazagro.kz",
    "Aitas KZ": "aitas.kz",
    "Kaspi Bas? Steppe Agro": "steppe-agro.com",
    "Kustanay Flour (Staroershino)": "kfm.kz",
    "Kazakhstan Temir? MAK? Mugalzhar": "mugalzhar.kz",
    "Aktobe Mill Complex": "amk.kz",
    "Kokshe-Ata? AsiaAgroFood": "asiaagrofood.kz",
    "Alma? Bayan Sulu": "sulu.kz",
    "Raimbek Bottlers": "raimbek.kz",
    "DANONE Central Asia": "danone.kz",
    "Almaty Champagne Wines": "acw.kz",
    "Arba Wine": "arbawine.kz",
    "Shymkent May? Turan Soft": "turansoft.kz",
    # Logistics
    "Kedentransservice (KTS)": "kedentransservice.kz",
    "KTZ Freight Transportation": "ktz-freight.kz",
    "KazTransService": "kaztransservice.kz",
    "Alem Logistics": "alem.kz",
    "DHL Kazakhstan": "dhl.kz",
    "KazPost Express? Eubank? KEP": "kazpostexpress.kz",
    "Turan Express": "turanexpress.kz",
    "TengizTrans? TTK": "ttk-trans.kz",
    # Auto
    "Astana Motors (Hyundai)": "astanamotors.kz",
    "Allur Group": "allur.kz",
    "Bipek Auto": "bipek.kz",
    "Toyota Motor Kazakhstan": "toyota.kz",
    "Borusan Cat Kazakhstan": "borusancat.kz",
    "KAMAZ-Engineering": "kamaz-engineering.kz",
    # Oil services / construction / engineering
    "KazStroyService": "kazstroyservice.kz",
    "Kuat (Amangeldy)": "kuatam.kz",
    "KazStroyMontazh? InzhStroy": "inzhstroy.kz",
    "Tengiz Petroleum? AIL Service": "ailservice.kz",
    "Ersai Caspian Contractor": "ersai.kz",
    "Caspian Engineering? CSC": "csc.kz",
    "Mabetex Group": "mabetex.com",
    "Alarko? ETK Company": "etk.kz",
    "Vissingen? IBC Group": "ibcgroup.kz",
    # Media / IT / gaming
    "Kolesa Group": "kolesa.kz",
    "2GIS Kazakhstan": "2gis.kz",
    "Yandex Kazakhstan? Yandex KZ": "yandex.kz",
    "Chocofamily (choco family)": "chocofamily.kz",
    "Aitu (messenger)": "aitu.io",
    "BTS Digital": "btsdigital.kz",
    "Qazcode? Zerde? ZERDE HOLDING": "zerde.gov.kz",
    "Kolesa? Krisha krisha.kz": "krisha.kz",
    "Satty Zhuldyz (gambling)": "szh.kz",
    "Europharma retail? Gloriya? Gloria Jeans KZ": "gloriajeans.kz",
    # Retail / malls
    "Mega Center (Almaty/Astana malls)": "megacenter.kz",
    "Esentai Mall": "esentaimall.com",
    "Dostyk Plaza": "dostykplaza.kz",
    "Asia Park (Astana mall)": "asiapark.kz",
    "Keruen (Astana)": "keruen.kz",
    "ADK (Almaty)": "adk.kz",
    "Small Mart? METRO CC": "metro-cc.kz",
    "Leroy Merlin Kazakhstan": "leroymerlin.kz",
    "Baucenter": "baucenter.kz",
    "Arbuz.kz (grocery)": "arbuz.kz",
    "Auchan Kazakhstan": "auchan.kz",
    "Galmart": "galmart.kz",
    # More banks / finance
    "Otbasy Bank": "otbasybank.kz",
    "National Bank of Kazakhstan": "nationalbank.kz",
    "Kazakhstan Deposit Insurance Fund": "kdif.kz",
    "Eurasian Capital (EC)": "eurasiancapital.kz",
    "Delta Bank (KZ)": "deltabank.kz",
    "Bank of Astana? NBK? First Heartland": "fhc.kz",
    "Jusan Garant? BGK": "bgk.kz",
    "KAZAKHSTAN SECURITIES? UAPF": "uapf.kz",
    "Unified Accumulative Pension Fund": "enpf.kz",
    "Eurasian Bank (qazkom) legacy": "qazkom.kz",
    # Telecom / IT
    "NITEC (National IT)": "nitec.kz",
    "Kazakhtelecom Data (DIS)": "dis.kz",
    "Qaznet (KazRENA)": "kazrena.kz",
    "FirstIdea? Colvir KZ": "colvir.com",
    "DoubleClick? Orion Telekom": "oriontelekom.kz",
    "Astana Hub": "astanahub.com",
    "InDriver Kazakhstan": "indrive.kz",
    "InDriver corporate": "indrive.com",
    "Yandex Go Kazakhstan": "go.yandex.kz",
    "Wolt Kazakhstan": "wolt.com",
    "Glovo Kazakhstan": "glovoapp.com",
    "Weglot? Aviata": "aviata.kz",
    "Chocolife (chocolife.me)": "chocolife.me",
    # Utilities / construction materials
    "Eurasian Cement": "cement.kz",
    "Caspi Cement": "caspi-cement.kz",
    "Beksa (Shymkent cement)": "beksa.kz",
    "Jambyl Cement": "jambylcement.kz",
    "Stepnogorsk Cement": "stepcement.kz",
    "Kazakhstan Temir? HRK? Kramds": "kramds.kz",
    "QazStand? InterCert": "intercert.kz",
    "KazStandard (Standardization)": "kazstandard.kz",
    "KAZMEMSTandard": "kazmems.kz",
    "KTZ Khromtau? KazChromeT": "ktzh.kz",
    "ACG (Astana Group?) ACG Ceramics": "acg.kz",
    "Keramir (Akmola ceramics)": "keramir.kz",
    "ShymkentPlaster? Knauf KZ": "knauf.kz",
    "Isotex? AkvaKZ": "isover.kz",
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
