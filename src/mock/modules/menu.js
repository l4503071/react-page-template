import Mock from "mockjs";
console.log(1);
Mock.mock(/getMenuList/, 'get', () => {
  console.log(2);
  return {
    code: 0,
    data: [],
  };
});
