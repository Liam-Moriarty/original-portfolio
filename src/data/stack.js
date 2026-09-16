import {
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiPython,
  SiFastapi,
  SiFastify,
  SiRedis,
  SiNextdotjs,
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiVuedotjs,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiFlutter,
  SiPostman,
  SiAnthropic,
  SiGooglegemini,
  SiOpenai,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

// `color` is the brand colour. Chips render it under a grayscale filter and
// release it on hover, so a wall of 40 logos stays calm until you point at one.
// Icons that are white in their own branding are nudged to a light grey so they
// stay visible against the dark background. `Icon: null` falls back to a monogram.
const GREY = "#E5E7EB";

export const stack = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js", Icon: SiNextdotjs, color: GREY, featured: true },
      { name: "React", Icon: SiReact, color: "#61DAFB", featured: true },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6", featured: true },
      { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4", featured: true },
      { name: "Vue.js", Icon: SiVuedotjs, color: "#4FC08D" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", Icon: SiCss3, color: "#1572B6" },
      { name: "Redux", Icon: SiRedux, color: "#764ABC" },
      { name: "Redux Toolkit", Icon: SiRedux, color: "#764ABC" },
      { name: "Pinia", Icon: null, color: "#FFD859" },
      { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
      { name: "Element Plus", Icon: null, color: "#409EFF" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E", featured: true },
      { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F", featured: true },
      { name: "Python", Icon: SiPython, color: "#3776AB", featured: true },
      { name: "Vertex AI", Icon: SiGooglecloud, color: "#4285F4", featured: true },
      { name: "Express", Icon: SiExpress, color: GREY },
      { name: "Java", Icon: FaJava, color: "#F89820" },
      { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
      { name: "Fastify", Icon: SiFastify, color: GREY },
      { name: "Redis", Icon: SiRedis, color: "#FF4438" },
      { name: "Genkit", Icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    category: "DevOps / Cloud",
    items: [
      { name: "Docker", Icon: SiDocker, color: "#2496ED", featured: true },
      { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5", featured: true },
      { name: "Google Cloud", Icon: SiGooglecloud, color: "#4285F4", featured: true },
      { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
      { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: SiGithub, color: GREY },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1", featured: true },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248", featured: true },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "Firebase Firestore", Icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    category: "Other Skills",
    items: [
      { name: "Flutter", Icon: SiFlutter, color: "#02569B", featured: true },
      { name: "Claude Code", Icon: SiAnthropic, color: "#D97757", featured: true },
      { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
      { name: "Gemini", Icon: SiGooglegemini, color: "#8E75B2" },
      { name: "Codex", Icon: SiOpenai, color: GREY },
    ],
  },
];

// The homepage shows only the `featured` picks per category; /experience#stack
// carries the lot, grouped the same way.
export const featuredStack = stack
  .map((group) => ({
    category: group.category,
    items: group.items.filter((item) => item.featured),
  }))
  .filter((group) => group.items.length);

export const stackCount = stack.reduce((n, g) => n + g.items.length, 0);

export const featuredCount = featuredStack.reduce(
  (n, g) => n + g.items.length,
  0
);
