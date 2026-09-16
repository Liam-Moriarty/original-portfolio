import MonogramAvatar from "../ui/MonogramAvatar";

// Shared shell for both the work history and the education timeline, so the two
// read as one system: monogram, a rule dropping to the next entry, then content.
const TimelineEntry = ({ initials, title, meta, isLast, children }) => (
  <div className="relative pb-10 last:pb-0">
    {!isLast && (
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-6 top-12 w-px bg-white/[0.09]"
      />
    )}

    <div className="relative flex gap-4">
      <MonogramAvatar label={initials} className="relative z-10" />

      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-semibold tracking-tight text-text-white">
          {title}
        </h3>
        {meta && (
          <p className="mt-1 font-mono text-[11px] text-text-light-gray/60">
            {meta}
          </p>
        )}
        {children}
      </div>
    </div>
  </div>
);

export default TimelineEntry;
