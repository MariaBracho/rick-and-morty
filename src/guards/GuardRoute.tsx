import { PublicRoutes } from "@/constant-definitions";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const GuardRoute: React.FC<{ isUser: boolean }> = ({ isUser }) => {
  return isUser ? <Outlet /> : <Navigate replace to={PublicRoutes} />;
};

export default GuardRoute;
