import SectionLabel from "./ui/SectionLabel";
import Chip from "./ui/Chip";
import { workProjects } from "../data/workProjects";

const WorkProjects = () => (
  <section id="workProjects" className="scroll-mt-20 py-14">
    <SectionLabel index="05" title="work" rule={false} />

    <div className="grid gap-4 sm:grid-cols-2">
      {workProjects.map((project, i) => (
        <div
          key={project.name}
          className="rounded-2xl border border-white/[0.10] bg-gradient-to-b from-gradient-50 to-gradient-400 p-5 transition duration-300 hover:-translate-y-1 hover:border-text-purple/30"
        >
          <span className="font-mono text-[11px] text-text-light-gray/50">
            {String(i + 1).padStart(2, "0")}
          </span>

          <h3 className="mt-2 text-lg font-semibold tracking-tight text-text-white">
            {project.name}
          </h3>

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
);

export default WorkProjects;
