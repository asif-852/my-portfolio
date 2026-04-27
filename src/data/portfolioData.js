// ============================================================
//  portfolioData.js — Single source of truth for portfolio content
//  Update this file to personalise the portfolio.
// ============================================================

import codeforcesIcon from '../assets/icons/Codeforces_logo.png';
import leetcodeIcon from '../assets/icons/Leetcode_logo.png';
import hackerrankIcon from '../assets/icons/HackerRank_logo.png';
import csessIcon from '../assets/icons/CSES_logo.jpg';
import lightojIcon from '../assets/icons/LightOJ_logo.jpg';
import timusIcon from '../assets/icons/Timus_logo.png';
import spojIcon from '../assets/icons/SPOJ_logo.jpg';
import atcoderIcon from '../assets/icons/atcoder_logo_1.png';
import codechefIcon from '../assets/icons/Codechef_logo.png';

export const personalInfo = {
  name: "Asif Azam Biswas",
  role: "B.Sc. in CSE @RUET | Aspiring Backend Engineer",
  tagline: "Passionate about backend systems and staying at the cutting edge of tech.",
  bio: [
    "Hi! I'm Asif, a B.Sc. in CSE student @RUET with a deep passion for backend engineering, systems design, and competitive programming. I love digging into the core of how things work.",
    "My interests span algorithms & data structures, database internals, API design, and building efficient, well-engineered software. I'm always exploring new technologies and sharpening my problem-solving skills.",
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
  { category: "Frontend", items: ["React", "JavaScript", "TypeScript", "HTML", "CSS"] },
  { category: "Backend", items: ["Node.js", "NestJS", "Express", "Python", "REST APIs"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "Prisma"] },
  { category: "DevOps & Tools", items: ["Docker", "Git", "Github", "Linux", "Bash"] },
];

export const education = [
  {
    id: 1,
    institute: "Rajshahi University of Engineering & Technology (RUET)",
    degree: "B.Sc. in Computer Science & Engineering",
    year: "2022 – Present",   // replace with your actual passing / expected year
    grade: "CGPA: 3.46",        // replace with your actual grade, e.g. "CGPA: 3.75 / 4.00"
  },
  // {
  //   id: 2,
  //   institute: "Your College Name",  // replace
  //   degree: "Higher Secondary Certificate (HSC)",
  //   year: "2021",             // replace with your passing year
  //   grade: "GPA: —",         // replace with your actual grade
  // },
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
    title: "Competitive Programming & Problem Solving",
    description:
      "A comprehensive archive of problem solutions across various online judges, covering numerous algorithm categories. Includes battle-tested C++ templates for various algorithms and data structures, along with curated learning resources.",
    tags: ["C++", "Python", "Algorithms", "Data Structures", "Dynamic Programming", "Graph Theory", "LeetCode", "CSES"],
    repoUrl: "https://github.com/asif-852/Competitive-Programming-and-Problem-Solving",
    featured: false,
  },
  {
    id: 5,
    title: "Database Problems & Solutions",
    description:
      "A curated collection of SQL problem solutions from HackerRank and LeetCode SQL-50, covering query writing, joins, aggregations, subqueries, common table expressions, and window functions.",
    tags: ["SQL", "MySQL", "Database", "HackerRank", "LeetCode"],
    repoUrl: "https://github.com/asif-852/Database-Problems-and-Solutions",
    featured: false,
  },
  {
    id: 6,
    title: "CryptoTrack",
    description:
      "A cryptocurrency portfolio tracker with live prices, customisable alerts, and historical charts.",
    tags: ["React", "WebSockets", "Chart.js"],
    repoUrl: "#",
    featured: false,
  },
];

// ============================================================
//  Toggle this flag to show/hide the Experience section on the portfolio.
//  Set to `true` when you have real experience to showcase.
// ============================================================
export const showExperience = false;

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

// ============================================================
//  Competitive Programming Profiles
//  featured: true  → shown as a highlighted card (max 3)
//  featured: false → shown in the "Other Platforms" grid
//  iconUrl: replace null with the path to your platform icon image
// ============================================================
export const cpProfiles = [
  {
    id: 1,
    platform: "Codeforces",
    handle: "_LowIQ_",        // replace with your actual handle
    profileUrl: "https://codeforces.com/profile/_LowIQ_", // replace with actual URL
    iconUrl: codeforcesIcon,         // e.g. import cfIcon from '../assets/icons/codeforces.png'
    stats: "Max Rating: 1207 (Pupil)",   // e.g. "Max Rating: 1234 (Pupil)"
    featured: true,
  },
  {
    id: 2,
    platform: "LeetCode",
    handle: "asifazam2001",        // replace with your actual handle
    profileUrl: "https://leetcode.com/u/asifazam2001/", // replace with actual URL
    iconUrl: leetcodeIcon,         // e.g. import cfIcon from '../assets/icons/codeforces.png'
    stats: "Problems Solved: 486",
    featured: true,
  },
  {
    id: 3,
    platform: "HackerRank",
    handle: "Rohanbiswas2001",  // replace with your actual handle
    profileUrl: "https://www.hackerrank.com/profile/Rohanbiswas2001", // replace with actual URL
    iconUrl: hackerrankIcon,        // e.g. import cfIcon from '../assets/icons/codeforces.png'
    stats: "5 stars for C++, Python, Problem Solving and SQL",
    featured: true,
  },
  {
    id: 4,
    platform: "CSES",
    handle: "Rohanbiswas",               // replace with your handle
    profileUrl: "https://cses.fi/user/118379",
    iconUrl: csessIcon,
    stats: "100+ classical algorithmic problems solved",
    featured: false,
  },
  {
    id: 5,
    platform: "LightOJ",
    handle: "Asif Azam",               // replace with your handle
    profileUrl: "https://lightoj.com/user/user-9k0jtyeu",
    iconUrl: lightojIcon,
    stats: "Solved 50+ problems",
    featured: false,
  },
  {
    id: 6,
    platform: "Timus",
    handle: "Asif Azam",               // replace with your handle
    profileUrl: "https://acm.timus.ru/author.aspx?id=338402",
    iconUrl: timusIcon,
    stats: "Solved 60+ problems",
    featured: false,
  },
  {
    id: 7,
    platform: "SPOJ",
    handle: "Rohanbiswas",               // replace with your handle
    profileUrl: "https://www.spoj.com/users/rohanbiswas/",
    iconUrl: spojIcon,
    stats: "30+ Problems Solved",
    featured: false,
  },
  {
    id: 8,
    platform: "AtCoder",
    handle: "Rohanbiswas",               // replace with your handle
    profileUrl: "https://atcoder.jp/users/Rohanbiswas",
    iconUrl: atcoderIcon,
    stats: "60+ Problems Solved",
    featured: false,
  },
  {
    id: 9,
    platform: "CodeChef",
    handle: "rohanbiswas",               // replace with your handle
    profileUrl: "https://www.codechef.com/users/rohanbiswas",
    iconUrl: codechefIcon,
    stats: "60+ Problems Solved",
    featured: false,
  },
];

export const navLinks = [
  { label: "About", to: "about" },
  { label: "Projects", to: "projects" },
  { label: "CP Profiles", to: "cp-profiles" },
  { label: "Contact", to: "contact" },
];
