import React from "react";
import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import SignUpPage from "../pages/sign-up";
import ProtectedRoute from "./protected-route";

const Routes: React.FC = () => {
  return (
    <ReactRouterRoutes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </ReactRouterRoutes>
  );
};

export default Routes;
