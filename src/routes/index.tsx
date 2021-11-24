import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page404 } from "../pages/404";
import { PageCategory } from "../pages/Category";
import { PageHome } from "../pages/Home";
import { testRoutes } from "./testRoutes";

export function RouteConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/category" element={<PageCategory />} />
        <Route path="/*" element={<Page404 />} />
        {testRoutes}
      </Routes>
    </BrowserRouter>
  );
}
