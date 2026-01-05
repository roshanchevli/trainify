"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function SignUpPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [role, setRole] = useState("client");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   if (session === "trainer") {
  //     router.push("/trainer/dashboard");
  //   } else {
  //     router.push("/");
  //   }
  // }, [status, session, router]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Signup failed");
        return;
      }

      if (session === "trainer") {
        router.push("/trainer/dashboard");
        return;
      }
      router.push("/signin");
    } catch (err) {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-slate-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-blue-600">Trainify</h1>
          <p className="text-gray-500 text-sm mt-1">
            Create your account to get started
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 px-4 py-2 text-gray-700 border rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 text-gray-700 border rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 text-gray-700 border rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-400 mt-1">Minimum 6 characters</p>
          </div>
          <div>
            <label className="block text-sm text-gray-700 font-medium mb-2">
              Register as
            </label>

            <div className="flex gap-4">
              <label className="flex text-gray-500 items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="client"
                  checked={role === "client"}
                  onChange={(e) => setRole(e.target.value)}
                />
                Client
              </label>

              <label className="flex text-gray-500 items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="trainer"
                  checked={role === "trainer"}
                  onChange={(e) => setRole(e.target.value)}
                />
                Trainer
              </label>
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center mt-2">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 
                       text-white py-2 rounded-lg font-medium 
                       transition disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-blue-600 font-medium hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
