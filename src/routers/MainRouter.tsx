import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PrivateRouter } from "./PrivateRoute";
import { PublicRouter } from "./PublicRoute";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRouter />}></Route>
        <Route path="/public" element={<PublicRouter />}></Route>

        <Route
          path="*"
          element={
            <>
              <p>Not found</p>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
