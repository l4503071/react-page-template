import "./index.scss";
import PropTypes from "prop-types";
import { memo, useState } from "react";
import { Form, Button, Input, message } from "antd";
import Editor from "../Editor";

function ErrorTab({ name, desc, code, startLine, endLine, onTrigger, onAnalyze, onInputChange, errorInfo, errorResult }) {
  const [index, setIndex] = useState(1);


  function _onTrigger() {
    typeof onTrigger === "function" && onTrigger(name);
  }
  function _onAnalyze() {
    typeof onAnalyze === "function" && onAnalyze(name);
  }
  function _onInputChange(e) {
    const { id, value } = e.target;
    typeof onInputChange === "function" &&
      onInputChange(name, {
        [id]: value,
      });
  }
  function _onCalculate(next) {
    if (!errorInfo?.error) {
      return message.warning("请先触发错误.");
    }
    const lines = errorInfo?.error.split("\n");
    const line = lines[index];
    // 正则参考: https://github.com/getsentry/sentry-javascript/blob/45508c08d30a0d959c60e1449605350d782ecc47/packages/browser/src/tracekit.ts
    const chrome = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
    const path = chrome.exec(line);
    const [, , url, lineNo, columnNo] = path; 
    _onInputChange({
      target: {
        id: "url",
        value: url,
      },
    });
    _onInputChange({
      target: {
        id: "lineNo",
        value: lineNo,
      },
    });
    _onInputChange({
      target: {
        id: "columnNo",
        value: columnNo,
      },
    });
    if (next && index >= lines.length - 1) {
      return message.warning("已是最后一个错误.");
    } else if(!next && index <= 1) {
      return message.warning("已是第一个错误.");
    }
    setIndex(next ? index + 1 : index - 1);
  }

  return (
    <div className="errortab">
      <Form layout="vertical">
        <Form.Item label="用例说明">{desc}</Form.Item>
        <Form.Item label="代码示例">
          <div className="errortab__code">
            <Editor key="result" content={code} startLine={startLine} endLine={endLine} />
          </div>
        </Form.Item>
      </Form>

      <div className="errortab__info">
        <div className="errortab__info__left">
          <div className="errortab__info__btn">
            <Button type="primary" onClick={_onTrigger}>
              触发错误
            </Button>
            <Button type="primary" onClick={_onCalculate.bind(null, false)}>
              定位上一个错误文件
            </Button>
            <Button type="primary" onClick={_onCalculate.bind(null, true)}>
              定位下一个错误文件
            </Button>
          </div>
          <div className="errortab__info__btn">
            当前错误索引: {index}
          </div>
          <Form>
            <Form.Item label="错误信息">
              <Input value={errorInfo.msg} disabled />
            </Form.Item>
            <Form.Item label="错误行数">
              <Input value={errorInfo.lineNo} onChange={_onInputChange} id="lineNo" disabled />
            </Form.Item>
            <Form.Item label="错误列数">
              <Input value={errorInfo.columnNo} onChange={_onInputChange} id="columnNo" disabled />
            </Form.Item>
            <Form.Item label="错误文件">
              <Input value={errorInfo.url} onChange={_onInputChange} id="url" disabled />
            </Form.Item>
            <Form.Item label="错误堆栈">
              <Input.TextArea value={errorInfo.error} rows={12} disabled />
            </Form.Item>
          </Form>
        </div>
        <div className="errortab__info__right">
          <div className="errortab__info__btn">
            <Button type="primary" onClick={_onAnalyze}>
              解析 sourcemap
            </Button>
          </div>

          <div className="errortab__info__edtior">
            <Editor key="result" content={errorResult.content} startLine={errorResult.line} endLine={errorResult.line} />
          </div>
        </div>
      </div>
    </div>
  );
}

ErrorTab.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  code: PropTypes.string,
  startLine: PropTypes.number,
  endLine: PropTypes.number,
  onTrigger: PropTypes.func,
  onAnalyze: PropTypes.func,
  onInputChange: PropTypes.func,
  errorInfo: PropTypes.object,
  errorResult: PropTypes.object,
};

export default memo(ErrorTab);
