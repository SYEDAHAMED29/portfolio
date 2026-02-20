import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/site";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { track } from "@/lib/analytics";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : ""
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-16 lg:px-0 px-6">
        <a
          href="#"
          className="font-display font-semibold text-foreground tracking-tight text-2xl"
        >
          SYED<span className="text-primary">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-9">
          {siteData.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-8 ml-2 border-l border-border pl-8">
            <a
              href={siteData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => track("github_clicked", { location: "navbar" })}
            >
              <Github size={18} />
            </a>
            <a
              href={siteData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => track("linkedin_clicked", { location: "navbar" })}
            >
              <Linkedin size={18} />
            </a>
            <a
              href={siteData.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium bg-primary text-primary-foreground px-3 py-1.5 rounded-md hover:opacity-90 transition-opacity"
              onClick={() => track("resume_clicked", { location: "navbar" })}
            >
              Resume
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 pb-6"
        >
          <div className="flex flex-col gap-4 pt-2">
            {siteData.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-base text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2 border-t border-border">
              <a
                href={siteData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github size={18} />
              </a>
              <a
                href={siteData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={siteData.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium bg-primary text-primary-foreground px-3 py-1.5 rounded-md"
              >
                Resume
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
