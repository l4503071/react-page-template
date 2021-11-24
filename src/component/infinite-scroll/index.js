import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./index.scss";
import { addLoadMoreListener, addScrollListenter } from "./util";

export default function InfiniteScroll({ loadMore, children }) {
  const loadMoreRef = useRef(null);
  const containerRef = useRef(null);
  useEffect(() => {
    const { removeScrollListener } = addScrollListenter(containerRef.current);
    const { unobserve } = addLoadMoreListener(loadMoreRef.current, loadMore);
    return () => {
      removeScrollListener();
      unobserve();
    };
  }, []);
  return (
    <div ref={containerRef} className="infinite-scroll">
      <div className="infinite-scroll__content">
        {children}
      </div>
      <div ref={loadMoreRef} className="infinite-scroll__load-more" />
    </div>
  );
}

InfiniteScroll.propTypes = {
  loadMore: PropTypes.func,
  children: PropTypes.node,
};

InfiniteScroll.defaultProps = {
  loadMore: () => {},
};
