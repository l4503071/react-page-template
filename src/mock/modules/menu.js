import Mock from "mockjs";
Mock.mock(/getMenuList/, "get", () => {
  return {
    code: 0,
    data: [
      {
        name: "首页",
        path: "/",
      },
      {
        name: "应用中心",
        path: "/application",
      }
    ],
  };
});
