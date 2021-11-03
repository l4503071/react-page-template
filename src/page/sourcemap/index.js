/* eslint-disable no-unused-vars */
import "./index.scss";
import { Tabs, Button } from "antd";
import Editor from "./component/Editor";
import { readFileContent } from "./util";
import { useEffect, useState } from "react";
import { getFileContentFromUrl } from "@/util";

const { TabPane } = Tabs;

function Sourcemap() {
  console.log("render sourcemap");
  const [lineNo, setLineNo] = useState(-1);
  const [columnNo, setColumnNo] = useState(-1);
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  useEffect(() => {
    window.onerror = function (msg, url, lineNo, columnNo) {
      console.log("1", lineNo, columnNo, url);
      setLineNo(lineNo);
      setColumnNo(columnNo);
      setUrl(url);
      return false;
    };
  }, []);
  useEffect(async () => {
    console.log("2", lineNo, columnNo, url);
    if (lineNo < 0 || columnNo < 0 || !url) {
      return;
    }
    const mapContent = await getFileContentFromUrl(`${url}.map`);
    sourceMap.SourceMapConsumer.with(mapContent, null, (consumer) => {
      // console.log(consumer.originalPositionFor({
      //   line: lineNo,
      //   column: columnNo,
      // }));
      setResult(
        JSON.stringify(
          consumer.originalPositionFor({
            line: lineNo,
            column: columnNo,
          })
        )
      );
    });
    return () => {};
  }, [lineNo, columnNo, url]);
  function onClickTest_1() {
    throw new Error("test 1...");
  }
  return (
    <div className="sourcemap">
      <div className="sourcemap__desc">
        <h1>说明</h1>
        <p>此页面仅用于测试 source map 功能。</p>
      </div>
      <Tabs defaultActiveKey="1" className="sourcemap__test">
        <TabPane tab="测试用例 1" key="1">
          <div>
            <Button type="primary" className="sourcemap__test__btn" onClick={onClickTest_1}>
              测试
            </Button>
            {!!result && result}
          </div>
          <Editor content={readFileContent("page")} className="sourcemap__test__editor" startLine={10} endLine={16} />
        </TabPane>
        <TabPane tab="测试用例 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="测试用例 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Sourcemap;
