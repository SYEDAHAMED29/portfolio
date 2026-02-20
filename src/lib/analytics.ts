import posthog from "posthog-js";

type Location = "navbar" | "hero" | "contact";

type TrackEvents = {
  resume_clicked: { location: Location };
  email_clicked: { location: Location };
  linkedin_clicked: { location: Location };
  github_clicked: { location: Location };
};

export const track = <E extends keyof TrackEvents>(
  event: E,
  props: TrackEvents[E],
) => {
  posthog.capture(event, {
    ...props,
    page: window.location.pathname,
    url: window.location.href,
  });
};
