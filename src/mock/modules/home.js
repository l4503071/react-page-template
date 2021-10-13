import Mock from "mockjs";
Mock.mock(/getCardList/, "get", {
  code: 0,
  "data|1-10": [
    {
      name: "@province",
      "count|0-100": 0,
    },
  ],
});
