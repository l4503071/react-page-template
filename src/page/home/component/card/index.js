import { memo } from "react";
import PropTypes from "prop-types";
import "./index.scss";
import Image from "@/component/Image";

function Card({ name, count, img }) {
  console.log("render card");
  return (
    <div className="card">
      <div className="card__name">{name}</div>
      <div className="card__count">{count}</div>
      <Image className="card__img" src={img} lazy />
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  count: PropTypes.number,
  img: PropTypes.string,
};

export default memo(Card);
