import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GoldButton } from "@/components/ui/GoldButton";
import { VideoCard } from "@/components/portfolio/VideoCard";
import { VideoModal } from "@/components/portfolio/VideoModal";
import { projects } from "@/data/projects";

export const FeaturedWork = () => {
  const navigate = useNavigate();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const featured = projects.slice(0, 3);
  const activeProject = projects.find((p) => p.youtubeId === activeVideo);

  return (
    <section className="py-[15vh] px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionTitle preHeading="OUR WORK" title="Featured Projects" subtitle="A selection of our most recent work." />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((p) => (
            <VideoCard key={p.id} project={p} onClick={setActiveVideo} />
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <GoldButton onClick={() => navigate("/portfolio")}>View All Work</GoldButton>
        </AnimatedSection>
      </div>

      <VideoModal youtubeId={activeVideo} title={activeProject?.title} onClose={() => setActiveVideo(null)} />
    </section>
  );
};
