import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Sabdanara — Platform KOL Terkurasi Indonesia",
    description:
        "Temukan suara yang tepat untuk brand Anda. Sabdanara menghadirkan KOL terkurasi dari berbagai agency terpercaya Indonesia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="id">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
                rel="stylesheet"
            />
        </head>
        <body>{children}</body>
        </html>
    );
}