import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          {/* Logo Circle */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 
                          flex items-center justify-center text-white font-extrabold text-lg shadow-md">
            DV
          </div>

          {/* Brand Text */}
          <div>
            <h1 className="text-lg font-extrabold text-slate-900 group-hover:text-sky-600 transition">
              Decentralized Voting
            </h1>
           
          </div>
        </Link>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg border border-slate-300 text-sm font-medium 
                       text-slate-700 hover:bg-slate-100 transition"
          >
            Sign In
          </Link>

          <Link
            to="/signup"
            className="px-4 py-2 rounded-lg bg-sky-600 text-white text-sm font-semibold 
                       hover:bg-sky-700 shadow-sm transition"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </header>
  );
}
