import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";   // ✅ FIXED import

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      
      {/* HEADER */}
      <Header />

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT */}
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

          {/* RIGHT */}
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
              desc="Only authorized voters and administrators can access the system."
            />
            <FeatureCard
              title="Audit Trail Integrity"
              img="https://images.unsplash.com/photo-1639322537504-6427a16b0a28"
              desc="Each vote is hashed and logged, making tampering detectable."
            />
            <FeatureCard
              title="Real-time Results"
              img="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              desc="Votes are counted instantly and results update live."
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
              Each voter casts exactly one vote.
            </StepCard>
            <StepCard step="3" title="Verify">
              Votes are hashed into an audit trail.
            </StepCard>
            <StepCard step="4" title="Results">
              Results are displayed live and transparently.
            </StepCard>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-300 py-10 text-center text-sm">
        © 2025 Decentralized Voting System. All rights reserved.
      </footer>
    </div>
  );
}

/* ---------- SUB COMPONENTS ---------- */

function InfoCard({ title, desc }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow border">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-slate-600 text-sm">{desc}</p>
    </div>
  );
}

function FeatureCard({ title, img, desc }) {
  return (
    <div className="bg-slate-50 rounded-2xl overflow-hidden shadow border">
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
    <div className="bg-white p-6 rounded-2xl shadow border">
      <div className="text-sky-600 text-3xl font-bold mb-2">{step}</div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-slate-600">{children}</p>
    </div>
  );
}
