import "./index.scss";
import { Tabs, Button } from "antd";
import Editor from "./component/Editor";
import { readFileContent } from "./util";

const { TabPane } = Tabs;

function Sourcemap() {
  console.log("render sourcemap");
  function onClickTest_1() {
    try {
      throw new Error("test 1...");
    } catch(err) {
      console.error(err);
    }
  }
  return (
    <div className="sourcemap">
      <div className="sourcemap__desc">
        <h1>说明</h1>
        <p>此页面仅用于测试 source map 功能。</p>
      </div>
      <Tabs defaultActiveKey="1" className="sourcemap__test">
        <TabPane tab="测试用例 1" key="1">
          <Button type="primary" className="sourcemap__test__btn" onClick={onClickTest_1}>测试</Button>
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
