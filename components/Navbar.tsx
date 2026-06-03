"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = ["Tentang", "Cara Kerja", "KOL", "Untuk Brand"];

    return (
        <nav
            style={{
                background: "var(--cream)",
                borderBottom: "0.5px solid var(--cream-dark)",
                boxShadow: scrolled ? "0 2px 24px rgba(60,42,16,.12)" : "none",
                transition: "box-shadow 0.3s",
            }}
            className="sticky top-0 z-50"
        >
            <div
                style={{ padding: "16px var(--section-px)" }}
                className="flex items-center justify-between"
            >
        <span
            style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(14px, 3vw, 18px)",
                letterSpacing: "6px",
                color: "var(--brown-800)",
            }}
        >
          SABDANARA
        </span>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-6">
                    {links.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(" ", "-")}`}
                            style={{
                                fontSize: "13px",
                                color: "var(--muted)",
                                textDecoration: "none",
                                position: "relative",
                            }}
                            className="nav-link hover:text-[var(--brown-800)] transition-colors group"
                        >
                            {item}
                            <span
                                style={{
                                    position: "absolute",
                                    bottom: "-2px",
                                    left: 0,
                                    height: "1px",
                                    background: "var(--gold)",
                                    width: 0,
                                    transition: "width 0.25s",
                                }}
                                className="group-hover:w-full"
                            />
                        </a>
                    ))}
                    <button
                        style={{
                            background: "var(--brown-800)",
                            color: "var(--cream)",
                            fontSize: "13px",
                            padding: "8px 20px",
                            borderRadius: "6px",
                            border: "none",
                            letterSpacing: "0.5px",
                            transition: "background 0.2s, transform 0.15s",
                        }}
                        className="hover:bg-[var(--brown-700)] cursor-pointer active:scale-95"
                    >
                        Daftar Agency
                    </button>
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden p-1"
                    onClick={() => setOpen(!open)}
                    style={{ color: "var(--brown-800)" }}
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div
                    style={{
                        borderTop: "0.5px solid var(--cream-dark)",
                        padding: "16px var(--section-px) 20px",
                    }}
                    className="md:hidden flex flex-col gap-4"
                >
                    {links.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(" ", "-")}`}
                            style={{ fontSize: "15px", color: "var(--muted)" }}
                            onClick={() => setOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <button
                        style={{
                            background: "var(--brown-800)",
                            color: "var(--cream)",
                            fontSize: "14px",
                            padding: "11px 20px",
                            borderRadius: "6px",
                            width: "100%",
                            marginTop: "4px",
                            border: "none",
                        }}
                    >
                        Daftar Agency
                    </button>
                </div>
            )}
        </nav>
    );
}