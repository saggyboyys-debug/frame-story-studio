import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/fvproductions_5/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/p/FriVaar-Productions-100065422062991/", label: "Facebook" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UCdWamqRiDXmN7Nq7FU97IEA", label: "YouTube" },
];

export const Footer = () => (
  <footer className="bg-deep border-t border-border">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Col 1 */}
        <div>
          <img src={logo} alt="FriVaar Productions" className="h-12 mb-4" />
          <p className="font-cinzel text-gold text-sm mb-3">Family | Friends | Fun | Friday</p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Visual storytelling for brands, artists, and creators. Crafting cinematic content since 2021.
          </p>
          <p className="text-muted-foreground text-xs">Bassi, Punjab, India · Est. 2021</p>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="font-cinzel text-foreground text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-muted-foreground text-sm hover:text-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="font-cinzel text-foreground text-lg mb-6">Connect</h4>
          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-colors duration-200"
              >
                <s.icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} FriVaar Productions. All rights reserved.
        </p>
        <p className="text-muted-foreground text-xs italic">Built for storytellers.</p>
      </div>
    </div>
  </footer>
);
