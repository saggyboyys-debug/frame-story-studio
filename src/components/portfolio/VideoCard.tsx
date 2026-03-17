import { motion } from "framer-motion";
import { Play } from "lucide-react";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
  onClick: (youtubeId: string) => void;
}

export const VideoCard = ({ project, onClick }: Props) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className="group cursor-pointer"
    onClick={() => onClick(project.youtubeId)}
  >
    <div className="relative aspect-video overflow-hidden border border-transparent transition-all duration-500 group-hover:border-gold/50 group-hover:gold-glow">
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-full object-cover grayscale-[30%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center bg-background/20 backdrop-blur-sm">
          <Play fill="hsl(43, 82%, 47%)" className="text-gold ml-1" size={24} />
        </div>
      </div>
      <span className="absolute top-3 right-3 px-2 py-1 text-[10px] border border-gold text-gold backdrop-blur-md bg-background/40">
        {project.year}
      </span>
      <span className="absolute bottom-3 left-3 text-[10px] text-gold uppercase tracking-wider font-bold backdrop-blur-sm">
        {project.category}
      </span>
    </div>
    <div className="mt-4">
      <h3 className="text-foreground text-lg font-medium leading-tight">{project.title}</h3>
      <p className="text-gold text-sm mt-1">{project.artist}</p>
    </div>
  </motion.div>
);
