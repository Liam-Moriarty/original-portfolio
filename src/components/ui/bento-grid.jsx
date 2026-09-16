import { cn } from "../../lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

// The site is dark-only, so these carry no `dark:` prefixes. They used to, which
// meant a visitor whose OS was set to light mode got neutral-600 text and
// transparent borders on the dark background.
export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        "group/bento relative row-span-1 flex flex-col justify-between space-y-4 rounded-3xl",
        "border border-white/[0.10] bg-gradient-to-b from-gradient-50 to-gradient-400 p-4",
        "transition duration-200 hover:border-text-purple/25",
        className
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mb-2 mt-2 font-semibold text-text-white">{title}</div>
        <div className="text-sm font-normal leading-relaxed text-text-light-gray">
          {description}
        </div>
      </div>
    </div>
  );
};
