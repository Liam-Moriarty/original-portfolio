import SectionLabel from "../ui/SectionLabel";
import ProjectCard from "./ProjectCard";

const MoreProjects = ({ projects }) => {
  if (!projects.length) return null;

  return (
    <section className="mt-16 border-t border-white/[0.07] pt-10 md:mt-20 md:pt-12">
      <SectionLabel
        title="More projects"
        action={{ label: "All projects", to: "/projects" }}
        rule={false}
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} variant="compact" />
        ))}
      </div>
    </section>
  );
};

export default MoreProjects;
