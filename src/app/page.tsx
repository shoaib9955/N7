import Navbar from "@/components/layout/Navbar";
import Hero from "@/sections/Hero";
import Solutions from "@/sections/Solutions";
import CoreBanking from "@/sections/CoreBanking";
import CTA from "@/sections/CTA";
import Marquee from "@/sections/Marquee";
import MobileBanking from "@/sections/MobileBanking";
import InsightsSection from "@/sections/Insights";
import CaseStudies from "@/sections/CaseStudies";
import PaperlessCTA from "@/sections/PaperlessCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-[#000D12] min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Solutions />
      <CoreBanking />
      <CTA />
      <Marquee />
      <MobileBanking />
      <InsightsSection />
      <CaseStudies />
      <PaperlessCTA />
      <Footer />
    </main>
  );
}