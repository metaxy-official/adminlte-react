import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import Updater from "@app/store/reducers/updaters";

const PrivateRoute = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  return isLoggedIn ? (
    <>
      <Updater />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
