import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import BrowserFrame from "./BrowserFrame";
import Chip from "../ui/Chip";
import { STATUS, getDisplayUrl } from "../../data/projects";
import { cn } from "../../lib/utils";

// One card in the fanned stack. `interactive` is false for the tilted cards
// behind, so their links can't be tabbed to or clicked by accident.
const StackCard = ({ project, interactive }) => {
  const status = STATUS[project.status] ?? STATUS.pending;

  return (
    <article className="overflow-hidden rounded-2xl border border-white/[0.10] bg-gradient-to-b from-gradient-50 to-gradient-400 p-2.5 shadow-2xl shadow-black/50 sm:p-3">
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

      <div className="mt-3">
        <Chip size="sm" className="uppercase tracking-widest">
          <span className={cn("h-1.5 w-1.5 rounded-full", status.dot, status.glow)} />
          {status.label}
        </Chip>

        <h3 className="mt-2.5 text-base font-semibold leading-snug tracking-tight text-text-white">
          {interactive ? (
            <Link
              to={`/projects/${project.slug}`}
              className="transition-colors hover:text-text-purple"
            >
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>

        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-text-light-gray">
          {project.summary}
        </p>

        <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
          <Link
            to={`/projects/${project.slug}`}
            tabIndex={interactive ? 0 : -1}
            className="group inline-flex items-center gap-2 rounded-lg border border-white/[0.12] px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-text-light-gray transition-colors hover:border-text-purple/40 hover:text-text-white"
          >
            View project
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              tabIndex={interactive ? 0 : -1}
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-text-light-gray transition-colors hover:border-text-purple/40 hover:text-text-white"
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
              tabIndex={interactive ? 0 : -1}
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-text-light-gray transition-colors hover:border-text-purple/40 hover:text-text-white"
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

export default StackCard;
