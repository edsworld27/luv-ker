"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Mode = "signin" | "signup";

export default function AccountPage() {
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMessage(null);
    // No backend wired yet — show a friendly placeholder.
    setTimeout(() => {
      setMessage(
        mode === "signin"
          ? "Customer accounts launch with our Shopify checkout integration. For now, please reach out to felicia@luvandker.com if you need help with an order."
          : "Thanks — accounts go live with our Shopify integration. We'll email you when sign-up opens. Until then you can checkout as a guest with no friction.",
      );
      setBusy(false);
    }, 600);
  }

  const isSignIn = mode === "signin";

  return (
    <>
      <Navbar />
      <main className="w-full pt-20 sm:pt-24">
        <section className="w-full bg-brand-black">
          <div className="w-full max-w-md mx-auto px-6 sm:px-8 py-14 sm:py-20">
            <div className="flex items-center gap-3 mb-5">
              <div className="adinkra-line w-10" />
              <span className="text-xs tracking-[0.28em] uppercase text-brand-amber">Account</span>
            </div>
            <h1 className="font-display font-bold text-brand-cream text-3xl sm:text-4xl xl:text-5xl leading-tight mb-3">
              {isSignIn ? "Welcome back" : "Create your account"}
            </h1>
            <p className="text-brand-cream/65 leading-relaxed mb-8">
              {isSignIn
                ? "Sign in to view your orders, manage subscriptions, and check gift card balances."
                : "Create an account to track orders, save your favourites, and join the Odo community."}
            </p>

            {/* Tabs */}
            <div className="grid grid-cols-2 mb-8 rounded-xl bg-brand-black-card p-1 border border-white/5">
              <button
                onClick={() => { setMode("signin"); setMessage(null); }}
                className={`py-2.5 rounded-lg text-sm font-medium transition-colors ${isSignIn ? "bg-brand-orange text-white" : "text-brand-cream/55 hover:text-brand-cream"}`}
              >
                Log in
              </button>
              <button
                onClick={() => { setMode("signup"); setMessage(null); }}
                className={`py-2.5 rounded-lg text-sm font-medium transition-colors ${!isSignIn ? "bg-brand-orange text-white" : "text-brand-cream/55 hover:text-brand-cream"}`}
              >
                Sign up
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isSignIn && (
                <div>
                  <label className="block text-[11px] tracking-[0.22em] uppercase text-brand-cream/50 mb-2">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your name"
                    className="w-full bg-brand-black-card border border-white/10 rounded-xl px-4 py-3.5 text-sm text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-orange/40 transition-colors"
                  />
                </div>
              )}
              <div>
                <label className="block text-[11px] tracking-[0.22em] uppercase text-brand-cream/50 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="w-full bg-brand-black-card border border-white/10 rounded-xl px-4 py-3.5 text-sm text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-orange/40 transition-colors"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-[11px] tracking-[0.22em] uppercase text-brand-cream/50">Password</label>
                  {isSignIn && (
                    <a href="#" className="text-[11px] text-brand-orange hover:underline">Forgot?</a>
                  )}
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}
                  placeholder={isSignIn ? "Your password" : "At least 8 characters"}
                  className="w-full bg-brand-black-card border border-white/10 rounded-xl px-4 py-3.5 text-sm text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-orange/40 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={busy}
                className="w-full py-4 rounded-xl bg-brand-orange hover:bg-brand-orange-light disabled:opacity-50 text-white text-sm font-semibold tracking-wide shadow-lg shadow-brand-orange/15 transition-all hover:-translate-y-0.5 disabled:hover:translate-y-0"
              >
                {busy ? "Working…" : isSignIn ? "Log in" : "Create account"}
              </button>
            </form>

            {message && (
              <div className="mt-5 p-4 rounded-xl bg-brand-amber/10 border border-brand-amber/25 text-sm text-brand-cream/80 leading-relaxed">
                {message}
              </div>
            )}

            <p className="text-xs text-brand-cream/40 mt-6 text-center">
              By continuing you agree to our{" "}
              <a href="/privacy" className="text-brand-cream/60 hover:underline">Privacy Policy</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
