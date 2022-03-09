import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PrivateRouter } from "./PrivateRoute";
import { PublicRouter } from "./PublicRoute";

import { AuthRouter } from "../containers/auth/AuthRouter";
import { Dashboard } from "../containers/dashboard/Dashboard";

import { TokenContext } from "../contexts/TokenContext";

export const MainRouter = () => {
  const { token } = useContext(TokenContext);

  const [thereIsToken, setThereIsToken] = useState(false);
  const [confirmingToken, setConfirmingToken] = useState(true);

  useEffect(() => {
    setThereIsToken(token !== null);
  }, [token]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setThereIsToken(accessToken !== null);
    setConfirmingToken(false);
  }, []);

  if (confirmingToken) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRouter allowNavigation={thereIsToken} />}>
          <Route path="/" element={<Dashboard />}></Route>
        </Route>
        <Route element={<PublicRouter allowNavigation={!thereIsToken} />}>
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
