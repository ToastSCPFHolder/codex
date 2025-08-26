// Only run in browser environment
if (typeof window !== "undefined" && typeof document !== "undefined") {
  (() => {
    function overrideMainWrapperMaxWidth(): void {
      const main = document.querySelector<HTMLElement>(".main-wrapper");
      if (main) {
        main.style.maxWidth = "100%";
      }
    }

    function getContentRect(): DOMRect | null {
      const main = document.querySelector<HTMLElement>(".main-wrapper");
      return main ? main.getBoundingClientRect() : null;
    }

    // Apply the max-width override when the DOM is ready
    if (document.readyState === "loading") {
      document.addEventListener(
        "DOMContentLoaded",
        overrideMainWrapperMaxWidth
      );
    } else {
      overrideMainWrapperMaxWidth();
    }
  })();
}
