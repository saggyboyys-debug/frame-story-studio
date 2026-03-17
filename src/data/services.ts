import { Music, Aperture, Video, Sparkles, Lightbulb, Mic, type LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  { icon: Music, title: "Music Video Production", description: "From concept and scripting to on-location shoots and full post-production — we craft music videos that match the energy and emotion of your sound." },
  { icon: Aperture, title: "Cinematography", description: "Our cinematographers capture visually stunning footage with professional-grade equipment, lighting techniques, and a natural eye for cinematic framing." },
  { icon: Video, title: "Video Production", description: "End-to-end video production from pre-production planning to final delivery. We handle scripting, scheduling, on-set direction, and post-production." },
  { icon: Sparkles, title: "Event Coverage", description: "From live performances to cultural gatherings and milestone moments, we document your events in a compelling, narrative-driven style." },
  { icon: Lightbulb, title: "Creative Direction", description: "We guide the full creative vision for your project — from concept development and moodboarding to visual language, set design, and final look." },
  { icon: Mic, title: "Sound Recording", description: "Professional studio and on-location recording for artists, musicians, and labels — capturing your sound with clarity and character." },
];
