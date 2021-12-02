import { Tag } from "antd";
import { memo, useRef, useState, useEffect } from "react";
import { BarChartOutlined, CloseCircleFilled } from "@ant-design/icons";
import { useTrackData } from "@/util/track";
import { formatDateTime } from "@/util";
import { FixedSizeList as List } from "react-window";
import cns from "classnames";
import "./index.scss";

function Track() {
  const [visible, setVisible] = useState(false);
  const { list } = useTrackData();
  const listRef = useRef(null);
  useEffect(() => {
    listRef.current.scrollToItem(list.length);
  }, [list]);
  const cls = cns("track__content", {
    "track__content--visible": visible,
    "track__content--hidden": !visible,
  });

  return (
    <div className="track">
      <div className={cls}>
        <CloseCircleFilled
          className="track__close"
          onClick={() => {
            setVisible(false);
          }}
        />
        <List ref={listRef} height={260} itemCount={list.length} itemSize={30} width={300}>
          {({ index, style }) => {
            const cls = index % 2 === 0 ? "track__content__item--odd" : "";
            return (
              <div className={cls + " track__content__item"} style={style}>
                <div>{formatDateTime(list[index].time)}</div>
                <div>{list[index].msg}</div>
              </div>
            );
          }}
        </List>
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
