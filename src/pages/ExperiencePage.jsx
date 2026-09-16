import PageHeader from "../components/ui/PageHeader";
import SectionLabel from "../components/ui/SectionLabel";
import CompanyTimeline from "../components/experience/CompanyTimeline";
import EducationTimeline from "../components/experience/EducationTimeline";
import TechChip from "../components/ui/TechChip";
import { stack } from "../data/stack";

const ExperiencePage = () => (
  <article className="pb-20">
    <PageHeader title="Experience">
      Every role in full: what I was responsible for, what I shipped, and the
      tools each one ran on.
    </PageHeader>

    <SectionLabel index="01" title="History" rule={false} className="mt-14" />
    <CompanyTimeline />

    <section id="stack" className="scroll-mt-24 pt-16">
      <SectionLabel index="02" title="Stack" rule={false} />

      <div className="space-y-8">
        {stack.map((group) => (
          <div key={group.category}>
            <div className="mb-3 flex items-center gap-4">
              <h2 className="shrink-0 font-mono text-[11px] uppercase tracking-widest text-text-light-gray/60">
                {group.category}
              </h2>
              <span className="h-px flex-1 bg-white/[0.07]" />
            </div>

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
    </section>

    <section id="education" className="scroll-mt-24 pt-16">
      <SectionLabel index="03" title="Education" rule={false} />
<EducationTimeline />
    </section>
  </article>
);

export default ExperiencePage;
