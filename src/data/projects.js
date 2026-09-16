import oorBanner from "/oorBanner.png";
import oorPlaylist from "/oorPlaylist.png";
import personalTaskMonitoring from "/personal-task-monitoring11.png";
import personalTaskMonitoringAlt from "/personal-task-monitoring.png";
import noSidebarBudgetTracker from "/noSidebarBudgetTracker.png";
import budgetTracker from "/budget-tracker.png";
import budgetIncome from "/budget-income.png";
import dashboardMain from "/dashboardMain.png";
import dashboard from "/dashboard.png";
import dailySales from "/dailySales.png";
import monthlySales from "/monthlySales.png";

// Status drives the dot colour and the label everywhere a project appears.
// Change the label text here once and it updates the gallery, the detail page
// and the "more projects" strip.
export const STATUS = {
  deployed: {
    label: "Already Deploy",
    dot: "bg-emerald-400",
    glow: "shadow-[0_0_10px_rgba(52,211,153,0.5)]",
  },
  pending: {
    label: "Pending Deploy",
    dot: "bg-amber-400",
    glow: "shadow-[0_0_10px_rgba(251,191,36,0.5)]",
  },
};

// TODO(fernando): the three MERN projects still need `liveUrl` / `repoUrl`. Until
// a URL is set, the detail page renders a muted placeholder row instead of a dead
// link, and the action buttons are skipped entirely.
// Double-check `stack`, `role` and `year` too — they were inferred from the
// project descriptions, not from the repos themselves.
export const projects = [
  {
    slug: "custom-playlist-website",
    title: "Multipage Website with Custom Playlist",
    summary:
      "Design a multi-page website featuring a custom playlist with pagination and search functionality, ensuring full responsiveness for mobile and desktop.",
    status: "deployed",
    liveUrl: "https://one-ok-rock.vercel.app",
    repoUrl: "https://github.com/Liam-Moriarty/OOR-Website",
    stack: ["React", "Tailwind CSS", "Vite"],
    role: "Design & Frontend",
    year: "2024",
    thumbnail: oorBanner,
    gallery: [oorBanner, oorPlaylist],
  },
  {
    slug: "personal-task-monitoring",
    title: "Personal Task Monitoring System",
    summary:
      "Build a simple personal monitoring app using the MERN stack, incorporating Redux and RTK Query for state management and data fetching. Ensure responsiveness for both mobile and desktop, with features like task tracking and CRUD.",
    status: "pending",
    liveUrl: null,
    repoUrl: null,
    stack: ["MongoDB", "Express", "React", "Node.js", "Redux Toolkit", "RTK Query"],
    role: "Full-stack Developer",
    year: "2024",
    thumbnail: personalTaskMonitoring,
    gallery: [personalTaskMonitoring, personalTaskMonitoringAlt],
  },
  {
    slug: "budget-tracker",
    title: "Budget Tracker Application",
    summary:
      "Create a budget tracker app using the MERN stack with Redux and RTK Query for managing state and fetching financial data. Ensure responsiveness across devices, featuring expense tracking, income tracking, and simple budget analytics.",
    status: "pending",
    liveUrl: null,
    repoUrl: null,
    stack: ["MongoDB", "Express", "React", "Node.js", "Redux Toolkit", "RTK Query"],
    role: "Full-stack Developer",
    year: "2024",
    thumbnail: noSidebarBudgetTracker,
    gallery: [noSidebarBudgetTracker, budgetTracker, budgetIncome],
  },
  {
    slug: "sales-dashboard",
    title: "Sales Dashboard",
    summary:
      "Currently developing a responsive dashboard using the MERN stack, leveraging Redux and RTK Query to display real-time sales and transaction data. Include features like data visualization, transaction history, and performance insights.",
    status: "pending",
    liveUrl: null,
    repoUrl: null,
    stack: ["MongoDB", "Express", "React", "Node.js", "Redux Toolkit", "RTK Query"],
    role: "Full-stack Developer",
    year: "2025",
    thumbnail: dashboardMain,
    gallery: [dashboardMain, dashboard, dailySales, monthlySales],
  },
];

export const getProject = (slug) =>
  projects.find((project) => project.slug === slug);

export const getOtherProjects = (slug) =>
  projects.filter((project) => project.slug !== slug);

// Address shown in the browser-frame chrome. Deployed projects show their real
// host; everything still on my machine shows the dev server, which is honest.
export const getDisplayUrl = (project) => {
  if (!project.liveUrl) return `localhost:5173/${project.slug}`;
  try {
    return new URL(project.liveUrl).host;
  } catch {
    return project.liveUrl;
  }
};
