import TimelineEntry from "./TimelineEntry";
import Chip from "../ui/Chip";
import {
  experience,
  formatPeriod,
  formatDuration,
} from "../../data/experience";

const MAX_SKILLS = 3;

const CompanyTimeline = () => (
  <div>
    {experience.map((company, i) => (
      <TimelineEntry
        key={company.company}
        initials={company.initials}
        title={company.company}
        meta={
          company.location
            ? `${company.employment} · ${company.location}`
            : company.employment
        }
        isLast={i === experience.length - 1}
      >
        <div className="mt-5 space-y-7">
          {company.roles.map((role) => {
            const period = formatPeriod(role.start, role.end);
            const duration = formatDuration(role.start, role.end);
            const shown = role.skills.slice(0, MAX_SKILLS);
            const rest = role.skills.length - shown.length;

            return (
              <div key={role.title}>
                <h4 className="text-base font-medium text-text-white">
                  {role.title}
                </h4>

                {period && (
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-text-light-gray/60">
                    {period}
                    {duration && ` · ${duration}`}
                  </p>
                )}

                {role.highlights.length > 0 && (
                  <ul className="mt-3 max-w-2xl space-y-2.5">
                    {role.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-relaxed text-text-light-gray"
                      >
                        <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-text-purple" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {shown.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {shown.map((skill) => (
                      <Chip key={skill} size="sm">
                        {skill}
                      </Chip>
                    ))}
                    {rest > 0 && (
                      <Chip dashed size="sm">
                        +{rest} skill{rest > 1 ? "s" : ""}
                      </Chip>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </TimelineEntry>
    ))}
  </div>
);

export default CompanyTimeline;
