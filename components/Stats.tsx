"use client";

import { useEffect, useRef, useState } from "react";

type StatItem = { target: number; suffix: string; label: string };

const stats: StatItem[] = [
    { target: 200, suffix: "+", label: "KOL Terkurasi" },
    { target: 30, suffix: "+", label: "Agency Terverifikasi" },
    { target: 15, suffix: "+", label: "Kategori Niche" },
];

function useCounter(target: number, suffix: string, triggered: boolean) {
    const [value, setValue] = useState("0" + suffix);
    useEffect(() => {
        if (!triggered) return;
        const dur = 1200;
        const start = performance.now();
        const step = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(eased * target) + suffix);
            if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [triggered, target, suffix]);
    return value;
}

function StatItem({ stat, index }: { stat: StatItem; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const [triggered, setTriggered] = useState(false);
    const value = useCounter(stat.target, stat.suffix, triggered);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setTriggered(true); observer.disconnect(); } },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal${index > 0 ? ` stagger-${index}` : ""}`}
            style={{
                padding: "clamp(18px,3vw,28px) var(--section-px)",
                textAlign: "center",
                borderRight: index < stats.length - 1 ? "0.5px solid var(--cream-dark)" : "none",
                cursor: "default",
                transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(186,117,23,.06)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
            <div
                style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(20px,5vw,32px)",
                    color: "var(--brown-800)",
                    display: "inline-block",
                    transition: "transform 0.2s",
                }}
                className="group-hover:scale-105"
            >
                {value}
            </div>
            <div style={{ fontSize: "clamp(10px,2vw,12px)", color: "var(--muted)", marginTop: "4px", letterSpacing: "0.3px" }}>
                {stat.label}
            </div>
        </div>
    );
}

export default function Stats() {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", background: "var(--cream)", borderBottom: "0.5px solid var(--cream-dark)" }}>
            {stats.map((s, i) => <StatItem key={s.label} stat={s} index={i} />)}
        </div>
    );
}