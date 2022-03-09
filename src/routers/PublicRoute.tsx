import { Navigate, Outlet } from "react-router-dom";

export const PublicRouter = ({ allowNavigation }: any) => {
  return allowNavigation ? <Outlet /> : <Navigate to="/" replace />;
};
