import Mock from "mockjs";
Mock.mock(/getCardList/, "get", {
  code: 0,
  "data|5-20": [
    {
      name: "@province",
      "count|0-100": 0,
    },
  ],
});
