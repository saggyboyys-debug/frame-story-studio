import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTAStrip } from "@/components/home/CTAStrip";
import { Heart, Users, Star, Sun } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import aboutBg from "@/assets/about-bg.jpg";

const values = [
  { icon: Heart, title: "Family", desc: "Every artist we work with becomes part of the FriVaar family. We care deeply about the people behind every project." },
  { icon: Users, title: "Friends", desc: "FriVaar was built by friends, for friends. The best creative work happens when trust comes first." },
  { icon: Star, title: "Fun", desc: "We believe in enjoying the process. Great music videos are made with energy, laughter, and love." },
  { icon: Sun, title: "Friday", desc: "Friday is our state of mind — the feeling of creative freedom when passion meets purpose. We bring that energy to every single shoot." },
];

const About = () => (
  <main>
    <Navbar />

    {/* Hero */}
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/85" />
      <div className="relative z-10 text-center px-6">
        <AnimatedSection>
          <span className="text-gold text-[13px] uppercase tracking-[0.25em] font-semibold">OUR STORY</span>
          <h1 className="font-cinzel text-foreground text-4xl md:text-6xl mt-4 tracking-[-0.02em]">
            Every success story starts with a DREAM.
          </h1>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            A collective of filmmakers, storytellers, and visual artists united by passion.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Story */}
    <section className="py-[15vh] px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <div className="overflow-hidden rounded-lg">
            <img src={aboutBg} alt="FriVaar Productions" className="w-full h-96 object-cover" />
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <h2 className="font-cinzel text-foreground text-3xl mb-6">The FriVaar Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>FriVaar Productions was officially founded on 1st January 2021 in Bassi — by two friends, Vishal Gupta and Aksh Kumar, who shared one dream: to tell stories through the power of music and film.</p>
            <p>The name FriVaar says it all. It stands for Family, Friends, Fun, and Friday — the four values that drive everything we create. We believe the best content comes from genuine relationships, creative freedom, and showing up with full energy every single day.</p>
            <p>As a registered motion picture and sound recording production company, we work with emerging and established artists to bring their music to life with cinematic visuals that speak from the soul.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Values */}
    <section className="bg-surface py-[15vh] px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionTitle preHeading="WHAT DRIVES US" title="Our Values" />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <div className="bg-card border border-border p-8 text-center hover:gold-glow transition-all duration-300">
                <v.icon size={32} className="text-gold mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-cinzel text-foreground text-lg mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Founders */}
    <section className="py-[15vh] px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionTitle preHeading="THE TEAM" title="The Founders" />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[{ name: "Vishal Gupta", role: "Co-Founder & Director" }, { name: "Aksh Kumar", role: "Co-Founder & Director" }].map((f, i) => (
            <AnimatedSection key={f.name} delay={i * 0.15}>
              <div className="bg-card border border-border border-t-2 border-t-gold p-8 text-center">
                <h3 className="font-cinzel text-foreground text-xl">{f.name}</h3>
                <p className="text-gold text-sm mt-2">{f.role}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <p className="text-muted-foreground text-center text-sm mt-8">Established 1st January 2021 · Bassi, Punjab, India</p>
      </div>
    </section>

    {/* Quote */}
    <section className="bg-surface py-[15vh] px-6">
      <AnimatedSection className="max-w-4xl mx-auto text-center">
        <p className="font-cinzel text-gold text-2xl md:text-4xl italic leading-relaxed">
          "Every beat deserves a frame. Every frame deserves the best."
        </p>
        <p className="text-muted-foreground uppercase tracking-[0.15em] text-xs mt-6">— FriVaar Productions</p>
      </AnimatedSection>
    </section>

    <CTAStrip />
    <Footer />
  </main>
);

export default About;
