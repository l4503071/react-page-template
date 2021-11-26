import PropTypes from "prop-types";
import cns from "classnames";
import { Blurhash } from "react-blurhash";
import { useState, useEffect, memo, useRef } from "react";
import { addLazyLoadListener } from "./util/index";
import "./index.scss";

function Image({ src, className, lazy, onLoad, width, height, ...otherProps }) {
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
  function _onLoad() {
    setLoading(false);
    onLoad();
  }
  const cls = cns(className, "image__real", {
    "image__real--hidden": loading,
  });
  const imgDom = <img src={src} style={{ width, height }} onLoad={_onLoad} className={cls} alt="img" {...otherProps} />;
  return (
    <div ref={el} className="image">
      {visible && imgDom}
      {loading && <Blurhash hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" width={width} height={height} />}
    </div>
  );
}

Image.propTypes = {
  src: PropTypes.string,
  lazy: PropTypes.bool,
  className: PropTypes.string,
  onLoad: PropTypes.func,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

Image.defaultProps = {
  onLoad: () => {},
};

export default memo(Image);
