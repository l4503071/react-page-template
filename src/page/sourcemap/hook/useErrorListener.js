/* eslint-disable no-debugger */
import { useEffect, useState } from "react";

export default function () {
  const [error, setError] = useState({});
  useEffect(() => {
    window.onerror = function (msg, url, lineNo, columnNo, err) {
      setError({
        msg,
        url,
        lineNo,
        columnNo,
        error: err.stack,
        name: err.message,
      });
      return false; // 返回 true，阻止默认行为，如在 console 中打印错误
    };
  }, []);
  return {
    error,
  };
}