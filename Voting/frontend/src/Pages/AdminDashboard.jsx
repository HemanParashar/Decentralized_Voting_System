import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  // 🔒 Protect route
 useEffect(() => {
  if (!user || user.role !== "admin") {
    navigate("/login/admin");
  }
}, [navigate, user]);


  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-slate-100">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-slate-900 text-slate-200 flex flex-col">
        <div className="px-6 py-5 text-xl font-extrabold border-b border-slate-700">
          Admin Panel
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <SidebarItem label="Dashboard" />
          <SidebarItem label="Elections" />
          <SidebarItem label="Results" />
          <SidebarItem label="Audit Trail" />
        </nav>

        <div className="px-4 py-4 border-t border-slate-700">
          <button
            onClick={logout}
            className="w-full px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1">
        
        {/* TOP BAR */}
        <header className="bg-white px-6 py-4 shadow-sm flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
          <div className="text-sm text-slate-600">
            Logged in as <span className="font-semibold">{user?.name}</span>
          </div>
        </header>

        {/* CONTENT */}
        <section className="p-6 space-y-8">

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard title="Total Elections" value="5" />
            <StatCard title="Active Elections" value="2" />
            <StatCard title="Registered Voters" value="128" />
            <StatCard title="Total Votes Cast" value="94" />
          </div>

          {/* ELECTION TABLE */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="px-6 py-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold">Elections</h2>
              <button className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700">
                + Create Election
              </button>
            </div>

            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="text-left px-6 py-3">Election Name</th>
                  <th className="text-left px-6 py-3">Status</th>
                  <th className="text-left px-6 py-3">Total Votes</th>
                  <th className="text-left px-6 py-3">Action</th>
                </tr>
              </thead>

              <tbody>
                <ElectionRow
                  name="Student Council 2025"
                  status="Active"
                  votes="42"
                />
                <ElectionRow
                  name="Class Representative"
                  status="Completed"
                  votes="52"
                />
              </tbody>
            </table>
          </div>

        </section>
      </main>
    </div>
  );
}

/* ---------- Components ---------- */

function SidebarItem({ label }) {
  return (
    <div className="px-4 py-2 rounded-md hover:bg-slate-800 cursor-pointer">
      {label}
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="text-3xl font-bold text-slate-800 mt-2">{value}</p>
    </div>
  );
}

function ElectionRow({ name, status, votes }) {
  return (
    <tr className="border-t">
      <td className="px-6 py-4">{name}</td>
      <td className="px-6 py-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-slate-200 text-slate-700"
          }`}
        >
          {status}
        </span>
      </td>
      <td className="px-6 py-4">{votes}</td>
      <td className="px-6 py-4">
        <button className="text-sky-600 hover:underline">View</button>
      </td>
    </tr>
  );
}
