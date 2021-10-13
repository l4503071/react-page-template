import { lazy, Suspense } from "react";

// 懒加载
export default function loadable(importStatement, fallback = null) {
  const LazyComponent = lazy(importStatement);
  return (props) => {
    return (
      <Suspense fallback={fallback}>
        <LazyComponent />
      </Suspense>
    );
  };
}
