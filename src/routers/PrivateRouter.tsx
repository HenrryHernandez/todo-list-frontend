import { Route, Routes } from "react-router-dom";

import { Dashboard } from "../containers/dashboard/Dashboard";

export const PrivateRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
    </Routes>
  );
};
