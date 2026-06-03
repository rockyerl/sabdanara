import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import KOLSection from "@/components/KOLSection";
import AudienceSection from "@/components/AudienceSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/Cursorglow";
import ScrollRevealInit from "@/components/ScrollRevealInit";

export default function Home() {
    return (
        <main>
            <CursorGlow />
            <ScrollRevealInit />
            <Navbar />
            <Hero />
            <Stats />
            <HowItWorks />
            <KOLSection />
            <AudienceSection />
            <CTASection />
            <Footer />
        </main>
    );
}