import ReactDOM from "react-dom";
import Layout from "@/layout";
import { HashRouter as Router } from "react-router-dom";
import store from "@/store";
import { Provider } from "react-redux";
import { ErrorBoundary } from "./component/hoc/withErrorBoundary";
import "normalize.css";
import "./index.scss";
import "antd/dist/antd.css";
import "@/mock";

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <Router>
        <Layout />
      </Router>
    </Provider>
  </ErrorBoundary>,
  document.getElementById("root")
);
