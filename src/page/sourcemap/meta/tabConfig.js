const function_1 = 
`function App() {
  function onClick() {
    throw new Error("test_1");
  };
  return (
    <div onClick={onClick}>click</div>
  );
}
`;
const function_2 = 
`function App() {
  function onClick() {
    new Promise(() => {
      throw new Error("test_2");
    })
  };
  return (
    <div onClick={onClick}>click</div>
  );
}
`;
const tabConfigList = [
  {
    key: "test_1",
    name: "测试用例 1",
    desc: "回调函数中抛出 同步 异常。",
    code : function_1,
    startLine: 3,
    endLine: 3,
    errorInfo: {},
    errorResult: {},
  },
  {
    key: "test_2",
    name: "测试用例 2",
    desc: "回调函数中抛出 异步 异常。",
    code : function_2,
    startLine: 4,
    endLine: 4,
    errorInfo: {},
    errorResult: {},
  }
];

export default tabConfigList;
