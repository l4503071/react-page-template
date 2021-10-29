import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "@/util/http";
import { setCardList, setFilter } from "./meta/homeReducer";
import Card from "./component/card";
import Filter from "./component/filter";
import { Badge } from "antd";
import "./index.scss";

export default function Home() {
  console.log("render home");
  const cardList = useSelector((state) => {
    return state.home.cardList.filter((card) => {
      const str = "" + card.name + card.count;
      return str.includes(state.home.filter);
    });
  });
  const dispatch = useDispatch();
  const getCardList = useCallback(() => {
    axios.get("/getCardList").then((res) => {
      if (res?.code !== 0) {
        return;
      }
      dispatch(setCardList({ list: res?.data }));
    });
  }, [dispatch]);

  useEffect(getCardList, [getCardList]);

  const onClickChange = useCallback(() => {
    getCardList();
  }, [getCardList]);

  const onChangeFilter = useCallback(
    (event) => {
      dispatch(setFilter({ filter: event.target.value }));
    },
    [dispatch]
  );

  return (
    <div className="home">
      <div className="home__filter">
        <Filter onClick={onClickChange} onChange={onChangeFilter} />
      </div>
      <div className="home__card">
        <Badge count={cardList.length} className="home__card__badge" />
        {cardList.map((card) => {
          // card.image 追加 query，是为了测试图片的 懒加载功能
          return <Card key={card.name + card.count} name={card.name} count={card.count} img={card.image + "/" + card.color.slice(1)} />;
        })}
        {
          // 首/末 行对齐，补齐数量大于屏幕显示最大数量即可
          Array(10)
            .fill(true)
            .map((_, index) => (
              <div key={index} style={{ width: "316px", height: 0 }} />
            ))
        }
      </div>
    </div>
  );
}
