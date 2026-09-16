import ProjectCard from "./projects/ProjectCard";
import { projects } from "../data/projects";

const RecentProjects = () => {
  return (
    <section id="recentProjects" className="scroll-mt-20 py-20">
      <div className="my-[2rem] md:my-[2.5rem] lg:my-[3rem]">
        <h2 className="text-center text-4xl font-semibold text-text-white md:tracking-wide">
          A Small Selection of{" "}
          <span className="text-text-purple">Recent Projects</span>
        </h2>
        <p className="text-center text-base font-normal tracking-wide">
          Click any project to see the{" "}
          <span className="text-text-purple">full breakdown</span>
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
