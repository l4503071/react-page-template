import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../util/http";
import { setCardList } from "./meta/homeReducer";
import Card from "./component/card";
import Filter from "./component/filter";
import "./index.scss";

export default function Home() {
  console.log("render home");
  const cardList = useSelector((state) => {
    return state.home.cardList;
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

  function onClickChange() {
    getCardList();
  }

  function onChangeFilter(event) {
    console.log(event.target.value);
  }

  return (
    <div className="home">
      <div className="home__filter">
        <Filter onClick={onClickChange} onChange={onChangeFilter} />
      </div>
      <div className="home__card">
        {cardList.map((card, index) => {
          return <Card key={index} name={card.name} count={card.count} />;
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
