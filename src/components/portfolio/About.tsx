import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/site";

const ABOUT_IMAGES = [
  { src: "/syed.jpg", alt: "Syed Aashiq Ahamed" },
  { src: "/syed-thrissur.jpeg", alt: "Syed at Thrissur beach" },
  { src: "/syed-varkala.jpeg", alt: "Syed at varkala" },
];

const About = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % ABOUT_IMAGES.length);
    }, 3000);

    return () => window.clearInterval(id);
  }, []);

  const current = ABOUT_IMAGES[active];

  return (
    <section id="about" className="section-padding bg-card/50">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
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

          {/* Image (auto-rotating, premium crossfade) */}
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <div
              className="
                w-56 sm:w-64 md:w-[320px] lg:w-[400px]
                overflow-hidden rounded-2xl border border-border/60 bg-muted
                shadow-lg ring-1 ring-foreground/5
              "
            >
              <div className="aspect-square w-full relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.src}
                    src={current.src}
                    alt={current.alt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-[50%_25%]"
                    initial={{ opacity: 0, scale: 1.03, filter: "blur(6px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.99, filter: "blur(6px)" }}
                    transition={{
                      duration: 0.75,
                      ease: [0.22, 1, 0.36, 1], // premium easeOut
                    }}
                  />
                </AnimatePresence>

                {/* Subtle overlay (premium depth) */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
