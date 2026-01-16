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

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginChoice />} />
        <Route path="/signup" element={<SignupChoice />} />

        {/* Admin Login */}
        <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/auth/admin-login" element={<AdminLogin />} />

        {/* Voter Login */}
        <Route path="/login/voter" element={<VoterLogin />} />
        <Route path="/auth/voter-login" element={<VoterLogin />} />

        {/* Admin Signup */}
        <Route path="/signup/admin" element={<AdminSignup />} />
        <Route path="/auth/admin-signup" element={<AdminSignup />} />

        {/* Voter Signup */}
        <Route path="/signup/voter" element={<VoterSignup />} />
        <Route path="/auth/voter-signup" element={<VoterSignup />} />

        {/* Dashboards */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/voter/dashboard" element={<VoterDashboard />} />
      </Routes>
    </div>
  );
}
