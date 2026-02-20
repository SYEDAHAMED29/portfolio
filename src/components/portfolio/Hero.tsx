import { motion } from "framer-motion";
import { siteData } from "@/data/site";
import { Circle } from "lucide-react";
import CodeCard from "./CodeCard";
import { track, trackOutbound } from "@/lib/analytics";
import { useSectionView } from "@/hooks/useSectionView";

const Hero = () => {
  useSectionView("hero");
  return (
    <section
      className="min-h-screen flex items-center section-padding pt-28 md:pt-20"
      id="hero"
    >
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 text-sm font-mono text-code-string bg-secondary rounded-full px-3 py-1.5 mb-6 border border-pill-border">
              <Circle size={6} className="fill-current" />
              {siteData.status}
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[60px] font-bold leading-tight tracking-tight text-foreground mb-4">
              {siteData.hero.headline}
            </h1>

            <p className="text-muted-foreground text-lg  leading-relaxed mb-6 max-w-lg">
              <p className="text-muted-foreground text-base sm:text-lg mb-2">
                SDE-1 building product at{" "}
                <a
                  href={siteData.companies.beamer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline decoration-border hover:decoration-foreground underline-offset-4"
                  onClick={() =>
                    trackOutbound("company_beamer", siteData.companies.beamer)
                  }
                >
                  Beamer
                </a>{" "}
                ×{" "}
                <a
                  href={siteData.companies.userflow}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline decoration-border hover:decoration-foreground underline-offset-4"
                  onClick={() =>
                    trackOutbound(
                      "company_userflow",
                      siteData.companies.userflow,
                    )
                  }
                >
                  Userflow
                </a>
                .
              </p>
              {siteData.hero.subtext}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {siteData.hero.badges.map((badge) => (
                <span
                  key={badge}
                  className="text-sm font-mono bg-pill text-pill-foreground border border-pill-border rounded-md px-2.5 py-1"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#experience"
                className="inline-flex items-center font-medium text-base bg-primary text-primary-foreground px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity"
                onClick={() =>
                  track("cta_click", {
                    cta: "view_experience",
                    location: "hero",
                  })
                }
              >
                View Experience
              </a>
              <a
                href={`mailto:${siteData.email}`}
                className="inline-flex items-center font-medium text-base border border-border text-foreground px-5 py-2.5 rounded-md hover:bg-secondary transition-colors"
                onClick={() => track("email_click", { location: "hero" })}
              >
                Email me
              </a>
            </div>
          </motion.div>

          {/* Right — Code Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <CodeCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
