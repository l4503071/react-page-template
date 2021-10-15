import "./index.scss";
import { Button, Input } from "antd";
import { memo } from "react";

function Filter({ onClick, onChange }) {
  console.log("render filter");
  return (
    <div className="filter">
      <Input style={{ width: 400 }} onChange={onChange} placeholder="请输入过滤选项" />
      <Button style={{ marginLeft: 8 }} onClick={onClick}>
        换一批
      </Button>
    </div>
  );
}

export default memo(Filter);
