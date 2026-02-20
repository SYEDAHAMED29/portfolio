import React from "react";
import { motion } from "framer-motion";
// import { siteData } from "@/data/site"; // not needed anymore for experience
import { Briefcase } from "lucide-react"; // keep it if you want fallback later

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  icons?: string[];
  stack: string[];
  bullets: React.ReactNode[];
};

const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Beamer × Userflow",
    role: "SDE-1 (Frontend / Product Engineer)",
    period: "November 2023 — Present",
    icons: ["/company/beamer.svg", "/company/userflow.svg"],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "React Query",
      "Java",
      "MySQL",
      "GraphQL",
      "Vitest",
      "Cloudflare Workers",
      "Google Cloud Functions",
    ],
    bullets: [
      <>
        Migrated auth from legacy JSP to React, driving a{" "}
        <span className="text-foreground font-medium">+32% increase</span> in
        signups.
      </>,
      <>
        Rebuilt billing UI with Stripe, proration, upgrade/downgrade flows, and
        edge-case handling.
      </>,
      <>
        Shipped dashboard frontend with reusable component patterns + caching,
        cutting redundant API calls.
      </>,
      <>
        Built post templates and reached{" "}
        <span className="text-foreground font-medium">~18% adoption</span>{" "}
        across users.
      </>,
      <>
        Built an AI content generator and hit{" "}
        <span className="text-foreground font-medium">~21% usage</span> within
        weeks of launch.
      </>,
      <>
        Improved NPS tooling with backend schema updates + scheduled jobs via{" "}
        Google Cloud Functions.
      </>,
      <>
        <span className="text-foreground font-medium">Resolved 120+</span>{" "}
        support issues across edge cases, stability fixes, and UX improvements.
      </>,
    ],
  },
  {
    company: "Movate",
    role: "Associate Developer",
    period: "June 2022 — August 2023",
    icons: ["/company/movate.svg"],
    stack: ["JavaScript", "React", "Node.js"],
    bullets: [
      <>
        Built internal tooling dashboards that reduced manual work and improved
        team speed.
      </>,
      <>
        Shipped frontend features in tight timelines, collaborating with support
        and engineering.
      </>,
    ],
  },
  {
    company: "CSS Corp",
    role: "Intern",
    period: "January 2022 - June 2022",
    icons: ["/company/csscorp.png"],
    stack: ["HTML", "CSS", "JavaScript"],
    bullets: [
      <>
        Did the classic intern thing, built UI, fixed bugs, and learned by
        breaking stuff (then fixing it).
      </>,
    ],
  },
];

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
          {EXPERIENCE.map((exp, i) => (
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
                  <div className="mt-0.5 p-1 rounded-md bg-secondary">
                    <div className="flex items-center gap-2">
                      {(exp.icons ?? []).map((src) => (
                        <img
                          key={src}
                          src={src}
                          alt={`${exp.company} logo`}
                          className="sm:w-12 sm:h-12 h-4 w-4 object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      ))}
                    </div>
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
