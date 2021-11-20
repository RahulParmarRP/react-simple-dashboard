import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getCurrentUser } from "../../utils";

export const PrivateRoute = () => {
  const isLoggedIn = getCurrentUser();
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
