import ReactDOM from "react-dom";
import Layout from "@/layout";
import { BrowserRouter as Router } from "react-router-dom";
import store from "@/store";
import { Provider } from "react-redux";
import "normalize.css";
import "./index.scss";
import "antd/dist/antd.css";
import "@/mock";

ReactDOM.render(
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <Layout />
    </Router>
  </Provider>,
  document.getElementById("root")
);
