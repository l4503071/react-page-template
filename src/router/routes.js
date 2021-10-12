import Home from "../page/home";
import Application from "../page/application";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/application",
    exact: true,
    component: Application,
  }
];

export default routes;
