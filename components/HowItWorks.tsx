"use client";

const steps = [
    {
        num: "01",
        title: "Browse & filter KOL",
        desc: "Cari berdasarkan niche, platform, lokasi, atau budget. Lihat profil lengkap, rate card, dan portofolio campaign.",
    },
    {
        num: "02",
        title: "Kirim request",
        desc: "Tertarik dengan KOL tertentu? Kirim inquiry langsung lewat platform. Agency akan merespons dalam 1×24 jam.",
    },
    {
        num: "03",
        title: "Kolaborasi & pantau",
        desc: "Setujui brief, pantau progress campaign, dan lihat laporan performa — semuanya dari satu dashboard.",
    },
];

export default function HowItWorks() {
    return (
        <section id="cara-kerja" className="section-pad" style={{ background: "var(--cream)" }}>
            <p className="reveal" style={{ fontSize: "11px", letterSpacing: "3px", color: "var(--gold)", textTransform: "uppercase", marginBottom: "12px" }}>
                Cara kerja
            </p>
            <h2 className="reveal stagger-1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px,4vw,30px)", fontWeight: 400, color: "var(--brown-800)", marginBottom: "12px" }}>
                Semudah tiga langkah
            </h2>
            <p className="reveal stagger-2" style={{ fontSize: "clamp(13px,2vw,15px)", color: "var(--muted)", lineHeight: 1.8, maxWidth: "480px" }}>
                Dari pencarian hingga kolaborasi, semua bisa dilakukan dari satu tempat — tanpa WhatsApp bolak-balik.
            </p>

            <div
                className="grid gap-4 mt-10"
                style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))" }}
            >
                {steps.map((step, i) => (
                    <div
                        key={step.num}
                        className={`reveal stagger-${i + 1} group`}
                        style={{
                            background: "#fff",
                            border: "0.5px solid var(--cream-dark)",
                            borderRadius: "12px",
                            padding: "clamp(18px,3vw,24px) clamp(16px,3vw,20px)",
                            transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
                            cursor: "default",
                            position: "relative",
                            overflow: "hidden",
                        }}
                        onMouseEnter={(e) => {
                            const el = e.currentTarget;
                            el.style.transform = "translateY(-4px)";
                            el.style.boxShadow = "0 12px 32px rgba(60,42,16,.1)";
                            el.style.borderColor = "rgba(186,117,23,.3)";
                        }}
                        onMouseLeave={(e) => {
                            const el = e.currentTarget;
                            el.style.transform = "";
                            el.style.boxShadow = "";
                            el.style.borderColor = "";
                        }}
                    >
                        <div
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "28px",
                                color: "var(--cream-dark)",
                                marginBottom: "12px",
                                transition: "color 0.25s",
                            }}
                            className="group-hover:text-[var(--gold-light)]"
                        >
                            {step.num}
                        </div>
                        <div style={{ fontSize: "15px", fontWeight: 500, color: "var(--brown-800)", marginBottom: "8px" }}>{step.title}</div>
                        <div style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.7 }}>{step.desc}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}