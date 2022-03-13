import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Sidebar } from "../components/Sidebar";

import { Dashboard } from "../containers/dashboard/Dashboard";

import { useInit } from "../hooks/useInit";

export const PrivateRouter = () => {
  const { init } = useInit();

  useEffect(() => {
    init();
  }, []);

  return (
    <div style={{ height: "100%" }}>
      <Sidebar />

      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
};
