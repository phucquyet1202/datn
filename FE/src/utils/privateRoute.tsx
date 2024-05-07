import { Navigate, Outlet, useLocation } from "react-router-dom";

import { LoadingAll } from "../pages";
import { useInfoAccountQuery } from "../api";

export const PrivateRoute = ({ allowedRoles }: { allowedRoles: string[] }) => {
  const location = useLocation();

  const { data, isSuccess, isFetching, isLoading } = useInfoAccountQuery("");

  if (isLoading || isFetching) {
    return <LoadingAll />;
  }

  if ((isSuccess || data) && allowedRoles.includes(data?.data?.role)) {
    return <Outlet />;
  } else if (isSuccess && data) {
    if (location.pathname === "/auth") {
      return <Navigate to="/" state={{ from: location }} replace />;
    } else {
      return <Navigate to="/unauthorized" state={{ from: location }} replace />;
    }
  } else if (location.pathname === "/auth") {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
};
