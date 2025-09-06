// Only run in browser environment
if (typeof window !== "undefined" && typeof document !== "undefined") {
  (() => {
    function overrideMainWrapperMaxWidth(): void {
      const main = document.querySelector<HTMLElement>(".main-wrapper");
      if (main) {
        main.style.maxWidth = "100%";
      }
    }

    function updateNavbarBlurOnScroll(): void {
      const navbar = document.querySelector<HTMLElement>(".navbar");
      if (!navbar) return;

      const blurThresholdPixels = 10;
      const shouldBlur = window.scrollY > blurThresholdPixels;
      navbar.classList.toggle("navbar--blurred", shouldBlur);
    }

    function setUpScrollListener(): void {
      // Initialize state
      updateNavbarBlurOnScroll();

      let isTicking = false;
      window.addEventListener(
        "scroll",
        () => {
          if (isTicking) return;
          isTicking = true;
          window.requestAnimationFrame(() => {
            updateNavbarBlurOnScroll();
            isTicking = false;
          });
        },
        { passive: true }
      );
    }

    function getContentRect(): DOMRect | null {
      const main = document.querySelector<HTMLElement>(".main-wrapper");
      return main ? main.getBoundingClientRect() : null;
    }

    // Apply the max-width override when the DOM is ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        overrideMainWrapperMaxWidth();
        setUpScrollListener();
      });
    } else {
      overrideMainWrapperMaxWidth();
      setUpScrollListener();
    }
  })();
}
