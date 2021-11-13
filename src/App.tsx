import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page404 } from "./pages/404";
import { PageHome } from "./pages/Home";

export function App() {
  return <RouteConfig />;
}

function RouteConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
