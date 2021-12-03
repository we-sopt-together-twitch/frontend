import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { Page404 } from "../pages/404";
import { PageCategory } from "../pages/Category";
import { PageHome } from "../pages/Home";
import { testRoutes } from "./testRoutes";

export function RouteConfig() {
  return (
    <EnvRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/category" element={<PageCategory />} />
        <Route path="/*" element={<Page404 />} />
        {testRoutes}
      </Routes>
    </EnvRouter>
  );
}

const EnvRouter = (() => {
  if (process.env.REACT_APP_ROUTER_MODE === "HASH") {
    return HashRouter;
  } else {
    return BrowserRouter;
  }
})();
