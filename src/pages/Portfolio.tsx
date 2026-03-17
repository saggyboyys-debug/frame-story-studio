import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { VideoCard } from "@/components/portfolio/VideoCard";
import { VideoModal } from "@/components/portfolio/VideoModal";
import { FilterTabs } from "@/components/portfolio/FilterTabs";
import { projects } from "@/data/projects";
import heroBg from "@/assets/hero-bg.jpg";

const categories = ["All", "Music Videos", "Rap"];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filtered = projects
    .filter((p) => filter === "All" || p.category === filter)
    .sort((a, b) => parseInt(b.year) - parseInt(a.year));

  const activeProject = projects.find((p) => p.youtubeId === activeVideo);

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 text-center">
          <AnimatedSection>
            <h1 className="font-cinzel text-foreground text-4xl md:text-6xl">Our Work</h1>
            <p className="text-muted-foreground text-lg mt-4">Every frame tells a story.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="py-[10vh] px-6">
        <div className="max-w-7xl mx-auto">
          <FilterTabs categories={categories} active={filter} onChange={setFilter} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p) => (
              <VideoCard key={p.id} project={p} onClick={setActiveVideo} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <VideoModal youtubeId={activeVideo} title={activeProject?.title} onClose={() => setActiveVideo(null)} />
    </main>
  );
};

export default Portfolio;
