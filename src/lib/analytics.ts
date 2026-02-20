type GAParams = Record<string, any>;

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const track = (eventName: string, params: GAParams = {}) => {
  if (!window.gtag) return;
  window.gtag("event", eventName, {
    page_location: window.location.href,
    ...params,
  });
};

export const trackOutbound = (label: string, url: string) => {
  track("outbound_click", { label, url, outbound: true });
};
