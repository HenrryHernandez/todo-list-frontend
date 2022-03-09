import { Navigate, Outlet } from "react-router-dom";

export const PrivateRouter = ({ allowNavigation }: any) => {
  return allowNavigation ? <Outlet /> : <Navigate to="/auth/login" replace />;
};
