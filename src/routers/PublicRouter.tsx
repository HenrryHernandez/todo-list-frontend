import { Route, Routes } from "react-router-dom";

import { Login } from "../containers/auth/login/Login";
import { Register } from "../containers/auth/register/Register";

export const PublicRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>

      <Route
        path="*"
        element={
          <>
            <p>Not found</p>
          </>
        }
      />
    </Routes>
  );
};
