import { useState } from "react";
import "./index.scss";

export default function Xxx() {
  const [count, setCount] = useState(0);
  return (
    <div className="xxx">
      <h1>{count}</h1>
      <button onClick={setCount((count) => count + 1)}></button>
    </div>
  );
}
