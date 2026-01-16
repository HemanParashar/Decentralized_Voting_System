import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        
        <Link to="/" className="font-bold">
          Decentralized Voting
        </Link>

        <nav className="space-x-4">
          <Link to="/login" className="text-sm text-slate-600">
            Login
          </Link>
          <Link to="/signup" className="text-sm text-sky-600 font-medium">
            Sign Up
          </Link>
        </nav>

      </div>
    </header>
  );
}
