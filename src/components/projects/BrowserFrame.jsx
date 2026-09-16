import { cn } from "../../lib/utils";

// The chrome around every screenshot: a muted title bar with three dots and a
// monospace address pill, sitting on the same gradient the rest of the site uses.
const BrowserFrame = ({ url, children, className, compact = false }) => {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-b from-gradient-50 to-gradient-400",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 border-b border-white/[0.06] px-3",
          compact ? "h-7" : "h-10 px-4"
        )}
      >
        <div className="flex shrink-0 items-center gap-1.5">
          {[0, 1, 2].map((dot) => (
            <span
              key={dot}
              className={cn(
                "rounded-full bg-white/15",
                compact ? "h-1.5 w-1.5" : "h-2.5 w-2.5"
              )}
            />
          ))}
        </div>

        {!compact && url && (
          <div className="flex min-w-0 flex-1 justify-center">
            <span className="max-w-full truncate rounded-md bg-white/[0.04] px-3 py-1 font-mono text-[11px] leading-none text-text-light-gray/60">
              {url}
            </span>
          </div>
        )}

        {!compact && <div className="w-[46px] shrink-0" aria-hidden="true" />}
      </div>

      {children}
    </div>
  );
};

export default BrowserFrame;
