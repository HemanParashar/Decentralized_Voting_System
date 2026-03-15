import React, { useState } from "react";
import { loginUser } from "../api/auth";
import { useNavigate, Link } from "react-router-dom";

export default function VoterLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    const res = await loginUser(form);

    const user = res.data.user;   // ✅ IMPORTANT

    if (user.role === "voter") {

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      navigate("/voter/dashboard");

    } else {
      setError("Not authorized as voter");
    }

  } catch (err) {
    console.log(err);   // ⭐ see real error
    setError("Server error");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-emerald-50 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-slate-800">
            Voter Login
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Login to cast your vote securely
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-2.5 rounded-lg font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login as Voter"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-slate-500">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-emerald-600 font-medium hover:underline"
          >
            Sign up here
          </Link>
        </div>
      </div>
    </div>
  );
}
