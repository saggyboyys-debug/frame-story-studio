import { useNavigate } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GoldButton } from "@/components/ui/GoldButton";
import { GhostButton } from "@/components/ui/GhostButton";

export const CTAStrip = () => {
  const navigate = useNavigate();

  return (
    <section className="py-[15vh] px-6 relative" style={{ background: "#0D0D0D" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(212,160,23,0.07) 0%, transparent 70%)" }} />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="font-cinzel text-foreground text-3xl md:text-5xl tracking-[-0.02em]">
            Let's Create Something Together.
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-xl mx-auto leading-relaxed">
            Whether it's a music video, film project, or recording session — we'd love to hear your idea.
          </p>
          <div className="flex gap-4 justify-center mt-10">
            <GoldButton onClick={() => navigate("/contact")}>Start a Project</GoldButton>
            <GhostButton onClick={() => navigate("/portfolio")}>See Our Work</GhostButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
