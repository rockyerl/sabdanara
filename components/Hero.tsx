"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
    const noiseRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = noiseRef.current;
        if (!canvas) return;

        // Generate static grain texture once, tile it via background-image trick
        const SIZE = 200;
        canvas.width = SIZE;
        canvas.height = SIZE;
        const ctx = canvas.getContext("2d")!;
        const imageData = ctx.createImageData(SIZE, SIZE);
        for (let i = 0; i < imageData.data.length; i += 4) {
            const v = Math.floor(Math.random() * 255);
            imageData.data[i] = v;
            imageData.data[i + 1] = v;
            imageData.data[i + 2] = v;
            imageData.data[i + 3] = Math.floor(Math.random() * 22 + 4);
        }
        ctx.putImageData(imageData, 0, 0);

        // Export canvas as data URL and tile as background on the section
        const dataUrl = canvas.toDataURL();
        const section = canvas.closest("section") as HTMLElement;
        if (section) {
            section.style.backgroundImage = `url(${dataUrl})`;
            section.style.backgroundRepeat = "repeat";
        }
    }, []);

    return (
        <section
            style={{
                background: "#1c1008",
                padding: "clamp(52px, 8vw, 88px) var(--section-px)",
                position: "relative",
                overflow: "hidden",
            }}
            className="text-center"
        >
            {/* Hidden canvas — grain is exported as bg-image on the section */}
            <canvas ref={noiseRef} style={{ display: "none" }} />

            {/* Layer: warm radial glow from top */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                background: "radial-gradient(ellipse 90% 55% at 50% -10%, rgba(78,53,24,0.95) 0%, transparent 70%)",
            }} />

            {/* Layer: editorial diagonal rule lines */}
            <svg
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.055 }}
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <defs>
                    <pattern id="diag" width="44" height="44" patternUnits="userSpaceOnUse" patternTransform="rotate(28)">
                        <line x1="0" y1="0" x2="0" y2="44" stroke="#FAC775" strokeWidth="0.6" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#diag)" />
            </svg>

            {/* Layer: thin gold horizontal rule at top */}
            <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "1px",
                background: "linear-gradient(90deg, transparent 0%, rgba(186,117,23,.45) 40%, rgba(186,117,23,.45) 60%, transparent 100%)",
                pointerEvents: "none",
            }} />

            {/* Layer: thin rule at bottom */}
            <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "1px",
                background: "linear-gradient(90deg, transparent 0%, rgba(186,117,23,.18) 50%, transparent 100%)",
                pointerEvents: "none",
            }} />

            {/* Small decorative corner marks */}
            <div style={{ position: "absolute", top: "24px", left: "var(--section-px)", width: "24px", height: "24px", borderTop: "1px solid rgba(186,117,23,.3)", borderLeft: "1px solid rgba(186,117,23,.3)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: "24px", right: "var(--section-px)", width: "24px", height: "24px", borderTop: "1px solid rgba(186,117,23,.3)", borderRight: "1px solid rgba(186,117,23,.3)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "24px", left: "var(--section-px)", width: "24px", height: "24px", borderBottom: "1px solid rgba(186,117,23,.3)", borderLeft: "1px solid rgba(186,117,23,.3)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "24px", right: "var(--section-px)", width: "24px", height: "24px", borderBottom: "1px solid rgba(186,117,23,.3)", borderRight: "1px solid rgba(186,117,23,.3)", pointerEvents: "none" }} />

            {/* Content */}
            <p className="reveal" style={{ fontSize: "clamp(9px,2vw,11px)", letterSpacing: "4px", color: "var(--gold)", textTransform: "uppercase", marginBottom: "20px", position: "relative" }}>
                Platform KOL Terkurasi Indonesia
            </p>

            <h1
                className="reveal stagger-1"
                style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(28px, 8vw, 56px)",
                    fontWeight: 400,
                    color: "var(--cream)",
                    letterSpacing: "clamp(3px, 1.5vw, 10px)",
                    marginBottom: "16px",
                    lineHeight: 1.1,
                    position: "relative",
                }}
            >
                SABDANARA
            </h1>

            <p className="reveal stagger-2" style={{ fontSize: "clamp(10px,2vw,12px)", color: "var(--gold)", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "28px", position: "relative" }}>
                KOL Platform
            </p>

            <p
                className="reveal stagger-3"
                style={{ fontSize: "clamp(14px,2vw,16px)", color: "var(--text-on-dark)", lineHeight: 1.8, maxWidth: "540px", margin: "0 auto 40px", position: "relative" }}
            >
                Temukan suara yang tepat untuk brand Anda. Sabdanara menghadirkan KOL
                terkurasi dari berbagai agency terpercaya Indonesia — dalam satu platform
                yang bersih dan transparan.
            </p>

            <div className="reveal stagger-4" style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
                <button
                    style={{
                        background: "var(--gold)",
                        color: "var(--cream)",
                        fontSize: "14px",
                        padding: "13px 28px",
                        borderRadius: "6px",
                        border: "none",
                        letterSpacing: "0.5px",
                        cursor: "pointer",
                        transition: "background 0.2s, transform 0.15s, box-shadow 0.2s",
                    }}
                    className="hover:bg-[#9e6313] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(186,117,23,.3)] active:translate-y-0 w-full sm:w-auto"
                >
                    Cari KOL Sekarang
                </button>
                <button
                    style={{
                        background: "transparent",
                        color: "var(--cream)",
                        fontSize: "14px",
                        padding: "13px 28px",
                        borderRadius: "6px",
                        border: "1px solid var(--brown-500)",
                        cursor: "pointer",
                        transition: "border-color 0.2s, color 0.2s, transform 0.15s",
                    }}
                    className="hover:border-[var(--gold)] hover:text-[var(--gold)] hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
                >
                    Daftarkan Agency Anda
                </button>
            </div>
        </section>
    );
}