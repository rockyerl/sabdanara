"use client";

import { useRef } from "react";

type KOL = {
    initials: string;
    name: string;
    niche: string;
    followers: string;
    avatarBg: string;
    avatarColor: string;
};

const kols: KOL[] = [
    { initials: "AR", name: "Anisa Rahmawati", niche: "Beauty & Skincare", followers: "280K followers", avatarBg: "var(--cream)", avatarColor: "var(--brown-800)" },
    { initials: "BP", name: "Bagas Pratama", niche: "Tech & Gadget", followers: "145K followers", avatarBg: "var(--brown-800)", avatarColor: "var(--gold-light)" },
    { initials: "DS", name: "Dewi Sartika", niche: "Kuliner & Lifestyle", followers: "390K followers", avatarBg: "var(--gold)", avatarColor: "var(--cream)" },
];

function KOLCard({ kol, index }: { kol: KOL; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;
        const r = card.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width - 0.5;
        const cy = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `translateY(-5px) scale(1.01) rotateX(${-cy * 6}deg) rotateY(${cx * 6}deg)`;
        card.style.transition = "transform 0.1s, box-shadow 0.25s";
    };

    const handleLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = "";
        card.style.transition = "transform 0.4s ease, box-shadow 0.25s";
        card.style.boxShadow = "";
    };

    return (
        <div
            ref={cardRef}
            className={`reveal stagger-${index + 1}`}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 16px 40px rgba(60,42,16,.12)"; }}
            style={{
                background: "#fff",
                border: "0.5px solid var(--cream-dark)",
                borderRadius: "12px",
                padding: "clamp(16px,3vw,20px)",
                cursor: "pointer",
                transition: "transform 0.25s, box-shadow 0.25s",
                transformStyle: "preserve-3d",
            }}
        >
            <div
                style={{
                    width: "44px", height: "44px", borderRadius: "50%",
                    background: kol.avatarBg, color: kol.avatarColor,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "16px", fontWeight: 500, marginBottom: "12px",
                    transition: "transform 0.25s",
                }}
                className="group-hover:scale-110"
            >
                {kol.initials}
            </div>
            <div style={{ fontSize: "14px", fontWeight: 500, color: "var(--brown-800)" }}>{kol.name}</div>
            <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "2px" }}>{kol.niche}</div>
            <div style={{ display: "flex", gap: "8px", marginTop: "12px", flexWrap: "wrap" }}>
        <span style={{ fontSize: "11px", background: "var(--cream)", color: "var(--brown-600)", padding: "3px 10px", borderRadius: "20px" }}>
          {kol.followers}
        </span>
                <span style={{ fontSize: "11px", background: "var(--brown-800)", color: "var(--gold-light)", padding: "3px 10px", borderRadius: "20px" }}>
          Verified
        </span>
            </div>
        </div>
    );
}

export default function KOLSection() {
    return (
        <section id="kol" className="section-pad" style={{ background: "#fff" }}>
            <p className="reveal" style={{ fontSize: "11px", letterSpacing: "3px", color: "var(--gold)", textTransform: "uppercase", marginBottom: "12px" }}>
                KOL terkurasi
            </p>
            <h2 className="reveal stagger-1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px,4vw,30px)", fontWeight: 400, color: "var(--brown-800)", marginBottom: "12px" }}>
                Suara terpercaya dari berbagai niche
            </h2>
            <p className="reveal stagger-2" style={{ fontSize: "clamp(13px,2vw,15px)", color: "var(--muted)", lineHeight: 1.8 }}>
                Setiap KOL di Sabdanara telah melalui proses kurasi ketat bersama agency-nya.
            </p>
            <div className="grid gap-3 mt-9" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))" }}>
                {kols.map((kol, i) => <KOLCard key={kol.name} kol={kol} index={i} />)}
            </div>
        </section>
    );
}