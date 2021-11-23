import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCardList, setFilter } from "./meta/homeReducer";
import Card from "./component/card";
import Filter from "./component/filter";
import "./index.scss";
import { makeSelectCardList } from "./meta/selector";

export default function Home() {
  console.log("render home");
  const cardList = useSelector(makeSelectCardList());
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCardList());
  }, [getCardList]);

  const onClickChange = useCallback(() => {
    dispatch(getCardList());
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
        {cardList.map((card) => {
          return <Card key={card.url} creator={card.creator} url={card.url} labels={card.labels} />;
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
