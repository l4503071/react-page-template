import Mock, { Random } from "mockjs";

Mock.mock(/getCardList/, "get", {
  code: 0,
  "data|20": [
    {
      creator: "@cname",
      "labels|0-3": ["@word"],
      url: Random.image("200x200"),
      color: "@color",
    }
  ],
});
