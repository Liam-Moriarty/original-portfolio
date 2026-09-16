import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

// Every section opens the same way: a mono index on the left, an optional
// action on the right, and a hairline underneath when the content is tabular.
const SectionLabel = ({ index, title, action, rule = true, className }) => (
  <div className={cn("mb-6", className)}>
    <div className="flex items-end justify-between gap-4">
      <p className="font-mono text-xs text-text-light-gray/60">
        {index && (
          <>
            <span className="text-text-purple">{index}</span> —{" "}
          </>
        )}
        {title}
      </p>

      {action && (
        <Link
          to={action.to}
          className="group inline-flex shrink-0 items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-text-light-gray/60 transition-colors hover:text-text-purple"
        >
          {action.label}
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      )}
    </div>

    {rule && <div className="mt-3 h-px w-full bg-white/[0.07]" />}
  </div>
);

export default SectionLabel;
