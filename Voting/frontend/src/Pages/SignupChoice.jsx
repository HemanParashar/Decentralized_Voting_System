import React from "react";
import { useNavigate } from "react-router-dom";

export default function SignupChoice() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-4xl">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-slate-800">
            Create an Account
          </h1>
          <p className="text-slate-500 mt-2">
            Choose your role to get started
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* ADMIN SIGNUP */}
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
                Register as Admin
              </h2>

              <p className="text-slate-600 text-sm">
                Create and manage elections, control voting phases,
                and view detailed audit trails and results.
              </p>
            </div>

            <button
              onClick={() => navigate("/auth/admin-signup")}
              className="mt-auto pt-6 text-sky-600 font-semibold hover:underline"
            >
              Sign up as Admin →
            </button>
          </div>

          {/* VOTER SIGNUP */}
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
                Register as Voter
              </h2>

              <p className="text-slate-600 text-sm">
                Sign up to securely participate in elections and
                cast your vote during active voting periods.
              </p>
            </div>

            <button
              onClick={() => navigate("/auth/voter-signup")}
              className="mt-auto pt-6 text-emerald-600 font-semibold hover:underline"
            >
              Sign up as Voter →
            </button>
          </div>

        </div>

        {/* FOOTER */}
        <div className="text-center mt-10 text-sm text-slate-500">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-sky-600 font-semibold cursor-pointer hover:underline"
          >
            Sign in here
          </span>
        </div>

      </div>
    </div>
  );
}
