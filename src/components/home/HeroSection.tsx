import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { GoldButton } from "@/components/ui/GoldButton";
import { GhostButton } from "@/components/ui/GhostButton";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const navigate = useNavigate();
  const stagger = (i: number) => ({ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] } });

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover animate-kenburns" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.78) 100%)" }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.span {...stagger(0)} className="text-gold text-[13px] uppercase tracking-[0.25em] font-semibold block">
          FRIVAAR PRODUCTIONS
        </motion.span>

        <motion.h1 {...stagger(1)} className="font-cinzel text-foreground font-bold tracking-[-0.02em] mt-6" style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}>
          Visual Storytelling
        </motion.h1>
        <motion.h1 {...stagger(2)} className="font-cinzel text-foreground font-bold tracking-[-0.02em]" style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}>
          For Every Frame.
        </motion.h1>

        <motion.p {...stagger(3)} className="text-muted-foreground text-lg mt-6 max-w-[520px] mx-auto leading-relaxed">
          We craft cinematic content for brands, artists, and creators — music videos, films, and sound.
        </motion.p>

        <motion.div {...stagger(4)} className="flex gap-4 justify-center mt-10">
          <GoldButton onClick={() => navigate("/portfolio")}>View Our Work</GoldButton>
          <GhostButton onClick={() => navigate("/contact")}>Get in Touch</GhostButton>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
};
