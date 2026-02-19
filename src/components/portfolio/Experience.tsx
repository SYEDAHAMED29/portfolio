import { motion } from "framer-motion";
import { siteData } from "@/data/site";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-10">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-8">
          {siteData.experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative border border-border rounded-lg p-6 bg-card hover:border-primary/20 transition-colors"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-2 rounded-md bg-secondary">
                    <Briefcase size={16} className="text-primary" />
                  </div>

                  <div>
                    <h3 className="font-display font-semibold text-foreground text-lg lg:text-xl">
                      {exp.company}
                    </h3>
                    <p className="text-base text-muted-foreground">
                      {exp.role}
                    </p>
                  </div>
                </div>

                <span className="text-sm font-mono text-muted-foreground whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              {/* Bullets */}
              <ul className="space-y-2 mb-4 ml-11">
                {exp.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="text-base text-muted-foreground leading-relaxed flex gap-2"
                  >
                    <span className="text-primary shrink-0">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Stack pills */}
              <div className="flex flex-wrap gap-1.5 ml-11">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono bg-pill text-pill-foreground border border-pill-border rounded px-2 py-0.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
