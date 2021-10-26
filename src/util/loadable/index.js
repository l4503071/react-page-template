import { lazy, Suspense } from "react";

// 懒加载
export default function loadable(importStatement, fallback = null) {
  const LazyComponent = lazy(importStatement);
  function HOC(props) {
    return (
      <Suspense fallback={fallback}>
        <LazyComponent {...props} />
      </Suspense>
    );
  }
  return HOC;
}
