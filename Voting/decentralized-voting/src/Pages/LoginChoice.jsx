import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginChoice() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-4xl">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-slate-800">
            Welcome Back
          </h1>
          <p className="text-slate-500 mt-2">
            Select your role to continue securely
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* ADMIN CARD */}
          <div
            className="
              flex flex-col h-full rounded-xl border border-slate-200
              p-8 transition-all duration-300
              hover:border-sky-500 hover:shadow-xl hover:-translate-y-1
            "
          >
            <div>
              <span className="text-xs font-semibold text-sky-600">
                ADMIN
              </span>

              <h2 className="text-2xl font-bold mt-2 mb-3">
                Election Administrator
              </h2>

              <p className="text-slate-600 text-sm">
                Create and manage elections, monitor voting activity,
                and view real-time results with full audit access.
              </p>
            </div>

            {/* BOTTOM BUTTON */}
            <button
              onClick={() => navigate("/auth/admin-login")}
              className="mt-auto pt-6 text-sky-600 font-semibold hover:underline"
            >
              Login as Admin →
            </button>
          </div>

          {/* VOTER CARD */}
          <div
            className="
              flex flex-col h-full rounded-xl border border-slate-200
              p-8 transition-all duration-300
              hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1
            "
          >
            <div>
              <span className="text-xs font-semibold text-emerald-600">
                VOTER
              </span>

              <h2 className="text-2xl font-bold mt-2 mb-3">
                Cast Your Vote
              </h2>

              <p className="text-slate-600 text-sm">
                Securely log in to participate in active elections and
                cast your vote with full transparency.
              </p>
            </div>

            {/* BOTTOM BUTTON */}
            <button
              onClick={() => navigate("/auth/voter-login")}
              className="mt-auto pt-6 text-emerald-600 font-semibold hover:underline"
            >
              Login as Voter →
            </button>
          </div>

        </div>

        {/* FOOTER */}
        <div className="text-center mt-10 text-sm text-slate-500">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-sky-600 font-semibold cursor-pointer hover:underline"
          >
            Sign up here
          </span>
        </div>

      </div>
    </div>
  );
}
