import "./index.scss";
import PropTypes from "prop-types";
import { memo } from "react";
import { Form, Button, Input } from "antd";
import Editor from "../Editor";

function ErrorTab({ name, desc, code, startLine, endLine, onTrigger, onAnalyze, onInputChange, errorInfo, errorResult }) {
  function _onTrigger() {
    typeof onTrigger === "function" && onTrigger(name);
  }
  function _onAnalyze() {
    typeof onAnalyze === "function" && onAnalyze(name);
  }

  function _onInputChange(e) {
    const { id, value } = e.target;
    typeof onInputChange === "function" && onInputChange(name, {
      [id]: value,
    });
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
          <Button type="primary" onClick={_onTrigger} className="errortab__info__btn">
            触发错误
          </Button>
          <Form>
            <Form.Item label="错误信息">
              <Input value={errorInfo.msg} disabled />
            </Form.Item>
            <Form.Item label="错误行数">
              <Input value={errorInfo.lineNo} onChange={_onInputChange} id="lineNo" />
            </Form.Item>
            <Form.Item label="错误列数">
              <Input value={errorInfo.columnNo} onChange={_onInputChange} id="columnNo" />
            </Form.Item>
            <Form.Item label="错误文件">
              <Input value={errorInfo.url} onChange={_onInputChange} id="url" />
            </Form.Item>
            <Form.Item label="错误堆栈">
              <Input.TextArea value={errorInfo.error} rows={12} />
            </Form.Item>
          </Form>
        </div>
        <div className="errortab__info__right">
          <Button type="primary" onClick={_onAnalyze} className="errortab__info__btn">
            解析 sourcemap
          </Button>
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
