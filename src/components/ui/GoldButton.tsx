import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

export const GoldButton = ({ children, onClick, type = "button", className = "", fullWidth = false, disabled = false }: Props) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`px-8 py-3 border border-gold text-gold uppercase tracking-[0.15em] text-xs font-semibold transition-colors duration-200 hover:bg-gold hover:text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed ${fullWidth ? "w-full" : ""} ${className}`}
  >
    {children}
  </motion.button>
);
