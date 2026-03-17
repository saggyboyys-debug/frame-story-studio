import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-[#0D0D0D]/90 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="FriVaar Productions" className="h-10" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative uppercase text-[13px] tracking-[0.1em] font-inter transition-colors duration-200 ${
                location.pathname === link.path ? "text-gold" : "text-muted-foreground hover:text-gold"
              }`}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gold"
                />
              )}
            </Link>
          ))}
          <Link to="/contact">
            <motion.span
              whileHover={{ scale: 1.02 }}
              className="px-6 py-2 border border-gold text-gold uppercase text-[13px] tracking-[0.1em] font-semibold transition-colors duration-200 hover:bg-gold hover:text-primary-foreground"
            >
              Get in Touch
            </motion.span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-gold"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-20 bg-background/98 backdrop-blur-xl z-30 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-cinzel text-2xl transition-colors ${
                  location.pathname === link.path ? "text-gold" : "text-foreground hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
