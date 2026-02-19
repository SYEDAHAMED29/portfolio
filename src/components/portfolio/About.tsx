import { motion } from "framer-motion";
import { siteData } from "@/data/site";

const About = () => {
  return (
    <section id="about" className="section-padding bg-card/50">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="
            flex flex-col-reverse items-start gap-10
            md:flex-row md:items-center md:justify-between md:gap-20
          "
        >
          {/* Text */}
          <div className="min-w-0">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
              About
            </h2>

            <div className="max-w-2xl space-y-4">
              {siteData.about.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-muted-foreground leading-relaxed text-base lg:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <div
              className="
                w-56 sm:w-64 md:w-[320px] lg:w-[400px]
                overflow-hidden rounded-2xl border border-border/60 bg-muted
                shadow-lg ring-1 ring-foreground/5
              "
            >
              <div className="aspect-square w-full">
                <img
                  src="/syed.jpg"
                  alt="Syed Aashiq Ahamed"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-[50%_25%]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
