import Mock, { Random } from "mockjs";

Mock.mock(/getCardList/, "get", {
  code: 0,
  "data|5-20": [
    {
      name: "@province",
      image: Random.image("200x200"),
      "count|0-100": 0,
    }
  ],
});
