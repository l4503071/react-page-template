let hasScrolled = false;

export function addLoadMoreListener(el, cb = () => {}) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((item) => {
      if (item.intersectionRatio <= 0 || !hasScrolled) {
        return;
      }
      cb();
    });
  });
  observer.observe(el);
  return {
    unobserve: () => {
      observer.unobserve(el);
    },
  };
}

export function addScrollListenter(el) {
  function scroll() {
    hasScrolled = true;
  }
  el.addEventListener("scroll", scroll);
  return {
    removeScrollListener: () => {
      hasScrolled = false;
      el.removeEventListener("scroll", scroll);
    },
  };
}
