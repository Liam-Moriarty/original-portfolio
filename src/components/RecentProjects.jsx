import SectionLabel from "./ui/SectionLabel";
import ProjectStack from "./projects/ProjectStack";

const RecentProjects = () => (
  <section id="recentProjects" className="scroll-mt-20 py-14">
    <SectionLabel
      index="02"
      title="projects"
      action={{ label: "All projects", to: "/projects" }}
      rule={false}
    />

    <ProjectStack />
  </section>
);

export default RecentProjects;
