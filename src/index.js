import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout/index";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Layout />
  </Router>,
  document.getElementById("root")
);
