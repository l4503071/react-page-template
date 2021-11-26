import { createElement, useEffect, useRef } from "react";
import PropTypes from "prop-types";

function withAppear(type) {
  const Wrapped = ({ children, onAppear, onDisappear, firstAppear, firstDisappear, ...props }) => {
    const ref = useRef(null);
    useEffect(() => {
      const dom = ref.current;
      dom.addEventListener("appear", onAppear);
      dom.addEventListener("disappear", onDisappear);
      dom.setAttribute("data-appear-once", firstAppear);
      dom.setAttribute("data-disappear-once", firstDisappear);
      return () => {
        dom.removeEventListener("appear", onAppear);
        dom.removeEventListener("disappear", onDisappear);
      };
    }, []);
    return createElement(type, { ...props, ref }, children);
  };
  Wrapped.displayName = `appear_${type}`;
  Wrapped.propTypes = {
    children: PropTypes.node,
    onAppear: PropTypes.func,
    onDisappear: PropTypes.func,
    firstAppear: PropTypes.bool,
    firstDisappear: PropTypes.bool,
  };
  Wrapped.defaultProps = {
    onAppear: () => {},
    onDisappear: () => {},
    firstAppear: false,
    firstDisappear: false,
  };
  return Wrapped;
}

export default withAppear;

export const Div = withAppear("div");
