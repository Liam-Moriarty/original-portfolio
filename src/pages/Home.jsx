import Hero from "../components/Hero";
import Grid from "../components/Grid";
import RecentProjects from "../components/RecentProjects";
import ExperienceTable from "../components/ExperienceTable";
import StackPreview from "../components/StackPreview";
import WorkProjects from "../components/WorkProjects";

const Home = () => {
  return (
    <>
      <Hero />
      <Grid />
      <RecentProjects />
      <ExperienceTable />
      <StackPreview />
      <WorkProjects />
    </>
  );
};

export default Home;
