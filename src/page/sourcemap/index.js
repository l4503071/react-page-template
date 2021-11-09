import "./index.scss";
import { Tabs } from "antd";
import ErrorTab from "./component/ErrorTab";
import useErrorListener from "./hook/useErrorListener";
import { useSelector, useDispatch } from "react-redux";
import { editConfigList } from "./meta/sourcemapReducer";
import { useEffect } from "react";
import { analyzeSourcemap } from "./util";

const { TabPane } = Tabs;

function Sourcemap() {
  console.log("render sourcemap");
  const tabConfigList = useSelector((state) => {
    return state.sourcemap.tabConfigList;
  });
  const dispatch = useDispatch();
  const { error } = useErrorListener();
  useEffect(() => {
    dispatch(
      editConfigList({
        key: error.name,
        props: {
          errorInfo: {
            ...error,
          },
        },
      })
    );
  }, [error]);

  function onTrigger(name) {
    if (name === "test_1") {
      throw new Error("test_1");
    }
  }

  async function onAnalyze(name) {
    const tabConfig = tabConfigList.find((item) => {
      return item.key === name;
    });
    const result = await analyzeSourcemap(tabConfig.errorInfo);
    dispatch(editConfigList({
      key: name,
      props: {
        errorResult: {
          ...result,
        },
      },
    }));
  }

  function onInputChange(name, props) {
    const data = tabConfigList.find(item => item.key === name);
    dispatch(
      editConfigList({
        key: error.name,
        props: {
          errorInfo: {
            ...data.errorInfo,
            ...props,
          },
        },
      })
    );
  }

  return (
    <div className="sourcemap">
      <div className="sourcemap__desc">
        <h1>说明</h1>
        <p>此页面仅用于测试 source map 功能。</p>
      </div>
      <Tabs defaultActiveKey="1" className="sourcemap__test">
        {tabConfigList.map((item) => {
          return (
            <TabPane tab={item.name} key={item.key}>
              <ErrorTab {...item} name={item.key} onTrigger={onTrigger} onAnalyze={onAnalyze} onInputChange={onInputChange} />
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
}

export default Sourcemap;
