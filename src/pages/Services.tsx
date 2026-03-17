import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTAStrip } from "@/components/home/CTAStrip";
import { services } from "@/data/services";
import servicesBg from "@/assets/services-hero.jpg";
import serviceMusicVideo from "@/assets/service-music-video.jpg";
import serviceCinematography from "@/assets/service-cinematography.jpg";
import serviceVideoProduction from "@/assets/service-video-production.jpg";
import serviceEvent from "@/assets/service-event.jpg";
import serviceCreative from "@/assets/service-creative.jpg";
import serviceSound from "@/assets/service-sound.jpg";

const serviceImages = [
  serviceMusicVideo,
  serviceCinematography,
  serviceVideoProduction,
  serviceEvent,
  serviceCreative,
  serviceSound,
];

const Services = () => (
  <main>
    <Navbar />

    {/* Hero */}
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <img src={servicesBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative z-10 text-center">
        <AnimatedSection>
          <h1 className="font-cinzel text-foreground text-4xl md:text-6xl">Our Services</h1>
          <p className="text-muted-foreground text-lg mt-4">Cinematic solutions for every creative need.</p>
        </AnimatedSection>
      </div>
    </section>

    {/* Services detail */}
    <section className="py-[10vh] px-6">
      <div className="max-w-6xl mx-auto space-y-24">
        {services.map((s, i) => {
          const isEven = i % 2 === 1;
          return (
            <AnimatedSection key={s.title}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? "lg:direction-rtl" : ""}`}>
                <div className={`${isEven ? "lg:order-2" : ""}`}>
                  <div className="w-12 h-[2px] bg-gold mb-6" />
                  <s.icon size={36} className="text-gold mb-4" strokeWidth={1.5} />
                  <h2 className="font-cinzel text-foreground text-2xl md:text-3xl mb-4">{s.title}</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">{s.description}</p>
                </div>
                <div className={`${isEven ? "lg:order-1" : ""}`}>
                  <div className="aspect-video overflow-hidden rounded-sm border border-border">
                    <img src={serviceImages[i]} alt={s.title} className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </section>

    <CTAStrip />
    <Footer />
  </main>
);

export default Services;
