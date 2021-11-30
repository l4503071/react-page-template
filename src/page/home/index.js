import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCardList, setFilter } from "./meta/homeReducer";
import Card from "./component/card";
import Filter from "./component/filter";
import Track from "./component/track";
import { makeSelectCardList } from "./meta/selector";
import InfiniteScroll from "@/component/infinite-scroll";
import "./index.scss";

export default function Home() {
  console.log("render home");
  const cardList = useSelector(makeSelectCardList());
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCardList());
  }, [getCardList]);

  function onClickChange() {
    dispatch(getCardList());
  }

  const onChangeFilter = useCallback(
    (event) => {
      dispatch(setFilter({ filter: event.target.value }));
    },
    [dispatch]
  );

  function loadMore() {
    dispatch(getCardList({ append: true }));
  }

  return (
    <div className="home">
      <div className="home__filter">
        <Filter onClick={onClickChange} onChange={onChangeFilter} />
      </div>
      <div className="home__card">
        <InfiniteScroll loadMore={loadMore} onAppear={() => {}}>
          <div className="home__card__list">
            {cardList.map((card, index) => {
              return <Card key={card.url} creator={card.creator} url={card.url} labels={card.labels} eventData={{ url: card.url, index }} />;
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
          {cardList.length > 0 && <div className="home__card__loading">loading...</div>}
        </InfiniteScroll>
      </div>
      <Track />
    </div>
  );
}
