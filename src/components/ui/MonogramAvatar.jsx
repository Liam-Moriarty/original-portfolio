import { cn } from "../../lib/utils";

const MonogramAvatar = ({ label, className }) => (
  <div
    aria-hidden="true"
    className={cn(
      "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.02] font-mono text-xs text-text-light-gray",
      className
    )}
  >
    {label}
  </div>
);

export default MonogramAvatar;
