export const siteData = {
  name: "Syed Aashiq Ahamed",
  role: "SDE-1 / Software Engineer",
  company: "Userflow",
  title: "SDE-1",
  location: "Coimbatore, India",
  email: "hello@syedahamed.in",
  linkedin: "https://www.linkedin.com/in/syed-aashiq-ahamed-6180a9187/",
  github: "https://github.com/SyedAHAMED29",
  resumePath: "/Resume-Syed.pdf",
  status: "Shipping the React Native SDK at Userflow",
  companies: {
    beamer: "https://www.getbeamer.com",
    userflow: "https://userflow.com",
  },
  hero: {
    // The hero greeting cycles through these; the first one is what renders
    // without JavaScript. Tamil first, since home is Coimbatore.
    greetings: [
      { text: "வணக்கம்", lang: "ta" },
      { text: "Hello", lang: "en" },
      { text: "नमस्ते", lang: "hi" },
      { text: "Hola", lang: "es" },
      { text: "നമസ്കാരം", lang: "ml" },
      { text: "Bonjour", lang: "fr" },
      { text: "నమస్తే", lang: "te" },
      { text: "こんにちは", lang: "ja" },
      { text: "ನಮಸ್ಕಾರ", lang: "kn" },
      { text: "Ciao", lang: "it" },
      { text: "안녕하세요", lang: "ko" },
      { text: "Hallo", lang: "de" },
      { text: "你好", lang: "zh" },
      { text: "Olá", lang: "pt" },
      { text: "Привет", lang: "ru" },
      { text: "Merhaba", lang: "tr" },
      { text: "Γεια σου", lang: "el" },
      { text: "Jambo", lang: "sw" },
    ],
    badges: ["React", "TypeScript", "React Native", "Expo", "GraphQL"],
    exploring: ["RAG", "GraphRAG", "AI agents"],
    timeZone: "Asia/Kolkata",
  },

  codeCard: {
    filename: "syed.ts",
    object: `export const syed = {
  role: "Software Engineer @ Userflow",
  basedIn: "Coimbatore, India",
  exploring: [
    "RAG", "GraphRAG", "AI agents",
  ],
  principles: [
    "Own it end to end",
    "Ship fast, leave no mess",
  ],
  async ship(idea: Idea) {
    const spec = await clarify(idea);
    return build(spec).test().release();
  },
} satisfies Engineer;`,
  },

  about: {
    lead: "Hi, I’m Syed. I’m a software engineer in Coimbatore, and I’ve spent 4+ years building SaaS products across frontend, mobile, and backend.",
    body: [
      "Most of my work sits where things tend to break: SDKs that run inside other people’s apps, live connections between a phone and a web builder, and AI features that people actually use.",
      "Off the clock: running, table tennis, fancy cafés, and far too much tea.",
    ],
  },

  skills: {
    categories: [
      {
        title: "Frontend",
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
        items: ["Node.js", "PostgreSQL", "GraphQL", "Stripe", "GraphRAG & OCR"],
      },
      {
        title: "AI Tooling",
        items: [
          "Claude Code",
          "Codex",
          "Chrome DevTools MCP",
          "Agent Call Stack MCP",
          "Astro Docs MCP",
          "Herdr",
          "Hindsight",
          "Graphify",
        ],
      },
      {
        title: "Quality & Delivery",
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
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    // { label: "Case Studies", href: "#case-studies" },
    // { label: "Writing", href: "#writing" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "#contact" },
  ],
};
