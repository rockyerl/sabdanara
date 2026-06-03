export default function Footer() {
    return (
        <footer
            style={{
                background: "var(--brown-900)",
                padding: "28px var(--section-px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "10px",
            }}
        >
      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", letterSpacing: "5px", color: "var(--cream)" }}>
        SABDANARA
      </span>
            <span style={{ fontSize: "12px", color: "var(--brown-500)" }}>
        Suara yang tepat, pengaruh yang nyata. © 2026
      </span>
        </footer>
    );
}