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
    category: "Backend Development",
    items: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", Icon: SiExpress, color: GREY },
      { name: "Java", Icon: FaJava, color: "#F89820" },
      { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
      { name: "Fastify", Icon: SiFastify, color: GREY },
      { name: "Redis", Icon: SiRedis, color: "#FF4438" },
      { name: "Vertex AI", Icon: SiGooglecloud, color: "#4285F4" },
      { name: "Genkit", Icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    category: "Frontend Development",
    items: [
      { name: "Next.js", Icon: SiNextdotjs, color: GREY },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Vue.js", Icon: SiVuedotjs, color: "#4FC08D" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", Icon: SiCss3, color: "#1572B6" },
      { name: "Redux", Icon: SiRedux, color: "#764ABC" },
      { name: "Redux Toolkit", Icon: SiRedux, color: "#764ABC" },
      { name: "Pinia", Icon: null, color: "#FFD859" },
      { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
      { name: "Element Plus", Icon: null, color: "#409EFF" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "Firebase Firestore", Icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    category: "DevOps / Cloud",
    items: [
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
      { name: "Google Cloud", Icon: SiGooglecloud, color: "#4285F4" },
      { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: SiGithub, color: GREY },
      { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
    ],
  },
  {
    category: "Other Tools",
    items: [
      { name: "Flutter", Icon: SiFlutter, color: "#02569B" },
      { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
      { name: "Claude Code", Icon: SiAnthropic, color: "#D97757" },
      { name: "Gemini", Icon: SiGooglegemini, color: "#8E75B2" },
      { name: "Codex", Icon: SiOpenai, color: GREY },
    ],
  },
];

// The dozen shown on the homepage; the rest live on /experience#stack.
export const stackHighlights = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "Google Cloud",
  "Docker",
  "Kubernetes",
  "Vertex AI",
];

export const stackCount = stack.reduce((n, group) => n + group.items.length, 0);
