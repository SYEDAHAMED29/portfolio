import { motion } from "framer-motion";
import { siteData } from "@/data/site";
import { Monitor, Server, Wrench, Zap } from "lucide-react";
import { useSectionView } from "@/hooks/useSectionView";

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={20} />,
  Server: <Server size={20} />,
  Wrench: <Wrench size={20} />,
};

const Skills = () => {
  useSectionView("skills");
  return (
    <section id="skills" className="section-padding bg-card/50">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-10">
            Skills
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {siteData.skills.categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-border rounded-lg p-5 bg-background"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-primary">{iconMap[cat.icon]}</span>
                <h3 className="font-display font-semibold text-base text-foreground">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm font-mono bg-pill text-pill-foreground border border-pill-border rounded px-2 py-0.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Known for */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="border border-border rounded-lg p-5 bg-background"
        >
          <div className="flex items-center gap-2.5 mb-4">
            <Zap size={18} className="text-primary" />
            <h3 className="font-display font-semibold text-base text-foreground">
              Known for
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-2">
            {siteData.skills.knownFor.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-base text-muted-foreground"
              >
                <span className="text-primary">→</span>
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
