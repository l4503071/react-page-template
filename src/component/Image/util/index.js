import { checkSupportIO } from "@/util";

function addLazyLoadListener(el, cb = () => {}) {
  if (!checkSupportIO()) {
    cb();
    return console.warn("该环境不支持 IntersectionObserver，图片懒加载功能失效。");
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((item) => {
      if (item.intersectionRatio <= 0) {
        return;
      }
      cb();
      observer.unobserve(el);
    });
  });
  observer.observe(el);
  return observer;
}

export { addLazyLoadListener };
