import SectionLabel from "./ui/SectionLabel";
import { roleRows } from "../data/experience";

const ExperienceTable = () => (
  <section id="experience" className="scroll-mt-20 py-14">
    <SectionLabel
      index="03"
      title="Experience"
      action={{ label: "Full history", to: "/experience" }}
    />

    <div>
      {roleRows.map((row) => (
        <div
          key={`${row.company}-${row.title}`}
          className="group flex flex-col gap-1 border-b border-white/[0.07] py-4 sm:flex-row sm:items-baseline sm:gap-6"
        >
          <span className="shrink-0 font-mono text-xs text-text-light-gray/50 sm:w-14">
            {row.year}
          </span>

          <h3 className="flex-1 text-base font-medium text-text-white transition-colors group-hover:text-text-purple">
            {row.title}
          </h3>

          <span className="text-xs text-text-light-gray/70 sm:text-right">
            {row.company}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceTable;
