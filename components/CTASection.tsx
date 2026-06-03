"use client";

import { useState } from "react";

export default function CTASection() {
    const [agency, setAgency] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [shake, setShake] = useState(false);

    const handleSubmit = () => {
        if (!agency.trim()) {
            setShake(true);
            setTimeout(() => setShake(false), 600);
            return;
        }
        setSubmitted(true);
    };

    return (
        <section className="section-pad" style={{ background: "var(--gold)", textAlign: "center" }}>
            <h2 className="reveal" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,5vw,34px)", fontWeight: 400, color: "var(--brown-800)", marginBottom: "12px" }}>
                Daftarkan Agency Anda
            </h2>
            <p className="reveal stagger-1" style={{ fontSize: "clamp(13px,2vw,15px)", color: "#4a2c08", lineHeight: 1.8, maxWidth: "460px", margin: "0 auto 32px" }}>
                Bergabunglah dengan agency-agency terpilih di Sabdanara. Kami sedang membuka kurasi batch pertama — slot terbatas.
            </p>

            <div className="reveal stagger-2">
                {submitted ? (
                    <p style={{ fontSize: "15px", fontWeight: 500, color: "var(--brown-800)", animation: "fadeIn .4s ease" }}>
                        ✓ Terima kasih! Kami akan segera menghubungi Anda.
                    </p>
                ) : (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            maxWidth: "460px",
                            margin: "0 auto",
                            width: "100%",
                        }}
                        className="sm:flex-row"
                    >
                        <input
                            type="text"
                            placeholder="Nama agency Anda"
                            value={agency}
                            onChange={(e) => setAgency(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                            style={{
                                flex: 1,
                                padding: "13px 16px",
                                borderRadius: "6px",
                                border: "none",
                                fontSize: "14px",
                                background: "var(--cream)",
                                color: "var(--brown-800)",
                                outline: "none",
                                minWidth: 0,
                                fontFamily: "'DM Sans', sans-serif",
                                boxShadow: shake ? "0 0 0 2px rgba(60,42,16,.4)" : "none",
                                animation: shake ? "shake 0.4s ease" : "none",
                                transition: "box-shadow 0.2s",
                            }}
                        />
                        <button
                            onClick={handleSubmit}
                            style={{
                                background: "var(--brown-800)",
                                color: "var(--cream)",
                                fontSize: "14px",
                                padding: "13px 24px",
                                borderRadius: "6px",
                                border: "none",
                                cursor: "pointer",
                                whiteSpace: "nowrap",
                                flexShrink: 0,
                                fontFamily: "'DM Sans', sans-serif",
                                transition: "background 0.2s, transform 0.15s",
                            }}
                            className="hover:bg-[var(--brown-900)] hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Daftar Sekarang
                        </button>
                    </div>
                )}
            </div>

            <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        @keyframes shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-6px)} 40%{transform:translateX(6px)} 60%{transform:translateX(-4px)} 80%{transform:translateX(4px)} }
      `}</style>
        </section>
    );
}