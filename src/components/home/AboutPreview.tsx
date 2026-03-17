import { useNavigate } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GoldButton } from "@/components/ui/GoldButton";
import aboutBg from "@/assets/about-bg.jpg";

export const AboutPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-surface py-[15vh] px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <span className="text-gold text-[13px] uppercase tracking-[0.25em] font-semibold">OUR STORY</span>
          <h2 className="font-cinzel text-foreground text-3xl md:text-4xl mt-4 tracking-[-0.02em]">
            Every success story starts with a DREAM.
          </h2>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            FriVaar Productions was founded on 1st January 2021 by two friends, Vishal Gupta and Aksh Kumar. What started as a shared passion for music and film has grown into a registered production company crafting cinematic music videos and recording sound for artists who deserve to be heard.
          </p>
          <div className="mt-8">
            <GoldButton onClick={() => navigate("/about")}>Learn More About Us</GoldButton>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="overflow-hidden rounded-lg">
            <img src={aboutBg} alt="FriVaar Productions behind the scenes" className="w-full h-80 object-cover" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
