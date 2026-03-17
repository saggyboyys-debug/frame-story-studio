import { useNavigate } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GoldButton } from "@/components/ui/GoldButton";
import { services } from "@/data/services";

export const ServicesOverview = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-surface py-[15vh] px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionTitle preHeading="WHAT WE DO" title="Our Craft" subtitle="From concept to final cut, we bring your vision to life." />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <div className="bg-card border border-border p-8 border-l-4 border-l-gold transition-all duration-300 hover:gold-glow hover:-translate-y-1">
                <s.icon size={28} className="text-gold mb-4" strokeWidth={1.5} />
                <h3 className="font-cinzel text-foreground text-lg mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <GoldButton onClick={() => navigate("/services")}>Explore All Services</GoldButton>
        </AnimatedSection>
      </div>
    </section>
  );
};
