import MonogramAvatar from "../ui/MonogramAvatar";
import Chip from "../ui/Chip";
import {
  experience,
  formatPeriod,
  formatDuration,
} from "../../data/experience";

const MAX_SKILLS = 3;

const CompanyTimeline = () => (
  <div>
    {experience.map((company, companyIndex) => {
      const isLast = companyIndex === experience.length - 1;

      return (
        <div key={company.company} className="relative pb-10 last:pb-0">
          {/* the rule drops from under the avatar to the next company */}
          {!isLast && (
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-6 top-12 w-px bg-white/[0.09]"
            />
          )}

          <div className="relative flex gap-4">
            <MonogramAvatar label={company.initials} className="relative z-10" />

            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-semibold tracking-tight text-text-white">
                {company.company}
              </h2>
              <p className="mt-1 font-mono text-[11px] text-text-light-gray/60">
                {company.employment}
                {company.location && ` · ${company.location}`}
              </p>

              <div className="mt-5 space-y-7">
                {company.roles.map((role) => {
                  const period = formatPeriod(role.start, role.end);
                  const duration = formatDuration(role.start, role.end);
                  const shown = role.skills.slice(0, MAX_SKILLS);
                  const rest = role.skills.length - shown.length;

                  return (
                    <div key={role.title}>
                      <h3 className="text-base font-medium text-text-white">
                        {role.title}
                      </h3>

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
                              <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-text-purple" />
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
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

export default CompanyTimeline;
