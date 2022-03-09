import React from "react";

import { useAuth } from "../contexts/authContext";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const ListRoutes = () => {
  const { signed } = useAuth();
  const component = signed ? <AppRoutes /> : <AuthRoutes />;

  return component;
};
export default ListRoutes;
