export const siteData = {
  name: "Syed Aashiq Ahamed",
  role: "Frontend / Product Engineer",
  company: "Beamer × Userflow",
  title: "SDE-1",
  location: "Coimbatore, India",
  email: "hello@syedahamed.in",
  linkedin: "https://www.linkedin.com/in/syed-aashiq-ahamed-6180a9187/",
  github: "https://github.com/SyedAHAMED29",
  resumePath: "/Resume.SyedAashiqAhamed.pdf",
  status: "Currently: shipping + fixing edge cases",
  companies: {
    beamer: "https://www.getbeamer.com",
    userflow: "https://userflow.com",
  },
  hero: {
    headline: "I build React frontends that ship",
    subtext:
      "I modernize legacy JSP UI into fast, maintainable React systems. Auth, billing, dashboards, and all the annoying edge cases.",
    badges: ["React", "TypeScript", "Vite", "React Query", "Java", "GraphQL"],
  },

  codeCard: {
    filename: "developer.ts",
    object: `const syed = {
  role: "Frontend / Product Engineer",
  basedIn: "Coimbatore, India",
  builds: [
    "JSP → React migrations",
    "Billing UX & dashboards",
    "UI reliability (edge cases)",
  ],
  setup: [
    "editor: VS Code (Atom One Dark Pro)",
    "terminal: iterm",
    "testing: Vitest",
    "styling: Tailwind (depending on project)",
  ],
  principles: [
    "clean UX",
    "predictable state",
    "fast shipping (without breaking prod)",
  ],
  openTo: "Frontend roles",
}`,
  },

  about: [
    "Hi, I’m Syed, based in Coimbatore. Apart from work, I spend a lot of time exploring other products, trying to recreate them, and thinking about startups and ideas of my own. I like getting hands-on with things and prefer not to be limited to a strict set of roles. I learn best by getting my hands dirty and figuring things out as I go.",
    "When I’m not coding, you’ll probably find me running, playing table tennis, checking out fancy cafés, or drinking a lot of tea.",
  ],

  experience: [
    {
      company: "Beamer × Userflow",
      icons: ["/company/beamer.svg", "/company/userflow.svg"],
      role: "SDE-1 (Frontend )",
      period: "2023 — Present",
      stack: [
        "React",
        "TypeScript",
        "Vite",
        "React Query",
        "Java",
        "MySQL",
        "GraphQL",
        "Vitest",
        "Cloudfare workers",
        "Google cloud functions",
      ],
    },
    {
      company: "Movate",
      icons: ["/company/movate.svg"],
      role: "Associate Developer",
      period: "2022 — 2023",
      stack: ["JavaScript", "React", "Node.js"],
      bullets: [
        "Developed internal tooling dashboards for support operations, reducing manual workflows.",
        "Collaborated with cross-functional teams to ship frontend features on tight timelines.",
      ],
    },
    {
      company: "CSS Corp",
      icons: ["/company/csscorp.png"],
      role: "Intern",
      period: "2021 — 2022",
      stack: ["HTML", "CSS", "JavaScript"],
      bullets: [
        "Built and maintained web interfaces for internal tools, gaining foundational frontend experience.",
      ],
    },
  ],

  skills: {
    categories: [
      {
        title: "Frontend Systems",
        icon: "Monitor",
        items: [
          "React",
          "TypeScript",
          "Next.js",
          "React Query",
          "Tailwind",
          "Stylus",
        ],
      },
      {
        title: "Backend Enough to Ship",
        icon: "Server",
        items: [
          "Java",
          "Node.js",
          "REST",
          "GraphQL",
          "MySQL",
          "PostgreSQL",
          "MongoDB",
        ],
      },
      {
        title: "Tooling & DX",
        icon: "Wrench",
        items: ["Vite", "Webpack", "Vitest", "ESLint", "Prettier", "Figma"],
      },
    ],
    knownFor: [
      "Fixing the weird stuff nobody wants to touch",
      "Being allergic to flaky UI states",
      "Predictable state and boring-but-solid solutions",
      "Shipping fast without creating future pain",
    ],
  },

  caseStudies: [
    {
      title: "Auth Migration: JSP → React",
      tags: ["React", "Auth", "Migration"],
      problem:
        "The existing authentication flow was built in JSP — tightly coupled, hard to maintain, and causing a poor user experience with inconsistent states.",
      constraints:
        "Had to migrate incrementally without breaking production auth for thousands of active users. No downtime allowed.",
      built:
        "Rebuilt the entire auth flow in React with proper state management, error boundaries, and session handling. Coordinated with backend team on API contracts.",
      impact:
        "+32% increase in signups after migration. Reduced auth-related support tickets by over 60%.",
      screenshot: null,
    },
    {
      title: "Billing UI with Stripe",
      tags: ["React", "Stripe", "Billing"],
      problem:
        "Billing was handled through a mix of legacy forms and direct Stripe dashboard interactions. Users couldn't self-serve upgrades, downgrades, or understand proration.",
      constraints:
        "Complex proration logic, multiple plan tiers, and edge cases around trial periods and failed payments.",
      built:
        "Built a complete Billing UI in React — plan selection, upgrade/downgrade flows, proration previews, payment method management, and invoice history.",
      impact:
        "Self-serve billing reduced support load. Proration clarity cut billing-related tickets significantly.",
      screenshot: null,
    },
    {
      title: "AI Content Generator",
      tags: ["React", "AI", "Product Feature"],
      problem:
        "Users struggled to write engaging changelog posts, leading to low-quality updates and reduced reader engagement.",
      constraints:
        "Had to integrate seamlessly into existing post editor. Generation quality had to be good enough to ship without heavy editing.",
      built:
        "Built an AI-powered content generator within the changelog post editor — users describe what changed, AI drafts the post with appropriate tone and formatting.",
      impact:
        "~21% usage adoption within weeks. Improved average post quality and publishing frequency.",
      screenshot: null,
    },
  ],

  writing: {
    posts: [
      {
        title: "How I migrated a JSP auth flow to React without breaking prod",
        description:
          "Incremental migration strategies, API contracts, and what I learned about shipping auth.",
        status: "coming-soon" as const,
      },
      {
        title:
          "Stripe proration UI: states you'll miss until support tickets teach you",
        description: "Edge cases in billing UX that no docs prepare you for.",
        status: "coming-soon" as const,
      },
      {
        title: "React Query caching patterns that actually reduce bugs",
        description:
          "Practical patterns from production — stale time, cache keys, and invalidation strategies.",
        status: "coming-soon" as const,
      },
    ],
  },

  contact: {
    closingLine:
      "If you’re building cool stuff and need a frontend guy, hit me up.",
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    // { label: "Case Studies", href: "#case-studies" },
    // { label: "Writing", href: "#writing" },
    { label: "Contact", href: "#contact" },
  ],
};
