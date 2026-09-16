import { cn } from "../../lib/utils";

// Bordered mono chip. `dashed` is the "+ more" / "+2 skills" affordance.
const Chip = ({ children, dashed, size = "default", className, ...rest }) => (
  <span
    className={cn(
      "inline-flex items-center gap-2 rounded-lg border font-mono transition-colors duration-200",
      dashed
        ? "border-dashed border-white/[0.16] text-text-light-gray/50"
        : "border-white/[0.12] text-text-light-gray hover:border-text-purple/40 hover:text-text-white",
      size === "sm" ? "px-2 py-1 text-[11px]" : "px-3 py-1.5 text-xs",
      className
    )}
    {...rest}
  >
    {children}
  </span>
);

export default Chip;
