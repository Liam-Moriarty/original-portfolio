import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BrowserFrame from "./BrowserFrame";
import { getDisplayUrl } from "../../data/projects";
import { cn } from "../../lib/utils";

const ProjectPreview = ({ project }) => {
  const [active, setActive] = useState(0);

  // A different project means a different gallery, so start from its first shot.
  useEffect(() => setActive(0), [project.slug]);

  const shots = project.gallery?.length ? project.gallery : [project.thumbnail];

  return (
    <div>
      <BrowserFrame url={getDisplayUrl(project)} className="shadow-2xl shadow-black/40">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={shots[active]}
              src={shots[active]}
              alt={`${project.title} screenshot ${active + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </AnimatePresence>
        </div>
      </BrowserFrame>

      {shots.length > 1 && (
        <div className="-mx-5 mt-4 flex snap-x gap-3 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          {shots.map((shot, i) => (
            <button
              key={shot}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View screenshot ${i + 1}`}
              aria-current={i === active}
              className={cn(
                "h-14 w-24 shrink-0 snap-start overflow-hidden rounded-md border-2 transition duration-200",
                i === active
                  ? "border-text-purple opacity-100"
                  : "border-white/10 opacity-50 hover:opacity-90"
              )}
            >
              <img
                src={shot}
                alt=""
                className="h-full w-full object-cover object-top"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectPreview;
