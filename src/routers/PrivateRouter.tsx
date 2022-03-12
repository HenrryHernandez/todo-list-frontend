import { Route, Routes } from "react-router-dom";

import { Sidebar } from "../components/Sidebar";

import { Dashboard } from "../containers/dashboard/Dashboard";

export const PrivateRouter = () => {
  return (
    <div style={{ height: "100%" }}>
      <Sidebar />

      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
};
