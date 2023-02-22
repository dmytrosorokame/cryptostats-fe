import React, { PropsWithChildren, ReactFragment } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectCurrentUser } from "../slices/auth.slice";

const ProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useAppSelector((state) => selectCurrentUser(state));

  return user ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
