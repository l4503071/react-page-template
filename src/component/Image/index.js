import PropTypes from "prop-types";
import "./index.scss";
import { useState, useEffect, memo, useRef } from "react";
import cns from "classnames";
import { loadingImg, addLazyLoadListener } from "./util/index";

function Image({ src, className, lazy, ...otherProps }) {
  const [visible, setVisible] = useState(!lazy); // 图片是否可见 
  const [loading, setLoading] = useState(true); // 图片是否在加载 
  const el = useRef(null);

  function lazyLoadHandler() {
    setVisible(true);
  }
  useEffect(() => {
    let observer;
    if (lazy) {
      observer = addLazyLoadListener(el.current, lazyLoadHandler);
    }
    return () => {
      if (observer && el.current) {
        observer.unobserve(el.current);
      }
    };
  }, [lazy]);
  function onLoad() {
    setLoading(false);
  }
  const cls = cns(className, "image__real", {
    "image__real--hidden": loading,
  });
  const imgDom = <img src={src} onLoad={onLoad} className={cls} alt="img" {...otherProps} />;
  return (
    <div ref={el}>
      {visible && imgDom}
      {loading && <img src={loadingImg} alt="loading img" className={className} {...otherProps} />}
    </div>
  );
}

Image.propTypes = {
  src: PropTypes.string,
  lazy: PropTypes.bool,
  className: PropTypes.string,
};

export default memo(Image);
