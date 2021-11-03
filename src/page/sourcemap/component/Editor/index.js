import "./index.scss";
import MonacoEditor, { monaco } from "react-monaco-editor";
import PropTypes from "prop-types";
import { memo } from "react";

function Editor({ content, startLine, endLine }) {
  const options = {
    readOnly: true,
  };
  return (
    <div className="editor">
      <MonacoEditor
        language="javascript"
        theme="vs"
        value={content}
        options={options}
        editorDidMount={(editor) => {
          if (typeof startLine !== "number" || typeof endLine !== "number") {
            return;
          }
          if (startLine > endLine) {
            return;
          }
          editor.deltaDecorations(
            [],
            [
              {
                range: new monaco.Range(startLine, 1, endLine, 1), // 开始行，开始列，结束行，结束列
                options: {
                  isWholeLine: true,
                  className: "editor--hightlight",
                },
              }
            ]
          );
        }}
      />
    </div>
  );
}

Editor.propTypes = {
  content: PropTypes.string,
  startLine: PropTypes.number,
  endLine: PropTypes.number,
};

export default memo(Editor);
