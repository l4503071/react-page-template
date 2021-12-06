import { Tag } from "antd";
import { memo, useRef, useState, useEffect } from "react";
import { BarChartOutlined, CloseCircleFilled, ClearOutlined } from "@ant-design/icons";
import { useTrackData } from "@/util/track";
import { formatDateTime } from "@/util";
import { FixedSizeList as List } from "react-window";
import cns from "classnames";
import "./index.scss";

function Track() {
  const [visible, setVisible] = useState(false);
  const { list, setList } = useTrackData();
  const listRef = useRef(null);
  useEffect(() => {
    listRef.current && listRef.current.scrollToItem(list.length);
  }, [list]);
  const cls = cns("track__content", {
    "track__content--visible": visible,
    "track__content--hidden": !visible,
  });
  const onClear = function () {
    setList([]);
  };

  return (
    <div className="track">
      <div className={cls}>
        <CloseCircleFilled
          className="track__close"
          onClick={() => {
            setVisible(false);
          }}
        />
        {
          list.length > 0 ? (
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
          ) : <div className="track__content--no-data">暂无数据，请滚动页面触发曝光...</div>
        }
        <ClearOutlined className="track__content__clear" onClick={onClear} />
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
