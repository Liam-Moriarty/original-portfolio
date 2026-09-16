import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import BrowserFrame from "./BrowserFrame";
import Chip from "../ui/Chip";
import { STATUS, getDisplayUrl } from "../../data/projects";
import { cn } from "../../lib/utils";

// Full-width card for /projects: screenshot on the left, everything else right.
const ProjectListCard = ({ project }) => {
  const status = STATUS[project.status] ?? STATUS.pending;

  return (
    <article className="rounded-2xl border border-white/[0.10] bg-gradient-to-b from-gradient-50 to-gradient-400 p-3 transition duration-300 hover:border-text-purple/25 sm:p-5 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-6">
      <BrowserFrame url={getDisplayUrl(project)} compact>
        <div className="aspect-[16/10] w-full overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </BrowserFrame>

      <div className="mt-5 lg:mt-0">
        <div className="flex flex-wrap gap-2">
          <Chip size="sm" className="uppercase tracking-widest">
            <span className={cn("h-1.5 w-1.5 rounded-full", status.dot, status.glow)} />
            {status.label}
          </Chip>
          <Chip size="sm" className="uppercase tracking-widest">
            {project.year}
          </Chip>
        </div>

        <h2 className="mt-3 text-xl font-semibold leading-tight tracking-tight text-text-white">
          <Link
            to={`/projects/${project.slug}`}
            className="transition-colors hover:text-text-purple"
          >
            {project.title}
          </Link>
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-text-light-gray">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <Chip key={tech} size="sm">
              {tech}
            </Chip>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <Link
            to={`/projects/${project.slug}`}
            className="group inline-flex items-center gap-2 rounded-lg border border-white/[0.12] px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-text-light-gray transition-colors hover:border-text-purple/40 hover:text-text-white"
          >
            Case study
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-text-light-gray transition-colors hover:border-text-purple/40 hover:text-text-white"
            >
              Live
              <FaArrowUpRightFromSquare className="h-2.5 w-2.5" />
            </a>
          )}

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-text-light-gray transition-colors hover:border-text-purple/40 hover:text-text-white"
            >
              <FaGithub className="h-3 w-3" />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectListCard;
