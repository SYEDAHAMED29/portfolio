import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/site";
import { ChevronDown, ImageOff } from "lucide-react";

const CaseStudies = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="case-studies" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-10">Case Studies</h2>
        </motion.div>

        <div className="space-y-4">
          {siteData.caseStudies.map((cs, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="border border-border rounded-lg bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/30 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{cs.title}</h3>
                    <div className="flex gap-1.5 mt-2">
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono bg-pill text-pill-foreground border border-pill-border rounded px-2 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-muted-foreground transition-transform shrink-0 ml-4 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 space-y-4 border-t border-border pt-4">
                        <div>
                          <h4 className="text-xs font-mono text-primary uppercase tracking-wider mb-1">Problem</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{cs.problem}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-mono text-primary uppercase tracking-wider mb-1">Constraints</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{cs.constraints}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-mono text-primary uppercase tracking-wider mb-1">What I Built</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{cs.built}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-mono text-primary uppercase tracking-wider mb-1">Impact</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{cs.impact}</p>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t border-border">
                          <ImageOff size={14} />
                          <span>Screenshots coming soon</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
