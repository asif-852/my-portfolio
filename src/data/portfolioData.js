// ============================================================
//  portfolioData.js — Single source of truth for portfolio content
//  Update this file to personalise the portfolio.
// ============================================================

export const personalInfo = {
  name: "Asif Azam Biswas",
  role: "Full-Stack Developer",
  tagline: "I build elegant, performant web experiences.",
  bio: [
    "Hi! I'm Asif, a passionate Full-Stack Developer with 4+ years of experience crafting digital solutions that are both beautiful and functional.",
    "I specialise in JavaScript ecosystems — from React on the front end to Node.js on the back end — and I love turning complex problems into clean, intuitive products.",
  ],
  location: "Rajshahi, Bangladesh",
  email: "asifazambiswas@gmail.com",
  resumeUrl: "#", // replace with actual resume URL
  avatarUrl: null, // replace with URL or import an image
  social: {
    github: "https://github.com/asif-852",
    linkedin: "https://www.linkedin.com/in/asif-azam-biswas-bb6995229/",
    twitter: "https://x.com/AsifAzam7267304",
  },
};

export const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "HTML", "CSS"] },
  { category: "Backend", items: ["Node.js", "NestJS", "Express", "Python", "REST APIs", "GraphQL"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "Prisma"] },
  { category: "DevOps & Tools", items: ["Docker", "AWS", "Git", "Vite", "Figma"] },
];

export const projects = [
  {
    id: 1,
    title: "ShopSphere",
    description:
      "A full-featured e-commerce platform with real-time inventory, Stripe payments, and a custom admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "DevConnect",
    description:
      "A developer social network where engineers share projects, collaborate on code, and hire talent.",
    tags: ["Next.js", "GraphQL", "MongoDB", "TailwindCSS"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "TaskFlow",
    description:
      "A Kanban-style project management tool with drag-and-drop, real-time sync, and team workspaces.",
    tags: ["React", "Firebase", "TypeScript", "DnD Kit"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "WeatherNow",
    description:
      "A clean weather dashboard using OpenWeatherMap API with animated weather states and 7-day forecasts.",
    tags: ["React", "REST API", "CSS Animations"],
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "MarkdownPro",
    description:
      "A live Markdown editor with GitHub-flavored syntax highlighting, PDF export, and cloud saves.",
    tags: ["React", "Node.js", "AWS S3"],
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "CryptoTrack",
    description:
      "A cryptocurrency portfolio tracker with live prices, customisable alerts, and historical charts.",
    tags: ["React", "WebSockets", "Chart.js"],
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
  },
];

export const experience = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "TechNova Inc.",
    period: "Jun 2022 – Present",
    location: "San Francisco, CA",
    responsibilities: [
      "Led the migration of a legacy jQuery app to React 18, improving load times by 40%.",
      "Architected a component library used across 6 product teams.",
      "Mentored 3 junior developers and conducted weekly code reviews.",
    ],
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "Axiom Labs",
    period: "Jan 2021 – May 2022",
    location: "Remote",
    responsibilities: [
      "Built RESTful APIs in Node.js + Express serving 200k+ daily active users.",
      "Integrated Stripe and PayPal payment flows, handling $2M+ in transactions.",
      "Optimised PostgreSQL queries, reducing average response time by 55%.",
    ],
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "Pixel Studio",
    period: "Jul 2019 – Dec 2020",
    location: "Austin, TX",
    responsibilities: [
      "Developed responsive landing pages for 15+ client brands.",
      "Built an internal CMS using React and Headless WordPress.",
      "Collaborated closely with the design team to implement pixel-perfect UIs.",
    ],
  },
];

export const navLinks = [
  { label: "About", to: "about" },
  { label: "Projects", to: "projects" },
  { label: "Experience", to: "experience" },
  { label: "Contact", to: "contact" },
];
