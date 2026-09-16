// Grouped by employer so the full-history timeline can nest roles under a
// company. `start` / `end` are "YYYY-MM"; durations are derived at render time
// so "Present" roles never go stale.
// TODO(fernando): the Digiplus internship has no dates or responsibilities on
// the resume. Fill in `start`, `end`, `highlights` and `skills` when you have
// them and it will render like the others.
export const experience = [
  {
    company: "Hytel",
    initials: "HY",
    employment: "Full-time",
    location: "Cavite, PH",
    roles: [
      {
        title: "Junior AI Software Engineer",
        start: "2026-02",
        end: null,
        skills: [
          "Vertex AI",
          "Google Cloud",
          "Retrieval-Augmented Generation",
          "Agile",
        ],
        highlights: [
          "Integrated Google Vertex AI to develop AI-powered features, including a Retrieval-Augmented Generation (RAG) system that enabled context-aware responses using company knowledge bases and structured data sources.",
          "Led the modernization of a legacy application by redesigning core components, introducing AI-powered capabilities, improving application performance, enhancing system stability, and increasing long-term maintainability.",
          "Designed, deployed, and maintained cloud-based solutions on Google Cloud Platform (GCP), including configuring cloud services, managing application deployments, monitoring system performance, and ensuring scalability, reliability, and security of AI-driven applications.",
          "Contributed to the full software development lifecycle across multiple projects, participating in requirements gathering, system design, feature development, testing, deployment, and post-release maintenance.",
          "Collaborated with cross-functional teams in an Agile environment, actively participating in sprint planning, daily stand-ups, backlog refinement, code reviews, and iterative feature delivery.",
        ],
      },
    ],
  },
  {
    company: "FGP FortuneGod Philippines",
    initials: "FG",
    employment: "Full-time",
    location: "Pasay, PH",
    roles: [
      {
        title: "Web Developer",
        // Resume reads "09/2026 – 01/2026", which runs backwards. Read as 2025,
        // since the degree ended 07/2025 and Hytel started 02/2026.
        start: "2025-09",
        end: "2026-01",
        skills: ["Docker", "GitHub Actions", "REST APIs", "CI/CD"],
        highlights: [
          "Led the migration of the website from WordPress to a modern, scalable technology.",
          "Developed RESTful APIs to support dynamic content, data management, and frontend-backend communication.",
          "Implemented Git and GitHub workflows for version control, collaboration, and code review.",
          "Containerized frontend and backend applications using Docker to ensure consistent development and deployment environments.",
          "Built and maintained CI/CD pipelines using GitHub Actions for automated build, unit test, and deployment.",
        ],
      },
    ],
  },
  {
    company: "Digiplus Interactive Corp.",
    initials: "DI",
    employment: "Internship",
    location: null,
    roles: [
      {
        title: "Frontend Web Developer Intern",
        start: null,
        end: null,
        skills: [],
        highlights: [],
      },
    ],
  },
];

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const parse = (value) => {
  const [year, month] = value.split("-").map(Number);
  return { year, month };
};

export const formatMonth = (value) => {
  if (!value) return null;
  const { year, month } = parse(value);
  return `${MONTHS[month - 1]} ${year}`;
};

// "5 mos", "1 yr", "1 yr 2 mos"
export const formatDuration = (start, end) => {
  if (!start) return null;
  const from = parse(start);
  const to = end ? parse(end) : null;
  const now = new Date();
  const toYear = to ? to.year : now.getFullYear();
  const toMonth = to ? to.month : now.getMonth() + 1;

  const months = (toYear - from.year) * 12 + (toMonth - from.month) + 1;
  if (months <= 0) return null;

  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [];
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (rest) parts.push(`${rest} mo${rest > 1 ? "s" : ""}`);
  return parts.join(" ");
};

export const formatPeriod = (start, end) => {
  if (!start) return null;
  return `${formatMonth(start)} — ${end ? formatMonth(end) : "Present"}`;
};

// Flattened newest-first rows for the compact homepage table.
export const roleRows = experience.flatMap((company) =>
  company.roles.map((role) => ({
    year: role.start ? role.start.slice(0, 4) : "—",
    title: role.title,
    company: company.company,
    location: company.location,
  }))
);
