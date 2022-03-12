import { Navigate, Outlet } from "react-router-dom";

export const PublicRouteValidator = ({ allowNavigation }: any) => {
  return allowNavigation ? <Outlet /> : <Navigate to="/" replace />;
};
