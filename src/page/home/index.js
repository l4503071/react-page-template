import { useEffect } from "react";
import "./index.scss";
import axios from "../../util/http";

export default function Home() {
  console.log("render home");
  useEffect(() => {
    axios.get("/getCardList").then((res) => {
      if (res?.code !== 0) {
        return;
      }
      console.log(res);
      // dispatch(setMenuList({ list: res?.data }));
    });
  }, []);
  return (
    <div className="App">
      <h1>Home</h1>
    </div>
  );
}
