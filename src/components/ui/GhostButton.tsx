import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const GhostButton = ({ children, onClick, className = "" }: Props) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`px-8 py-3 border border-foreground/30 text-foreground uppercase tracking-[0.15em] text-xs font-semibold transition-colors duration-200 hover:border-foreground hover:bg-foreground/10 ${className}`}
  >
    {children}
  </motion.button>
);
