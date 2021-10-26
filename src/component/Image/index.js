import "./index.scss";
import { useState, memo } from "react";
import cns from "classnames";
import { loadingImg } from "./res/index";

function Image({ src, className, ...otherProps }) {
  const [visible, setVisible] = useState(false);
  function onLoad() {
    setVisible(true);
  }
  const cls = cns(className, "image__real", {
    "image__real--hidden": !visible,
  });
  const imgDom = <img src={src} onLoad={onLoad} className={cls} alt="img" {...otherProps} />;
  return (
    <>
      {imgDom}
      {!visible && <img src={loadingImg} alt="loading img" className={className} {...otherProps} />}
    </>
  );
}

export default memo(Image);
