import { checkSupportIO } from "../index";

const DATA_BEFORE_Y = "data-before-y";
const DATA_APPEARED = "data-appeared";
const DATA_DISAPPEARED = "data-disappeared";
const defaultOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};
let intersectionObserver = null;

function createEvent(type, detail = {}) {
  return new CustomEvent(type, {
    cancelable: true,
    bubbles: false,
    detail: detail,
  });
}

function isTrue(flag) {
  return flag === "true";
}

export function createIntersectionObserver(options = defaultOptions) {
  if (!checkSupportIO()) {
    return;
  }
  intersectionObserver = new IntersectionObserver(oberverHandler, options);
}

export function observerElement(element) {
  if (!intersectionObserver) {
    createIntersectionObserver();
    return;
  }
  intersectionObserver.observe(element);
}

function oberverHandler(entries) {
  entries.forEach((entry) => {
    const { intersectionRatio, target, boundingClientRect } = entry;
    const currentY = boundingClientRect.y ?? boundingClientRect.top;
    let beforeY = Number(target.getAttribute(DATA_BEFORE_Y));
    if (target.getAttribute(DATA_BEFORE_Y) === null) {
      beforeY = currentY;
    }
    const direction = currentY > beforeY ? "up" : "down";
    if (intersectionRatio > 0) {
      const appearOnce = target.getAttribute("data-appear-once");
      const appeared = target.getAttribute(DATA_APPEARED);
      if (isTrue(appearOnce) && isTrue(appeared)) {
        return;
      }
      target.dispatchEvent(createEvent("appear", { direction }));
      target.setAttribute(DATA_APPEARED, true);
    } else if (intersectionRatio === 0) {
      const disappearOnce = target.getAttribute("data-disappear-once");
      const disappeared = target.getAttribute(DATA_DISAPPEARED);
      if (isTrue(disappearOnce) && isTrue(disappeared)) {
        return;
      }
      target.dispatchEvent(createEvent("disappear", { direction }));
      target.setAttribute(DATA_DISAPPEARED, true);
    }
    target.setAttribute(DATA_BEFORE_Y, currentY);
  });
}
