import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { AboutPreview } from "@/components/home/AboutPreview";
import { CTAStrip } from "@/components/home/CTAStrip";

const Index = () => (
  <main>
    <Navbar />
    <HeroSection />
    <ServicesOverview />
    <FeaturedWork />
    <AboutPreview />
    <CTAStrip />
    <Footer />
  </main>
);

export default Index;
