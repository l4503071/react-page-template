import Mock from "mockjs";

const context = require.context("./modules", false, /\.js$/);
const mockFile = [];

context.keys().forEach((key) => {
  mockFile[key] = context(key);
});
console.log("%cmock 文件", "color: green", mockFile);

Mock.setup({
  timeout: "500-1000",
});
