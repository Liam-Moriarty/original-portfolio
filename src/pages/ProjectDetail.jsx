import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaGithub, FaLocationArrow } from "react-icons/fa";
import { Spotlight } from "../components/ui/Spotlight";
import MagicButton from "../components/ui/MagicButton";
import ProjectPreview from "../components/projects/ProjectPreview";
import ProjectMeta from "../components/projects/ProjectMeta";
import MoreProjects from "../components/projects/MoreProjects";
import StatusBadge from "../components/projects/StatusBadge";
import NotFound from "./NotFound";
import { getOtherProjects, getProject } from "../data/projects";

const BackLink = () => (
  <Link
    to="/#recentProjects"
    className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-text-light-gray transition-colors hover:text-text-purple"
  >
    <FaArrowLeft className="h-3 w-3 transition-transform duration-200 group-hover:-translate-x-1" />
    All projects
  </Link>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) return <NotFound />;

  const hasActions = project.liveUrl || project.repoUrl;

  return (
    <article className="relative pb-20 pt-24 md:pt-28">
      <Spotlight className="-top-60 left-[45%] h-[70vh] w-[60vw]" fill="purple" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] bg-grid-white/[0.03] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="relative z-10">
        <BackLink />

        <div className="mt-8 flex flex-col gap-12 lg:mt-12 lg:grid lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-10">
          {/* Preview leads on small screens, then moves to the right column at lg.
              It is the shorter column, so it is the one that sticks while the
              longer metadata rail scrolls past it. */}
          <div className="order-1 lg:sticky lg:top-28 lg:order-2 lg:self-start">
            <ProjectPreview project={project} />
          </div>

          <div className="order-2 lg:order-1">
            <p className="font-mono text-[11px] uppercase tracking-widest text-text-light-gray/70">
              {project.year} &middot; {project.role}
            </p>

            <h1 className="mt-3 text-[1.625rem] font-semibold leading-[1.15] tracking-tight text-text-white sm:text-[2rem] lg:text-[2.25rem]">
              {project.title}
            </h1>

            <StatusBadge status={project.status} className="mt-4 text-sm" />

            <p className="mt-5 text-sm leading-relaxed text-text-light-gray">
              {project.summary}
            </p>

            {hasActions && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    <MagicButton
                      title="Visit live site"
                      icon={<FaLocationArrow />}
                      position="right"
                    />
                  </a>
                )}

                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-6 text-xs font-medium uppercase tracking-widest text-text-white transition-colors hover:border-text-purple/40 hover:bg-white/[0.04] md:w-52"
                  >
                    <FaGithub />
                    Source code
                  </a>
                )}
              </div>
            )}

            <ProjectMeta project={project} />
          </div>
        </div>

        <MoreProjects projects={getOtherProjects(project.slug)} />
      </div>
    </article>
  );
};

export default ProjectDetail;
