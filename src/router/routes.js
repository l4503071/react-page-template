import loadable from "@/util/loadable";

const routes = [
  {
    path: "/",
    exact: true,
    component: loadable(() => import("../page/home")),
  },
  {
    path: "/sourcemap",
    exact: true,
    component: loadable(() => import("../page/sourcemap")),
  }
];

export default routes;
