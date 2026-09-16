import SectionLabel from "./ui/SectionLabel";
import TechChip from "./ui/TechChip";
import { featuredStack, featuredCount, stackCount } from "../data/stack";

const StackPreview = () => (
  <section id="stack" className="scroll-mt-20 py-14">
    <SectionLabel
      index="04"
      title="Stack"
      action={{ label: "See more", to: "/experience#stack" }}
      rule={false}
    />

    <div className="space-y-4">
      {featuredStack.map((group) => (
        <div
          key={group.category}
          className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5"
        >
          <span className="shrink-0 font-mono text-[11px] uppercase tracking-widest text-text-light-gray/50 sm:w-36">
            {group.category}
          </span>

          <div className="flex flex-wrap gap-1.5">
            {group.items.map((tech) => (
              <TechChip
                key={`${group.category}-${tech.name}`}
                name={tech.name}
                Icon={tech.Icon}
                color={tech.color}
              />
            ))}
          </div>
        </div>
      ))}
    </div>

    <p className="mt-6 font-mono text-[11px] text-text-light-gray/40">
      {featuredCount} of {stackCount} shown
    </p>
  </section>
);

export default StackPreview;
