/* eslint-disable no-unused-vars */
import { memo, useState } from "react";
import PropTypes from "prop-types";
import "./index.scss";
import Image from "@/component/Image";
import { download } from "@/util";

function Card({ url, creator, labels }) {
  console.log("render card");
  const [loaded, setLoaded] = useState(false);
  function onLoad() {
    setLoaded(true);
  }
  return (
    <div className="card">
      <div className="card__top">
        <Image src={url} onLoad={onLoad} width={300} height={300} lazy />
        {loaded && (
          <div className="card__mask">
            <div className="card__creator" title={creator}>
              {creator.slice(0, 1)}
            </div>
            <div className="card__download" onClick={() => download(url)}>
              <svg width="32" height="32" className="c_c7b" viewBox="0 0 32 32" version="1.1" aria-hidden="false">
                <path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z"></path>
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="card__labels">
        {labels.map((label) => {
          return (
            <span key={label} className="card__labels__item">
              {label}
            </span>
          );
        })}
      </div>
    </div>
  );
}

Card.propTypes = {
  url: PropTypes.string,
  creator: PropTypes.string,
  labels: PropTypes.array,
};

export default memo(Card);
