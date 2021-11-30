import { Tag, Timeline } from "antd";
import { memo, useRef, useState, useEffect } from "react";
import { BarChartOutlined, CloseCircleFilled } from "@ant-design/icons";
import { useTrackData } from "@/util/track";
import { formatDateTime } from "@/util";
import cns from "classnames";
import "./index.scss";

function Track() {
  const [visible, setVisible] = useState(false);
  const { list } = useTrackData();
  const listRef = useRef(null);
  useEffect(() => {
    listRef.current.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [list]);
  const cls = cns("track__content", {
    "track__content--visible": visible,
    "track__content--hidden": !visible,
  });
  return (
    <div className="track">
      <div className={cls} ref={listRef}>
        <CloseCircleFilled
          className="track__close"
          onClick={() => {
            setVisible(false);
          }}
        />
        <div>
          <Timeline mode={"left"}>
            {list.map((item, index) => {
              return (
                <Timeline.Item
                  key={index}
                  label={formatDateTime(item.time)}
                  className="track__content__item"
                >
                  {item.msg}
                </Timeline.Item>
              );
            })}
          </Timeline>
        </div>
      </div>
      <Tag
        icon={<BarChartOutlined />}
        color="processing"
        className="track__btn"
        onClick={() => {
          setVisible((val) => {
            return !val;
          });
        }}
      >
        埋点
      </Tag>
    </div>
  );
}

export default memo(Track);
