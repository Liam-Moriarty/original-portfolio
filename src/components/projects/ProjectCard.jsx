import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import BrowserFrame from "./BrowserFrame";
import StatusBadge from "./StatusBadge";
import { cn } from "../../lib/utils";

// `gallery` is the big homepage card with the title sitting on the screenshot.
// `compact` is the smaller card used by the strip at the bottom of a project page.
const ProjectCard = ({ project, variant = "gallery" }) => {
  const to = `/projects/${project.slug}`;

  if (variant === "compact") {
    return (
      <Link to={to} className="group block">
        <BrowserFrame
          compact
          className="transition duration-300 group-hover:-translate-y-1 group-hover:border-text-purple/30"
        >
          <div className="aspect-[16/10] w-full overflow-hidden">
            <img
              src={project.thumbnail}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </BrowserFrame>

        <h3 className="mt-3 text-base font-medium leading-snug text-text-white transition-colors group-hover:text-text-purple">
          {project.title}
        </h3>
        <StatusBadge status={project.status} className="mt-1.5 text-xs" />
      </Link>
    );
  }

  return (
    <Link
      to={to}
      className={cn(
        "group relative block overflow-hidden rounded-xl border border-white/[0.08]",
        "bg-gradient-to-b from-gradient-50 to-gradient-400 transition duration-300",
        "hover:-translate-y-1 hover:border-text-purple/30 hover:shadow-2xl hover:shadow-black/40"
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-bg from-5% via-purple-bg/80 via-45% to-transparent" />
      </div>

      <span className="absolute right-3 top-3 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full border border-white/10 bg-purple-bg/70 text-xs text-text-purple opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <FaLocationArrow />
      </span>

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <h3 className="text-lg font-semibold leading-snug tracking-tight text-text-white">
          {project.title}
        </h3>
        <StatusBadge status={project.status} className="mt-1.5 text-xs" />
      </div>
    </Link>
  );
};

export default ProjectCard;
