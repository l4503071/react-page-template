import { createIntersectionObserver, observerElement } from "./IOManager";

const Node = window.Node;
const APPEARTYPE = "appear";

export function setupAppear() {
  const nativeAddEventListener = Node.prototype.addEventListener;
  createIntersectionObserver();
  Node.prototype.addEventListener = function (type, listener, useCapture) {
    if (type === APPEARTYPE) {
      observerElement(this);
    }
    nativeAddEventListener.call(this, type, listener, useCapture);
  };
}
