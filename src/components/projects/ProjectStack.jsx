import { useState } from "react";
import { motion } from "framer-motion";
import StackCard from "./StackCard";
import { useIsCompact } from "../../hooks/useIsCompact";
import { projects } from "../../data/projects";
import { cn } from "../../lib/utils";

const SPRING = { type: "spring", stiffness: 260, damping: 30 };

const ProjectStack = () => {
  const [active, setActive] = useState(0);
  const compact = useIsCompact();
  const count = projects.length;

  const go = (dir) => setActive((i) => (i + dir + count) % count);

  // Shortest way round the ring, so card 0 sits next to card 3.
  const offsetOf = (i) => {
    let d = i - active;
    if (d > count / 2) d -= count;
    if (d < -count / 2) d += count;
    return d;
  };

  const poseFor = (offset) => {
    if (compact) {
      return {
        x: 0,
        rotate: 0,
        scale: offset === 0 ? 1 : 0.94,
        opacity: offset === 0 ? 1 : 0,
        zIndex: offset === 0 ? 30 : 0,
      };
    }
    if (Math.abs(offset) > 1) {
      return { x: 0, rotate: 0, scale: 0.85, opacity: 0, zIndex: 0 };
    }
    return {
      x: offset * 205,
      rotate: offset * 8,
      scale: offset === 0 ? 1 : 0.92,
      opacity: offset === 0 ? 1 : 0.35,
      zIndex: offset === 0 ? 30 : 20,
    };
  };

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Recent projects"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
        if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
      }}
      className="rounded-2xl outline-none focus-visible:ring-1 focus-visible:ring-text-purple/40"
    >
      <div className="grid place-items-center overflow-hidden px-1 py-4 sm:px-2">
        {projects.map((project, i) => {
          const offset = offsetOf(i);
          const isActive = offset === 0;
          const hidden = !compact && Math.abs(offset) > 1;

          return (
            <motion.div
              key={project.slug}
              className={cn(
                "w-full max-w-[380px] [grid-area:1/1]",
                isActive ? "cursor-default" : "cursor-pointer",
                (hidden || (compact && !isActive)) && "pointer-events-none"
              )}
              animate={poseFor(offset)}
              transition={SPRING}
              aria-hidden={!isActive}
              drag={compact && isActive ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) go(1);
                if (info.offset.x > 60) go(-1);
              }}
              onClick={() => !isActive && setActive(i)}
            >
              <StackCard project={project} interactive={isActive} />
            </motion.div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center justify-center gap-3">
        {projects.map((project, i) => (
          <button
            key={project.slug}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show ${project.title}`}
            aria-current={i === active}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === active
                ? "w-8 bg-text-purple"
                : "w-1.5 bg-white/20 hover:bg-white/40"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectStack;
