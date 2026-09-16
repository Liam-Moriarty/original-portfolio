import TimelineEntry from "./TimelineEntry";
import { education } from "../../data/education";
import { formatPeriod, formatDuration } from "../../data/experience";

const EducationTimeline = () => (
  <div>
    {education.map((school, i) => (
      <TimelineEntry
        key={school.school}
        initials={school.initials}
        title={school.school}
        meta={school.location}
        isLast={i === education.length - 1}
      >
        <div className="mt-5">
          <h4 className="text-base font-medium text-text-white">
            {school.qualification}
          </h4>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-text-light-gray/60">
            {formatPeriod(school.start, school.end)}
            {formatDuration(school.start, school.end) &&
              ` · ${formatDuration(school.start, school.end)}`}
          </p>
        </div>
      </TimelineEntry>
    ))}
  </div>
);

export default EducationTimeline;
