import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    return <Navigate to="/login/voter" />;
  }

  if (role && storedUser.role !== role) {
    return <Navigate to="/login/voter" />;
  }

  return children;
}