import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Props {
  youtubeId: string | null;
  title?: string;
  onClose: () => void;
}

export const VideoModal = ({ youtubeId, title, onClose }: Props) => {
  useEffect(() => {
    if (!youtubeId) return;
    document.body.style.overflow = "hidden";
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [youtubeId, onClose]);

  return (
    <AnimatePresence>
      {youtubeId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-background/95" />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-4xl z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-gold hover:text-gold-hover transition-colors"
            >
              <X size={28} />
            </button>
            <div className="aspect-video border border-gold/30 rounded-lg overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                title={title || "Video"}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            {title && (
              <h3 className="font-cinzel text-foreground text-xl text-center mt-6">{title}</h3>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
