import { Route } from "react-router";
import { BebopTestPage } from "../pages/testPages/Bebop";
import { SuzieTestPage } from "../pages/testPages/Suzie";
import { TekiterTestPage } from "../pages/testPages/Tekiter";

const routes = (
  <Route path="test">
    <Route path="tekiter" element={<TekiterTestPage />} />
    <Route path="bebop" element={<BebopTestPage />} />
    <Route path="suzie" element={<SuzieTestPage />} />
  </Route>
);

export const testRoutes = (function () {
  if (process.env.NODE_ENV === "development") {
    return routes;
  }
  return null;
})();
