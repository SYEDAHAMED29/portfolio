export const siteData = {
  name: "Syed Aashiq Ahamed",
  role: "SDE-1 / Software Engineer",
  company: "Userflow",
  title: "SDE-1",
  location: "Coimbatore, India",
  email: "hello@syedahamed.in",
  linkedin: "https://www.linkedin.com/in/syed-aashiq-ahamed-6180a9187/",
  github: "https://github.com/SyedAHAMED29",
  resumePath: "/Resume.SyedAashiqAhamed.pdf",
  status: "Currently: building web, mobile, and AI-powered products",
  companies: {
    beamer: "https://www.getbeamer.com",
    userflow: "https://userflow.com",
  },
  hero: {
    headline: "I build products across web, mobile, and AI",
    subtext:
      "I build React and React Native products, from SDKs and onboarding infrastructure to modernized web applications and AI-powered features.",
    badges: [
      "React",
      "TypeScript",
      "React Native",
      "Expo",
      "Elixir",
      "GraphQL",
    ],
  },

  codeCard: {
    filename: "developer.ts",
    object: `const syed = {
  role: "Software Engineer",
  basedIn: "Bangalore, India",
  focus: [
    "React Native SDKs & mobile onboarding",
    "AI-powered product features",
    "Legacy product flows → React",
  ],
  impact: [
    "120-customer mobile opportunity",
    "+32% signups after auth migration",
    "120+ production issues resolved",
  ],
  worksWith: [
    "React / TypeScript / React Native",
    "Expo / Elixir / Phoenix / PostgreSQL",
    "GitHub Actions / CircleCI",
  ],
  currently: "shipping at Userflow",
}`,
  },

  about: [
    "Hi, I’m Syed, a software engineer based in Coimbatore with 4+ years of experience building SaaS products across frontend, mobile, and backend. I enjoy taking products from ambiguous requirements to reliable experiences—whether that means creating an SDK from scratch, modernizing a legacy application, or building an AI-powered feature.",
    "When I’m not coding, you’ll probably find me running, playing table tennis, checking out fancy cafés, or drinking a lot of tea.",
  ],

  experience: [
    {
      company: "Userflow",
      icons: ["/company/userflow.svg"],
      role: "Software Development Engineer I (SDE-1)",
      period: "October 2025 — Present",
      stack: [
        "React",
        "TypeScript",
        "React Native",
        "Expo",
        "GitHub Actions",
        "CircleCI",
        "Intercom",
        "HubSpot",
      ],
      bullets: [
        "Led development of Userflow’s React Native SDK from scratch, spanning SDK implementation, web-builder integration, customer requirements, delivery, and CI infrastructure.",
        "Extended onboarding infrastructure to React Native, opening a mobile upsell opportunity for 120 existing web customers with React Native apps.",
        "Built native onboarding components for iOS and Android, including device pairing, live flow previews, and reconnection handling between mobile apps and the web builder.",
        "Created a mobile QA delivery workflow for iOS TestFlight, iOS Simulator, and Android APK builds using GitHub Actions and CircleCI.",
        "Implemented AI-driven handover in the Adoption Agent, routing conversations to human support through integrations including Intercom and HubSpot.",
      ],
    },
    {
      company: "Beamer",
      icons: ["/company/beamer.svg"],
      role: "Software Development Engineer I (SDE-1)",
      period: "November 2023 — September 2025",
      stack: [
        "React",
        "TypeScript",
        "Java",
        "JSP",
        "Stripe",
        "Google Cloud Functions",
        "MySQL",
      ],
      bullets: [
        "Led the migration of the authentication system from JSP to React, improving reliability and UX while driving a 32% increase in signups.",
        "Modernized billing by replacing JSP flows with React and Stripe, supporting proration, upgrades, and downgrades while reducing billing-related UI issues.",
        "Built an AI-powered changelog content generator, reducing creation friction and reaching approximately 21% feature usage.",
        "Expanded NPS backend schemas and added cron-triggered Google Cloud Functions jobs to improve reporting reliability and operational workflows.",
        "Resolved 120+ support issues across edge cases, stability fixes, and UX improvements.",
      ],
    },
    {
      company: "Movate",
      icons: ["/company/movate.svg"],
      role: "Developer",
      period: "June 2022 — September 2023",
      stack: ["React", "TypeScript", "AWS Lex", "Figma", "Unit Testing"],
      bullets: [
        "Developed responsive React and TypeScript interfaces for enterprise applications used by 500+ internal users.",
        "Enhanced an AWS Lex chatbot and integrated it with React.",
        "Wrote unit tests, performed impact analysis, and translated Figma designs into responsive interfaces.",
      ],
    },
  ],

  skills: {
    categories: [
      {
        title: "Frontend",
        icon: "Monitor",
        items: [
          "React",
          "React Native",
          "TypeScript",
          "Next.js",
          "Astro",
          "React Query",
          "Tailwind CSS",
          "Stylus",
          "Expo Router",
        ],
      },
      {
        title: "SDKs & Mobile",
        icon: "Server",
        items: [
          "React Native SDKs",
          "Expo Development Builds",
          "React Navigation",
          "ESM & CommonJS",
          "npm Publishing",
          "Package Bundling",
        ],
      },
      {
        title: "Backend & Applied AI",
        icon: "Server",
        items: [
          "Elixir",
          "Phoenix",
          "Node.js",
          "PostgreSQL",
          "GraphQL",
          "Stripe",
          "GraphRAG & OCR",
        ],
      },
      {
        title: "Quality & Delivery",
        icon: "Wrench",
        items: [
          "Vitest",
          "ESLint",
          "Prettier",
          "GitHub Actions",
          "CircleCI",
          "TestFlight",
          "Docker",
        ],
      },
    ],
    knownFor: [
      "Leading SDK development from a blank slate to delivery",
      "Modernizing legacy applications without disrupting users",
      "Turning product requirements into reliable cross-platform flows",
      "Shipping quickly without creating future pain",
    ],
  },

  caseStudies: [
    {
      title: "React Native Onboarding SDK",
      tags: ["React Native", "SDK", "Mobile"],
      problem:
        "Userflow’s onboarding infrastructure needed to reach customers with React Native applications, while maintaining the product experience of the existing web builder.",
      constraints:
        "The SDK had to support iOS and Android, device pairing, live previews, reliable reconnection, and QA delivery across simulators, TestFlight, and APK builds.",
      built:
        "Led the React Native SDK from scratch, including native onboarding components, web-builder integration, CI infrastructure, and a mobile QA workflow.",
      impact:
        "Created a mobile upsell opportunity across 120 existing web customers with React Native apps.",
      screenshot: null,
    },
    {
      title: "AI-Powered Assessment & Content Platform",
      tags: ["React", "Elixir", "Phoenix", "GraphRAG"],
      problem:
        "Teachers, students, tutors, and coaching-centre educators need a structured way to author, retrieve, and use assessment content.",
      constraints:
        "The platform needs organisation-scoped data, canonical editor content, and useful source context for AI-assisted assessment workflows.",
      built:
        "Developing the authoring product with React, TypeScript, TipTap, Elixir, Phoenix, and PostgreSQL; digitizing scanned books with Chandra OCR and exploring GraphRAG retrieval.",
      impact:
        "Makes scanned educational content machine-readable and connects relevant topics and concepts for assessment creation.",
      screenshot: null,
    },
    {
      title: "Mobile App Intelligence & Reporting",
      tags: ["Android", "APK Analysis", "Reporting"],
      problem:
        "Sales and engineering teams need to evaluate prospects, technology stacks, and integration fit without manually investigating every mobile app.",
      constraints:
        "The analysis needs to reveal frameworks, installed SDKs, and third-party integrations from Android applications, then combine that with useful public context.",
      built:
        "Built a Similarweb-style intelligence tool that inspects JavaScript bundles, DEX class signatures, and native libraries in Android APKs.",
      impact:
        "Produces reports that combine technical findings, app-store metadata, and usage or audience estimates to support prospect qualification and outreach prioritization.",
      screenshot: null,
    },
  ],

  writing: {
    posts: [
      {
        title: "What it takes to ship a React Native SDK",
        description:
          "Lessons from building onboarding infrastructure across a mobile SDK and web builder.",
        status: "coming-soon" as const,
      },
      {
        title: "Modernizing JSP product flows with React",
        description:
          "The product and engineering considerations behind reliable incremental migrations.",
        status: "coming-soon" as const,
      },
      {
        title: "Using OCR and GraphRAG for educational content",
        description:
          "Exploring how digitized learning material can support AI-assisted assessment workflows.",
        status: "coming-soon" as const,
      },
    ],
  },

  contact: {
    closingLine:
      "If you’re building thoughtful web or mobile products, I’d love to hear from you.",
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
