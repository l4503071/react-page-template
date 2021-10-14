import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../util/http";
import { setCardList } from "./meta/homeReducer";
import Card from "./component/card";
import "./index.scss";

export default function Home() {
  console.log("render home");
  const cardList = useSelector((state) => {
    return state.home.cardList;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("/getCardList").then((res) => {
      if (res?.code !== 0) {
        return;
      }
      dispatch(setCardList({ list: res?.data }));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="home">
      <div className="home__card">
        {cardList.map((card, index) => {
          return <Card key={index} name={card.name} count={card.count} />;
        })}
        {Array(10)
          .fill(true)
          .map((_, index) => (
            <div key={index} style={{ width: "300px", height: 0, margin: "8px" }} />
          ))}
      </div>
    </div>
  );
}
