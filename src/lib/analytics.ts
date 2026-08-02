import posthog from "posthog-js";

export type AnalyticsLocation = "navbar" | "hero" | "contact";
export type AnalyticsEvent =
  | "resume_clicked"
  | "email_clicked"
  | "linkedin_clicked"
  | "github_clicked"
  | "Beamer_Company_Clicked"
  | "Userflow_Company_Clicked";

let initialized = false;

export function initAnalytics() {
  const key =
    import.meta.env.PUBLIC_POSTHOG_KEY ??
    import.meta.env.VITE_PUBLIC_POSTHOG_KEY;
  const host =
    import.meta.env.PUBLIC_POSTHOG_HOST ??
    import.meta.env.VITE_PUBLIC_POSTHOG_HOST;

  if (!import.meta.env.PROD || !key || initialized) return;

  posthog.init(key, {
    api_host: host,
    opt_out_capturing_by_default: false,
  });
  initialized = true;
}

export function track(event: AnalyticsEvent, location?: AnalyticsLocation) {
  if (!initialized) return;

  posthog.capture(event, {
    ...(location ? { location } : {}),
    page: window.location.pathname,
    url: window.location.href,
  });
}
