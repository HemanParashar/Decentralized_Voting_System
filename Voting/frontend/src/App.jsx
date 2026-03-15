import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import LoginChoice from "./Pages/LoginChoice";
import SignupChoice from "./Pages/SignupChoice";

import AdminLogin from "./Pages/AdminLogin";
import VoterLogin from "./Pages/VoterLogin";

import AdminSignup from "./Pages/AdminSignup";
import VoterSignup from "./Pages/VoterSignup";

import AdminDashboard from "./Pages/AdminDashboard";
import VoterDashboard from "./Pages/VoterDashboard";

import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Routes>

        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginChoice />} />
        <Route path="/signup" element={<SignupChoice />} />

        {/* Login */}
        <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/login/voter" element={<VoterLogin />} />

        {/* Signup */}
        <Route path="/signup/admin" element={<AdminSignup />} />
        <Route path="/signup/voter" element={<VoterSignup />} />

        {/* Admin Dashboard */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Voter Dashboard */}
        <Route
          path="/voter/dashboard"
          element={
            <ProtectedRoute role="voter">
              <VoterDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </div>
  );
}