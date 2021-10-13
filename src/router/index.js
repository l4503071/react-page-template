import { Switch, Route } from "react-router-dom";
import routes from "./routes";

export default function Layout() {
  return (
    <Switch>
      {routes.map((item) => {
        return (
          <Route key={item.path} path={item.path} exact={item.exact}>
            <item.component />
          </Route>
        );
      })}
    </Switch>
  );
}
