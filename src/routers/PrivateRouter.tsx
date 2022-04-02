import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { LoadingContext } from "../contexts/LoadingContext";

import { Sidebar } from "../components/Sidebar";

import { Dashboard } from "../containers/dashboard/Dashboard";

import { useInit } from "../hooks/useInit";

export const PrivateRouter = () => {
  const { setIsLoading } = useContext(LoadingContext);
  const { init } = useInit();

  const initApp = async () => {
    setIsLoading(true);

    await init();

    setIsLoading(false);
  };

  useEffect(() => {
    initApp();
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
