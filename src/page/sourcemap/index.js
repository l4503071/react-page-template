import "./index.scss";
import { Tabs, Button, Modal, Form, Input } from "antd";
import Editor from "./component/Editor";
import { readFileContent } from "./util";
import { useEffect, useState } from "react";
import { getFileContentFromUrl } from "@/util";

const { TabPane } = Tabs;

function Sourcemap() {
  console.log("render sourcemap");
  const [error, setError] = useState({});
  const [errorVisible, setErrorVisible] = useState(false);
  const [result, setResult] = useState({});
  const [resultVisible, setResultVisible] = useState(false);

  useEffect(() => {
    window.onerror = function (msg, url, lineNo, columnNo, err) {
      setError({
        msg,
        url,
        lineNo,
        columnNo,
        error: err.stack,
      });
      setErrorVisible(true);
      console.log(error);
      return false; // 返回 true，阻止默认行为，如在 console 中打印错误
    };
  }, []);
  useEffect(async () => {
    if (error.lineNo < 0 || error.columnNo < 0 || !error.url) {
      return;
    }
    return () => {};
  }, [error]);
  function onClickTest_1() {
    // setTimeout(() => {
    throw new Error("test 1...");
    // }, 300);
  }

  async function onClicOk() {
    const mapContent = await getFileContentFromUrl(`${error.url}.map`);
    sourceMap.SourceMapConsumer.with(mapContent, null, (consumer) => {
      const position = consumer.originalPositionFor({
        line: Number(error.lineNo),
        column: Number(error.columnNo),
      });
      const content = consumer.sourceContentFor(position.source);
      console.log("**", content);
      setResultVisible(true);
      setResult({
        ...position,
        content,
      });
    });
  }

  function onClickCancel() {
    setErrorVisible(false);
  }

  function onInputChange(e) {
    const { id, value } = e.target;
    setError({
      ...error,
      [id]: value,
    });
  }

  function onResultCancel() {
    setResultVisible(false);
  }

  return (
    <div className="sourcemap">
      <div className="sourcemap__desc">
        <h1>说明</h1>
        <p>此页面仅用于测试 source map 功能。</p>
      </div>
      <Modal title="分析定位结果" visible={resultVisible} maskClosable={false} width="80%" cancelText="关闭" centered destroyOnClose onCancel={onResultCancel}>
        <div className="sourcemap__result">
          <Editor key="result" content={result.content} startLine={result.line} endLine={result.line} />
        </div>
      </Modal>
      <Modal title="错误信息" visible={errorVisible} maskClosable={false} width="60%" cancelText="关闭" okText="定位分析" centered onOk={onClicOk} onCancel={onClickCancel}>
        <Form>
          <Form.Item label="错误信息">
            <Input value={error.msg} />
          </Form.Item>
          <Form.Item label="错误行数">
            <Input value={error.lineNo} onChange={onInputChange} id="lineNo" />
          </Form.Item>
          <Form.Item label="错误列数">
            <Input value={error.columnNo} onChange={onInputChange} id="columnNo" />
          </Form.Item>
          <Form.Item label="错误文件">
            <Input value={error.url} onChange={onInputChange} id="url" />
          </Form.Item>
          <Form.Item label="错误堆栈">
            <Input.TextArea value={error.error} rows={8} />
          </Form.Item>
        </Form>
      </Modal>
      <Tabs defaultActiveKey="1" className="sourcemap__test">
        <TabPane tab="测试用例 1" key="1">
          <div>
            <Button type="primary" className="sourcemap__test__btn" onClick={onClickTest_1}>
              测试
            </Button>
          </div>
          <Editor key="origin" content={readFileContent("page")} className="sourcemap__test__editor" startLine={37} endLine={41} />
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
