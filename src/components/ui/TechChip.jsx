import { cn } from "../../lib/utils";

// "Element Plus" -> EP, "Pinia" -> PI. Used when simple-icons has no brand mark.
const monogram = (name) => {
  const words = name.split(/[\s./]+/).filter(Boolean);
  const letters =
    words.length > 1 ? words.map((w) => w[0]).join("") : words[0].slice(0, 2);
  return letters.slice(0, 2).toUpperCase();
};

const TechChip = ({ name, Icon, color, size = "default", plain = false }) => {
  const small = size === "sm";

  return (
    <span
      className={cn(
        "group inline-flex items-center rounded-lg border border-white/[0.08] bg-white/[0.03] transition-colors duration-200",
        "hover:border-text-purple/30 hover:bg-white/[0.06]",
        small ? "gap-1.5 px-2 py-0.5 text-[11px]" : "gap-2 px-3 py-1.5 text-xs"
      )}
    >
      {!plain &&
        (Icon ? (
          <Icon
            style={{ color }}
            aria-hidden="true"
            className={cn(
              "shrink-0 opacity-60 grayscale transition duration-200",
              "group-hover:opacity-100 group-hover:grayscale-0",
              small ? "h-2.5 w-2.5" : "h-3.5 w-3.5"
            )}
          />
        ) : (
          <span
            style={{ color }}
            aria-hidden="true"
            className={cn(
              "flex shrink-0 items-center justify-center rounded bg-white/[0.06] font-semibold leading-none opacity-60 grayscale transition duration-200",
              "group-hover:opacity-100 group-hover:grayscale-0",
              small ? "h-2.5 w-2.5 text-[6px]" : "h-3.5 w-3.5 text-[8px]"
            )}
          >
            {monogram(name)}
          </span>
        ))}
      <span className="text-text-light-gray transition-colors group-hover:text-text-white">
        {name}
      </span>
    </span>
  );
};

export default TechChip;
