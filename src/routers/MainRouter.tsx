import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PrivateRouteValidator } from "./PrivateRouteValidator";
import { PublicRouteValidator } from "./PublicRouteValidator";

import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

import { TokenContext } from "../contexts/TokenContext";

export const MainRouter = () => {
  const { token, setToken } = useContext(TokenContext);

  const [thereIsToken, setThereIsToken] = useState(false);
  const [confirmingToken, setConfirmingToken] = useState(true);

  useEffect(() => {
    setThereIsToken(token !== null);
  }, [token]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    setToken(accessToken);
    setThereIsToken(accessToken !== null);
    setConfirmingToken(false);
  }, []);

  if (confirmingToken) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<PrivateRouteValidator allowNavigation={thereIsToken} />}
        >
          <Route path="/*" element={<PrivateRouter />}></Route>
        </Route>
        <Route
          element={<PublicRouteValidator allowNavigation={!thereIsToken} />}
        >
          <Route path="/auth/*" element={<PublicRouter />}></Route>
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
