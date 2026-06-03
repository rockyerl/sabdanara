"use client";

import { Store, Users } from "lucide-react";

const brandFeatures = [
    "Browse 200+ KOL terkurasi",
    "Filter by niche, platform & budget",
    "Profil lengkap & rate card transparan",
    "Inquiry langsung lewat platform",
];

const agencyFeatures = [
    "Showcase roster KOL secara digital",
    "Terima inquiry langsung dari brand",
    "Dashboard manajemen campaign",
    "Exposure ke network brand nasional",
];

const cardHover = {
    onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = "translateY(-4px)";
    },
    onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = "";
    },
};

export default function AudienceSection() {
    return (
        <section id="untuk-brand" className="section-pad" style={{ background: "var(--cream)" }}>
            <p className="reveal" style={{ fontSize: "11px", letterSpacing: "3px", color: "var(--gold)", textTransform: "uppercase", marginBottom: "12px" }}>
                Untuk siapa?
            </p>
            <h2 className="reveal stagger-1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px,4vw,30px)", fontWeight: 400, color: "var(--brown-800)", marginBottom: "clamp(24px,4vw,40px)" }}>
                Satu platform, dua pintu masuk
            </h2>

            <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))" }}>
                {/* Brand card */}
                <div
                    {...cardHover}
                    className="reveal stagger-1"
                    style={{
                        background: "#fff",
                        border: "0.5px solid var(--cream-dark)",
                        borderRadius: "12px",
                        padding: "clamp(20px,4vw,28px) clamp(18px,4vw,24px)",
                        transition: "transform 0.25s, box-shadow 0.25s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(60,42,16,.08)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
                >
                    <Store size={22} style={{ color: "var(--gold)", marginBottom: "16px", transition: "transform 0.2s" }} className="hover:scale-110" />
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(17px,3vw,20px)", marginBottom: "8px", color: "var(--brown-800)" }}>Untuk Brand</h3>
                    <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.7, marginBottom: "16px" }}>
                        Temukan KOL yang benar-benar cocok dengan produk dan audiens Anda — bukan sekadar yang punya followers banyak.
                    </p>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                        {brandFeatures.map((item) => (
                            <li key={item} style={{ fontSize: "13px", color: "var(--muted-dark)", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                                <span style={{ color: "var(--gold)", flexShrink: 0 }}>—</span>{item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Agency card */}
                <div
                    className="reveal stagger-2"
                    style={{
                        background: "var(--brown-800)",
                        border: "0.5px solid var(--cream-dark)",
                        borderRadius: "12px",
                        padding: "clamp(20px,4vw,28px) clamp(18px,4vw,24px)",
                        transition: "transform 0.25s, box-shadow 0.25s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(60,42,16,.25)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
                >
                    <Users size={22} style={{ color: "var(--gold-light)", marginBottom: "16px" }} />
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(17px,3vw,20px)", marginBottom: "8px", color: "var(--cream)" }}>Untuk Agency</h3>
                    <p style={{ fontSize: "13px", color: "var(--text-on-dark)", lineHeight: 1.7, marginBottom: "16px" }}>
                        Tampilkan roster KOL Anda ke ribuan brand — dengan profil yang profesional dan terkelola dengan baik.
                    </p>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                        {agencyFeatures.map((item) => (
                            <li key={item} style={{ fontSize: "13px", color: "var(--text-on-dark)", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                                <span style={{ color: "var(--gold-light)", flexShrink: 0 }}>—</span>{item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}