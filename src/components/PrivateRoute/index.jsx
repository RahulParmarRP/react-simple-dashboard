import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getCurrentUser } from "../../utils";

export const PrivateRoute = () => {
  debugger;
  const isLoggedIn = getCurrentUser(); // determine if authorized, from context or however you're doing it
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};
// export const TestPrivateRoute = (props) => {
//     return <Routes {...props}></Routes>
// }

export default PrivateRoute;
