import React, { useState } from "react";
import { loginUser } from "../api/auth";
import { useNavigate, Link } from "react-router-dom";

export default function AdminLogin() {
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

      // ✅ FIX 1: correct response path
      const user = res.data.user;

      if (!user) {
        throw new Error("No user in response");
      }

      if (user.role !== "admin") {
        setError("Not authorized as admin");
        return;
      }

      // ✅ FIX 2: SAVE USER
      localStorage.setItem("user", JSON.stringify(user));

      // ✅ FIX 3: navigate
      navigate("/admin/dashboard");

    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-blue-100">
      <form onSubmit={submit} className="bg-white p-8 rounded-xl shadow w-[400px]">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          {loading ? "Logging in..." : "Login as Admin"}
        </button>

        <p className="text-sm mt-4 text-center">
          Don’t have an account?{" "}
          <Link to="/signup/admin" className="text-blue-600">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
