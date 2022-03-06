import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PrivateRouter } from "./PrivateRoute";
import { PublicRouter } from "./PublicRoute";

import { AuthRouter } from "../containers/auth/AuthRouter";
import { Dashboard } from "../containers/dashboard/Dashboard";

export const MainRouter = () => {
  const allowNav = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRouter allowNavigation={allowNav} />}>
          <Route path="/" element={<Dashboard />}></Route>
        </Route>
        <Route element={<PublicRouter allowNavigation={!allowNav} />}>
          <Route path="/auth/*" element={<AuthRouter />}></Route>
        </Route>

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
