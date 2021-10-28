import loadable from "@/util/loadable";

const routes = [
  {
    path: "/",
    exact: true,
    component: loadable(() => import("../page/home")),
  },
  {
    path: "/application",
    exact: true,
    component: loadable(() => import("../page/application")),
  }
];

export default routes;
