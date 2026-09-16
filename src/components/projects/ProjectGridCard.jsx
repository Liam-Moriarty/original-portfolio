import { Link } from "react-router-dom";
import BrowserFrame from "./BrowserFrame";
import Chip from "../ui/Chip";
import { STATUS, getDisplayUrl } from "../../data/projects";
import { cn } from "../../lib/utils";

// Compact card for /projects. The whole card is the link, so "View project" is a
// span rather than a nested anchor. Everything else (stack, links, gallery)
// lives on the project's own page.
const ProjectGridCard = ({ project }) => {
  const status = STATUS[project.status] ?? STATUS.pending;

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block rounded-2xl border border-white/[0.10] bg-gradient-to-b from-gradient-50 to-gradient-400 p-3 transition duration-300 hover:-translate-y-1 hover:border-text-purple/30"
    >
      <BrowserFrame url={getDisplayUrl(project)} compact>
        <div className="aspect-[16/10] w-full overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </BrowserFrame>

      <div className="px-1 pb-1 pt-4">
        <div className="flex flex-wrap items-center gap-1.5">
          <Chip size="sm" className="uppercase tracking-widest">
            <span
              className={cn("h-1.5 w-1.5 rounded-full", status.dot, status.glow)}
            />
            {status.label}
          </Chip>
          <Chip size="sm" className="uppercase tracking-widest">
            {project.year}
          </Chip>
        </div>

        <h3 className="mt-3 text-base font-semibold leading-snug tracking-tight text-text-white transition-colors group-hover:text-text-purple">
          {project.title}
        </h3>

        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-text-light-gray">
          {project.summary}
        </p>

        <span className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/[0.12] px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-text-light-gray transition-colors group-hover:border-text-purple/40 group-hover:text-text-white">
          View project
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
};

export default ProjectGridCard;
