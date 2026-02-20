import { useEffect } from "react";
import { track } from "@/lib/analytics";

type views = "hero" | "about" | "experience" | "skills" | "contact";

export const useSectionView = (id: views) => {
  useEffect(() => {
    const el = document.getElementById(id);
    if (!el) {
      console.warn("[useSectionView] missing element:", id);
      return;
    }

    let fired = false;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (fired) return;
        if (entry.isIntersecting) {
          fired = true;
          track("section_view", { section: id });
          obs.disconnect();
        }
      },
      {
        // this makes it trigger earlier and more reliably
        root: null,
        threshold: 0.01,
        rootMargin: "-20% 0px -55% 0px",
      },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [id]);
};
