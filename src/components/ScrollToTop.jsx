import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Routing on its own leaves you wherever you were scrolled to. Jump to the top on
// a new route, but honour a hash so "All projects" lands back on the gallery.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: "instant" });
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
