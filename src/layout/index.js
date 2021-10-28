import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Router from "@/router";
import Header from "@/component/header";
import axios from "@/util/http";
import { setMenuList } from "@/store/commonReducer";
import "./index.scss";

export default function Layout() {
  console.log("render layout");
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("/getMenuList").then((res) => {
      if (res?.code !== 0) {
        return;
      }
      dispatch(setMenuList({ list: res?.data }));
    });
  }, []);
  return (
    <div className="app">
      <Header />
      <Router />
    </div>
  );
}
