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
  status: "Open to opportunities",

  hero: {
    headline: "I build React frontends that ship",
    subtext:
      "SDE-1 @ Beamer × Userflow. I modernize legacy JSP UI into fast, maintainable React systems (Auth, Billing, Dashboards).",
    badges: ["React", "TypeScript", "Vite", "React Query", "Java", "GraphQL"],
  },

  codeCard: {
    filename: "developer.ts",
    object: `const syed = {
  role: "Frontend / Product Engineer",
  basedIn: "India",
  ships: [
    "Auth migrations",
    "Billing UX",
    "UI systems",
  ],
  stack: [
    "React", "TypeScript", "Vite",
    "React Query", "Java", "GraphQL",
  ],
  values: [
    "clean UX",
    "predictable state",
    "fast shipping",
  ],
  currentlyBuilding: "Typing + AI product",
  openTo: "Frontend / Full-stack product roles",
}`,
  },

  about: [
    "I'm a frontend engineer who cares deeply about DX and end-user experience — not because it's trendy, but because shipping reliable UI in production is hard, and cutting corners compounds into chaos.",
    "Most of my work at Beamer has been migrations: taking legacy JSP flows (auth, billing, dashboards) and rebuilding them in React with clean state management, React Query caching, and predictable UX.",
    "I believe in predictable state over clever abstractions, real-user feedback over premature optimization, and shipping small, observable changes instead of big rewrites.",
  ],

  experience: [
    {
      company: "Beamer × Userflow",
      role: "SDE-1 (Frontend / Product Engineer)",
      period: "2023 — Present",
      stack: [
        "React",
        "TypeScript",
        "Vite",
        "React Query",
        "Java",
        "MySQL",
        "GraphQL",
      ],
      bullets: [
        "Migrated Auth from legacy JSP → React, improving UX reliability and driving a +32% increase in signups.",
        "Rebuilt Billing UI in React with Stripe integration — proration, upgrade/downgrade flows, edge-case handling.",
        "Shipped Dashboard frontend with reusable component patterns + React Query caching, cutting redundant API calls.",
        "Built Post Templates (React + Java/Hibernate + MySQL) — reached ~18% adoption across users.",
        "Built an AI content generator for changelog posts — hit ~21% usage within weeks of launch.",
        "Improved NPS tooling with backend schema updates + cron jobs via Google Cloud Functions.",
        "Resolved 120+ support issues spanning edge cases, stability fixes, and UX improvements.",
      ],
    },
    {
      company: "Movate",
      role: "Associate Software Engineer",
      period: "2022 — 2023",
      stack: ["JavaScript", "React", "Node.js"],
      bullets: [
        "Developed internal tooling dashboards for support operations, reducing manual workflows.",
        "Collaborated with cross-functional teams to ship frontend features on tight timelines.",
      ],
    },
    {
      company: "Internship",
      role: "Software Engineering Intern",
      period: "2021 — 2022",
      stack: ["HTML", "CSS", "JavaScript", "Python"],
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
      "Legacy → React migrations",
      "Billing UX (Stripe/proration)",
      "UI reliability (support-driven fixes)",
      "Clean state & data fetching patterns",
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
      "If you're hiring for frontend/product engineers, I'd love to talk.",
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
