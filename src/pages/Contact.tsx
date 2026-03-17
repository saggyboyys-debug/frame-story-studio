import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GoldButton } from "@/components/ui/GoldButton";
import { MapPin, Mail, Instagram, Facebook, Youtube, CheckCircle } from "lucide-react";

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/fvproductions_5/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/p/FriVaar-Productions-100065422062991/", label: "Facebook" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UCdWamqRiDXmN7Nq7FU97IEA", label: "YouTube" },
];

const projectTypes = ["Punjabi Music Video", "Sound Recording", "Video Production", "Event Coverage", "Creative Project", "Other"];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", projectType: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.projectType || !formData.message) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="h-[40vh] flex items-center justify-center pt-20">
        <AnimatedSection className="text-center px-6">
          <h1 className="font-cinzel text-foreground text-4xl md:text-6xl tracking-[-0.02em]">
            Let's Create Something Together.
          </h1>
          <p className="text-muted-foreground text-lg mt-4">Tell us about your project — we'd love to hear from you.</p>
        </AnimatedSection>
      </section>

      {/* Contact content */}
      <section className="py-[10vh] px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <AnimatedSection>
            <h2 className="font-cinzel text-gold text-2xl mb-8">Reach Us Directly</h2>
            <div className="space-y-6">
              <a href="mailto:hello@frivaarproductions.com" className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors">
                <Mail size={20} className="text-gold" strokeWidth={1.5} />
                hello@frivaarproductions.com
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={20} className="text-gold" strokeWidth={1.5} />
                Bassi, Punjab, India
              </div>
              <div className="space-y-4 pt-4">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors">
                    <s.icon size={20} className="text-gold" strokeWidth={1.5} />
                    {s.label}
                  </a>
                ))}
              </div>
              <p className="text-muted-foreground text-sm italic pt-4">We typically respond within 24 hours.</p>
            </div>
          </AnimatedSection>

          {/* Right - Form */}
          <AnimatedSection delay={0.2}>
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full gap-4">
                <CheckCircle size={48} className="text-gold" />
                <h3 className="font-cinzel text-foreground text-2xl text-center">Thanks! We'll be in touch soon.</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    aria-label="Name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    aria-label="Email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <select
                    name="projectType"
                    required
                    aria-label="Project Type"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-gold focus:outline-none transition-colors appearance-none"
                  >
                    <option value="" disabled className="bg-card text-muted-foreground">Select Project Type</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t} className="bg-card text-foreground">{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    required
                    aria-label="Message"
                    placeholder="Tell us about your project..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors resize-none"
                  />
                </div>
                <GoldButton type="submit" fullWidth disabled={status === "loading"}>
                  {status === "loading" ? "Sending..." : "Send Message"}
                </GoldButton>
                {status === "error" && (
                  <p className="text-destructive text-sm text-center">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
