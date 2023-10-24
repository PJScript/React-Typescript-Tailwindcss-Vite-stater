import PAGE_LIST from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        {PAGE_LIST.map(({ path, children }) => (
          <Route path={path} element={children} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
