import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const MoreProjects = ({ projects }) => {
  if (!projects.length) return null;

  return (
    <section className="mt-24 border-t border-white/[0.07] pt-12 md:mt-32 md:pt-16">
      <div className="mb-8 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight text-text-white">
          More projects
        </h2>
        <Link
          to="/#recentProjects"
          className="group inline-flex shrink-0 items-center gap-2 text-sm text-text-light-gray transition-colors hover:text-text-purple"
        >
          View all
          <FaLocationArrow className="h-2.5 w-2.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} variant="compact" />
        ))}
      </div>
    </section>
  );
};

export default MoreProjects;
