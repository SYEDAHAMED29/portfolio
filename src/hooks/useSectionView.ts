import { useEffect } from "react";
import { track } from "@/lib/analytics";

type views = "Hero" | "About" | "Experience" | "Skills" | "Contact";

export const useSectionView = (id: views) => {
  useEffect(() => {
    const el = document.getElementById(id);
    if (!el) return;

    let fired = false;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!fired && entry.isIntersecting && entry.intersectionRatio >= 0.35) {
          fired = true;
          track("section_view", { section: id });
        }
      },
      { threshold: [0.35] },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [id]);
};
