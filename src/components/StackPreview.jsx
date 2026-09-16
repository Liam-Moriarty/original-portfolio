import SectionLabel from "./ui/SectionLabel";
import Chip from "./ui/Chip";
import { stackHighlights, stackCount } from "../data/stack";

const StackPreview = () => (
  <section id="stack" className="scroll-mt-20 py-14">
    <SectionLabel
      index="04"
      title="stack"
      action={{ label: "View all", to: "/experience#stack" }}
      rule={false}
    />

    <div className="flex flex-wrap gap-2">
      {stackHighlights.map((tech) => (
        <Chip key={tech}>{tech}</Chip>
      ))}
      <Chip dashed>+ {stackCount - stackHighlights.length} more</Chip>
    </div>
  </section>
);

export default StackPreview;
