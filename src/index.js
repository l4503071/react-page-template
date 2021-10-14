import ReactDOM from "react-dom";
import Layout from "./layout/index";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import "normalize.css";
import "./index.scss";
import "./mock";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Layout />
    </Router>
  </Provider>,
  document.getElementById("root")
);
