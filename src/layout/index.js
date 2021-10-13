import { useEffect } from "react";
import Router from "../router";
import Header from "../component/header";

export default function Layout() {
  useEffect(() => {
    fetch("/getMenuList").then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <>
      <Header />
      <Router />
    </>
  );
}
