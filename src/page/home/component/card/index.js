import { memo } from "react";
import "./index.scss";

function Card({ name, count }) {
  console.log("render card");
  return (
    <div className="card">
      <div className="card__name">{name}</div>
      <div className="card__count">{count}</div>
    </div>
  );
}

export default memo(Card);
