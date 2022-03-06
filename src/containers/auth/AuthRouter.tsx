import { Routes, Route } from "react-router-dom";

import { Login } from "./login/Login";
import { Register } from "./register/Register";

export const AuthRouter = () => {
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
