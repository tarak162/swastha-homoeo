/**
 * Preloads images in idle time so later navigation is instant without blocking the main thread.
 */
export function preloadImageUrls(urls: string[]) {
  if (typeof window === "undefined") return () => {};

  const run = () => {
    for (const href of urls) {
      const img = new Image();
      img.decoding = "async";
      img.src = href;
    }
  };

  const ric = window.requestIdleCallback;
  if (typeof ric === "function") {
    const id = ric(run, { timeout: 2500 });
    return () => window.cancelIdleCallback(id);
  }

  const id = window.setTimeout(run, 200);
  return () => window.clearTimeout(id);
}
