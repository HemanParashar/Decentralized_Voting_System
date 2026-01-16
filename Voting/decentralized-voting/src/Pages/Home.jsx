import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <Header />

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left */}
          <div>
            <div className="mb-6">
              <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-indigo-600">
                  Decentralized
                </span>{" "}
                <span className="text-slate-900">Voting</span>
              </h1>
              <p className="mt-2 text-slate-500 text-sm">
                Secure • Transparent • Verifiable
              </p>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-xl">
              A secure digital voting platform that simulates blockchain-style
              audit trails and displays real-time election results. Built with
              modern web technologies to ensure transparency, integrity, and
              trust.
            </p>

            <div className="flex gap-4">
              <Link
                to="/login"
                className="px-8 py-3 rounded-xl bg-sky-600 text-white font-semibold shadow-md hover:bg-sky-700 hover:shadow-lg transition"
              >
                Get Started
              </Link>

              <button className="px-8 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-white hover:shadow transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <InfoCard
              title="Why this project?"
              desc="Demonstrates secure voting principles, auditability, and real-time results for academic and demo purposes."
            />
            <InfoCard
              title="MVP Features"
              desc="Admin-managed elections, one-vote-per-voter rule, secure authentication, and live result updates."
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Core Concepts Behind Secure Voting
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard
              title="Secure Authentication"
              img="https://images.unsplash.com/photo-1556155092-8707de31f9c4"
              desc="Only authorized voters and administrators can access the system using secure login mechanisms."
            />
            <FeatureCard
              title="Audit Trail Integrity"
              img="https://images.unsplash.com/photo-1639322537504-6427a16b0a28"
              desc="Each vote is hashed and logged, making any tampering detectable and ensuring transparency."
            />
            <FeatureCard
              title="Real-time Results"
              img="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              desc="Votes are counted instantly and results are updated live to build voter trust."
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            How the Voting System Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <StepCard step="1" title="Login">
              Voters and admins authenticate securely.
            </StepCard>
            <StepCard step="2" title="Vote">
              Each voter casts exactly one vote per election.
            </StepCard>
            <StepCard step="3" title="Verify">
              Votes are hashed and added to an immutable audit trail.
            </StepCard>
            <StepCard step="4" title="Results">
              Results are displayed live and transparently.
            </StepCard>
          </div>
        </div>
      </section>

      {/* FOOTER */}
     {/* FOOTER */}
<footer className="relative bg-slate-950 text-slate-300">
  {/* Top Gradient Line */}
  <div className="h-1 w-full bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500" />

  <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
    
    {/* BRAND */}
    <div>
      <h3 className="text-2xl font-extrabold tracking-tight">
        <span className="text-white">Decentralized</span>{" "}
        <span className="text-sky-500">Voting</span>
      </h3>
      <p className="text-sm text-slate-400 mt-4 leading-relaxed max-w-sm">
        A secure, transparent, and verifiable digital voting system designed
        for modern elections and academic demonstrations.
      </p>
    </div>

    {/* QUICK LINKS */}
    <div>
      <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
        Quick Links
      </h4>
      <ul className="space-y-3 text-sm">
        <li>
          <Link to="/login" className="hover:text-sky-400 transition">
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className="hover:text-sky-400 transition">
            Sign Up
          </Link>
        </li>
        <li>
          <span className="hover:text-sky-400 transition cursor-pointer">
            Project Info
          </span>
        </li>
      </ul>
    </div>

    {/* CONNECT */}
    <div>
      <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
        Connect
      </h4>

      <div className="flex items-center gap-5 mb-6">
        {/* Twitter */}
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 flex items-center justify-center rounded-full
                     bg-slate-800 hover:bg-sky-500
                     transition-all duration-300
                     hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/40"
        >
          <TwitterIcon />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 flex items-center justify-center rounded-full
                     bg-slate-800 hover:bg-pink-500
                     transition-all duration-300
                     hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/40"
        >
          <InstagramIcon />
        </a>
      </div>

      <p className="text-sm text-slate-400">
        Built by{" "}
        <span className="text-white font-medium">Heman Parashar</span>
      </p>
    </div>
  </div>

  {/* BOTTOM BAR */}
  <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
    © 2025 Decentralized Voting System. All rights reserved.
  </div>
</footer>

    </div>
  );
}

/* ---------- Components ---------- */

function InfoCard({ title, desc }) {
  return (
    <div className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function FeatureCard({ title, img, desc }) {
  return (
    <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border hover:shadow-md transition">
      <img src={img} alt={title} className="h-44 w-full object-cover" />
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

function StepCard({ step, title, children }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
      <div className="text-sky-600 text-3xl font-bold mb-2">{step}</div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-slate-600">{children}</p>
    </div>
  );
}

/* ---------- Icons ---------- */

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04A4.28 4.28 0 0016.11 4c-2.38 0-4.3 1.92-4.3 4.29 0 .34.04.67.11.99A12.17 12.17 0 013 5.16a4.29 4.29 0 001.33 5.72 4.24 4.24 0 01-1.95-.54v.05c0 2.06 1.46 3.78 3.4 4.17a4.3 4.3 0 01-1.94.07 4.3 4.3 0 004.01 2.98A8.6 8.6 0 012 19.54a12.14 12.14 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.37-.02-.56A8.7 8.7 0 0022.46 6z" />
    </svg>
  );
}
