import PageHeader from "../components/ui/PageHeader";
import SectionLabel from "../components/ui/SectionLabel";
import ProjectListCard from "../components/projects/ProjectListCard";
import Chip from "../components/ui/Chip";
import { projects } from "../data/projects";
import { workProjects } from "../data/workProjects";

const AllProjects = () => (
  <article className="pb-20">
    <PageHeader title="projects">
      Everything I&apos;ve built — personal projects I designed and shipped
      end to end, and the products I worked on with a team.
    </PageHeader>

    <section className="pt-14">
      <SectionLabel index="01" title="personal" rule={false} />
      <div className="space-y-5">
        {projects.map((project) => (
          <ProjectListCard key={project.slug} project={project} />
        ))}
      </div>
    </section>

    <section className="pt-14">
      <SectionLabel index="02" title="work" rule={false} />
      <div className="grid gap-4 sm:grid-cols-2">
        {workProjects.map((project, i) => (
          <div
            key={project.name}
            className="rounded-2xl border border-white/[0.10] bg-gradient-to-b from-gradient-50 to-gradient-400 p-5 transition duration-300 hover:-translate-y-1 hover:border-text-purple/30"
          >
            <span className="font-mono text-[11px] text-text-light-gray/50">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h2 className="mt-2 text-lg font-semibold tracking-tight text-text-white">
              {project.name}
            </h2>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <Chip key={tech} size="sm">
                  {tech}
                </Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  </article>
);

export default AllProjects;
