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
const tabConfigList = [
  {
    key: "test_1",
    name: "测试用例 1",
    desc: "回调函数中抛出异常。",
    code : function_1,
    startLine: 3,
    endLine: 3,
    errorInfo: {},
    errorResult: {},
  }
];

export default tabConfigList;
