import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { cn } from "../../lib/utils";

const Row = ({ label, children, className }) => (
  <div className={cn("border-t border-white/[0.07] py-4", className)}>
    <dt className="mb-1.5 text-xs text-text-light-gray/60">{label}</dt>
    <dd className="text-sm text-text-white">{children}</dd>
  </div>
);

const ExternalValue = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group inline-flex items-center gap-1.5 break-all text-text-purple transition-colors hover:text-text-white"
  >
    <span className="underline-offset-4 group-hover:underline">{children}</span>
    <FaArrowUpRightFromSquare className="h-2.5 w-2.5 shrink-0" />
  </a>
);

const Placeholder = ({ children }) => (
  <span className="text-text-light-gray/50">{children}</span>
);

const ProjectMeta = ({ project }) => {
  return (
    <dl className="mt-10 border-b border-white/[0.07] md:grid md:grid-cols-2 md:gap-x-10 lg:block">
      <Row label="Live URL">
        {project.liveUrl ? (
          <ExternalValue href={project.liveUrl}>
            {project.liveUrl.replace(/^https?:\/\//, "")}
          </ExternalValue>
        ) : (
          <Placeholder>
            {project.status === "deployed"
              ? "Link coming soon"
              : "Not deployed yet"}
          </Placeholder>
        )}
      </Row>

      <Row label="Repository">
        {project.repoUrl ? (
          <ExternalValue href={project.repoUrl}>
            {project.repoUrl.replace(/^https?:\/\/(www\.)?github\.com\//, "")}
          </ExternalValue>
        ) : (
          <Placeholder>Not public yet</Placeholder>
        )}
      </Row>

      <Row label="Stack" className="md:col-span-2 lg:col-span-1">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2 py-1 text-xs text-text-light-gray"
            >
              {tech}
            </span>
          ))}
        </div>
      </Row>

      <Row label="Role">{project.role}</Row>
      <Row label="Year">{project.year}</Row>
    </dl>
  );
};

export default ProjectMeta;
