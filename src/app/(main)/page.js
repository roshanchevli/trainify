"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function HomePage() {
  const { data: session } = useSession();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Simple Fitness Management Platform
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
            Manage clients, track users, and control everything from a powerful
            admin dashboard. Built with modern web technologies.
          </p>
          {!session && (
            <div className="flex justify-center gap-4">
              <Link
                href="/signup"
                className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700"
              >
                Create Account
              </Link>
              <Link
                href="/signin"
                className="border border-gray-300 px-6 py-3 rounded-md text-lg text-gray-700 hover:bg-gray-100"
              >
                Login
              </Link>
            </div>
          )}
        </section>

        {/* Features Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Secure Authentication"
              description="Role-based authentication using NextAuth with admin and client access."
            />

            <FeatureCard
              title="Admin Dashboard"
              description="Powerful admin panel to manage users, roles, and platform activity."
            />

            <FeatureCard
              title="Modern Tech Stack"
              description="Built with Next.js App Router, MongoDB, and Tailwind CSS."
            />
          </div>
        </section>
      </main>
    </div>
  );
}

/* Feature Card Component */
function FeatureCard({ title, description }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
